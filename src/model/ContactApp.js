import ContactItem from "./ContactItem";


class ContactApp {

    constructor() {

        this.items = this.loadFromLocalStorage();
        this.items.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)

    }

    add(item) {

        this.items.push(item);
        for (let i = 0; i < this.items.length; i++) {

            let t = this.items[i].id;
            let tt = item.idIndex;

            if (t === tt) {

                this.items[i] = item;

                this.items.splice(this.items.indexOf(item[i]), 1);

            }
            this.saveToLocalStorage();

        }
        this.items.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
        return this.items
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();
        return this.items;
    }

    saveToLocalStorage() {
        localStorage.setItem('conapp-data', JSON.stringify(this.items));
        return this.items;
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('conapp-data');

        if (json === null)
            return [];
        if (json === undefined)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {

            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let contactJson = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            contactJson.push(ContactItem.fromJSON(jsonParsed[i]));

        }

        return contactJson;
    }

}

export default ContactApp;