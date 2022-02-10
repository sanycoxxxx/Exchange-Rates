/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/script.js":
/*!*******************************!*\
  !*** ./src/modules/script.js ***!
  \*******************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var c_openserver_domains_localhost_exchange_rates_src_modules_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modules/script.js */ "./src/modules/script.js");
/* harmony import */ var c_openserver_domains_localhost_exchange_rates_src_modules_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(c_openserver_domains_localhost_exchange_rates_src_modules_script_js__WEBPACK_IMPORTED_MODULE_0__);




c_openserver_domains_localhost_exchange_rates_src_modules_script_js__WEBPACK_IMPORTED_MODULE_0___default()();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map