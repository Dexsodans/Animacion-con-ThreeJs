        /* Aqui namas creamos la escena */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        /* PARA EL CUBO */
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        /* PARA LA DONA JSJS */
        const geometry2 = new THREE.TorusGeometry();
        const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const dona = new THREE.Mesh(geometry2, material2);
        scene.add(dona);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            /* Otra animacion jsjs */
            dona.position.x = 0;
            dona.rotation.x += 0.01;

            renderer.render(scene, camera);
        }
        animate();