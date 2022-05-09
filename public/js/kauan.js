
    function cadastrar(){
      var nomeVar = input_nome.value
      var cepVar = input_cep.value
      var enderecoVar = input_rua.value
      var bairroVar = input_bairro.value
      var emailVar = input_email.value
      var senhaVar = input_senha.value
      var confirmacaoSenhaVar = input_confirmasenha.value
     
  
      if (
        nomeVar == '' ||
        emailVar == '' ||
        senhaVar == '' ||
        confirmacaoSenhaVar == ''
      ) {
       
        mensagem_erro.innerHTML = 'Preencha todos os campos para prosseguir!'
  
      } else if (emailVar.indexOf('@') == -1 || emailVar.indexOf('.com') == -1) {
        mensagem_erro.innerHTML = 'Ops, e-mail inválido! Verifique e tente novamente.'
      
    } else if (senhaVar != confirmacaoSenhaVar)  {
        mensagem_erro.innerHTML = 'As senhas inseridas devem ser iguais para prosseguir!'
     
    } else if (cepVar.length < 8) {
        mensagem_erro.innerHTML = 'Coloque um cep valido para prosseguir!'
      }
    }
     
    
   
  