import { useState } from 'react'

import './App.css'
import Logo from './logo'
import Billz from './Bill'
import Selectipz from './selecttip'
import Nopeepz from './noofpeeps'
import Tipmount from './tipmount'
import Total from './total'
import Resetn from './resetbtn'

function App() {
  const [bill, setBill] = useState()
  const [peep, setPeep] = useState()
  const [custm, setCustm] = useState()
  const [seltip, setSeltip] = useState()
  function onReset(){ 
    setBill('')
    setPeep('')
    setCustm('')
    setSeltip('')
  }
  
  console.log(peep)

  return (
    <>
    <Logo  className="mnlog"/>
    {/* <div className="grid-example">
      <div className='grid-cell '>a</div>
      <div className='grid-cell '>b</div>
      <div className='grid-cell '>c</div>
      <div className='grid-cell '>d</div>
    </div> */}
    <div className='mn-w'>
      <div className='p1'>
        <Billz className='p1a' bill={bill} setBill={setBill}/>
        <Selectipz className='p1b' setSeltip={setSeltip} tip={seltip} custm={custm} setCustm={setCustm}/>
        <Nopeepz className='p1c' setPeep={setPeep} peep={peep}/>
      </div>
      <div className='p2'>
        <Tipmount tipmnt={((bill*(seltip/100))/peep)||((bill*(seltip/100))/peep)} />
        <Total tots={(((bill*(seltip/100))+bill)/peep)||(((bill*(seltip/100))+bill)/peep)}/>
        <Resetn onReset={onReset}  bill={bill}
    peep={peep}/>
      </div>
    </div>

    </>
  )
}

export default App
