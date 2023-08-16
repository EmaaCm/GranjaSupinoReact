

const ButtonComponents = ({label,onClickFunction}) =>{
    return(
       <button onClick={onClickFunction}> {label} </button>
    )

}
export default ButtonComponents;