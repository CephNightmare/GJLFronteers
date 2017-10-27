import Home from './components/Home/Home.vue';
import About from './components/About/About.vue';
import Contact from './components/Contact.vue';

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
        Home
    },
    methods: {
        changeComponent: function (comp) {
            this.currentView = comp
        }
    }
}