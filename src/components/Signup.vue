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
    <div v-if="error" class="error"> {{error}} </div>
    <button>Sign up</button>
  </form>
</template>

<script>
import {ref} from "vue"
import useSignup from "../composables/useSignup"
export default {
    setup(props, context){
        let displayName = ref("");
        let password = ref("");
        let email = ref("");
        
        let {error, createAccount} = useSignup();

        let signUp = async() => {
            let res = await createAccount(email.value, password.value, displayName.value);
            if(res){
                context.emit("enterChatroom");
            }
        }
        return {displayName, password, email, signUp, error};
    }
}
</script>

<style>

</style>