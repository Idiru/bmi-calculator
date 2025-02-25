import './App.css'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'

function App() {

  return (
    <>
      <div className='hero'>
        <div className='container-hero'>
          <Navbar />
          <div className='container-content'>
            <h1>Body Mass
              Index Calculator</h1>
            <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
          </div>
          <Calculator />
        </div>
      </div>
      <div className='container-section-2'>
        <img src="/sushi-man.png" alt="sushi" />
        <div className='section-2-content'>
          <h2>What your BMI result means</h2>
          <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>
      <div className='container-section-3'>
        
      </div>
    </>
  )
}

export default App
