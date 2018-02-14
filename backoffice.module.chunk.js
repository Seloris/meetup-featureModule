webpackJsonp(["backoffice.module"],{

/***/ "../../../../../src/app/modules/backoffice/backoffice.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>BACKOFFICE</h1>\r\n<nav mat-tab-nav-bar>\r\n    <a mat-tab-link [routerLink]=\"['/backoffice/page1']\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\r\n        Page 1\r\n    </a>\r\n    <a mat-tab-link [routerLink]=\"['/backoffice/page2']\" routerLinkActive #rla2=\"routerLinkActive\" [active]=\"rla2.isActive\">\r\n        Page 2\r\n    </a>\r\n</nav>\r\n<div class=\"content\">\r\n    <router-outlet>\r\n    </router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/backoffice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 100%;\n  border: solid 2px #4b9bb8;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  :host .content {\n    padding: 6px;\n    -ms-flex: 1;\n        flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/backoffice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackOfficeComponent = /** @class */ (function () {
    function BackOfficeComponent() {
    }
    BackOfficeComponent.prototype.ngOnInit = function () {
    };
    BackOfficeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice',
            template: __webpack_require__("../../../../../src/app/modules/backoffice/backoffice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/backoffice/backoffice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackOfficeComponent);
    return BackOfficeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/backoffice/backoffice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeModule", function() { return BackOfficeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/app/modules/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backoffice_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/backoffice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backoffice_routing__ = __webpack_require__("../../../../../src/app/modules/backoffice/backoffice.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_backoffice_page1_backoffice_page1_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_backoffice_page2_backoffice_page2_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BackOfficeModule = /** @class */ (function () {
    function BackOfficeModule() {
    }
    BackOfficeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__backoffice_routing__["a" /* backOfficeRouting */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatTabsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__backoffice_component__["a" /* BackOfficeComponent */], __WEBPACK_IMPORTED_MODULE_5__components_backoffice_page1_backoffice_page1_component__["a" /* BackofficePage1Component */], __WEBPACK_IMPORTED_MODULE_6__components_backoffice_page2_backoffice_page2_component__["a" /* BackofficePage2Component */]]
        })
    ], BackOfficeModule);
    return BackOfficeModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/backoffice/backoffice.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backOfficeRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/backoffice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_backoffice_page1_backoffice_page1_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_backoffice_page2_backoffice_page2_component__ = __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__backoffice_component__["a" /* BackOfficeComponent */],
        children: [
            { path: '', redirectTo: 'page1', pathMatch: 'full' },
            { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_2__components_backoffice_page1_backoffice_page1_component__["a" /* BackofficePage1Component */] },
            { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_3__components_backoffice_page2_backoffice_page2_component__["a" /* BackofficePage2Component */] }
        ]
    }
];
var backOfficeRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user [user]=\"user\"></app-user>"

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackofficePage1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_user_service__ = __webpack_require__("../../../../../src/app/modules/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackofficePage1Component = /** @class */ (function () {
    function BackofficePage1Component(userService) {
        this.userService = userService;
    }
    BackofficePage1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (userResult) {
            _this.user = userResult;
        });
    };
    BackofficePage1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-page1',
            template: __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page1/backoffice-page1.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_user_service__["a" /* UserService */]])
    ], BackofficePage1Component);
    return BackofficePage1Component;
}());



/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.html":
/***/ (function(module, exports) {

module.exports = "BackOffice Page 2 !"

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackofficePage2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackofficePage2Component = /** @class */ (function () {
    function BackofficePage2Component() {
    }
    BackofficePage2Component.prototype.ngOnInit = function () {
    };
    BackofficePage2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-page2',
            template: __webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/backoffice/components/backoffice-page2/backoffice-page2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackofficePage2Component);
    return BackofficePage2Component;
}());



/***/ })

});
//# sourceMappingURL=backoffice.module.chunk.js.map