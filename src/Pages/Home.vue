<template>
  <div class="inputs-data">
    <p v-for="input in formData">{{ input }}</p>
  </div>
  <button class="start-btn" @click="popupActive">Начать</button>
  <div
    class="popup-shadow"
    :class="{ active_shadow: popupShadow }"
    @click="popupClose"
  ></div>
  <div class="popup-wrapper" :class="{ active_window: popupWrapper }">
    <img
      class="popup__close-btn"
      src="/close-pop-up.svg"
      alt=""
      @click="popupClose"
    />
    <form @submit.prevent>
      <h2>Заполните Форму!</h2>
      <div class="input-wrapper">
        <input type="text" placeholder="Введите Имя" v-model="formData.name" />
        <input
          type="text"
          placeholder="Введите Фамилию"
          v-model="formData.sername"
        />
        <input
          type="text"
          placeholder="Введите номер телефона"
          v-model="formData.phone_number"
        />
        <input
          type="text"
          placeholder="Введите Ваш никнейм"
          v-model="formData.nickname"
        />
        <input
          type="email"
          placeholder="Введите Вашу почту"
          v-model="formData.email"
        />
      </div>
      <input type="submit" class="send" value="отправить" @click="popupClose" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupShadow: false,
      popupWrapper: false,
      popupCloseBtn: false,
      startBtn: false,
      sendBtn: false,
      formData: {
        name: "",
        sername: "",
        phone_number: "",
        nickname: "",
        email: "",
      },
    };
  },

  methods: {
    popupActive() {
      this.popupShadow = true;
      this.popupWrapper = true;
      document.body.style.overflow = "hidden";
    },
    popupClose() {
      this.popupShadow = false;
      this.popupWrapper = false;
      document.body.style.overflow = "inherit";
    },
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

button,
.send {
  background-color: rgb(54, 106, 220);
  padding: 16px 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

input {
  padding: 16px 20px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 16px;
  font-family: "Mulish";
  line-height: 20px;
  border: none;
}

.popup-shadow {
  background: rgba(0, 0, 0, 0.63);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.popup-shadow.active_shadow {
  z-index: 999;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
}

.popup-wrapper {
  max-width: 500px;
  width: 100%;
  min-height: 430px;
  background-color: rgb(243, 243, 246);
  border-radius: 40px;
  padding: 20px;
  position: absolute;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.popup-wrapper.active_window {
  display: block;
}

.input-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 20px;
}

.popup__close-btn {
  cursor: pointer;
}

.inputs-data {
  display: flex;
  gap: 0 20px;
}

.inputs-data p {
  font-family: "Mulish";
  font-size: 20px;
}

form {
  text-align: center;
}

form h2 {
  margin-bottom: 20px;
  font-family: "Mulish";
}
</style>
