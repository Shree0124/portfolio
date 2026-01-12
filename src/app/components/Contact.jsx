// "use client";

// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 flex justify-center items-center bg-[url('/bg-contact.jpg')] bg-cover bg-center"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 max-w-3xl w-full p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-center text-white shadow-lg"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">
//           Let’s Build Something Great
//         </h2>
//         <p className="text-gray-300 mb-8 text-lg">
//           I’m available for freelance or full-time opportunities.  
//           Feel free to reach out and let’s create something amazing together!
//         </p>

//         <a
//           href="mailto:shreedharsanadi99@gmail.com"
//           className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-all duration-500 font-semibold shadow-lg"
//         >
//           Contact Me
//         </a>

//         {/* Social Icons */}
//         <div className="mt-10 flex justify-center gap-6 text-white">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors text-2xl">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors text-2xl">
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors text-2xl">
//             <i className="fab fa-twitter"></i>
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 flex justify-center items-center bg-[url('/bg-contact.jpg')] bg-cover bg-center font-sans"
//     >
//       <div className="absolute inset-0 bg-black/70"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 max-w-3xl w-full p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-center text-white shadow-lg"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-400 tracking-wide">
//           Let’s Build Something Great
//         </h2>
//         <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
//           I’m available for freelance or full-time opportunities. Feel free to reach out and let’s create something amazing together!
//         </p>

//         <a
//           href="mailto:shreedharsanadi99@gmail.com"
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-500 font-semibold shadow-lg text-lg"
//         >
//           Contact Me
//         </a>

//         {/* Social Icons */}
//         <div className="mt-12 flex justify-center gap-10 text-white text-3xl">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
//             <FaGithub />
//           </a>
//           <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
//             <FaLinkedin />
//           </a>
//           <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
//             <FaTwitter />
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const socialLinks = [
//   {
//     href: "https://github.com/yourusername",
//     label: "GitHub",
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
//         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.76-1.604-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.522.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404 11.48 11.48 0 013.003.404c2.29-1.553 3.295-1.23 3.295-1.23.65 1.654.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.625-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.825.57C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
//       </svg>
//     ),
//   },
//   {
//     href: "https://linkedin.com/in/yourusername",
//     label: "LinkedIn",
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
//         <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H9.358V9h3.414v1.561h.047c.475-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.066 2.066 0 11.001-4.132 2.066 2.066 0 010 4.132zM6.917 20.452H3.757V9h3.16v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.726v20.547C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.273V1.726C24 .771 23.207 0 22.225 0z" />
//       </svg>
//     ),
//   },
//   {
//     href: "https://twitter.com/yourusername",
//     label: "Twitter",
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
//         <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.379 4.482A13.978 13.978 0 011.671 3.15a4.822 4.822 0 001.523 6.574 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 002.41-2.506z" />
//       </svg>
//     ),
//   },
// ];

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 md:px-16 bg-gray-900 text-white flex flex-col items-center"
//     >
//       <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-indigo-700/30 blur-3xl mix-blend-overlay pointer-events-none" />
//       <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-purple-700/20 blur-3xl mix-blend-overlay pointer-events-none" />

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 max-w-xl w-full p-10 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-3xl text-center shadow-lg"
//       >
//         <h2 className="text-4xl font-extrabold mb-4 text-indigo-400 tracking-wide">
//           Let’s Build Something Great
//         </h2>
//         <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//           I’m available for freelance or full-time opportunities. Feel free to reach out and let’s create something amazing together!
//         </p>
//         <a
//           href="mailto:shreedharsanadi99@gmail.com"
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-400 font-semibold shadow-lg text-lg"
//         >
//           Contact Me
//         </a>
//         <div className="mt-12 flex justify-center gap-10 text-indigo-400">
//           {socialLinks.map(({ href, label, svg }) => (
//             <a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               className="hover:text-indigo-300 transition-colors"
//             >
//               {svg}
//             </a>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";
import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Shree0124",
    label: "GitHub",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.76-1.604-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.522.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404 11.48 11.48 0 013.003.404c2.29-1.553 3.295-1.23 3.295-1.23.65 1.654.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.625-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.825.57C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/shreedhar-sanadi-1a302214b/",
    label: "LinkedIn",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H9.358V9h3.414v1.561h.047c.475-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.066 2.066 0 11.001-4.132 2.066 2.066 0 010 4.132zM6.917 20.452H3.757V9h3.16v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.726v20.547C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.273V1.726C24 .771 23.207 0 22.225 0z" />
      </svg>
    ),
  },
  // {
  //   href: "https://twitter.com/yourusername",
  //   label: "Twitter",
  //   svg: (
  //     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
  //       <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.379 4.482A13.978 13.978 0 011.671 3.15a4.822 4.822 0 001.523 6.574 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 002.41-2.506z" />
  //     </svg>
  //   ),
  // },
  //
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center"
    >
      {/* Animated background circles */}
      <motion.div
        animate={{ rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-indigo-700/30 blur-3xl mix-blend-overlay pointer-events-none"
      />
      <motion.div
        animate={{ rotate: [0, -45, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-purple-700/20 blur-3xl mix-blend-overlay pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full p-10 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-3xl text-center shadow-lg"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-400 tracking-wide">
          Let’s Build Something Great
        </h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          I’m available for freelance or full-time opportunities. Feel free to reach out and let’s create something amazing together!
        </p>
        <a
          href="mailto:shreedharsanadi99@gmail.com"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-400 font-semibold shadow-lg text-lg"
        >
          Contact Me
        </a>
        <div className="mt-12 flex justify-center gap-10 text-indigo-400">
          {socialLinks.map(({ href, label, svg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-indigo-300 transition-colors">
              {svg}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
