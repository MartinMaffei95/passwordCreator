import Field from "./Field"
import Form from "./Form"
import Submit from "./Submit"
import { useEffect, useRef, useState } from "react"
import useForm from "../../Hooks/useForm"
import useInput from "../../Hooks/useInput"


const CreatePassword = ()=>{
    const formRef = useRef()
    const [password, setPassword] = useState()
    const [ handlerCheck, handlerNum, check, data ] = useInput() //Hook con funciones handler y state check
    const [characters, checkOpt ,hookData, submit] = useForm(data,check,formRef) // Hook con funcion de password

    const copyToClipBoard =()=>{
        
        navigator.clipboard.writeText(password)
    }

    useEffect(()=>{
        setPassword(hookData)
    },[hookData])
    
    return(
        <>
        <div className="passwordGenerator">
            <div className="passwordContainer">
                <p>{password}</p>
                <div>
                    <button onClick={copyToClipBoard} className="copyButton">
                        <span className="material-icons copyIcon">content_copy</span>
                    </button>
                </div>
            </div>
            <Form submitFunc={submit} reference={formRef}>
                <Field type="number" name="characters" id="characters" value={data.characters} handlerFunction={handlerNum} label="Cantidad de Caracteres" />
                <Field type="checkbox" name="checkOption" id="mayus" value={check.mayus} label="Mayusculas?" handlerFunction={handlerCheck}/>
                <Field type="checkbox" name="checkOption" id="minus" value={check.minus} label="Minusculas" handlerFunction={handlerCheck}/>
                <Field type="checkbox" name="checkOption" id="symbol" value={check.symbol} label="Simbolos?" handlerFunction={handlerCheck}/>
                <Field type="checkbox" name="checkOption" id="number" value={check.number} label="Numeros?"  handlerFunction={handlerCheck}/>    
                <Submit value="Generar Password"/>
            </Form>
        </div>
        </>
    )
}

export default CreatePassword