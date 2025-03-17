import { motion } from "framer-motion";
import "./limitation.css";

interface LimitationProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

export default function Limitation({ img, alt, title, text }: LimitationProps) {
  return (
    <motion.div 
      className="limitation-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      viewport={{ once: true }} 
      whileHover={{ scale: 1.05 }} 
    >
      <div className="title-container">
        <motion.img 
          src={img} 
          alt={alt} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }} 
        />
        <span className="limitation-title">{title}</span>
      </div>
      <p>{text}</p>
    </motion.div>
  );
}
