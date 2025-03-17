import './App.css';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Tips from "./components/Tips/Tips";
import Limitation from "./components/Limitation/Limitation";

function App() {
  const tips = [
    { img: "/pasta.svg", alt: "food", title: "Healthy eating", text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood." },
    { img: "/sport.svg", alt: "sport", title: "Regular exercise", text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity." },
    { img: "/sleep.svg", alt: "sleep", title: "Adequate sleep", text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation." }
  ];

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
                Better understand your weight in relation to your height using our body mass index (BMI) calculator...
              </motion.p>
            </div>
            <Calculator />
          </div>
        </div>
      </motion.div>
      <motion.div className='container-section-2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} 
      >
        <div className='container-items'>
          <motion.img
            src="/sushi-man.png" alt="sushi"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} 
          />
          <div className='section-2-content'>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} 
            >
              What your BMI result means
            </motion.h2>
            <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on...</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='container-section-3'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
      >
        {tips.map((tip, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} >
            <Tips img={tip.img} alt={tip.alt} title={tip.title} text={tip.text} />
          </motion.div>
        ))}
      </motion.div>
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

      {/* DESKTOP Limitations */}
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
