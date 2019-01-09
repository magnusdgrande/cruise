<template>
  <div class="home">
    <div class="list">
        <v-list two-line>
          <template v-for="(element, index) in list">
            <v-subheader
              :key="index"
            >
              {{ index}}
            </v-subheader>
            <v-list-tile v-for="(item, index) in element" :key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{item.SHIP}}</v-list-tile-title>
                <v-list-tile-sub-title>{{item.ETA}} - {{item.ETD}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                {{item.PAX}}
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
    </div>
  </div>
</template>

<script>
import geiranger from '@/lists/geiranger.json'
var _ = require('lodash');

export default {
  name: 'about',
  data: function () {
    return {
      elements: geiranger,
      list: []
    }
  },
  mounted () {
    this.list = _.groupBy(this.elements, 'DATE')
    this.today = this.$moment().add(150, 'd')
    console.log(this.list)
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
