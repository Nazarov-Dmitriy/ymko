<template>
    <div class="courses" id="courses">
        <SeacrhPanel :dataArray=dataArray @getSearchParam="setSearchParam" />
        <FilterPanel @getFilter="setFilter" @getViewCards="setViewCards" :propClear="clearFilter" />
        <CoursesList :dataArray=dataArrayFilter :viewCards="viewCards" />
        <div class="courses__btn" @click="linkTo()">
            <buttun class="courses__btn__text">Все курсы</buttun>
            <buttun class="courses__btn__arrow"></buttun>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SeacrhPanel from './seach-panel/SeacrhPanel.vue';
import FilterPanel from './filter-panel/FilterPanel.vue';
import CoursesList from './courses-list/CoursesList.vue';
import { dataCourse } from "./data/course-data";
import IData from "@/interface/IData"

interface ICoursesComponent {
    dataArray: IData[];
    dataArrayFilter: IData[] | null | undefined;
    clearFilter: boolean;
    viewCards: string;
}

export default defineComponent({
    name: 'CoursesComponent',
    components: { SeacrhPanel, FilterPanel, CoursesList },
    data(): ICoursesComponent {
        return {
            dataArray: dataCourse,
            dataArrayFilter: dataCourse,
            clearFilter: false,
            viewCards: "tile",

        };
    }, methods: {
        setFilter(field: string, filterSort: string): void {
            this.sort(field, filterSort);
            this.clearFilter = false;
        },
        setViewCards(view: string): void {
            this.viewCards = view;
        },
        setSearchParam(seacrh: string, selectedPayment: number, selectedTypeDocument: string): void {
            if (seacrh === '' && selectedPayment === -1 && selectedTypeDocument === '') {
                this.dataArrayFilter = this.dataArray
            } else if (seacrh !== '' && selectedPayment === -1 && selectedTypeDocument === '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.name.toLowerCase().includes(seacrh.toLowerCase()))
            } else if (seacrh !== '' && selectedPayment > -1 && selectedTypeDocument === '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.name.toLowerCase().includes(seacrh.toLowerCase()) && item.payment == selectedPayment)
            } else if (seacrh !== '' && selectedPayment > -1 && selectedTypeDocument !== '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.name.toLowerCase().includes(seacrh.toLowerCase()) && item.payment == selectedPayment && item.typeCourse === selectedTypeDocument)
            } else if (seacrh === '' && selectedPayment > -1 && selectedTypeDocument === '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.payment == selectedPayment)
            } else if (seacrh === '' && selectedPayment > -1 && selectedTypeDocument !== '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.payment == selectedPayment && item.typeCourse === selectedTypeDocument)
            } else if (seacrh === '' && selectedPayment === -1 && selectedTypeDocument !== '') {
                this.dataArrayFilter = this.dataArray?.filter(
                    item => item.typeCourse == selectedTypeDocument)
            }

            this.clearFilter = true;
        },
        sort(field: string, filterSort: string): void {
            if (filterSort == 'Asending') {
                this.dataArrayFilter = this.dataArrayFilter?.sort(
                    (a: any, b: any) =>
                        (a[field] !== null ? a[field] : 0) -
                        (b[field] !== null ? b[field] : 0)
                )
            } else {
                this.dataArrayFilter = this.dataArrayFilter?.sort(
                    (a: any, b: any) =>
                        (b[field] !== null ? b[field] : 0) -
                        (a[field] !== null ? a[field] : 0)
                )
            }
        },
        linkTo(): void {
            this.$router.push({ path: `/development` });
        },

    }

})
</script>

<style scoped lang="scss">
.courses {
    padding: 0 146px;
    overflow: hidden;
}

.courses__btn {
    cursor: pointer;
    display: flex;
    margin: 60px auto 0 auto;
    align-items: center;
    width: 260px;
}

.courses__btn__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 204px;
    height: 48px;
    border-radius: 90px 0 0 90px;
    background-image: url('@/assets/images/about-course/button_bg_left.svg');
    background-size: 100%;
    color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;

    &:hover {
        color: $text-white;
    }
}

.courses__btn__arrow {
    width: 56px;
    height: 48px;
    margin-left: -2px;
    background-image: url('@/assets/images/about-course/button_bg_right.svg');
    background-size: 100% 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 27.136px;
        height: 26px;
        background-image: url('@/assets/icons/btns/arrow.svg');
    }

    &:hover {
        &::before {
            background-image: url('@/assets/icons/btns/arrow_hover.svg');
        }
    }
}
</style>