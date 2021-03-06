
/* Funções que modificam as imagens de fundo da aba "Sobre" 
 * quando o usuário clica em algum link do menu
 */
function sobre(){
	document.getElementById('about').style.backgroundImage =  "url('images/banners/sobre.jpg')";
}
function mej(){
	document.getElementById('about').style.backgroundImage =  "url('images/banners/mej.jpg')";
}

function tema(){
	document.getElementById('about').style.backgroundImage = "url('images/banners/tema.jpg')";
}

/* Desliza menu da área Sobre */

$(document).ready(function(){
  $("#nav-arrow").click(function(){
    $("#nav1,#nav2,#nav3").toggle("slide",changeButton());
  });
});

function changeButton(){
	if(document.getElementById("nav-arrow").innerHTML=="+")
		document.getElementById("nav-arrow").innerHTML="-";
	else
		document.getElementById("nav-arrow").innerHTML="+";
}

/* Função que modifica o couteúdo do site com um efeito de Fadein/out
* quando o usuário clica em um dos links do header
*/

function changeContent(loc){
		$('iframe').fadeOut("fast", function(){
			document.getElementById("content-frame").src= loc;
			$('iframe').delay(200).fadeIn("slow");
		});
	}

/* Função que faz o efeito "slide" */
function changeContentSlide(loc){
			
			$('iframe').delay(200).animate({ "left": "-80%" }, "slow", function(){
			document.getElementById("about-frame").src= loc;
			document.getElementById("about-frame").style.left = "100%";
			$('iframe').delay(200).animate({ "left": "10%" }, "slow" );;
		});
	}
function changeBannerSlide(loc){
			
			$('iframe').delay(100).animate({ "left": "-100%" }, "slow", function(){
			document.getElementById("banners-frame").src= loc;
			document.getElementById("banners-frame").style.left = "100%";
			$('iframe').delay(100).animate({ "left": "0" }, "slow" );;
		});
	}

var banners = ["contato.html","zz","zzz"];
var index = 0;

function passBanners(){
        if( !$('iframe').is(':hover') ){
        changeBannerSlide(banners[index]);
        index += 1;
        if(index > 2)
            index = 0;
    }
        setTimeout(passBanners, 10000);
}