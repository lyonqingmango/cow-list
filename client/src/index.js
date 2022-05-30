import React from 'react';
import ReactDOM from 'react-dom';
import AddCow from './components/AddCow.jsx'
import CowList from './components/CowList.jsx'
import Display from './components/Display.jsx'

// var fakedata =[{id:1, name: 'Buttercup', description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'}, {id:2,name:'Daisy',description:"a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties."}]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list:[],
      displayCow:"",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect =this.handleSelect.bind(this);

  }

  componentDidMount() {
    this.getAll()
  }
  getAll(){
    fetch("http://localhost:3000/api/cows")
    .then(response => response.json())
    .then(data =>{console.log('data inside getall'+data); this.setState({list: data})})
    .catch(error => {
      // enter your logic for when there is an error (ex. error toast)
     console.log("error inside getall"+error)
    })
  }




  handleSubmit(data){

    console.log('data inside handle submit'+data.name);
    fetch('http://localhost:3000/api/cows', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .then(this.getAll())
    .catch((error) => {
    console.log('Error inside fetch post:', error);
    })

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