<template>
  <div class="background">
    <div class="front-header-bg">
      <p class="title-font">
        <span style="font-style:italic;">Lorem Ipsum Express</span> | Shopping Cart
      </p>
    </div>
    <div style="margin: 64px">
      <ProdNameItemList filter-name="test" />
    </div>
    <footer>
      <button type="button" name="purchase">
        <div id="purchase" class="purchase-bg">
          <p class="purchase-font">
            PURCHASE
          </p>
        </div>
      </button>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import ProdNameItemList from '~/components/ProdNameItemList.vue';

export default Vue.extend({
  name: 'Index',
  components: { ProdNameItemList },
  props: {
    source: String
  }
});

</script>

<style lang="scss">
.title-font {
  /* Lorem Ipsum Express | Shopping Cart */

  position: relative;
  width: auto;
  height: auto;
  left: 0px;
  top: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 100%;
  text-align: center;

  color: #4a3c4c;
}

.purchase-font {
  /* BuyText */

  position: relative;
  width: auto;
  height: auto;
  right: 0px;
  bottom: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.16em;

  color: #4A3C4C;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  margin: 10px 0px;
}

.front-header-bg {
  /* frontHeader */

  position: fixed;
  width: 100%;
  height: 64px;
  left: 0px;
  top: 0px;

  padding: 16px 8px 8px;

  background: #E6EE9C;
}

.purchase-bg {
  /* BuyButton */

  /* Auto Layout */
  display: flex;
  flex-direction: row;
  padding: 8px 24px;

  position: fixed;
  width: auto;
  height: auto;
  right: 32px;
  bottom: 32px;

  background: #1DE9B6;
  border-radius: 24px;
}

.background {
  /* background */

  position: relative;
  width: auto;
  height: 1440px;

  box-sizing: border-box;

  background: #C4C4C4 scroll;
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
}
</style>
