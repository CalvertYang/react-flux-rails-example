class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleIncrease() {
    CounterActions.increase();
  }

  handleDecrease() {
    CounterActions.decrease();
  }

  render() {
    return (
      <div>
        <section>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
        </section>
      </div>
    )
  }
}
