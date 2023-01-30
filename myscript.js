// document.write('<h6>javaScript file is connected succesfully</h6>');
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');//added later
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
        // document.write(i);
    }
}
list[2].className = 'naveed';

var bcs ='red';