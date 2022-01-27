import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let logoutUser = async () => {
  try {
    await auth.signOut();
    error.value = "";
  } catch (err) {
    error.value = err.message;
  }
};

let userLogout = () => {
  return { error, logoutUser };
};

export default userLogout;
