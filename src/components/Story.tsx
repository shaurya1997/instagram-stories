import React from 'react';
import './styles/Story.css';
import { StoryProps } from './type';

const Story: React.FC<StoryProps> = ({ url }) => {

  return (
    <div className="story-img" data-testid="story">
      <img src={url} alt="Story" />
    </div>
  );
};

export default React.memo(Story);
