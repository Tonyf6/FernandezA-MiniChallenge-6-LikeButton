// Button.tsx
import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './Button.module.css';

const Like: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default Like;
