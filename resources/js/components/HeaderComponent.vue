<template>
    <header>
        <div class="header">
            <div class="header-content">
                <div class="logo">
                    <router-link to="/">URSUS</router-link>
                </div>
                <nav class="nav">
                    <router-link to="/shop/Women">WOMEN</router-link>
                    <router-link to="/shop/Men">MEN</router-link>
                    <router-link to="/shop/Kids">KIDS</router-link>
                    <router-link to="/shop/Accessories">ACCESSORIES</router-link>
                    <router-link to="/shop/Sale">SALE</router-link>
                </nav>
                <div class="user-actions">
                    <img :src="'/images/icons/user-icon.png'" alt="User">
                    <img :src="'/images/icons/favorite-icon.png'" alt="Favorite">
                    <img :src="'/images/icons/cart-icon.png'" alt="Cart">
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderComponent',
};
</script>


<style scoped>
.top-banner {
    background-color: #f8f8f8;
    padding: 10px 45px;
    font-size: 12px;
    text-align: left;
}

.header {
    border-bottom: 1px solid #ddd;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 45px;
}

.logo {
    font-size: 35px;
    font-weight: bold;
}

.logo a {
    text-decoration: none;
    color: black;
}

.nav a {
    margin: 0 15px;
    text-decoration: none;
    color: black;
    font-size: 15px;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 32px; /* Отступ снизу для подчеркивания */
}

.nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: black;
}

.nav a:hover::after {
    width: 100%; /* Подчеркивание на всю ширину сразу при наведении */
}

.user-actions {
    display: flex;
    align-items: center;
}

.user-actions a {
    margin-right: 5px;
    text-decoration: none;
    color: #333;
    font-size: 15px;
    letter-spacing: 2px;
}

.user-actions img {
    width: 20px;
    height: 20px;
    margin: 0 5px;
}
</style>
