import React from 'react';
import Common from './Common';
import Aboutimg from '../src/img/Mobile Marketing-rafiki.svg';

const About = () => {
    return (
        <>
            <Common name='Welcome to About of ' imgsrc={Aboutimg} visit='/contact' btnname='Contact now' />

            <section className="sec_desc">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1">
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eum soluta? Delectus dolorem beatae ratione sit aliquid unde facilis ex, laborum distinctio dignissimos placeat ipsa inventore recusandae! Provident tenetur natus harum tempora! Esse, accusamus repudiandae. In temporibus tempore exercitationem accusantium iure eligendi veritatis voluptates iusto quos sed aliquam laudantium non tenetur incidunt deserunt, nulla possimus labore ipsam. Explicabo adipisci, quibusdam blanditiis accusamus sit animi, velit labore, doloremque illo nobis tempore fugiat? Nisi aperiam at doloribus eligendi corrupti? Iste, porro quam.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;