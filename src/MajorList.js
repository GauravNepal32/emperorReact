import React from "react";
import { Link } from "react-router-dom";

const MajorList = (props) => {
  const { countrySub, countryName } = props;
  return (
    <div className='countrySub-List'>
      {countrySub.map((Subject) => (
        <div>
          {Subject.country == countryName && (
            <ul className='list-unstyled' key={Subject.id}>
              <Link
                className='text-decoration-none'
                to={`/majorUSA/${Subject.id}`}>
                <li>
                  {Subject.majorName} in {Subject.country}
                </li>
              </Link>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MajorList;
