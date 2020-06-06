# Deviget FrontEnd Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies Used

- [Axios](https://github.com/axios/axios)
- [Lodash](https://github.com/lodash/lodash)
- [Moment](https://github.com/moment/moment)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [React](https://github.com/facebook/react)
- [Redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- [Redux](https://github.com/reduxjs/redux)
- [Styled-Components](https://github.com/styled-components/styled-components)

## Decisions taken and Features

- On first call, load first 50 posts, no "after" param is being sent.
- After posts are loaded the "before" from the response is being used for last post id, if not present use the last from the list with type_id.
- Show a loading element while fetching posts, if the sidebar is empty it'll be displayed at 50% high, otherwise all the way down the posts.
- If a post is dismissed and is being shown in the details, the details will display a "No post is selected" card.
- If all posts are dismissed, another 50 posts after the latest one are going to be loaded, button will be disabled until all posts are correctly retrieved.
- On thumbnail click, a new tab with that image will show up. Important: this will not propagate and mark post as clicked.
- The sidebar will work as an infinite scroll, after the user scrolled all the way down more posts are going to be retrieved without the need of the user to make an action.
- The design is responsive and adapts to all screen sizes.
