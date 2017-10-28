<template>
    <div id="app">
        <component :is="currentView">
            <!-- component changes when vm.currentView changes! -->
        </component>

        <vueFooter></vueFooter>
    </div>
</template>

<script lang="js" src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>