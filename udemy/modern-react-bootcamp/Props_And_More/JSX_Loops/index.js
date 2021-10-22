class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Sally" hobbies={['Sewing', 'Drawing', 'Coding', 'Baking']} />
        <Friend name="Jane" hobbies={['Reading', 'Skiing', 'Hiking', 'Knitting']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
