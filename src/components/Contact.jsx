import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setStatus({ message: "Message sent successfully! ✅", type: "success" });
      form.current.reset();
    } catch (error) {
      console.error("Error:", error.text);
      setStatus({ message: "Failed to send message. Please try again. ❌", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="text-blue-400" size={24} />, title: "Email", value: "krishmonga21667@gmail.com" },
    { icon: <Phone className="text-blue-400" size={24} />, title: "Phone", value: "+91 8629021667" },
    { icon: <MapPin className="text-blue-400" size={24} />, title: "Location", value: "Solan, Himachal Pradesh, India" },
  ];

  return (
    <section id="contact" className={`py-16 px-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg shadow-md border bg-opacity-40"
              >
                <motion.div whileHover={{ scale: 1.1 }}>{info.icon}</motion.div>
                <div>
                  <h3 className="font-semibold text-lg">{info.title}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 bg-opacity-50 p-6 rounded-lg shadow-md"
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"} focus:ring-2 focus:ring-blue-400`}
            />
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"} focus:ring-2 focus:ring-blue-400`}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"} focus:ring-2 focus:ring-blue-400`}
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status Messages */}
            {status.message && (
              <motion.p className={`text-center mt-3 ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {status.message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;