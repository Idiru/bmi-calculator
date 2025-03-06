import './App.css'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'
import Tips from "./components/Tips/Tips"
import Limitation from "./components/Limitation/Limitation"


function App() {

  const tips = [
    {
      img: "/pasta.svg",
      alt: "food",
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
    },
    {
      img: "/sport.svg",
      alt: "sport",
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
    },
    {
      img: "/sleep.svg",
      alt: "sleep",
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
    }
  ]

  const limitations = [
    {
      img: "/gender.svg",
      alt: "gender",
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
      img: "/cake.svg",
      alt: "cake",
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
      img: "/muscle.svg",
      alt: "muscle",
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
      img: "/baby.svg",
      alt: "baby",
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
      img: "/human.svg",
      alt: "human",
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
    },
  ]

  return (
    <>
      <div className='hero'>
        <div className='container-bcg'>

          <Navbar />
          <div className='container-hero'>
            <div className='container-content'>
              <h1>Body Mass
                Index Calculator</h1>
              <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <Calculator />
          </div>
        </div>

      </div>
      <div className='container-section-2'>
        <div className='container-items'>
          <img src="/sushi-man.png" alt="sushi" />
          <div className='section-2-content'>
            <h2>What your BMI result means</h2>
            <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
          </div>
        </div>
      </div>
      <div className='container-section-3'>
        {
          tips.map((tip) => {
            return <Tips img={tip.img} alt={tip.alt} title={tip.title} text={tip.text} />
          })
        }
      </div>
      <div className='container-section-4'>
        <h2>Limitations of BMI</h2>
        <p className='section-4-text'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
        <div className='container-limitations'>
          {
            limitations.map((limitation) => {
              return <Limitation img={limitation.img} alt={limitation.alt} title={limitation.title} text={limitation.text} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
