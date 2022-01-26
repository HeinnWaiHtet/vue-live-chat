<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input
        type="email"
        v-model="email"
        placeholder="Email" />
    <input
        type="password"
        v-model="password"
        placeholder="Password" />
    <div class="error" v-if="error"> {{error}} </div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from "vue"
import userLogin from "../composables/useLogin"
export default {
    setup(props, context){
        let password = ref("");
        let email = ref("");
        let {error, signIn} = userLogin();
        let login = async() => {
            let response = await signIn(email.value, password.value);
            if(response){
                context.emit("enterChatroom");
            }
        }
        return { password, email, login, error};
    }
}
</script>

<style>

</style>