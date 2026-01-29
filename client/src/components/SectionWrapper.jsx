import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
