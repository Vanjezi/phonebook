import React from 'react';
import './Body.css';
import ContactAll from '../ContactAll/ContactAll';
import ContactInfoAll from '../ContactInfoAll/ContactInfoAll'

///////////////////////////////////////////////// ** code wrote by Marshall_GB ** /////////////////////////////////////////////////

class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            name: '',
            phone: '',
            email: '',
            birthday: '',
            address: '',
            info: '',
            idIndex: ''

        }
        this.heandleChange = this.heandleChange.bind(this);
        this.resetImput = this.resetImput.bind(this);

    }
    heandleChange(event) {

        let nam = event.target.name;
        let val = event.target.value.trimStart();
        this.setState({ [nam]: val })

    }
  

    resetImput() {

       
        this.setState({
            name: '',
            phone: '',
            email: '',
            birthday: '',
            address: '',
            info: '',
            idIndex: ''
        })

    }
    render() {

        return (
            <div className="main-container">

                <main className="main">

                    <div className={` ${this.props.tab === 1 ? '' : 'hide'}`}>

                        <ContactAll items={
                            this.props.items}
                            onChangeTab={this.props.onChangeTab}
                            onDeleteContact={this.props.onDeleteContact}
                            onGetIndex={this.props.onGetIndex}
                        ></ContactAll>

                    </div>

                    <div id="form" className={`  ${this.props.tab === 2 ? '' : 'hide'}`}>
                        <div className="add-new-page" value="form">
                            <div className="form-div-wrapper">
                                <label htmlFor="name">Name : </label>

                                <input type="text" maxLength="40" name="name" placeholder="Enter name" value={this.state.name} onChange={this.heandleChange} />
                            </div>
                            <div className="form-div-wrapper">
                                <label htmlFor="phone">Number : </label>
                                <input type="number" maxLength="30" name="phone" placeholder="Enter phone number" value={this.state.phone} onChange={this.heandleChange} ></input>

                            </div>
                            <div className="form-div-wrapper">
                                <label htmlFor="email" >Email : </label>

                                <input type="email" maxLength="50" name="email" placeholder="Enter email address" value={this.state.email} onChange={this.heandleChange} ></input>
                            </div>
                            <div className="form-div-wrapper">
                                <label htmlFor="birthday"  >Birthday : </label>

                                <input type="date" name="birthday" value={this.state.birthday} onChange={this.heandleChange}></input>
                            </div>
                            <div className="form-div-wrapper">
                                <label htmlFor="address"  >Address : </label>

                                <input type="text" name="address" maxLength="100" placeholder="Enter addres" value={this.state.address} onChange={this.heandleChange}></input>
                            </div>
                            <div className="form-div-wrapper">
                                <label htmlFor="info">More Information : </label>

                                <textarea type="text" maxLength="500" name="info" className="more-information" placeholder="Enter some info" value={this.state.info} onChange={this.heandleChange}  > </textarea>
                            </div>



                        </div>

                    </div>

                    <div id="info" className={`  ${this.props.tab === 3 ? '' : 'hide'}`}>
                        <ContactInfoAll
                            idIndex={this.props.idIndex}

                            items={this.props.items}></ContactInfoAll>

                    </div>

                </main>
                <footer className="footer">

                    <button id="add-contact-btn" className={`btn-icon ${this.props.tab === 1 ? '' : 'hide'}`}

                        onClick={this.resetImput}><span className="material-icons add-new-icon btn-icon add-new" onClick={() => this.props.changeTab(2)} >
                            person_add_alt_1
                </span></button>

                    <div className={`add-new-contact  ${this.props.tab === 2 ? '' : 'hide'}`}>

                        <button id="close-btn" className="btn-icon" onClick={this.resetImput}> <span className="material-icons add-new-icon delete-icon close-icon " onClick={() => this.props.changeTab(1)} >
                            close
                    </span></button>
                        <button id="save-btn" className="btn-icon" 
                        onClick={() => this.props.createContact(this.state.name, this.state.phone, this.state.email, this.state.birthday, this.state.address, this.state.info, this.state.id, this.state.idIndex)} >

                            <span className="material-icons add-new-icon edit-icon check-icon " >

                                check
                        </span></button>


                    </div>
                    <div className={` add-new-contact ${this.props.tab === 3 ? '' : 'hide'}`}>

                        <button className={`btn-icon `}> <span className="material-icons add-new-icon delete-icon close-icon " onClick={() => this.props.changeTab(1)}>
                            close
            </span></button>
                        <button className={`btn-icon `}  > <span className="material-icons add-new-icon edit-icon check-ico "
                            onClick={(e) => {
                                e.stopPropagation();
                                this.props.changeTab(2);
                                this.resetImput(e);
                                if (this.props.items.id === this.props.idIndex) {

                                }
                                for (const l in this.props.items) {
                                    if (this.props.items.hasOwnProperty(l)) {
                                        let element = this.props.items[l];
                                        if (element.id === this.props.idIndex) {
                                            this.setState({
                                                name: element.name,
                                                phone: element.phone,
                                                email: element.email,
                                                birthday: element.birthday,
                                                address: element.address,
                                                info: element.info,
                                                id: element.id,
                                                idIndex: this.props.idIndex
                                            })
                                        }
                                    }
                                }

                            }}
                        >
                            create
</span></button>


                    </div>


                </footer>
            </div>)
    }





}

export default Body;
