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
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            mb-8
            sm:mb-10
            lg:mb-12
          "
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-slate-900
            p-5
            sm:p-6
            lg:p-8
            rounded-xl
            sm:rounded-2xl
            border
            border-cyan-500/50
            shadow-lg
            space-y-5
            sm:space-y-6
          "
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 mb-2 text-sm sm:text-base"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="
                w-full
                p-3
                sm:p-4
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                outline-none
                text-white
                placeholder-gray-500
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 mb-2 text-sm sm:text-base"
            >
              Your Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="
                w-full
                p-3
                sm:p-4
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                outline-none
                text-white
                placeholder-gray-500
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 mb-2 text-sm sm:text-base"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="
                w-full
                p-3
                sm:p-4
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                outline-none
                text-white
                placeholder-gray-500
                resize-none
                transition
              "
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="
              w-full
              sm:w-auto
              bg-cyan-400
              text-black
              px-8
              py-3
              rounded-lg
              font-bold
              text-sm
              sm:text-base
              hover:bg-cyan-300
              active:scale-95
              transition
            "
          >
            Send Message
          </button>

        </motion.form>

        {/* Success / Error Message */}
        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-center
              mt-5
              sm:mt-6
              text-cyan-400
              text-sm
              sm:text-base
              font-medium
            "
          >
            {success}
          </motion.p>
        )}

      </div>
    </section>
  );
}

export default Contact;