import React from 'react';
import Contact from '../Contact/Contact'


function ContactAll(props) {

    return (
        <div>
            {props.items.map(function (value, index) {
                return <Contact key={index} item={value}
                    onDeleteContact={props.onDeleteContact}
                    onChangeTab={props.onChangeTab}
                    onGetIndex={props.onGetIndex}


                ></Contact>
            })}
        </div>
    );
}




export default ContactAll;