function merge(left,right) {
        var result = [],
            il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        while (il < left.length) {
            result.push(left[il++]);
        }
        while (ir < right.length) {
            result.push(right[ir++]);
        }
        return result;
    }
    function mergeSort(arr){
        var length = arr.length;
        if (length ==1) {
            return arr;
        }
        var mid = Math.floor(length/2),
            left = arr.slice(0, mid),
            right = arr.slice(mid, length);
        return merge(mergeSort(left), mergeSort(right));
    }
    console.log(mergeSort([7,3,9,6,11,2,4,5]));
    