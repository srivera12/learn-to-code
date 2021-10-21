function getMood() {
  const moods = ['Angry', 'Disappointed', 'Happy', 'Meh', 'Sad', 'Content', 'Anxious'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Current mood is: {getMood()}</h1>
      </div>
    );
  }
}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));
