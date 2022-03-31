import { useEffect, useRef, useState } from "react"
import { generatePass, validate } from "../Hooks/generatePass"
    
const useForm =(characters,checkOpt,ref)=>{

    const [data , setData] = useState('Aqui se generara el password')

    const submit =(e)=>{
        e.preventDefault()
        if(validate(ref)){
            setData(generatePass(characters,checkOpt)) 
        }else{
            // console.log('No hay nada seleccionado')
            setData('Seleccioná al menos UNA opcion')
        }
    }

    return [characters,
            checkOpt,
            data,
            submit]
}

export default useForm