import React from 'react';
import Cow from './Cow.jsx'

class CowList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.handleSelect)
  }

  render() {
    return (
    <div>
      <ul>
        {this.props.list.map((item,key)=> <Cow item ={item} key={item.id} handleSelect ={this.props.handleSelect} />)}
      </ul>

    </div>)



  }
}

export default CowList;