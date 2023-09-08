import { Component } from 'react';
// import css from './Filter.module.css';

class Filter extends Component {

  render() {
    const { onFilterChange } = this.props;
    return (
      <input
        onChange={e => onFilterChange(e)}
        type="text"
        value={this.props.filterInput}
      />
    );
  }
}

export default Filter;
