import React, { useEffect, useState } from "react";
import Analysis from './pages/Analysis/Analysis'
export default function Data() {
    const [Res, setRes] = useState([])
    useEffect(() => {
        fetch("https://hungry-skinny-cappelletti.glitch.me/tenants").then(
            res => setRes(res.data)
        )
    })
    return (
        <>
            <Analysis Res={Res}/>      
        </>
    )
}
  