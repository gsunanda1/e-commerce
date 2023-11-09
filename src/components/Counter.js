const Counter=({value,handleCountChange})=>{
    const decreaseCount=()=>{
        handleCountChange(-1);
    }
    const increaseCount=()=>{
        handleCountChange(+1);
    }
    return(
        <div className="counter">
            <button onClick={decreaseCount}>-</button>
            {value}
            <button onClick={increaseCount}>+</button>
        </div>
    )
}
export default Counter;