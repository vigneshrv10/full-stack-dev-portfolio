import { FaHeart } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm flex items-center gap-1">
                    Made with <FaHeart className="text-red-500" /> by Vignesh R V © {new Date().getFullYear()}
                </p>

                <div className="flex gap-6">
                    {SOCIAL_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors text-lg"
                        >
                            <link.icon />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
