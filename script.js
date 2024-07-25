function addnum(){
    console.log("Function executed");
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var res=document.querySelector('.res');
    console.log(n1);
    console.log(n2);
    var sum=n1+n2;
    console.log(sum);
    res.innerText="Sum :"+sum;
}