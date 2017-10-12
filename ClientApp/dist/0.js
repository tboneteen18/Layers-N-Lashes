exports.ids = [0];
exports.modules = {

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_component__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */], pathMatch: 'full' }
                ])
            ]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
    }
    LazyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lazy-view',
            template: "\n    <h1>Lazy-Loaded Component!</h1>\n    <blockquote>\n      Fun fact: This was lazy-loaded :)\n      Check your Network tab!\n    </blockquote>\n  "
        })
    ], LazyComponent);
    return LazyComponent;
}());



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbnRhaW5lcnMvbGF6eS9sYXp5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbnRhaW5lcnMvbGF6eS9sYXp5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDTDtBQUNFO0FBVWpEO0lBQUE7SUFFQSxDQUFDO0lBRlksVUFBVTtRQVJ0QiwrREFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsc0VBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AscUVBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0VBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2lCQUMxRCxDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csVUFBVSxDQUV0QjtJQUFELGlCQUFDO0NBQUE7QUFGc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1CO0FBWTFDO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBVnpCLGdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsd0pBTVQ7U0FDRixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGF6eUNvbXBvbmVudCB9IGZyb20gJy4vbGF6eS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMYXp5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExhenlDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExhenlNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb250YWluZXJzL2xhenkvbGF6eS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF6eS12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDE+TGF6eS1Mb2FkZWQgQ29tcG9uZW50ITwvaDE+XG4gICAgPGJsb2NrcXVvdGU+XG4gICAgICBGdW4gZmFjdDogVGhpcyB3YXMgbGF6eS1sb2FkZWQgOilcbiAgICAgIENoZWNrIHlvdXIgTmV0d29yayB0YWIhXG4gICAgPC9ibG9ja3F1b3RlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExhenlDb21wb25lbnQgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb250YWluZXJzL2xhenkvbGF6eS5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9