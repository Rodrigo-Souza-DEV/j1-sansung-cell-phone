let tela = document.querySelector('.tela');
let inicio = document.querySelector('.inicio');
let inicio2 = document.querySelector('.inicio-2');
let inicio3 = document.querySelector('.inicio-3');
let inicio4 = document.querySelector('.inicio-4');
let rangerSom = document.querySelector(".campo");
let conf = document.querySelector(".conf-box");
let volumeBox = document.querySelector(".volume-box");
let exit = document.querySelector(".exit");
let call = document.querySelector(".calculadora");
let horaAtual = document.querySelectorAll(".aaaa");
let m = document.querySelectorAll(".m");
let d = document.querySelectorAll(".d");
let ds = document.querySelectorAll(".ds");
let dias = new Array(
    'domingo','segunda','terça','quarta','quinta','sexta','sábado'
   );
let meses= new Array("Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro");
let h = new Date;
let mes = h.getMonth();
let diasemana = h.getDay();
let dia = h.getDate();
let volumeBoxn = 0;
let desligaroff = 0;
let n = 0;
let exitn = 0;
let volSom = 5;
let notificacao = 0;
let toque = 0;
function ligar() {
    if (n === 0) {
        document.querySelector(".bt-ligar").style.display = "none";
        document.querySelector(".bt-ligar2").style.display = "block";
        inicio3.style.display = "none";
        tela.style.backgroundColor = "rgb(24, 24, 24)";
        let ligar = setTimeout(function () {
            inicio.style.display = "flex";
        }, 1000);
        setTimeout(function () {
            tela.style.backgroundColor = "black";
            inicio.style.display = 'none';
            inicio2.style.display = "flex";
        }, 4000);
        setTimeout(function () {
            inicio2.style.display = "none";
        }, 9000);
        setTimeout(function () {
            tela.style.backgroundColor = "white";
        }, 9500);
        setTimeout(() => {
            inicio3.style.display = "flex";
            tela.style.backgroundColor = "black";
            document.querySelector(".bt-ligar").style.display = "block";
        document.querySelector(".bt-ligar2").style.display = "none";
        }, 10000);
        setInterval(() => {
            horario()
        }, 1000);
        m[0].innerHTML = meses[mes];
        ds[0].innerHTML = dias[diasemana];
        d[0].innerHTML = dia;;
        m[1].innerHTML = meses[mes];
        ds[1].innerHTML = dias[diasemana];
        d[1].innerHTML = dia;;
        n = 1;
        /*=====================importante*/
        
       /* document.querySelector(".bt-ligar").style.display = "none";
        document.querySelector(".bt-ligar3").style.display = "block";*/
    }
   else if (n === 1) {
        inicio3.style.display = "flex";
        /*else if (n == 1) {
            setInterval(() => {
                inicio3.style.display = "none";
    
                n = 0;
            }, 500);*/
        exit.style.display = "flex";
        //document.querySelector(".emergencia").innerHTML = "";
        n = 0;
        exitn = 1;
       
    }
    if (inicio3.style.display == "flex"){
        exit.style.display = "flex";
    }

}



    function rodar() {
        
        let s = document.querySelectorAll(".s");

        s[0].style.position = "relative";
        for (let i = 0; i <= (s.length - 1); i++) {
            s[i].style.display = "relative";
        }
        let n = [];
        for (let i = 0; i <= s.length - 1; i++) {
            n[i] = 0;
        }

        setInterval(() => {
            for (let i = 0; i <= s.length - 1; i++) {
                n[i] -= 1;
            }
            for (let i = 0; i <= s.length - 1; i++) {
                s[i].style.left = n[i] + "px";
            }
            let px2 = 180;
            let px1 = -140;
            for (let i = 0; i <= s.length; i++) {
                if (n[i] === px1) {
                    n[i] = px2;
                }
                px1 -= 2;
                px2 -= 2;
            }

        }, 10);
    };

    rodar();

    function volUp() {
       // if (n === 1) {
        if((inicio3.style.display == "flex"))
            if (volumeBoxn === 0) {
                volumeBox.style.display = "flex";
                volumeBoxn = 1;
            }


            volSom++;
            if (volSom < 1) {
                volSom = 1;
            }
            document.querySelector(".campo").value = volSom;
            if (volSom != -1) {
                document.querySelector(".som").style.backgroundImage = 'url("images/som.png")';
            }
        }
    

    function volDown() {
       // if (n === 1 ) {
           if((inicio3.style.display == "flex"))
            if (volumeBoxn === 0) {
                volumeBox.style.display = "flex";
                volumeBoxn = 1;
            }
            if (volSom <= -1) {
                volSom = 0;
            } else {
                document.querySelector(".campo").value = volSom;
            }
            volSom--;
            if (volSom == -1) {
                document.querySelector(".som").style.backgroundImage = 'url("images/som-off.png")';
            } else {
                document.querySelector(".som").style.backgroundImage = 'url("images/som.png")';
            }
        }

    


    function noti() {

        if (notificacao === 0) {
            conf.style.display = "flex";
            notificacao = 1;
        }
    }

    function seta() {
        if (notificacao === 1) {
            conf.style.display = "none";
            notificacao = 0;
        }
        if (volumeBoxn === 1) {
            volumeBox.style.display = "none";
            volumeBoxn = 0;
        }
        if (exitn === 1) {
            exit.style.display = "none";
        }
        if (inicio4.style.display == "block") {
            inicio4.style.display = "none"
            inicio3.style.display = "flex"
        }
        if(call.style.display == "flex"){
            call.style.animationName = "calculoff";
            call.style.animationDuration = "0.5s";  
            inicio4.style.display = "block"
            inicio3.style.display = "none"
            setTimeout(() => {
                call.style.display = "none";  
            }, 200);
        }
        if(internet.style.display == "flex"){
            internet.style.animationName = "google-off";
            internet.style.animationDuration = "0.5s";  
            inicio4.style.display = "block"
            inicio3.style.display = "none"
            setTimeout(() => {
                internet.style.display = "none";  
            }, 300);
        }
        
            
    }

    function desligar() {
        document.querySelector(".exit-desligar").style.display = "flex";
        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll(".desligar")[i].style.display = "none";
        }

        exit.style.display = "none";

    }
    function reiniciar() {
        exit.style.display = "none";
        inicio3.style.display = "none";
        ligar();
        n = 1
    }
    function emergencia() {
        document.querySelector(".emergencia").innerHTML = "Modo Offline";
        exit.style.display = "none";
        n = 1;
    }
    function cancelaDesligar() {
        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll(".desligar")[i].style.display = "block";
        }
        exit.style.display = "none";
        document.querySelector(".exit-desligar").style.display = "none";
        n = 1;
    }

    function confirmaDesliga() {
        exit.style.display = "none";
        document.querySelector(".exit-desligar").style.display = "none";
        let a = setTimeout(() => {
            tela.style.backgroundColor = "black";
            inicio2.style.display = "flex";
        }, 1000);
        setTimeout(() => {
            inicio2.style.display = "none";
        }, 5000);
        tela.style.backgroundColor = "black";
        document.querySelector(".bt-ligar").style.display = "none";
        document.querySelector(".bt-ligar2").style.display = "block";
        inicio3.style.display = "none";
        let celular = document.querySelector(".celular");
        setTimeout(() => {
            document.querySelector(".bt-volume").style.display = "none";
            document.querySelector(".bt-ligar").style.display = "none";
            document.querySelector(".bt-ligar2").style.display = "none";
            celular.style.animationName = "celular2";
        celular.style.animationDuration = "0.2s";
        }, 6000);
        setTimeout(() => {
            celular.style.display = "none";
        }, 6200);
    }
    function horario(){
        var hoje = new Date
        var hora = hoje.getHours()
        var minutos = hoje.getMinutes()
        var segundos = hoje.getSeconds()
       if(hora < 10){
            hora = "0"+hora;
        } if (minutos < 10) {
            minutos = "0"+minutos
        } 
        horaAtual[0].innerHTML = `${hora}:${minutos}`;
        horaAtual[1].innerHTML = `${hora}:${minutos}`;
    }
   
   
    function in3(){
        inicio3.style.display = "none";
        document.querySelector(".inicio-4").style.display = "block";
        n = 3;
    }
    function esquerda(){
        let esq = document.querySelector(".containerinicio4");
        let direita = document.querySelector(".container2inicio4");
        let n = 0;
        let d = 300;
        let c;
        let mover = setInterval(() => {
            esq.style.right = n+"px";
            direita.style.left = d+"px";
            n+= 20;
            d-= 20;
            
            if(direita.style.left == "0px"){
                clearInterval(mover);
            }
        }, 0.05);
        
        
    }
    function direita(){
        let esq = document.querySelector(".containerinicio4");
        let direita = document.querySelector(".container2inicio4");
        let n = 300;
        let d = 0;
        let c;
        let mover = setInterval(() => {
            esq.style.right = n+"px";
            direita.style.left = d+"px";
            n-= 20;
            d+= 20;
            
            if(direita.style.left == "300px"){
                clearInterval(mover);
            }
        }, 0.05);
    }

    function chamada(){
        document.querySelector(".chamada").style.display = "block";
    }
    function cal(){
        call.style.display = "flex";
        call.style.animationName = "calcul";
        call.style.animationDuration = "0.5s";
    }


    //================================================================
    let valor = document.querySelector('.valor');
        let primeiro;
        let segundo;
        let conta;
        let limpartela = true;
        function num(x){
            if (limpartela === false) {
                valor.value = '';
                valor.value += x;   
                limpartela = true;
            } else {
                valor.value += x;  
            }
             
        }
        function somar(){
            primeiro = valor.value;
            valor.value = '';
            conta = "+";
        }
        function menos(){
            primeiro = valor.value;
            valor.value = '';
            conta = "-";
        }
        function mult(){
            primeiro = valor.value;
            valor.value = '';
            conta = "*";
        }
        function dividir(){
            primeiro = valor.value;
            valor.value = '';
            conta = "/";
        }
        function limpar(){
            valor.value = '';
            conta = '';
            primeiro = '';
            segundo = '';
        }
        function igual(){
            segundo = valor.value;
            valor.value = '';
            if (conta === "+") {
                valor.value = (parseFloat(primeiro) + parseFloat(segundo));
            } else if (conta === "-") {
                valor.value = (parseFloat(primeiro) - parseFloat(segundo));
            } else if (conta === "*") {
                valor.value = (parseFloat(primeiro) * parseFloat(segundo));
            } else if (conta === "/") {
                valor.value = (parseFloat(primeiro) / parseFloat(segundo));
            }
            limpartela = false;
        }
       let internet = document.querySelector(".google");
        function ma(){
         internet.style.animationName = "google";
            internet.style.animationDuration = "0.5s";  
            internet.style.display = "flex";
        }
        