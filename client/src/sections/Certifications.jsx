import SectionWrapper from "../components/SectionWrapper";
import { CERTIFICATIONS, PUBLICATIONS, AWARDS } from "../constants";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaNewspaper } from "react-icons/fa";

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="bg-secondary/30">

            {/* Certifications */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <FaCertificate className="text-accent" /> Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all flex flex-col justify-between h-full"
                        >
                            <div className="flex items-start gap-4">
                                {cert.logo ? (
                                    <div className="w-12 h-12 flex-shrink-0 p-1 bg-white rounded-lg flex items-center justify-center">
                                        <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                                    </div>
                                ) : (
                                    <FaCertificate className="text-accent text-2xl mt-1" />
                                )}
                                <div>
                                    <h3 className="font-semibold text-white mb-1 line-clamp-2">{cert.title}</h3>
                                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Publications */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaNewspaper className="text-accent" /> Publications
                    </h2>
                    <div className="space-y-6">
                        {PUBLICATIONS.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-5 bg-primary/40 rounded-xl border-l-4 border-accent"
                            >
                                <h3 className="font-bold text-white text-lg">{pub.title}</h3>
                                <p className="text-accent text-sm mb-2">{pub.conference}</p>
                                <p className="text-gray-400 text-sm mb-3">{pub.description}</p>
                                <a href={pub.link} target="_blank" rel="noreferrer" className="text-accent text-xs hover:underline">Read Paper &rarr;</a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaAward className="text-accent" /> Honors & Awards
                    </h2>
                    <div className="space-y-6">
                        {AWARDS.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-5 bg-gradient-to-r from-yellow-900/10 to-transparent rounded-xl border border-yellow-600/20"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    {award.logo ? (
                                        // Special handling for coding blocks logo if needed, but generic white bg works best for most
                                        <div className="w-12 h-12 flex-shrink-0 p-1 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                            <img src={award.logo} alt={award.issuer} className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <FaAward className="text-yellow-500 text-3xl" />
                                    )}
                                    <div>
                                        <h3 className="font-bold text-white text-lg leading-tight">
                                            {award.title}
                                        </h3>
                                        <p className="text-yellow-500/80 text-sm mt-1">{award.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm">{award.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </SectionWrapper>
    );
};

export default Certifications;
