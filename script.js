function block1_scroll_animation()
{
	if(window.innerHeight*2.2 <= window.scrollY)
	{
		document.getElementById("content1").style.transform="scale(200%)";
		document.getElementById("block1").style.backgroundColor="white";
		document.getElementById("block1_cover").style.opacity="1";
	}
	else
	{
		document.getElementById("content1").style.backgroundColor="";
		document.getElementById("block1_cover").style.opacity="";
		document.getElementById("content1").style.transform="";
		document.getElementById("block1").style.backgroundColor="";
	}
	
	setTimeout("block1_scroll_animation()", 10);
}


function header_change()
{
	if(window.innerHeight*3.1 <= window.scrollY)
	{
		document.getElementById("header").style.backgroundColor="var(--bg)";
		document.getElementById("header").style.borderLeftColor="var(--font)";
		document.getElementById("logo").style.color="var(--font)";
		document.getElementById("nav_block1").style.color="var(--font)";
		document.getElementById("nav_block2").style.color="var(--font)";
		document.getElementById("nav_block1").style.borderBottomColor="var(--font)";
		document.getElementById("nav_block2").style.borderBottomColor="solid var(--font)";
	}
	else
	{
		document.getElementById("header").style.backgroundColor="transparent";
		document.getElementById("header").style.borderLeftColor="var(--bg)";
		document.getElementById("logo").style.color="var(--bg)";
		document.getElementById("nav_block1").style.color="var(--bg)";
		document.getElementById("nav_block2").style.color="var(--bg)";
		document.getElementById("nav_block1").style.borderBottomColor="var(--bg)";
		document.getElementById("nav_block2").style.borderBottomColor="var(--bg)";
	}
	
	setTimeout("header_change()", 10);
}

var display1_active=false;
var display2_active=false;
var display3_active=false;

function display1()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo1").style.transform="scale(90%)";
	document.getElementById("photo1").style.top="0";
	document.getElementById("photo1").style.left="7px";
	document.getElementById("photo1").style.width="90%";
	document.getElementById("photo1").style.height="100%";
	document.getElementById("photo1").style.zIndex="9";
	document.getElementById("photo1").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display1_active=true;
	}
	else if(display1_active==true)
	{
		document.getElementById("photo1").style.transform="";
		document.getElementById("photo1").style.top="";
		document.getElementById("photo1").style.left="";
		document.getElementById("photo1").style.width="";
		document.getElementById("photo1").style.height="";
		document.getElementById("photo1").style.zIndex="";
		document.getElementById("photo1").style.boxShadow="";
		document.getElementById("photo1").style.textAlign="center";
		document.getElementById("photo1").style.fontSize="50px";
		document.getElementById("photo1").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display1_active=false;
	}
}

function display2()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo2").style.transform="scale(90%)";
	document.getElementById("photo2").style.top="0";
	document.getElementById("photo2").style.left="7px";
	document.getElementById("photo2").style.width="90%";
	document.getElementById("photo2").style.height="100%";
	document.getElementById("photo2").style.zIndex="9";
	document.getElementById("photo2").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display2_active=true;
	}
	else if(display2_active==true)
	{
		document.getElementById("photo2").style.transform="";
		
		document.getElementById("photo2").style.top="";
		document.getElementById("photo2").style.left="";
		document.getElementById("photo2").style.width="";
		document.getElementById("photo2").style.height="";
		document.getElementById("photo2").style.zIndex="";
		document.getElementById("photo2").style.boxShadow="";
		document.getElementById("photo2").style.textAlign="center";
		document.getElementById("photo2").style.fontSize="50px";
		document.getElementById("photo2").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display2_active=false;
	}
}

function display3()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo3").style.transform="scale(90%)";
	document.getElementById("photo3").style.top="0";
	document.getElementById("photo3").style.left="7px";
	document.getElementById("photo3").style.width="90%";
	document.getElementById("photo3").style.height="100%";
	document.getElementById("photo3").style.zIndex="9";
	document.getElementById("photo3").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display3_active=true;
	}
	else if(display3_active==true)
	{
		document.getElementById("photo3").style.transform="";
		document.getElementById("photo3").style.top="";
		document.getElementById("photo3").style.left="";
		document.getElementById("photo3").style.width="";
		document.getElementById("photo3").style.height="";
		document.getElementById("photo3").style.zIndex="";
		document.getElementById("photo3").style.boxShadow="";
		document.getElementById("photo3").style.textAlign="center";
		document.getElementById("photo3").style.fontSize="50px";
		document.getElementById("photo3").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display3_active=false;
	}
}

var message_clicked=false

function message_click()
{
	if(message_clicked==false)
	{
	document.getElementById("block3").style.transform="translate(100vw)"
	message_clicked=true;
	}
	else
	{
	document.getElementById("block3").style.transform=""
	message_clicked=false;
	}
}

function message_sent()
{
	document.getElementById("message").innerHTML="Pomyślnie wysłano wiadomość <i class='demo-icon icon-ok-circled'></i>"
	document.getElementById("message").style.backgroundImage="linear-gradient(125deg, rgba(51,255,51,1) 30%, rgba(179,255,179,1) 70%)"
	document.getElementById("message").style.display="block"
	document.getElementById("message").style.fontSize="5vw"
	document.getElementById("message").style.textAlign="center"
	document.getElementById("message").style.marginTop="25vh"
	document.getElementById("message").style.padding="1vw"
}