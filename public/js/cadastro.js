
    function cadastrar(){
      var nomeVar = input_nome.value
      var cepVar = input_cep.value
      var enderecoVar = input_rua.value
      var bairroVar = input_bairro.value
      var emailVar = input_email.value
      var senhaVar = input_senha.value
      var confirmacaoSenhaVar = input_confirmasenha.value
     
  mensagem_erro.innerHTML = ``
      if (
        nomeVar == '' ||
        emailVar == '' ||
        senhaVar == '' ||
        confirmacaoSenhaVar == ''||
        cepVar == ''||
        enderecoVar == '' ||
        bairroVar == '' 

      ) {
       
        mensagem_erro.innerHTML = 'Preencha todos os campos para prosseguir!'
  
      } else if (emailVar.indexOf('@') <= 0 || emailVar.indexOf('.com') <= 0) {
        mensagem_erro.innerHTML = 'Ops, e-mail inválido! Verifique e tente novamente.'
      
     } else if(senhaVar.length < 4){
      mensagem_erro.innerHTML = 'Senha muito curta, utilize pelo menos 4 caracteres.'
    }
    else if (senhaVar != confirmacaoSenhaVar)  {
        mensagem_erro.innerHTML = 'As senhas inseridas devem ser iguais para prosseguir.'
     
    } else if (cepVar.length < 8) {
        mensagem_erro.innerHTML = 'Coloque um cep valido para prosseguir.'
      }
    }
     
