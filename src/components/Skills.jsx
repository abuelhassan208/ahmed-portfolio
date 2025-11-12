import React from "react";

const categories = [
  { name: "Flutter & Dart", items: ["Flutter", "Dart", "Impeller", "DevTools"] },
  { name: "State Management", items: ["BLoC", "Riverpod", "GetX"] },
  { name: "Architecture", items: ["MVVM", "Clean Architecture", "Feature-first"] },
  { name: "Networking", items: ["REST", "JSON", "Dio", "http"] },
  { name: "Backend & Data", items: ["Firebase", "SQLite", "SQL Server"] },
  { name: "Tooling", items: ["Git", "GitHub", "GitLab", "Postman"] },
  { name: "Testing", items: ["Unit", "Widget", "Integration", "Golden"] },
  { name: "Other", items: ["Socket.IO", "Maps (Google/OSM)", "Video Calls"] },
  { name: "Open Source", items: ["flutter_mcp_client_lib (MCP client library)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded border border-slate-700 p-4">
              <h3 className="font-semibold text-brand-300">{cat.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span key={s} className="px-2 py-1 rounded bg-slate-800 text-sm">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

