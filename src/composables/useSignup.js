import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null); // for error handling caused by already email

// create user account by firebase v8
let createAccount = async (email, password, displayName) => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("could not create new user");
    }
    response.user.updateProfile({ displayName: displayName });
    error.value = "";
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
