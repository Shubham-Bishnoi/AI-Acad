"use client";

import { motion } from "framer-motion";
import { FileCode, Braces, Terminal, Play, Square, Command } from "lucide-react";

function CodeEditorMockup() {
  const codeLines = [
    { num: 1, content: 'import ', color: 'text-[#FF7A8A]' },
    { num: 2, content: '  openai, os, json', color: 'text-[#7FB0FF]' },
    { num: 3, content: '', color: '' },
    { num: 4, content: '# Configure API', color: 'text-gray-500' },
    { num: 5, content: 'client = openai.', color: 'text-[#5B9DFF]' },
    { num: 6, content: '  api_key=os.', color: 'text-[#7FB0FF]' },
    { num: 7, content: '    getenv(', color: 'text-[#C4A6FF]' },
    { num: 8, content: '      "OPENAI_KEY"', color: 'text-[#FF9FAC]' },
    { num: 9, content: '    )', color: 'text-gray-400' },
    { num: 10, content: ')', color: 'text-gray-400' },
    { num: 11, content: '', color: '' },
    { num: 12, content: 'response = client.', color: 'text-[#5B9DFF]' },
    { num: 13, content: '  chat.completions.', color: 'text-[#7FB0FF]' },
    { num: 14, content: '  create(', color: 'text-[#C4A6FF]' },
    { num: 15, content: '    model="gpt-4o",', color: 'text-[#FF9FAC]' },
    { num: 16, content: '    messages=[{', color: 'text-[#FF7A8A]' },
    { num: 17, content: '      "role": "user",', color: 'text-[#FF9FAC]' },
    { num: 18, content: '      "content": prompt', color: 'text-[#7FB0FF]' },
    { num: 19, content: '    }]', color: 'text-gray-400' },
    { num: 20, content: '  )', color: 'text-gray-400' },
  ];

  const sidebarFiles = [
    { name: "ai_agent.py", icon: <Braces className="w-3.5 h-3.5" />, active: false },
    { name: "prompt_engine.py", icon: <Terminal className="w-3.5 h-3.5" />, active: true },
    { name: "model_config.py", icon: <FileCode className="w-3.5 h-3.5" />, active: false },
    { name: "data_loader.py", icon: <Braces className="w-3.5 h-3.5" />, active: false },
    { name: "utils.py", icon: <Command className="w-3.5 h-3.5" />, active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#181825] border-b border-gray-700/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#2a2a3c] rounded-md">
                <Terminal className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-300">gff-academy</span>
              </div>
              <span className="text-xs text-gray-500">~ master</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-[#2a2a3c] rounded text-xs text-gray-400">IDEA</div>
            <Play className="w-4 h-4 text-[#5B9DFF]" />
            <Square className="w-3.5 h-3.5 text-gray-500" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:block w-48 bg-[#181825] border-r border-gray-700/50 py-3">
            <div className="px-3 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Project</span>
            </div>
            {sidebarFiles.map((file, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1.5 mx-1 rounded-md cursor-pointer transition-colors ${file.active
                  ? "bg-[#2a2a3c] text-white"
                  : "text-gray-400 hover:text-gray-300 hover:bg-[#222233]"
                  }`}
              >
                <span className={file.active ? "text-[#5B9DFF]" : ""}>{file.icon}</span>
                <span className="text-xs truncate">{file.name}</span>
              </div>
            ))}
          </div>

          {/* Code area */}
          <div className="flex-1 overflow-x-auto">
            {/* Tab bar */}
            <div className="flex items-center bg-[#1e1e2e] border-b border-gray-700/50">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] border-t-2 border-[#155DFC]">
                <FileCode className="w-3.5 h-3.5 text-[#5B9DFF]" />
                <span className="text-xs text-gray-300">prompt_engine.py</span>
                <span className="text-gray-500 ml-2">×</span>
              </div>
            </div>

            {/* Code content */}
            <div className="py-2 min-h-[300px]">
              {codeLines.map((line, i) => (
                <div key={i} className="flex items-start hover:bg-white/5 transition-colors">
                  <span className="w-10 text-right pr-3 text-xs text-gray-600 select-none flex-shrink-0 pt-0.5">
                    {line.num}
                  </span>
                  <span className={`text-xs font-mono leading-5 whitespace-pre ${line.color || "text-gray-300"}`}>
                    {line.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CodingPotentialWaitlistSection() {
  const avatars = [
    { bg: "bg-blue-200", initial: "A" },
    { bg: "bg-rose-200", initial: "B" },
    { bg: "bg-indigo-200", initial: "C" },
    { bg: "bg-purple-200", initial: "D" },
    { bg: "bg-sky-200", initial: "E" },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
      <div
        aria-hidden="true"
        className="brand-orb-drift-a pointer-events-none absolute left-[-8rem] top-8 h-56 w-56 rounded-full bg-[#155DFC]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="brand-orb-drift-b pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-64 w-64 rounded-full bg-[#D91F2D]/16 blur-3xl"
      />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:rounded-[2.5rem] md:p-12 lg:p-16"
        >
          {/* Pinstripe background */}
          <div className="absolute inset-0 pinstripe-bg opacity-[0.06]" />

          {/* Content */}
          <div className="relative text-center">
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E4EAF5] bg-[#EEF6FF] px-4 py-2"
            >
              <Terminal className="w-4 h-4 text-[#155DFC]" />
              <span className="text-sm font-medium text-[#07162F]">AI Course</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-4xl font-bold text-[#07162F] md:text-5xl lg:text-6xl"
            >
              Unlock Your Coding Potential
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#5D667A] md:text-lg"
            >
              Dive into the world of AI, programming, and real-world projects with a structured
              academy experience designed for beginners and aspiring AI professionals.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8 flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#155DFC]/25 transition-colors hover:bg-[#0F4BD8]"
              >
                Join Waitlist
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-7 py-3.5 font-medium text-[#07162F] transition-colors hover:border-[#155DFC] hover:text-[#155DFC]"
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Avatar Group */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mb-12 flex items-center justify-center gap-3"
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${avatar.bg}`}
                  >
                    <span className="text-xs font-semibold text-gray-700">{avatar.initial}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#5D667A]">
                Trusted already by <span className="font-semibold text-[#07162F]">1.2k+</span> learners
              </span>
            </motion.div>

            {/* Code Editor Mockup */}
            <CodeEditorMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
