import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ServiceContactPopupProps {
  serviceName: string | null;
}

const ServiceContactPopup = ({ serviceName }: ServiceContactPopupProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back within 24 hours.");
  };

  return (
    <section className="relative py-8 px-6 md:px-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 max-w-md mx-auto">
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-1">
                Start a Project
              </h2>
              {serviceName && (
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mt-2">
                  {serviceName}
                </span>
              )}
              <p className="text-muted-foreground text-sm mt-3">
                Drop us your email and a quick message — we'll take it from here.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/50 flex items-center gap-1.5">
                  <Mail size={11} /> Email
                </label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="bg-white/[0.04] border-border/20 rounded-xl h-12"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/50 flex items-center gap-1.5">
                  <MessageSquare size={11} /> Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="bg-white/[0.04] border-border/20 rounded-xl min-h-[120px] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-opacity mt-2"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
              <CheckCircle2 size={48} className="mx-auto text-accent mb-4" />
            </motion.div>
            <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground text-sm">We'll review and get back within 24 hours.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceContactPopup;
