export default function Home() {
  const muscleGroups = [
    {
      name: "Skeletal Muscle",
      summary:
        "Voluntary muscles that attach to bones and create movement. They look striped because the fibers align in long bundles.",
      keyPoints: ["Quick to react", "Tires fastest", "Supports posture"],
      Diagram: SkeletalDiagram,
    },
    {
      name: "Smooth Muscle",
      summary:
        "Involuntary muscles that line organs like the stomach and blood vessels. Fibers weave together like nets to squeeze gently.",
      keyPoints: [
        "Slow, steady contractions",
        "Never under conscious control",
        "Keeps digestion and circulation automatic",
      ],
      Diagram: SmoothDiagram,
    },
    {
      name: "Cardiac Muscle",
      summary:
        "Exclusive to the heart. Branching muscle cells connect in a grid so every beat pulls together, rhythmically and tirelessly.",
      keyPoints: [
        "Self-triggering rhythm",
        "Resistant to fatigue",
        "Intercalated discs pass electrical signals fast",
      ],
      Diagram: CardiacDiagram,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-12">
        <header className="flex flex-col gap-6 md:items-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/70">
            Human Anatomy Shorts
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-center md:text-5xl">
            The 3 Types of Human Muscle — Quick Visual Breakdown
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-white/80 md:text-center">
            Every move, heartbeat, and internal squeeze comes from one of three
            muscle families. Here’s a rapid-fire explainer paired with minimalist
            diagrams you can picture in a 60-second short.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-3">
          {muscleGroups.map(({ name, summary, keyPoints, Diagram }) => (
            <article
              key={name}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-xl shadow-black/30 backdrop-blur "
            >
              <div>
                <h2 className="text-2xl font-semibold text-white">{name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {summary}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
                <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.3em] text-white/40">
                  Diagram
                </span>
                <Diagram />
              </div>
              <ul className="space-y-2 text-sm text-white/85">
                {keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 rounded-2xl bg-white/8 px-3 py-2"
                  >
                    <span className="mt-[6px] inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.06] p-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white">
              One-Minute Storyboard Idea
            </h3>
            <ol className="space-y-3 text-sm leading-relaxed text-white/75">
              <li>
                <span className="font-semibold text-emerald-300">0-10s:</span>{" "}
                Show the three diagrams side-by-side, caption “Skeletal vs Smooth
                vs Cardiac”.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">10-30s:</span>{" "}
                Zoom on skeletal fibers flexing a limb, explain fast voluntary
                stripes.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">30-45s:</span>{" "}
                Transition to smooth sheets around a stomach, highlight rhythmic
                squeezes.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">45-60s:</span>{" "}
                Pulse the cardiac lattice with a heartbeat sound, end on “Powered
                for life”.
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-xl font-semibold text-white">
              Quick Comparison Cheatsheet
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/75">
              <dt className="font-semibold text-white">Location</dt>
              <dd>Skeleton / Organs / Heart</dd>
              <dt className="font-semibold text-white">Control</dt>
              <dd>Voluntary / Involuntary / Involuntary</dd>
              <dt className="font-semibold text-white">Structure</dt>
              <dd>Striated fibers / Smooth sheets / Branched striations</dd>
              <dt className="font-semibold text-white">Speed</dt>
              <dd>Fast / Slow / Mid</dd>
              <dt className="font-semibold text-white">Endurance</dt>
              <dd>Moderate / High / Very high</dd>
            </dl>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkeletalDiagram() {
  return (
    <svg
      viewBox="0 0 320 180"
      className="w-full text-emerald-300"
      role="img"
      aria-label="Stylized skeletal muscle fibers"
    >
      <rect width="320" height="180" rx="20" fill="url(#skeletal-bg)" />
      {[...Array(5)].map((_, idx) => {
        const y = 30 + idx * 28;
        return (
          <g key={idx}>
            <rect
              x="20"
              y={y}
              width="280"
              height="18"
              rx="9"
              fill="url(#skeletal-stripe)"
              opacity="0.85"
            />
            <rect
              x="20"
              y={y + 7}
              width="280"
              height="4"
              rx="2"
              fill="white"
              opacity="0.25"
            />
          </g>
        );
      })}
      <defs>
        <linearGradient id="skeletal-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0c1617" />
          <stop offset="100%" stopColor="#102524" />
        </linearGradient>
        <linearGradient id="skeletal-stripe" x1="0" x2="1">
          <stop offset="0%" stopColor="#3ee0c9" />
          <stop offset="100%" stopColor="#16a085" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SmoothDiagram() {
  return (
    <svg
      viewBox="0 0 320 180"
      className="w-full text-emerald-300"
      role="img"
      aria-label="Smooth muscle layers wrapping an organ"
    >
      <rect width="320" height="180" rx="20" fill="url(#smooth-bg)" />
      <ellipse
        cx="160"
        cy="90"
        rx="110"
        ry="60"
        fill="url(#smooth-shell)"
        opacity="0.9"
      />
      <ellipse
        cx="160"
        cy="90"
        rx="70"
        ry="38"
        fill="#0f1a34"
        opacity="0.9"
      />
      {[...Array(5)].map((_, idx) => (
        <ellipse
          key={idx}
          cx="160"
          cy="90"
          rx={90 - idx * 8}
          ry={45 - idx * 4}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
        />
      ))}
      <defs>
        <radialGradient id="smooth-bg" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0%" stopColor="#0f1f39" />
          <stop offset="100%" stopColor="#070a16" />
        </radialGradient>
        <linearGradient id="smooth-shell" x1="0" x2="1">
          <stop offset="0%" stopColor="#4577f1" />
          <stop offset="100%" stopColor="#3bc2ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CardiacDiagram() {
  return (
    <svg
      viewBox="0 0 320 180"
      className="w-full text-emerald-300"
      role="img"
      aria-label="Cardiac muscle network"
    >
      <rect width="320" height="180" rx="20" fill="url(#cardiac-bg)" />
      {[...Array(6)].map((_, idx) => (
        <line
          key={`h-${idx}`}
          x1="20"
          y1={30 + idx * 22}
          x2="300"
          y2={50 + idx * 18}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3"
        />
      ))}
      {[...Array(5)].map((_, idx) => (
        <line
          key={`v-${idx}`}
          x1={60 + idx * 48}
          y1="20"
          x2={40 + idx * 52}
          y2="160"
          stroke="rgba(112, 207, 244, 0.45)"
          strokeWidth="3"
        />
      ))}
      {[...Array(15)].map((_, idx) => (
        <circle
          key={idx}
          cx={40 + (idx % 5) * 55 + (idx > 9 ? 15 : 0)}
          cy={30 + Math.floor(idx / 5) * 55}
          r="7"
          fill="#ff6b81"
          opacity="0.8"
        />
      ))}
      <defs>
        <linearGradient id="cardiac-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#24000f" />
          <stop offset="100%" stopColor="#3b001c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
