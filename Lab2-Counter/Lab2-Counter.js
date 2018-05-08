function btnIncrement_onclick()
{
	// get textbox and assign to a variable
	var countTextbox = document.getElementById("txtCounter");
	
	// Get number from user 
	
	var num = countTextbox.value; 
	num = parseFloat(num);
	
	
	num = num + 1;
	countTextbox.value = num; 
}