<template>
    <div>
        <HeaderComponent />
        <router-view />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        HeaderComponent,
        FooterComponent,
    },
};
</script>


