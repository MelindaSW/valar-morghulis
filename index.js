
/*
Uppgift 5
Paketera en applikation bestående av, och nyttjar, minst två .vue-filer,
som båda innehåller HTML (template-elementet),
CSS (eller SCSS; style-elementet),
och JavaScript (script-elementet).

Vue Router (NodeJS-paketet vue-router, som kan importeras via import VueRouter from 'vue-router')
eller Vuex (vuex, som kan importeras import Vuex from 'vuex'),
eller både Vue Router och Vuex, ska användas.

Funktionaliteten måste inte vara sammanhängande eller meningsfull.

Konfigurera valfritt ESLint att fungera med .vue-filer.

Lämna in all kod som behövs för att köra projektet
och installera dess beroenden med npm install (det vill säga, package.json),
i en Zip-fil som heter frontend.zip. node_modules-katalogen ska inte ingå i Zip-arkivet.
*/

import Vue from 'vue'
import App from './components/App.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	render: h => h(App),
	store
})