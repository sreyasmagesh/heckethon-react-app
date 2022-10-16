import React from "react"

const ChallengeSection = () => (
  <div>
      <div>
        <center>
          <p style={{fontSize:"30px",fontFamily:"sans-serif",marginTop:"40px"}}>Why Participate in <span style={{color:"green"}}>AI Challenges?</span></p>
        </center>
      </div>
      <div>
        <div>
          <div className="card-group">
            <div className="card" style={{margin:"40px 150px 40px 150px",border:"white",backgroundColor:"ButtonShadow"}}>
              <div className="card-body">
                <h5 className="card-title">Prove your skill</h5>
                <p className="card-text">Gain substantial experiance by solving rea-world problems and pit against others to come up with innovative solutions.</p>
              </div>
            </div>
            <div className="card" style={{margin:"40px 150px 40px 150px",border:"white",backgroundColor:"ButtonShadow"}}>
              <div className="card-body">
                <h5 className="card-title">Learn from community</h5>
                <p className="card-text">One can look and analyze the solutions submitted by the other data scientists in the community and learn fromm them</p>
              </div>
          </div>
        </div>
        <div className="card-group">
            <div className="card" style={{margin:"40px 150px 40px 150px",border:"white",backgroundColor:"ButtonShadow"}}>
              <div className="card-body">
                <h5 className="card-title">Challenge yourself</h5>
                <p className="card-text">There is nothing for you to lose by participating in a challenge. You can fail safe,learn out of the entire experience and bounce back harder</p>
              </div>
            </div>
            <div className="card" style={{margin:"40px 150px 40px 150px",border:"white",backgroundColor:"ButtonShadow"}}>
              <div className="card-body">
                <h5 className="card-title">Earn recogonition</h5>
                <p className="card-text">you will stand out from the crowd if you well in AI challenges,it not helps you in the community but also earns rewards.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>


)
export default ChallengeSection;