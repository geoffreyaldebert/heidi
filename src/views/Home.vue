<template>
      <div style="min-height: 500px">  
          <div class="rf-container rf-pb-6w rf-pt-2w">
            <h3>Besoin d'un identifiant unique ?</h3>
            <div style="border: 2px solid #DFDFF1; padding: 20px; margin-top: 40px;">
              <span style="background-color: #DFDFF1; color: #060191; font-weight: bold; padding: 5px;">Le voici : </span>
              <br /><br />
              <id-box></id-box>
            </div>
            <br /><br />
            <h3>Besoin de plusieurs identifiants uniques ?</h3>
            <p>Combien en souhaitez-vous :
            <input type="text" v-model="nbIdBox" size="4"/>&nbsp;&nbsp;&nbsp;
            <button v-on:click="generateUlid()" style="border: 0px; background-color: #DFDFF1; color: #060191; padding: 5px;">Générer</button>&nbsp;&nbsp;&nbsp;
            <button v-if="nbIds > 0" v-clipboard:copy="copyids()" style="border: 0px; background-color: #DFDFF1; color: #060191; padding: 5px;">Tout copier</button>
            </p>
            <p>{{ messageError }}</p>

            <div v-if="this.nbIds > 0" style="border: 2px solid #DFDFF1; padding: 20px; margin-top: 40px;">
              <span style="background-color: #DFDFF1; color: #060191; font-weight: bold; padding: 5px;">Les voici : </span>
              <br /><br />
              <div v-for="id in arrayUlid" v-bind:key="id">
                <span>{{ id }}</span>
              </div>
            </div>

          </div>
      </div>
</template>

<script>


import IdBox from '../components/IdBox.vue';
import { ulid } from 'ulid'

export default {
  name: 'Home', 
  components: {
    IdBox,
  },
  data() {
    return {
      nbIdBox: null,
      messageError: '',
      nbIds: 0,
      arrayUlid: [],
    };
  },
  mounted() {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    generateUlid() {
        this.nbIds = 0;
      if(this.isNumber(this.nbIdBox)){
        this.nbIds = this.nbIdBox;
        this.arrayUlid = []
        for(let i = 0; i < this.nbIdBox ; i++) {
          let newid = ulid()
          this.arrayUlid.push(newid);
        }
        this.messageError = ""
      }else{
        this.messageError = "Veuillez rentrer un nombre entier."
      }
    },
    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    copyids() {
      let str=""
      for(let i = 0; i < this.arrayUlid.length ; i++) {
        if(i != 0){
          str = str+"\n"
        }
        str = str+this.arrayUlid[i];
      }
      return str;
    },
  },
};
</script>
