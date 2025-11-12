import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[60vh] flex items-center justify-center text-center bg-slate-900 text-white">
      <div className="max-w-3xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Ahmed Abu El‑Hassan Mohamed</h1>
        <p className="mt-3 text-brand-300 font-medium">Flutter Developer • Egypt • Remote</p>
        <p className="mt-4 text-slate-300">Experienced Flutter Developer (4+ years) delivering scalable, high‑quality mobile apps with great UX.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a className="px-4 py-2 rounded bg-brand-500 hover:bg-brand-600" href="mailto:aboualvixx@gmail.com">Email</a>
          <a className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600" href="tel:+201007817605">Call</a>
          <a className="px-4 py-2 rounded border border-slate-600 hover:bg-slate-800" href="https://www.linkedin.com/in/ahmed-abu-elhassan-b7ba99207/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="px-4 py-2 rounded border border-slate-600 hover:bg-slate-800" href="https://github.com/abuelhassan208" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

