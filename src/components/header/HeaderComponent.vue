<template>
    <div :class="!menyActive ? 'header' :'header header__active-menu '">
        <div class="logo" @click="linkTo()">
            <a href="/">
                <img src="@/assets/icons/header/logo.svg" alt="" class="logo-img">
            </a>
            <p class="logo-name">УМКО</p>
        </div>
        <div class="nav" :style="menyActive ? 'display:flex' : ''">
            <a href="#courses" class="nav__item">
                <p class="nav__item__text">Наши курсы</p>
            </a>
            <button class="nav__button" @click="linkTo('#questions')">Написать нам</button>
        </div>
        <div :class="!menyActive
            ? 'header__menu'
            : 'header__menu header__menu-close'
            " @click="showMenu()">
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',
    data() {
        return {
            menyActive: false,
        };
    },
    methods: {
        linkTo(hash?: string): void {
            this.$router.push({ path: '/', hash: hash });
        },
        showMenu() {
            this.menyActive = !this.menyActive;
        },

    }
})
</script>
<style scoped lang="scss">
.header {
    position: absolute;
    box-sizing: border-box;
    max-width: 1146px;
    width: calc(100% - 160px);
    left: 50%;
    transform: translate(-50%, 0);
    height: 70px;
    border-radius: 0px 0px 16px 16px;
    padding: 0 31px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 4px solid rgba(255, 255, 255, 0.20);
    border-top: none;
    background: linear-gradient(125deg, rgba(255, 255, 255, 0.60) -11.86%, rgba(255, 255, 255, 0.17) 99.59%);
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(50px);
    z-index: 10;

    @media (max-width: 991px) {
        width: calc(100% - 120px);
        padding: 0 20px 0 20px;
    }

    @media (max-width: 767px) {
        &__active-menu {
            background: $text-white;
        }
    }
}

.logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;

}

.logo-img {
    width: 48px;
    height: 46px;
}

.logo-name {
    font-family: 'Plovdiv Display';
    font-size: 24px;
    line-height: 80%;
    color: $text-black;
}

.nav {
    display: flex;
    align-items: center;
    gap: 46px;

    @media (max-width: 991px) {
        gap: 25px;
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        display: none;
        position: absolute;
        top: 60px;
        left: -4px;
        width: calc(100% + 8px);
        background: $text-white;
        border-radius: 0px 0px 16px 16px;
        padding: 5px 20px;
        box-sizing: border-box;
        box-shadow:  0px 12px 20px 0px rgba(54, 48, 45, 0.05);
        backdrop-filter: blur(50px);
    }
}

.nav__item {
    text-decoration: none;
}

.nav__item__text {
    font-family: 'Montserrat-Regular';
    color: $text-black;
    font-size: 16px;
    line-height: 1.4;

    &:hover {
        color: #FFC100;
    }
}

.nav__button {
    padding: 12px 24px;
    border-radius: 90px;
    color: #FFC100;
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    line-height: 1.4;
    background: linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, #FFF06A 0%, #F6BE43 100%) border-box;
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
        background: $main-text;
        color: $text-white;
    }
}

.header__menu {
    width: 24px;
    height: 24px;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
}

.header__menu:after,
.header__menu:before,
.header__menu div {
    background-color: $main-text;
    border-radius: 3px;
    content: "";
    display: block;
    height: 2px;
    margin: 6px 0;
    transition: all 0.2s ease-in-out;
}

.header__menu-close:after,
.header__menu-close:before,
.header__menu-close div {
    background-color: $main-text;
    border-radius: 3px;
    content: "";
    display: block;
    height: 2px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
}

.header__menu-close:before {
    transform: translateY(8px) rotate(135deg);
}

.header__menu-close:after {
    transform: translateY(-6px) rotate(-135deg);
}

.header__menu-close div {
    transform: scale(0);
}
</style>
