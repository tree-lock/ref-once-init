import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const consoleString = "%c🛸 [Axios] Send API Request => ";
    console.log(consoleString, "color: #2563eb; ", config.url);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use((response) => {
  const consoleString = "%c🛸 [Axios] Received API Response => ";
  console.log(consoleString, "color: #378362; ", response.config.url);
  console.log(response.data);
  return response;
});

const getCount = async () => {
  const ans: AxiosResponse<number> = await axiosInstance.get("/example");
  return ans.data;
};

export default {
  count: getCount,
};
