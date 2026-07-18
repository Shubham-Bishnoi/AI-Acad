"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[#E4EAF5] rounded-2xl bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFCFF] transition-colors"
      >
        <span
          className={`text-sm font-semibold pr-4 transition-colors ${
            isOpen ? "text-[#155DFC]" : "text-[#07162F]"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen
              ? "bg-[#155DFC] text-white"
              : "bg-[#EEF3FB] text-[#5D667A]"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="pt-3 border-t border-[#E4EAF5]">
                <p className="text-sm text-[#5D667A] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common queries about our programs, process, and outcomes."
          centered
        />

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <FAQItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
