let arr1 = [1,2,3,4,5,6,7];

let arr2 = [1,2,3];

function elementos(arr){
    if (arr.length < 5){
        console.log("Poucos elementos");
    } else {
        console.log("Muitos Elementos");
    }
}

elementos(arr1);
elementos(arr2);