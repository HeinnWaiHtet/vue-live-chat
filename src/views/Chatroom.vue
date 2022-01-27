<template>
  <div class="container">
      <Navbar></Navbar>
      <ChatWindow></ChatWindow>
      <NewChatForm></NewChatForm>
</div>
</template>

<script>
import ChatWindow from '../components/ChatWindow';
import NewChatForm from '../components/NewChatForm';
import Navbar from '../components/Navbar';
import {watch} from "vue";
import {useRouter} from "vue-router";
import getUser from "../composables/getUser";
export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },

    setup(){
      let {user} = getUser();
      let router = useRouter();

      // watch user has or not and no user go to login view
      watch(user, () => {
        console.log(user);
        if(!user.value){
          // redirect to login view
          router.push("/");
        }
      })
    }

}
</script>

<style>

</style>