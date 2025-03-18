import "./tips.css"
import { motion } from "framer-motion";


export default function Tips() {

  const tips = [
    { img: "/pasta.svg", alt: "food", title: "Healthy eating", text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood." },
    { img: "/sport.svg", alt: "sport", title: "Regular exercise", text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity." },
    { img: "/sleep.svg", alt: "sleep", title: "Adequate sleep", text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation." }
  ];

  return (

    <motion.div className="container-section-3" initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>

      {
        tips.map(tip => {
          return (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} >

              <div className="tip-container">
                <img src={tip.img} alt={tip.alt} />
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </div>
            </motion.div>
          )
        })
      }
    </motion.div>
  )

}
