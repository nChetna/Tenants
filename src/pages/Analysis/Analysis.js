import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import "./Analysis.css";

export default function Analysis() {
  const { title } = useParams();
  const [res, setRes] = useState([]);
  
  useEffect(() => {
    async function getQuotes() {
      console.log(title , "title");
      
      const response = await fetch(`https://hungry-skinny-cappelletti.glitch.me/tenants/${title}`);
      const Data = await response.json();      
      setRes(Data);
    }

    getQuotes();
  }, []);

  console.log(res , "response");
  return (
     <div className="analysis">
        <div key={ res.id }>
          <h2>Name: {res.name}</h2>
          <h6>Status: {res.status}</h6>
          <h4>Category: {res.description}</h4>
        </div>
      </div>
  );
  
}
