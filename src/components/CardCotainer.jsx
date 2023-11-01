import { useEffect } from "react"

export default function CardCotainer(){
    //1. As soon as component loads -fetch data
    useEffect(() => {
        fetch('http://localhost:8080')
        .then((res => res.json))
        .then((data) => console.log(data))
        .catch(err => console.error(err))
    }, [])
    /**
     * 2.put data in state variable
     * 3.Map data array in state variable
     * 4.Then return jsx from the map -
     */
    return(
        <>
        <h2>
            This is card container
        </h2>
        </>
    )
}