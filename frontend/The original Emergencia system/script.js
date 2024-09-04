
document.addEventListener("DOMContentLoaded", function () {

    const pacientes = [];

    const formRegistroPaciente = document.getElementById('formRegistroPaciente');
    const formEnviarInternar = document.getElementById("formEnviarInternar");
    const formRegistroDoctor = document.getElementById("formRegistroDoctor");
    const listadoPacientes = document.getElementById("listadoPacientes");
    const nombreInternar = document.getElementById('nombreInternar');
    const nombrePacienteDoctor = document.getElementById('nombrePacienteDoctor');
    //funcion para obtener los datos del backend
    function obtenerPacientes() {
        fetch('localhost:3000/data')
            .then(response => response.json())
            .then(data => {
                actualizarListado(data);
            }).catch(error => {
                alert('Error en los datos del paciente:', error);
            });
    }

    formRegistroPaciente.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombrePaciente').value;
        const edad = document.getElementById('edadPaciente').value;
        const sexo = document.getElementById('sexoPaciente').value;
        const cedula = document.getElementById('cedulaPaciente').value;
        const telefono = document.getElementById('TelefonoPaciente').value;
        const nombrePariente = document.getElementById('nombrePariente').value;
        const telefonoPariente = document.getElementById('TelefonoPariente').value;
        const sintomas = document.getElementById('sintomasPaciente').value;

        const paciente = {
            nombre,
            edad,
            sexo,
            cedula,
            telefono,
            nombrePariente,
            telefonoPariente,
            sintomas,
            internado: false,
            doctores: [],
            medicamentos: []
        };
        //Enviar datos al Backend 
        fetch('localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
        })
            .then(response => response.json())
            .then(() => {
                obtenerPacientes();
                formRegistroPaciente.reset()
            })

        pacientes.push(paciente);
    });

    formEnviarInternar.addEventListener('submit', function (e) {
        e.preventDefault();
        /*
        const nombreSeleccionado = nombreInternar.value;
        const paciente = pacientes.find(p => p.nombre === nombreSeleccionado);
        if (paciente) {
            paciente.internado = true;
            alert(`${nombreSeleccionado} ha sido internado.`);
            actualizarListado();
        } */


    });

    formRegistroDoctor.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombreSeleccionado = nombrePacienteDoctor.value;
        const nombreDoctor = document.getElementById('nombreDoctor').value;
        const medicamentoRecetado = document.getElementById('medicamentoRecetado').value;

        const paciente = pacientes.find(p => p.nombre === nombreSeleccionado);
        if (paciente) {
            paciente.doctores.push(nombreDoctor);
            paciente.medicamentos.push(medicamentoRecetado);
            alert(`Se ha registrado al doctor y medicamento para ${nombreSeleccionado}.`);
            actualizarListado();
        }
    });

    function actualizarListado() {
        listadoPacientes.innerHTML = '';
        nombreInternar.innerHTML = '';
        nombrePacienteDoctor.innerHTML = '';

        pacientes.forEach(paciente => {
            const li = document.createElement('li');
            li.textContent = `${paciente.nombre} - ${paciente.internado ? 'Internado' : 'No internado'}`;
            listadoPacientes.appendChild(li);

            if (!paciente.internado) {
                const optionInternar = document.createElement('option');
                optionInternar.textContent = paciente.nombre;
                nombreInternar.appendChild(optionInternar);
            }

            const optionDoctor = document.createElement('option');
            optionDoctor.textContent = paciente.nombre;
            nombrePacienteDoctor.appendChild(optionDoctor);
        });
    }
});

function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('main .seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}
