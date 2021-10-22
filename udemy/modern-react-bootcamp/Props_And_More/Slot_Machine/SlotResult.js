class SlotResult extends React.Component {
  render() {
    let winOrLose = '';
    if (this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3) {
      winOrLose = 'Congrats, You win!';
    } else {
      winOrLose = 'You lose, try again.';
    }
    return (
      <div>
        {this.props.s1}
        {this.props.s2}
        {this.props.s3}
        <br />
        <p>{winOrLose}</p>
      </div>
    );
  }
}
