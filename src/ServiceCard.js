import React from "react";
import * as FontAwesome from "react-icons/fa";
import Icons from "./Icons";

const ServiceCard = (props) => {
    const cardID = props.cardNum
    return (
        <div className={cardID % 2 == 0 ? "service-odd col" : "service-even col"}>
            <div className='service-card p-2'>
                <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                        <span className='fw-light text-uppercase'>{props.cardTitle}</span>
                        <Icons iconName={props.iconURL} />
                    </h5>
                    <div className='service-card-text mt-4'>
                        <p className='text-justify'>
                            {props.cardText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
