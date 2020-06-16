import axios from 'axios';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type PostResponseType = {
  data: PostType;
};

export type UserResponseType = {
  data: UserType[];
};

export const getPost = (id: number): Promise<PostResponseType> =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (): Promise<UserResponseType> =>
  axios.get(`https://jsonplaceholder.typicode.com/users/`);
