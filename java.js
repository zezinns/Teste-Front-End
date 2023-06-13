var front = "";
var vetorFront = [];
var stringFront = "";

function salvar(){
    var Modelo = document.getElementById("textmod").value;
    var Objetivos = document.getElementById("txtobj").value;
    var Escopo = document.getElementById("txtesc").value;
    var Equipe = document.getElementById("txtequ").value;
	var Estra = document.getElementById("txtetr").value;
    var Crono = document.getElementById("txtcro").value;
    var CasT = document.getElementById("txttst").value;
    var Relat = document.getElementById("txtcst").value;
	var Testre = document.getElementById("txtrel").value;
	var Testne = document.getElementById("txtneg").value;
    var Testpos = document.getElementById("txtpos").value;
   
	
	

    front = [   "<br><br><br><b>Planejamento" + "<br><br>Modelo: " + Modelo +  "<br> <br>Objetivos: " + Objetivos + "<br><br>Escopo: " + Escopo + "<br><br>Equipe: " + Equipe+  "<br><br>Estrategia de Teste:"+ Estra + "<br><br>Cronograma de Entrega:" + Crono + "<br><br><br><b>Elaboração" + "<br><br>Caso de Testes:" + CasT + "<br><br><br><b>Execução" + "<br><br>Relatório Caso de Testes:" + Relat + "<br><br><br>Avaliação" + "<br><br>Testes Realizados:" + Testre + "<br><br>Testes Negativos:" + Testne + "<br><br>Testes Positivos:" + Testpos   ];
	
    vetorFront.push(front);
    limpaTxt();
}

function mostrain(){
    var lblMostrarInfo = document.getElementById("lblMostrarInfo");
    stringFront = vetorFront.join("<br>");
    lblMostrarInfo.innerHTML = stringFront;
}

function limpaTxt(){
	Modelo =document.getElementById("textmod").value = "";
	Objetivos=document.getElementById("txtobj").value = "";
	Escopo =document.getElementById("txtesc").value = "";
	Equipe=document.getElementById("txtequ").value = "";
	Estra=document.getElementById("txtetr").value = "";
	Crono=document.getElementById("txtcro").value = "";
	CasT=document.getElementById("txttst").value = "";
	Relat=document.getElementById("txtrel").value = "";
	Testre=document.getElementById("txtneg").value = "";
    Testne=document.getElementById("txtpos").value = "";
	Testpos=document.getElementById("txtcst").value = "";
    
    
}