import './css/App.css';
import { Header } from './components/Header'
import { Heading } from './components/Heading'
import { InputText } from './components/InputText'
import { OutputCircle } from './components/OutputCircle'
import { Frequencies } from './components/Frequencies'
import { Examples } from './components/Examples'


export default function App() {

  return (
    <div className="App">

      <Header/>
      <Heading/>
      <OutputCircle />
      <InputText/>
      <Frequencies/>
      <Examples/>

    </div>
  )
}
