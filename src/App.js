import { useState } from 'react'
import Header from './components/Header'
/* import DatePicker from 'react-datepicker' */
import Footer from './components/Footer'
import SchedulerApp from './components/SchedulerApp'

function App() {
  const [formVisible, setFormVisible] = useState(true)
  const formHandler = () => {
    setFormVisible(!formVisible)
  }
  return (
    <div className="App">
      <Header formHandler={formHandler} formVisible={formVisible} />
      <SchedulerApp formVisible={formVisible} />
      <Footer />
    </div>
  )
}

export default App
