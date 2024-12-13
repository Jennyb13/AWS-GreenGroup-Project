
    // Actualizar dinámicamente el contenido del hostname
    const hostnameElement = document.getElementById('ec2-hostname');
    if (hostnameElement) {
        hostnameElement.textContent = `EC2 response: ${defaultHostname}`;
     }
    