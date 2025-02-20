<template>
    <div class="hero">
        <div class="hero-content">
            <h1>IT'S TIME <br />TO STEP UP <br />YOUR GAME</h1>
            <button class="shop-btn">Shop Now</button>
        </div>
    </div>
</template>

<style scoped>
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: url('/images/hero/hero-bg.jpg') no-repeat center center/cover;
}

.hero-content {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.shop-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background-color: #ff4c4c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.shop-btn:hover {
    background-color: #e63939;
}
</style>
