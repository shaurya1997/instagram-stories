import React, { useState, useEffect } from 'react';
import Story from './Story';
import UserIndicator from './UserIndicator';
import './styles/StoryContainer.css';
import users from '../config';
import { FaTimes } from 'react-icons/fa'; 

const StoryContainer: React.FC = () => {
    const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStoryVisible, setIsStoryVisible] = useState(false);
  
    useEffect(() => {
      let timer: NodeJS.Timeout;
  
      if (selectedUserIndex !== null) {
        setIsStoryVisible(true);
        const totalStories = users[selectedUserIndex].stories.length;
        timer = setTimeout(() => {
          if (currentIndex === totalStories - 1) {
            closeStories();
          } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalStories);
          }
        }, users[selectedUserIndex].stories[currentIndex].duration);
      } else {
        setIsStoryVisible(false);
      }
  
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [currentIndex, selectedUserIndex]);
  
    const nextStory = () => {
      if (selectedUserIndex !== null) {
        setCurrentIndex((currentIndex + 1) % users[selectedUserIndex].stories.length);
      }
    };
  
    const prevStory = () => {
      if (selectedUserIndex !== null) {
        setCurrentIndex((currentIndex - 1 + users[selectedUserIndex].stories.length) % users[selectedUserIndex].stories.length);
      }
    };
  
    const handleUserClick = (index: number) => {
      setSelectedUserIndex(index);
      setCurrentIndex(0);
    };
  
    const closeStories = () => {
      setIsStoryVisible(false);
        setSelectedUserIndex(null);
        setCurrentIndex(0)
    };
  
    return (
      <div className="story-container">
        <div className={`user-indicators ${isStoryVisible ? 'hidden' : ''}`}>
          {users.map((user, index) => (
            <UserIndicator 
              key={user.id} 
              name={user.name} 
              profilePicture={user.profilePicture}
              onClick={() => handleUserClick(index)} 
            />
          ))}
        </div>
        {selectedUserIndex !== null && (
          <>
            <div className={`story ${isStoryVisible ? 'visible' : ''}`}>
              <Story url={users[selectedUserIndex].stories[currentIndex].url} />
            </div>
            <div className="navigation">
              <div className="left" onClick={prevStory}></div>
              <div className="right" onClick={nextStory}></div>
            </div>
            <button className="close-button" onClick={closeStories}>
              <FaTimes />
            </button>
          </>
        )}
      </div>
    );
  };
  
  export default StoryContainer;