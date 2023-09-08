import { nanoid } from 'nanoid';
// import css from './ContactList.module.css';

import { Component } from 'react';

class ContactList extends Component {
  itemKey = nanoid;
  render() {
    const { filteredContacts } = this.props;
    return (
      <ul>
        {filteredContacts().map(item => {
          return (
            <li key={this.itemKey()}>
              <p>
                {item.name}: {item.number}
              </p>
              <button
                type="button"
                onClick={() => {
                  this.props.onDeleteItem(item.name);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
