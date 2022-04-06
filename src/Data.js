// const Data = [
//     {
//       id: 1,
//       title: "The Rock",
//       content: "blablabla about The Rock",
//       disclaimer: "*Disclaimer: This user could have comment filtering turned on",
//       slug: "hello-world",
//       img: "https://ilarge.lisimg.com/image/16801290/1080full-kylie-jenner.jpg"
//     },
//     {
//       id: 2,
//       title: "Kim Kardashian",
//       content: "blablabla about Kim Kardashian",
//       disclaimer: "*Disclaimer: This user could have comment filtering turned on",
//       slug: "hello-world",
//       img: ""
//     },
//     {
//       id: 3,
//       title: "Ronaldo",
//       content: "blablabla about Ronaldo",
//       disclaimer: "*Disclaimer: This user could have comment filtering turned on",
//       slug: "hello-world",
//       img: ""
//     }
//   ];
  
//   export default Data;
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
  