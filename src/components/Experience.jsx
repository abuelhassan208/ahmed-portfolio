import React from "react";

const roles = [
  {
    title: "Flutter Developer",
    company: "Busaty",
    period: "Dec 2024 – Present",
    bullets: [
      "Lead development of Busaty mobile apps (Parents, School, Bus) on iOS and Android",
      "Built scalable architecture with Riverpod/BLoC, Clean Architecture, and feature-first structure",
      "Integrated Firebase (Auth, Cloud Messaging) and REST APIs; implemented push notifications and deep links",
      "Improved performance, accessibility, dark mode, and offline-friendly UX",
      "Supported multi-store distribution including App Store, Google Play, and AppGallery",
    ],
  },

  {
    title: "Flutter Developer",
    company: "Code7X",
    period: "Aug 2023 – Nov 2024",
    bullets: [
      "Developed and maintained Flutter apps",
      "Implemented BLoC/GetX state management",
      "Integrated REST APIs and Firebase",
      "Authored and maintain open-source Flutter MCP client library (flutter_mcp_client_lib)",
      "AI & Prompt Engineering: Built the Universal Prompt Engineering Framework",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Neoxero",
    period: "Jun 2022 – Aug 2023",
    bullets: [
      "Built scalable mobile apps with modern UI/UX",
      "Integrated third-party services and APIs",
    ],
  },
  {
    title: "Training Flutter Developer",
    company: "in-out",
    period: "Jun 2021 – Dec 2021",
    bullets: [
      "Learned Flutter fundamentals and lifecycle",
      "Developed training projects",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Experience</h2>
        <div className="mt-6 space-y-6">
          {roles.map((r, i) => (
            <div key={i} className="rounded border border-slate-700 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{r.title} <span className="text-brand-300">@ {r.company}</span></h3>
                <span className="text-sm text-slate-400">{r.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

