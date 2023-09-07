import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactsHandler = [];

  formSubmitData = data => {
    const ifSome = this.contactsHandler.some(name => name.name === data.name)
    
    if (!ifSome) {
      this.contactsHandler.push(data);
      this.setState({
        contacts: this.contactsHandler,
      });
      return;
    }
    alert(`The contact with name ${data.name} is already aded`);
  };

  onDeleteItem = name => {
    const lastItems = this.contactsHandler.filter(item => item.name !== name);
    this.contactsHandler = lastItems;
    this.setState({
      contacts: lastItems,
    });
  };

  onFilterChange = input => {
    const filteredItem = this.contactsHandler.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({
      contacts: filteredItem,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitHandler={this.formSubmitData} />

        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList
          allContacts={this.state.contacts}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}
