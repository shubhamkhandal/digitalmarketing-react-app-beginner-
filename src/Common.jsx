import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <main className="main" id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pt-5 d-flex justify-content-center flex-column">
                            <h1 className="main-title"> {props.name} <span className="brand_anim">imDigital</span></h1>
                            <h2 className="my-3 text-muted">We're the team of talented developer making websites</h2>

                            <div className="mt-3">
                                <NavLink exact to={props.visit} className="btn-get-started btn-lg">{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={props.imgsrc} alt="home-img" className="img-fluid img-anim" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Common;