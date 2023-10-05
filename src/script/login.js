function logar () {
    var user = document.getElementById("username")
    var senha = document.getElementById("senha")

    if (user.value == "admin@admin.com" && senha.value == "123") {
        localStorage.setItem("acesso", true);

        alert("Credenciais Validadas com sucesso! Seja Bem Vindo Usuario!");

        window.location.href = "tela_contagem examplo/sistema.html";
    } else {
        alert("Usuário ou senha incorretos!")
        user.value = ""
        senha.value = ""
    }
}