export const getters = {
  getNewsList: state => state.news,
  getNewsRequestStatus: state => state.isFetching,
  getNewsError: state => state.error
}
