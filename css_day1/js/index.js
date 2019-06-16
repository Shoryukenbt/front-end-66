console.log(2222)
function changeStyle () {
    console.log(1111)
    const ele = document.getElementsByTagName('p')[0];
        if (ele.getAttribute('class') === 'title') {
         ele.setAttribute('class', 'title active');
        } else {
         ele.setAttribute('class', 'title');
    }
}