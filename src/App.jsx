import './App.scss'
import Tooltip from './components/Tooltip';

function App() {

  // defining positons array 
  const postions=['left', 'right', 'top', 'bottom'];  
  return (
    <>
      {/* passing position array to Tooltip component */}
      <Tooltip positions={postions} />
    </>
    
  )
}

export default App
