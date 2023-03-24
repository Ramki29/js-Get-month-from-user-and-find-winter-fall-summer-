
var a=parseInt(prompt("Enter the month"));
var time=new Date();
time.setMonth(a);
var b=time.getMonth(a);
	
if(b<=3)
	{
		document.write("Fall");
		document.write("<br>");
	}
	else if(3<b && 7>=b)
	{
		document.write("Summer");
		document.write("<br>");
	}
	else
	{
		document.write("Winter");
		document.write("<br>");
	}