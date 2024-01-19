<script>
import { useContactStore } from "@/stores/contact";
import { useJournalStore } from "@/stores/call";

export default {
  name: "ContactView",
  setup() {
    const contactStore = useContactStore();
    const journalStore = useJournalStore();
    return {
      contactStore,
      journalStore,
    };
  },
  computed: {
    contact() {
      return this.contactStore.contact;
    },
  },
  methods: {
    makeCall(contact) {
      const now = new Date();
      const call = {
        name: contact.name,
        date: now.toISOString().split("T")[0],
        time: now.toTimeString().split(" ")[0].slice(0, 5),
      };
      this.journalStore.addCall(call);
    },
    goToForm() {
      this.$router.push({ name: 'forms' });
    },
  },
};
</script>

<template>
  <div class="contacts">
    <img src="../assets/plus.png" alt="" class="plus" @click="goToForm">
    <div v-for="item in contact" :key="item.name">
      <div class="contact">
        <p>{{ item.name }}</p>
        <p>{{ item.phone }}</p>
        <img src="../assets/logo_phone.png" alt="" @click="makeCall(item)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.plus{
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: invert(100%);
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.contact {
  display: flex;
  background-color: grey;
  align-items: center;
  justify-content: space-between;
  width:500px;
  margin: 1rem;
  padding: 10px;
  border: 1px solid black;
}
.contact img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.contact p:first-child {
  color: black;
  font-size: 1.5rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
