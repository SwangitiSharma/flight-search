(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: header;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    padding: 20px 0px 20px 20px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n    min-height: 20px;\r\n    background: #1976d2;\r\n    color:white;\r\n    text-transform: uppercase;\r\n}\r\n.header h1{\r\ndisplay: inline;\r\nfont-size: 25px;\r\n}\r\ndiv.search-box{\r\n  border:1px solid;\r\n  height: 100%\r\n}\r\ndiv.flight-card{\r\n  /* margin:30px; */\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 2;\r\n  grid-area: flight-card;\r\n  width:100%;\r\n  align-content: center;\r\n  background-size:contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transition: background-image 0.5s linear;\r\n  -webkit-transition: background-image 0.5s linear;\r\n  \r\n}\r\n/* WHILE SEARCHING FOR COMPONENTS */\r\n.loading{\r\n  background-image: url('Blocks.svg');\r\n  background-size:contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\ndiv.info-box{\r\n  /* margin:30px; */\r\n  width:100%;\r\n  align-content: center;\r\n}\r\n.wrapper{\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \"header header\"\r\n                         \"search-box flight-card\"\r\n                         \"footer footer\";\r\n  \r\n    -ms-grid-columns: 25% 1fr;\r\n  \r\n    grid-template-columns: 25% 1fr;\r\n  \r\n    -ms-grid-rows: 60px \r\n              1fr \r\n              0px;\r\n  \r\n    grid-template-rows: 60px \r\n              1fr \r\n              0px;\r\n  \r\n    min-height: 100vh;\r\n}\r\n@media screen and (max-width: 600px) {\r\n\t.wrapper {\r\n\t\t    grid-template-areas: \"header\"\r\n\t\t                     \"search-box\"\r\n\t\t                     \"info-box\"\r\n\t\t                     \"flight-card\"\r\n\t\t                     \"footer\";\r\n\r\n\t\t-ms-grid-columns: 100%;\r\n\r\n\t\tgrid-template-columns: 100%;\r\n\t\t-ms-grid-rows: 70px \r\n\t\t\t\t\t\t\t400px \r\n\t\t\t\t\t\t\t0.1fr\r\n\t\t\t\t\t\t\t0.5fr \r\n              30px;\r\n\t\tgrid-template-rows: 70px \r\n\t\t\t\t\t\t\t400px \r\n\t\t\t\t\t\t\t0.1fr\r\n\t\t\t\t\t\t\t0.5fr \r\n              30px;\r\n    overflow: scroll;\r\n  }\r\n}\r\n/* FLying Animation */\r\ndiv.toony-flight{\r\n  position: fixed;\r\n  font-size: 300px;\r\n  top:30%;\r\n  left: -1100px;\r\n  visibility: hidden;\r\n  display: none;\r\n  color:#1976D2;\r\n}\r\n.fly{\r\n  visibility: visible !important;\r\n  display: block !important;\r\n  animation-name: flyHigh;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-name: flyHigh; /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 3s;\r\n}\r\n@-webkit-keyframes flyHigh {\r\n  0%   {left: 0px;}\r\n  \r\n  100% {left: 1500px;}\r\n}\r\n@keyframes flyHigh {\r\n  0%   {left: 0px;}\r\n  \r\n  100% {left: 1500px;}\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\"><h1>{{title}}</h1></div>\n  <div class=\"search-box\">\n    <search-box (onSearchResults)=\"updateInputParams($event)\" (loadingComponent)=\"swapLoading($event)\"></search-box>\n  </div>\n \n  <div class=\"flight-card\" [ngClass]=\"{'loading':loading}\">\n    <flight-details-card [searchResults]=\"searchResults\" (fly)=\"updateFlying($event)\"></flight-details-card>\n  </div>\n</div>\n<div class=\"toony-flight\" [ngClass]=\"{'fly':fly}\" (animationend)=\"fly=false\"><span>&#9992;</span></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Flight Search Engine';
        this.loading = false;
        this.fly = false;
        this.bookingInfo = {
            originCity: '',
            destinationCity: '',
            departureDate: '',
            returnDate: '',
            passengers: 1,
            oneway: true,
            refine: 1000
        };
        this.searchResults = {
            oneWayFlights: [],
            returningFlights: [],
            oneway: true,
            bookingInfo: this.bookingInfo
        };
    }
    /**
     * Listener for EventEmitter on child pages.
     * @param searchResults
     */
    AppComponent.prototype.updateInputParams = function (searchResults) {
        console.log('Ok got that emitted value mate', searchResults);
        this.bookingInfo = searchResults.bookingInfo;
        this.searchResults = searchResults;
    };
    AppComponent.prototype.swapLoading = function (loading) {
        console.log("Swapping", loading);
        this.loading = loading;
    };
    /**
     * The easter egg animation for
     * adding fly class to element
     * @param fly
     */
    AppComponent.prototype.updateFlying = function (fly) {
        this.fly = fly;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: providers, imports, declarations, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imports", function() { return imports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search-box/search-box.component */ "./src/components/search-box/search-box.component.ts");
/* harmony import */ var _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/info-box/info-box.component */ "./src/components/info-box/info-box.component.ts");
/* harmony import */ var _components_flight_details_card_flight_details_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/flight-details-card/flight-details-card.component */ "./src/components/flight-details-card/flight-details-card.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/search.service */ "./src/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//basic Application

