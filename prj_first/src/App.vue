<template>
  <header>
    <div class="menu">
      <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
      <a v-for="(a, i) in 메뉴들" :key="a">{{ a }}</a>
      <!-- <a v-for="(a, i) in 메뉴들" :key="i">{{ i }}</a> -->
    </div>
  </header>
  <hr>
  <main>
    <div class="blackBg" v-if="모달창열렸니 == true">
      <div class="whiteBg">
        <h4>상세페이지임</h4>
        <p>상세페이지내용</p>
        <button @click="모달창열렸니 =  false">닫기</button>
      </div>
    </div>
    <!-- <div>
      <h4 :style="styleB">XX 원룸</h4>   
      속성엔 :속성="명칭"
      <p>{{ price1 }} 만원</p>
      {{ 명칭 }}
    </div> -->
    <div v-for="(a, i) in 원룸들" :key="a">
      <img :src="원룸들[a, i].image" class="roomImg">
      <h4 @click="모달창열렸니 = true">{{ 원룸들[a, i].title }}</h4>
      <p>{{ 원룸들[a, i].price }}원</p>
    </div>
    <!-- <div>
      <img src="./assets/images/room1.jpg" class="roomImg">
      <h4 @click="모달창열렸니 = true">{{ products [1] }}</h4>
      <p>{{ price [1] }} 만원</p>
      <button @click="increase2">허위매물신고</button>
      <span>신고수 : {{ 신고수 [1] }}</span>
    </div>
    <div>
      <img src="./assets/images/room2.jpg" class="roomImg">
      <h4 @click="모달창열렸니 = true">{{ products [2] }}</h4>
      <p>{{ price [2] }} 만원</p>
      <button v-on:click="increase3">허위매물신고</button>
      <span>신고수 : {{ 신고수 [2] }}</span>
    </div> -->
  </main>
</template>

<script>
  import data from './assets/js/data.js';

  export default {
    name: 'App',
    data(){
      return {
        원룸들 : data,
        신고수 : [0, 0, 0],
        price : [50, 60, 70],
        styleB : 'color : blue',
        products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
        메뉴들 : ['Home', 'Products', 'About'],
        모달창열렸니 : false,
      }
    },
    methods : {
      increase1(){
        this.신고수[0] += 1;
      },
      increase2(){
        this.신고수[1] += 1;
      },
      increase3(){
        this.신고수[2] += 1;
      },
    },
    components: {
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: white;
  }

  .menu {
    background-color: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

  .roomImg {
    width: 100%;
    margin-top: 40px;
  }

  body {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .blackBg {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }

  .whiteBg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
</style>