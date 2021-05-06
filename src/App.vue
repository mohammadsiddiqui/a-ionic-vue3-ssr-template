<template>
	<ion-app>
		<Suspense>
			<ion-router-outlet />
		</Suspense>
	</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";

export default {
	name: "App",
	components: {
		IonApp,
		IonRouterOutlet,
	},
};
</script>
