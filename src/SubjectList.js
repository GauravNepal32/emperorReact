import React from "react";
import { Link } from "react-router-dom";

const SubjectList = (countryCourses) => {
    return (
        <div className='countrySub-List'>
            {countryCourses.countryCourses.map((Courses) => (
                <div>
                    <ul className='list-unstyled' key={Courses.id}>
                        <Link
                            className='text-decoration-none'
                            to={`/majorUSA/${Courses.id}`}>
                            <li>
                                {Courses.subjectName} in {Courses.country}
                            </li>
                        </Link>
                    </ul>
                </div>

            ))}
        </div>
    )
};

export default SubjectList;