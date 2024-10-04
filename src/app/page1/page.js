'use client'

import {useState, useEffect} from "react"
import Country from "@/components/Country"

export default function Page1(){

    const [countries, setCountries] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        const getCountries = async () => 
        {
            try{
                const res = await fetch("https://restcountries.com/v3.1/all")
                const dataJson = await res.json()
                setCountries(dataJson)
                console.log(dataJson)
            } catch (error){
                console.log("error: " + error)
                console.log("Nie udało się pobrać danych")
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        getCountries()
    }, [])   

    return (
        <div className="flex flex-wrap flex-row justify-center items-center h-screen">
            <p>{loading && "Ładowanie..."}</p> 
            {error && "Nie udało się pobrać danych"}
            {countries && countries.map((country, idx) => (
                <Country key={idx} country={country}/>
            ))}
        </div>
    )

}