
class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, user: 'Tom',   text: 'Good morning' },
        { id: 2, user: 'John',  text: 'Good afternoon' },
        { id: 3, user: 'Emily', text: 'Good evening' }
      ]
    }
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
