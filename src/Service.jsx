import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Service = () => {
    return (
        <>
            <section className="service_sec">
                <div className="container">
                    <h1 className="text-center mb-5"><span className="service_title">Our services</span></h1>
                    <div className="row gy-4">
                        {
                            Sdata.map((val, index) => {
                                return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Service;