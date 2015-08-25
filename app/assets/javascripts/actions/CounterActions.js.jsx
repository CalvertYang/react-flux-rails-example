(() => {
  class CounterActions {
    increase() {
      this.dispatch("Increase");
    }

    decrease() {
      this.dispatch("Decrease");
    }
  }

  this.CounterActions = alt.createActions(CounterActions);
})();
