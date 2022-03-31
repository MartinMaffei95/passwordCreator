import { useRef, useState } from "react"
    
const useInput =()=>{

    const handlerCheck= (e)=>{
        setCheck({
            ...check,
            [e.target.id] : e.target.checked}
        )
    }

    const [check, setCheck] = useState(
        {   mayus:false,
            minus:false,
            symbol:false,
            number:true
        }
    )

    const handlerNum= (e)=>{
        setData({
            ...data,
            [e.target.id] : e.target.value}
        )
    }
    const[data,setData] = useState({
        characters: '4',
    })
   
    return [handlerCheck, handlerNum, check, data]

    // const reference = useRef()

    //     const checkedHandler = (e)=>{
    //         console.log(reference.current,'Input modificado')
    //     }

    // return [reference, checkedHandler]
}

export default useInput