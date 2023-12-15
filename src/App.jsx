import './App.scss'
import Tooltip from './components/Tooltip';

function App() {
  const postions=['left', 'right', 'top', 'bottom'];  
  return (
    <>
      <Tooltip positions={postions} />
    </>
    
  )
}

export default App
