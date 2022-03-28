

const Field = ({label, name, id, type, value,handlerFunction})=>{
    return(
    <label className="passwordInput__label" htmlFor={id}> {label}
        <input className="passwordInput__input" name={name} id={id} type={type} checked={value} value={value} onChange={handlerFunction}/>
    </label>
    )
    
}

export default Field