import React from "react";
import CallBack from "./CallBack";

const Major = (props) => {
    const pageTitle =
        props.majorTitle + " in " + props.majorCountry + " | Emperor";
    document.title = pageTitle;
    return (
        <div className='main-container my-5'>
            <div className='container px-sm-5'>
                <div className='row justify-content-between'>
                    <div className='col-md-8 col-12'>
                        <div className='d-flex'>
                            <div className='color-container'></div>
                            <div className='major-content-holder pt-5 pb-3'>
                                <nav className='text-white' aria-label='breadcrumb'>
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'>
                                            <a
                                                className='text-decoration-none text-black'
                                                href='../index.html'>
                                                Home
                                            </a>
                                        </li>
                                        <li
                                            className='breadcrumb-item text-black'
                                            aria-current='page'>
                                            {props.majorCountry}
                                        </li>
                                        <li
                                            className='breadcrumb-item text-grey'
                                            aria-current='page'>
                                            {props.majorTitle}
                                        </li>
                                    </ol>
                                </nav>
                                <div>
                                    <h1 className='main-heading'>
                                        {props.majorTitle} in {props.majorCountry}
                                    </h1>
                                    <h3 className='major-sub-heading mt-4'>
                                        Highlights of {props.majorTitle} in {props.majorCountry}
                                    </h3>

                                    <ul className='uList mt-3'>{props.HighLight}</ul>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 ps-md-4'>
                            <h3 className='major-sub-heading my-4'>
                                Why study in {props.majorCountry}?
                            </h3>
                            <p className='subject-paragraph'>{props.text1}</p>
                            <div className='mt-4 subject-image-container'>
                                <img
                                    className='img-fluid'
                                    src='../images/subject/masters-in-accounting-usa.jpeg'
                                    alt=''
                                />
                            </div>
                            <p className='img-caption text-center mt-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                                cupiditate?
                            </p>
                            <div className='success-rate mt-5'>
                                <img className='img-fluid' src='../images/success.png' alt='' />
                            </div>
                            <div className='major-description-container'></div>
                        </div>
                    </div>
                    <CallBack />
                </div>
            </div>
        </div>
    );
};

export default Major;
