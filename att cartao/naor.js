const boom = document.getElementById('som');
const hi = document.getElementById('bse');
const botao = document.getElementById('efeito');

function tocarSom(){
    boom.currentTime=0;
    boom.play().catch(error=>{
        console.log('ERROR', error);
    });
}

botao.addEventListener('click',function(){
    hi.classList.add('visible');
    tocarSom();
    setTimeout(()=>{
        hi.classList.remove('visible');
    },1000);
});