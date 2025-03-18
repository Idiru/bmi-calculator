import './App.css';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Tips from "./components/Tips/Tips";
import Limitation from "./components/Limitation/Limitation";
import BmiMeaning from './components/BmiMeaning/BmiMeaning';

function App() {

  const limitations = [
    { img: "/gender.svg", alt: "gender", title: "Gender", text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." },
    { img: "/cake.svg", alt: "cake", title: "Age", text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." },
    { img: "/muscle.svg", alt: "muscle", title: "Muscle", text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." },
    { img: "/baby.svg", alt: "baby", title: "Pregnancy", text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." },
    { img: "/human.svg", alt: "human", title: "Race", text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." },
  ];

  return (
    <>
      <motion.div className='hero'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='container-bcg'>
          <Navbar />
          <div className='container-hero'>
            <div className='container-content'>
              <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                Body Mass Index Calculator
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.              </motion.p>
            </div>
            <Calculator />
          </div>
        </div>
      </motion.div>
      <BmiMeaning/>
      <Tips />
      <motion.div className='container-section-4 mobile' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} >
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          Limitations of BMI
        </motion.h2>
        <motion.p className='section-4-text' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
          Although BMI is often a practical indicator of healthy weight...
        </motion.p>
        <div className='container-limitations'>
          {limitations.map((limitation, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }} >
              <Limitation img={limitation.img} alt={limitation.alt} title={limitation.title} text={limitation.text} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className='container-section-4 desktop' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} >
        <div className='container-section-4-first-line'>
          <div className='container-section-4-first-text'>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
              Limitations of BMI
            </motion.h2>
            <motion.p className='section-4-text' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
              Although BMI is often a practical indicator of healthy weight...
            </motion.p>
          </div>
          <Limitation img="/gender.svg" alt="gender" title="Gender" text="The development and body fat composition of girls and boys vary with age..." />
        </div>
        <div className='container-section-4-second-line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="124" viewBox="0 0 96 124" fill="none">
            <path d="M95 123C66.4925 112.986 7.78188 74.5665 1 1" stroke="#ACC1DE" />
          </svg>
          <div className='container-section-4-second-line-blocks'>
            <Limitation img="/cake.svg" alt="cake" title="Age" text="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." />
            <Limitation img="/muscle.svg" alt="muscle" title="Muscle" text="BMI may misclassify muscular individuals as overweight or obese..." />
          </div>
        </div>
        <div className='container-section-4-third-line'>
          <Limitation img="/baby.svg" alt="baby" title="Pregnancy" text="Expectant mothers experience weight gain due to their growing baby..." />
          <Limitation img="/human.svg" alt="human" title="Race" text="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs..." />
        </div>
      </motion.div>
    </>
  );
}

export default App;
