export interface LoginFormData {
    email: string;
    password: string;
}

export interface RegisterFormData {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface UpdateUserInformationData {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    shortDescription: string;
    imageURI: FileList | string
}