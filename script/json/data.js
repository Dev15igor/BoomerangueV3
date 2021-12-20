//Simulação de recebinmento de dados via json

var dados ='{"mydata":['+'{"numPedido":"NB.000001","validade":"12/11/2021 20:00"}]}'
var produtos='{"prod":['+'{"id":"1","img":"./imagens/chocolate-garoto-baton-ao-leite-16g_21523.png", "nome":"Chocolate GAROTO BATON ao leite 16g", "num":"11320367", "desc":"Cx c/ 30 DY - R$ 0.75/DY", "value":" 22.48"},'+
            '{"id":"2","img":"./imagens/alpino.jpg", "nome":"Chocolate ALPINO 90g", "num":"12396173", "desc":"CX c/ 14 DY - R$ 4.68/DY", "value":" 65.41"},'+
            '{"id":"3","img":"./imagens/galak.jpg", "nome":"Chocolate GALAK 90g", "num":"12396174", "desc":"CX c/ 14 DY - R$ 4.66/DY", "value":" 65.41"},'+
            '{"id":"4","img":"./imagens/classic.png", "nome":"Chocolate NESTLÉ CLASSIC 90g", "num":"12396208", "desc":"CX c/ 14 DY - R$ 4.68/DY", "value":" 266.79"}]}'

var clientes='{"dados_clientes":['+'{"nome":"Bruno Gustavo Passos Mauri","cnpj":"03.850.372...","prazo":"Vencimento 14 dia úteis"}]}'
var data=JSON.parse(dados)
var pedido=data.mydata[0].numPedido
var vali=data.mydata[0].validade
var show=JSON.parse(produtos)
var dados_clientes=JSON.parse(clientes)
var aux2=0;
var lista= show.prod.length;
window.onload=function(){
    document.getElementById("total").innerHTML="R$"+0.00
    document.getElementById("numpedido").innerHTML=pedido
    document.getElementById("data_validade").innerHTML=vali
    dataclients()
    criar()
}



function add(x){
    document.getElementById(x).stepUp()
    addEventListener("click", function adicionando(){
    for(i=0;i<lista;i++){
        if(show.prod[i].num==x){
            var aux=parseFloat(show.prod[i].value)
            aux2+=aux;
            this.document.getElementById("total").innerHTML="R$"+ aux2.toFixed(2)
            this.removeEventListener("click", adicionando)

        }
    }})
   
}

function sub(value){

document.getElementById(value).stepDown()
var indice=document.getElementById(value).value
    if(indice<0){
        document.getElementById(value).value=0;
        }
   
    else{
        addEventListener("click", function subtrair(){
            for(i=0;i<lista;i++){
                if(show.prod[i].num==value){
                    var aux=parseFloat(show.prod[i].value)
                        aux2-=aux;
                        if(aux2<0){aux2=0;}
                        this.document.getElementById("total").innerHTML="R$"+ aux2.toFixed(2)
                        this.removeEventListener("click", subtrair)
                }
            }
        })
    }
}

function pesquisar(){
    var palavra = document.getElementById("pesquisar").value.toLowerCase();
    r = new RegExp(palavra,"g");
    for(i=0;i<lista;i++){
        var test=document.getElementById(show.prod[i].id)
        if(show.prod[i].nome.toLowerCase().match(r)){
            test.style.display="block"
        }
       else{
           test.style.display="none"
       }
    }
    
}

function dataclients(){
    document.getElementById("num_cnpj").innerHTML=dados_clientes.dados_clientes[0].cnpj;
    document.getElementById("nomeCliente").innerHTML=dados_clientes.dados_clientes[0].nome;
    document.getElementById("prazo").innerHTML=dados_clientes.dados_clientes[0].prazo;
}




function criar(){
    
    for(i=0;i<lista; i++){
        var tudo = document.getElementById("tudo");
        var div=document.createElement("div");
        div.setAttribute('class', 'col-sm');
        div.setAttribute("id", show.prod[i].id)
        var divprod=document.createElement("div")
        divprod.setAttribute('class', 'produto');
        divprod.setAttribute("id","prod")
        var textnum=document.createElement("p");
        var descricao=document.createElement("p");
        var informacao=document.createElement("p");
        var preco_vermelho=document.createElement("p");
        var menos=document.createElement("a");
        var input=document.createElement("input");
        var mais=document.createElement("a");
        var icon_mais=document.createElement("i");
        var icon_menos=document.createElement("i");
        var b=document.createElement("b")
        var br=document.createElement("br")
        var img=document.createElement("img")
        var btn=document.createElement("div")
        btn.setAttribute("class","btn")
        img.setAttribute("class","img_produto")
        img.setAttribute("src", show.prod[i].img)
        menos.setAttribute("class", "simbolo-");
        mais.setAttribute("onclick", "add("+show.prod[i].num+")" )
        menos.setAttribute("onclick","sub("+show.prod[i].num+")" )
        input.setAttribute("class", "quant")
        input.setAttribute("type", "number")
        input.setAttribute("name", "quant")
        input.setAttribute("id", show.prod[i].num)
        mais.setAttribute("class", "simbolom")
        mais.setAttribute("href", "#")
        textnum.setAttribute('id', 'prod_numerecao');
        descricao.setAttribute("id","descricao");
        descricao.setAttribute("class", "desc");
        informacao.setAttribute("id", "informacao");
        preco_vermelho.setAttribute("id", "preco_vermelho")
        icon_mais.setAttribute("class", "fas fa-plus")
        icon_menos.setAttribute("class", "fas fa-minus")
        textnum.innerHTML=show.prod[i].num;
        descricao.innerHTML=show.prod[i].nome;
        informacao.innerHTML=show.prod[i].desc;
        preco_vermelho.innerHTML='R$'+show.prod[i].value
        b.innerHTML='R$'+show.prod[i].value
        tudo.appendChild(div)
        div.appendChild(divprod);
        divprod.appendChild(img)
        divprod.appendChild(textnum)
        divprod.appendChild(descricao)
        divprod.appendChild(informacao)
        divprod.appendChild(preco_vermelho)
        div.appendChild(btn)
        btn.appendChild(menos)
        btn.appendChild(input)
        btn.appendChild(mais)
        mais.appendChild(icon_mais)
        menos.appendChild(icon_menos)
        btn.appendChild(br)
        btn.appendChild(b)

    }
}
