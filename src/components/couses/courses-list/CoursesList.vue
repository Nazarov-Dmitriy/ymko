<template >
    <div :class="viewCards === 'tile' ? 'course__list' : 'course__list course__list__line'">
        <template v-if="data.length > 0">
            <CoursesItem v-for="item in data" :item="item" :key="item.id" :viewCards="viewCards" />
        </template>
        <p v-else class="search-no-result">По запросу ничего не найдено</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CoursesItem from '../courses-item/CoursesItem.vue';
import IData from "@/interface/IData"

interface ICoursesItem {
    data: IData[];
}

export default defineComponent({
    name: 'CoursesList',
    components: { CoursesItem },
    props: ["dataArray", "viewCards"],
    data(): ICoursesItem {
        return {
            data: this.dataArray,
        };
    }, watch: {
        dataArray: function (newVal) {
            this.data = newVal;
        },
    },
})
</script>
<style scoped lang="scss">
.course__list {
    padding: 60px 0 10px 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 368px));
    gap: 20px;
    justify-content: space-between;
    position: relative;
    max-width: 1146px;
    width: calc(100% - 160px);
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        top: 370px;
        right: -455px;
        background-image: url('@/assets/images/courses/bg_tile_course.png');
        width: 616px;
        height: 485px;
        background-size: contain;
        transform: rotate(15deg);
    }

    @media (max-width: 991px) {
        width: calc(100% - 120px);
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        width: calc(100% - 120px);
        grid-template-columns: 1fr;
    }

    @media (max-width: 576px) {
        width: calc(100% - 20px);
        padding-top: 30px;
    }
}

.course__list__line {
    grid-template-columns: 1fr;
}

.search-no-result {
    color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 20px;
    line-height: 130%;
}
</style>