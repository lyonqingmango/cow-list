import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

    <div>

      <li value ={this.props.item.id}  onClick = {this.props.handleSelect}> {this.props.item.name} </li>

      </div>)


  }
}

export default Cow