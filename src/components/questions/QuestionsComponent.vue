<template >
    <div class="questions-wrapper" id="questions">
        <div class="questions">
            <div class="questions__block">
                <h2 class="questions__block__title">
                    Остались вопросы?
                    Напишите нам
                    и мы ответим на все!
                </h2>
                <img src="@/assets/images/qiestion/ymko-question.png" alt="ymko" class="questions__block__img">
            </div>
            <div class="form">
                <div class="form__item">
                    <label for="form-name" class="form__item__label">ФИО</label>
                    <input type="text" :class="getInputClassName" id="form-name" placeholder="ФИО" v-model="name">
                    <div class="form__error" v-if="nameError">
                        <span class="form__error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#ff0000" />
                            </svg>
                        </span>
                        <p class="form__error__text">Поле заполнено некорректно</p>
                    </div>
                </div>
                <div class="form__item">
                    <label for="form-phone" class="form__item__label">Номер телефона</label>
                    <input type="text" :class="getInputClassPhone" id="form-phone" placeholder="+7-(___)-___-__-__"
                        @input="changePhone($event)">
                    <div class="form__error" v-if="phoneError">
                        <span class="form__error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#ff0000" />
                            </svg>
                        </span>
                        <p class="form__error__text">Поле заполнено некорректно</p>
                    </div>
                </div>
                <div class="form__item">
                    <label for="form-email" class="form__item__label">Email</label>
                    <input type="email" :class="getInputClassEmail" id="form-email" placeholder="exapmle@mail.ru"
                        v-model="email">
                    <div class="form__error" v-if="emailError">
                        <span class="form__error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#ff0000" />
                            </svg>
                        </span>
                        <p class="form__error__text">Поле заполнено некорректно</p>
                    </div>
                </div>

                <div class="form__item">
                    <label for="form-textarea" class="form__item__label">Вопрос</label>
                    <textarea type="text" :class="getInputClassQuestion" id="form-textarea" v-model="question"
                        placeholder="Введите текст"></textarea>
                    <div class="form__error" v-if="questionError">
                        <span class="form__error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#ff0000" />
                            </svg>
                        </span>
                        <p class="form__error__text">Поле заполнено некорректно</p>
                    </div>
                </div>
                <div class="form__item__checkbox">
                    <input type="checkbox" id="checkbox" v-model="checked" class="form__item__checkbox__input"
                        value="phone">
                    <label for="checkbox" class="form__item__checkbox__label">Согласие на обработку данных</label>
                    <div class="form__error" v-if="checkedError">
                        <span class="form__error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#ff0000" />
                            </svg>
                        </span>
                        <p class="form__error__text">Поле заполнено некорректно</p>
                    </div>
                </div>

                <div class="form__btn" @click="formSubmit()">
                    <buttun class="form__btn__text">Отправить</buttun>
                    <buttun class="form__btn__arrow"></buttun>
                </div>
                <p v-if="successForm" class="modal__form__success__text">
                    <span>Запрос принят,</span> наш менеджер скоро свяжется с Вами
                </p>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as yup from "yup";

const formShema = yup.object({
    name: yup.string().required("name required"),
    phone: yup
        .string()
        .matches(
            /^((\+7)[-(]*\d{3}[)-]*\d{3}[-]?\d{2}[-]?\d{2})$/g,
            "phone matches"
        ).required("phone required"),
    email: yup.string().required("email required").email("email incorect"),
    question: yup.string().required("question required"),
    selected: yup.bool().oneOf([true], 'selected required'),
});

interface IQuestionsComponent {
    name: string;
    phone: string;
    email: string;
    question: string;
    checked: boolean;
    successForm: boolean;
    nameError: boolean;
    phoneError: boolean;
    emailError: boolean;
    questionError: boolean;
    checkedError: boolean;
}
export default defineComponent({
    name: 'QuestionsComponent',
    data(): IQuestionsComponent {
        return {
            name: '',
            phone: '',
            email: '',
            question: '',
            checked: false,
            nameError: false,
            phoneError: false,
            emailError: false,
            questionError: false,
            checkedError: false,
            successForm: false,
        };
    }, methods: {
        changePhone(event: Event): void {
            let target = event.target as HTMLInputElement
            let x: any = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            x[1] = '+7';
            target.value = !x[3] ? x[1] + '-(' + x[2] : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            this.phone = target.value;
        },
        async formSubmit() {
            console.log(this.phone);
            await formShema
                .validate(
                    {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        question: this.question,
                        selected: this.checked,
                    },
                    { abortEarly: false }
                )
                .then(async () => {
                    this.name = '';
                    this.phone = '';
                    this.email = '';
                    this.question = '';
                    this.checked = false;
                    this.successForm = true;
                    this.nameError = false;
                    this.phoneError = false;
                    this.emailError = false;
                    this.questionError = false;
                    this.checkedError = false;
                    setTimeout(() => {
                        this.successForm = false;
                    }, 5000);
                })
                .catch((e) => {
                    console.log(e.errors);

                    e.errors.includes("name required")
                        ? (this.nameError = true)
                        : (this.nameError = false);

                    e.errors.includes("phone required") ||
                        e.errors.includes("phone matches")
                        ? (this.phoneError = true)
                        : (this.phoneError = false);

                    e.errors.includes("email required") ||
                        e.errors.includes("email incorect")
                        ? (this.emailError = true)
                        : (this.emailError = false);

                    e.errors.includes("question required")
                        ? (this.questionError = true)
                        : (this.questionError = false);

                    e.errors.includes("selected required")
                        ? (this.checkedError = true)
                        : (this.checkedError = false);
                    this.successForm = false;
                });
        },
    }, computed: {
        getInputClassName: function (): string {
            return this.nameError
                ? "form__item__input form__item__input__error"
                : "form__item__input";
        },

        getInputClassPhone: function (): string {
            return this.phoneError
                ? "form__item__input form__item__input__error"
                : "form__item__input";
        },
        getInputClassEmail: function (): string {
            return this.emailError
                ? "form__item__input form__item__input__error"
                : "form__item__input";
        },
        getInputClassQuestion: function (): string {
            return this.checkedError
                ? "form__item__input form__item__input__error form__item__input__textarea"
                : "form__item__input form__item__input__textarea";
        },
    }
})
</script>
<style scoped lang="scss">
.questions-wrapper {
    border-radius: 16px 16px 0px 0px;
    box-sizing: border-box;
    margin-top: 60px;
    max-width: 1440px;
    background: $text-white;
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: -74px;
        top: 209px;
        background-image: url('@/assets/images/bg_tile_left.png');
        width: 800px;
        height: 630px;
        transform: rotate(-30deg);
        z-index: -1;
    }

    &::before {
        content: "";
        position: absolute;
        right: -168px;
        top: 85px;
        background-image: url('@/assets/images/bg_tile_right.png');
        width: 800px;
        height: 630px;
        transform: rotate(90deg);
        z-index: -1;
    }


    @media (max-width: 1440px) {
        &::after {
            left: -174px;
        }

        &::before {
            right: -268px;
        }
    }

    @media (max-width: 991px) {
        &::after {
            left: -344px;
        }

        &::before {
            right: -368px;
        }
    }

    @media (max-width: 767px) {

        &::after {
            left: -444px;
        }

        &::before {
            right: -468px;
        }
    }
}

