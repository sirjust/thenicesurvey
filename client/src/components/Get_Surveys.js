import React, {useEffect, useState} from 'react';
// import {QuestionContext} from '../App.js'; ////////////Note the context between brackets!!!
const axios = require('axios').default;


function Created_Surveys () {
    const [allSurveys, setAllSurveys] = useState([])
    
    useEffect(() => { 
        // useEffect requires a function to be returned
        async function fetchData(){
            //get title, id and questions
            const {data} = await axios.get('/api/surveys/')           
            setAllSurveys(data)                
        }        
        fetchData()   
    }, [])

    return(
        <div className="row justify-content-center">
            <h3 className="col-sm-12 mt-5 text-center">Your Surveys</h3>            
            { 
                allSurveys.map((data) => (     
                        <div className="card col-8 col-md-3 mt-1 mx-3 bg-info my-1 text-center" key={data._id}>              
                            <h5 className="card-title"> {data.title} </h5> 
                            <button className="btn btn-md btn-dark">View</button>
                            <div className="card-body text-white">Hello dear</div>
                        </div>                    
                ))
            }
            
        </div>
    )


}



export default Created_Surveys;