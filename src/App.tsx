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
    </>
  )
}

export default App
