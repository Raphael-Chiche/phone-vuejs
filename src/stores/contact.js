import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => ({
        contact: [
            {
                name: 'Dupont',
                phone: '123456',
            },
            {
                name: 'Martin',
                phone: '06 12 34 56 78',
            },
            {
                name: 'Durand',
                phone: '06 12 34 56 78',
            }]
    }),
    actions:{
        ajoutContact(contact){
            this.contact.push(contact);
        }
    }
})