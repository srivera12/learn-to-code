class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Caleb" from="Veth" />
        <Hello to="Beau" bangs={5} />
        <Hello from="Jester" bangs={3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
