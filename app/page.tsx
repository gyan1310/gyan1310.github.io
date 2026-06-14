import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const CALENDLY_URL = "https://calendly.com/your-handle/30min";
const EMAIL = "gyanchand20203063@gmail.com";
const LINKEDIN = "https://linkedin.com/in/gyan1310";
const PHONE = "+91 7376617804";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Process />
        <About />
        <SampleWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          <span className="text-emerald-600 dark:text-emerald-400">/</span> Gyan Sharma
        </Link>
        <nav className="hidden gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100">Services</a>
          <a href="#process" className="hover:text-zinc-900 dark:hover:text-zinc-100">Process</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">About</a>
          <a href="#faq" className="hover:text-zinc-900 dark:hover:text-zinc-100">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            Accepting new clients
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            I code, backtest, and deploy your{" "}
            <span className="text-emerald-600 dark:text-emerald-400">trading strategies.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Bring me your idea — a setup on a chart, a rulebook, a paper you read.
            I turn it into clean Python, run rigorous backtests on real
            tick-level data, and (if you want) deploy it live across your broker
            of choice with full risk controls.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
            >
              Book a 30-min discovery call →
            </a>
            <a
              href="#services"
              className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              See packages
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-4 md:gap-10">
            <Stat label="Broker integrations" value="Zerodha · Dhan · Fyers" />
            <Stat label="Backtest engine" value="Tick-level, sub-ms" />
            <Stat label="Languages" value="Python · SQL" />
            <Stat label="Background" value="Production OMS/RMS" />
          </div>
        </div>
      </div>
      <BgGrid />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="mt-1 text-zinc-800 dark:text-zinc-200">{value}</div>
    </div>
  );
}

function BgGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 text-zinc-900 opacity-[0.04] dark:text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function Services() {
  const tiers = [
    {
      name: "Strategy Coding",
      price: "Starting ₹4,999",
      description:
        "I take your strategy rulebook and turn it into clean, documented Python. You get the code, a README, and a small sanity-check on sample data.",
      features: [
        "Up to 1 strategy, single instrument",
        "Clean Python + comments",
        "Git repo with sample data run",
        "1 round of revisions",
      ],
      cta: "Start here",
      highlight: false,
    },
    {
      name: "Coding + Backtest Report",
      price: "Starting ₹9,999",
      description:
        "Everything in Tier 1, plus a full backtest on years of real market data. You get a PDF report with equity curve, drawdown, win rate, Sharpe, and trade log.",
      features: [
        "Multi-year backtest on tick/1-min data",
        "Equity curve, drawdown, Sharpe, win rate",
        "Trade-by-trade CSV export",
        "Parameter sensitivity analysis",
      ],
      cta: "Most popular",
      highlight: true,
    },
    {
      name: "Live Algo Deployment",
      price: "Custom quote",
      description:
        "Everything above, plus I deploy the strategy live on your broker account with OMS routing, RMS guardrails, monitoring, and Telegram alerts.",
      features: [
        "Live deployment on your broker",
        "Pre-trade & post-trade risk controls",
        "Real-time monitoring + Telegram alerts",
        "30 days of post-launch support",
      ],
      cta: "Get a quote",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="border-b border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Services"
          title="Three ways to work together"
          subtitle="Pick the depth you need — from just the code, to a fully running live system."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-xl border p-6 transition ${
                t.highlight
                  ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/5"
                  : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white dark:bg-emerald-500 dark:text-zinc-950">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
                {t.price}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-block w-full rounded-md py-2.5 text-center text-sm font-medium transition ${
                  t.highlight
                    ? "bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
                    : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Discovery call",
      body: "We get on a 30-min call. You walk me through your strategy idea — chart setup, indicators, entry/exit rules. I tell you what's feasible and what data I'll need.",
    },
    {
      n: "02",
      title: "Spec & quote",
      body: "I send you a written spec — exact rules, data sources, timeline, and a fixed price. No work starts until you approve.",
    },
    {
      n: "03",
      title: "Code & backtest",
      body: "I build the strategy, run it on historical data, and iterate with you on edge cases. You see commits and intermediate results.",
    },
    {
      n: "04",
      title: "Report or deploy",
      body: "Final deliverable: either a polished backtest report, or a live-running system on your broker account with monitoring and alerts.",
    },
  ];

  return (
    <section id="process" className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Process"
          title="How an engagement runs"
          subtitle="Straightforward, written-down, no surprises on pricing."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <div className="font-mono text-sm text-emerald-600 dark:text-emerald-400">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
        <div className="md:col-span-2">
          <SectionHeading
            eyebrow="About me"
            title="Hi, I'm Gyan."
            subtitle="Engineer by training, trader by curiosity, builder by habit."
          />
          <Image
            src="/avatar.jpg"
            alt="Gyan Sharma"
            width={128}
            height={128}
            priority
            className="mt-8 h-32 w-32 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
          />
        </div>
        <div className="space-y-6 text-zinc-700 dark:text-zinc-300 md:col-span-3">
          <p className="leading-relaxed">
            I graduated in <strong className="text-zinc-900 dark:text-white">Mechanical
            Engineering from NIT Allahabad</strong> in 2024 — but I spent most
            of my time there learning Python, building tools, and getting
            obsessed with how markets work. By my last year I&apos;d already
            shipped an end-to-end trading workflow as an intern, and I knew the
            mechanical degree was going to stay on the wall.
          </p>
          <p className="leading-relaxed">
            Today I&apos;m a <strong className="text-zinc-900 dark:text-white">Trading
            Infrastructure Developer at Mudraksh and McShaw Tech</strong>,
            where I build the systems that power professional algo desks —
            order management, risk management, real-time market data pipelines
            with sub-millisecond latency. The boring, hard parts: failover
            execution servers, emergency square-off systems talking directly to
            broker APIs, automated risk controls that catch exposure breaches
            before they hit P&amp;L.
          </p>
          <p className="leading-relaxed">
            I started offering this service because of a pattern I kept
            noticing — retail traders with smart, well-thought-out strategies
            sitting in spreadsheets and chart annotations, never getting
            backtested properly, let alone deployed live. The infrastructure
            gap between &quot;I have an edge&quot; and &quot;it&apos;s running
            on my account&quot; is exactly what I do for a living.
          </p>
          <p className="leading-relaxed">
            When I&apos;m not writing code, I&apos;m usually reading market
            microstructure papers, tinkering with my own strategies, or
            watching the Indian options market do something weird around expiry.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Credibility label="Currently" value="Trading Infra @ Mudraksh" />
            <Credibility label="Education" value="B.Tech, NIT Allahabad" />
            <Credibility label="Stack" value="Python, SQL, AWS, Docker" />
            <Credibility label="Based in" value="Noida, India" />
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-300 px-4 py-2 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              LinkedIn →
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md border border-zinc-300 px-4 py-2 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Say hi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </div>
      <div className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">{value}</div>
    </div>
  );
}

function SampleWork() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Sample work"
          title="What a deliverable looks like"
          subtitle="Anonymized snapshots from past engagements."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Opening Range Breakout — Nifty 50",
              metric: "Sharpe 1.42",
              body: "5-year backtest, 1-min bars, slippage modeled. Includes parameter sensitivity grid.",
            },
            {
              title: "Mean Reversion — Bank Nifty Options",
              metric: "Max DD -8.3%",
              body: "Delta-neutral structure with dynamic hedge. Deployed live on Zerodha Kite Connect.",
            },
            {
              title: "Momentum Rotation — Stocks",
              metric: "CAGR 31%",
              body: "Weekly rebalanced top-N momentum basket with regime filter. Backtest report only.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  Case study
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {c.metric}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Note: past backtest results don&apos;t guarantee live performance. All
          engagements include realistic slippage and cost modeling.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    {
      q: "What data do you use for backtests?",
      a: "Tick-level or 1-min bar data from reliable sources (NSE/BSE for Indian markets). For options, I use the broker-level tick feed where possible. Costs and slippage are always modeled.",
    },
    {
      q: "Which brokers do you support for live deployment?",
      a: "Zerodha Kite Connect, Dhan, Fyers, Angel SmartAPI out of the box. Other broker APIs available on request.",
    },
    {
      q: "Do you take a cut of profits?",
      a: "No. I charge a flat fee for the engagement. Your P&L is yours. I'm a service provider, not a fund manager.",
    },
    {
      q: "Will you sign an NDA?",
      a: "Yes — strategy IP stays with you. Standard mutual NDA available before we exchange details.",
    },
    {
      q: "What if my strategy doesn't work?",
      a: "You'll know from the backtest before going live. If the numbers don't justify deployment, I'll tell you straight. That honesty is the point of hiring me.",
    },
  ];
  return (
    <section id="faq" className="border-b border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions" subtitle="" />
        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {qs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-zinc-900 dark:text-zinc-100">
                {item.q}
                <span className="ml-4 text-emerald-600 transition group-open:rotate-45 dark:text-emerald-400">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-zinc-200 bg-gradient-to-b from-white to-emerald-50 dark:border-zinc-900 dark:from-zinc-950 dark:to-emerald-950/20"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Have a strategy in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Book a free 30-minute call. We&apos;ll discuss your idea, I&apos;ll
          tell you what&apos;s feasible, and you&apos;ll leave with a clear next
          step — no pressure to commit.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-emerald-600 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
          >
            Book a discovery call →
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-md border border-zinc-300 px-8 py-3.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Email instead
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <a href={`mailto:${EMAIL}`} className="hover:text-emerald-600 dark:hover:text-emerald-400">
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <span>{PHONE}</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <div>© {new Date().getFullYear()} Gyan Sharma. Built in Noida.</div>
        <div className="flex gap-6">
          <a href={`mailto:${EMAIL}`} className="hover:text-zinc-700 dark:hover:text-zinc-300">
            Email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <a href="#top" className="hover:text-zinc-700 dark:hover:text-zinc-300">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
