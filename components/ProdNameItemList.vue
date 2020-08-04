<template>
  <v-layout row wrap>
    <v-flex x12 sm12 md12>
      <h3 class="headline">
        {{ prodName }} 該当する商品
      </h3>
    </v-flex>
    <v-flex v-for="(item, idx) in itemList" :key="idx" xs12 sm12 md12>
      <v-card style="width: 100%">
        <v-card-text>
          <p>{{ item.prodThumb }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ProdNameItemList',
  props: {
    prodName: {
      type: String,
      required: true
    }
  },
  computed: {
    itemList () {
      return this.$store.getters['item/findItemsByName'](this.itemList());
    }
  }
};
</script>

<style scoped>

</style>
