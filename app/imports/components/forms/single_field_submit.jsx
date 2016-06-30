import React from 'react'

//This is an example of an actual React Component, in that we are extending the Component method of React
export class SingleFieldSubmit extends React.Component {

  //This is where we instantiate the component and can set any default values.  Additionally we are passing in props from the parent component via constructor(props) and then passing those props into the Component itself using super(props)
  constructor(props){
    super(props)

    //here we are setting a default state for 'inputValue'
    //In React, state is private and only accessible from within a component
    this.state = {
      inputValue: this.props.inputValue
    }
  }

  //When called, this function passes in the 'e' DOM event object and gets the value that was entered via target.value and then updates inputValue state with that value.
  //In React, changing a field value is considered a change in component state.  
  updateInputValue(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputValue)
    this.setState({inputValue: ""})
  }

  //Here, we see several event handlers provided by React, such as onSubmit.  Additionally, note the use of 'className' which will translate to 'class' in the HTML.  Even though the syntax below looks like HTML, it is in fact still JavaScript, where 'class' is a reserved word. (In fact, we use it above to instantiate this component)
  render() {
    return <form onSubmit={this.handleSubmit.bind(this)} className="c-single-field-submit">
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.inputValue}
        onChange={this.updateInputValue.bind(this)}
      />
    </form>
  }
}
SingleFieldSubmit.propTypes = {
  handleSubmit:  React.PropTypes.func.isRequired,
  placeholder:   React.PropTypes.string
}

SingleFieldSubmit.defaultProps = {
  inputValue:    ""  ,
  placeholder:   "New..."
}

//YOUR TURN: This is as far as a I got with the inline comments. Keep checking out the code and then try building your own app. Questions,comments, feedback?  Ping me at @codechron