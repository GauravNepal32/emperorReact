import React from "react";

const SearchBox = () => {
    return (
        <div className="search-box-container d-flex flex-column justify-content-center align-content-center">
            <div className="container px-sm-4 my-auto">
                <button className="uni-btn"><i className="fa-solid fa-building-columns me-2"></i>Search for University</button>
                <div className="search-form-container text-center mt-3">
                    <div className="">
                        <div className="row g-1">
                            <div className="col-lg-3 col-md-4 col-12">
                                <select className="selectpicker text-black fw-bold w-100" name="degreeName" data-live-search="true"
                                    id="degreeName">
                                    <option className=" fw-bold" value="" disabled selected>Choose Degree</option>
                                    <option value="undergrad">Bachelors</option>
                                    <option value="master">Master</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <select className="selectpicker text-black fw-bold w-100" name="countryName" data-live-search="true"
                                    id="countryName">
                                    <option className=" fw-bold" value="" disabled selected>Choose Country</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <select className="selectpicker text-black fw-bold w-100" name="courseName" data-live-search="true"
                                    id="courseName">
                                    <option className=" fw-bold" value="" disabled selected>Choose Course</option>
                                    <option value="accounting">Accounting</option>
                                    <option value="it">Information Technology</option>
                                    <option value="nursing">Nursing</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="accounting">Accounting</option>
                                    <option value="it">Information Technology</option>
                                    <option value="nursing">Nursing</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="accounting">Accounting</option>
                                    <option value="it">Information Technology</option>
                                    <option value="nursing">Nursing</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Doctor">Doctor</option>

                                </select>
                            </div>
                            <div className="col-lg-2 col-12 d-flex"> <button className="search-box-btn w-100 text-uppercase fw-bold"><i
                                className="fa-solid fa-magnifying-glass me-2"></i>Search</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-white fw-bold">Find best University with our advance search</p>
        </div>
    );
}

export default SearchBox;