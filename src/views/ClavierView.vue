<script>
import { useContactStore } from "@/stores/contact";
import { useJournalStore } from "@/stores/call";
export default {
  name: "ClavierView",
  data() {
    return {
      number: "",
      nameNumber: "",
      clavier: [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["*", "0", "#"],
      ],
    };
  },
  setup() {
    const contactStore = useContactStore();
    const journalStore = useJournalStore();
    return { contactStore, journalStore };
  },
  computed: {
    nameNumber() {
      const contact = this.contactStore.contact.find((c) => {
        console.log(c.phone);
        console.log(this.number);
        console.log(c.phone === this.number);
        return c.phone === this.number;
      });
      return contact ? contact.name : "";
    },
  },
  methods: {
    addNumber(number) {
      this.number += number;
    },
    makeCall() {
      const now = new Date();
      const call = {
        name: this.nameNumber || this.number,
        date: now.toISOString().split("T")[0], // YYYY-MM-DD
        time: now.toTimeString().split(" ")[0].slice(0, 5), // HH:mm
      };
      console.log(call);
      this.journalStore.addCall(call);
    },
  },
};
</script>
<template>
  <div id="claviers">
    <p class="number">{{ number }}</p>
    <p class="nameNumber">{{ nameNumber }}</p>
    <div class="clavier">
      <p @click="addNumber('1')">1</p>
      <p @click="addNumber('2')">2</p>
      <p @click="addNumber('3')">3</p>
      <p @click="addNumber('4')">4</p>
      <p @click="addNumber('5')">5</p>
      <p @click="addNumber('6')">6</p>
      <p @click="addNumber('7')">7</p>
      <p @click="addNumber('8')">8</p>
      <p @click="addNumber('9')">9</p>
      <p @click="addNumber('*')">*</p>
      <p @click="addNumber('0')">0</p>
      <p @click="addNumber('#')">#</p>
    </div>
    <img src="../assets/logo_phone.png" alt="" @click="makeCall" />
  </div>
</template>

<style scoped>
#claviers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.number {
  font-size: 30px;
  font-weight: bold;
  height: 50px;
  border: white 1px solid;
  border-radius: 50px;
  text-align: center  ;
  width: 100%;
  margin: 1rem;
}
.nameNumber{
  font-size: 30px;
  font-weight: bold;
  height: 50px;
  text-align: center  ;
  width: auto;
  margin: 1rem; 
}
img {
  filter: contrast(0);
}
.clavier {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 500px;
}
.clavier p {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  background-color: grey;
  color: black;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
