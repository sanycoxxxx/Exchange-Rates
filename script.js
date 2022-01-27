'use script';

const inputMain = document.querySelector('#mainRateInput'),
inputSecond = document.querySelector('#secondRateInput');

// class exhange {
//     constructor
// }

inputMain.addEventListener('input', () => {
    const request = new XMLHttpRequest;
    request.open('GET','content.json', );
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputSecond.value = +inputMain.value / data.current.usd;
        }else {
            inputSecond.value = "Что то пошло не так";
        }
    });
    
})