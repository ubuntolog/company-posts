export default (state = [], action) => {
    switch (action.type) {
      case 'COMMENTS_FETCH_SUCCESS':
        return {
          comments: action.comments
        }
      default:
        return state
    }
  }