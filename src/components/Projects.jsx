import React from "react";

const projects = [
  { name: "One Drop", ios: "https://apps.apple.com/eg/app/%D9%82%D8%B7%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9/id1644602345" },
  { name: "X5 Smart", ios: "https://apps.apple.com/eg/app/x5smart/id6477860968" },
  { name: "Miss Loren", ios: "https://apps.apple.com/eg/app/miss-loren/id6502640192" },
  { name: "Umrah Gift", ios: "https://apps.apple.com/eg/app/umrah-gift/id6478862288" },
  { name: "Umrah Provider", ios: "https://apps.apple.com/sa/app/umrah-provider/id6670723215" },
  { name: "Tsawq Sale", ios: "https://apps.apple.com/us/app/tsawq-sale/id1588706334", android: "https://play.google.com/store/apps/details?id=com.tsawq.sale" },
  { name: "Aqarcom", ios: "https://apps.apple.com/kw/app/%D8%B9%D9%82%D8%A7%D8%B1-%D9%83%D9%88%D9%85-aqarcom/id1568547797", android: "https://play.google.com/store/apps/details?id=com.entlq.aqarcom", huawei: "https://appgallery.huawei.com/app/C107892651" },
  { name: "Hijin Al Khaleej", ios: "https://apps.apple.com/ae/app/%D9%87%D8%AC%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC/id6686407605", android: "https://play.google.com/store/apps/details?id=com.camel.app" },
  { name: "Saden Park", ios: "https://apps.apple.com/tn/app/saden/id6504837875" },
  { name: "Labani", ios: "https://apps.apple.com/us/app/%D9%84%D8%A8%D8%A7%D9%86%D9%8A/id1310749344", android: "https://play.google.com/store/apps/details?id=com.labbany.labbany" },
  { name: "Mall Guide", ios: "https://apps.apple.com/eg/app/mall-guide/id6717610822" },
  { name: "SALESCO", ios: "https://apps.apple.com/tn/app/salesco-%D8%B3%D9%8A%D9%84%D8%B2%D9%83%D9%88/id6670360206" },
  { name: "Fokkaha", ios: "https://apps.apple.com/tn/app/fokkaha/id6739350169" },
  { name: "Fokkaha Restaurant", ios: "https://apps.apple.com/tn/app/fokkaha-restaurant/id6738893372" },
  { name: "Fokkaha Delivery", ios: "https://apps.apple.com/tn/app/fokkaha-delivery/id6695762100" },
  { name: "Busaty - Parents", ios: "https://apps.apple.com/us/app/busaty-parent/id6741166541", android: "https://play.google.com/store/apps/details?id=com.busaty.parent", huawei: "https://appgallery.huawei.com/app/C112905761" },
  { name: "Busaty - School", ios: "https://apps.apple.com/eg/app/busaty-school/id6740827987", android: "https://play.google.com/store/apps/details?id=com.busaty.school", huawei: "https://appgallery.huawei.com/app/C111804107" },
  { name: "Busaty - Bus", ios: "https://apps.apple.com/eg/app/busaty-bus/id6740584344", android: "https://play.google.com/store/apps/details?id=com.busaty.supervisor", huawei: "https://appgallery.huawei.com/app/C112904973" },
];

function Platform({ href, label }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sm">
      <span>{label}</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.name} className="rounded border border-slate-700 p-4 flex flex-col gap-3">
              <h3 className="font-semibold text-brand-300">{p.name}</h3>
              <div className="flex flex-wrap gap-2">
                <Platform href={p.ios} label="App Store" />
                <Platform href={p.android} label="Google Play" />
                <Platform href={p.huawei} label="AppGallery" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

