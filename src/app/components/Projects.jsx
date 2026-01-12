// "use client";

// import { motion } from "framer-motion";

// const projects = [
//   { title: "E-Commerce Web App", tech: "Next.js, Tailwind, Stripe", desc: "High-performance online store with modern UI." },
//   { title: "Flutter Finance App", tech: "Flutter, Firebase", desc: "Cross-platform mobile app with elegant UX." },
//   { title: "Portfolio Website", tech: "Next.js, Framer Motion", desc: "Personal brand website with interactive animations." }
// ];

// export default function Projects() {
//   return (
//     <section className="py-24 px-6 md:px-16 bg-black/5">
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
//         Featured Projects
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             whileHover={{ y: -10, scale: 1.03 }}
//             className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-indigo-500 to-purple-500"></div>
//             <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
//             <p className="text-indigo-400 text-sm mb-3">{project.tech}</p>
//             <p className="text-gray-300 text-sm">{project.desc}</p>
//             <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors">
//               View Project →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const projects = [
//   { title: "E-Commerce Web App", tech: "Next.js, Tailwind, Stripe", desc: "High-performance online store with modern UI." },
//   { title: "Flutter Finance App", tech: "Flutter, Firebase", desc: "Cross-platform mobile app with elegant UX." },
//   { title: "Portfolio Website", tech: "Next.js, Framer Motion", desc: "Personal brand website with interactive animations." }
// ];

// export default function Projects() {
//   return (
//     <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-black via-gray-900 to-black font-sans">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
//         Featured Projects
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
//             whileHover={{ y: -12, scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.4)" }}
//             className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer transition-all duration-400"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-indigo-500 to-purple-600"></div>
//             <h3 className="text-2xl font-semibold mb-3 text-white tracking-wide">{project.title}</h3>
//             <p className="text-indigo-400 text-sm mb-4 font-mono tracking-wide">{project.tech}</p>
//             <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
//             <a href="#" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors tracking-wide">
//               View Project →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const projects = [
//   { title: "E-Commerce Web App", tech: "Next.js, Tailwind, Stripe", desc: "High-performance online store with modern UI." },
//   { title: "Flutter Finance App", tech: "Flutter, Firebase", desc: "Cross-platform mobile app with elegant UX." },
//   { title: "Portfolio Website", tech: "Next.js, Framer Motion", desc: "Personal brand website with interactive animations." }
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 px-6 md:px-16 bg-gray-900">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
//         Featured Projects
//       </h2>
//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
//             whileHover={{ y: -12, scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.4)" }}
//             className="relative p-8 rounded-3xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-lg cursor-pointer transition-all duration-400"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-indigo-500 to-purple-600"></div>
//             <h3 className="text-2xl font-semibold mb-3 text-white tracking-wide">{project.title}</h3>
//             <p className="text-indigo-400 text-sm mb-4 font-mono tracking-wide">{project.tech}</p>
//             <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
//             <a href="#" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors tracking-wide">
//               View Project →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Web App", tech: "Next.js, Tailwind, Stripe", desc: "High-performance online store with modern UI." },
  { title: "Flutter Finance App", tech: "Flutter, Firebase", desc: "Cross-platform mobile app with elegant UX." },
  { title: "Portfolio Website", tech: "Next.js, Framer Motion", desc: "Personal brand website with interactive animations." }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-wide"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
            whileHover={{ y: -12, scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.4)" }}
            className="relative p-8 rounded-3xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-lg cursor-pointer transition-all duration-400"
          >
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-wide">{project.title}</h3>
            <p className="text-indigo-400 text-sm mb-4 font-mono tracking-wide">{project.tech}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
            <a href="#" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors tracking-wide">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
