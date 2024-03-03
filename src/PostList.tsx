import React from "react";
import Post from "./Post.tsx";

interface PostListInt {
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

export const PostList: React.FC<PostListInt> = ({ posts, setPosts }) => {

  const handleSave = (idx: number, newText: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => (i === idx ? { ...post, text: newText } : post))
    );
  };

  return (
    <div>
      {posts.map((post, idx) => (
        <div key={idx}>
          <Post
            name={post.name}
            text={post.text}
            votecount={post.votecount}
            replies={post.replies}
            onSubmit={(newText) => handleSave(idx, newText)}
          />
        </div>
      ))}
    </div>
  );
};
