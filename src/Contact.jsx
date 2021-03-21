import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        txtmsg:''
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
            Your name is ${data.fname} ${data.lname}. your number is ${data.phone}. your email is ${data.email}
        `)
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center"><span className="service_title">Contact us</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 offset-md-3 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="row">
                            <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="fname" className="form-label"><b>First Name</b></label>
                                <input type="text" className="form-control" id="fname" name="fname" value={data.fname} onChange={inputEvent} placeholder="First Name"/>
                            </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label for="lname" className="form-label"><b>Last Name</b></label>
                                    <input type="text" className="form-control" id="lname" name="lname" value={data.lname} onChange={inputEvent} placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label for="email" className="form-label"><b>Email address</b></label>
                                    <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label for="phone" className="form-label"><b>Phone</b></label>
                                    <input type="tel" className="form-control" id="phone" name="phone" value={data.phone} onChange={inputEvent} placeholder="**********"/>
                                </div>
                            </div>
                        </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="txtmsg" value={data.txtmsg} onChange={inputEvent}></textarea>
                        </div>
                            <div className="col-12">
                            <button className="btn btn-outline-warning" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;