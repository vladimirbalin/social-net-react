import * as axios from "axios";

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '59307dad-ff14-4b28-9dd3-9b0e3340f9be'
    }
  }
);

export const UsersAPI = {
  setUsers(currentPage, pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  pageClicked(pageClicked, pageSize){
    return instance.get(`users?page=${pageClicked}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  follow(userId){
    return instance.post(`follow/${userId}`, {})
      .then(response => {
        return response.data;
      })
  },
  unFollow(userId){
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
};

export const AuthAPI = {
  auth(){
    return instance.get('auth/me')
      .then(response => {
        return response.data;
      })
  },
  login(postForm){
    return instance.post('auth/login', postForm)
      .then(response => {
        return response.data;
      })
  },
  logout() {
    return instance.delete('auth/login');
}
};

export const ProfileAPI = {
  setProfile(userId){
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  setStatus(status){
    return instance.put(`profile/status`, {status: status})
      .then(response => {
        return response.data;
      })
  }
};

