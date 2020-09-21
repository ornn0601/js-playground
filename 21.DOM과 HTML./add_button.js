// console.log("button js");

// var test = document.getElementById('test');
// var menu = document.createElement('ul');
// var item1 = document.createElement('li');

// item1.innerHTML = "치킨";

// menu.appendChild(item1);

// var item2 = document.createElement('li');
// item2.innerHTML = "짜장면";

// menu.appendChild(item2);
// test.appendChild(menu);

// btn

var readInput = function () {
    var input = document.getElementById('input1');
    console.log(input.value);
}

var btn2 = document.createElement('button');
btn2.innerHTML = "확인2";
btn2.onClick = readInput;

var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);



// btn1.onclick = function () {
//     console.log("click");
//     var input = document.getElementById('inpyt1');
// }