"use client";

import { useMemo, useState } from "react";

type AutoLevel = "AUTO" | "SEMI" | "MANUAL" | "PLANNED";
type IntegrationStatus = "live" | "bridge" | "planned" | "none";

type MemoraIntegration = {
  status: IntegrationStatus;
  module: string;
  how: string;
  actors?: string;
};

type LifecycleStep = {
  id: string;
  n: string;
  title: string;
  titleDe?: string;
  who: string;
  why: string;
  depends?: string;
  auto: AutoLevel;
  memora: MemoraIntegration;
  branch?: "all" | "burial" | "cremation" | "bureau";
};

const AUTO_LABELS: Record<AutoLevel, string> = {
  AUTO: "Авто",
  SEMI: "Частично",
  MANUAL: "Вручную",
  PLANNED: "План",
};

const INTEGRATION_LABELS: Record<IntegrationStatus, string> = {
  live: "В проде",
  bridge: "Мост",
  planned: "Roadmap",
  none: "Вне платформы",
};

const INTEGRATION_STYLES: Record<
  IntegrationStatus,
  { card: string; strip: string; badge: string; arrow: string }
> = {
  live: {
    card: "ring-1 ring-[#2563eb]/25",
    strip: "border-l-[3px] border-l-[#2563eb] bg-[#e8f0fc]",
    badge: "border-[#2563eb] bg-[#2563eb] text-white",
    arrow: "text-[#2563eb]",
  },
  bridge: {
    card: "ring-1 ring-[#3d5a80]/20",
    strip: "border-l-[3px] border-dashed border-l-[#3d5a80] bg-[#eef3f9]",
    badge: "border-[#3d5a80] bg-[#eef3f9] text-[#1e3a5f]",
    arrow: "text-[#3d5a80]",
  },
  planned: {
    card: "ring-1 ring-[#94a3b8]/25",
    strip: "border-l-[3px] border-dashed border-l-[#94a3b8] bg-[#f4f6f9]",
    badge: "border-dashed border-[#94a3b8] bg-white text-[#64748b]",
    arrow: "text-[#94a3b8]",
  },
  none: {
    card: "",
    strip: "border-l-[3px] border-l-memora-border bg-[#faf9f6]",
    badge: "border-memora-border bg-white text-memora-muted",
    arrow: "text-memora-border",
  },
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
    >
      {level}
    </span>
  );
}

function IntegrationBadge({ status }: { status: IntegrationStatus }) {
  if (status === "none") return null;
  return (
    <span
      className={`inline-block shrink-0 border px-2 py-0.5 text-[8px] uppercase tracking-[0.14em] ${INTEGRATION_STYLES[status].badge}`}
    >
      MEMORA · {INTEGRATION_LABELS[status]}
    </span>
  );
}

function MemoraBlock({ memora }: { memora: MemoraIntegration }) {
  if (memora.status === "none") {
    return (
      <div className={`mt-4 border-l-[3px] border-l-memora-border bg-[#faf9f6] p-3 ${INTEGRATION_STYLES.none.strip}`}>
        <p className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">MEMORA</p>
        <p className="mt-1 text-[11px] text-memora-muted">Пока вне платформы — точка роста</p>
      </div>
    );
  }
  const s = INTEGRATION_STYLES[memora.status];
  return (
    <div className={`mt-4 p-3 ${s.strip}`}>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#1e3a5f]">MEMORA</p>
        <IntegrationBadge status={memora.status} />
      </div>
      <p className="mt-2 text-[11px] font-medium text-[#1e3a5f]">{memora.module}</p>
      <p className="mt-1 text-[11px] leading-relaxed text-[#334155]">{memora.how}</p>
      {memora.actors ? (
        <p className="mt-2 text-[10px] text-[#64748b]">
          <span className="uppercase tracking-[0.1em]">Связь: </span>
          {memora.actors}
        </p>
      ) : null}
    </div>
  );
}

function StepCard({ step, highlight }: { step: LifecycleStep; highlight?: boolean }) {
  const hasIntegration = step.memora.status !== "none";
  const ring = hasIntegration ? INTEGRATION_STYLES[step.memora.status].card : "";

  return (
    <article
      className={`border border-memora-border p-5 ${highlight ? "border-memora-accent bg-[#faf9f6]" : "bg-white"} ${ring}`}
    >
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="font-serif text-[1.1rem] leading-none text-memora-muted">{step.n}</span>
        <div className="flex flex-wrap gap-1">
          <IntegrationBadge status={step.memora.status} />
          <AutoBadge level={step.auto} />
        </div>
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
      <MemoraBlock memora={step.memora} />
    </article>
  );
}

