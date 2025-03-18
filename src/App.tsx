import './App.css';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Calculator from './components/Calculator/Calculator';
import Tips from "./components/Tips/Tips";
import Limitation from "./components/Limitation/Limitation";
import BmiMeaning from './components/BmiMeaning/BmiMeaning';

function App() {

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
      <BmiMeaning />
      <Tips />
      <Limitation />
    </>
  );
}

export default App;
