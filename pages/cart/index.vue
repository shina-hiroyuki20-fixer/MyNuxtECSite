<template>
  <div class="background">
    <div class="front-header-bg">
      <p class="title-font">
        <span style="font-style:italic;">Lorem Ipsum Express</span> | Shopping Cart
      </p>
    </div>
    <p style="padding: 32px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. A cras semper auctor neque vitae tempus quam pellentesque nec. In hendrerit gravida rutrum quisque
      non tellus orci ac. Ut placerat orci nulla pellentesque dignissim enim sit. Sollicitudin nibh sit amet commodo
      nulla facilisi nullam vehicula ipsum. Justo donec enim diam vulputate ut pharetra sit. Velit egestas dui id ornare
      arcu odio ut. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Amet mauris commodo quis
      imperdiet massa. Pharetra convallis posuere morbi leo urna molestie. Quam pellentesque nec nam aliquam sem et.
      Dignissim diam quis enim lobortis. Aliquet bibendum enim facilisis gravida neque convallis a. Nibh tortor id
      aliquet lectus proin nibh nisl. Viverra tellus in hac habitasse.
      In dictum non consectetur a. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vulputate ut
      pharetra sit amet. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lectus magna fringilla
      urna porttitor rhoncus dolor purus. Et netus et malesuada fames. Nulla pharetra diam sit amet nisl suscipit
      adipiscing bibendum est. Egestas erat imperdiet sed euismod. Ante metus dictum at tempor commodo ullamcorper a
      lacus. Maecenas sed enim ut sem. Turpis egestas pretium aenean pharetra. Cursus mattis molestie a iaculis at erat
      pellentesque. Massa massa ultricies mi quis hendrerit dolor. Ut etiam sit amet nisl purus in mollis. Et tortor
      consequat id porta nibh venenatis cras sed. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. In
      mollis nunc sed id semper risus in hendrerit. Hendrerit dolor magna eget est lorem ipsum dolor sit. Felis donec et
      odio pellentesque. Aliquam purus sit amet luctus venenatis lectus magna.
      Aliquet enim tortor at auctor urna. Eget nulla facilisi etiam dignissim diam. In hendrerit gravida rutrum quisque
      non tellus orci ac. Scelerisque mauris pellentesque pulvinar pellentesque. Lorem ipsum dolor sit amet consectetur
      adipiscing elit ut. In iaculis nunc sed augue lacus. Est pellentesque elit ullamcorper dignissim cras. Id porta
      nibh venenatis cras sed. Id volutpat lacus laoreet non curabitur gravida. Nunc sed blandit libero volutpat sed
      cras ornare arcu. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
      Pellentesque habitant morbi tristique senectus et. Sagittis id consectetur purus ut. Enim praesent elementum
      facilisis leo vel. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Elementum nisi quis eleifend
      quam adipiscing vitae proin sagittis nisl. Cras fermentum odio eu feugiat pretium nibh ipsum. Habitasse platea
      dictumst quisque sagittis. Ut etiam sit amet nisl purus. Mauris augue neque gravida in fermentum et sollicitudin
      ac. Vitae semper quis lectus nulla at. Sodales neque sodales ut etiam sit amet nisl. Convallis tellus id interdum
      velit. Volutpat consequat mauris nunc congue. Purus faucibus ornare suspendisse sed nisi lacus. Suspendisse
      ultrices gravida dictum fusce ut placerat. Lacinia quis vel eros donec ac odio. Posuere morbi leo urna molestie at
      elementum eu facilisis sed. Massa tincidunt nunc pulvinar sapien. Quis vel eros donec ac odio tempor orci. Diam
      quis enim lobortis scelerisque fermentum dui faucibus in.
      In hac habitasse platea dictumst vestibulum rhoncus. Et sollicitudin ac orci phasellus egestas tellus rutrum. Amet
      luctus venenatis lectus magna. Rutrum quisque non tellus orci ac auctor. Id diam vel quam elementum pulvinar
      etiam. Purus sit amet volutpat consequat mauris nunc. Amet mattis vulputate enim nulla aliquet porttitor. Interdum
      velit laoreet id donec ultrices tincidunt arcu non sodales. Cursus eget nunc scelerisque viverra mauris in. Mi
      eget mauris pharetra et ultrices neque ornare aenean. Ornare quam viverra orci sagittis eu volutpat odio facilisis
      mauris. Faucibus turpis in eu mi bibendum neque egestas congue. Duis at tellus at urna condimentum. Tortor posuere
      ac ut consequat semper viverra nam libero. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque
      pulvinar.
    </p>
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
export default {
  name: 'Index'
};
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
