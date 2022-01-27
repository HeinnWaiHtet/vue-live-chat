import { ref } from "vue";
import { auth } from "../firebase/config";

let user = ref(auth.currentUser);

// get current user data when something change for login user
auth.onAuthStateChanged((_user) => {
  user.value = _user;
});

let getUser = () => {
  return { user };
};

export default getUser;
