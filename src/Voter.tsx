import React, { useState } from 'react';

interface VoterInt {
  initialCount?: number;
  onUpvote?: () => void;
  onDownvote?: () => void;
}

const Voter: React.FC<VoterInt> = ({ initialCount = 0, onUpvote, onDownvote }) => {
  const [userCount, setUserCount] = useState(initialCount);

  const handleUpvote = () => {
    setUserCount(userCount + 1);
    if (onUpvote) {
      onUpvote();
    }
  };

  const handleDownvote = () => {
    setUserCount(userCount - 1);
    if (onDownvote) {
      onDownvote();
    }
  };

  return (
    <div>
      <button onClick={handleUpvote}>Upvote</button>
      <div>{userCount}</div>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};

export default Voter;
