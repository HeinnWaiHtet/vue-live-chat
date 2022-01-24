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
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from "vue"
export default {
    setup(){
        let password = ref("");
        let email = ref("");
        let login = () => {
            console.log(password.value, email.value);
        }
        return { password, email, login};
    }
}
</script>

<style>

</style>