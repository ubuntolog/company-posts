export default (state = [], action) => {
    switch (action.type) {
      case 'POSTS_FETCH_SUCCESS':
        return {
          result: action.posts
        }
      default:
        return state
    }
  }