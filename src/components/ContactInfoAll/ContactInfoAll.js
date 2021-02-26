import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo'


function ContactInfoAll(props) {

    return (
        <div>

            {// eslint-disable-next-line
                props.items.map(function (value, index) {

                    if (value.id === props.idIndex) {


                        return <ContactInfo key={index} item={value}
                        ></ContactInfo>
                    }




                })}
        </div>
    );
}





export default ContactInfoAll;