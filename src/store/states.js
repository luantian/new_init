let state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  isShowLoading: false,
}

export default state
