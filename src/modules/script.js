'use script';

function cons () {
    console.log('Hello Webpack');
};

module.exports = cons;


const inputMain = document.querySelector('#mainRateInput'),
    inputSecond = document.querySelector('#secondRateInput'),
    massage = {
        loading: "Загрузка",
        success: "Спасибо скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };



// class exhange {
//     constructor
// }

inputMain.addEventListener('input', () => {
    const request = new XMLHttpRequest;
    request.open('GET', 'js/content.json', );
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputSecond.value = +inputMain.value / data.current.usd;
        } else {
            inputSecond.value = "Что то пошло не так";
        }
    });

});

function showTime () {
    const now = new Date();

    console.log(now);
    
    const year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds');
    
    console.log(day)
    
    function updateClock() {
        setInterval(showTime, 1000)
    }
    
    year.textContent = now.getFullYear();
    month.textContent = now.getMonth() + 1;
    day.textContent = now.getDate();
    hours.textContent = now.getHours();
    minutes.textContent = now.getMinutes();
    seconds.textContent = now.getSeconds();

}


function updateClock() {
    setInterval(showTime, 1000)
};

updateClock();


const forms = document.querySelectorAll('form');

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMassage = document.createElement('div');
        statusMassage.classList.add('status');
        statusMassage.textContent = massage.loading;
        form.append(statusMassage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'aplication/json');

        const formData = new FormData(form);

        const object = {}
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        request.send(json);


        // request.send(formData);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMassage.textContent = massage.success;
                form.reset();
                setTimeout(() => {
                    statusMassage.remove();
                }, 2000)
            } else {
                statusMassage.textContent = massage.failure;
            }

        });


    })
};

forms.forEach(item => {
    postData(item);
})