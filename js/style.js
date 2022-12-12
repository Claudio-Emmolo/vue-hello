const {createApp} = Vue;

createApp({
	data() {
		return{
			title: "Hello Vue 3",
            img: "https://masteringjs.io/assets/images/vue/vue.png"
		}
	}
}).mount ('#app');