<!DOCTYPE html>
<html>
<body>

Name: <input type="text" id="myText" value="Tamerlan" ><br>
Group-name: <input type="text" id="myText" value="CS-2118" ><br>

<button onclick="myFunction()">Got it</button>

<br><br>

1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />

<p>The Result is : <br>
<span id = "result"></span>
</p>
<br><br>
Current time:



<p id="demo"></p>

<script>
	function myFunction() {

	 var x = document.getElementById("myText").name;
  document.getElementById("demo").innerHTML = x;
}


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


const d = new Date();
 document.getElementById("demo").innerHTML = d;

 var date1 = new Date("01/31/2022");
var date2 = new Date("07/21/2024");
  

var Difference_In_Time = date2.getTime() - date1.getTime();
  

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  

document.write("Before I graduate  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);


</script>


</body>
</html>
