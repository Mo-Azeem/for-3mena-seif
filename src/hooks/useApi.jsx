import axios from 'axios';

//  ENDPOINT
const baseURL = 'https://dummyjson.com/';

//  START FUNCTION
function useApi(config = {}) {
  const token = localStorage.getItem("access_token");
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });

  // ############################
  async function get(route) {
    const { data } = await axiosInstance.get(route);
    return data;
  }

  async function post(route, body) {
    const { data } = await axiosInstance.post(route, body);
    return data;
  }

  async function put(route, body) {
    const { data } = await axiosInstance.put(route, body);
    return data;
  }

  async function patch(route, body) {
    const { data } = await axiosInstance.patch(route, body);
    return data;
  }

  async function del(route) {
    const { data } = await axiosInstance.delete(route);
    return data;
  }

  // ############################
  return { get, post, put, patch, delete: del };
}

export default useApi;
