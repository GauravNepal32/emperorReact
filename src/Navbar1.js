import React from "react";
import { Link } from "react-router-dom";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import useFetch from "./useFetch";
import MajorList from "./MajorList";

const Navbar1 = () => {
    const { data: countrySub, error, isPending } = useFetch("http://localhost:8000/countrySub")
    return (
        <header className='mx-0 px-0'>
            <nav className='navbar navbar-expand-lg main-navbar'>
                <div className='container-md  px-sm-5'>


                    <div
                        className='collapse navbar-collapse top-navbar'
                        id='navbarNavDropdown'>
                        <div className='d-flex w-100 justify-content-start justify-content-lg-center'>
                            <ul className='navbar-nav'>
                                <li className='nav-item usa-dropDown dropdown'>
                                    <a
                                        className='nav-link dropdown-link d-flex usa-dropDown'
                                        href='#'
                                        id='usa-dropDown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        USA{" "}
                                        <span className='drop-icon'>
                                            <i className='bi bi-chevron-down'></i>
                                        </span>
                                    </a>
                                    <ul
                                        className='list-unstyled usa-dropdown-container overflow-hidden long-dropdown'
                                        aria-labelledby='navbarDropdownMenuLink'>
                                        <li className=''>
                                            <div className='row row-cols-lg-4 row-cols-1 '>
                                                <div className='col sub-first-col p-3'>
                                                    <div className='long-sub-1'>
                                                        {error && <div>{error}</div>}
                                                        {isPending && <div>Loading...</div>}
                                                        {countrySub && <MajorList countrySub={countrySub} />}
                                                    </div>
                                                </div>
                                                {/* <div className='col p-3 overflow-hidden'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>A-E</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>E-L</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>

                                                        </ul>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar1;
