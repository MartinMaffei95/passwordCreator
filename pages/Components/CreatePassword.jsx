import Field from "./Field"
import Form from "./Form"
import Submit from "./Submit"
import { useRef, useState } from "react"

const CreatePassword = ()=>{


    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890'
    const symbols = '!@#$%&/()=+-'

    const getLowerCase =()=>{
        return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
    }

    const getUpperCase =()=>{
        return upperLetters[Math.floor(Math.random() * upperLetters.length)]
    }

    const getNumbers =()=>{
        return numbers[Math.floor(Math.random() * numbers.length)]
    }

    const getSymbols =()=>{
        return symbols[Math.floor(Math.random() * symbols.length)]
    }
    
    

    const generateChain = ()=>{
        const characterChain = []
        
        if(check.mayus){
            characterChain.push(getUpperCase())
        }
        if(check.minus){
            characterChain.push(getLowerCase())
        }
        if(check.number){
            characterChain.push(getNumbers())
        }
        if(check.symbol){
            characterChain.push(getSymbols())
        }
        if(data.characters ==='' ){
            characterChain = []
        }
        return characterChain[Math.floor(Math.random() * characterChain.length)]; 
    }

    const generatePass = ()=>{
        const len = data.characters;
        let pass = '';
        for(let i = 0; i < len; i++ ){
            const n = generateChain()
            pass += n;
        }
        setPassword(pass)
    }

    const formRef = useRef()

    const validate = ()=>{
        let nonSelected = 0;
         for (let i = 0; i < formRef.current.length; i++) {
             if(formRef.current[i].name === 'checkOption' && formRef.current[i].checked === false){
                nonSelected ++
            }
         }
         if(nonSelected === 4){
            return false
        }else{
            return true
        }
    }

    const submit =(e)=>{
        e.preventDefault()
        if(validate()){
            generatePass()
        }else{
            setPassword('Seleccioná al menos UNA opcion')
        }
    }

    const handlerCheck= (e)=>{
        setCheck({
            ...check,
            [e.target.id] : e.target.checked}
        )
    }

    const handlerNum= (e)=>{
        setData({
            ...data,
            [e.target.id] : e.target.value}
        )
    }

    const [check, setCheck] = useState(
        {   mayus:false,
            minus:false,
            symbol:false,
            number:true
        }
    )

    const[data,setData] = useState({
        characters: '4',
    })

    const [password, setPassword] = useState('Aqui se generara el password')

    
    return(
        <>
        <div className="passwordGenerator">
            <div className="passwordContainer"><p>{password}</p></div>
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