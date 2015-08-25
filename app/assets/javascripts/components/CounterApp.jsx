class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = CounterStore.getState();

    this.handleStoreChange = (state) => {
      this.setState(state);
    }
  }

  componentDidMount() {
    CounterStore.listen(this.handleStoreChange);
  }

  componentWillUnmount() {
    CounterStore.unlisten(this.handleStoreChange);
  }

  render() {
    return (
      <div>
        <Header />
        <Content value={this.state.value} />
      </div>
    )
  }
}
