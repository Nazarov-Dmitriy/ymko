<template>
    <div class="wrapper" v-if="show">
        <div class="modal">
            <h3 class="modal__title">Перезвоните мне!</h3>
            <p class="modal__text">В ближайшие время менеджер свяжется с вами!</p>
            <div class="modal__form">
                <label for="modal-input" class="modal__form__label">Телефон</label>
                <input type="text" id="modal-input" class="modal__form__input">
                <button class="modal__form__btn">Отправить</button>
            </div>
            <div class="close-button" @click="closeModal">
                <div class="in">
                    <div class="close-button-block"></div>
                    <div class="close-button-block"></div>
                </div>
                <div class="out">
                    <div class="close-button-block"></div>
                    <div class="close-button-block"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalComponent',
    props: ["showActive"],
    data() {
        return {
            show: false,
        };
    }, methods: {
        closeModal() {
            this.show = false;
            this.$emit("getCloseModal");
        }
    },
    watch: {
        showActive: function (newVal) {
            if (newVal) {
                this.show = true;
            }
        },
    },
})
</script>
<style scoped lang="scss">
.wrapper {
    box-sizing: border-box;
    width: 99vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
}

.modal {
    position: fixed;
    width: 300px;
    height: 315px;
    background: $background;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 30px;
}

.modal__title {
    color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 24px;
    line-height: 140%;
}

.modal__text {
    margin-top: 16px;
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 140%;
}

.modal__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.modal__form__label {
    margin-top: 46px;
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 140%;
}

.modal__form__input {
    padding: 10px 12px;
    border-radius: 8px;
    border: none;
    background: $text-white;
    color: #D7D7D7;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 140%;
    height: 42px;
    box-sizing: border-box;

    &::placeholder {
        color: #D7D7D7;
        font-family: 'Montserrat-Regular';
        font-size: 16px;
        line-height: 140%;
    }

    &:hover {
        border: 1px solid #FFF06A;
        box-shadow: -3px -1px 24px rgba(170, 173, 5, 0.2), 10px -4px 32px rgba(255, 240, 106, 0.2), 4px 4px 8px rgba(255, 240, 106, 0.2);
    }

    &:active {
        color: $text-black;
        border: 1px solid #FFF06A;
        box-shadow: -3px -1px 24px rgba(170, 173, 5, 0.4), 10px -4px 32px rgba(255, 240, 106, 0.4), 4px 4px 8px rgba(255, 240, 106, 0.4);
    }

    &:focus {
        color: $text-black;
        outline: none;
    }
}

.modal__form__btn {
    padding: 12px 24px;
    border-radius: 90px;
    text-align: center;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;
    border: 2px solid $text-white;
    color: $text-white;
    background: #787878;
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

$button-size: 40px;
$close-width: (
    $button-size / 10
);

.close-button {
    position: absolute;
    right: 15px;
    top: 15px;
    display: block;
    width: $button-size;
    height: $button-size;
    overflow: hidden;

    >div {
        position: relative;
    }

    &-block {
        width: 40px;
        height: 20px;
        position: relative;
        overflow: hidden;

        &:before,
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: calc(55% - 4px);
            display: block;
            width: 4px;
            height: 25px;
            transform-origin: bottom center;
            background: #787878;
            transition: all ease-out 280ms;
        }

        &:last-of-type {
            transform: rotate(180deg);
        }
    }

    .in {
        .close-button-block {
            &:before {
                transition-delay: 280ms;
                transform: translateX(20px) translateY(-20px) rotate(45deg);
            }

            &:after {
                transition-delay: 280ms;
                transform: translateX(-22px) translateY(-22px) rotate(-45deg);
            }
        }
    }

    .out {
        position: absolute;
        top: 0;
        left: 0;

        .close-button-block {
            &:before {
                transform: translateX(-5px) translateY(5px) rotate(45deg);
            }

            &:after {
                transform: translateX(5px) translateY(5px) rotate(-45deg);
            }
        }
    }

    &:hover {
        .in {
            .close-button-block {
                &:before {
                    transform: translateX(-5px) translateY(5px) rotate(45deg);
                }

                &:after {
                    transform: translateX(5px) translateY(5px) rotate(-45deg);
                }
            }
        }

        .out {
            .close-button-block {
                &:before {
                    transform: translateX(-20px) translateY(20px) rotate(45deg);
                }

                &:after {
                    transform: translateX(20px) translateY(20px) rotate(-45deg);
                }
            }
        }
    }
}
</style>










