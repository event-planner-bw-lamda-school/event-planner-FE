import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };

  }

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

 submitItem = event => {
   event.preventDefault();
   this.setState({ item: ""});
   this.props.addItem(event, this.state.item);
 };

 render() {
   console.log(this.state.item);
   return (
     <form onSubmit={this.submitItem}>
       <input className="Todo-input"
       name="item"
       value={this.state.item}
       onChange={this.handleChange}/>
       <button className="ToDo-Button">Add Item</button>
     </form>
   )
  }
}


export default TodoForm;
