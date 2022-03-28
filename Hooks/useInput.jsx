import { useRef } from "react"
    
const useInput =()=>{


    const reference = useRef()

        const checkedHandler = (e)=>{
            console.log(reference.current,'Input modificado')
        }

    return [reference, checkedHandler]
}

export default useInput