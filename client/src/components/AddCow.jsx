import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      description:"",
    }
    this.handleInputChange =this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleSubmit (event){
    event.preventDefault();
    const data = { name: this.state.name, description: this.state.description};
    console.log(data+'data')
    this.props.handleSubmit(data);

  }


  handleInputChange(event){
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name === 'description'){
      this.setState(
        {description:target.value}

      )
    }else{
      this.setState({name:target.value}
          )

    }

  }



  render () {
    return (
      <form onSubmit ={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Add Cow" />
      </form>
    );
  }
}

export default AddCow;