// used components



// created services

function providers() {
    return [_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"]];
}
function imports() {
    return [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
    ];
}
function declarations() {
    return [
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_5__["SearchBoxComponent"],
        _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_6__["InfoBoxComponent"],
        _components_flight_details_card_flight_details_card_component__WEBPACK_IMPORTED_MODULE_7__["FlightDetailsCardComponent"]
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: declarations(),
            imports: imports(),
            providers: providers(),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/flight-details-card/flight-details-card.component.css":
/*!******************************************************************************!*\
  !*** ./src/components/flight-details-card/flight-details-card.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.onwardDetails, .returnDetails, .booking{\r\n    padding:5px;\r\n    display: inline-block;\r\n    \r\n}\r\n.onwardDetails h1, .returnDetails h1{\r\n    color:rgb(241, 87, 87);\r\n    margin:0px !important;\r\n}\r\ndiv.booking{\r\n    display: -ms-inline-grid;\r\n    display: inline-block;\r\n    float: right;\r\n}\r\n@media screen and (max-width: 600px){\r\n    div.booking{\r\n        float: none;\r\n    }\r\n}\r\ndiv.bookingImage{\r\n    height: 80px;\r\n     background: url('bookNow.jpg'); \r\n    background-size:cover;\r\n}\r\n@media screen and (max-width: 600px){\r\n    .booking{\r\n        display: -ms-inline-grid;\r\n        display: inline-grid;\r\n        float: none;\r\n    }   \r\n}\r\n.booking button{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    width: 180px;\r\n    margin-top: 15px;\r\n    background: rgb(47, 210, 25);\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.onwardDetails h1,onwardDetails h2{\r\nmargin:0.5em;\r\n}\r\n.flightCards {\r\n    /* Add shadows to create the \"card\" effect */\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width:80%;\r\n    padding:20px;\r\n    margin:auto;\r\n    margin-top:10px;\r\n    background:lavender;\r\n    line-height: 1.5;\r\n}\r\n/* On mouse-over, add a deeper shadow */\r\n.flightCards:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n/* No flights case */\r\ndiv.noflights{\r\nfont-size: 16px;\r\npadding: 10px;\r\nwidth: 180px;\r\nmargin: auto;\r\nbackground: #f1f1f1;\r\ncolor:black;\r\nposition: relative;\r\ntop:100px;\r\n}\r\ndiv.idle{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    margin: auto;\r\n    background: lightblue;\r\n    color:grey;\r\n    position: relative;\r\n    /* top:100px; */\r\n    box-shadow: border;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/components/flight-details-card/flight-details-card.component.html":
/*!*******************************************************************************!*\
  !*** ./src/components/flight-details-card/flight-details-card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-box\" *ngIf=\"searchResults.bookingInfo.destinationCity && searchResults!==undefined\">\n  <info-box [queriedData]=\"searchResults.bookingInfo\"></info-box>\n</div>\n\n<div *ngFor=\"let flight of searchResults.oneWayFlights;let i=index\">\n  <div class=\"flightCards\" *ngIf=\"searchResults.oneway\">\n    <div class=\"onwardDetails\">\n      <h1>Rs. {{flight.amount}}</h1>\n      <sub>{{flight.flightNo}}</sub>\n      <h4>{{flight.origin.toUpperCase()}}&nbsp;>>&nbsp;{{flight.destination.toUpperCase()}}</h4>\n      <h4>Depart:{{flight.time.depart|date:'medium'}}</h4>\n      <h4>Arrives:{{flight.time.arrive|date:'medium'}}</h4>\n    </div>\n    <div class=\"booking\">\n      <div class=\"bookingImage\"></div>\n      <button (click)=\"bookThisFlight($event, i)\">Book this Flight</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"flightCards\" *ngFor=\"let flight of searchResults.returningFlights;let i=index\">\n  <div *ngIf=\"!searchResults.bookingInfo.oneway && searchResults.returningFlights[i] !== undefined && searchResults.oneWayFlights[i]!==undefined\">\n    <div class=\"onwardDetails\">\n      <h1>Rs. {{searchResults.oneWayFlights[i].amount}}</h1>\n      <sub>{{searchResults.oneWayFlights[i].flightNo}}</sub>\n      <h4>{{searchResults.oneWayFlights[i].origin.toUpperCase()}}&nbsp;>>&nbsp;{{searchResults.oneWayFlights[i].destination.toUpperCase()}}</h4>\n      <h4>Depart:{{searchResults.oneWayFlights[i].time.depart|date:'medium'}}</h4>\n      <h4>Arrives:{{searchResults.oneWayFlights[i].time.arrive|date:'medium'}}</h4>\n    </div>\n    <div class=\"returnDetails\">\n      <div *ngIf=\"searchResults.returningFlights.length>0 && searchResults.returningFlights[i] !== undefined && searchResults.oneWayFlights[i]!==undefined\">\n        <h1>Rs. {{flight.amount}}</h1>\n        <sub>{{flight.flightNo}}</sub>\n        <h4>{{flight.origin.toUpperCase()}}&nbsp;>>&nbsp;{{flight.destination.toUpperCase()}}</h4>\n        <h4>Depart:{{flight.time.depart|date:'medium' }}</h4>\n        <h4>Arrives:{{flight.time.arrive |date:'medium'}}</h4>\n      </div>\n    </div>\n    <div class=\"booking\">\n      <div class=\"bookingImage\"></div>\n      <button (click)=\"bookThisFlight($event, i)\">Book this Flight</button>\n    </div>\n  </div>\n</div>\n\n<!-- No Flight -->\n<div class=\"noflights\" *ngIf=\"searchResults.oneWayFlights.length==0 && searchResults.bookingInfo.destinationCity\">\n  <p>No Flight Found.Try with another combination.</p>\n</div>\n\n"

/***/ }),

/***/ "./src/components/flight-details-card/flight-details-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/flight-details-card/flight-details-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FlightDetailsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightDetailsCardComponent", function() { return FlightDetailsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightDetailsCardComponent = /** @class */ (function () {
    function FlightDetailsCardComponent() {
        this.fly = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bookingIcons = "./assets/img/bookNow.jpg",
            console.warn("results", this.searchResults);
    }
    FlightDetailsCardComponent.prototype.ngOnInit = function () {
    };
    FlightDetailsCardComponent.prototype.ngOnChanges = function () {
        console.log("", this.searchResults);
    };
    /**
     * Click handler for book button
     * @param e
     * @param index
     */
    FlightDetailsCardComponent.prototype.bookThisFlight = function (e, index) {
        console.log(e, index);
        this.fly.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightDetailsCardComponent.prototype, "searchResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlightDetailsCardComponent.prototype, "fly", void 0);
    FlightDetailsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flight-details-card',
            template: __webpack_require__(/*! ./flight-details-card.component.html */ "./src/components/flight-details-card/flight-details-card.component.html"),
            styles: [__webpack_require__(/*! ./flight-details-card.component.css */ "./src/components/flight-details-card/flight-details-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlightDetailsCardComponent);
    return FlightDetailsCardComponent;
}());



/***/ }),

/***/ "./src/components/info-box/info-box.component.css":
/*!********************************************************!*\
  !*** ./src/components/info-box/info-box.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs{\r\n    width:100%;\r\n    background: #f1f1f1;\r\n    color:black;\r\n}\r\n.breadcrumbs h3{\r\n    display: inline-block;\r\n    padding: 12px;\r\n\r\n}\r\n.breadcrumbs p{\r\n    padding: 2px;\r\n}\r\n.flightTimingInfo{\r\n    float: right;\r\n    display: inline;\r\n    margin-right: 3px;\r\n}\r\n@media screen and (max-width: 600px){\r\n   .flightTimingInfo{\r\n    float:none;\r\n   }\r\n}"

/***/ }),

/***/ "./src/components/info-box/info-box.component.html":
/*!*********************************************************!*\
  !*** ./src/components/info-box/info-box.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n    <h3 *ngIf=\"queriedData.oneway\">{{queriedData.originCity.toUpperCase()}}&nbsp;<span>&#9992;</span>&nbsp;{{queriedData.destinationCity.toUpperCase()}}</h3>\n    <h3 *ngIf=\"!queriedData.oneway\">{{queriedData.originCity.toUpperCase()}}&nbsp;<span>&#9992;</span>&nbsp;{{queriedData.destinationCity.toUpperCase()}}&nbsp;<span>&#9992;</span>&nbsp;{{queriedData.originCity.toUpperCase()}}</h3> \n    <div class=\"flightTimingInfo\">\n        <p>Departs:{{queriedData.departureDate|date}}</p>\n        <p *ngIf=\"!queriedData.oneway\">Returns:{{queriedData.returnDate |date}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/components/info-box/info-box.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/info-box/info-box.component.ts ***!
  \*******************************************************/
/*! exports provided: InfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent() {
    }
    InfoBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBoxComponent.prototype, "queriedData", void 0);
    InfoBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'info-box',
            template: __webpack_require__(/*! ./info-box.component.html */ "./src/components/info-box/info-box.component.html"),
            styles: [__webpack_require__(/*! ./info-box.component.css */ "./src/components/info-box/info-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoBoxComponent);
    return InfoBoxComponent;
}());



