import Home from './components/Home/Home.vue';
import About from './components/About/About.vue';
import Contact from './components/Contact.vue';
import vueFooter from './components/Partials/Layout/vueFooter.vue';

export default {
    name: 'app',
    data() {
        return {
            currentView: Home
        }
    },
    components: {
        About,
        Contact,
        Home,
        vueFooter
    },
    methods: {
        changeComponent: function (comp) {
            this.currentView = comp
        }
    }
}