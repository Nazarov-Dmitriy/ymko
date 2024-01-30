<template >
    <div>
        <div class="wraper">
            <div class="footer">
                <div class="footer__column">
                    <div class="footer__column__logo" @click="linkTo()">
                        <img src="@/assets/icons/footer/logo_footer.svg" alt="logo" class="footer__column__logo__icon">
                        <p class="footer__column__logo__text">УМКО</p>
                    </div>
                    <div class="footer__column__social">
                        <a href="https://www.youtube.com/@1t-sprint" target="_blank" class="footer__column__social__link">
                            <img src="@/assets/icons/footer/youtibe.svg" alt="youtibe" class="footer__column__social__icon">
                        </a>
                        <a href="https://t.me/share/url?url=ymko.ru&text='Сайт Умко'" target="_blank"
                            class="footer__column__social__link">
                            <img src="@/assets/icons/footer/telegram.svg" alt="telegram"
                                class="footer__column__social__icon">
                        </a>
                        <a href="http://vk.com/share.php?url=http://ymko.ru&title='Сайт Умко'" target="_blank"
                            class="footer__column__social__link">

                            <img src="@/assets/icons/footer/vk.svg" alt="vk" class="footer__column__social__icon">
                        </a>
                    </div>
                </div>
                <div class="footer__contact">
                    <p class="footer__contact__text">mail@obr.so</p>
                    <p class="footer__contact__text">г. Москва, Ростовская набережная, д. 5</p>
                </div>
                <div class="footer__document">
                    <a href="/development" class="footer__link" target="_blank">
                        <p class="footer__document__text">Публичная оферта</p>
                    </a>
                    <a href="/development" class="footer__link" target="_blank">
                        <p class="footer__document__text">Политика конфиденциальности</p>
                    </a>
                </div>
                <div class="footer__call">
                    <a href="tel:+79993333303" class="footer__link">
                        <p class="footer__call__phone">+7 999 333-33-03 </p>

                    </a>
                    <button class="footer__call__btn" @click="openModal()">Перезвоните мне</button>
                </div>
            </div>
        </div>
        <ModalComponent @getCloseModal="closeModal" :showActive="showModal" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ModalComponent from '../modal/ModalComponent.vue';


export default defineComponent({
    name: 'FooterComponent',
    components: { ModalComponent },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
        openModal() {
            this.showModal = true;
        },
        linkTo(): void {
            this.$router.push({ path: `/` });
        },
    }
})
</script>
<style scoped lang="scss">
.wraper {
    max-width: 1440px;
    overflow: hidden;
    position: relative;
    background: #787878;


    &::after {
        content: "";
        position: absolute;
        left: -180px;
        top: 21px;
        background-image: url('@/assets/images/footer/bg__tile.png');
        width: 400px;
        height: 315px;
        z-index: 0;
    }

    &::before {
        content: "";
        position: absolute;
        right: -180px;
        top: 21px;
        background-image: url('@/assets/images/footer/bg__tile.png');
        width: 400px;
        height: 315px;
        transform: rotate(0deg);
        transform: scale(-1, 1);
        z-index: 0;
    }

    @media (max-width: 991px) {
        &::after {
            top: 100px;
            left: -210px;
        }

        &::before {
            right: -210px;
            top: 100px;
        }
    }

    @media (max-width: 480px) {
        &::after {
            top: 218px;
            left: -222px;
        }

        &::before {
            top: 176px;
            right: -229px;
        }
    }
}

.footer {
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    max-width: 1204px;
    margin: 0 auto;
    width: calc(100% - 236px);
    gap: 38px;

    @media (max-width: 991px) {
        width: calc(100% - 120px);
        padding: 40px 0;
        flex-wrap: wrap;
    }

    @media (max-width: 576px) {
        width: calc(100% - 20px);
        gap: 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
}

.footer__column {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 991px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 480px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
}

.footer__column__logo {
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    z-index: 1;
}

.footer__column__logo__icon {
    width: 48px;
    height: 46px;
}

.footer__column__logo__text {
    color: $text-white;
    font-family: "Plovdiv Display";
    font-size: 24px;
    font-weight: 400;
    line-height: 80%;
}

.footer__column__social {
    display: flex;
    gap: 8px;
    z-index: 1;
}

.footer__column__social__icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
}

.footer__contact,
.footer__document {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 991px) {
        width: calc(50% - 20px);
        order: 1;
    }

    @media (max-width: 480px) {
        order: 0;
        width: 100%;
    }
}

.footer__contact__text,
.footer__document__text {
    color: $text-white;
    font-family: 'Montserrat-Medium';
    font-size: 16px;
    line-height: 140%;
    height: 33px;
}

.footer__link {
    text-decoration: none;
}

.footer__call {
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    flex-shrink: 0;

    @media (max-width: 991px) {
        width: calc(50% - 20px);
        align-items: start;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
}

.footer__call__phone {
    color: $text-white;
    font-family: 'Montserrat-SemiBold';
    font-size: 20px;
    line-height: 130%;
}

.footer__call__btn {
    padding: 12px 24px;
    border-radius: 90px;
    text-align: center;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;
    border: 2px solid $text-white;
    color: $text-white;
    background: transparent;
    margin-top: 12px;

    &:hover {
        border: 2px solid #787878;
        color: #787878;
        background: $text-white;
    }

    &:active {
        background: #FFC100;
    }
}
</style>