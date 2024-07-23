import React, { useState, useEffect, useRef } from "react";
import Story from "./Story";
import UserIndicator from "./UserIndicator";
import "./styles/StoryContainer.css";
import users from "../config";
import { FaTimes } from "react-icons/fa";

const StoryContainer: React.FC = () => {
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const storyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [progressWidths, setProgressWidths] = useState<number[]>([]);

  useEffect(() => {
    if (selectedUserIndex !== null) {
      setIsStoryVisible(true);
      const totalStories = users[selectedUserIndex].stories.length;
      const duration = users[selectedUserIndex].stories[currentIndex].duration;
      let progress = 0
      progressTimeoutRef.current = setInterval(() => {
        progress += 100 / (duration / 100);
        setProgressWidths((prev) => {
          const updatedWidths = [...prev];
          updatedWidths[currentIndex] = progress;
          return updatedWidths;
        });
      }, 100);

      storyTimeoutRef.current = setTimeout(() => {
        if (currentIndex === totalStories - 1) {
          closeStories();
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalStories);
        }
      }, duration);
    } else {
      setIsStoryVisible(false);
    }

    return () => {
      if (storyTimeoutRef.current) {
        clearTimeout(storyTimeoutRef.current);
      }
      if (progressTimeoutRef.current) clearInterval(progressTimeoutRef.current);
    };
  }, [currentIndex, selectedUserIndex]);

  const nextStory = () => {
    if (selectedUserIndex !== null) {
      if (storyTimeoutRef.current) {
        clearTimeout(storyTimeoutRef.current);
      }
      if (currentIndex < users[selectedUserIndex].stories.length - 1) {
        setProgressWidths((prev) => {
          const updatedWidths = [...prev];
          for (let i = 0; i <= currentIndex; i++) {
            updatedWidths[i] = 100;
          }
          return updatedWidths;
        });
        setCurrentIndex((prev) => prev + 1);
      } else {
        closeStories();
      }
    }
  };

  const prevStory = () => {
    if (selectedUserIndex !== null) {
      if (storyTimeoutRef.current) {
        clearTimeout(storyTimeoutRef.current);
      }
      if (currentIndex > 0) {
        setProgressWidths((prev) => {
          const updatedWidths = [...prev];
          updatedWidths[currentIndex - 1] = 0;
          for (let i = currentIndex; i < updatedWidths.length; i++) {
            updatedWidths[i] = 0;
          }
          return updatedWidths;
        });
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  const handleUserClick = (index: number) => {
    setProgressWidths([]);
    setSelectedUserIndex(index);
    setCurrentIndex(0);
  };

  const closeStories = () => {
    setIsStoryVisible(false);
    setSelectedUserIndex(null);
    setCurrentIndex(0);
  };
 
  return (
    <div className="story-container">
      <div className={`user-indicators ${isStoryVisible ? "hidden" : ""}`}>
        <div className="heading">Instagram</div>
        <div style={{ display: "flex", marginTop: "8px" }}>
          {users.map((user, index) => (
            <UserIndicator
              key={user.id}
              name={user.name}
              profilePicture={user.profilePicture}
              onClick={() => handleUserClick(index)}
            />
          ))}
        </div>
      </div>
      {selectedUserIndex !== null && (
        <>
          <div className={`story ${isStoryVisible ? "visible" : ""}`}>
            <Story url={users[selectedUserIndex].stories[currentIndex].url} />
          </div>
          <div className="navigation">
            <div className="left" onClick={prevStory}></div>
            <div className="right" onClick={nextStory}></div>
          </div>
          <div className={`top-action ${isStoryVisible ? "visible" : ""}`}>
            <div className="userDetails">{users[selectedUserIndex].name}</div>
            <button onClick={closeStories} className="btn">
              <FaTimes color="white" />
            </button>
          </div>
          <div
            className="progress-bar-container"
            style={{
              gridTemplateColumns: `repeat(${users[selectedUserIndex].stories.length}, 1fr)`,
            }}
          >
            {users[selectedUserIndex].stories.map((_, index) => (
              <div className="progress-bar">
                <div
                  style={{
                    height: "5px",
                    background: "red",
                    width: `${progressWidths[index] || 0}%`,
                    transition: "width 0.1s linear",
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StoryContainer;
