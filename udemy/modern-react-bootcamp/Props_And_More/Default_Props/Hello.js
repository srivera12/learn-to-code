class Hello extends React.Component {
  static defaultProps = {
    to: 'Critters',
    from: 'Anonymous',
    bangs: 2,
  };
  render() {
    let bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to}, from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}
