<template>
    <div id="app">
        <h1>{{ msg }}</h1>

        <button @click="changeComponent('Contact')">Click me fool</button>
        <button @click="moveCamera">Move the Camera</button>
        <component :is="currentView">
            <!-- component changes when vm.currentView changes! -->
        </component>
    </div>
</template>

<script src="./App.js"></script>

<style type="text/scss">
    canvas {
        background: -webkit-linear-gradient(27deg, rgb(0, 0, 0), rgb(66, 0, 0));
        background: linear-gradient(27deg, rgb(0, 0, 0), rgb(66, 0, 0));
    }
</style>