/***/ }),

/***/ "./src/components/search-box/search-box.component.css":
/*!************************************************************!*\
  !*** ./src/components/search-box/search-box.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div ul{\r\n    color:white;\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n\r\n}\r\n\r\ndiv ul li{\r\npadding:10px;\r\n}\r\n\r\ndiv.suggestion ul:after{\r\n    text-align: center;\r\n    width:200px;\r\n    position: absolute;\r\n    margin-left:0.3em;\r\n    background:gray;\r\n}\r\n\r\nli:hover{\r\n    background: lightgray;\r\n    color:black;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.suggestion{\r\n    text-align: center;\r\n    width:200px;\r\n    position: absolute;\r\n    margin-left:0.3em;\r\n    background:gray;\r\n}\r\n\r\ninput{\r\n    display:block;\r\n    margin:5px;\r\n    width:75%;\r\n    text-transform: capitalize;\r\n}\r\n\r\ninput[type='submit']{\r\n    width:40%;\r\n    background:green;\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\ninput[type='range']{\r\n    width:75%;\r\n}\r\n\r\n::-webkit-datetime-edit-year-field:not([aria-valuenow]),\r\n    ::-webkit-datetime-edit-month-field:not([aria-valuenow]),\r\n    ::-webkit-datetime-edit-day-field:not([aria-valuenow]),\r\n     {\r\n        color: transparent;\r\n}\r\n\r\ninput[type=\"date\"]::before { \r\n\tcontent: attr(data-placeholder);\r\n    width: 100%;\r\n    color:grey;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ninput[type=\"date\"]:focus::before,\r\ninput[type=\"date\"]:valid::before { display: none }\r\n\r\n#refine{\r\nmargin:5px;\r\ncolor:black;\r\nmargin-top: 10px;\r\nborder: 1px solid\r\n}\r\n\r\n.userinputs{\r\n    \r\n    \r\n    background-color:white;\r\n    border:1px solid\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    #refine{\r\n    margin:5px;\r\n    color:rgb(20, 20, 20);\r\n    margin-top: 10px\r\n    }\r\n}\r\n\r\ndiv.tab{\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n    \r\n}\r\n\r\ndiv.tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n\r\ndiv.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n\r\ndiv.tab button.active {\r\n    background-color: #1976d2;\r\n    color:white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/components/search-box/search-box.component.html":
/*!*************************************************************!*\
  !*** ./src/components/search-box/search-box.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Oneway/Twoway selectror tab -->\n<div class=\"tab\">\n  <button id=\"oneway\" [ngClass]=\"{'active':search.oneway}\" (click)=\"updateBookingType(true)\">One Way</button>\n  <button id=\"twoway\" [ngClass]=\"{'active':!search.oneway}\" (click)=\"updateBookingType(false)\">Return</button>\n</div>\n\n<!-- User Inputs -->\n<div class=\"userinputs\">\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"\">From</label>\n      <!-- Well Datalist does the search and  select trick but unsupported in safari.-->\n      <input type=\"text\" class=\"form-control\" required placeholder=\"Enter Origin City\" [ngClass]=\"{ 'is-invalid': submitted && f.originCity.errors }\"\n        autocomplete=\"off\" (focus)=\"searchForm.get('originCity').setValue('')\" formControlName=\"originCity\" />\n\n      <div *ngIf=\"submitted && f.originCity.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.originCity.errors.required\">Required</div>\n      </div>\n\n      <div class=\"suggestion\" *ngIf=\"filteredOriginCities.length>0\">\n        <ul>\n          <li (click)=\"valueSelected(city, true)\" *ngFor=\"let city of filteredOriginCities\">{{city.charAt(0).toUpperCase()\n            + city.slice(1).toLowerCase()}}</li>\n        </ul>\n      </div>\n    </div>\n    <!-- Destination Input -->\n    <div class=\"form-group\">\n      <label for=\"\">Destination</label>\n\n      <input type=\"text\" class=\"form-control\" required placeholder=\"Enter Destination City\" [ngClass]=\"{ 'is-invalid': submitted && f.destinationCity.errors }\"\n        autocomplete=\"off\" (focus)=\"searchForm.get('destinationCity').setValue('')\" formControlName=\"destinationCity\"\n        name=\"destinationCity\" />\n\n      <div *ngIf=\"submitted && f.destinationCity.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.destinationCity.errors.required\">Required</div>\n      </div>\n\n      <div class=\"suggestion\" *ngIf=\"filteredDestinationCities.length>0\">\n        <ul>\n          <li (click)=\"valueSelected(city, false)\" *ngFor=\"let city of filteredDestinationCities\">{{city.charAt(0).toUpperCase()\n            + city.slice(1).toLowerCase()}}</li>\n        </ul>\n      </div>\n    </div>\n    <!-- Departure Date -->\n    <div class=\"form-group\">\n      <label for=\"\">Departure Date</label>\n\n      <input type=\"date\" class=\"form-control\" required data-placeholder=\"Departure Date\" id=\"departdate\" placeholder=\"YYYY-MM-DD\"\n        pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\" name=\"departureDate\" min=\"2019-08-25\" max=\"2019-08-25\" required\n        aria-required=\"true\" formControlName=\"departureDate\" [ngClass]=\"{ 'is-invalid': submitted && f.departureDate.errors }\" />\n\n      <div *ngIf=\"submitted && f.departureDate.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.departureDate.errors.required\">Required</div>\n      </div>\n    </div>\n    <!-- Return Date -->\n    <div class=\"form-group\">\n\n      <div *ngIf=\"!search.oneway\">\n        <label for=\"\">Return Date</label>\n\n        <input type=\"date\" class=\"form-control\" data-placeholder=\"Return Date\" id=\"returndate\" placeholder=\"YYYY-MM-DD\"\n          pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\" name=\"returnDate\" min=\"2019-08-25\" max=\"2019-08-25\" aria-required=\"true\"\n          formControlName=\"returnDate\" />\n\n      </div>\n    </div>\n\n    <!-- Number of passengers -->\n    <div class=\"form-group\">\n      <label for=\"\">Persons</label>\n\n      <input type=\"number\" class=\"form-control\" required min=1 formControlName=\"passengers\" placeholder=\"Passengers\" id=\"passengers\"\n        name=\"passengers\" />\n\n      <div *ngIf=\"submitted && f.passengers.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.passengers.errors.required\">Required</div>\n      </div>\n    </div>\n    <!-- Submit -->\n    <div class=\"form-group\">\n      <input type=\"submit\" id=\"search\" name=\"searchbtn\" />\n    </div>\n\n    <div class=\"form-group\" id=\"refine\">\n        <h4>Refine Flight Search</h4>\n        <p>Rs.{{f.refine.value}}</p>\n        <input type=\"range\" id=\"refine\" formControlName=\"refine\" steps=\"100\" name=\"points\" min=\"1000\" max=\"10000\"\n          (change)=\"sliderChangeEvent($event)\" />\n      </div>\n\n  </form>\n</div>\n\n<!-- Refine search -->\n"

/***/ }),

