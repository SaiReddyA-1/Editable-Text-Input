import {Component} from 'react'

import {ContainerDiv} from '../styledcomponents.js'
import './index.css'

class TextEditor extends Component {
  state = {
    text: '',
    editorActive: true,
  }
  onClickSave = () => {
    this.setState({editorActive: false})
  }
  onClickEdit = () =>{
    this.setState({editorActive :true})
  }
  renderPara = () => {
    const {text} = this.state
    return (
      <div className="inputContainer">
        <p className='para'>{text}</p>
        <button onClick={this.onClickEdit}>Edit</button>
      </div>
    )
  }
  onChangeInput = event => {
    this.setState({text: event.target.value})
  }
  renderInput = () => {
    const {text} = this.state
    return (
      <div className="inputContainer">
        <input
          onChange={this.onChangeInput}
          value={text}
          type="text"
          className=""
        />
        <button onClick={this.onClickSave}>Save</button>
      </div>
    )
  }
  render() {
    const {editorActive, text} = this.state
    return (
      <ContainerDiv>
        <div className="card">
          <h1>Editable Text Input</h1>
          {editorActive && this.renderInput()}
          {!editorActive && this.renderPara()}
        </div>
      </ContainerDiv>
    )
  }
}

export default TextEditor
