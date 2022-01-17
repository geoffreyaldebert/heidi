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
              <div v-for="id in arrayUuid" v-bind:key="id">
                <span>{{ id }}</span>
              </div>
            </div>

          </div>
      </div>
</template>

<script>


import IdBox from '../components/IdBox.vue';
import { uuid } from 'vue-uuid'; 

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
      arrayUuid: [],
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
        if(this.nbIdBox < 3000) {
          this.nbIds = this.nbIdBox;
          this.arrayUuid = []
          for(let i = 0; i < this.nbIdBox ; i++) {
            let newid = uuid.v4()
            this.arrayUuid.push(newid);
          }
          this.messageError = ""
        } else {
          this.messageError = "Veuillez rentrer un nombre inférieur à 3000."
        }
      }else{
        this.messageError = "Veuillez rentrer un nombre entier."
      }
    },
    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    copyids() {
      let str=""
      for(let i = 0; i < this.arrayUuid.length ; i++) {
        if(i != 0){
          str = str+"\n"
        }
        str = str+this.arrayUuid[i];
      }
      return str;
    },
  },
};
</script>
