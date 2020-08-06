<template lang="pug">
  #shop
      //-items 是表格資料的陣列
      //-fields 是欄位設定陣列
      b-table(:items="products" :fields="fields" hover striped)
        template(v-slot:cell(price)="data")
          | NT$
          span.text-danger {{ data.value }}
        template(v-slot:cell(action)="data")
          b-btn.text-primary(variant="link" @click="addCart(data.item)")
            font-awesome-icon(:icon="['fas','shopping-cart']")
            |    放入購物車
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'HelloThere Slogan T-shirt',
          imgUrl: 'https://i.imgur.com/ENfonqr.png',
          price: 300
        },
        {
          id: 2,
          name: 'HelloThere Celadon T-shirt',
          price: 25900
        },
        {
          id: 3,
          name: '2019年款 MacBook Pro 15.4吋 第九代i9 八核心 16G/512G 筆電(具觸控列Touch ID)',
          price: 76900
        }
      ],
      fields: [
        {
          // -json 的key
          key: 'name',
          // -顯示文字
          label: '商品名'
        },
        {
          // -json 的文字
          key: 'price',
          // -顯示文字
          label: '價格'
        },
        {
          // -也可以使用不存在的key, 自己去定義內容
          key: 'action',
          label: '動作'
        }
      ]
    }
  },
  methods: {
    addCart (data) {
      // 呼叫vuex名為addCart 的mutations
      // 將進來的methods的資料傳過去
      this.$store.commit('addCart', data)
    }
  }
}
</script>
