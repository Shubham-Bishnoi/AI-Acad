import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import type { Mentor } from "@/data/homeVariants";

interface MentorCardProps {
  mentor: Mentor;
  index?: number;
}

export default function MentorCard({ mentor, index = 0 }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col items-center text-center"
    >
      <div
        className={`relative w-32 h-40 md:w-36 md:h-44 ${mentor.bgColor} rounded-[40%] overflow-hidden mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="text-4xl font-bold text-gray-400/50 select-none">
          {mentor.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h4 className="text-sm font-semibold text-white mb-1">{mentor.name}</h4>
      <p className="text-xs text-[#9DBBFF]/90 mb-3">{mentor.role}</p>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <Twitter className="w-3 h-3 text-white" />
        </button>
        <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <Linkedin className="w-3 h-3 text-white" />
        </button>
        <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <Github className="w-3 h-3 text-white" />
        </button>
      </div>
    </motion.div>
  );
}
