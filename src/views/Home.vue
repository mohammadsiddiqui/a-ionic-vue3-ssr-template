<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>All Posts</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-card v-for="m in messages" :key="m.id" class="p" :routerLink="`/about/${m.id}`">
				<ion-card-header>
					<ion-card-subtitle>{{ m.id }}</ion-card-subtitle>
					<ion-card-title>{{ m.title }}</ion-card-title>
				</ion-card-header>
				<ion-card-content>
					{{ m.body }}
				</ion-card-content>
			</ion-card>
		</ion-content>
	</ion-page>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
} from "@ionic/vue";

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
		IonCardSubtitle,
		IonCardTitle,
		IonCardContent,
	},

	async setup() {
		const messages = ref(null);
		try {
			let r = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
			messages.value = r.data;
		} catch (error) {
			messages.value = [];
		}
		return { messages };
	},
};
</script>

<style scoped>
.p {
	cursor: pointer;
}

.p:hover {
	background: #f7f7f7;
}
</style>
