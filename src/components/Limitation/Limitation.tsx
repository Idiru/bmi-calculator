import { motion } from "framer-motion";
import "./limitation.css";

export default function Limitation() {
  const limitations = [
    { img: "/gender.svg", alt: "gender", title: "Gender", text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." },
    { img: "/cake.svg", alt: "cake", title: "Age", text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." },
    { img: "/muscle.svg", alt: "muscle", title: "Muscle", text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." },
    { img: "/baby.svg", alt: "baby", title: "Pregnancy", text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." },
    { img: "/human.svg", alt: "human", title: "Race", text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." },
  ];

  return (
    <>
      {/* Mobile */}
      <motion.div
        className='container-section-4 mobile'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Limitations of BMI
        </motion.h2>
        <motion.p
          className='section-4-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.

        </motion.p>
        <div className="container-limitations mobile">
          {limitations.map((limitation, index) => (
            <motion.div
              key={index}
              className="limitation-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="title-container">
                <motion.img
                  src={limitation.img}
                  alt={limitation.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
                <span className="limitation-title">{limitation.title}</span>
              </div>
              <p>{limitation.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Desktop */}
      <motion.div
        className='container-section-4 desktop'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='container-section-4-first-line'>
          <div className='container-section-4-first-text'>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Limitations of BMI
            </motion.h2>
            <motion.p
              className='section-4-text'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.            </motion.p>
          </div>
          <motion.div
            key={limitations[0].title}
            className="limitation-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="title-container">
              <motion.img
                src={limitations[0].img}
                alt={limitations[0].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <span className="limitation-title">{limitations[0].title}</span>
            </div>
            <p>{limitations[0].text}</p>
          </motion.div>
        </div>
        <div className='container-section-4-second-line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="124" viewBox="0 0 96 124" fill="none">
            <path d="M95 123C66.4925 112.986 7.78188 74.5665 1 1" stroke="#ACC1DE" />
          </svg>
          <div className='container-section-4-second-line-blocks'>
            {limitations.slice(1, 3).map((limitation, index) => (
              <motion.div
                key={index}
                className="limitation-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="title-container">
                  <motion.img
                    src={limitation.img}
                    alt={limitation.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                  <span className="limitation-title">{limitation.title}</span>
                </div>
                <p>{limitation.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
