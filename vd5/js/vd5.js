
function calculateTotal(){
var mathScore = parseFloat(document.getElementById("math").value);
var literatureScore = parseFloat(document.getElementById("literature").value);
var englishScore = parseFloat(document.getElementById("english").value);
var totalScore = mathScore*2 + literatureScore*2 + englishScore;
var result="";
if(totalScore>=42.5){
    result="Do Kim Lien + Chu Van An";
}
else if(totalScore>=40)
{
    result="Do Kim Lien";
}
else{
    result="Khong do";
}
document.getElementById("result").innerHTML = "Kết quả: " + result;
}
