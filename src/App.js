import React, { useState } from 'react'
import SingleColour from './SingleColour'
import Values from 'values.js'
import { adjustHue } from 'color2k';


function App() {
  const [colour, setColour] = useState('');
  const [error, setError] = useState(false);
  const low = -30;
  const mid = 180;
  const high = 225;
  const [secondlist, setSecondList] = useState(new Values(adjustHue('#f15025',low)).all(20));
  const [list, setList] = useState(new Values('#f15025').all(20));
  const [thirdlist, setThirdList] = useState(new Values(adjustHue('#f15025',mid)).all(20));
  const [fourthlist, setFourthList] = useState(new Values(adjustHue('#f15025',high)).all(20));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colours = new Values(colour).all(20)
      setList(colours)
      colours = new Values(adjustHue(colour, low)).all(20)
      setSecondList(colours)
      colours = new Values(adjustHue(colour, mid)).all(20)
      setThirdList(colours)
      colours = new Values(adjustHue(colour, high)).all(20)
      setFourthList(colours)

    } catch (error) {
      setError(true)

    }

  }

  return (
    <>
      <section className="container">
        <h1>Colour Palette Generator</h1>
      </section>
      
      <section className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>

      <section className="all-colours">
      <section className="colours">
        {secondlist.map((colour, index) => {
          const hex = colour.hex
          return <SingleColour key={index} {...colour} index={index}
            hexColour={colour.hex}/>
        })}

      </section>
      <section className="colours">
        {list.map((colour, index) => {
          const hex = colour.hex
          return <SingleColour key={index} {...colour} index={index}
            hexColour={colour.hex}/>
        })}
      </section>
      <section className="colours">
        {thirdlist.map((colour, index) => {
          const hex = colour.hex
          return <SingleColour key={index} {...colour} index={index}
            hexColour={colour.hex}/>
        })}

      </section>
      <section className="colours">
        {fourthlist.map((colour, index) => {
          const hex = colour.hex
          return <SingleColour key={index} {...colour} index={index}
            hexColour={colour.hex}/>
        })}

      </section>
      </section>
    </>
  );
}

export default App;
