<template>
  <div class="main">
    <div class="container">
      <div class="main-content">
        <p>Вы можете посмотреть некоторые данные о спортивной школе</p>
        <div class="Customers">
          <button @click="showCustomers" class="top-button">Заказчики</button>
          <ul id="customer" class="no-item customer-list">
            <li class="customer item" v-for="customer in customers">
              {{customer.item}}
            </li>
          </ul>
        </div>
        <button class="top-button exit-button" @click="goBack">Выход</button>
      </div>
      </div>
    </div>
  </div>
</template>



<script>
import {defineComponent} from 'vue';
export default defineComponent({
  name: "MainForEmployee",
  data(){
    return{
      customers: [
        { item: 'Петрова М.В.' },
        { item: 'Сидоров М.П.' },
        { item: 'Цветочкин С.И.' },
        { item: 'Забиякин А.Э.' },
        { item: 'Орлова И.К.' },
        { item: 'Иванов И.И.' },
      ],
    }
  },
  methods:{
    showCustomers: function (){
      let vl = document.getElementById('customer')
      vl.classList.toggle("no-item")
    },
    goBack: function (){
      this.$router.push('/')
    }
  }
})
</script>

<style lang="css">
@import "../MainForAdmin/main.css";

</style>