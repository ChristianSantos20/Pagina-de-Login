let formulario = document.getElementById("formulario")
let Cpfinput =  document.getElementById("cpf")
let senha = document.getElementById("senha")
let OlhoImg = document.getElementById("Olho")


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
    let Novocpf = Cpfinput.value.replace(/\D/g, "");
    
      Cpfinput = Novocpf.replace(/(\d{3})(\d)/, "$1.$2");
      Cpfinput = Novocpf.replace(/(\d{3})(\d)/, "$1.$2");
      Cpfinput = Novocpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    Cpfinput.value = Novocpf;
}

function MostrarSenha(){
    if(senha.type == "password" && OlhoImg.src == "Olho_aberto.png"){
        senha.type = "text";
        OlhoImg.src = "Olho_cego.png";
    } else {
        senha.type = "password"
        OlhoImg.src = "Olho_aberto.png";
    } 
}