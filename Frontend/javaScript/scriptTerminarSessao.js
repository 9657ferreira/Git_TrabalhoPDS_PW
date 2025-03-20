function logout() {
    // Remove dados da sessão local (exemplo)
    sessionStorage.clear(); 
    localStorage.clear(); 

    // Remove cookies (se aplicável)
    document.cookie = "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redireciona para a página de login
    window.location.href = 'index.html';
}
