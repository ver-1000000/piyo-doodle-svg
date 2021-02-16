(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/piyo-doodle-svg/piyo-doodle-svg/src/main.ts */"zUnb");


/***/ }),

/***/ "0M9o":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller.service */ "LKvf");


const _c0 = ["app-player", ""];
class PlayerComponent {
    constructor(controller, cdr) {
        this.controller = controller;
        this.cdr = cdr;
        this.id = new Date().getTime();
        this.state = 'noop';
        this.x = 372;
        this.y = 372;
        this.walking = false;
        controller.command$.subscribe(command => this.move(command));
        // 特に意味はないが、ひよこを適当に動かす
        let recursiveFn;
        (recursiveFn = () => setTimeout(() => {
            this.move(['up', 'down', 'right', 'left'][+String(Math.random()).slice(2, 4) % 4]);
            recursiveFn();
        }, 1000))();
    }
    move(command) {
        requestAnimationFrame(() => {
            if (['noop', 'enter'].includes(command)) {
                if (this.walking) {
                    this.walking = false;
                    this.cdr.markForCheck();
                }
                return;
            }
            switch (command) {
                case 'left':
                    this.x -= this.x >= 60 ? 60 : 0;
                    break;
                case 'up':
                    this.y -= this.y >= 60 ? 60 : 0;
                    break;
                case 'right':
                    this.x += this.x <= 680 ? 60 : 0;
                    break;
                case 'down':
                    this.y += this.y <= 680 ? 60 : 0;
                    break;
            }
            this.walking = true;
            this.state = command;
            this.cdr.markForCheck();
        });
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controller_service__WEBPACK_IMPORTED_MODULE_1__["ControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["", "app-player", ""]], inputs: { id: "id" }, attrs: _c0, decls: 4, vars: 5, consts: [[3, "transitionend"], [3, "id"], ["x", "0", "y", "0", "width", "60", "height", "60"], [0, "xlink", "href", "assets/player.svg"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function PlayerComponent_Template__svg_g_transitionend_0_listener() { return ctx.walking = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clipPath", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "image", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", "translate(" + ctx.x + ", " + ctx.y + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "clip-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("clip-path", "url(#clip-", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("class", "", ctx.state, "", ctx.walking ? " walking" : "", "");
    } }, styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n  animation: appear 0.5s ease;\n  transform-origin: center;\n}\n[_nghost-%COMP%]   g[_ngcontent-%COMP%] {\n  transition: linear 0.2s all;\n}\n[_nghost-%COMP%]   image[_ngcontent-%COMP%] {\n  x: -60;\n  height: 60px;\n}\n[_nghost-%COMP%]   image.down[_ngcontent-%COMP%] {\n  x: -60;\n}\n[_nghost-%COMP%]   image.down.walking[_ngcontent-%COMP%] {\n  animation: down 0.4s step-start infinite;\n}\n[_nghost-%COMP%]   image.up[_ngcontent-%COMP%] {\n  x: -600;\n}\n[_nghost-%COMP%]   image.up.walking[_ngcontent-%COMP%] {\n  animation: up 0.4s step-start infinite;\n}\n[_nghost-%COMP%]   image.right[_ngcontent-%COMP%] {\n  x: -420;\n}\n[_nghost-%COMP%]   image.right.walking[_ngcontent-%COMP%] {\n  animation: right 0.4s step-start infinite;\n}\n[_nghost-%COMP%]   image.left[_ngcontent-%COMP%] {\n  x: -240;\n}\n[_nghost-%COMP%]   image.left.walking[_ngcontent-%COMP%] {\n  animation: left 0.4s step-start infinite;\n}\n@keyframes appear {\n  from {\n    transform: scale(2);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes down {\n  0% {\n    x: -60;\n  }\n  25% {\n    x: 0;\n  }\n  50% {\n    x: -60;\n  }\n  75% {\n    x: -120;\n  }\n  100% {\n    x: -60;\n  }\n}\n@keyframes left {\n  0% {\n    x: -240;\n  }\n  25% {\n    x: -180;\n  }\n  50% {\n    x: -240;\n  }\n  75% {\n    x: -300;\n  }\n  100% {\n    x: -240;\n  }\n}\n@keyframes right {\n  0% {\n    x: -420;\n  }\n  25% {\n    x: -360;\n  }\n  50% {\n    x: -420;\n  }\n  75% {\n    x: -480;\n  }\n  100% {\n    x: -420;\n  }\n}\n@keyframes up {\n  0% {\n    x: -600;\n  }\n  25% {\n    x: -540;\n  }\n  50% {\n    x: -600;\n  }\n  75% {\n    x: -660;\n  }\n  100% {\n    x: -600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0FBQ0o7QUFFRTtFQUNFLE1BQUE7RUFDQSxZQUFBO0FBQUo7QUFFTTtFQUNFLE1BRmdCO0FBRXhCO0FBQ1E7RUFDRSx3Q0FBQTtBQUNWO0FBSk07RUFDRSxPQUZnQjtBQVF4QjtBQUxRO0VBQ0Usc0NBQUE7QUFPVjtBQVZNO0VBQ0UsT0FGZ0I7QUFjeEI7QUFYUTtFQUNFLHlDQUFBO0FBYVY7QUFoQk07RUFDRSxPQUZnQjtBQW9CeEI7QUFqQlE7RUFDRSx3Q0FBQTtBQW1CVjtBQVpBO0VBQW9CO0lBQU8sbUJBQUE7SUFBcUIsVUFBQTtFQWtCOUM7RUFsQjREO0lBQUssbUJBQUE7SUFBcUIsVUFBQTtFQXNCdEY7QUFDRjtBQXJCQTtFQUNFO0lBQU8sTUFBQTtFQXdCUDtFQXZCQTtJQUFPLElBQUE7RUEwQlA7RUF6QkE7SUFBUSxNQUFBO0VBNEJSO0VBM0JBO0lBQU0sT0FBQTtFQThCTjtFQTdCQTtJQUFTLE1BQUE7RUFnQ1Q7QUFDRjtBQTlCQTtFQUNFO0lBQU8sT0FBQTtFQWlDUDtFQWhDQTtJQUFPLE9BQUE7RUFtQ1A7RUFsQ0E7SUFBUSxPQUFBO0VBcUNSO0VBcENBO0lBQU0sT0FBQTtFQXVDTjtFQXRDQTtJQUFTLE9BQUE7RUF5Q1Q7QUFDRjtBQXZDQTtFQUNFO0lBQU8sT0FBQTtFQTBDUDtFQXpDQTtJQUFPLE9BQUE7RUE0Q1A7RUEzQ0E7SUFBUSxPQUFBO0VBOENSO0VBN0NBO0lBQU0sT0FBQTtFQWdETjtFQS9DQTtJQUFTLE9BQUE7RUFrRFQ7QUFDRjtBQWhEQTtFQUNFO0lBQU8sT0FBQTtFQW1EUDtFQWxEQTtJQUFPLE9BQUE7RUFxRFA7RUFwREE7SUFBUSxPQUFBO0VBdURSO0VBdERBO0lBQU0sT0FBQTtFQXlETjtFQXhEQTtJQUFTLE9BQUE7RUEyRFQ7QUFDRiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBhcHBlYXIgLjVzIGVhc2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcblxuICBnIHtcbiAgICB0cmFuc2l0aW9uOiBsaW5lYXIgLjJzIGFsbDtcbiAgfVxuXG4gIGltYWdlIHtcbiAgICB4OiAtNjA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIEBlYWNoICRrZXksICR2YWwgaW4gKGRvd246IC02MCwgdXA6IC02MDAsIHJpZ2h0OiAtNDIwLCBsZWZ0OiAtMjQwKSB7XG4gICAgICAmLiN7JGtleX0ge1xuICAgICAgICB4OiAkdmFsO1xuICAgICAgICAmLndhbGtpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogJGtleSAuNHMgc3RlcC1zdGFydCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhciB7IGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDIpOyBvcGFjaXR5OiAwOyB9IHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZG93biB7XG4gIDAlICAgeyB4OiAtNjAgfVxuICAyNSUgIHsgeDogMCB9XG4gIDUwJSAgIHsgeDogLTYwIH1cbiAgNzUlIHsgeDogLTEyMCB9XG4gIDEwMCUgICB7IHg6IC02MCB9XG59XG5cbkBrZXlmcmFtZXMgbGVmdCB7XG4gIDAlICAgeyB4OiAtMjQwIH1cbiAgMjUlICB7IHg6IC0xODAgfVxuICA1MCUgICB7IHg6IC0yNDAgfVxuICA3NSUgeyB4OiAtMzAwIH1cbiAgMTAwJSAgIHsgeDogLTI0MCB9XG59XG5cbkBrZXlmcmFtZXMgcmlnaHQge1xuICAwJSAgIHsgeDogLTQyMCB9XG4gIDI1JSAgeyB4OiAtMzYwIH1cbiAgNTAlICAgeyB4OiAtNDIwIH1cbiAgNzUlIHsgeDogLTQ4MCB9XG4gIDEwMCUgICB7IHg6IC00MjAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVwIHtcbiAgMCUgICB7IHg6IC02MDAgfVxuICAyNSUgIHsgeDogLTU0MCB9XG4gIDUwJSAgIHsgeDogLTYwMCB9XG4gIDc1JSB7IHg6IC02NjAgfVxuICAxMDAlICAgeyB4OiAtNjAwIH1cbn1cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LKvf":
/*!***************************************!*\
  !*** ./src/app/controller.service.ts ***!
  \***************************************/
/*! exports provided: ControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerService", function() { return ControllerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * キー入力を`this.command$`オブザーバブルとして提供するサービス。
 */
class ControllerService {
    constructor() {
        this.command$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('noop');
        const filterFn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => [13, 32, 37, 38, 39, 40].includes(e.keyCode));
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'keydown'), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'keyup'));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(events$.pipe(filterFn), (_, e) => e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(e => e.preventDefault()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(e => e.type === 'keyup' ? 'noop' : KEYMAP[e.keyCode])).subscribe((command) => this.command$.next(command));
    }
}
ControllerService.ɵfac = function ControllerService_Factory(t) { return new (t || ControllerService)(); };
ControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ControllerService, factory: ControllerService.ɵfac, providedIn: 'root' });
const KEYMAP = {
    13: 'enter',
    32: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.service */ "LKvf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ "0M9o");




function AppComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent__svg_g_1_Template__svg_g_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const id_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.remove(id_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", id_r1);
} }
class AppComponent {
    constructor(cdr, controller) {
        this.cdr = cdr;
        this.controller = controller;
        this.ids = [0, 1, 2, 3, 4, 5];
        controller.command$.subscribe(command => command === 'enter' && this.ids.push(new Date().getTime()) && this.cdr.markForCheck());
    }
    remove(id) {
        this.ids.splice(this.ids.indexOf(id), 1);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controller_service__WEBPACK_IMPORTED_MODULE_1__["ControllerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["viewBox", "0 0 800 800"], ["app-player", "", 3, "id", "click", 4, "ngFor", "ngForOf"], ["app-player", "", 3, "id", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent__svg_g_1_Template, 1, 1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  height: 100vh;\n  background: #ffff92;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  background: black;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjkyO1xuICBzdmcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.component */ "0M9o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map