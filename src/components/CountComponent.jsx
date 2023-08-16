const CountComponent = () =>{

    const [count, setCount] = useState(0);
  
    const incrementarCount =() =>{
      setCount (count +1);
    }
    const decrementarCount =() =>{
      setCount (count -1);
    }
  
    return(
      
    <div>          
          <h1>Contador</h1>
          <h2>{count}</h2>
      <ButtonComponents label="incrementar" onClickFunction={incrementarCount}/>
      <br />
      <ButtonComponents label="decrementar" onClickFunction={decrementarCount}/>
      <br />
  
    </div>
    )
  }
  
  export default CountComponent;