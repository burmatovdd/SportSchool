<template>
<div class="main">
  <div class="container">
    <div class="main-content">
      <p>Вы можете посмотреть некоторые данные о спортивной школе</p>
      <div class="content">
        <div class="left">
          <div class="Sports">
            <button @click="showSports" class="top-button">Виды спорта</button>
            <ul id="sport" class="no-item customer-list">
              <li class="customer item" v-for="(sport,index) in sports">
                {{sport.item}}
                <button @click="sports.splice(index, 1)" class="top-button delete">Удалить</button>
              </li>
              <input id="addSport" type="text" placeholder="Введите вид спорта" class="input">
              <button @click="addSport" class="top-button sport-button">Добавить</button>
            </ul>
          </div>
          <div class="Customers">
            <button @click="showCustomers" class="top-button">Заказчики</button>
            <ul id="customer" class="no-item customer-list">
              <li class="customer item" v-for="(customer,index) in customers">
                {{customer.item}}
                <button @click="customers.splice(index, 1)" class="top-button delete">Удалить</button>
              </li>
              <input id="addCustomer" type="text" placeholder="Введите ФИО заказчика" class="input">
              <button @click="addSport" class="top-button sport-button">Добавить</button>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="Contracts">
            <button @click="showContracts" class="top-button">Договоры</button>
            <div class="contracts-list">
              <ul id="contract" class="no-item contract-list">
                <li class="contract item" v-for="(contract,index) in contracts">
                  Номер: {{ contract.item }} <br> Дата заключения: {{ contract.item2 }}
                  <button @click="contracts.splice(index, 1)" class="top-button delete">Удалить</button>
                </li>
                <input id="addContractsNumber" type="text" placeholder="Введите номер контракта" class="input">
                <input id="addContractsDate" type="text" placeholder="Введите дату заключения контракта" class="input">
                <button @click="addContract" class="top-button sport-button">Добавить</button>
              </ul>
            </div>
          </div>
          <div class="Students">
            <button @click="showStudents" class="top-button">Спортшкольники</button>
            <div class="student-list">
              <ul id="student" class="no-item student">
                <li class="contract item" v-for="(student,index) in students">
                  ФИО: {{ student.item }}
                  <br> Номер договар: {{ student.item2 }}
                  <br> Номер группы: {{student.item3}}
                  <br> Группа здоровья: {{student.item4}}
                  <button @click="students.splice(index, 1)" class="top-button delete">Удалить</button>
                </li>
                <input id="addStudentFIO" type="text" placeholder="Введите фио спортшкольника" class="input">
                <input id="addStudentContr" type="text" placeholder="Введите дату заключения контракта" class="input">
                <input id="addStudentGroup" type="text" placeholder="Введите спортивную группу спортшкольника" class="input">
                <input id="addStudentHealth" type="text" placeholder="Введите группу здоровья спортшкольника" class="input">
                <button @click="addStudent" class="top-button sport-button">Добавить</button>
              </ul>
            </div>
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
  name: "Main",
  data(){
    return{
      sports: [
        { item: 'Шахматы' },
        { item: 'Футбол' },
        { item: 'Хоккей' },
        { item: 'Волейбол' },
        { item: 'Теннис' },
      ],
      customers: [
        { item: 'Петрова М.В.' },
        { item: 'Сидоров М.П.' },
        { item: 'Цветочкин С.И.' },
        { item: 'Забиякин А.Э.' },
        { item: 'Орлова И.К.' },
        { item: 'Иванов И.И.' },
      ],
      contracts: [
        { item: '101', item2: "2022-04-12" },
        { item: '202', item2: "2021-08-07" },
        { item: '401', item2: "2023-04-10" },
        { item: '103', item2: "2023-03-05" },
      ],
      students: [
        { item: 'Петров О.М.',     item2: "101",   item3: "11",     item4: "Здоров" },
        { item: 'Сидора Е.М.',     item2: "201",   item3: "11",     item4: "Здоров" },
        { item: 'Забиякин Т.А.',   item2: "401",   item3: "55",     item4: "Спец группа" },
        { item: 'Цветочкина Я.С.', item2: "301",   item3: "55",     item4: "Здоров" },
      ],
    }
  },
  methods:{
    showSports: function (){
      let vl = document.getElementById('sport')
      vl.classList.toggle("no-item")
    },
    showCustomers: function (){
      let vl = document.getElementById('customer')
      vl.classList.toggle("no-item")
    },
    showContracts: function(){
      let vl = document.getElementById('contract')
      vl.classList.toggle("no-item")
    },
    showStudents: function(){
      let vl = document.getElementById('student')
      vl.classList.toggle("no-item")
    },
    goBack: function (){
      this.$router.push('/')
    },
    addSport : function (){
      let vl = document.getElementById('addSport').value
      this.$data.sports.push({item: vl})
    },
    addCustomer: function (){
      let vl = document.getElementById('addCustomer').value
      this.$data.customers.push({item: vl})
    },
    addContract: function (){
      let num = document.getElementById('addContractsNumber').value
      let date = document.getElementById('addContractsDate').value
      this.$data.contracts.push({item: num,item2: date})
    },
    addStudent: function (){
      let fio = document.getElementById('addStudentFIO').value
      let contr = document.getElementById('addStudentContr').value
      let group = document.getElementById('addStudentGroup').value
      let health = document.getElementById('addStudentHealth').value
      this.$data.students.push({item: fio,item2: contr,item3: group,item4: health})
    }
  }
})
</script>

<style lang="css">
@import 'main.css';
</style>