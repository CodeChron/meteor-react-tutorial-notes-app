import React from 'react'

export class SingleFieldSubmit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: this.props.inputValue
    }
  }

  updateInputValue(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputValue)
    this.setState({inputValue: ""})
  }

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
  handleSubmit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

SingleFieldSubmit.defaultProps = {
  inputValue:  ""  ,
  placeholder: "New..."
}