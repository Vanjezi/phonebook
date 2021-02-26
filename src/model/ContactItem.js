class ContactItem {

    constructor(name, phone, email, birthday, address, info, id, idIndex) {
        if (id !== idIndex) {
            this.id = Math.random().toString(36).substring(7);
        }
        else {
            this.id = id;
        }

        this.name = name;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.address = address;
        this.info = info;
        this.idIndex = idIndex
    }

    static fromJSON(json) {
        let contactJson = new ContactItem();
        contactJson.id = json.id;
        contactJson.name = json.name;
        contactJson.phone = json.phone;
        contactJson.email = json.email;
        contactJson.birthday = json.birthday;
        contactJson.address = json.address;
        contactJson.info = json.info;
        contactJson.idIndex = json.idIndex;


        return contactJson;
    }

}

export default ContactItem;



