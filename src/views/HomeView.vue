<template>
    <div>
        <NavCom_ReturnHome></NavCom_ReturnHome>
        <HomeCom></HomeCom>
    </div>
</template>

<script>
    import NavCom_ReturnHome from '@/components/navComponents/NavCom_ReturnHome.vue';
    import HomeCom from '@/components/HomeCom.vue'
    export default {
        components: {
            "NavCom_ReturnHome": NavCom_ReturnHome,
            "HomeCom": HomeCom
        }
    }
</script>