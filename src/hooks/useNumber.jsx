import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect(()=>{
        axios.get()
        .then(res => {
            setNumbers(res.data)
        })
    },[])
    
    return numbers;
};

export default useNumber;