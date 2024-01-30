<template >
    <div :class="getCourseItem" :style="data.payment === 0 ? 'background: #FAFAEE' : ''">
        <h3 :class="getItemTitleLine">{{ data.name }}</h3>
        <div :class="getItemDescription">
            <div class="course-item__description__item">
                <img src="@/assets/icons/couses/calendar.svg" alt="icon calendar"
                    class="course-item__description__item__img">
                <p class="course-item__description__item__text">{{ data.start }}</p>
            </div>
            <div class="course-item__description__item">
                <img src="@/assets/icons/couses/house.svg" alt="icon house" class="course-item__description__item__img">
                <p class="course-item__description__item__text">{{ data.duration }}</p>
            </div>
            <div class="course-item__description__item">
                <img src="@/assets/icons/couses/document.svg" alt="icon document"
                    class="course-item__description__item__img">
                <p class="course-item__description__item__text">{{ data.document }}</p>
            </div>
            <div :class="getItemFooterPrice" :style="viewCards === 'tile' ? 'display:none' : ''">
                <img v-if="data.payment > 0" src="@/assets/icons/couses/money.svg" alt="icon money"
                    class="course-item__footer__price__img">
                <p v-if="data.payment > 0" class="course-item__footer__price__text">
                    от {{ filterPayment }} ₽
                </p>
                <p v-if="data.payment == 0" class="course-item__footer__price__text">
                    Бесплатно </p>
            </div>
        </div>
        <div :class="getItemFooter">
            <img :src="getPath" alt="img course" class="course-item__footer__img">
            <div class="course-item__footer__price" :style="viewCards === 'line' ? 'display:none' : ''">
                <img v-if="data.payment > 0" src="@/assets/icons/couses/money.svg" alt="icon money"
                    class="course-item__footer__price__img">
                <p v-if="data.payment > 0" class="course-item__footer__price__text">
                    от {{ filterPayment }} ₽
                </p>
                <p v-if="data.payment == 0" class="course-item__footer__price__text">
                    Бесплатно </p>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IData from "@/interface/IData"

interface ICoursesItem {
    data: IData,
}

export default defineComponent({
    name: 'CoursesItem',
    props: ["item", "viewCards"],
    data(): ICoursesItem {
        return {
            data: this.item,
        };
    },
    computed: {
        getPath: function (): string {
            return require("@/assets/images/courses/" + this.data?.image);
        },
        filterPayment(): string {
            return `${this.data.payment}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
        },
        getCourseItem(): string {
            return this.viewCards === "line" ? "course-item course-item__line" : "course-item";
        },
        getItemDescription(): string {
            return this.viewCards === "line" ? "course-item__description course-item__description__line" : "course-item__description";
        },
        getItemFooter(): string {
            return this.viewCards === "line" ? "course-item__footer course-item__footer__line" : "course-item__footer";
        },
        getItemFooterPrice(): string {
            return this.viewCards === "line" ? "course-item__footer__price course-item__footer__price__line" : "course-item__footer__price";
        },
        getItemTitleLine(): string {
            return this.viewCards === "line" ? "course-item__title course-item__title__line" : "course-item__title";
        },
    },
})
</script>
<style scoped lang="scss">
.course-item {
    box-sizing: border-box;
    padding: 20px;
    border-radius: 16px;
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);
    display: grid;
    grid-template-rows: minmax(104px, auto) 60px minmax(134px, auto);
    gap: 20px;
    background: $text-white;



    @media (max-width: 1440px) {
        grid-template-rows: minmax(104px, auto) 60px 156px;
    }

    @media (max-width: 991px) {
        grid-template-rows: minmax(70px, auto) 60px 156px;
    }

    @media (max-width: 768px) {
        grid-template-rows: minmax(70px, auto) 98px 156px;
    }

    @media (max-width: 640px) {
        grid-template-rows: minmax(70px, auto) 60px 156px;
    }

    &__line {
        grid-template-columns: 2fr 1fr 188px;
        grid-template-rows: 1fr;

        @media (max-width: 1440px) {
            grid-template-columns: 2fr 1fr 188px;
            grid-template-rows: 1fr;
        }

        @media (max-width: 991px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: minmax(26px, auto) 1fr;
        }

        @media (max-width: 420px) {
            grid-template-columns: 1fr;
        }
    }
}

.course-item__title {
    color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 20px;
    line-height: 130%;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 640px) {
        font-size: 20px;
    }

    &__line {
        max-width: 400px;

        @media (max-width: 991px) {
            grid-column-start: 1;
            grid-column-end: 3;
            max-width: 100%;
        }

        @media (max-width: 768px) {
            font-size: 20px;
        }

        @media (max-width: 420px) {
            grid-column-start: 1;
            grid-column-end: 2;
        }
    }
}

.course-item__description {
    align-self: end;

    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 22px 22px auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }

    &__line {
        align-self: start;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    }
}

.course-item__description__item {
    display: flex;
    gap: 8px;
    align-items: center;
}

.course-item__description__item__img {
    width: 20px;
    height: 20px;
}

.course-item__description__item__text {
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 140%;
}

.course-item__footer {
    align-self: end;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 188px 1fr;
    grid-template-rows: 134px auto;

    @media (max-width: 1440px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 991px) {
        gap: 10px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 188px 1fr;
        gap: 0px;
    }

    @media (max-width: 380px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    &__line {
        grid-template-columns: 188px;

        @media (max-width: 991px) {
            justify-self: end;
        }

        @media (max-width: 420px) {
            justify-self: center;
        }
    }
}

.course-item__footer__img {
    width: 100%;
    height: 100%;

    @media (max-width: 1440px) {
        width: 188px;
        height: 134px;
    }
}

.course-item__footer__price {
    align-self: end;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding-left: 6px;

    &__line {
        justify-content: flex-start;
        padding-left: 0;
        grid-row-start: 3;

        @media (max-width: 768px) {
            grid-row-start: 4;
        }
    }
}

.course-item__footer__price__img {
    width: 20px;
    height: 20px;
}

.course-item__footer__price__text {
    color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;
}
</style>