import React from 'react';
import BigText from '../components/BigText';

const Posts = ({children}) => {
  return (
    <div>
      <BigText>Posts</BigText>
      {children}
    </div>
  );
};

export default Posts;
