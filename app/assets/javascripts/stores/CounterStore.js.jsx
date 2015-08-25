(() => {
  class CounterStore {
    constructor() {
      this.value = 0;

      this.bindListeners({
        handleIncrease: CounterActions.INCREASE,
        handleDecrease: CounterActions.DECREASE
      });
    }

    handleIncrease() {
      this.value++;
    }

    handleDecrease() {
      this.value--;
    }
  }

  this.CounterStore = alt.createStore(CounterStore, 'CounterStore');
})();
