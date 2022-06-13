var myAtoi = function(str){
    let finalArr = [];
    let sign = 1;
    str = str.replace( / +/g, '')
    arr = str.split("");
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "-"){
            sign = -1;
        }
        if(arr[i] >= 0 && arr[i] <= 9){
            //console.log(arr[i]);
            finalArr.push(arr[i]);
        }
    }
    finalArr = finalArr.join("") * sign;
    console.log(finalArr);
}

myAtoi("  A-456");