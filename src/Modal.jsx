function Modal({active,setActive,puntos}){
  return(
    <div className='wrapper'>
      <div className='modal'>
        <h2>Has perdido 🙁 </h2>
        <h3>Puntos totales: {puntos}</h3>
        <button className='close-btn' onClick={()=>{window.location.reload()}} >Volver a jugar</button>
      </div>
    </div>
  )
}
export default Modal;