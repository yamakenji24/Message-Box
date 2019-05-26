
class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(messages) {
        this.setState({ messages: messages});
      }.bind(this),
      eror: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  
  handleMessageSubmit(message) {
    message.id = new Date();
    var newMessage = this.state.messages.concat(message);
    this.setState({messages: newMessage});
  }
  
  render() {
    var messageItems = this.state.messages.map(function(message){
      return (
        <MessageItem key={message.id} message={message}/>
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </div>
    );
  }
}

/*
var MessageBox = React.createClass({
  render: function() {
    return (
      <div className="messageBox">
        This is a message box.
      </div>
    );
  }
});

*/
