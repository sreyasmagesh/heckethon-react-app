import React from "react"

const SearchSection = () => (
   <div style={{backgroundColor:"rgb(9, 49, 68)"}}>
     <div>
        <center>
          <h1 style={{fontSize:"30px",color:"white",paddingTop:"60px", fontFamily:"sans-serif",marginTop:"40px"}}>Explore Challenges</h1>
        </center>
     </div>
     <div>
       <center>
          <input style={{border:"1px",width:"50%",marginBottom:"50px",marginTop:"30px",height:"49px",borderRadius:"10px"}} />
          <button style={{marginLeft:"30px",padding:"10px 25px 10px 25px",borderRadius:"7px"}}>Filter </button>
       </center>

     </div>
   </div>
)
export default  SearchSection;