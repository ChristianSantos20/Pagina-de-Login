var formulario = document.getElementById("formulario")
var Cpfinput =  document.getElementById("cpf")
var senha = document.getElementById("senha")
var OlhoImg = document.getElementById("Olho")

formulario.addEventListener("submit", function(e){

    e.preventDefault()

    if(Cpfinput === ""){
        alert("Por favor preencha campos vazios")
        return false
    }
    if(senha === ""){
        alert("Por favor preencha os campos vazios")
        return false
    }
})

function cpfMask(){
    let Novocpf = Cpfinput.value.replace(/\D/g, "");
    
    Novocpf = Cpfinput.value.replace(/(\d{3})(\d)/, "$1.$2");
    Novocpf = Cpfinput.value.replace(/(\d{3})(\d)/, "$1.$2");
    Novocpf = Cpfinput.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    Cpfinput = Novocpf.value;
}

function MostrarSenha(){
   
    if(senha.type === "password"){
        senha.type = "text";
    } else {
        senha.type = "password";
    } 
    
    let olho = document.getElementById("Olho")

    if(olho.src === "./imagem/Olho_aberto.png"){
        olho.src = "./imagem/Olho_cego.png"
    } else {
        olho.src = "./imagem/Olho_aberto.png"
    }
}