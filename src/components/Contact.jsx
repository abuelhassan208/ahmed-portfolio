import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <div className="mt-4 space-y-2 text-slate-300">
          <p>Email: <a className="text-brand-300" href="mailto:aboualvixx@gmail.com">aboualvixx@gmail.com</a></p>
          <p>Phone: <a className="text-brand-300" href="tel:+201007817605">+20 1007817605</a></p>
          <p>LinkedIn: <a className="text-brand-300" href="https://www.linkedin.com/in/ahmedabuelhassan" target="_blank" rel="noreferrer">ahmedabuelhassan</a></p>
          <p>GitHub: <a className="text-brand-300" href="https://github.com/abuelhassan208" target="_blank" rel="noreferrer">abuelhassan208</a></p>
        </div>
      </div>
    </section>
  );
}

