<script>
import { useJournalStore } from "@/stores/call";
import { useContactStore } from "@/stores/contact";

export default {
  name: "FormCall",
  setup() {
    const journalStore = useJournalStore();
    const contactStore = useContactStore();

    return { journalStore, contactStore };
  },
};
</script>

<template>
  <div class="journal">
    <div v-for="call in journalStore.calls" :key="call.date + call.time">
      <div class="call">
        <p>{{ call.name }}</p>
        <p>{{ call.date }}</p>
        <p>{{ call.time }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.journal{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.call{
  display: flex;
    background-color: grey;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 66px;
    padding: 1rem;
    border-radius: 30px;
    margin: 1rem;
}
.call p:first-child{
  font-weight: bold;
  color: black;
  font-style: italic;
  font-size: 2rem;
}
</style>
