<template>
  <div class="hello">
    <div class="navbar">
      <input type="text" placeholder="Rechercher" v-model="filtre">
    </div>   
    <div>
      <div v-if="filtre == ''">
        <ul v-for="(set, index) in cards" :key="index">
            <b>{{ index }}</b>      
            <li v-for="card in set" :key="card.cardId">Card : {{card.name}}; Effect : {{card.text}}</li>        
        </ul>
      </div>

      <ul v-if="filtre != ''">
            <b>{{ filtre }}</b>      
            <li v-for="card in cards" :key="card.cardId">Card : {{card.name}}; Effect : {{card.text}}</li>        
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HearthStoneCards',
  created() {
    this.getAll();
  },
  data: function() {
    return {
      filtre: ''
    }
  },
  computed: {
    cards() {
      if (this.filtre != '') {
        return this.$store.getters.getCards[this.filtre];
      }
      return this.$store.getters.getCards;
    },
  },
  methods: {
    getAll() {      
      const config = {
          headers: {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "8f63c7eeddmsh9c1c7a90ad44690p1ae244jsn86d02298a4b9"
          }
      };
      axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', config)
      .then((response) => {          
          this.$store.commit('setCards', response.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar {
    overflow: hidden;
    background-color: #41B883;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px;
  }

  .navbar input {
    float: right;
    margin-right: 20px;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 0;
    padding: 5px;
    font-size: 18px;
  }
</style>
