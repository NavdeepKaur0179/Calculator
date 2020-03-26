function getHistory()
{
    return document.getElementById("history-value").innerHTML;
}
function printHistory(num)
{
  document.getElementById("history-value").innerHTML=num;
}
function getOutput()
{
    return document.getElementById("output-value").innerHTML;
}
function printOutput(num)
{
  document.getElementById("output-value").innerHTML=num;
}

printOutput(9999);