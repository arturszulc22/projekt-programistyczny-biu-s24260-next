export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  dateOfBirth?: string;
  age?: number;
  town?: string;
  shortDescription?: string;
  imageURI?: string;
  settings: UserSettings;
  friends: [];
  friendsRequests: [];
}

export interface UserSettings {
  profile: UserProfileSettings;
  app: UserAppSettings;
  isAdmin: boolean;
}

export interface UserProfileSettings {
  isPrivate?: boolean;
}

export interface UserAppSettings {
  isDarkMode?: boolean;
  layout?: string;
  isNotificationEnabled?: boolean;
}
