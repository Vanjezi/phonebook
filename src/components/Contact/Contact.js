import React from 'react';
import './Contact.css'


function Contact(props) {
    return (
        <div className={`all-contact-page  ${props.tab === 1 ? '' : ''}`}  >

            <div><span className="material-icons icon-size acount-icon">
                account_box
        </span></div>

            <div className="contact-info">
                <div className="name">{props.item.name}</div>
                <div className="number">{props.item.phone}</div>
            </div>
            <button className="btn-icon" id={props.item.id}

                onClick={(e) => {

                    props.onGetIndex(e.currentTarget.id);

                    props.onChangeTab(3)




                }}><span className="material-icons icon-size edit-icon" >
                    visibility
        </span></button>
            <button id="delete-btn" className="btn-icon"><span className="material-icons icon-size delete-icon"
                onClick={(e) => {
                    e.stopPropagation();
                    props.onDeleteContact(props.item);
                }}>
                delete_forever
        </span></button>

        </div>
    );

}

export default Contact;