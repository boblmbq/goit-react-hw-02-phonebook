import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitData = data => {
    const ifSome = this.state.contacts.some(
      name => name.name.toLowerCase() === data.name.toLowerCase()
    );
    if (ifSome) {
      alert(`The contact with name "${data.name}" is already aded`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, data],
    }));
  };

  onDeleteItem = name => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.name !== name),
    });
  };

  onFilterChange = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm submitHandler={this.formSubmitData} />

        <h2>Contacts</h2>
        <Filter
          onFilterChange={this.onFilterChange}
          filterInput={this.state.filter}
        />
        <ContactList
          allContacts={this.state.contacts}
          filteredContacts={this.getFilteredContacts}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}
