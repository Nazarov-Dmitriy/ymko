<template >
    <div class="search-panel">
        <div class="search-panel__item">
            <label for="search" class="search-panel__item__label">Название курса</label>
            <input type="text" id="search" class="search-panel__item__input " name="search" placeholder="Поиск"
                v-model="seacrh" @keyup.enter="searchFilter">
        </div>

        <div class="search-panel__item">
            <label for="search" class="search-panel__item__label">Стоимость</label>
            <select class="search-panel__item__input" v-model="selectedPayment">
                <option disabled value="-1" class="search-panel__item__input__option">Выбрать из списка</option>
                <option v-for="(paymeny, index) in dataOptionPayment" :key="index">
                    {{ paymeny }}
                </option>
            </select>
        </div>

        <div class="search-panel__item">
            <label for="search" class="search-panel__item__label">Тип курса</label>
            <select class="search-panel__item__input" v-model="selectedTypeDocument">
                <option disabled value="">Выбрать из списка</option>
                <option v-for="(typeDocument, index) in dataTypeCourse" :key="index">
                    {{ typeDocument }}
                </option>
            </select>
        </div>

        <button class="btn-search" @click="searchFilter">Применить</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IData from "@/interface/IData"

interface ISeacrhPanel {
    seacrh: string;
    selectedPayment: number | string;
    selectedTypeDocument: string;
    data: IData[];
    dataOptionPayment: (number | string)[];
    dataTypeCourse: string[];

}

export default defineComponent({
    name: 'SeacrhPanel',
    props: ["dataArray"],
    data(): ISeacrhPanel {
        return {
            seacrh: '',
            selectedPayment: -1,
            selectedTypeDocument: "",
            data: this.dataArray,
            dataOptionPayment: [],
            dataTypeCourse: [],
        }
    }, mounted() {
        let setOptionPayment = new Set<number | string>();
        let setTypeCourse = new Set<string>();
        this.data.forEach(item => {
            if (item.payment > 0) {
                setOptionPayment.add(item.payment)
            } else {
                setOptionPayment.add('Бесплатно')
            }
            setTypeCourse.add(item.typeCourse)
        });
        this.dataOptionPayment = [...setOptionPayment].sort();
        this.dataTypeCourse = [...setTypeCourse];
    },
    methods: {
        searchFilter(): void {
            if (this.selectedPayment == 'Бесплатно') {
                this.$emit("getSearchParam", this.seacrh, 0, this.selectedTypeDocument);
            } else {
                this.$emit("getSearchParam", this.seacrh, this.selectedPayment, this.selectedTypeDocument);
            }
            this.seacrh = '';
            this.selectedPayment = -1;
            this.selectedTypeDocument = "";
        },
    }
})
</script>
<style scoped lang="scss">
.search-panel {
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 300px)) 184px;
    gap: 20px;
    max-width: 1146px;
    width: calc(100% - 160px);
    margin: 0 auto;

    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    @media (max-width: 991px) {
        width: calc(100% - 120px);
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        width: calc(100% - 20px);
    }
}

.search-panel__item {
    display: grid;
    grid-template-rows: 24px 48px;
    gap: 8px;


    &:first-child .search-panel__item__input {
        background-image: url('@/assets/icons/couses/search.svg');
        background-repeat: no-repeat;
        background-position: 16px 12px;
        padding-left: 48px;
    }

    &:nth-child(n+2) .search-panel__item__input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        background-image: url('@/assets/icons/couses/arrow_input.svg');
        background-repeat: no-repeat;
        background-position: right 16px bottom 10px;
        background-size: 24px;
        color: $text-light;
        font-family: 'Montserrat-Regular';
        font-size: 16px;
        line-height: 1.4;
        appearance: none;
    }
}

.search-panel__item__label {
    color: var(--Main-text, #302F2E);
    font-family: 'Montserrat-Medium';
    font-size: 16px;
    line-height: 1.4;
}

.search-panel__item__input {
    height: 48px;
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    border-radius: 25px;
    border: 1px solid #D7D7D7;
    position: relative;

    &:hover {
        border: 1px solid #FFF06A;
        box-shadow: -3px -1px 24px rgba(170, 173, 5, 0.2), 10px -4px 32px rgba(255, 240, 106, 0.2), 4px 4px 8px rgba(255, 240, 106, 0.2);
    }

    &:active {
        border: 1px solid #FFF06A;
        box-shadow: -3px -1px 24px rgba(170, 173, 5, 0.2), 10px -4px 32px rgba(255, 240, 106, 0.2), 4px 4px 8px rgba(255, 240, 106, 0.2);
    }

    &:focus {
        outline: none;
    }
}

.search-panel__item__input::placeholder {
    color: $text-light;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 1.4;
}

.btn-search {
    height: 48px;
    align-self: self-end;
    padding: 12px 24px;
    border-radius: 90px;
    background: linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $main-text;
    font-family: 'Montserrat-SemiBold';
    font-size: 16px;
    line-height: 140%;

    &:hover {
        background: $main-text;
        color: $text-white;
    }

    @media (max-width: 576px) {
        margin-top: 10px;
    }
}
</style>