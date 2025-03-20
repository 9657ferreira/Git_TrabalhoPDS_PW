/**
 * Função para lidar com o carregamento de ficheiros.
 * @param {Event} event - Evento de alteração do input de ficheiros.
 */
function handleFileUpload(event) {
    // Obtém o ficheiro selecionado pelo utilizador
    const file = event.target.files[0];
    
    // Elemento para exibir o nome do ficheiro carregado
    const fileNameElement = document.getElementById('fileName');

    if (file) {
        // Exibe o nome do ficheiro carregado no elemento de texto
        fileNameElement.textContent = `Ficheiro selecionado: ${file.name}`;
        
        // Cria um objeto FormData para preparar o envio do ficheiro
        const formData = new FormData();
        formData.append('file', file);

        // Envia o ficheiro para o servidor utilizando fetch
        fetch('/upload', { // Substitui '/upload' pelo endpoint correto do teu servidor
            method: 'POST', // Método de envio POST
            body: formData // Corpo da requisição contendo o ficheiro
        })
        .then(response => {
            // Verifica se a resposta do servidor foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro no envio do ficheiro');
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Exibe uma mensagem de sucesso e regista os dados na consola
            alert('Ficheiro enviado com sucesso!');
            console.log(data);
        })
        .catch(error => {
            // Exibe uma mensagem de erro e regista o erro na consola
            alert('Erro ao enviar o ficheiro.');
            console.error(error);
        });
        
    } else {
        // Limpa o texto caso o utilizador cancele a seleção do ficheiro
        fileNameElement.textContent = '';
    }
}
