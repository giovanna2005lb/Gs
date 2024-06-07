document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var reportData = {};
    formData.forEach(function(value, key) {
        reportData[key] = value;
    });
    console.log(reportData);
    // adicionar o código para enviar os dados do relatório para o servidor
    alert("Relatório enviado com sucesso!");
    this.reset();
});
document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var reportData = {};
    formData.forEach(function(value, key) {
        reportData[key] = value;
    });
    console.log(reportData);
    // adicionar o código para enviar os dados do relatório para o servidor
    alert("Relatório enviado com sucesso!");
    this.reset();
    openMessageModal();
});

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var senderName = document.getElementById("senderName").value;
    var messageContent = document.getElementById("messageContent").value;
    console.log("Nome do Remetente: " + senderName);
    console.log("Conteúdo da Mensagem: " + messageContent);
    alert("Mensagem enviada com sucesso!");
    closeMessageModal();
});

function openMessageModal() {
    document.getElementById("messageModal").style.display = "block";
}

function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", function() {
    closeMessageModal();
});

window.onclick = function(event) {
    if (event.target == document.getElementById("messageModal")) {
        closeMessageModal();
    }
}
