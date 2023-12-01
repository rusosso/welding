window.onbeforeunload = function load()
{
	window.scrollTo(0, 0);
}

function intronext()
{
	
	document.getElementById("introcontaineroverlay").style.opacity="1";
	document.getElementById("griddivlettersoverlay").style.borderColor="white";
	document.getElementById("div8").style.opacity="0";
	document.getElementById("introgrid").style.transform="scale(60%)";
	setTimeout(introcontentloose,500);
}

function introcontentloose()
{
	document.getElementById("div8").style.transform="translateY(-100vh)";
	document.getElementById("griddivlettersoverlay").style.background="rgba(0,0,0,0.5)";
	document.getElementById("introcontainer").style.animation="none";
	document.getElementById("introgrid").style.transform="scale(60%) translateY(-10vh)";
	document.getElementById("introgrid").style.position="fixed";
	document.getElementById("introarrow").style.opacity="1";
	document.getElementById("body").style.overflowY="auto";
	document.getElementById("introarrow").style.opacity="1";
	setTimeout(introarrow_animation,500);
}

function introarrow_animation()
{
	document.getElementById("introarrow").style.animation="introarrow 3s infinite";
	setTimeout(scroll,50);
}

function scroll()
{
	const x = Math.round(60-window.scrollY/12);
	const y = Math.round(-10-window.scrollY/3);
	
	if(window.scrollY>=0 && window.scrollY<=400 )
	{
		document.getElementById("introgrid").style.transform="scale("+x+"%) translateY("+y+"vh)";
	}
	
	setTimeout(scroll,20);
} 
