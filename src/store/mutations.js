let mutations = {
  showLoading (state) {
    state.isShowLoading = true;
  },
  hideLoading (state) {
    state.isShowLoading = false;
  }
};

export default mutations;
