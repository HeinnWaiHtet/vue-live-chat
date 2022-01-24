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
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from "vue"
export default {
    setup(){
        let displayName = ref("");
        let password = ref("");
        let email = ref("");
        let signUp = () => {
            console.log(displayName.value, password.value, email.value);
        }
        return {displayName, password, email, signUp};
    }
}
</script>

<style>

</style>