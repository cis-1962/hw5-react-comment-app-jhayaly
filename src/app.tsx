import React, { useState } from "react";
import Post from "./Post";
import { PostList } from "./PostList";
import Reply from "./Reply";
import Voter from "./Voter";

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleReplySubmit = (newReply, parentPostIndex) => {
    const updatedPosts = [...posts];
    const parentPost = updatedPosts[parentPostIndex];

    if (!parentPost.replies) {
      parentPost.replies = [];
    }

    parentPost.replies.push({
      ...newReply,
      upvotes: 0,
      downvotes: 0,
    });

    setPosts(updatedPosts);
  };

  const handleVote = (postIndex, voteType) => {
    const updatedPosts = [...posts];
    if (voteType === "upvote") {
      updatedPosts[postIndex].upvotes += 1;
    } else {
      updatedPosts[postIndex].downvotes += 1;
    }
    setPosts(updatedPosts);
  };

  const renderPost = (post, index) => (
    <div
      key={index}
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>{post.name}</h3>
      <p>{post.text}</p>
      <Voter
        initialCount={post.votecount}
        onUpvote={() => handleVote(index, "upvote")}
        onDownvote={() => handleVote(index, "downvote")}
      />
      <Reply
        votecount={0}
        depth={1}
        index={index}
        handleReply={(newReply, parentIdx) =>
          handleReplySubmit(newReply, parentIdx)
        }
        replies={post.replies}
      />
    </div>
  );

  return (
    <div>
      <div>
        <h2>Post Box</h2>
        <Post
          name={""}
          text={""}
          votecount={0}
          replies={[]}
          onSubmit={handlePostSubmit}
        />
      </div>
      <hr />
      <div>
        <h2>Post Stream</h2>
        {posts.map((post, index) => renderPost(post, index))}
      </div>
    </div>
  );
}
export default App;
