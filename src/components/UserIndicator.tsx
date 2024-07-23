import './styles/UserIndicator.css';
interface UserIndicatorProps {
    name: string;
    profilePicture: string; 
    onClick: () => void;
  }
  
  const UserIndicator: React.FC<UserIndicatorProps> = ({ name, profilePicture, onClick }) => {
    return (
      <div className="user-indicator" onClick={onClick}>
        <div className="user-indicator-circle">
        <img src={profilePicture} alt={name} className="profile-picture" />
        </div>
      </div>
    );
  };
  
  export default UserIndicator;