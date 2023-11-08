/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import TypewriterDirective from "@/directives/typewriter"; // Import the custom directive

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
app.directive("typewriter", TypewriterDirective);
app.mount("#app");
