<template >
    <div class="fillter-panel">
        <div class="fillter-panel__item" @click="setFilter(filterName, filterSort, filterField)">
            <p class="fillter-panel__item__text fillter-panel__item__text-active">{{ filterName }}</p>
            <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                :class="filterSort == 'Desending' ? 'fillter-panel__item__img' : ''">
        </div>
        <div class="fillter-panel__item" @click="setFilter('по рейтингу', filterSortReting, 'rating')">
            <p class="fillter-panel__item__text">по рейтингу</p>
            <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                :class="filterSortReting == 'Desending' ? 'fillter-panel__item__img' : ''">
        </div>
        <div class="fillter-panel__item" @click="setFilter('по цене', filterSortCost, 'payment')">
            <p class="fillter-panel__item__text">по цене</p>
            <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                :class="filterSortCost == 'Desending' ? 'fillter-panel__item__img' : ''">
        </div>
        <div class="fillter-panel__item" @click="setFilter('по длительности', filterSortByDuration, 'duration')">
            <p class="fillter-panel__item__text">по длительности</p>
            <img src="@/assets/icons/couses/reaiting.svg" alt="icon reating"
                :class="filterSortByDuration == 'Desending' ? 'fillter-panel__item__img' : ''">
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
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 25px;
    background: #F3F3F3;
    display: grid;
    grid-template-columns: 180px repeat(3, minmax(139px, auto)) 214px;
    align-items: center;
    gap: 32px;
    max-width: 1146px;
    width: calc(100% - 160px);
    margin-top: 24px;
    padding: 23px 68px 22px 60px;

    @media (max-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 12px 32px;


    }

    @media (max-width: 991px) {
        width: calc(100% - 120px);
        padding: 23px 20px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 12px 12px;
    }  

    @media (max-width: 576px) {
        width: calc(100% - 20px);
    }
}

.fillter-panel__item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 40px;
    height: 35px;
    cursor: pointer;
    position: relative;

    &:nth-child(-n+3)::before {
        content: "";
        position: absolute;
        right: -40px;
        width: 1px;
        height: 100%;
        background: #D7D7D7;

        @media (max-width: 1440px) {
            display: none;
        }
    }

    @media (max-width: 1440px) {
        &:first-child {
            grid-row-start: 1;
            grid-column-start: 1;
            grid-column-end: 3;
            margin-right: 0;
        }

        &:nth-child(3) {
            justify-self: center;
            justify-content: center;
            width: 100%;
            margin-right: 0;
        }

        &:nth-child(3)::after {
            content: "";
            position: absolute;
            top: 0;
            right: -16px;
            width: 1px;
            height: 100%;
            background: #D7D7D7;
        }

        &:nth-child(3)::before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: -16px;
            width: 1px;
            height: 100%;
            background: #D7D7D7;
        }

        &:nth-child(4) {
            justify-self: end;
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        gap: 12px;

        &:first-child {
            grid-row-start: 1;
            grid-column-start: 1;
            grid-column-end: 6;
        }

        &:nth-child(2) {
            grid-row-start: 2;
            grid-column-start: 1;
            grid-column-end: 4;
        }


        &:nth-child(3) {
            grid-row-start: 2;
            grid-column-start: 4;
            grid-column-end: 7;
            justify-content: end;

        }

        &:nth-child(3)::after,
        &:nth-child(3)::before {
            display: none;
        }

        &:nth-child(4) {
            grid-row-start: 3;
            grid-column-start: 1;
            grid-column-end: 4;
            justify-self: start;
        }
    }
}

.fillter-panel__item__text {
    flex-shrink: 0;
    color: $main-text;
    font-family: Montserrat-Regular;
    font-size: 16px;
    line-height: 140%;

    &-active {
        font-family: Montserrat-Bold;
    }
}



.fillter-panel__item__img {
    rotate: 180deg;
}

.fillter-panel__btns {
    display: flex;
    gap: 16px;
    justify-content: flex-end;

    @media (max-width: 1440px) {
        grid-column-start: 3;
        grid-row-start: 1;
    }

    @media (max-width: 768px) {
        grid-column-start: 6;
        grid-column-end: 7;
        grid-row-start: 1;
    }
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

