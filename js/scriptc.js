
document.getElementById('demanda-form').addEventListener('submit', generateDemanda);

function generateDemanda(e) {
    e.preventDefault();

    const mercado = document.getElementById('mercado').value;
    const cantidadEstimada = document.getElementById('cantidadEstimada').value;
    const satisfaccionCliente = document.getElementById('satisfaccionCliente').value;
    const demandaBase = document.getElementById('demandaBase').value;

    const demandaDetails = `
        <p><strong>Mercado:</strong> ${mercado}</p>
        <p><strong>Cantidad Estimada:</strong> ${cantidadEstimada}</p>
        <p><strong>Satisfacción del cliente:</strong> ${satisfaccionCliente}</p>
        <p><strong>Demanda base:</strong> ${demandaBase}</p>
    `;

    document.getElementById('demanda-details').innerHTML = demandaDetails;
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Abrir la primera pestaña por defecto
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablink').click();
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Detección de la Demanda", 10, 10);
    doc.text(document.getElementById('demanda-details').innerText, 10, 20);
    doc.save('Detección_de_la_Demanda.pdf');
}