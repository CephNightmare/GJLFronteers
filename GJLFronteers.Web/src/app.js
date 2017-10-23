import Portfolio from './components/Portfolio/Portfolio.vue';
import Contact from './components/Contact.vue';

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            currentView: Portfolio
        }
    },
    components: {
        Portfolio,
        Contact
    },
    methods: {
        changeComponent: function (comp) {
            this.currentView = comp
        }, moveCamera: function () {
            console.log("test");
            scene.translateX(100);
        }
    }
}



var container, stats;
var camera, scene, renderer, particles, geometry, materials = [],
    parameters, i, h, color, size, plusOrMinus;

init();
animate();


function createCanvasMaterial(color, size) {
    var matCanvas = document.createElement('canvas');
    matCanvas.width = matCanvas.height = size;
    var matContext = matCanvas.getContext('2d');
    // create exture object from canvas.
    var texture = new THREE.Texture(matCanvas);
    // Draw a circle
    var center = size / 2;
    matContext.beginPath();
    matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
    matContext.closePath();
    matContext.fillStyle = color;
    matContext.fill();
    // need to set needsUpdate
    texture.needsUpdate = true;
    // return a texture made from the canvas
    return texture;
}

function init() {

    container = document.createElement('div');
    container.style.position = "fixed";
    container.style.zIndex = -1;
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0007);

    geometry = new THREE.Geometry();

    for (i = 0; i < 20000; i++) {

        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2000 - 1000;
        vertex.y = Math.random() * 2000 - 1000;
        vertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push(vertex);

    }
    parameters = [
        [
            "#ff0000", 2
        ],
        [
            "#ffffff", 2
        ],
    ];

    for (i = 0; i < parameters.length; i++) {

        color = parameters[i][0];
        size = parameters[i][1];

        var hexColor = color;

        materials[i] = new THREE.PointsMaterial({
            size: 1,
            map: createCanvasMaterial(hexColor, 256),
            transparent: true,
            depthWrite: false
        });

        particles = new THREE.Points(geometry, materials[i]);

        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;


        scene.add(particles);

    }

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    var time = Date.now() * 0.00005;

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1;

    for (i = 0; i < scene.children.length; i++) {

        var object = scene.children[i];

        if (object instanceof THREE.Points) {
            object.rotateZ(.0001);
            object.rotateY(.0001);
            object.position.y = object.position.y + .005;
        }

    }

    renderer.render(scene, camera);
}