function FlowArrow({
  label,
  viaMemora,
  status = "bridge",
}: {
  label?: string;
  viaMemora?: boolean;
  status?: IntegrationStatus;
}) {
  const color = viaMemora ? INTEGRATION_STYLES[status].arrow : "text-memora-muted";
  const line = viaMemora ? "bg-[#3d5a80]/40" : "bg-memora-border";

  return (
    <div className={`flex flex-col items-center py-2 ${color}`} aria-hidden>
      <span className={`h-6 w-px ${line}`} />
      {viaMemora ? (
        <span className="mt-1 rounded border border-current px-1.5 py-0.5 text-[7px] uppercase tracking-[0.12em]">
          через MEMORA
        </span>
      ) : (
        <span className="text-[10px]">↓</span>
      )}
      {label ? <span className="mt-1 max-w-[120px] text-center text-[8px] uppercase tracking-[0.1em] text-memora-muted">{label}</span> : null}
    </div>
  );
}

function IntegrationHubMap() {
  const modules = [
    { id: "pub", label: "web-public", sub: "B2C поиск", angle: -90 },
    { id: "tenant", label: "web-tenant", sub: "White Label CRM", angle: -30 },
    { id: "cem", label: "Cemetery", sub: "Карты · слоты", angle: 30 },
    { id: "cre", label: "Crematorium", sub: "Очередь · бронь", angle: 90 },
    { id: "mkt", label: "Marketplace", sub: "Товары", angle: 150 },
    { id: "partner", label: "Partner", sub: "Флористы · транспорт", angle: -150 },
  ];

  const cx = 320;
  const cy = 200;
  const r = 130;

  return (
    <svg viewBox="0 0 640 400" className="mx-auto w-full max-w-[640px]" aria-label="Точки интеграции MEMORA">
      {modules.map((m) => {
        const rad = (m.angle * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        return (
          <g key={m.id}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#3d5a80" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
            <rect x={x - 52} y={y - 22} width={104} height={44} fill="#eef3f9" stroke="#3d5a80" strokeWidth="1" />
            <text x={x} y={y - 4} textAnchor="middle" fill="#1e3a5f" fontSize="9" fontFamily="system-ui">
              {m.label}
            </text>
            <text x={x} y={y + 10} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="system-ui">
              {m.sub}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={44} fill="#2563eb" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="11" letterSpacing="0.2em" fontFamily="Georgia">
        MEMORA
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="7" fontFamily="system-ui">
        единый хаб данных
      </text>
    </svg>
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
    memora: { status: "planned", module: "Ratgeber + чек-лист", how: "Информирование семьи что делать в первые часы", actors: "Семья ← контент MEMORA" },
  },
  {
    id: "family",
    n: "1",
    title: "Первые решения семьи",
    who: "Семья",
    why: "Завещание, страховка, семейная могила, Vorsorge",
    depends: "Параллельно с поиском бюро",
    auto: "PLANNED",
    memora: { status: "planned", module: "Vorsorge / Ratgeber", how: "Справочник решений, ссылки на семейную могилу на карте", actors: "Семья ↔ web-public" },
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
    memora: { status: "live", module: "web-public · /suchen", how: "Поиск бюро и кладбищ, Mapbox, сравнение", actors: "Семья → лид → бюро" },
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
    memora: { status: "bridge", module: "web-tenant · запись", how: "Онлайн-запись на консультацию, форма пожеланий → лид в CRM", actors: "Семья → сайт бюро (MEMORA) → координатор" },
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
    memora: { status: "bridge", module: "CRM · Case", how: "Создание Case — единый ID дела для всех модулей", actors: "Бюро ↔ MEMORA ↔ все участники" },
  },
];

const BUREAU_STEPS: LifecycleStep[] = [
  {
    id: "b5", n: "5", title: "Назначение координатора", who: "Бюро", why: "Единая точка контакта для семьи", depends: "Заказ принят", auto: "AUTO", branch: "bureau",
    memora: { status: "bridge", module: "CRM · assign", how: "Назначение ответственного, уведомление в Case timeline", actors: "Бюро (внутри MEMORA)" },
  },
  {
    id: "b6", n: "6", title: "Онбординг семьи", who: "Бюро → семья", why: "Портал, чек-лист пожеланий", depends: "Шаг 5", auto: "SEMI", branch: "bureau",
    memora: { status: "planned", module: "Family Portal", how: "Приглашение в портал, чек-лист, загрузка документов семьёй", actors: "Семья ↔ Case" },
  },
  {
    id: "b7", n: "7", title: "Перевозка тела", titleDe: "Überführung", who: "Бюро, перевозчик", why: "Дом → морг / бюро", depends: "Todesbescheinigung", auto: "SEMI", branch: "bureau",
    memora: { status: "bridge", module: "Case · задача", how: "Задача перевозки, статус, уведомление перевозчику", actors: "Бюро → партнёр-транспорт (через MEMORA)" },
  },
  {
    id: "b8", n: "8", title: "Подготовка тела", who: "Морг / бюро", why: "По желанию семьи", depends: "Шаг 7", auto: "MANUAL", branch: "bureau",
    memora: { status: "planned", module: "Case · статус", how: "Синхронизация статуса с моргом", actors: "Морг → MEMORA → семья" },
  },
  {
    id: "b9", n: "9", title: "Проверка мед. свидетельства", who: "Координатор", why: "Блокер для регистрации", depends: "Этап 0", auto: "SEMI", branch: "bureau",
    memora: { status: "bridge", module: "Documents", how: "Чек-лист, загрузка скана Todesbescheinigung в Case", actors: "Бюро ↔ файлы в MEMORA" },
  },
  {
    id: "b10", n: "10", title: "Регистрация смерти", titleDe: "Sterbeurkunde", who: "Бюро → Standesamt", why: "Официальный документ", depends: "Шаг 9", auto: "MANUAL", branch: "bureau",
    memora: { status: "planned", module: "Doc Workflow + Gov API", how: "Шаблоны заявлений, трекинг статуса, будущий API Standesamt", actors: "Бюро ↔ MEMORA ↔ госорганы" },
  },
  {
    id: "b11", n: "11", title: "Тип погребения", titleDe: "Erdbestattung / Feuerbestattung", who: "Семья + бюро", why: "Ветка процесса", depends: "Консультация", auto: "SEMI", branch: "bureau",
    memora: { status: "bridge", module: "Case · workflow engine", how: "Поле в Case запускает ветку захоронение/кремация", actors: "Решение в MEMORA → все модули" },
  },
];

const PARALLEL_AFTER_11: LifecycleStep[] = [
  {
    id: "b12", n: "12", title: "Планирование церемонии", who: "Бюро + семья", why: "Дата, время, место, музыка", depends: "Параллельно", auto: "SEMI", branch: "bureau",
    memora: { status: "bridge", module: "Calendar · web-tenant", how: "Календарь, слоты, согласование с семьёй в портале", actors: "Бюро ↔ семья через MEMORA" },
  },
  {
    id: "b13", n: "13", title: "Гроб / урна", titleDe: "Sarg / Urne", who: "Бюро → marketplace", why: "Обязательный товар", depends: "Параллельно", auto: "PLANNED", branch: "bureau",
    memora: { status: "planned", module: "Marketplace → Case", how: "Заказ из каталога, привязка к Case, комиссия", actors: "Бюро → поставщик (через MEMORA)" },
  },
  {
    id: "b14", n: "14", title: "Партнёры", who: "Бюро", why: "Флорист, музыка, транспорт", depends: "Параллельно", auto: "PLANNED", branch: "bureau",
    memora: { status: "planned", module: "Partner Portal", how: "Заказ к Case: время, место, статус исполнения", actors: "Бюро → флорист/музыка (через MEMORA)" },
  },
];

const BURIAL_BRANCH: LifecycleStep[] = [
  {
    id: "b15a", n: "15a", title: "Кладбище", titleDe: "Friedhof", who: "Бюро → администрация", why: "Участок, слот, разрешения", depends: "Sterbeurkunde", auto: "SEMI", branch: "burial",
    memora: { status: "bridge", module: "Cemetery · Mapbox", how: "Карта, поиск участка, запрос слота кладбищу-tenant", actors: "Бюро ↔ кладбище (только через MEMORA)" },
  },
];

const CREMATION_BRANCH: LifecycleStep[] = [
  {
    id: "b15b", n: "15b", title: "Zweite Leichenschau", who: "Второй врач", why: "Обязательно для кремации", depends: "Решение", auto: "MANUAL", branch: "cremation",
    memora: { status: "planned", module: "Documents", how: "Чек-лист, загрузка протокола второго осмотра", actors: "Бюро ↔ MEMORA" },
  },
  {
    id: "b16b", n: "16b", title: "Слот крематория", titleDe: "Krematorium", who: "Бюро → крематорий", why: "Бронирование", depends: "15b", auto: "PLANNED", branch: "cremation",
    memora: { status: "planned", module: "Crematorium SaaS", how: "Онлайн-слоты, ёмкость, подтверждение в Case", actors: "Бюро ↔ крематорий (через MEMORA)" },
  },
  {
    id: "b17b", n: "17b", title: "Кремация → урна", who: "Крематорий", why: "Урна на кладбище", depends: "16b", auto: "MANUAL", branch: "cremation",
    memora: { status: "planned", module: "Status webhook", how: "Статус «кремация завершена» → Case → кладбище", actors: "Крематорий → MEMORA → бюро + кладбище" },
  },
];

const CLOSING: LifecycleStep[] = [
  {
    id: "b18", n: "18", title: "Счёт и оплата", who: "Бюро + семья", why: "Прозрачная смета", depends: "Решения приняты", auto: "PLANNED", branch: "bureau",
    memora: { status: "planned", module: "Stripe Connect", how: "Смета из Case, оплата семьёй, split бюро/партнёрам", actors: "Семья → MEMORA (платёжный хаб) → бюро" },
  },
  {
    id: "b19", n: "19", title: "День похорон", titleDe: "Trauerfeier", who: "Все", why: "Церемония → захоронение", depends: "Слоты согласованы", auto: "SEMI", branch: "bureau",
    memora: { status: "bridge", module: "Timeline · Mapbox", how: "День-дашборд, маршрут, push-статусы семье", actors: "Все участники → статусы в MEMORA" },
  },
  {
    id: "b20", n: "20", title: "Закрытие Case", who: "Бюро", why: "Архив, финал", depends: "День похорон", auto: "AUTO", branch: "bureau",
    memora: { status: "bridge", module: "CRM · Case Closed", how: "Финальный статус, архив документов, аналитика", actors: "Бюро ↔ MEMORA" },
  },
  {
    id: "b21", n: "21", title: "Aftercare", who: "Семья + партнёры", why: "Памятник, уход, память", depends: "После закрытия", auto: "PLANNED", branch: "bureau",
    memora: { status: "planned", module: "Marketplace · Memorial", how: "Заказ памятника, уход, цифровая страница памяти", actors: "Семья ↔ партнёры через MEMORA" },
  },
];

const FUNERAL_DAY: LifecycleStep[] = [
  { id: "d1", n: "19.1", title: "Транспорт к месту", who: "Перевозчик", why: "Маршрут", auto: "SEMI", memora: { status: "bridge", module: "Mapbox · Case", how: "Маршрут процессии, ETA семье", actors: "Перевозчик → MEMORA → семья" } },
  { id: "d2", n: "19.2", title: "Церемония", who: "Семья", why: "Прощание", auto: "MANUAL", memora: { status: "none", module: "—", how: "Физическая церемония вне цифрового контура" } },
  { id: "d3", n: "19.3", title: "Захоронение / урна", who: "Кладбище", why: "Финал дня", auto: "SEMI", memora: { status: "bridge", module: "Cemetery", how: "Отметка «захоронение завершено» в Case", actors: "Кладбище → MEMORA → семья" } },
];

type Stream = { name: string; nameDe: string; module: string; today: string; goal: string };

const STREAMS: Stream[] = [
  { name: "Документы", nameDe: "Dokumente", module: "Case · Documents", today: "Чек-лист, upload", goal: "Gov API · workflow" },
  { name: "Планирование", nameDe: "Planung", module: "Calendar", today: "Задачи в Case", goal: "Автослоты" },
  { name: "Поставки", nameDe: "Lieferungen", module: "Marketplace", today: "Ручной заказ", goal: "Каталог → Case" },
  { name: "Площадка", nameDe: "Friedhof / Krematorium", module: "Cemetery / Crematorium", today: "Запрос в Case", goal: "API бронирования" },
];

function BranchTabs({ active, onChange }: { active: "burial" | "cremation" | "both"; onChange: (v: "burial" | "cremation" | "both") => void }) {
  const btn = (id: "burial" | "cremation" | "both", label: string) => (
    <button
      type="button"
      onClick={() => onChange(id)}
      className={`border px-4 py-2 text-[9px] uppercase tracking-[0.14em] transition-colors ${
        active === id ? "border-memora-accent bg-memora-accent text-white" : "border-memora-border bg-white text-memora-muted hover:border-memora-text"
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

function filterSteps(steps: LifecycleStep[], integrationOnly: boolean) {
  if (!integrationOnly) return steps;
  return steps.filter((s) => s.memora.status !== "none");
}

export function LifecycleInfographic() {
  const [branch, setBranch] = useState<"burial" | "cremation" | "both">("both");
  const [integrationOnly, setIntegrationOnly] = useState(false);

  const stats = useMemo(() => {
    const all = [...PRE_ORDER, ...BUREAU_STEPS, ...PARALLEL_AFTER_11, ...BURIAL_BRANCH, ...CREMATION_BRANCH, ...CLOSING, ...FUNERAL_DAY];
    return {
      live: all.filter((s) => s.memora.status === "live").length,
      bridge: all.filter((s) => s.memora.status === "bridge").length,
      planned: all.filter((s) => s.memora.status === "planned").length,
    };
  }, []);

  return (
    <main className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-24">
      <header className="mb-16 max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.24em] text-memora-muted">MEMORA · Service Lifecycle</p>
        <h1 className="mt-6 font-serif text-[2rem] leading-[1.15] tracking-[-0.02em] lg:text-[2.5rem]">
          Жизненный цикл и точки интеграции
        </h1>
        <p className="mt-5 text-[14px] leading-relaxed text-memora-muted">
          Где MEMORA уже встроена, где выступает мостом между участниками, и что в roadmap. Все связи идут через
          платформу — не напрямую между сторонами.
        </p>
      </header>

      <section className="mb-16 border border-[#3d5a80]/30 bg-[#f8fafc] p-6 lg:p-10">
        <h2 className="font-serif text-xl text-[#1e3a5f]">Карта модулей MEMORA</h2>
        <p className="mt-2 text-[13px] text-[#475569]">Каждый участник подключается только к центру — не друг к другу</p>
        <div className="mt-8">
          <IntegrationHubMap />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="border border-[#2563eb]/30 bg-[#e8f0fc] p-4">
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#2563eb]">В проде · {stats.live}</p>
            <p className="mt-1 text-[12px] text-[#1e3a5f]">Уже работает на GitHub Pages</p>
          </div>
          <div className="border border-dashed border-[#3d5a80]/50 bg-[#eef3f9] p-4">
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#3d5a80]">Мост · {stats.bridge}</p>
            <p className="mt-1 text-[12px] text-[#334155]">MEMORA связывает стороны, часть вручную</p>
          </div>
          <div className="border border-dashed border-[#94a3b8] bg-[#f4f6f9] p-4">
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#64748b]">Roadmap · {stats.planned}</p>
            <p className="mt-1 text-[12px] text-[#475569]">Следующие интеграции и API</p>
          </div>
        </div>
      </section>

      <section className="mb-16 border border-memora-border p-6 lg:p-8">
        <h2 className="text-[10px] uppercase tracking-[0.18em] text-memora-muted">Легенда</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.12em] text-memora-muted">Автоматизация</p>
            <div className="flex flex-wrap gap-3">
              {(["AUTO", "SEMI", "MANUAL", "PLANNED"] as AutoLevel[]).map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <AutoBadge level={level} />
                  <span className="text-[11px] text-memora-muted">{AUTO_LABELS[level]}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.12em] text-[#3d5a80]">Интеграция MEMORA</p>
            <div className="flex flex-wrap gap-3">
              {(["live", "bridge", "planned"] as IntegrationStatus[]).map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <IntegrationBadge status={status} />
                  <span className="text-[11px] text-memora-muted">{INTEGRATION_LABELS[status]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <label className="mt-6 flex cursor-pointer items-center gap-3 text-[12px] text-memora-muted">
          <input
            type="checkbox"
            checked={integrationOnly}
            onChange={(e) => setIntegrationOnly(e.target.checked)}
            className="h-4 w-4 border-memora-border"
          />
          Показать только этапы с интеграцией MEMORA
        </label>
      </section>

      <section className="mb-24">
        <h2 className="mb-2 font-serif text-xl">До заказа</h2>
        <div className="grid gap-0 md:grid-cols-5 md:gap-4">
          {filterSteps(PRE_ORDER, integrationOnly).map((step, i, arr) => (
            <div key={step.id} className="flex flex-col">
              <StepCard step={step} highlight={step.id === "order"} />
              {i < arr.length - 1 ? <FlowArrow viaMemora={step.memora.status !== "none"} status={step.memora.status === "none" ? "bridge" : step.memora.status} /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 border-y border-memora-border py-16">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-xl">Похоронное бюро — workflow + интеграции</h2>
            <p className="mt-2 max-w-lg text-[13px] text-memora-muted">
              Синие блоки — как именно MEMORA встраивается на каждом шаге
            </p>
          </div>
          <BranchTabs active={branch} onChange={setBranch} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filterSteps(BUREAU_STEPS, integrationOnly).map((step) => (
            <StepCard key={step.id} step={step} highlight={step.id === "b11"} />
          ))}
        </div>

        <FlowArrow label="Параллельные потоки" viaMemora />

        <div className="grid gap-4 sm:grid-cols-3">
          {filterSteps(PARALLEL_AFTER_11, integrationOnly).map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        <FlowArrow label="Ветвление" viaMemora status="bridge" />

        <div className="grid gap-8 lg:grid-cols-2">
          {(branch === "both" || branch === "burial") && (
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-[0.16em] text-[#2563eb]">Захоронение · Cemetery module</h3>
              {filterSteps(BURIAL_BRANCH, integrationOnly).map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
            </div>
          )}
          {(branch === "both" || branch === "cremation") && (
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-[0.16em] text-[#3d5a80]">Кремация · Crematorium module</h3>
              {filterSteps(CREMATION_BRANCH, integrationOnly).map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
              {branch === "cremation" ? filterSteps(BURIAL_BRANCH, integrationOnly).map((step) => <StepCard key={step.id} step={step} />) : null}
            </div>
          )}
        </div>

        <FlowArrow label="Сходятся" viaMemora />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filterSteps(CLOSING, integrationOnly).map((step) => (
            <StepCard key={step.id} step={step} highlight={step.id === "b19"} />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-2 font-serif text-xl">Потоки данных через MEMORA</h2>
        <div className="grid gap-px border border-[#3d5a80]/30 bg-[#3d5a80]/20 sm:grid-cols-2 lg:grid-cols-4">
          {STREAMS.map((stream) => (
            <div key={stream.name} className="bg-[#f8fafc] p-6">
              <p className="text-[9px] uppercase tracking-[0.12em] text-[#2563eb]">{stream.module}</p>
              <h3 className="mt-2 font-serif text-[1rem] text-[#1e3a5f]">{stream.name}</h3>
              <p className="text-[9px] text-memora-muted">{stream.nameDe}</p>
              <dl className="mt-4 space-y-3 text-[12px]">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.12em] text-memora-muted">Сегодня</dt>
                  <dd className="mt-1">{stream.today}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.14em] text-memora-muted">Цель</dt>
                  <dd className="mt-1 text-memora-muted">{stream.goal}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-10 font-serif text-xl">День похорон</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          {filterSteps(FUNERAL_DAY, integrationOnly).map((step, i, arr) => (
            <div key={step.id} className="flex flex-1 flex-col">
              <StepCard step={step} />
              {i < arr.length - 1 ? (
                <div className={`hidden items-center justify-center py-2 md:flex ${INTEGRATION_STYLES[step.memora.status === "none" ? "bridge" : step.memora.status].arrow}`}>
                  <span className="text-[10px] uppercase tracking-[0.1em]">→ через MEMORA →</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-memora-border pt-16 text-center">
        <p className="font-serif text-[1.25rem] tracking-[0.2em]">MEMORA</p>
        <p className="mt-3 text-[12px] text-memora-muted">Мост на каждом этапе · единый Case · единый хаб данных</p>
      </footer>
    </main>
  );
}
