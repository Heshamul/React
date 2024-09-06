import { useEffect,useState } from "react";

function useCurrecyinfo( currency){
    const [data,setdata]=useState({})  //empty object isliye diya taki yeh crash na kare  
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then((res)=>res.json())
        .then((res)=>SVGMetadataElement(res[currency])); //take jo bhee currenct ho uske according data mile
    },[currency])
    console.log(data);
    return data;
}

export default useCurrecyinfo;