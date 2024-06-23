export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  dateOfBirth?: string;
  age?: number;
  shortDescription?: string;
  imageURI?: string;
  settings: UserSettings;
}

export interface UserSettings {
  profile: UserProfileSettings;
  app: UserAppSettings;
}

export interface UserProfileSettings {
  isPrivate?: boolean;
}

export interface UserAppSettings {
  isDarkMode?: boolean;
  layout?: string;
  isNotificationEnabled?: boolean;
}
