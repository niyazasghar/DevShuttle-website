import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FooterSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    reset();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] opacity-60 mb-8"
        >
          LET'S WORK TOGETHER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12"
        >
          Have a project in mind?
          <br />
          Let's build it together.
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-12"
        >
          <div className="flex flex-col gap-2">
            <input
              {...register("name")}
              placeholder="Your Name"
              className="bg-transparent border-b border-primary-foreground/30 focus:border-primary-foreground pb-3 pt-1 text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-colors"
            />
            {errors.name && (
              <span className="text-xs text-red-400">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-b border-primary-foreground/30 focus:border-primary-foreground pb-3 pt-1 text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-colors"
            />
            {errors.email && (
              <span className="text-xs text-red-400">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <textarea
              {...register("message")}
              placeholder="Tell us about your project"
              rows={4}
              className="bg-transparent border-b border-primary-foreground/30 focus:border-primary-foreground pb-3 pt-1 text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-colors resize-none"
            />
            {errors.message && (
              <span className="text-xs text-red-400">{errors.message.message}</span>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium text-primary-foreground border border-primary-foreground/40 hover:border-primary-foreground px-8 py-4 transition-all hover:bg-primary-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>

        <motion.a
          href="mailto:hello@devshuttle.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-block text-lg md:text-xl opacity-60 hover:opacity-100 transition-opacity border-b border-current pb-1"
        >
          hello@devshuttle.com
        </motion.a>
      </div>

      <div className="mt-24 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-heading text-lg font-bold tracking-tight">
          DEVSHUTTLE
        </p>
        <div className="flex gap-8 text-sm opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Dribbble</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
        </div>
        <p className="text-sm opacity-40">
          © 2026 DevShuttle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
