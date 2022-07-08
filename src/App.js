import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Major from "./Major";
import Subject from "./subject";
import itImage from "./images/subject/IT.jpg";
import mbaImage from "./images/subject/MBA.jpg";
import useFetch from "./useFetch";


const App = () => {
    const { error, isPending, data: USA } = useFetch('http://localhost:8000/mbaUSA')
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/USA'>
                            <Major
                                majorTitle='Study'
                                majorCountry='USA'
                                HighLight={[
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                ]}
                                text1={[
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                                        expedita nostrum repudiandae consequatur, ipsam odit facere
                                        eligendi maiores at porro commodi necessitatibus ipsum,
                                        minima corporis.
                                    </p>,
                                ]}
                            />
                        </Route>
                        <Route exact path='/bachelorUSA'>
                            <Major
                                majorTitle='Bachelors'
                                majorCountry='USA'
                                HighLight={[
                                    <li>Bachelors in USA is good</li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                ]}
                                a
                                text1={[
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                                        expedita nostrum repudiandae consequatur, ipsam odit facere
                                        eligendi maiores at porro commodi necessitatibus ipsum,
                                        minima corporis.
                                    </p>,
                                ]}
                            />
                        </Route>
                        <Route exact path='/bachelorUK'>
                            <Major
                                majorTitle='Bachelors'
                                majorCountry='UK'
                                HighLight={[
                                    <li>Bachelors in UK is good</li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Numquam, molestias.
                                    </li>,
                                ]}
                                a
                                text1={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                                text2={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                            />
                        </Route>
                        <Route exact path='/mbaUSA'>
                            <Subject
                                subjectName='MBA'
                                countryName='USA'
                                text1={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                                text2={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                                subjectImage={mbaImage}
                                subjectImageAlt='Accountant Smiling'
                            />
                        </Route>
                        <Route exact path='/itUSA'>
                            <Subject
                                subjectName='IT'
                                countryName='USA'
                                text1={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                                text2={[
                                    <p>
                                        Lorem UK UK ipsum dolor sit amet consectetur adipisicing
                                        elit. Qui expedita nostrum repudiandae consequatur, ipsam
                                        odit facere eligendi maiores at porro commodi necessitatibus
                                        ipsum, minima corporis.
                                    </p>,
                                ]}
                                subjectImage={itImage}
                                subjectImageAlt='Person Coding in Night'
                            />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
