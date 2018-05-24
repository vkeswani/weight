var mu = 75;
var sd = 15;
var list = [];
var message;
function sayHello() {
	var n = document.getElementById("name").value.toUpperCase();
	var message = "<h2>Hello " + n + "!<h2>";
	document.getElementById("content").innerHTML = message;
	$("#custom-select").show();
	
}
function getClosestNum(num, ar)
{
    var i = 0, closest, closestDiff, currentDiff;
    if(ar.length)
    {
        closest = ar[0];
        for(i;i<ar.length;i++)
        {           
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - ar[i]);
            if(currentDiff < closestDiff)
            {
                closest = ar[i];
            }
            closestDiff = null;
            currentDiff = null;
        }
        return ar.indexOf(closest);
    }
    return false;
}
document.getElementById('file').onchange = function() {
	var file = this.files[0];
	var reader = new FileReader();
	reader.onload = function(progressEvent) {
		var lines = this.result.split(" ");
		var line, w, a, p, x=1;
		message = "<table><tr><th>[--------Sr. No.--------]</th><th>[---------NAME---------]</th><th>[--------WEIGHT--------]</th><th>[WEIGHT PERCENTILE]</th></tr>";
		for(var line = 1; line < lines.length; line=line+2){
			w = lines[line];
			a = getClosestNum(w, list);
			p = Math.round((a/list.length)*1000000)/10000;
			message += "<tr><td>"+ x +"</td><td> " + lines[line-1] + " </td><td> "+lines[line]+" </td><td> " + p + "</td></tr>";
			x++;
		}
			message += "</table>";
			
	};
	reader.readAsText(file);
};
function cal() {
		document.getElementById("result").innerHTML = message;
}
//function calPercentile() {
	var w = document.getElementById("file").value;
	var z = 0, x = 0;
	for(var i = 0; i<100000; i++){
		z = Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random());
		x = mu + sd*z;
		list[list.length] = x;
	}
	list = list.sort(function(a, b){return a-b});

$(document).ready(function(){
	$("#custom-select").hide();
	$("#percentile").hide();
	$("#result").style.textAlign = "center";
});