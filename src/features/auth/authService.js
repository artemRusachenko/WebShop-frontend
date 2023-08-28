// import axios from "axios";

// const signUp = async (user) => {
//   const response = await axios.post("https://localhost:7111/api/Auth/signup", user);

//   if (response.data) localStorage.setItem("token", response.data);

//   return response.data;
// };

// const signIn = async (user) => {
//   const response = await axios.post("https://localhost:7111/api/Auth/signin", user);

//   if (response.data) localStorage.setItem("token", response.data);

//   return response.data;
// };

// const signOut = async () => {
//   if (localStorage.getItem("token")) localStorage.removeItem("token");
// };

// const getUserInfo = async () => {
//   const token = localStorage.getItem("token");

//   const response = await axios.get("https://localhost:7111/api/User", {
//     headers: { Authorization: "Bearer " + token },
//   });
//   return response.data;
// };

// const authService = {
//   signUp,
//   signIn,
//   signOut,
//   getUserInfo,
// };

// export default authService;
