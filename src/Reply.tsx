import React, { useState } from 'react';

interface ReplyInt {
  votecount: number;
  depth : number;
  index: number;
  replies: any[];
  handleReply: (newPost: any, depth) => void;
}

export const Reply: React.FC<ReplyInt> = ({ votecount, depth, index, replies, handleReply }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const replyReset = () => {
    if (name && text) {
      handleReply({ name, text, upvotes: 0, downvotes: 0, replies: [] }, depth);
      setName('');
      setText('');
    }
  };

  return (
    <div>
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
      <button onClick={replyReset}>
        Reply
      </button>
      {replies.map((reply, index) => (
        <Reply
          votecount={votecount}
          key={index}
          depth={depth + 1}
          index={index}
          handleReply={(newReply, newDepth) => handleReply(newReply, newDepth)}
          replies={reply.replies}
        />
      ))}
    </div>
    );
};

export default Reply;
