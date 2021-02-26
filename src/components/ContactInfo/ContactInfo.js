import React from 'react';



function ContactInfo(props) {
    return (


        <div >
            <div className="info-wrapper">
                <p >Name : </p>

                <p> {props.item.name}</p>
            </div>
            <div className="info-wrapper">
                <p >Number : </p>
                <p>{props.item.phone}</p>

            </div>
            <div className="info-wrapper">
                <p >Email : </p>

                <p>{props.item.email}</p>
            </div>
            <div className="info-wrapper">
                <p >Birthday : </p>

                <p>{props.item.birthday}</p>
            </div>
            <div className="info-wrapper">
                <p >Address : </p>

                <p>{props.item.address}</p>
            </div>
            <div className="info-wrapper">
                <p >More Information : </p>

                <p>{props.item.info}</p>

            </div>
        </div>
    );

}

export default ContactInfo;