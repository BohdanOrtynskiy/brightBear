<template>
    <div class="shop-page">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li>{{ category }}</li>
            </ol>
        </nav>

        <!-- Остальной контент страницы -->
        <div class="content">
            <!-- Ваш контент -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.shop-page {
    padding: 20px;
}

.breadcrumb {
    margin-bottom: 20px;
    color: #555555;
    font-size: 14px;
}

.breadcrumb ol {
    list-style: none;
    padding-left: 25px;
    display: flex;
}

.breadcrumb li {
    margin-right: 5px;
}

.breadcrumb a {
    color: #555555;
    text-decoration: none;
}

.breadcrumb li::after {
    content: ">";
    margin-left: 5px;
    color: #999;
}

.breadcrumb li:last-child::after {
    content: "";
}
</style>
