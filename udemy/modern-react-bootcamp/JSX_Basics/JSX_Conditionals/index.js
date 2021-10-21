function getNum() {
  return Math.floor(Math.random() * 20) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 20) {
      msg = (
        <div>
          <h2>NAT 20!!!!</h2>
          <img src="https://images.unsplash.com/photo-1598238179116-ec3c4c0f7a29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
        </div>
      );
    } else if (num >= 10) {
      msg = (
        <div>
          <h2>Good Roll!</h2>
          <img src="https://images.unsplash.com/photo-1633506079263-7029b4f46762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" />
        </div>
      );
    } else {
      msg = (
        <div>
          <h2>Unlucky!</h2>
          <img src="https://images.unsplash.com/photo-1605142859862-978be7eba909?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
        </div>
      );
    }
    return (
      <div>
        <h1>Your d20 rolled: {num}</h1>
        <p>{msg}</p>
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
