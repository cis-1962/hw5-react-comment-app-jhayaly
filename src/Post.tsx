import React, { useState } from 'react';

interface PostInt {
  name: string;
  text: string;
  votecount: number;
  replies: any[];
  onSubmit: (newPost: any) => void;
}

const Post: React.FC<PostInt> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const submitReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && text) {
      onSubmit({
        name,
        text,
        votecount: 0,
        replies: [],
      });
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={submitReset}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;
