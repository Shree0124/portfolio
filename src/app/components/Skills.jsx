// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   "Next.js", "React", "JavaScript", "TypeScript",
//   "Flutter", "Dart", "Tailwind CSS", "Firebase"
// ];

// export default function Skills() {
//   return (
//     <section className="py-24 px-6 md:px-16">
//       <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
//         My Skills
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.08 }}
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-white cursor-pointer transition-all duration-300"
//           >
//             <p className="font-medium">{skill}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   "Next.js", "React", "JavaScript", "TypeScript",
//   "Flutter", "Dart", "Tailwind CSS", "Firebase"
// ];

// export default function Skills() {
//   return (
//     <section className="py-24 px-6 md:px-16 bg-black min-h-screen flex flex-col items-center justify-center">
//       <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
//         My Skills
//       </h2>

//       <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgb(59 130 246)" }}
//             className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-8 py-3 text-white text-lg font-semibold backdrop-blur-sm transition-all duration-300"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   "Next.js", "React", "JavaScript", "TypeScript",
//   "Flutter", "Dart", "Tailwind CSS", "Firebase"
// ];

// export default function Skills() {
//   return (
//     <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center justify-center font-sans">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
//         My Skills
//       </h2>

//       <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgb(129 140 248)" }}
//             className="cursor-pointer rounded-full border border-indigo-600 bg-indigo-900/20 px-10 py-3 text-indigo-300 text-lg font-semibold backdrop-blur-md transition-all duration-300 select-none"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   "Next.js", "React", "JavaScript", "TypeScript",
//   "Flutter", "Dart", "Tailwind CSS", "Firebase"
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 px-6 md:px-16 flex flex-col items-center justify-center bg-gray-900">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
//         My Skills
//       </h2>
//       <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgb(129 140 248)" }}
//             className="cursor-pointer rounded-full border border-indigo-600 bg-indigo-900/20 px-10 py-3 text-indigo-300 text-lg font-semibold backdrop-blur-md transition-all duration-300 select-none"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = ["Next.js", "React", "JavaScript", "TypeScript", "Flutter", "Dart", "Tailwind CSS", "Firebase"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-16 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-wide"
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgb(129 140 248)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="cursor-pointer rounded-full border border-indigo-600 bg-indigo-900/20 px-10 py-3 text-indigo-300 text-lg font-semibold backdrop-blur-md transition-all duration-300 select-none"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
