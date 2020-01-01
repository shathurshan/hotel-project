function  vfun(){
	var fname=document.forms["myform"]["fname"].value;
	var ema=document.forms["myform"]["ema"].value;
	var add=document.forms["myform"]["add"].value;
	var NIC=document.forms["myform"]["NIC"].value;
	var conduct=document.forms["myform"]["conduct"].value;
	var dropdown=document.forms["myform"]["dropdown"].value;
	
	
	if(fname==null || fname==""){
		document.getElementById("errorbox").innerHTML="enter the Fullname";
		return false;
		}
		
		
	if(ema==null||ema==""){
		document.getElementById("errorbox").innerHTML="enter the Email";
		return false;
		}
		
	if(add==null || add==""){
		document.getElementById("errorbox").innerHTML="enter the Address";
		return false;
		}
		
		if(NIC==null || NIC==""){
		document.getElementById("errorbox").innerHTML="enter the NIC";
		return false;
		}
		
		if(conduct==null || conduct==""){
		document.getElementById("errorbox").innerHTML="enter the conduct";
		return false;
		}
		
		if(dropdown==null || dropdown==""){
		document.getElementById("errorbox").innerHTML="enter the date";
		return false;
		}
		
	
		
	if(fname!='' || ema!='' || add!='' || NIC!='' || conduct!='' || dropdown!=''){
	alert("submit successfully")
		}	
		
}