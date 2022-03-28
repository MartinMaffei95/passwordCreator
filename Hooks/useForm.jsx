import { useRef } from "react"
    
const useForm =(data)=>{


    const reference = useRef()

        const submit = (e)=>{
            
            e.preventDefault()
            console.log(reference.current,'click en generar')
            // setData({

            // })
        }

    return [data, reference, submit]
}

export default useForm