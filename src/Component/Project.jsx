import React from "react";
import mylogo from "../image/book.jpg"
const Project = () => {
    return ( 
    <section id="projects">
        <div className="projects-container">
            <div className="project-header">
                <h1 className="services-title">Recent <span> Projects</span> </h1>
            </div>
            <div className="all-projects">
                <div className="project-item">
                    <div className="project-info">
                        <h1>Project 1</h1>
                        <h2>Coding is love</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>

                    </div>
                    <div className="project-img">
                        <img src={mylogo} />
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-info">
                        <h1>Project 2</h1>
                        <h2>Coding is love</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>

                    </div>
                    <div className="project-img">
                        <img src={mylogo} />
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-info">
                        <h1>Project 3</h1>
                        <h2>Coding is love</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>

                    </div>
                    <div className="project-img">
                        <img src={mylogo} />
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-info">
                        <h1>Project 4</h1>
                        <h2>Coding is love</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>

                    </div>
                    <div className="project-img">
                        <img src={mylogo} />
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-info">
                        <h1>Project 5</h1>
                        <h2>Coding is love</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>

                    </div>
                    <div className="project-img">
                        <img src={mylogo} />
                    </div>
                </div>

            </div>
        </div>

    </section> 
    );
}
 
export default Project;