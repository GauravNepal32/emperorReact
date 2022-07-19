import React from "react";
import { Link } from "react-router-dom";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import MajorList from "./MajorList";
import useFetch from "./useFetch";
import SubjectList from "./SubjectList";

const Navbar = () => {
  const { data: countrySub } = useFetch("http://localhost:8000/majorUSA");
  const { data: USCourses } = useFetch("http://localhost:8000/subjectUSA");
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
                  <Link
                    className='nav-link dropdown-link d-flex home-dropDown'
                    to='a'
                    id='navbarDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Home
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </Link>
                  <ul
                    className='list-unstyled small-dropdown home-dropdown-container'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li>
                      <Link className='dropdown-item' to='/about'>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='a'>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='a'>
                        Test Preparation
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='a'>
                        Contact Us
                      </Link>
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
                                countryName='USA'
                              />
                            )}
                          </div>
                        </div>
                        <div className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='USA'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='USA'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='USA'
                                />
                              )}
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
                                countryName='UK'
                              />
                            )}
                          </div>
                        </div>
                        <div className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='UK'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='UK'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='UK'
                                />
                              )}
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
                          <div className='long-sub-1'>
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
                                countryName='Canada'
                              />
                            )}
                          </div>
                        </div>
                        <div className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='Canada'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='Canada'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='Canada'
                                />
                              )}
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
                          <div className='long-sub-1'>
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
                                countryName='Australia'
                              />
                            )}
                          </div>
                        </div>
                        <div className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='Australia'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='Australia'
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='Australia'
                                />
                              )}
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
