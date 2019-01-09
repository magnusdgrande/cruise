<template>
  <div class="home">
    <div class="list">
      asdf
      <div class="list-element" v-for="(element, index) in list" :key="index">
        {{ship.SHIP}}
      </div>
    </div>
  </div>
</template>

<script>
import geiranger from '@/lists/geiranger.json'
var _ = require('lodash');

export default {
  name: 'home',
  data: function () {
    return {
      elements: geiranger,
      list: []
    }
  },
  mounted () {
    this.list = _.groupBy(this.elements, 'DATE')
    this.today = this.$moment().add(150, 'd')
    console.log(this.elements)
  },
  methods: {
    compare (date) {
      let temp = this.$moment(date, 'DD-MM-YYYY"')
      if (temp.format('DD-MM-YYYY') === this.today.format('DD-MM-YYYY')) {
        return true
      }
    }
  }
}
</script>
