import { useState, useEffect } from 'react'
import Modal from './Modal'

function App() {
  const template = [0,0,0,0,0,0,0,0]
  const valores = [128,64,32,16,8,4,2,1]
  const [binario, setBinario] = useState(template)
  const [number,setNumber] = useState(0)
  const [puntos,setPuntos] = useState(0)
  const [suma,setSuma] = useState(0)
  const [vidas,setVidas] = useState(4)
  const [active,setActive] = useState(false)
  const [color,setColor] = useState('white')

  function handleClic(index){
    const array = [...binario]
    array[index] = array[index] == 1 ? 0 : 1
    setBinario(array)
  }

  useEffect(()=>{
    let total = 0;
    binario.map((elem,ind)=>{
      if(elem == 1){
        total = total + valores[ind]
      }
    })
    setSuma(total)
  },[binario])

  function check(){

    if(number == suma){
      confetti();
      setPuntos(puntos+10)
    }
    else{
      setColor('#ee4f4f')
      setTimeout(()=>{
        setColor('white')
      },500)
      setVidas(vidas-1)

      if(vidas < 2){
        setActive(true)
      }
    }
  }

  useEffect(()=>{
    setBinario(template)
    setNumber(Math.floor(Math.random()*254))

  },[puntos])

  return (
    <div className='game'>
      {active && <Modal active = {active} setActive = {setActive} puntos = {puntos} />}
      <header>
        <div className='info'>
          <em>Puntos: </em>
          <strong>{puntos}</strong>
        </div>
        <div className='info'>
          <em>Vidas: </em>
          <strong>{vidas}</strong>
        </div>
      </header>
      <div className='number confetti-button'>{number}</div>
      <main>
        {
          binario.map((elemento,index)=>{
            return <button className='binary-btn' key={index} style={{backgroundColor: elemento == 1 ? '#AE1D51' : '#F59827' }} onClick = {()=> handleClic(index)} >{elemento}</button>
          })
        }
      </main>
      <button className='comprobar' onClick={check} style={{backgroundColor: color}} >Comprobar</button>
    </div>
  )
}

export default App
