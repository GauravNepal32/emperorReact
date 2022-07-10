import React from "react";
import { Link } from "react-router-dom";

const MajorList = (countrySub) => {
    return (
        <div className='countrySub-List'>
            {countrySub.countrySub.map((Subject) => (
                <ul className='list-unstyled' key={Subject.id}>
                    <Link
                        className='text-decoration-none'
                        to={`/majorUSA/${Subject.id}`}>
                        <li>
                            {Subject.majorName} in {Subject.country}
                        </li>
                    </Link>
                </ul>
            ))}
        </div>
    )
};

export default MajorList;
