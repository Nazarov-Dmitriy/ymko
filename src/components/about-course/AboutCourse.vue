<template >
    <div class="about_">
        <div class="description">
            <h1 class="description__title">Наши курсы это</h1>
            <div class="description__list">
                <div class="description__item">
                    <p class="description__item__count">1</p>
                    <p class="description__item__text">Лучшие <span class="description__item__text-bold">наставники</span>
                    </p>
                </div>
                <div class="description__item">
                    <p class="description__item__count">2</p>
                    <p class="description__item__text">Интересные <span class="description__item__text-bold">программы
                            обучения</span>
                    </p>
                </div>
                <div class="description__item">
                    <p class="description__item__count">3</p>
                    <p class="description__item__text">Передовые <span
                            class="description__item__text-bold">технологии</span> и методы <span
                            class="description__item__text-bold">обучения</span>
                    </p>
                </div>
            </div>
            <div class="description__btn" @click="linkTo()">
                <buttun class="description__btn__text">Найти свой курс</buttun>
                <buttun class="description__btn__arrow"></buttun>
            </div>
        </div>
        <div class="about__image">
            <img src="@/assets/images/about-course/main-image.png" alt="image">
        </div>

        <div>
            <img src="@/assets/images/bg_tile_left.png" alt="image-bg" class="bg__union-left">
            <img src="@/assets/images/bg_tile_right.png" alt="image-bg" class="bg__union-right">
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutCourse',
    methods: {
        linkTo(): void {
            this.$router.push({ path: `/development` });
        },
    }
})
</script>

<style scoped lang="scss">
.about_ {
    box-sizing: border-box;
    padding: 0 136px;
    overflow: hidden;
    width: 100%;
    display: flex;
    padding-top: 70px;
    justify-content: space-between;
    border-radius: 0px 0px 30px 30px;
      background: linear-gradient(125deg, rgba(255, 255, 255, 0.50) -11.86%, rgba(255, 255, 255, 0.40) 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 600px;
    position: relative;

}

.description {
    margin-top: 96px;
}

.description__title {
    color: $text-black;
    font-family: "Plovdiv Display";
    font-size: 70px;
    line-height: 100%;
    font-weight: 400;
    height: 83px;

}

.description__list {
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.description__item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.description__item__count {
    display: flex;
    background-image: url('@/assets/icons/about/rhombus.svg');
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 30px;
    color: $text-white;
    font-family: 'Montserrat-SemiBold';
    font-size: 14px;
    line-height: 1.3;
}

.description__item__text {
    max-width: 486px;
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 1.4;
}

.description__item__text-bold {
    color: $text-black;
    font-family: 'Montserrat-Bold';
    font-size: 16px;
    line-height: 1.4;
}

.description__btn {
    cursor: pointer;
    display: flex;
    margin-top: 45px;
}

.description__btn__text {
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

.description__btn__arrow {
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
        background-image: url('../../assets/icons/btns/arrow.svg');
    }

    &:hover {
        &::before {
            background-image: url('../../assets/icons/btns/arrow_hover.svg');
        }
    }
}

.about__image {
    width: 490px;
    height: 510px;
    margin-right: 68px;

    & img {
        width: 100%;
        height: 100%;
    }
}

.bg__union-left {
    position: absolute;
    left: -380px;
    top: -234px;
    transform: rotate(15deg);
    z-index: -1;
}

.bg__union-right {
    position: absolute;
    right: -154px;
    top: -48px;
    transform: rotate(45deg);
    z-index: -1;
}
</style>