import React from 'react';
import './styles/Story.css';

interface StoryProps {
  url: string;
}

const Story: React.FC<StoryProps> = ({ url }) => {

  return (
    <div className="story-img">
      <img src={url} alt="Story" />
    </div>
  );
};

export default Story;
