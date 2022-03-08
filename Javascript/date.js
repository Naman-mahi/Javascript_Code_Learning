//Q1: Explain what a callback function is and provide a simple example

function modifyArray(arr, callback){
    arr.push(100);
    arr.push(300);
    callback();
}
var arr = [1,2,3,4,5];
modifyArray(arr,function(){
    console.log('Array has been modified', arr);
    console.log('You Did Successfully Congratulations❤️💕')
});
//-------------------------------------------------------------------------------
//https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions/blob/master/README.md