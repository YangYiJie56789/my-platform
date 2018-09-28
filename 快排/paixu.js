var arr[]
var quickSort=function(arr){
    for(var i=0;i<arr.length-1;i++){  
        for(var j=i+1;j<arr.length;j++){  
            if(arr[i]>arr[j]){
                var t=arr[i];  
                arr[i]=arr[j];  
                arr[j]=t;  
            }   
        }  
    }   
    return arr;  
}  
console.log( quickSort([10,1,2,5,6,9,7,4]))