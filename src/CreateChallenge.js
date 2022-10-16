import React from "react";

const CreateChallenge = (props) => {
    return (
    <>
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h1>Challenge Details</h1><br/><br/>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Challenge Name</label><br/>
                                    <input className="form-control" type="text" placeholder="Challenge Name" /> 
                                </div><br/>
                                <div className="form-group">
                                    <label>Start Date</label><br/>
                                    <input className="form-control" type="text" placeholder="Start Date" /> 
                                </div><br/>
                                <div className="form-group">
                                    <label>End Date</label><br/>
                                    <input className="form-control" type="text" placeholder="End Date" /> 
                                </div><br/>
                                <div className="form-group">
                                    <label>Description</label><br/>
                                    <textarea style={{width:"100%"}}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Upload image</label><br/>
                                    <input className="form-control" type="image" placeholder="" /> 
                                </div><br/>
                             </div>
                          </div>
                        <button class="btn btn-primary btn-block confirm-button">Confirm</button>
                    </div>
                </div>
            </div>
    </>
 )
}

export default CreateChallenge