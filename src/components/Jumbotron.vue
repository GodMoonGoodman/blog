<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            제발
            <br />인포크 팀에 합류해주세요
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="apply">싫어요</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang='scss' scoped>
.jumbotron {
  height: 400px;
  width: 100%;
  
  background-size: cover;
  /* background: linear-gradient(#343434 #ffffff ) url('../assets/inpock_cover.jpeg'); */
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('../assets/inpock_cover.jpeg') ;
  background-position: center;


  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #fff;
    line-height: 60px;
    letter-spacing: -0.5px;

    margin-bottom: 24px;
  }
}

button.apply {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;

  /* height: 40px; */
  /* width: 100px; */
  padding: 12px 22px;


  outline: none;

  font-size: 22px;


  cursor: pointer;

  transition: all 0.1s ease-out;

  border-radius: 2px;

    padding: 12px 22px;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.5px;

  &:focus, &:hover {
    background-color: rgba(255,255,255, 0.4);
  }
}
</style>
