<template>
    <div class="nav-bar">
        <div>
            <img src="../assets/navBarLogo.svg" alt="Giants logo" />
        </div>
        <div class="nav-bar-text">
            <RouterLink to="/asd">American Football</RouterLink>
            <RouterLink to="/">Cheerleading</RouterLink>
            <RouterLink to="/">Powerlifting</RouterLink>
            <RouterLink to="/">Gameday</RouterLink>
            <RouterLink to="/">Partner</RouterLink>
        </div>
        <div class="nav-bar-right-side">
            <button class="hamburger-menu" @click="changeNavBarMobileActive()">
                <img src="../assets/hamburgerIcon.svg" alt="Hamburger menu icon" />
            </button>
            <div>
                <button class="shop-button">
                    <p>Zum Fan-Shop</p>
                </button>
            </div>
        </div>
    </div>

    <DropDownMenu class="drop-down-menu" v-if="isNavBarSideMenuDropdownActive" />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import DropDownMenu from '../components/DropDownMenu.vue'

const isNavBarSideMenuDropdownActive = defineModel('isNavBarSideMenuDropdownActive')

function changeNavBarMobileActive() {
    isNavBarSideMenuDropdownActive.value = !isNavBarSideMenuDropdownActive.value
}
</script>

<style scoped>
.nav-bar {
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: 21px;
    z-index: 9;
}

.nav-bar-text {
    display: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
}

.nav-bar-text a {
    color: #ffffff;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px;
    /* 224% */
    text-transform: uppercase;
    text-decoration: none;
}

.nav-bar-text a:active {
    color: #ffffff;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px;
    /* 224% */
    text-transform: uppercase;
    text-decoration: none;
}

.nav-bar-right-side {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.shop-button {
    border-radius: 20px;
    background: #fab900;
    border: 0;
    padding: 10px 20px;
    display: none;
}

@media screen and (min-width: 1200px) {
    .nav-bar-text {
        display: flex;
    }

    .shop-button {
        display: block;
    }
}

.shop-button p {
    color: #003867;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.hamburger-menu {
    margin-right: 8px;
    padding-top: 8px;
    width: 20px;
    height: 15.094px;
    flex-shrink: 0;
    background-color: transparent;
    border: 0;
}

@media screen and (min-width: 1200px) {
    .hamburger-menu {
        margin-right: 40px;
    }
}

.drop-down-menu {
    display: none;
}

@media (min-width: 391px) {
    .drop-down-menu {
        display: flex;
    }
}
</style>
