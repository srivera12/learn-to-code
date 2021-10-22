class SlotResult extends React.Component {
  render() {
    let win = this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3;
    const pStyles = {
      fontSize: '20px',
      backgroundColor: 'lavender',
    };
    return (
      <div className="SlotResult">
        {this.props.s1}
        {this.props.s2}
        {this.props.s3}
        <br />
        <p style={pStyles} className={win ? 'SlotResult-winner' : 'SlotResult-loser'}>
          {win ? 'Congrats, you won!' : 'You lose, try again.'}
        </p>
      </div>
    );
  }
}
