<template>
  <div class="container">
      <Navbar></Navbar>
      <ChatWindow></ChatWindow>
      <NewChatForm></NewChatForm>
</div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },

}
</script>

<style>

</style>