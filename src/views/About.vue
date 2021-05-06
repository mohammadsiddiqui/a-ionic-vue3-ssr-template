<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button default-href="/"></ion-back-button>
				</ion-buttons>
				<ion-title>Post Detail</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-card v-if="message">
				<ion-card-header>
					<ion-card-title>{{ message.title }} </ion-card-title>
				</ion-card-header>
				<ion-card-content>
					{{ message.body }}
				</ion-card-content>
			</ion-card>
			<ion-card v-else>
				<ion-card-header>
					<ion-card-title>Uhh ohh! </ion-card-title>
				</ion-card-header>
				<ion-card-content>
					<h2>404</h2>
					<p>Post Not Found! It seems you are lost!</p>
				</ion-card-content>
			</ion-card>
		</ion-content>
	</ion-page>
</template>

<script>
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonButtons,
	IonBackButton,
} from "@ionic/vue";

import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";

export default {
	name: "Home",
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardContent,
		IonButtons,
		IonBackButton,
	},
	async setup() {
		const message = ref(null);
		const route = useRoute();
		try {
			let r = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
			message.value = r.data;
		} catch (error) {
			message.value = null;
		}
		return { message };
	},
};
</script>

<style scoped></style>
