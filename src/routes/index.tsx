import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail, ListChecks, FileText, Sparkles, Copy, RefreshCw, Check, ArrowRight,
  Shield, Zap, Clock, Users, ChevronDown, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowmind — Work Smarter With AI That Gets Things Done" },
      { name: "description", content: "Write better emails, turn goals into plans, and transform meetings into next steps — one AI productivity workspace." },
      { property: "og:title", content: "Flowmind — AI Productivity Suite" },
      { property: "og:description", content: "Smart Email Generator, AI Task Planner and Meeting Notes Summarizer in one workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-float transition hover:opacity-90";
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-xl border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:bg-muted";
const input = "w-full rounded-xl border bg-card px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40";

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Logos />
      <Toolkit />
      <Playground />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-primary-foreground"><Sparkles className="h-4 w-4" /></span>
      Flowmind
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#tools" className="hover:text-foreground">Product</a>
          <a href="#try" className="hover:text-foreground">Try it</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#try" className="hidden text-sm font-medium sm:block">Sign in</a>
          <a href="#try" className={btnPrimary + " py-2"}>Try AI Free</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-glow" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-soft">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> AI that writes, plans and remembers
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Work Smarter With AI That <span className="text-brand">Gets Things Done.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Write better emails, turn goals into actionable plans, and transform meetings into clear next steps — all with one intelligent productivity workspace.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#try" className={btnPrimary}>Try AI Free <ArrowRight className="h-4 w-4" /></a>
          <a href="#tools" className={btnGhost}>See how it works</a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-5 text-xs text-muted-foreground">
          {[[Zap, "Saves 8+ hrs/week"], [Shield, "Secure AI"], [Users, "Built for teams"]].map(([I, t]) => {
            const Icon = I as typeof Zap;
            return <span key={t as string} className="flex items-center gap-1.5"><Icon className="h-3.5 w-3.5 text-primary" />{t as string}</span>;
          })}
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -left-6 top-10 z-10 hidden animate-floaty rounded-2xl border bg-card p-3 text-left shadow-float md:block">
        <div className="flex items-center gap-2 text-xs font-semibold"><Mail className="h-4 w-4 text-primary" /> Email drafted</div>
        <div className="mt-1 text-xs text-muted-foreground">“Follow-up: Q4 proposal” · 3s</div>
      </div>
      <div className="absolute -right-6 bottom-16 z-10 hidden animate-floaty rounded-2xl border bg-card p-3 text-left shadow-float md:block" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 text-xs font-semibold"><Check className="h-4 w-4 text-success" /> 5 action items found</div>
        <div className="mt-1 text-xs text-muted-foreground">Weekly sync · assigned to 3 people</div>
      </div>
      <div className="overflow-hidden rounded-3xl border bg-card text-left shadow-float">
        <div className="flex items-center gap-1.5 border-b bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" /><span className="h-2.5 w-2.5 rounded-full bg-accent" /><span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 text-xs text-muted-foreground">app.flowmind.ai/workspace</span>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-4">
          {[["24", "Emails generated"], ["12", "Tasks completed"], ["5", "Meetings summarized"], ["8.5h", "Time saved"]].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-surface p-4">
              <div className="font-display text-2xl font-bold">{n}</div>
              <div className="text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
          <div className="rounded-2xl border p-4 md:col-span-2">
            <div className="mb-3 text-sm font-semibold">Today's plan</div>
            {["Finalize pitch deck", "Reply to investor email", "Prep sprint review"].map((t, i) => (
              <div key={t} className="flex items-center gap-2 py-1.5 text-sm">
                <span className={`grid h-4 w-4 place-items-center rounded border ${i === 0 ? "bg-primary text-primary-foreground" : ""}`}>{i === 0 && <Check className="h-3 w-3" />}</span>
                <span className={i === 0 ? "text-muted-foreground line-through" : ""}>{t}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border p-4 md:col-span-2">
            <div className="mb-3 text-sm font-semibold">Latest summary</div>
            <p className="text-sm text-muted-foreground">Team agreed to ship v2 on Nov 14. Sara owns QA, Mike owns release notes.</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">2 decisions</span>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">4 actions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <section className="border-y bg-surface py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by 20,000+ professionals at</p>
      <div className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-4 font-display text-lg font-semibold text-muted-foreground/70">
        {["Northwind", "Acme", "Lumen", "Vertex", "Orbit", "Kinetic"].map((n) => <span key={n}>{n}</span>)}
      </div>
    </section>
  );
}

const tools = [
  { icon: Mail, title: "Smart Email Generator", desc: "Turn a few words into polished, professional emails in seconds.", points: ["5 tone presets", "Edit, copy, regenerate", "Context-aware drafts"] },
  { icon: ListChecks, title: "AI Task Planner", desc: "Break big goals into prioritized steps with deadlines and effort.", points: ["Smart priorities", "Effort estimates", "Dependencies"] },
  { icon: FileText, title: "Meeting Notes Summarizer", desc: "Transform transcripts into decisions, owners and next steps.", points: ["Executive summary", "Action items + owners", "Export & share"] },
];

function Toolkit() {
  return (
    <section id="tools" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="The toolkit" title="Your AI Productivity Toolkit" sub="Three focused tools. One workspace that keeps everything moving." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tools.map(({ icon: Icon, title, desc, points }) => (
          <div key={title} className="group rounded-3xl border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-float">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <ul className="mt-5 space-y-2">
              {points.map((p) => <li key={p} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-success" />{p}</li>)}
            </ul>
            <a href="#try" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Try it <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </div>
  );
}

/* ---------- Playground ---------- */

function useFakeAI() {
  const [loading, setLoading] = useState(false);
  const run = (fn: () => void) => {
    setLoading(true);
    setTimeout(() => { fn(); setLoading(false); }, 900);
  };
  return { loading, run };
}

function Playground() {
  const [tab, setTab] = useState(0);
  return (
    <section id="try" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead eyebrow="Try it now" title="See the AI in action" sub="Pick a tool, give it a little context, and watch it work." />
        <div className="mx-auto mt-10 flex w-fit gap-1 rounded-2xl border bg-card p-1 shadow-soft">
          {tools.map(({ icon: Icon, title }, i) => (
            <button key={title} onClick={() => setTab(i)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${tab === i ? "bg-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              <Icon className="h-4 w-4" /><span className="hidden sm:inline">{title}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border bg-card p-6 shadow-float md:p-8">
          {tab === 0 && <EmailTool />}
          {tab === 1 && <PlannerTool />}
          {tab === 2 && <NotesTool />}
        </div>
      </div>
    </section>
  );
}

function AiBadge() {
  return <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"><Sparkles className="h-3 w-3" /> AI generated</span>;
}

function EmailTool() {
  const [to, setTo] = useState("Sarah, our client");
  const [purpose, setPurpose] = useState("Follow up on the proposal we sent last week");
  const [tone, setTone] = useState("Professional");
  const [out, setOut] = useState("");
  const [copied, setCopied] = useState(false);
  const { loading, run } = useFakeAI();
  const name = to.split(/[ ,]/)[0] || "there";
  const openers: Record<string, string> = {
    Professional: `Dear ${name},\n\nI hope this message finds you well.`,
    Friendly: `Hi ${name}!\n\nHope your week is going great.`,
    Concise: `Hi ${name},`,
    Persuasive: `Hi ${name},\n\nI wanted to share why now is the perfect moment to move forward.`,
    Formal: `Dear ${name},\n\nI am writing with regard to the following matter.`,
  };
  const gen = () => run(() => setOut(`Subject: ${purpose.slice(0, 48)}\n\n${openers[tone]} I'm reaching out to ${purpose.charAt(0).toLowerCase() + purpose.slice(1)}.\n\nPlease let me know if you have any questions or if there's anything I can clarify. I'd be glad to set up a quick call at your convenience.\n\nBest regards,\nAlex`));
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <Field label="Who is the email for?"><input className={input} value={to} onChange={(e) => setTo(e.target.value)} /></Field>
        <Field label="What's the purpose?"><textarea rows={3} className={input} value={purpose} onChange={(e) => setPurpose(e.target.value)} /></Field>
        <Field label="Tone">
          <div className="flex flex-wrap gap-2">
            {Object.keys(openers).map((t) => (
              <button key={t} onClick={() => setTone(t)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${tone === t ? "border-primary bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-muted"}`}>{t}</button>
            ))}
          </div>
        </Field>
        <button onClick={gen} disabled={loading} className={btnPrimary + " w-full"}>{loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Generate Email</button>
      </div>
      <Output empty={!out} loading={loading} emptyText="Your polished email will appear here.">
        <div className="mb-3 flex items-center justify-between">
          <AiBadge />
          <div className="flex gap-2">
            <button onClick={() => { navigator.clipboard.writeText(out); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="rounded-lg border p-2 hover:bg-muted" aria-label="Copy">{copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}</button>
            <button onClick={gen} className="rounded-lg border p-2 hover:bg-muted" aria-label="Regenerate"><RefreshCw className="h-4 w-4" /></button>
          </div>
        </div>
        <textarea value={out} onChange={(e) => setOut(e.target.value)} rows={12} className="w-full resize-none bg-transparent text-sm leading-relaxed outline-none" />
      </Output>
    </div>
  );
}

type Task = { t: string; p: "High" | "Medium" | "Low"; e: string; d: string; done: boolean };

function PlannerTool() {
  const [goal, setGoal] = useState("Launch a new product website in 3 weeks");
  const [tasks, setTasks] = useState<Task[]>([]);
  const { loading, run } = useFakeAI();
  const gen = () => run(() => setTasks([
    { t: `Define scope & success metrics for: ${goal}`, p: "High", e: "2h", d: "Day 1", done: false },
    { t: "Research audience and competitors", p: "High", e: "4h", d: "Day 2", done: false },
    { t: "Draft structure and key messaging", p: "Medium", e: "3h", d: "Day 4", done: false },
    { t: "Design and build first version", p: "High", e: "16h", d: "Week 2", done: false },
    { t: "Review, test and gather feedback", p: "Medium", e: "4h", d: "Week 3", done: false },
    { t: "Launch and share announcement", p: "Low", e: "2h", d: "Week 3", done: false },
  ]));
  const color = { High: "bg-destructive/10 text-destructive", Medium: "bg-secondary text-secondary-foreground", Low: "bg-success/10 text-success" };
  const move = (i: number, dir: number) => setTasks((ts) => { const n = [...ts]; const j = i + dir; if (j < 0 || j >= n.length) return ts; const tmp = n[i]!; n[i] = n[j]!; n[j] = tmp; return n; });
  return (
    <div className="space-y-5">
      <Field label="What do you want to achieve?">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input className={input} value={goal} onChange={(e) => setGoal(e.target.value)} />
          <button onClick={gen} disabled={loading} className={btnPrimary + " shrink-0"}>{loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Create Plan</button>
        </div>
      </Field>
      <Output empty={!tasks.length} loading={loading} emptyText="Your step-by-step plan will appear here.">
        <div className="mb-3 flex items-center justify-between"><AiBadge /><span className="text-xs text-muted-foreground">{tasks.filter((t) => t.done).length}/{tasks.length} done</span></div>
        <div className="space-y-2">
          {tasks.map((task, i) => (
            <div key={task.t} className="flex items-center gap-3 rounded-xl border bg-card p-3">
              <button onClick={() => setTasks((ts) => ts.map((x, k) => k === i ? { ...x, done: !x.done } : x))} className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${task.done ? "bg-primary text-primary-foreground" : ""}`} aria-label="Toggle">{task.done && <Check className="h-3.5 w-3.5" />}</button>
              <span className={`flex-1 text-sm ${task.done ? "text-muted-foreground line-through" : ""}`}>{task.t}</span>
              <span className={`hidden rounded-full px-2 py-0.5 text-xs font-semibold sm:inline ${color[task.p]}`}>{task.p}</span>
              <span className="hidden items-center gap-1 text-xs text-muted-foreground md:flex"><Clock className="h-3 w-3" />{task.e} · {task.d}</span>
              <div className="flex flex-col">
                <button onClick={() => move(i, -1)} className="text-muted-foreground hover:text-foreground" aria-label="Move up"><ChevronDown className="h-3.5 w-3.5 rotate-180" /></button>
                <button onClick={() => move(i, 1)} className="text-muted-foreground hover:text-foreground" aria-label="Move down"><ChevronDown className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      </Output>
    </div>
  );
}

function NotesTool() {
  const [notes, setNotes] = useState("Sara: QA will be done by Friday.\nMike: I'll write the release notes.\nWe decided to ship v2 on Nov 14.\nBudget for ads approved at $5k.\nJen to schedule the launch webinar next week.");
  const [done, setDone] = useState(false);
  const { loading, run } = useFakeAI();
  const lines = notes.split("\n").filter(Boolean);
  const decisions = lines.filter((l) => /decid|approv|agree/i.test(l));
  const actions = lines.filter((l) => /will|to |i'll/i.test(l) && !decisions.includes(l));
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <Field label="Paste meeting notes or transcript"><textarea rows={10} className={input} value={notes} onChange={(e) => setNotes(e.target.value)} /></Field>
        <button onClick={() => run(() => setDone(true))} disabled={loading} className={btnPrimary + " w-full"}>{loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Summarize Meeting</button>
      </div>
      <Output empty={!done} loading={loading} emptyText="Decisions, action items and a summary will appear here.">
        <AiBadge />
        <h4 className="mt-4 text-sm font-semibold">Executive summary</h4>
        <p className="mt-1 text-sm text-muted-foreground">The team covered {lines.length} topics, reached {decisions.length} decision{decisions.length === 1 ? "" : "s"} and assigned {actions.length} follow-ups.</p>
        <h4 className="mt-4 text-sm font-semibold">Decisions</h4>
        <ul className="mt-1 space-y-1">{decisions.map((d) => <li key={d} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{d}</li>)}</ul>
        <h4 className="mt-4 text-sm font-semibold">Action items</h4>
        <ul className="mt-1 space-y-1.5">{actions.map((a) => {
          const owner = a.split(/[: ]/)[0];
          return <li key={a} className="flex items-start gap-2 text-sm"><span className="rounded-md bg-secondary px-1.5 py-0.5 text-xs font-semibold text-secondary-foreground">{owner}</span>{a.replace(/^\w+:\s*/, "")}</li>;
        })}</ul>
      </Output>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-semibold">{label}</span>{children}</label>;
}

function Output({ empty, loading, emptyText, children }: { empty: boolean; loading: boolean; emptyText: string; children: React.ReactNode }) {
  return (
    <div className="min-h-64 rounded-2xl border bg-surface p-5">
      {loading ? (
        <div className="space-y-3">{[90, 75, 85, 60].map((w) => <div key={w} className="h-3 animate-pulse rounded bg-border" style={{ width: `${w}%` }} />)}</div>
      ) : empty ? (
        <div className="grid h-full min-h-52 place-items-center text-center text-sm text-muted-foreground"><div><Sparkles className="mx-auto mb-2 h-6 w-6 text-primary/50" />{emptyText}</div></div>
      ) : children}
    </div>
  );
}

function HowItWorks() {
  const steps = [["01", "Tell AI What You Need", "Enter an email request, goal, or meeting notes."], ["02", "Let AI Do the Work", "The AI analyzes your input and creates structured output."], ["03", "Review & Take Action", "Edit, copy, export, or share — then move on."]];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="How it works" title="From idea to done in three steps" sub="No learning curve. Just describe what you need." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(([n, t, d]) => (
          <div key={n} className="rounded-3xl border bg-card p-7 shadow-soft">
            <div className="font-display text-4xl font-bold text-brand">{n}</div>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[["“I save at least an hour every day on email alone.”", "Priya N., Product Manager"], ["“Meeting summaries used to take me 30 minutes. Now it's seconds.”", "David K., Founder"], ["“The task planner keeps my whole team aligned.”", "Lena M., Eng Lead"]].map(([q, a]) => (
          <figure key={a} className="rounded-3xl bg-surface p-7">
            <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <blockquote className="mt-3 text-sm">{q}</blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">{a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { n: "Free", p: "$0", d: "For trying things out", f: ["10 AI generations/month", "Basic email generation", "Simple task planning"] },
    { n: "Pro", p: "$12", d: "For busy professionals", f: ["Unlimited email generation", "Advanced task planner", "Meeting summaries + export", "Priority AI processing"], hot: true },
    { n: "Business", p: "$29", d: "Per user, for teams", f: ["Everything in Pro", "Shared workspaces", "Admin controls", "Priority support"] },
  ];
  return (
    <section id="pricing" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Pricing" title="Simple plans that scale with you" sub="Start free. Upgrade when you're ready." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((pl) => (
            <div key={pl.n} className={`relative rounded-3xl border bg-card p-8 ${pl.hot ? "border-primary shadow-float" : "shadow-soft"}`}>
              {pl.hot && <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
              <h3 className="text-lg font-semibold">{pl.n}</h3>
              <p className="text-sm text-muted-foreground">{pl.d}</p>
              <div className="mt-5 font-display text-4xl font-bold">{pl.p}<span className="text-sm font-medium text-muted-foreground">/mo</span></div>
              <ul className="mt-6 space-y-2.5">{pl.f.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-success" />{f}</li>)}</ul>
              <a href="#try" className={(pl.hot ? btnPrimary : btnGhost) + " mt-8 w-full"}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    ["What is Flowmind?", "An AI workspace with three tools: a Smart Email Generator, an AI Task Planner, and a Meeting Notes Summarizer."],
    ["Can I edit AI-generated content?", "Yes. Every output is fully editable, and you can regenerate or copy it anytime."],
    ["Is my data secure?", "Your data is encrypted and handled responsibly. We never use your content to train public models."],
    ["Can teams use the platform?", "Yes, Business users can collaborate through shared workspaces."],
    ["Can I export my meeting summaries?", "Yes, summaries can be exported and shared with your team."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <SectionHead eyebrow="FAQ" title="Questions, answered" sub="Everything you need to know to get started." />
      <div className="mt-12 divide-y rounded-3xl border bg-card shadow-soft">
        {items.map(([q, a], i) => (
          <div key={q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold">
              {q}<ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cta px-8 py-20 text-center text-ink-foreground">
        <div className="absolute inset-0 bg-glow opacity-60" />
        <div className="relative">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to Get More Done?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">Let AI handle the busywork so you can focus on what matters.</p>
          <a href="#try" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-float transition hover:opacity-90">Start Using AI Free <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
        <div><Logo /><p className="mt-3 text-sm text-muted-foreground">AI that writes. AI that plans. AI that remembers.</p></div>
        {[["Product", ["Smart Email Generator", "AI Task Planner", "Meeting Summarizer", "Pricing"]], ["Resources", ["AI Productivity Guide", "Blog", "Help Center"]], ["Company", ["About", "Privacy", "Terms"]]].map(([h, ls]) => (
          <div key={h as string}>
            <h4 className="text-sm font-semibold">{h as string}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{(ls as string[]).map((l) => <li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© 2026 Flowmind. All rights reserved.</div>
    </footer>
  );
}
