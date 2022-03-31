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
    
    

    const generateChain = (data,check)=>{
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

    export const generatePass = (data,checkOpt)=>{
        const len = data.characters;
        let pass = '';
        for(let i = 0; i < len; i++ ){
            const n = generateChain(data,checkOpt)
            pass += n;
        }
        return pass
    }


    export const validate = (ref)=>{
        let nonSelected = 0;
         for (let i = 0; i < ref.current.length; i++) {
             if(ref.current[i].name === 'checkOption' && ref.current[i].checked === false){
                nonSelected ++
            }
         }
         if(nonSelected === 4){
            return false
        }else{
            return true
        }
    }