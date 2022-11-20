import '@picocss/pico'
import './style.css'
const formConsultaPerfis = document.querySelector('#ConsultaPerfis')
const inputPerfis = formConsultaPerfis.Perfis // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')
const btnConsultaPerfis =
  document.querySelector('#btnConsultaPerfis')

formConsultaPerfis.addEventListener('submit', function (event) {
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  ativaLoader(true)
  ConsultaPerfis(inputPerfis.value) // invoca a função passando o cep digitado por parâmetro
})

async function ConsultaPerfis(Perfis) {
  let response = await fetch(`https://api.github.com/users/<nome_usuario/`)
  let dadosCep = await response.json()
  if (dadosCep.erro) {
    divDados.innerHTML = `
      <div class="erro">Perfis não encontrado!</div>
    `
  } else {
    divDados.innerHTML = `
    <p> Endereço: ${dadosCep.logradouro}  </p>
    <p> Localidade: ${dadosCep.localidade}  </p>
  `
  }
  ativaLoader(false)
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultaPerfis.
      setAttribute('aria-busy', 'true')
    btnConsultaPerfis.
      textContent = 'Consultando Perfis...'
  } else {
    btnConsultaPerfis.removeAttribute('aria-busy')
    btnConsultaPerifs.
      textContent = 'Consultar'
  }
}


