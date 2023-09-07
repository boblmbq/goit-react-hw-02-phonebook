const { Component } = require('react');

class Filter extends Component {
  //  console.log(e.currentTarget.value);

  render() {
    const { onFilterChange } = this.props;
    return (
      <input
        onChange={(e) => onFilterChange(e.currentTarget.value)}
        type="text"
      />
    );
  }
}

export default Filter;
