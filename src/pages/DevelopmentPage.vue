<template >
    <div class="development-page">
        <HeaderComponent />
        <h2 class="development-page__title">Страница находится в разработке</h2>
        <FooterComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

export default defineComponent({
    name: 'DevelopmentPage',
    components: { HeaderComponent, FooterComponent }
})
</script>
<style scoped lang="scss">
.development-page {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    height: 100vh;
    background: $background;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.development-page__title {
    padding: 100px 147px;
}
</style>