/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ card),\n/* harmony export */   priorityList: () => (/* binding */ priorityList),\n/* harmony export */   taskList: () => (/* binding */ taskList),\n/* harmony export */   titleList: () => (/* binding */ titleList)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\nfunction card(){\r\n    const addButton = document.getElementById('AddButton');\r\n    let form = null;\r\n    let addActive = false;\r\n    \r\n\r\n\r\n    addButton.addEventListener('click', function newCard() {\r\n        addActive = !addActive;\r\n\r\n        if(!form){\r\n            form = document.createElement('form');\r\n            form.className = 'form-pop';\r\n            form.style.display = 'none';\r\n\r\n            const title = document.createElement('input');\r\n            title.type = 'text';\r\n            title.name = 'Title';\r\n            title.id = 'titleName';\r\n            title.placeholder = 'Title';\r\n            title.style.marginBottom = '10px';\r\n            title.style.width = '90%';\r\n            title.style.padding = '5px';\r\n            title.style.borderRadius = '5px';\r\n\r\n            var priorityContainer = [\r\n                {name: 'priorityHigh' , label: \"High priority\"},\r\n                {name: 'priorityMedium' , label: \"Meduim priority\"},\r\n                {name: 'priorityLow' , label: \"Low priority\"}\r\n\r\n            ];\r\n            const priorityWrap = document.createElement('div');\r\n            priorityWrap.style.marginBottom = '10px';\r\n\r\n            priorityContainer.forEach((item)=>{\r\n                const radio = document.createElement('input');\r\n                radio.type = 'radio';\r\n                radio.name = 'priorityradio';\r\n                radio.value = item.name;\r\n                radio.id = 'priorityName';\r\n                \r\n                \r\n                const radioLabel = document.createElement(\"label\");\r\n                radioLabel.textContent = item.label;\r\n                radioLabel.style.marginBottom = '10px';\r\n                radioLabel.style.marginLeft = '5px'; \r\n                radioLabel.style.marginRight = '15px';\r\n                radioLabel.style.width = '80%';\r\n\r\n                const priorityGroup = document.createElement('div'); \r\n                priorityGroup.style.display = 'inline-block';\r\n                priorityGroup.style.marginRight = '10px';\r\n\r\n\r\n                priorityGroup.appendChild(radio);\r\n                priorityGroup.appendChild(radioLabel);\r\n                priorityWrap.appendChild(priorityGroup);\r\n\r\n            })\r\n\r\n\r\n            var task = document.createElement('Textarea');\r\n            task.name = 'task';\r\n            task.id = 'taskId';\r\n            task.placeholder = \"Enter the task\";\r\n            task.style.width = '90%';\r\n            task.style.height = '100px';\r\n            task.style.marginBottom = '10px';\r\n            task.style.borderRadius = '5px';\r\n\r\n            const buttonSubmit = document.createElement('button');\r\n            buttonSubmit.textContent = \"Submit\";\r\n            buttonSubmit.style.marginLeft = '25%';\r\n            buttonSubmit.style.display = 'block';\r\n            buttonSubmit.style.width = '45%';\r\n            buttonSubmit.style.borderRadius = '20px';\r\n            buttonSubmit.addEventListener('click', (e) =>{\r\n                e.preventDefault();\r\n                (0,_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            });\r\n            \r\n\r\n\r\n            form.appendChild(title);\r\n            form.appendChild(priorityWrap);\r\n            form.appendChild(task);\r\n            form.appendChild(buttonSubmit);\r\n            \r\n\r\n            \r\n            const card = document.getElementById('task-container') || document.body;\r\n\r\n            card.appendChild(form);\r\n        }\r\n        if (addActive){\r\n            addButton.textContent = 'close form';\r\n            form.style.display = 'block';\r\n        }else{\r\n            addButton.textContent = 'add list';\r\n            form.style.display = 'none';\r\n        }\r\n            \r\n\r\n            \r\n\r\n\r\n    });\r\n\r\n}\r\n\r\n\r\nfunction titleList(){\r\n    const titleText = document.getElementById('titleName');\r\n    return titleText ? titleText.value : null;\r\n}\r\n\r\nfunction priorityList(){\r\n    const priorityText = document.querySelector('input[name=\"priorityradio\"]:checked')\r\n    return priorityText ? priorityText.value : null;\r\n}\r\n\r\nfunction taskList(){\r\n    const taskText = document.getElementById('taskId');\r\n    return taskText ? taskText.value : null;\r\n}\n\n//# sourceURL=webpack://todolist/./src/card.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\r\n\r\n\r\nconst colors = [\r\n    '#4AF4D9', '#30DECA', '#A3D6C8', '#A3F8E2', '#36D4CE',\r\n    '#D44354', '#E5ABD9', '#87F78A', '#F1A6D2', '#ECB2CC',\r\n    '#E2385A', '#AEF9FC', '#95FBA0', '#48D1C6', '#BAD7FF',\r\n    '#D83254', '#4AF0C3', '#FABBD3', '#F23E50', '#9CF2FF',\r\n    '#98E8BA', '#A1DCCA', '#DE3362', '#A2F395', '#FDFFD9',\r\n    '#E58ED8', '#9AEF91', '#7786E6', '#ED97DE', '#CBBDFF',\r\n    '#A8EEC0', '#D5A3CD', '#DF94CD', '#91E59A', '#AFDCFB',\r\n    '#DBACE0', '#AAD9C3', '#6A93DD', '#8FDDA4', '#8BD7AB',\r\n    '#3BDBE1', '#CDD5FF', '#A3FFFE', '#B1F6FD', '#FFFACD', \r\n    '#EBBECB', '#97F498', '#CCA9E5', '#D8C1EB', '#FFFFD4',\r\n    '#FFF0DD', '#EBB7CD', '#FFBCC5', '#C1C7FF', '#F7B5D3',\r\n    '#F4ABC2', '#CEA4EB', '#E13261', '#FFF5DE', '#8CF5C6'\r\n];\r\n\r\n\r\nfunction displayList(){\r\n    const h1 = document.createElement(\"h1\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const h3 = document.createElement(\"h3\");\r\n    const titleT = (0,_card__WEBPACK_IMPORTED_MODULE_0__.titleList)();\r\n    const priorityT = (0,_card__WEBPACK_IMPORTED_MODULE_0__.priorityList)();\r\n    const taskT = (0,_card__WEBPACK_IMPORTED_MODULE_0__.taskList)();\r\n    h1.textContent = titleT;\r\n    h3.textContent = priorityT;\r\n    h2.textContent = taskT;\r\n\r\n    const wrap = document.createElement(\"div\");\r\n    wrap.className = \"card-wrap\";\r\n    const editButton = document.createElement(\"button\");\r\n    editButton.textContent = \"Edit\";\r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.textContent = \"Delete\";\r\n\r\n    editButton.addEventListener(\"click\", () => editButtonHandler(wrap, h1,h3,h2,editButton));\r\n    deleteButton.addEventListener(\"click\", deleteButtonHandler);\r\n\r\n    let i = Math.floor(Math.random() * 50);\r\n    wrap.style.background = colors[i];\r\n    wrap.appendChild(h1);\r\n    wrap.appendChild(h3);\r\n    wrap.appendChild(h2);\r\n    wrap.appendChild(editButton);\r\n    wrap.appendChild(deleteButton);\r\n    const listContainer = document.getElementById('list-container');\r\n\r\n    listContainer.appendChild(wrap);\r\n\r\n}\r\n\r\n\r\nfunction editButtonHandler(wrap , titleEle, titlePriority, titleTask,editButton){\r\n  if(editButton.textContent == 'Edit'){\r\n    const eleTitle = document.createElement(\"input\");\r\n    eleTitle.type = \"text\";\r\n    eleTitle.value = titleEle.textContent;\r\n    eleTitle.style.marginBottom = '10px';\r\n    eleTitle.style.width = '90%';\r\n    eleTitle.style.padding = '5px';\r\n    eleTitle.style.borderRadius = '5px';\r\n\r\n    const taskEle = document.createElement(\"textarea\");\r\n    taskEle.value = titleTask.textContent;\r\n    \r\n\r\n\r\n    const priority = document.createElement(\"select\");\r\n    [\"priorityHigh\",\"prioritymedium\", \"priorityLow\"].forEach((optionPriority) =>{\r\n        const options = document.createElement(\"option\");\r\n        options.textContent = optionPriority;\r\n        options.value =  optionPriority;\r\n        options.selected = optionPriority === titlePriority.textContent;\r\n        priority.appendChild(options);\r\n\r\n    })\r\n\r\n    wrap.replaceChild(eleTitle, titleEle);\r\n    wrap.replaceChild(priority , titlePriority);\r\n    wrap.replaceChild(taskEle , titleTask)\r\n\r\n    editButton.textContent = \"Save\";\r\n\r\n  }\r\n  else{\r\n        const inputTitle = wrap.querySelector(\"input\");\r\n        const inputPriority = wrap.querySelector(\"select\");\r\n        const inputTask = wrap.querySelector(\"textarea\");\r\n\r\n        const newTitle = document.createElement(\"h1\");\r\n        newTitle.textContent = inputTitle.value;\r\n\r\n        const newPriority = document.createElement(\"h3\");\r\n        newPriority.textContent = inputPriority.value;\r\n\r\n        const newTask = document.createElement(\"h2\");\r\n        newTask.textContent = inputTask.value;\r\n\r\n        if (wrap.contains(inputTitle)) {\r\n            wrap.replaceChild(newTitle, inputTitle);\r\n        }\r\n        if (wrap.contains(inputPriority)) {\r\n            wrap.replaceChild(newPriority, inputPriority);\r\n        }\r\n        if (wrap.contains(inputTask)) {\r\n            wrap.replaceChild(newTask, inputTask);\r\n        }\r\n\r\n        editButton.textContent = \"Edit\";\r\n  }\r\n}\r\n\r\nfunction deleteButtonHandler(e){\r\n    const  card = e.target.closest('.card-wrap');\r\n    if(card){\r\n        card.remove();\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const app = document.getElementById('app');\r\n    app.innerHTML = '<h1>Todo List</h1>';\r\n\r\n    // Initialize the card functionality\r\n    (0,_card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;