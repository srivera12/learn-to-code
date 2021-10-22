class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Caleb"
          from="Veth"
          bangs={5}
          img="https://images.unsplash.com/photo-1522748321809-c0a5d9f91164?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
