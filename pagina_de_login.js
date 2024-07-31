let formulario = document.getElementById("formulario")
let Cpfinput = document.getElementById("cpf")
let senha = document.getElementById("senha")

formulario.addEventListener("submit", function(e){

     e.preventDefault()

    if(Cpfinput === "" && senha === ""){
       alert("Por favor preencha os campos vazios")
       return false
    } else{
       return true
    }

})

function cpfMask(){
    let Novocpf = Cpfinput.value.replace(/\D/g, "")
    if(Novocpf.length <= 11){
        Novocpf.replace(/(\d{3})(\d)/, "$1.$2")
        Novocpf.replace(/(\d{6})(\d)/, "$1.$2")
        Novocpf.replace(/(\d{9})(\d)/, "$1-$2")
    }
    Cpfinput.value = Novocpf;
}

function MostrarSenha(){
    if(senha.type == "password"){
        senha.type == "text"
    } else {
        senha.type == "password"
    } 
}