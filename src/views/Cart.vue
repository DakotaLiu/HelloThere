<template lang="pug">
  #cart
    v-container(fluid )
      v-row
        v-col
    h1 購物車
    //- 官方不推薦直接用
    //- | {{ $store.state.cart}}
    //- | {{ $store.getters.cart}}
    b-table(:items="cart" :fields="fields")
      template(v-slot:cell(action)="data")
        b-btn.text-danger(variant="link" @click="delCart(data.index)")
          font-awesome-icon(:icon="['fa','trash-alt']")
    h1.text-center 總共 {{ cart.length }} 個商品
    h1.text-center 總計 {{ totalPrice }} 元
</template>

<script>

export default {
  name: 'Cart',
  components: {

  },
  data () {
    return {
      itemList: [
        {
          id: '1',
          itemName: 'Hello Slogan ',
          imgUrl: 'https://images.unsplash.com/photo-1534961880437-ce5ae2033053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          price: '500',
          count: '1'
        },
        {
          id: '2',
          itemName: 'HelloThere社群灰綠T',
          imgUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          price: '790',
          count: '1'
        },
        {
          id: '3',
          itemName: '超時尚牛仔庫',
          imgUrl: 'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
          price: '1200',
          count: '1'
        },
        {
          id: '4',
          itemName: '質感褐色系大衣服',
          imgUrl: 'https://images.unsplash.com/photo-1491998664548-0063bef7856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          price: '2300',
          count: '1'
        }
      ]
    }
  }
}
</script>
