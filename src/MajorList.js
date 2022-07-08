import React from "react";
import { Link } from "react-router-dom";
const MajorList = (countrySub) => {
    console.log(countrySub)
    return (
        <div className="countrySub-List">
            {countrySub.countrySub.map((Subject) => (
                <div className="subject-preview" key={Subject.id}>
                    < Link
                        className='text-decoration-none'
                        to={`/${Subject.country}/${Subject.id}`} >
                        <li>{Subject.majorName} in {Subject.country}</li>
                    </ Link>
                </div>

            ))
            }

        </div >


    );
}

export default MajorList;