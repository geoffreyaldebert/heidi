<template>
    <div>
        <button 
        style="background-color: white; border: 0px; width: 100%; text-align: left; display: flex;" 
        @mouseover="mouseover()" 
        @mouseleave="mouseleave()"
        type="button"
        v-clipboard:copy="message"
        v-clipboard:success="onCopy">
        <div style="flex: 11 1 auto;">
            {{ message }}
        </div>
        <div style="flex: 1 1 auto;"> 
            <span v-if="visibleCopy" style="background-color: #DFDFF1; color: #060191; padding: 5px;">{{ copyMessage }}</span>
        </div>
        </button>
    </div>
</template>


<script>
import { uuid } from 'vue-uuid'; 

export default {
  name: 'IdBox',
  components: {},
  data() {
    return {
      message: uuid.v4(),
      copyMessage: "Copier",
      visibleCopy: false
    };
  },
  mounted() {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onCopy: function (e) {
      this.copyMessage = "Copié!"
    },
    mouseover() {
      this.visibleCopy = true;
    },
    mouseleave() {
      this.visibleCopy = false; 
      this.copyMessage = 'Copier';
    }
  },
};
</script>