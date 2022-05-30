import React from 'react';
import ReactDOM from 'react-dom';
import AddCow from './components/AddCow.jsx'
import CowList from './components/CowList.jsx'
import Display from './components/Display.jsx'

var fakedata =[{id:1, name: 'Buttercup', description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'}, {id:2,name:'Daisy',description:"a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties."}]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list:fakedata.slice().reverse(),
      displayCow:fakedata.slice().reverse()[0].description,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect =this.handleSelect.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    //deal with data
    var copyData =this.state.list;
    var addItem = {}
    addItem.id = copyData[0].id+1;
    addItem.name= event.target.name.value;
    addItem.description= event.target.description.value;
    console.log(addItem)
    copyData.unshift(addItem);
    console.log(copyData);
    this.setState({list: copyData})

  }
  handleSelect(event){
    event.preventDefault();
    var target =event.target;
    var copydata =this.state.list;
    console.log('hello')
    console.log(target)
    console.log(typeof target.value)
    console.log("data"+ copydata[0].id)
    for(var i=0;i<copydata.length;i++){
      console.log("inner"+copydata[i].id)
      if(copydata[i].id === target.value){
        this.setState({displayCow: copydata[i].description })
        break;
      }
    }



  }

  render(){
    return (
      <div>
        <h2>Hello Cow</h2>
        <AddCow handleSubmit ={this.handleSubmit} />
        <Display displayCow ={this.state.displayCow} />
        <CowList list={this.state.list} handleSelect ={this.handleSelect}/>
      </div>
    )
  }

}



ReactDOM.render(<App/>, document.getElementById('app'));