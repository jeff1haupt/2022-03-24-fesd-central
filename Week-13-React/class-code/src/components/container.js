import React from 'react';
import Form from './form';
import Navbar from './navbar';

function Container(props) {
    return(
        <div className='container-fluid'>
            <div className="row">
                <Navbar />
            </div>
            <div className='row'>
                <div className="col-6 mx-auto">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Container;