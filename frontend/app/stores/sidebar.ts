import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebar = defineStore("sidebar", {
  state: () => ({
    collapsed: ref(false),
    collapsedSwitch: ref(false),
  }),

  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      if (import.meta.client)
        localStorage.setItem("collapsed", String(this.collapsed));
    },
    toggleCollapsedSwitch() {
      this.collapsedSwitch = !this.collapsedSwitch;
      if (import.meta.client)
        localStorage.setItem("collapsedSwitch", String(this.collapsedSwitch));
    },
    hydrateFromLocalStorage() {
      if (import.meta.client) {
        this.collapsed = localStorage.getItem("collapsed") === "true";
        this.collapsedSwitch =
          localStorage.getItem("collapsedSwitch") === "true";
      }
    },
  },
});

// In your component, call: sidebar.hydrateFromLocalStorage() in onMounted
