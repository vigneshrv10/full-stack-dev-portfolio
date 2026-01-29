import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { SOCIAL_LINKS, PERSONAL_DETAILS } from "../constants";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="bg-primary pb-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-accent/10 rounded-full text-accent">
                                    <FaEnvelope />
                                </div>
                                <span>{PERSONAL_DETAILS.email}</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-accent/10 rounded-full text-accent">
                                    <FaPhoneAlt />
                                </div>
                                <span>{PERSONAL_DETAILS.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-secondary rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all text-xl"
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 bg-secondary/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 bg-secondary/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-3 bg-secondary/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                placeholder="What's on your mind?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {loading ? 'Sending...' : <>Send Message <FaPaperPlane className="text-xs" /></>}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-center text-sm mt-2">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center text-sm mt-2">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
