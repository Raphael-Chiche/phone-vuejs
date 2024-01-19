<!-- FormContact.vue -->
<script>
import { useContactStore } from "@/stores/contact";
export default {
  name: "FormContact",
  data() {
    return {
      formContact: {
        name: "",
        phone: "",
      },
    };
  },
  setup() {
    const contactsStore = useContactStore();
    return { contactsStore };
  },
  methods: {
    ajoutContact() {
      this.contactsStore.ajoutContact(this.formContact);
      this.formContact = { name: "", phone: "" };
    },
  },
};
</script>

<template>
  <form @submit.prevent="ajoutContact">
    <input type="text" placeholder="Nom Prenom" v-model="formContact.name" />
    <input
      type="text"
      placeholder="01 23 45 67 89"
      v-model="formContact.phone"
    />
    <button type="submit">Ajouter au contact</button>
  </form>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
input{
  margin: 1rem;
  width: 300px;
  height: 60px;
  padding: 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
}
button
{
  width: auto ;
  height: 66px;
  padding: 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: grey;
  color: black;
  font-weight: bold;
  font-size: 1rem;
}

</style>