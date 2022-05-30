import React from 'react';
import Cow from './Cow.jsx'

class CowList extends React.Component {
  constructor(props) {
    super(props);
    console.log('cOWLIST'+this.props.list)
  }

  render() {
    return (
    <div>
      <ul>
        {this.props.list.map((item,key)=> <Cow item ={item} key={key} handleSelect ={this.props.handleSelect} />)}
      </ul>

    </div>)



  }
}

export default CowList;