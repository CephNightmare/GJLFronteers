<template>
    <div id="app">
        <component :is="currentView">
            <!-- component changes when vm.currentView changes! -->
        </component>

        <footer class="footer">
            <nav class="footer__nav">
                <ul class="footer__list">
                    <li class="footer__listItem">
                        <a href="#" class="footer__link" title="Home">Home</a>
                    </li>
                    <li class="footer__listItem">
                        <a href="#" class="footer__link" title="About">About</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script lang="js" src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>