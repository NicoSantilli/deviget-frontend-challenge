import React from "react";
import { useSelector } from "react-redux";

function App() {
  const redditPosts = useSelector((state) => state);

  debugger;
  return redditPosts.isLoading ? (
    <p>Loading</p>
  ) : (
    redditPosts.posts.map(({ data }) => (
      <pre key={data.id}>
        {JSON.stringify(
          {
            id: data.id,
            clicked: data.clicked,
          },
          null,
          4
        )}
      </pre>
    ))
  );
}

export default App;
