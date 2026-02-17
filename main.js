// la funcion principal del main es:

//  1. Obtiene los valores del formulario 
//  2. Valida que los campos tengan información
//  3. La funcion fetch hace las peticiones al servidor
//  4. /calcular-imc es la ruta a donde se estan enviando la petición
//  5. method: 'POST' → Vamos a enviar datos
//  6. headers → Estamos enviando JSON
//  7. body → Aquí van los datos convertidos a texto JSON

document.getElementById('btnCalcular').addEventListener('click', () => {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (!peso || !altura) {
        alert('Por favor completa todos los campos');
        return;
    }

    fetch('/calcular-imc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            peso,
            altura
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('imc').value = data.imc;
    })
    .catch(err => console.error(err));

});

document.getElementById('btnBorrar').addEventListener('click', () => {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('imc').value = '';
});