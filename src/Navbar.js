import React from "react";
import { Link } from "react-router-dom";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import MajorList from "./MajorList";
import useFetch from "./useFetch";
import SubjectList from "./SubjectList";


const Navbar = () => {
    const {
        data: countrySub,
    } = useFetch("http://localhost:8000/majorUSA");
    const {
        data: countryCourses,
    } = useFetch("http://localhost:8000/subjectUSA");
    return (
        <header className='mx-0 px-0'>
            <nav className='navbar navbar-expand-lg main-navbar'>
                <div className='container-md  px-sm-5'>
                    <Link className='navbar-brand' to='/'>
                        <img
                            src={NavbarMainLogo}
                            alt='Company Logo'
                            className='d-inline-block img-fluid align-text-top'
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'>
                            <i className='bi bi-list'></i>
                        </span>
                    </button>
                    <div
                        className='collapse navbar-collapse top-navbar'
                        id='navbarNavDropdown'>
                        <div className='d-flex d-lg-none  justify-content-between align-content-center'>
                            <div className='small-logo-container m-3'>
                                <img
                                    className='img-fluid'
                                    src='./images/emperor/smallLogo.png'
                                    alt='Company Logo'
                                />
                            </div>
                            <div className='close-btn-holder w-auto d-flex justify-content-end'>
                                <button
                                    className='navbar-toggler navbar-close-btn'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#navbarNavDropdown'
                                    aria-controls='navbarNavDropdown'
                                    aria-expanded='false'
                                    aria-label='Toggle navigation'>
                                    <span className='navbar-close-icon'>
                                        <i className='bi bi-x-lg'></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='d-flex w-100 justify-content-start justify-content-lg-center'>
                            <ul className='navbar-nav'>
                                <li className='nav-item home-dropDown dropdown'>
                                    <a
                                        className='nav-link dropdown-link d-flex home-dropDown'
                                        href='#'
                                        id='navbarDropdownMenuLink'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        Home{" "}
                                        <span className='drop-icon'>
                                            <i className='bi bi-chevron-down'></i>
                                        </span>
                                    </a>
                                    <ul
                                        className='list-unstyled small-dropdown home-dropdown-container'
                                        aria-labelledby='navbarDropdownMenuLink'>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Team
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                For University
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                For Franchise
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item text-danger' href='#'>
                                                We're Hirring
                                            </a>
                                        </li>
                                    </ul>
                                </li>
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
                                                        {countrySub && <MajorList countrySub={countrySub} />}
                                                    </div>
                                                </div>
                                                <div className='col p-3 overflow-hidden'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>A-E</li>
                                                            {countryCourses && <SubjectList countryCourses={countryCourses} />}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>E-L</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>L-Z</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className='nav-item uk-dropDown'>
                                    <a
                                        className='nav-link dropdown-link d-flex uk-dropDown'
                                        href='#'
                                        id='uk-dropDown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        UK{" "}
                                        <span className='drop-icon'>
                                            <i className='bi bi-chevron-down'></i>
                                        </span>
                                    </a>
                                    <ul
                                        className='list-unstyled uk-dropdown-container overflow-hidden long-dropdown'
                                        aria-labelledby='navbarDropdownMenuLink'>
                                        <li className=''>
                                            <div className='row row-cols-lg-4 row-cols-1 '>
                                                <div className='col sub-first-col p-3'>
                                                    <div className='long-sub-1'>
                                                        <ul className='list-unstyled'>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/major.html'>
                                                                <li>Study in UK</li>
                                                            </a>
                                                            <Link
                                                                className='text-decoration-none'
                                                                to='/bachelorUK'>
                                                                <li>Bachelors in UK</li>
                                                            </Link>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className='col p-3 overflow-hidden'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>A-E</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>E-L</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>L-Z</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in UK</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className='nav-item canada-dropDown'>
                                    <a className='nav-link d-flex canada-dropDown' href='#'>
                                        Canada{" "}
                                        <span className='drop-icon'>
                                            <i className='bi bi-chevron-down'></i>
                                        </span>{" "}
                                    </a>
                                    <ul
                                        className='list-unstyled canada-dropdown-container overflow-hidden long-dropdown'
                                        aria-labelledby='navbarDropdownMenuLink'>
                                        <li className=''>
                                            <div className='row row-cols-lg-4 row-cols-1 '>
                                                <div className='col sub-first-col p-3'>
                                                    {/* <!-- USA 1st Col --> */}
                                                    <div className='long-sub-1'>
                                                        <ul className='list-unstyled'>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/major.html'>
                                                                <li>Study in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- USA 2nd Col --> */}
                                                <div className='col p-3 overflow-hidden'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>A-E</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>E-L</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>L-Z</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Canada</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className='nav-item aus-dropDown'>
                                    <a className='nav-link d-flex aus-dropDown' href='#'>
                                        Australia{" "}
                                        <span className='drop-icon'>
                                            <i className='bi bi-chevron-down'></i>
                                        </span>{" "}
                                    </a>
                                    <ul
                                        className='list-unstyled aus-dropdown-container overflow-hidden long-dropdown'
                                        aria-labelledby='navbarDropdownMenuLink'>
                                        <li className=''>
                                            <div className='row row-cols-lg-4 row-cols-1 '>
                                                <div className='col sub-first-col p-3'>
                                                    {/* <!-- USA 1st Col --> */}
                                                    <div className='long-sub-1'>
                                                        <ul className='list-unstyled'>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/major.html'>
                                                                <li>Study in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- USA 2nd Col --> */}
                                                <div className='col p-3 overflow-hidden'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>A-E</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>E-L</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col p-3'>
                                                    <div className='long-sub-2'>
                                                        <ul className='list-unstyled'>
                                                            <li className='alphabet-heading'>L-Z</li>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>MBA in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in Australia</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                            <a
                                                                className='text-decoration-none'
                                                                href='./pages/subject.html'>
                                                                <li>Study in USA</li>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='p-lg-0 p-3'>
                            <button className='btn w-100 btn-type-2 text-nowrap p-2'>
                                Get Free Advice
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
