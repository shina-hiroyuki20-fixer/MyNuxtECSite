<template>
  <v-layout row wrap>
    <v-flex x12 sm12 md12>
      <h3 class="headline">
        {{ filterName }} 該当する商品
      </h3>
    </v-flex>
    <v-flex v-for="(item, idx) in itemList" :key="idx" xs12 sm12 md12>
      <v-card style="width: 100%">
        <v-card-text>
          <p>{{ item.name }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProduct } from '~/types/product';

export default Vue.extend({
  name: 'ProdNameItemList',
  props: {
    filterName: {
      type: String,
      required: true
    }
  },
  computed: {
    itemList (): IProduct[] {
      return (this.$store.getters['item/findItems'] as IProduct[]);
    },
    itemNameList (): IProduct[] {
      return this.$store.getters['item/findItemsByName'](this.filterName);
    }
  }
});
</script>

<style scoped>

</style>
