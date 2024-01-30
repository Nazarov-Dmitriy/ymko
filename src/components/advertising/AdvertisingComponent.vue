<template >
    <div class="advertising">
        <h2 class="advertising__title">Это реклама УМКИ</h2>
        <div class="advertising__btn" @click="linkTo">
            <buttun class="advertising__btn__text">Познакомиться</buttun>
            <buttun class="advertising__btn__arrow"></buttun>
        </div>
        <img src="@/assets/images/advertising/ymko.png" alt="ymko" class="advertising__img">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AdvertisingComponent',
    methods: {
        linkTo(): void {
            this.$router.push({ path: `/development` });
        },
    }
})
</script>
<style scoped lang="scss">
.advertising {
    max-width: 1146px;
    width: calc(100% - 160px);
    margin: 100px auto 60px auto;
    box-sizing: border-box;
    height: 600px;
    border-radius: 0px 0px 16px 16px;
    background: linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%), linear-gradient(125deg, rgba(255, 255, 255, 0.80) -11.86%, rgba(255, 255, 255, 0.40) 99.59%);
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;


    &::after {
        content: '';
        position: absolute;
        top: 123px;
        left: -293px;
        background-image: url('@/assets/images/advertising/bg__tile_left.png');
        width: 890px;
        height: 727px;
        background-size: contain;
        z-index: -1;
        transform: rotate(90deg);

        @media (max-width: 991px) {
            top: 146px;
            left: -308px;
        }

        @media (max-width: 576px) {
            left: -358px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 113px;
        right: -640px;
        background-image: url('@/assets/images/advertising/bg__tile_right.png');
        width: 890px;
        height: 727px;
        background-size: contain;
        z-index: -1;
        transform: rotate(90deg);

        @media (max-width: 576px) {
            right: -670px;
            top: 18px;
        }
    }

    @media (max-width: 991px) {
        width: calc(100% - 120px);
    }

    @media (max-width: 576px) {
        width: calc(100% - 20px);
        justify-content: space-between;
    }
}

.advertising__title {
    color: var(--Main-text, #302F2E);
    font-family: "Plovdiv Display";
    font-size: 64px;
    font-weight: 400;
    line-height: 100%;
    padding: 204px 0 0 100px;
    width: 613px;

    @media (max-width: 1440px) {
        width: 53%;
        padding: 180px 0 0 100px;
    }

    @media (max-width: 991px) {
        width: 410px;
        padding: 80px 0 0 40px;

    }

    @media (max-width: 767px) {
        font-size: 56px;
    }

    @media (max-width: 576px) {
        padding: 20px 0 0 20px;
        width: 80%;
    }
}

.advertising__btn {
    cursor: pointer;
    display: flex;
    margin: 80px 0 0 100px;
    align-items: center;
    width: 260px;
    position: relative;

    @media (max-width: 991px) {
        margin: 80px 0 0 40px;
    }

    @media (max-width: 767px) {
        margin: 280px 0 0 40px;
    }

    @media (max-width: 576px) {
        margin: 20px;
    }
}

.advertising__btn__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 204px;
    height: 48px;
    border-radius: 90px 0 0 90px;
    background-image: url('@/assets/images/advertising/button__bg.png');
    background-size: 100%;
    color: $text-white;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;

    &:hover {
        color: #FFC100;
    }
}

.advertising__btn__arrow {
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

.advertising__img {
    position: absolute;
    top: 0;
    right: -224px;
    transform: rotate(-30deg);
    width: 678px;
    height: 658px;

    @media (max-width: 991px) {
        right: -154px;
        top: 80px;
        width: 500px;
        height: 485.562px;
    }

    @media (max-width: 576px) {
        top: 90px;
        right: -194px;

    }
}
</style>