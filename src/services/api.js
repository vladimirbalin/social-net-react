import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '59307dad-ff14-4b28-9dd3-9b0e3340f9be',
  },
});

export const UsersAPI = {
  async setUsers(currentPage, itemsCountPerPage) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${itemsCountPerPage}`
    );
    return response.data;
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response.data;
    });
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const AuthAPI = {
  async auth() {
    const response = await instance.get('auth/me');
    return response.data;
  },
  async login(email, password, rememberMe, captcha) {
    const response = await instance.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete('auth/login');
    return response.data;
  },
};

export const ProfileAPI = {
  setProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  setStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
  setUserAvatar(file) {
    let formData = new FormData();
    formData.append('image', file);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  saveProfile(formData) {
    return instance.put(`profile`, formData).then((response) => {
      return response.data;
    });
  },
};

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      return response.data;
    });
  },
};
