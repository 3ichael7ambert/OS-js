function Title(props) {
    const { chatName } = props;
    return (
      <div className="header">
        {chatName} - Instant Message
        <ul className="header__links">
          <li className="header__minimize">_</li>
          <li className="header__maximize">[]</li>
          <li className="header__close">&times;</li>
        </ul>
      </div>
    );
  }
  
  function Navbar(props) {
    const { chatName } = props;
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">File</li>
          <li className="nav__item">Edit</li>
          <li className="nav__item">Insert</li>
        </ul>
        <span className="nav__warning-level">{chatName}'s Warning Level: 0%</span>
      </nav>
    );
  }
  
  function MessageItem(props) {
    const { message, screenName, className } = props;
    const { text, id } = message;
    return (
      <div className={`message-item ${className}`}>
        <div className="message-item__screenname">{screenName}:</div>
        {text}
      </div>
    );
  }
  
  function MessageList(props) {
    const { messageData, screenName, chatName } = props;
    const currentMessage = { text: "Yo! Wanna get some ramen?", id: 1 };
    return (
      <div className="message-list">
        <div className="message-list__container">
          <MessageItem
            message={currentMessage}
            className="message-item--other"
            screenName={chatName}
          />
          {messageData.map((message, i) => {
            return <MessageItem message={message} screenName={screenName} key={i} />;
          })}
        </div>
      </div>
    );
  }
  
  function CustomizeRow(props) {
    return (
      <div className="customize-row">
        <div className="customize-row__set">
          <button className="customize-row__button text-blue">A</button>
          <button className="customize-row__button background-blue">A</button>
        </div>
  
        <div className="customize-row__set">
          <button className="customize-row__button small-a">A</button>
          <button className="customize-row__button medium-a">A</button>
          <button className="customize-row__button large-a">A</button>
        </div>
  
        <div className="customize-row__set">
          <button className="customize-row__button bold-text">B</button>
          <button className="customize-row__button italic-text">I</button>
          <button className="customize-row__button underline-text">u</button>
        </div>
        <div className="customize-row__set">
          <button className="customize-row__button link-text">link</button>
          <button className="customize-row__button">
            <img src="http://www.jesush.com/wp-content/uploads/2008/07/happy10.gif" />
          </button>
        </div>
      </div>
    );
  }
  
  
  
  function MessageForm(props) {
    const { value, addedMessage, onChange } = props;
    const disabledClass = !value.length ? 'message-form__submit--disabled' : null;
  
    function handleSubmit(e) {
      e.preventDefault();
      const message = { text: value, id: messageId++ };
      addedMessage(message);
    }
  
    return (
      <form className="message-form" onSubmit={handleSubmit}>
        <textarea
          className="message-form__textarea"
          value={value}
          onChange={onChange}
        />
        <div className="message-form__actions">
          <button
            type="submit"
            disabled={!value}
            className={`message-form__submit ${disabledClass}`}
          >
            Send
          </button>
        </div>
      </form>
    );
  }
  
  let messageId = 0;
  
  class InstantMessenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chatName: 'Ram3nHog',
        screenName: 'CodePenner92',
        data: [],
        value: '',
      };
      this.addedMessage = this.addedMessage.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    addedMessage(message) {
      this.setState((prevState) => ({
        data: [...prevState.data, message],
        value: '',
      }));
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    render() {
      const { chatName, screenName, data, value } = this.state;
  
      return (
        <div className="instant-messenger">
          <Title chatName={chatName} />
          <Navbar chatName={chatName} />
          <MessageList
            messageData={data}
            screenName={screenName}
            chatName={chatName}
          />
          <CustomizeRow />
          <MessageForm
            value={value}
            addedMessage={this.addedMessage}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<InstantMessenger />, document.getElementById('app'));
  