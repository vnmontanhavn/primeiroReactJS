// src/components/User.ts

// Defina a interface User
class User {
    name: string;
    avatarUrl: string;
    bio: string;
  
  constructor(name: string, avatarUrl: string, bio: string) {
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.bio = bio;
  }
}
  export default User;
  