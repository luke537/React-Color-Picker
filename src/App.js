import './App.css';
import GradientContainer from './components/GradientContainer';
import ColourView from './components/ColourView';
import HexInput from './components/HexInput';
import { useState } from 'react';

function App() {
  const [currentColour, setCurrentColour] = useState("#000000")
  const [baseColour, setBaseColour] = useState("#000000")

  const handleCurrentColourChange = (colour) => {
    setCurrentColour(colour)
  }

  const handleBaseColourChange = (colour) => {
    setBaseColour(colour)
  }

  return (
    <div>
      <div style={{display: "flex", flexWrap: "nowrap"}}>
        <ColourView colour={currentColour} />
        <GradientContainer baseColour={baseColour} handleClick={handleCurrentColourChange} />
      </div>

      <div style={{display: "flex", flexWrap: "nowrap", margin: 10}}>
        <HexInput text={currentColour} isDisabled={true} label="Selected Colour (Hex): "/>
        <HexInput isDisabled={false} handleSubmit={handleBaseColourChange} label="Input New Colour (Hex): " />
      </div>
    </div>
  );
}

export default App;