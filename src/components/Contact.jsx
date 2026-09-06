import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6uae3u",
        "template_2daptfl",
        form.current,
        "ma6o5HKErjjzN_JtR"
      )
      .then(() => {
        setSuccess("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setSuccess("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-cyan-400 outline-none"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-cyan-400 outline-none"
          />

          <button
            type="submit"
            className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-cyan-300"
          >
            Send Message
          </button>

        </form>

        {success && (
          <p className="text-center mt-6 text-cyan-400">
            {success}
          </p>
        )}

      </div>
    </section>
  );
}

export default Contact;