<template>
    <div class="list">
    <v-toolbar class="filter-bar">
      <v-toolbar-items>
      <v-text-field
        class="mx-3"
        v-model="search"
        flat
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>

        <template>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Choose date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <v-list class="ship-list" two-line>
      <template v-for="(element, index) in list" v-if="element">
        <v-subheader :key="index + element[0].PAX">
          <span class="header">{{element[0].DATE}}</span>
        </v-subheader>
        <v-list-tile class="list-element" v-for="(item, index2) in element" :key="index2 + item.SHIP + index">
          <v-list-tile-content>
            <v-list-tile-title class="ship-name">{{item.SHIP}}</v-list-tile-title>
            <v-list-tile-sub-title><v-icon>alarm</v-icon> {{item.ETA}} - {{item.ETD}}</v-list-tile-sub-title>
            <v-list-tile-sub-title><v-icon>supervisor_account</v-icon> {{item.PAX}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </template>
    </v-list>
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
      date: null,
      menu: null,
      search: null
    }
  },
  computed: {
    list () {
      var temp = _.groupBy(this.elements, 'DATE')

      if (this.date) {
        const [year, month, day] = this.date.split('-')
        var date = `${day}.${month}.${year}`
        temp = {date: temp[date]}
      }
      if (this.search) {
        var temp2 = {}
        _.filter(temp, (post) => {
          var temp3 = []
          _.each(post, el => {
            if (el.SHIP.toLowerCase().includes(this.search.toLowerCase())) {
              temp3.push(el)
            }
          })
          if (temp3.length > 0) {
            temp2[post[0].DATE] = temp3
          }
        })
        temp = temp2
      }
      return temp
    }
  },
  mounted () {
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
<style scoped lang="scss">
.list {
  .filter-bar {
    z-index: 100;
    position: fixed;
    .v-toolbar__items {
      width: 100%;
    }
  }
  .ship-list {
    padding-top: 55px;
    .header {
      font-size: 16px;
    }
    .list-element {
      padding-bottom: 10px !important;
      .ship-name {
        font-size: 18px;
      }
    }
  }
}
</style>