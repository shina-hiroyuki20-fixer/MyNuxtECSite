<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="teal accent-3">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">LoremIpsum&nbsp;<span class="font-weight-light">Shopping</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-search"
      />
      <v-spacer />
      <n-link to="/cart" class="link">
        <v-btn large color="lime lighten-3">
          My Cart
        </v-btn>
      </n-link>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>
                edit
              </v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item v-else :key="i" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="grey lighten-4 fill-height">
        <v-row justify="center" align="center">
          <v-col class="grow">
            <ProdNameItemList filter-name="test" />
            <v-tooltip right>
              <v-layout column justify-center align-center>
                <v-flex xs12 sm8 md6 />
              </v-layout>
              <!--              <template v-slot:activator="{ on }">-->
              <!--                <v-btn :href="source" icon large target="_blank" v-on="on">-->
              <!--                  <v-icon large>-->
              <!--                    mdi-code-tags-->
              <!--                  </v-icon>-->
              <!--                </v-btn>-->
              <!--              </template>-->
              <!--              <span>Source</span>-->
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import ProdNameItemList from '~/components/ProdNameItemList.vue';

export default Vue.extend({
  components: { ProdNameItemList },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-lightbulb-outline', text: 'Lightbulbes' },
      { icon: 'mdi-touch-app', text: 'Reminders' },
      { divider: true },
      { heading: 'Labels' },
      { icon: 'mdi-add', text: 'Create new label' },
      { divider: true },
      { icon: 'mdi-archive', text: 'Archive' },
      { icon: 'mdi-delete', text: 'Trash' },
      { divider: true },
      { icon: 'mdi-settings', text: 'Settings' },
      { icon: 'mdi-chat-bubble', text: 'Trash' },
      { icon: 'mdi-help', text: 'Help' },
      { icon: 'mdi-phonelink', text: 'App downloads' },
      { icon: 'mdi-keyboard', text: 'Keyboard shortcuts' }
    ]
  })
});
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}

.link {
  text-decoration: none;
}
</style>
