<template>
  <svg width="290" height="190"><text x="10" y="180">See you man</text></svg>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{Invalid:userNameValidity==='Invalid'}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" @blur="validateInput"/>
      <p v-if="userNameValidity==='Invalid'">Please Enter a Valid Value</p>
    </div>
    <div class="form-control">
      <label for="age">Your email</label>
      <input id="age" name="age" type="text" v-model="userName" ref="ageInput"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about me?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Linkedin</option>
        <option value="wom">Facebook</option>
        <option value="newspaper">Word of Mouth</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" />
        <label for="interest-news">Web Programming</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" />
        <label for="interest-tutorials">Machine Learning Algorithm</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" />
        <label for="interest-nothing">Data Analysis</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How Can I help you?</h2>
      <div>
        <input id="how-video" name="how" type="radio" />
        <label for="how-video">Mentoring</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" />
        <label for="how-blogs">Job Offer</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" />
        <label for="how-other">Partnership</label>
      </div>
    </div>
    <div>
      <button class="btnsend">SEND</button>
    </div>
  </form>


</template>
<script>
export default{
  data(){
    return {
      userName:'',
      userAge:null,
      referrer:'google',
      userNameValidity: 'pending',
    };
  },
  methods: {
    submitForm(){
      this.userName='';
      this.userAge='';

    },
    validateInput(){
      if(this.userName ===''){
        this.userNameValidity='Invalid';
      }else{
        this.userNameValidity='Valid';
      }
    },
  }
}
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px #cd8a36;
  padding: 2rem;
  background: transparent;
  position: relative;
  transform: translateY(10%);
}

.form-control {
  margin: 0.5rem 0;
  color: red;
}
.form-control.Invalid input{
  border-color: red;
}
.form-control.Invalid label{
  border-color: red;
}
label {
  color: #cd8a36;
  font-weight: bold;
}
svg {
  position: relative;
  margin: 2rem auto 0rem auto;
}
text {
  font-size: 3rem;
  stroke: #cd8a36;
  stroke-width: 2px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  fill: transparent;
  animation: dash 5s ease-out alternate infinite;

}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
h2 {
  color: white;
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
  background-color : #d1d1d1;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}


input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #cd8a36;
  background-color: #cd8a36;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>