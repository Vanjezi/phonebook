import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

import ContactItem from './model/ContactItem';
import ContactApp from './model/ContactApp'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.contactApp = new ContactApp();
    this.state = {
      activTab: 1,
      items: this.contactApp.items,
      idIndex: ""
    }
    this.changeTab = this.changeTab.bind(this);
    this.eximenePath = this.eximenePath.bind(this);
    this.createContact = this.createContact.bind(this);

    this.getIndex = this.getIndex.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  componentDidMount() {
    this.eximenePath();
    window.onpopstate = this.eximenePath;
  }

  eximenePath() {
    switch (window.location.pathname) {
      case '.all-contact':
      case 1:
      default:
        this.setState({ activTab: 1 });
        break;
      case '/new-contact':
      case 2:
        this.setState({ activTab: 2 });
        break;
      case '/contact-info':
      case 3:
        this.setState({ activTab: 3 });
        break;
    }
  }
  changeTab(tab) {
    if (this.state.activTab === tab)
      return

    switch (tab) {
      case 1:
      default: this.setState({ activTab: 1 });
        window.history.pushState(null, "Tab1", "/all-contact");
        break;
      case 2:
        this.setState({ activTab: 2 });
        window.history.pushState(null, "Tab2", "/new-contact");
        break;
      case 3:
        this.setState({ activTab: 3 });
        window.history.pushState(null, "Tab3", "/contact-info");
        break;


    }
  }
  createContact(name, phone, email, birthday, address, info, id, idIndex) {

    if (name === "") { alert('Enter name'); return };

    if (phone === "") { alert('Enter Phone'); return };

    let item = new ContactItem(name, phone, email, birthday, address, info, id, idIndex);
    let items = this.contactApp.add(item);
    this.setState({ items: items });
    this.changeTab(1);
  }
  getIndex(id) {

    this.idIndex = id;
    this.setState({ idIndex: id });
    return this.idIndex
  }
  searchContact (tar){
     this.contactApp.serch (tar)
  }
  deleteContact(item) {

    let items = this.contactApp.delete(item);
    this.setState({ items: items });
  }
  render() {
    return (<div id="div-wrapper">
      <Header>
      </Header>
      <Body changeTab={this.changeTab} tab={this.state.activTab}
        createContact={this.createContact}
        onChangeTab={this.changeTab}
        idIndex={this.state.idIndex}
        items={this.state.items}
        onGetIndex={this.getIndex}
        onContactCLick={this.state.activeTab}
        onDeleteContact={this.deleteContact}
        onSearchCOntact = {this.searchContact}></Body>
       


    </div>)
  }


}

export default App;
