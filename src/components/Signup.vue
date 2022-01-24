<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input
        type="text"
        v-model="displayName"
        placeholder="Display Name" />
    <input
        type="email"
        v-model="email"
        placeholder="Email" />
    <input
        type="password"
        v-model="password"
        placeholder="Password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import {ref} from "vue"
import {auth} from "../firebase/config"
export default {
    setup(){
        let displayName = ref("");
        let password = ref("");
        let email = ref("");
        let error = ref(null);

        let signUp = async() => {
            try{
                let response = await auth.createUserWithEmailAndPassword(email.value,password.value);
                if(!response){
                    throw new Error("could not create new user");
                }
                response.user.updateProfile({ displayName : displayName.value });
                console.log(response.user);
            }catch(err){
                error.value = err.message;
            }
        }
        return {displayName, password, email, signUp};
    }
}
</script>

<style>

</style>