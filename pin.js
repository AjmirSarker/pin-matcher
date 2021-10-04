var count=3
function random(){
    var number= Math.floor((Math.random()*9999)+1000)
    while (number>9999){
        number=Math.floor((Math.random()*9999)+1000)
    }
    document.getElementById("generateBtn").value=number
    document.getElementById("right").style.display="none"
    document.getElementById("wrong").style.display="none"
    document.getElementById("input-pin").value=""
}
function btnKey(id){
    let inputValue = document.getElementById("input-pin").value
    let btn = document.getElementById(id).innerHTML
    document.getElementById("input-pin").value= inputValue + btn

}
function clean(){
    document.getElementById("input-pin").value=""
}
function cleanLast(){
    let Input= document.getElementById("input-pin").value
    let remove = Input.slice(0,Input.length-1)
    document.getElementById("input-pin").value=remove
}
function submitBtn(){
    var randomNumber = document.getElementById("generateBtn").value
    var InputNumber = document.getElementById("input-pin").value
    if(randomNumber==InputNumber){
        document.getElementById("right").style.display="block"
        document.getElementById("wrong").style.display="none"
        count=3
        document.getElementById("try").innerHTML=count

    }
    else
    {
        document.getElementById("wrong").style.display="block"
        document.getElementById("right").style.display="none"
        count-=1
       if(count>=0){
        document.getElementById("try").innerHTML=count
       }
       else{
           alert("Your Chance Is Les Than Zero!!")
       }
    }
}
