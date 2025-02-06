document.addEventListener("DOMContentLoaded", function () {
    /*** EJERCICIO 1 - CAMBIAR FONDO SOLO DEL CUADRO EN EL DIV ***/
    const btnColor = document.getElementById("cambiarColor");
    const cuadroEjercicio1 = document.querySelector("#contenedor1 .texto"); // Selecciona solo el cuadro del texto

    btnColor.addEventListener("click", function () {
        cuadroEjercicio1.style.backgroundColor = "#ffcc00"; // Cambia solo el fondo del cuadro del ejercicio 1
    });

    /*** EJERCICIO 2 - AGREGAR Y ELIMINAR TAREAS ***/
    const inputTarea = document.getElementById("nuevaTarea");
    const btnAgregar = document.getElementById("agregarTarea");
    const listaTareas = document.getElementById("listaTareas");

    btnAgregar.addEventListener("click", function () {
        const tareaTexto = inputTarea.value.trim();
        if (tareaTexto !== "") {
            // Crear el elemento de la tarea
            const li = document.createElement("li");
            li.textContent = tareaTexto;
            li.classList.add("task");

            // Crear el botón de eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.classList.add("eliminarTarea");

            // Evento para eliminar la tarea
            btnEliminar.addEventListener("click", function () {
                listaTareas.removeChild(li);
            });

            // Agregar el botón dentro del li y luego añadirlo a la lista
            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);

            // Limpiar el input después de añadir la tarea
            inputTarea.value = "";
        }
    });

    /*** EJERCICIO 3 - BOTÓN PARA CARGAR MENÚ CON RESULTADO ALEATORIO ***/
    const menuContainer = document.getElementById("menuPizzas");
    const btnCargarMenu = document.getElementById("cargarMenu");

    btnCargarMenu.addEventListener("click", function () {
        menuContainer.innerHTML = "Cargando menú...";
        menuContainer.classList.remove("oculto"); // Mostrar el contenedor
        btnCargarMenu.disabled = true; // Deshabilitar botón mientras se carga

        setTimeout(() => {
            const resultadoAleatorio = Math.random() < 0.5; // 50% de probabilidad de éxito o error

            if (resultadoAleatorio) {
                // Simulación de menú cargado con solo las 3 pizzas requeridas
                const menuData = {
                    pizzas: [
                        { nombre: "Margarita" },
                        { nombre: "Pepperoni" },
                        { nombre: "Hawaiana" }
                    ]
                };

                menuContainer.innerHTML = "";
                menuData.pizzas.forEach(pizza => {
                    let item = document.createElement("div");
                    item.classList.add("pizza-item");
                    item.textContent = pizza.nombre;
                    menuContainer.appendChild(item);
                });
            } else {
                // Simulación de error
                menuContainer.innerHTML = "<p class='error'>Error al cargar el menú</p>";
            }

            btnCargarMenu.disabled = false; // Volver a habilitar el botón después de cargar
        }, 2000); // Retardo de 2 segundos
    });
});


/*** EJERCICIO 4 ***/
    const reservaForm = document.getElementById("reservaForm");

    reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const personas = document.getElementById("personas").value;
        const mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "";

        if (!nombre || !fecha || !hora || !personas || parseInt(personas) <= 0) {
            mensaje.innerHTML = "<p class='error'>Todos los campos son obligatorios y deben ser válidos</p>";
        } else {
            mensaje.innerHTML = `<p class='success'>Reserva realizada con éxito para ${nombre}, el ${fecha} a las ${hora} para ${personas} personas.</p>`;
        }
    });

