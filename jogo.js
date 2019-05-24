/*
var cores = pegarCores();

function pegarCores() {
var colores=[];
    for(i=2; i<=149; i++){
        let cor = document.querySelector("#main > div.w3-responsive > table > tbody > tr:nth-child("+i+") > td:nth-child(1) > a").innerText.toLowerCase();
        colores.push(cor);
    }
return colores;
}
*/

var cores = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'ightgreen', 'ightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

var tenCores = [];
var resposta;
var cont=0;

for(i=0; i<10; i++){
    let ramd = Math.floor(Math.random()*147);
    tenCores.push(cores[ramd]);
    cores.splice(ramd,1);
}

let ramd2 = Math.floor(Math.random()*9);
resposta = tenCores[ramd2];

do{

    var tentativa = prompt("Advinhe a cor "+ resposta +" dentre alguma dessas:\n"+ tenCores);

    if(tentativa > resposta){
        window.alert("A resposta é alfabeticamente menor.");
    }
    if(tentativa < resposta){
        window.alert("A resposta é alfabeticamente maior.");
    }
    cont++;
}while(resposta != tentativa);

window.alert("Parabéns, você acertou!\nTentativas: "+cont);

document.body.style.backgroundColor = resposta;
document.getElementById("nome").innerText = resposta;