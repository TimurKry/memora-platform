"use client";

import { useState } from "react";

type AutoLevel = "AUTO" | "SEMI" | "MANUAL" | "PLANNED";

type LifecycleStep = {
  id: string;
  n: string;
  title: string;
  titleDe?: string;
  who: string;
  why: string;
  depends?: string;
  auto: AutoLevel;
  branch?: "all" | "burial" | "cremation" | "bureau";
};

const AUTO_LABELS: Record<AutoLevel, string> = {
  AUTO: "Авто",
  SEMI: "Частично",
  MANUAL: "Вручную",
  PLANNED: "План",
};

function AutoBadge({ level }: { level: AutoLevel }) {
  const styles: Record<AutoLevel, string> = {
    AUTO: "border-memora-accent bg-memora-accent text-white",
    SEMI: "border-memora-accent bg-white text-memora-text",
    MANUAL: "border-memora-border bg-[#faf9f6] text-memora-muted",
    PLANNED: "border-dashed border-memora-muted bg-white text-memora-muted",
  };
  return (
    <span
      className={`inline-block shrink-0 border px-2 py-0.5 text-[8px] uppercase tracking-[0.14em] ${styles[level]}`}
      title={AUTO_LABELS[level]}
    >
      {level}
    </span>
  );
}

function StepCard({ step, highlight }: { step: LifecycleStep; highlight?: boolean }) {
  return (
    <article
      className={`border border-memora-border p-5 ${highlight ? "border-memora-accent bg-[#faf9f6]" : "bg-white"}`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="font-serif text-[1.1rem] leading-none text-memora-muted">{step.n}</span>
        <AutoBadge level={step.auto} />
      </div>
      <h3 className="font-serif text-[1rem] leading-snug">{step.title}</h3>
      {step.titleDe ? (
        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-memora-muted">{step.titleDe}</p>
      ) : null}
      <dl className="mt-4 space-y-2 text-[12px] leading-relaxed">
        <div>
          <dt className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">Кто</dt>
          <dd className="mt-0.5 text-memora-text">{step.who}</dd>
        </div>
        <div>
          <dt className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">Зачем</dt>
          <dd className="mt-0.5 text-memora-muted">{step.why}</dd>
        </div>
        {step.depends ? (
          <div>
            <dt className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">После</dt>
            <dd className="mt-0.5 text-memora-muted">{step.depends}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}

const PRE_ORDER: LifecycleStep[] = [
  {
    id: "death",
    n: "0",
    title: "Смерть, Leichenschau",
    titleDe: "Todesbescheinigung",
    who: "Врач",
    why: "Медицинское свидетельство — без него процесс невозможен",
    auto: "MANUAL",
  },
  {
    id: "family",
    n: "1",
    title: "Первые решения семьи",
    who: "Семья",
    why: "Завещание, страховка, семейная могила, Vorsorge",
    depends: "Параллельно с поиском бюро",
    auto: "PLANNED",
  },
  {
    id: "search",
    n: "2",
    title: "Поиск бюро",
    titleDe: "Bestatter finden",
    who: "Семья",
    why: "Выбор главного координатора всего процесса",
    depends: "После смерти",
    auto: "AUTO",
  },
  {
    id: "consult",
    n: "3",
    title: "Консультация",
    titleDe: "Beratungsgespräch",
    who: "Бюро + семья",
    why: "Сбор пожеланий, оценка объёма, доверие",
    depends: "До договора",
    auto: "SEMI",
  },
  {
    id: "order",
    n: "4",
    title: "Договор — заказ принят",
    titleDe: "Auftrag · Case в CRM",
    who: "Бюро + семья",
    why: "Юридическое начало работы, фиксация услуг",
    depends: "Старт workflow бюро",
    auto: "SEMI",
    branch: "bureau",
  },
];

const BUREAU_STEPS: LifecycleStep[] = [
  {
    id: "b5",
    n: "5",
    title: "Назначение координатора",
    who: "Бюро",
    why: "Единая точка контакта для семьи",
    depends: "Заказ принят",
    auto: "AUTO",
    branch: "bureau",
  },
  {
    id: "b6",
    n: "6",
    title: "Онбординг семьи",
    who: "Бюро → семья",
    why: "Портал, чек-лист пожеланий без лишних звонков",
    depends: "Шаг 5",
    auto: "SEMI",
    branch: "bureau",
  },
  {
    id: "b7",
    n: "7",
    title: "Перевозка тела",
    titleDe: "Überführung",
    who: "Бюро, перевозчик",
    why: "Дом → морг / бюро — обязательный логистический шаг",
    depends: "Todesbescheinigung",
    auto: "SEMI",
    branch: "bureau",
  },
  {
    id: "b8",
    n: "8",
    title: "Подготовка тела",
    who: "Морг / бюро",
    why: "По желанию семьи и традиции",
    depends: "Шаг 7",
    auto: "MANUAL",
    branch: "bureau",
  },
  {
    id: "b9",
    n: "9",
    title: "Проверка мед. свидетельства",
    who: "Координатор бюро",
    why: "Блокер для регистрации смерти",
    depends: "Врач (этап 0)",
    auto: "SEMI",
    branch: "bureau",
  },
  {
    id: "b10",
    n: "10",
    title: "Регистрация смерти",
    titleDe: "Sterbeurkunde",
    who: "Бюро → Standesamt",
    why: "Официальный документ для кладбища и крематория",
    depends: "Шаг 9",
    auto: "MANUAL",
    branch: "bureau",
  },
  {
    id: "b11",
    n: "11",
    title: "Тип погребения",
    titleDe: "Erdbestattung / Feuerbestattung",
    who: "Семья + бюро",
    why: "Определяет ветку: захоронение или кремация",
    depends: "Консультация",
    auto: "SEMI",
    branch: "bureau",
  },
];

const PARALLEL_AFTER_11: LifecycleStep[] = [
  {
    id: "b12",
    n: "12",
    title: "Планирование церемонии",
    who: "Бюро + семья",
    why: "Дата, время, место, музыка, текст",
    depends: "Шаг 11 · параллельно",
    auto: "SEMI",
    branch: "bureau",
  },
  {
    id: "b13",
    n: "13",
    title: "Гроб / урна",
    titleDe: "Sarg / Urne",
    who: "Бюро → marketplace",
    why: "Обязательный товар",
    depends: "Шаг 11 · параллельно",
    auto: "PLANNED",
    branch: "bureau",
  },
  {
    id: "b14",
    n: "14",
    title: "Партнёры",
    who: "Бюро",
    why: "Флорист, музыка, транспорт, кейтеринг",
    depends: "Шаг 12 · параллельно",
    auto: "PLANNED",
    branch: "bureau",
  },
];

const BURIAL_BRANCH: LifecycleStep[] = [
  {
    id: "b15a",
    n: "15a",
    title: "Кладбище",
    titleDe: "Friedhof",
    who: "Бюро → администрация",
    why: "Участок, семейная могила, слот, разрешения",
    depends: "Sterbeurkunde",
    auto: "SEMI",
    branch: "burial",
  },
];

const CREMATION_BRANCH: LifecycleStep[] = [
  {
    id: "b15b",
    n: "15b",
    title: "Zweite Leichenschau",
    who: "Второй врач",
    why: "Обязательно для кремации в Германии",
    depends: "Решение о кремации",
    auto: "MANUAL",
    branch: "cremation",
  },
  {
    id: "b16b",
    n: "16b",
    title: "Слот крематория",
    titleDe: "Krematorium",
    who: "Бюро → крематорий",
    why: "Бронирование пропускной способности",
    depends: "15b",
    auto: "PLANNED",
    branch: "cremation",
  },
  {
    id: "b17b",
    n: "17b",
    title: "Кремация → урна",
    who: "Крематорий",
    why: "Урна затем захороняется на кладбище",
    depends: "16b",
    auto: "MANUAL",
    branch: "cremation",
  },
];

const CLOSING: LifecycleStep[] = [
  {
    id: "b18",
    n: "18",
    title: "Счёт и оплата",
    who: "Бюро + семья",
    why: "Прозрачная смета, онлайн-оплата",
    depends: "Основные решения",
    auto: "PLANNED",
    branch: "bureau",
  },
  {
    id: "b19",
    n: "19",
    title: "День похорон",
    titleDe: "Trauerfeier → Beisetzung",
    who: "Все участники",
    why: "Транспорт → церемония → захоронение",
    depends: "Все слоты согласованы",
    auto: "SEMI",
    branch: "bureau",
  },
  {
    id: "b20",
    n: "20",
    title: "Закрытие Case",
    who: "Бюро",
    why: "Архив документов, финальный статус",
    depends: "День похорон",
    auto: "AUTO",
    branch: "bureau",
  },
  {
    id: "b21",
    n: "21",
    title: "Aftercare",
    who: "Семья + партнёры",
    why: "Памятник, уход, цифровая память",
    depends: "После закрытия",
    auto: "PLANNED",
    branch: "bureau",
  },
];

const FUNERAL_DAY: LifecycleStep[] = [
  {
    id: "d1",
    n: "19.1",
    title: "Транспорт к месту",
    who: "Перевозчик",
    why: "Сбор участников, маршрут",
    auto: "SEMI",
  },
  {
    id: "d2",
    n: "19.2",
    title: "Церемония / прощание",
    who: "Семья, бюро",
    why: "Кульминация процесса",
    auto: "MANUAL",
  },
  {
    id: "d3",
    n: "19.3",
    title: "Захоронение / урна",
    who: "Кладбище",
    why: "Финальное действие дня",
    auto: "SEMI",
  },
];

type Stream = { name: string; nameDe: string; today: string; goal: string };

const STREAMS: Stream[] = [
  { name: "Документы", nameDe: "Dokumente", today: "Чек-лист, загрузка", goal: "Workflow + гос. API" },
  { name: "Планирование", nameDe: "Planung", today: "Календарь, задачи", goal: "Автосогласование слотов" },
  { name: "Поставки", nameDe: "Lieferungen", today: "Ручной заказ", goal: "Marketplace" },
  { name: "Площадка", nameDe: "Friedhof / Krematorium", today: "Запрос вручную", goal: "Онлайн-бронирование" },
];

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-memora-muted" aria-hidden>
      <span className="h-6 w-px bg-memora-border" />
      <span className="text-[10px]">↓</span>
      {label ? <span className="mt-1 text-[8px] uppercase tracking-[0.12em]">{label}</span> : null}
    </div>
  );
}

function BranchTabs({
  active,
  onChange,
}: {
  active: "burial" | "cremation" | "both";
  onChange: (v: "burial" | "cremation" | "both") => void;
}) {
  const btn = (id: "burial" | "cremation" | "both", label: string) => (
    <button
      type="button"
      onClick={() => onChange(id)}
      className={`border px-4 py-2 text-[9px] uppercase tracking-[0.14em] transition-colors ${
        active === id
          ? "border-memora-accent bg-memora-accent text-white"
          : "border-memora-border bg-white text-memora-muted hover:border-memora-text"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex flex-wrap gap-2">
      {btn("both", "Обе ветки")}
      {btn("burial", "Захоронение")}
      {btn("cremation", "Кремация")}
    </div>
  );
}

export function LifecycleInfographic() {
  const [branch, setBranch] = useState<"burial" | "cremation" | "both">("both");

  return (
    <main className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-24">
      <header className="mb-20 max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.24em] text-memora-muted">MEMORA · Service Lifecycle</p>
        <h1 className="mt-6 font-serif text-[2rem] leading-[1.15] tracking-[-0.02em] lg:text-[2.5rem]">
          Жизненный цикл услуги
        </h1>
        <p className="mt-5 text-[14px] leading-relaxed text-memora-muted">
          От первого контакта до закрытия дела — что делает похоронное бюро, в каком порядке, зачем и
          автоматизировано ли это в MEMORA сегодня.
        </p>
      </header>

      <section className="mb-16 border border-memora-border p-6 lg:p-8">
        <h2 className="text-[10px] uppercase tracking-[0.18em] text-memora-muted">Легенда</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {(["AUTO", "SEMI", "MANUAL", "PLANNED"] as AutoLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <AutoBadge level={level} />
              <span className="text-[11px] text-memora-muted">{AUTO_LABELS[level]}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-memora-muted">
          <strong className="font-normal text-memora-text">Заказ принят</strong> — шаг 4: подписанный договор и Case
          в CRM. Дальше координирует бюро.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-2 font-serif text-xl">До заказа</h2>
        <p className="mb-10 text-[13px] text-memora-muted">Семья → выбор бюро → консультация → договор</p>
        <div className="grid gap-0 md:grid-cols-5 md:gap-4">
          {PRE_ORDER.map((step, i) => (
            <div key={step.id} className="flex flex-col">
              <StepCard step={step} highlight={step.id === "order"} />
              {i < PRE_ORDER.length - 1 ? <FlowArrow /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 border-y border-memora-border py-16">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-xl">Похоронное бюро — основной workflow</h2>
            <p className="mt-2 max-w-lg text-[13px] text-memora-muted">
              После шага 4 бюро ведёт процесс. Шаги 12–14 и ветки кладбища/крематория идут параллельно после
              решения о типе погребения (11).
            </p>
          </div>
          <BranchTabs active={branch} onChange={setBranch} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUREAU_STEPS.map((step) => (
            <StepCard key={step.id} step={step} highlight={step.id === "b11"} />
          ))}
        </div>

        <FlowArrow label="После шага 11 — параллельные потоки" />

        <div className="grid gap-4 sm:grid-cols-3">
          {PARALLEL_AFTER_11.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        <FlowArrow label="Ветвление по типу погребения" />

        <div className="grid gap-8 lg:grid-cols-2">
          {(branch === "both" || branch === "burial") && (
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-[0.16em] text-memora-muted">
                Ветка · Захоронение
              </h3>
              <div className="space-y-4">
                {BURIAL_BRANCH.map((step) => (
                  <StepCard key={step.id} step={step} />
                ))}
              </div>
            </div>
          )}
          {(branch === "both" || branch === "cremation") && (
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-[0.16em] text-memora-muted">
                Ветка · Кремация
              </h3>
              <div className="space-y-4">
                {CREMATION_BRANCH.map((step) => (
                  <StepCard key={step.id} step={step} />
                ))}
                <p className="text-[11px] text-memora-muted">→ затем урна на кладбище (шаг 15a)</p>
                {branch === "cremation" ? BURIAL_BRANCH.map((step) => <StepCard key={step.id} step={step} />) : null}
              </div>
            </div>
          )}
        </div>

        <FlowArrow label="Сходятся к оплате и дню похорон" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLOSING.map((step) => (
            <StepCard key={step.id} step={step} highlight={step.id === "b19"} />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-2 font-serif text-xl">Параллельные потоки внутри бюро</h2>
        <p className="mb-10 text-[13px] text-memora-muted">После решения о типе погребения — четыре линии работы</p>
        <div className="grid gap-px border border-memora-border bg-memora-border sm:grid-cols-2 lg:grid-cols-4">
          {STREAMS.map((stream) => (
            <div key={stream.name} className="bg-white p-6">
              <h3 className="font-serif text-[1rem]">{stream.name}</h3>
              <p className="text-[9px] uppercase tracking-[0.12em] text-memora-muted">{stream.nameDe}</p>
              <dl className="mt-4 space-y-3 text-[12px]">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.12em] text-memora-muted">Сегодня</dt>
                  <dd className="mt-1 text-memora-text">{stream.today}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">Цель</dt>
                  <dd className="mt-1 text-memora-muted">{stream.goal}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-memora-muted">↓ все потоки сходятся в день похорон</p>
      </section>

      <section className="mb-24">
        <h2 className="mb-10 font-serif text-xl">День похорон — микро-цепочка</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
          {FUNERAL_DAY.map((step, i) => (
            <div key={step.id} className="flex flex-1 flex-col">
              <StepCard step={step} />
              {i < FUNERAL_DAY.length - 1 ? (
                <div className="hidden flex-1 items-center justify-center md:flex" aria-hidden>
                  <span className="text-memora-muted">→</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-memora-border pt-16 text-center">
        <p className="font-serif text-[1.25rem] tracking-[0.2em]">MEMORA</p>
        <p className="mt-3 text-[12px] text-memora-muted">
          Операционная система мировой ритуальной индустрии
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-memora-muted">
          Operating System for the Global Memorial Industry
        </p>
      </footer>
    </main>
  );
}
