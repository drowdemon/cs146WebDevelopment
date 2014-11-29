function displayForm() {
    var str = "";
    for(var i=1; i<=10; i++)
    {
	var field = document.getElementById("item" + i.toString());
	
	var tempStr = "";
	tempStr += "<p>" + field.getAttribute("name") + ": ";
	
	if(field.tagName.toLowerCase() === "input")
	{
	    if(field.getAttribute("type") === "text" || field.getAttribute("type") === "date")
	    {
		var val = field.value;
		if(val!=null && val.trim()!="")
		{
		    tempStr +=  val + "</p>";
		    str+=tempStr;
		}
	    }
	}
	else if(field.tagName.toLowerCase() === "select")
	{
	    var val = field.value;
	    if(val!=null && val.trim()!="")
	    {
		tempStr +=  val + "</p>";
		str+=tempStr;
	    }
	}
    }

    document.getElementById("summary").innerHTML = str;
    document.getElementById("summary_wrapper").style.display = "block";
}

function resetForm() {
    document.getElementById("summary").innerHTML = "";
    document.getElementById("summary_wrapper").style.display = "none";
}