.questions {
    padding: 58px 0 82px 0;
    max-width: 1146px;
    width: calc(100% - 160px);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 20px;

    &::before {
        content: "";
        position: absolute;
        left: -321px;
        top: 257px;
        background-image: url('@/assets/images/qiestion/bg_tile_630.png');
        width: 616px;
        height: 485px;
        transform: rotate(15deg);
        z-index: -1;
    }

    @media (max-width: 991px) {
        width: calc(100% - 120px);

        &::before {
            left: -371px;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 20px 0 50px 0;

    }

    @media (max-width: 576px) {
        width: calc(100% - 20px);
    }
}

.questions__block {
    max-width: 449px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 767px) {
        flex-direction: row;
        max-width: 100%;
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
}

.questions__block__title {
    color: $text-black;
    font-family: 'Plovdiv Display';
    font-size: 42px;
    font-weight: 400;
    line-height: 120%;
}

.questions__block__img {
    margin-left: 18px;
    max-width: 431px;
    width: 100%;
    max-height: 463px;

    @media (max-width: 991px) {
        margin-left: 0px;
    }

    @media (max-width: 991px) {
        margin-left: 0px;
    }

    @media (max-width: 767px) {
        max-width: 231px;
        max-height: 263px;
    }

    @media (max-width: 576px) {
        align-self: center;
    }
}

.form {
    box-sizing: border-box;
    max-width: 592px;
    width: 100%;
    align-self: self-start;
    border-radius: 16px;
    background: $background;
    padding: 20px 20px 30px 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 276px));
    grid-template-rows: minmax(70px, auto) minmax(70px, auto) minmax(160px, auto) minmax(20px, auto) minmax(48px, auto);
    gap: 20px 16px;


    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(70px, auto) minmax(70px, auto) minmax(70px, auto) minmax(160px, auto) minmax(20px, auto) minmax(48px, auto);

    }

    @media (max-width: 576px) {}
}

.form__item {
    max-width: 552px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px minmax(42px, auto);
    gap: 8px;

    &:nth-child(1) {
        grid-column: 1/3;
    }

    &:nth-child(4) {
        grid-column: 1/3;
    }

    @media (max-width: 991px) {
        &:nth-child(1) {
            grid-column: 1;
        }

        &:nth-child(4) {
            grid-column: 1;
        }
    }
}

.form__item__label {
    width: 100%;
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 140%;
}

.form__item__input {
    width: 100%;
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

    &__textarea {
        resize: none;
        min-height: 160px;
    }

    &__error {
        border: 1px solid $color-primary-red;
    }

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

.form__item__checkbox {
    grid-column: 1/3;
    display: flex;
    position: relative;
    flex-direction: column;

    & .form__error {
        margin-top: 5px;
    }

    @media (max-width: 991px) {
        grid-column: 1;
    }
}

.form__item__checkbox__input {
    display: none;

    &+*::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        width: 20px;
        height: 20px;
        background: $text-white;
    }

    &:checked+*::before {
        content: "✓";
        display: inline-block;
        color: white;
        text-align: center;
        line-height: 1.3;
        background: #FFF06A;
    }
}

.form__item__checkbox__label {
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 140%;
    padding-left: 28px;
}

.form__error {
    display: flex;

    &__icon {
        margin-right: 8px;
    }

    &__text {
        font-family: 'Montserrat-Regular';
        font-size: 12px;
        line-height: 140%;
        color: $color-primary-red;
    }
}

.form__btn {
    grid-column: 1/3;
    cursor: pointer;
    display: flex;

    @media (max-width: 991px) {
        grid-column: 1;
    }
}

.form__btn__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    border-radius: 90px 0 50px 90px;
    background: linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%);
      color: $text-black;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -2px;
        width: 7px;
        height: 51px;
        background: #F3F3F3;
        z-index: 2;
        transform: rotate(10deg)
    }

    &:hover {
        color: $text-white;
    }
}

.form__btn__arrow {
    width: 56px;
    height: 48px;
    margin-left: -1px;
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

.modal__form__success__text {
    grid-column: 1/3;
    color: $text-black;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 140%;

    @media (max-width: 991px) {
        grid-column: 1;
    }
}
</style>