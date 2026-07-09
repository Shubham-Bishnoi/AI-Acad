"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#5A6B69] mb-2">Home / Contact</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C1A]">
                Have Any Questions!
                <br />
                <span className="text-[#00A86B]">Send a Message</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002B24] text-white text-sm font-semibold hover:bg-[#062E2A] transition-all"
                  >
                    Send Message
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Send className="w-3 h-3 text-white" />
                    </span>
                  </button>
                </form>
              </motion.div>

              {/* Right side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Image card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#DFFBF1] to-[#E6F1FF] h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border border-white/60">
                      <Mail className="w-7 h-7 text-[#00A86B]" />
                    </div>
                    <p className="text-sm font-medium text-[#071C1A]">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 98765 43210",
                      color: "#DFFBF1",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@gffaiacademy.in",
                      color: "#FFD9E8",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Bengaluru, India",
                      color: "#E6F1FF",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E8EDE9] text-center"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon className="w-5 h-5 text-[#071C1A]" />
                      </div>
                      <p className="text-xs text-[#5A6B69]">{item.label}</p>
                      <p className="text-xs font-semibold text-[#071C1A] mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
