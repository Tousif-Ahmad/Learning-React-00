function Buttons(props){
  return(
    <>
      <button onClick={props.func}>{props.text}</button>
    </>
  )
}

export default Buttons