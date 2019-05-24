import React from "react";

class MessageInput extends React.Component{
  constructor(props){
    super(props)
    this.handleMessageSubmit = props.handleMessageSubmit
    this.state = {
      messageText: ""
    }
  }
  handleInputChange = (event) => {
    this.setState({
      messageText: event.target.value
    })
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="Query">
            <strong>New Message</strong>
          </label>
          <input
            className="form-control"
            id="new-message"
            type="text"
            value={this.state.messageText}
            name="message-text"
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <button
            onClick={this.handleMessageSubmit}
            type="submit"
            className="btn btn-lg btn-danger float-right"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default MessageInput;
