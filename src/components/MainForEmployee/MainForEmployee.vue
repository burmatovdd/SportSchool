<template>
  <div class="main">
    <div class="container">
      <div class="main-content">
        <p>Вы можете посмотреть некоторые данные о спортивной школе</p>
        <div class="Customers">
          <div class="left">
            <button @click="showCustomers" class="top-button">Заказчики</button>
            <ul id="customer" class="no-item customer-list">
              <li class="customer item" v-for="(customer,index) in customers">
                {{customer.item}}
                <button @click="customers.splice(index, 1)" class="top-button delete">Удалить</button>
              </li>
            </ul>
          </div>
          <div class="right">
            <div class="right-add">
              <input id="add" type="text" placeholder="Введите ФИО заказчика" class="input">
              <button @click="addCustomer" class="top-button">Добавить</button>
            </div>
          </div>
        </div>
        <button class="top-button exit-button" @click="goBack">Выход</button>
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
    },
    addCustomer: function (){
      let vl = document.getElementById('add').value
      this.$data.customers.push({item: vl})
    },
  }
})
</script>

<style lang="css">
@import "../MainForAdmin/main.css";

</style>