/***/ "./src/components/search-box/search-box.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/search-box/search-box.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "./src/services/search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(find, elementRef, fb) {
        this.find = find;
        this.elementRef = elementRef;
        this.fb = fb;
        this.onSearchResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //page variables
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.refineSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isFormValid = false;
        this.filteredOriginCities = [];
        this.filteredDestinationCities = [];
        this.totalCitiesListedOnServer = [];
        this.submitted = false;
        this.search = {
            departureDate: '',
            destinationCity: '',
            originCity: '',
            oneway: true,
            passengers: 0,
            refine: 1000
        };
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get all the cities available on initialization of component.
        this.searchForm = this.fb.group({
            originCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            destinationCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            returnDate: [''],
            passengers: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            refine: [100]
        });
        this.find.getCitiesListedOnServer()
            .take(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return window.alert("It seems you are directly serving from file. The app would not be able to perform perfectly due to Cross origin restriction."); }))
            .subscribe(function (cities) {
            _this.totalCitiesListedOnServer = cities;
            console.log("Total Cities", _this.totalCitiesListedOnServer);
        });
        this.flights$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (booking) { return _this.find.searchFlightAvailability(booking); }));
        this.searchForm.get('originCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (key) { return _this.filterCity(key, true); });
        this.searchForm.get('destinationCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (key) { return _this.filterCity(key, false); });
        console.log("search form", this.searchForm);
    };
    Object.defineProperty(SearchBoxComponent.prototype, "f", {
        // getter for form controls
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * Selected value from list
     * @param city
     */
    SearchBoxComponent.prototype.valueSelected = function (city, isOrigin) {
        console.log("selected", city);
        isOrigin ? this.f.originCity.setValue(city, { emitEvent: false }) : this.f.destinationCity.setValue(city, { emitEvent: false });
        isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
    };
    /**
     * Filter cities based on user input
     */
    SearchBoxComponent.prototype.filterCity = function (city, isOrigin) {
        var _this = this;
        city = city.toLowerCase(); // convert to lowercase
        isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
        console.log("city entered", city);
        if (city) {
            this.totalCitiesListedOnServer.filter(function (x) {
                if (x.includes(city))
                    isOrigin ? _this.filteredOriginCities.push(x) : _this.filteredDestinationCities.push(x);
            });
        }
    };
    /**
     * Check validation of form and proceed for search
     * @param formInputs
     */
    SearchBoxComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        else
            // convert to lowercase
            // this.search.destinationCity = this.searchForm..destinationCity.toLowerCase();
            // this.search.originCity = this.searchForm.originCity.toLowerCase();
            console.log("f is", this.searchForm);
        this.searchClickHandler(this.searchForm.value);
        // this.invalidForm = true;
    };
    /**
     * Event handler for clicks outside of the
     * suggestions component.
     * @param event
     */
    SearchBoxComponent.prototype.handleClickEvent = function (event) {
        var clickedTarget = event.target;
        var inComponent = false;
        do {
            if (clickedTarget === this.elementRef.nativeElement) {
                inComponent = true;
            }
            clickedTarget = clickedTarget.parentNode;
        } while (clickedTarget);
        if (!inComponent) {
            this.filteredDestinationCities = [];
            this.filteredOriginCities = [];
        }
    };
    /**
     *
     * Updates the booking type i.e one way/ two way flight.
     * @param oneway
     */
    SearchBoxComponent.prototype.updateBookingType = function (oneway) {
        this.search.oneway = oneway;
    };
    /**
     * Search for flights based on parameters provided.
     * The magic happens here :)
     * @param searchParams
     */
    SearchBoxComponent.prototype.searchClickHandler = function (searchParams) {
        var _this = this;
        console.log("Search click handler params", searchParams);
        this.loadingComponent.emit(true);
        if (!searchParams.returnDate) {
            console.warn("no return");
            this.performSearch(searchParams).subscribe(function (flights) {
                var searhResults = { oneWayFlights: flights, oneway: true, returningFlights: [], bookingInfo: searchParams };
                _this.onSearchResults.emit(searhResults);
                _this.loadingComponent.emit(false);
            });
        }
        else {
            //first check for one way then for the other
            var returnSearchParams = {
                originCity: searchParams.destinationCity,
                destinationCity: searchParams.originCity,
                departureDate: searchParams.returnDate,
                refine: searchParams.refine,
                passengers: searchParams.passengers,
                oneway: false
            };
            var onwardJourney = this.performSearch(searchParams);
            var returnJourney = this.performSearch(returnSearchParams);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([onwardJourney, returnJourney]).subscribe(function (res) {
                var searchResults = {
                    oneWayFlights: res[0],
                    oneway: false,
                    returningFlights: res[1],
                    bookingInfo: searchParams
                };
                _this.onSearchResults.emit(searchResults);
                _this.loadingComponent.emit(false);
            });
        }
    };
    /**
     * Perform the search from service based on params
     * @param searchParams
     */
    SearchBoxComponent.prototype.performSearch = function (searchParams) {
        return this.find.searchFlightAvailability(searchParams);
        // .catch(e => {
        //   console.log("Error in fetching flights.", e);
        //   return Promise.reject(new Array<Flights>())
        // });
    };
    /**
     * On change of slider event
     * autmatically detect flights in range
     * @param e
     */
    SearchBoxComponent.prototype.sliderChangeEvent = function (e) {
        console.log("Slider changed");
        this.searchClickHandler(this.searchForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "onSearchResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "loadingComponent", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-box',
            host: { '(document:click)': 'handleClickEvent($event)' },
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/components/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/components/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/search.service.ts":
/*!****************************************!*\
  !*** ./src/services/search.service.ts ***!
  \****************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiUrl = "./assets/data/flight-data.json";
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    /**
     * Search for availablity of flight from server(JSON data in this case)
     * @param searchParams;
     */
    SearchService.prototype.searchFlightAvailability = function (searchParams) {
        var _this = this;
        // bring the data
        // sort the data
        // search the data
        console.warn("params in service", searchParams);
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.searchAndSort(data, searchParams); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    /**
     * Gets the cities available for search from server.
     * NOTE: Usually server side code provides a REST api
     * to get teh cities availablr for search thereby reducing
     * client side dependency. Thin client approach :)
     */
    SearchService.prototype.getCitiesListedOnServer = function () {
        var _this = this;
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.extractCities(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    /**
     * Extracts and returns filtered array of cities,
     * available on server.
     * @param flightData;
     */
    SearchService.prototype.extractCities = function (flightData) {
        var allCities = [];
        flightData.flights.map(function (x) {
            allCities.push(x.origin);
            allCities.push(x.destination);
        });
        var distinctCities = allCities.filter(function (x, index, originalArr) {
            return index === originalArr.indexOf(x);
        });
        return distinctCities;
    };
    /**
     * Sorts the incoming data and sends for searching
     * @param data;
     */
    SearchService.prototype.searchAndSort = function (data, searchParams) {
        console.log('raw data"', data);
        data.flights.map(function (x) { return x.amount = parseInt(x.amount); });
        var allFlights = data.flights;
        return this.getMatchingItemsFromArray(this.sortFlightArray(allFlights), searchParams);
    };
    /**
     * Sort the flight data w.r.t amount
     * @param flightData;
     */
    SearchService.prototype.sortFlightArray = function (flightData) {
        flightData.sort(function (x, y) {
            return x.amount - y.amount;
        });
        console.log('sorted', flightData);
        return flightData;
    };
    /**
     * Returns a new array of matching items based on search.
     * @param sortedFlightData;
     * @param searchParams;
     */
    SearchService.prototype.getMatchingItemsFromArray = function (sortedFlightData, searchParams) {
        var filteredItmes = [];
        // create a new array which contains the items that are ;
        // in our range to make. Makes sense , eases pain :P
        var dataInRange = [];
        sortedFlightData.map(function (x) {
            x.amount <= searchParams.refine ? dataInRange.push(x) : console.log('Not in range');
        });
        console.log('data', dataInRange);
        console.warn('SearchParams in service', searchParams);
        dataInRange.map(function (x) {
            if (Date.parse(x.date.split(' ')[0]) === Date.parse(searchParams.departureDate) && x.origin === searchParams.originCity
                && x.destination === searchParams.destinationCity) {
                console.log('true getmatch');
                filteredItmes.push(x);
            }
        });
        console.log('filter', filteredItmes);
        return filteredItmes;
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell-pc\Desktop\flight-search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map