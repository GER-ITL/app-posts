import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "02aa94db-c686-4d1b-a6f4-9225abebc990",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UsersAPI = {
  getUsers  (currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  deleteUsers  (id)  {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
   postUsers (id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getProfile (userId)  {
    console.warn('Obsolete method. Please ProfileAPI object')
    return ProfileAPI.getProfile(userId)
  },
}

export const AuthAPI={
  me (){
      return instance.get(`auth/me`).then((response) => {
        return response.data;
      });
  }

}

export const ProfileAPI = {
  getProfile (userId)  {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId){
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status){
    return instance.put('profile/status', {status:status})
  }
}