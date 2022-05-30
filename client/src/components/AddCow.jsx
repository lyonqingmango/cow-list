import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      description:"",
    }
    this.handleInputChange =this.handleInputChange.bind(this);

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
      <form onSubmit ={this.props.handleSubmit}>
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