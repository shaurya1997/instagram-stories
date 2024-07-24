export interface StoryProps {
    url: string;
  }
export interface UserIndicatorProps {
  name: string;
  profilePicture: string; 
  onClick: () => void;
}  
export interface Story {
  id: number;
  url: string;
  duration: number;
}

export interface User {
  id: number;
  name: string;
  profilePicture: string;
  stories: Story[];
}
export interface ProgressBarProps {
  progress: number;
}