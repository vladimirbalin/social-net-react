export type PostsType = {id: number, message: string, likesCount: number};
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  twitter: string
  youtube: string
  website: string
  mainLink: string
  instagram: string
};
export type PhotosType = {
  small: string | null
  large: string | null
};
export type ProfileInfoType = {
  userId: number
  lookingForAJob: boolean
  fullName: string
  contacts: ContactsType
  photos: PhotosType
};
export type UsersType = {
  id: number
  name: string
  status: string | null
  photos: PhotosType
  followed: boolean
}