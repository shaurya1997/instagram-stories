import profile1 from './assests/images/profile1.jpeg'
import profile2 from './assests/images/profile2.jpeg'
import profile3 from './assests/images/profile3.jpeg'
import profile4 from './assests/images/profile4.jpeg'
import cartoon1 from './assests/images/cartoon1.jpeg'
import cartoon2 from './assests/images/cartoon2.jpeg'
import cartoon3 from './assests/images/cartoon3.jpeg'
interface Story {
    id: number;
    url: string;
    duration: number;
  }
  
  interface User {
    id: number;
    name: string;
    profilePicture: string; // Add profile picture URL
    stories: Story[];
  }
  
  const users: User[] = [
    {
      id: 1,
      name: 'User 1',
      profilePicture: profile1, 
      stories: [
        { id: 1, url: cartoon1, duration: 3000 },
        { id: 2, url: cartoon2, duration: 3000 },
        { id: 3, url: cartoon3, duration: 3000 },
      ],
    },
    {
      id: 2,
      name: 'User 2',
      profilePicture: profile2, 
      stories: [
        { id: 1, url: cartoon1, duration: 3000 },
        { id: 2, url: cartoon2, duration: 3000 },
        { id: 3, url: cartoon3, duration: 3000 },
      ],
    },
    {
      id: 3,
      name: 'User 3',
      profilePicture: profile3, // Profile picture URL
      stories: [
        { id: 1, url: cartoon1, duration: 3000 },
        { id: 2, url: cartoon2, duration: 3000 },
        { id: 3, url: cartoon3, duration: 3000 },
      ],
    },
    {
      id: 4,
      name: "User 4",
      profilePicture: profile4, 
      stories: [
        { id: 1, url: cartoon1, duration: 3000 },
        { id: 2, url: cartoon2, duration: 3000 },
        { id: 3, url: cartoon3, duration: 3000 },
      ],
    },
  ];
  
  export default users;
  