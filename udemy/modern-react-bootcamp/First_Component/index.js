// class-based component
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

// function-based component - won't be used much in the course, was missing functionality but now is covered by hooks
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h1>Hello World!</h1>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// rendering to the DOM
ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
