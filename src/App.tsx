import './css/App.css';
import { InputText } from './components/InputText'
import { OutputCircle } from './components/OutputCircle'
import { useWordObjects } from './hooks/useWordObjects';




export default function App() {

  return (
    <div className="App">

      <InputText/>
      <OutputCircle />

    </div>
  )
}
