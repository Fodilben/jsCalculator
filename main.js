// get the all buttons
const keys = document.querySelectorAll('button');
const input = document.querySelector('.calculator-screen')
let result = 0;
// op, nam1, nam2, nums,
// loping to all button button by button 
keys.forEach((key) => {
    key.addEventListener('click', () => {// testing if this button is on click 
        switch (key.value) {
            case "all-clear":// the case of he click on the clear button 
                input.value = ''; break;
            case '=':// the case of he click on the equal  button 
                try {// we put a promise because it can return an err
                    result = eval(input.value);
                } catch (err) {// testing if there is an err
                    console.log(`an err:${err}`);
                } finally {// finally sening the result to i put 
                    input.value = result;
                }
                break;
            case 'del':// the case of he click on the delet  button 
                input.value = input.value.slice(0, -1);
                break;
            default:// the default  are the numbers 
                input.value += key.value;
                break;
        }
    })
})
let a = function ai() {

}

console.log(a.toString())
// switch (key.className) {
//     case "all-clear":
//         input.value = ''; break;
//     case 'operator':
//         op = key.value;
//         nam1 = parseFloat(input.value);
//         input.value += key.value;

//         break;
//     case 'equal-sign':
//         nam2 = parseFloat(input.value.slice(input.value.indexOf(op) + 1, input.value.lenth));
//         switch (op) {
//             case '+':
//                 input.value = nam1 + nam2;
//                 break;
//             case '*':
//                 input.value = nam1 * nam2;
//                 break;
//             case '-':
//                 input.value = nam1 - nam2;
//                 break;
//             case '/':
//                 input.value = nam1 / nam2;
//                 break;
//         }
//         break;
//     default: input.value += key.value;

// }

//problems in this is u can just add one op
// avantage it optimized

    // switch (key.className) {
    //     case "all-clear":
    //         input.value = ''; break;
    //     case 'operator':
    //         op = key.value;
    //         input.value += key.value;
    //         break;
    //     case 'equal-sign':
    //         nums = input.value.split(op);
    //         switch (op) {
    //             case '+':
    //                 result = 0;

    //                 nums.forEach((i) => {
    //                     result = result + parseFloat(i);
    //                     console.log(result)
    //                 })
    //                 input.value = result;

    //                 break;
    //             case '*':
    //                 result = 1;

    //                 nums.forEach((i) => {
    //                     result = result * parseFloat(i)
    //                     console.log(result)
    //                 })
    //                 input.value = result;

    //                 break;
    //             case '-':
    //                 result = nums.reduce((acc, curr) => acc - curr);
    //                 input.value = result;

    //                 break;
    //             case '/':
    //                 result = nums[0];
    //                 for (let i = 1; i < nums.length; i++) {
    //                     result /= parseFloat(nums[i]);
    //                 }
    //                 input.value = result;
    //                 break;
    //         }
    //         break;
    //     default: input.value += key.value;

    // }
// problems is u can can't do deffrent op
// advantage is that we can do the same op differnt time
