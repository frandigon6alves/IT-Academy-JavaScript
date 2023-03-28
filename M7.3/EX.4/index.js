function verificarDNI() {
  const dni = document.getElementById('dni-input').value;
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  
  if (/^\d{8}[a-zA-Z]$/.test(dni)) {
    const numero = dni.substring(0, dni.length - 1) % 23;
    const letra = dni.charAt(dni.length - 1).toUpperCase();
    const letraCalculada = letras.charAt(numero);
    
    if (letra === letraCalculada) {
      document.getElementById('resultado').innerHTML = 'La letra es correcta';
    } else {
      document.getElementById('resultado').innerHTML = `La letra debería ser ${letraCalculada}`;
    }
  } else {
    document.getElementById('resultado').innerHTML = 'El formato del DNI no es válido';
  }
}