const Form = ({ children , submitFunc ,reference})=>{

    return(
        <form className="passwordForm" ref={reference} onSubmit={ submitFunc }>
            { children }
        </form>
    )
}

export default Form