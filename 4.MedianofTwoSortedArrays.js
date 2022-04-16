var findMedianSortedArrays = function(nums1, nums2) {
    let finalArr = nums1.concat(nums2);
    finalArr = finalArr.sort((a, b) =>{return a - b;});
    //console.log(finalArr);
    const middle = Math.floor(finalArr.length/2)
    if((finalArr.length)%2 == 1){
        //let median = Math.floor(finalArr.length/2);
        return finalArr[middle]
    }
    else{
        return (finalArr[middle] + finalArr[middle-1]) / 2;
    }
};
console.log(findMedianSortedArrays(nums1=[3], nums2=[-2, -1]));