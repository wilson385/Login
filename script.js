function enviar () {
   const nome = document.getElementById("name").value.trim();
   const senha = document.getElementById("senha").value.trim();
   const paragrafo = document.querySelector("p");

   if (nome === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
   }
   else if (isNaN(senha)) {
      alert("A senha deve conter apenas números.");
   }

   else {
      event.preventDefault(); //impede que o formulário seja enviado e que a página recarregue.
      paragrafo.textContent = `Usuário ${nome} logado com sucesso!`;
   }
   


}
