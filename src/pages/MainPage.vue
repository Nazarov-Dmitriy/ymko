<template >
    <div class="main-page">
        <HeaderComponent />
        <AboutCourse />
        <CoursesComponent />
        <AdvertisingComponent />
        <QuestionsComponent />
        <FooterComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import AboutCourse from '@/components/about-course/AboutCourse.vue'
import CoursesComponent from '@/components/couses/CoursesComponent.vue'
import AdvertisingComponent from '@/components/advertising/AdvertisingComponent.vue'
import QuestionsComponent from '@/components/questions/QuestionsComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

export default defineComponent({
    name: 'MainPage',
    components: {
        HeaderComponent,
        AboutCourse,
        CoursesComponent,
        AdvertisingComponent,
        QuestionsComponent,
        FooterComponent
    }
})
</script>
<style scoped lang="scss">
.main-page {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
}
</style>