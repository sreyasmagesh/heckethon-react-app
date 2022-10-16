import React from "react"
import pic from "./images/rocket.png";
import line from "./images/line.png"
import {useNavigate} from 'react-router-dom'
const MainSection = () => {
  const navigate = useNavigate()
  return (
    <div className="main">
        <div className="line">
          <img src={line} />
        </div>
        <div className="heading">
          <h1>
            Accelerate Innovation <br/>
              with Global AI Challenges
          </h1>
          <p>
             AI Challenges at Dph simulate real-world problem.It is a <br/>
             great place to put you AI/Data Science skills to test on <br/>
             diverse datasets allowing you to foster learning through <br/>
             competeitions
          </p>
          <button onClick={() => {
            navigate('/createChallenge')
          }}>Create Challenge</button>
        </div>
        <div className="img">
          <img src={pic} />
        </div>
    </div>
  )
        }
export default MainSection;