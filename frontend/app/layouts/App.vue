<template>
  <NuxtLoadingIndicator color="#F0A14C" />
  <HeaderMobile />
  <client-only>
    <MenuMobileNavigationDropdown v-if="!aboveMediumBP" />
    <MenuMobileNavBar v-if="!aboveMediumBP" />
  </client-only>
  <slot />
</template>

<script setup lang="ts">
const aboveMediumBP = useBreakpoint("md");

const sidebar = useSidebar();

onMounted(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  handleWindowSizeChange();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleWindowSizeChange);
});

const handleWindowSizeChange = () => {
  if (window.innerWidth < 1280) {
    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;
  }
};
</script>
