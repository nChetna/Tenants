// // import React from "react";
// // import "./Profile.css";

// // import ProfileItems from "../../components/ProfileItems/ProfileItems";

// // export default function Profile() {
// //   return (
// //     <div className="profile">
// //       <h1>Choose A Profile</h1>
// //       <div className="profile__container">
// //         <div className="profile__wrapper">
// //           <ul className="profile__items">
// //             <ProfileItems
// //               title="Kim Kardashian"
// //               src="images/KimK.jpg"
// //               text="Kim Kardashian - Skims"
// //               label="Social Media Influncer"
// //             />
// //             <ProfileItems
// //               title="The Rock"
// //               src="images/TheRock.jpg"
// //               text="The Rock - Zoa Energy Drink"
// //               label="Pressional Wrestler & Actor"
// //             />
// //             <ProfileItems
// //               title="Ronaldo"
// //               src="images/Ronaldo.jpg"
// //               text="Cristiano Ronaldo - Portugal Team"
// //               label="Professional Soccer Player"
// //             />
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


  
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import ProfileItems from "../../components/ProfileItems/ProfileItems";
import './Profile.css'

function App() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0)


  const getData = async() => {
      const res = await axios.get(`https://hungry-skinny-cappelletti.glitch.me/tenants`)
      const data = res.data;
                const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(pd => 
                    <div className="profile" key={pd.id}>
                        <h1>Choose A Profile</h1>
                        <div className="profile__container">
                            <div className="profile__wrapper">
                                <ul className="profile__items">
                                    <ProfileItems
                                        id={pd.id}
                                        title={pd.name}
                                        text={pd.type}
                                        // label={pd.status}
                                        />
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                setData(postData)
                setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div className="App">
      {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default App;
