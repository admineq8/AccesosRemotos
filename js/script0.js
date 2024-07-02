document.getElementById('benchmarking-form').addEventListener('submit', generateBenchmarking);

function generateBenchmarking(e) {
    e.preventDefault();

    const empresa = document.getElementById('empresa').value;
    const modeloNegocio = document.getElementById('modeloNegocio').value;
    const oportunidades = document.getElementById('oportunidades').value;
    const atencionCliente = document.getElementById('atencionCliente').value;
    const paginaWeb = document.getElementById('paginaWeb').value;

    const benchmarkingDetails = `
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Modelo de negocio:</strong> ${modeloNegocio}</p>
        <p><strong>Oportunidades:</strong> ${oportunidades}</p>
        <p><strong>Atención al cliente:</strong> ${atencionCliente}</p>
        <p><strong>Página web:</strong> ${paginaWeb}</p>
    `;

    document.getElementById('benchmarking-details').innerHTML = benchmarkingDetails;
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
    doc.text("Benchmarking", 10, 10);
    doc.text(document.getElementById('benchmarking-details').innerText, 10, 20);
    doc.save('Benchmarking.pdf');
}