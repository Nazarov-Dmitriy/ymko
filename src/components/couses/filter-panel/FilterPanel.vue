<template >
    <div class="fillter-panel">
        <div class="fillter-panel__list">
            <div class="fillter-panel__list__item" @click="setFilter(filterName, filterSort, filterField)">
                <p class="fillter-panel__list__item__text fillter-panel__list__item__text-active">{{ filterName }}</p>
                <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                    :class="filterSort == 'Desending' ? 'fillter-panel__list__item__img' : ''">
            </div>
            <div class="fillter-panel__list__item" @click="setFilter('по рейтингу', filterSortReting, 'rating')">
                <p class="fillter-panel__list__item__text">по рейтингу</p>
                <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                    :class="filterSortReting == 'Desending' ? 'fillter-panel__list__item__img' : ''">
            </div>
            <div class="fillter-panel__list__item" @click="setFilter('по цене', filterSortCost, 'payment')">
                <p class="fillter-panel__list__item__text">по цене</p>
                <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                    :class="filterSortCost == 'Desending' ? 'fillter-panel__list__item__img' : ''">
            </div>
            <div class="fillter-panel__list__item" @click="setFilter('по длительности', filterSortByDuration, 'duration')">
                <p class="fillter-panel__list__item__text">по длительности</p>
                <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                    :class="filterSortByDuration == 'Desending' ? 'fillter-panel__list__item__img' : ''">
            </div>
        </div>
        <div class="fillter-panel__btns">
            <div :class="isActiveLine ? 'fillter-panel__btn fillter-panel__btn-active' : 'fillter-panel__btn'"
                @click="setActiveView('line')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="4.5" rx="1" fill="#CCCAB7" />
                    <rect y="7.75" width="20" height="4.5" rx="1" fill="#CCCAB7" />
                    <rect y="15.5" width="20" height="4.5" rx="1" fill="#CCCAB7" />
                </svg>
            </div>
            <div :class="isActiveTile ? 'fillter-panel__btn fillter-panel__btn-active' : 'fillter-panel__btn'"
                @click="setActiveView('tile')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="9" rx="1" fill="#F9C74B" />
                    <rect x="11" width="9" height="9" rx="1" fill="#F9C74B" />
                    <rect x="11" y="11" width="9" height="9" rx="1" fill="#F9C74B" />
                    <rect y="11" width="9" height="9" rx="1" fill="#F9C74B" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

interface IData {
    isActiveLine: boolean;
    isActiveTile: boolean;
    filterName: string;
    filterSort: string;
    filterField: string;
    filterSortReting: string;
    filterSortCost: string;
    filterSortByDuration: string;
    clearFilter: boolean;
}

export default defineComponent({
    name: 'FilterPanel',
    props: ["propClear"],

    data(): IData {
        return {
            isActiveLine: false,
            isActiveTile: true,
            filterName: "по рейтингу",
            filterField: "rating",
            filterSort: "Asending",
            filterSortReting: "Asending",
            filterSortCost: "Asending",
            filterSortByDuration: "Asending",
            clearFilter: this.propClear,
        };
    },
    methods: {
        setActiveView(view: string): void {
            if (view === "tile") {
                this.isActiveTile = true;
                this.isActiveLine = false;
            } else {
                this.isActiveTile = false;
                this.isActiveLine = true;
            }
            this.$emit("getViewCards", view);
        },
        setFilter(filter: string, sort: string, field: string): void {
            if (this.filterName === filter) {
                this.filterSort === "Asending" ? this.filterSort = "Desending" : this.filterSort = "Asending"
                if (filter === "по рейтингу") {
                    this.filterSortReting === "Asending" ? this.filterSortReting = "Desending" : this.filterSortReting = "Asending"
                } else if (filter === "по цене") {
                    this.filterSortCost === "Asending" ? this.filterSortCost = "Desending" : this.filterSortCost = "Asending"
                } else if (filter === "по длительности") {
                    this.filterSortByDuration === "Asending" ? this.filterSortByDuration = "Desending" : this.filterSortByDuration = "Asending"
                }
            } else {
                if (filter === "по рейтингу") {
                    this.filterSortReting = sort;
                    this.filterSortCost = "Asending"
                    this.filterSortByDuration = "Asending"
                } else if (filter === "по цене") {
                    this.filterSortReting = "Asending";
                    this.filterSortCost = sort
                    this.filterSortByDuration = "Asending"
                } else if (filter === "по длительности") {
                    this.filterSortReting = "Asending";
                    this.filterSortCost = "Asending"
                    this.filterSortByDuration = sort
                }
                this.filterSort = sort;
            }
            this.filterName = filter;
            this.filterField = field;
            this.$emit("getFilter", field, this.filterSort);
        },
    }, watch: {
        propClear: function (newVal) {
            if (newVal) {
                this.isActiveLine = false;
                this.isActiveTile = true;
                this.filterName = "по рейтингу";
                this.filterField = "rating";
                this.filterSort = "Asending";
                this.filterSortReting = "Asending";
                this.filterSortCost = "Asending";
                this.filterSortByDuration = "Asending";
            }
        },
    },
})
</script>
<style scoped lang="scss">
.fillter-panel {
    box-sizing: border-box;
    border-radius: 25px;
    border-right: 10px solid $text-white-20;
    border-bottom: 10px solid $text-white-20;
    border-left: 10px solid $text-white-20;
    background: #F3F3F3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding: 23px 68px 12px 60px;
}

.fillter-panel__list {
    display: flex;
    align-items: center;
    gap: 32px;
}

.fillter-panel__list__item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 40px;
    height: 35px;
    cursor: pointer;
    position: relative;

    &:first-child .fillter-panel__list__item__text {
        width: 149px;
    }

    &:nth-child(-n+3)::before {
        content: "";
        position: absolute;
        right: -40px;
        width: 1px;
        height: 100%;
        background: #D7D7D7;
    }
}

.fillter-panel__list__item__text {
    color: $main-text;
    font-family: Montserrat-Regular;
    font-size: 16px;
    line-height: 140%;

    &-active {
        font-family: Montserrat-Bold;
    }
}



.fillter-panel__list__item__img {
    rotate: 180deg;
}

.fillter-panel__btns {
    display: flex;
    gap: 16px;
}

.fillter-panel__btn {
    cursor: pointer;
    width: 20px;
    height: 20px;

    & rect {
        fill: #CCCAB7;
    }

    &-active rect {
        fill: #F9C74B;
    }
}
</style>