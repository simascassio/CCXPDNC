const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = " 01 dec 2024"

function countdown(){
  const datalanc = new  Date(lancamento)
  const hoje = new Date()

  const segtotal = (datalanc - hoje )/1000;

  const finaldias = Math.floor(segtotal / 60 / 60 / 24);
  const finalhoras = Math.floor(segtotal / 60 / 60 ) % 24; 
  const finalminutos = Math.floor(segtotal / 60 ) % 60;
  const finalsegundos = Math.floor(segtotal) % 60;

    dia.innerHTML = finaldias
    hora.innerHTML =  formatotempo(finalhoras)
    minutos.innerHTML = formatotempo(finalminutos)
    segundo.innerHTML = formatotempo(finalsegundos)

}

function formatotempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown,1000)
    
