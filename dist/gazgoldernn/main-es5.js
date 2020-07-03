function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/service/service.component */
    "./src/app/pages/service/service.component.ts");
    /* harmony import */


    var _pages_preeminence_preeminence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/preeminence/preeminence.component */
    "./src/app/pages/preeminence/preeminence.component.ts");
    /* harmony import */


    var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/contacts/contacts.component */
    "./src/app/pages/contacts/contacts.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'service',
      component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]
    }, {
      path: 'preeminence',
      component: _pages_preeminence_preeminence_component__WEBPACK_IMPORTED_MODULE_4__["PreeminenceComponent"]
    }, {
      path: 'contacts',
      component: _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]
    }];
    var routerOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    };

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _toppanel_toppanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toppanel/toppanel.component */
    "./src/app/toppanel/toppanel.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043C\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http) {
        _classCallCheck(this, AppComponent);

        this.http = http;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          "Username": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          "Userphone": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[+]{1}[0-9]{11}"))
        });
      }

      _createClass(AppComponent, [{
        key: "showModal",
        value: function showModal() {
          this.modal.style.display = "flex";
          this.modal.style.opacity = "1";
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modal.style.display = "none";
          this.modal.style.opacity = "0";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener("scroll", this.scrollindicator);
          this.modal = document.getElementById("modal");
        }
      }, {
        key: "scrollindicator",
        value: function scrollindicator() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = winScroll / height * 100;
          document.getElementById("progress-bar").style.width = scrolled + "%";
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          var body = "name=" + this.myForm.value['Username'] + "&phone=" + this.myForm.value['Userphone'];
          return this.http.post('https://www.gazgoldernn.ru/send_messages.php', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          }).subscribe(function (status) {
            if (status == 1) {
              alert("Звонок заказан, в ближайщее время с вами свяжутся");
              window.location.reload();
            } else {
              alert("Что-то пошло не так и звонок не заказался");
            }
          }, function (error) {
            _this.myForm.controls['Username'].setErrors(error.error.name);

            _this.myForm.controls['Userphone'].setErrors(error.error.phone);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 51,
      vars: 4,
      consts: [["routerLink", ""], ["routerLink", "preeminence"], ["routerLink", "service"], ["routerLink", "contacts"], [3, "click"], ["href", "https://vk.com/gazgoldernn", "target", "blank", "title", "\u041C\u044B \u0432 \u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435", 1, "vk"], ["src", "assets/vklogo.png "], ["href", "https://www.instagram.com/gazgoldernn", "target", "blank", "title", "\u041C\u044B \u0432 Instagram", 1, "instagram"], ["src", "assets/instlogo1.png "], [1, "scroll-indicator"], ["id", "progress-bar"], ["id", "modal"], [1, "close", 3, "click"], [3, "formGroup", "submit"], ["formControlName", "Username", "required", "", "type", "text", "placeholder", "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F?"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "Userphone", "required", "", "type", "tel", "placeholder", "+79524583240"], ["type", "submit", "value", "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A", 3, "disabled"], [1, "content"], [1, "alert", "alert-danger"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toppanel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0448\u0435 \u043F\u0440\u0438\u0435\u043C\u0443\u0448\u0435\u0441\u0442\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0423\u0441\u043B\u0443\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() {
            return ctx.showModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0417\u0430\u043A\u0430\u0437 \u0437\u0432\u043E\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_24_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_form_submit_26_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_34_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u041E\u041E\u041E \"\u041F\u0440\u043E\u0444\u0438\u0442 \"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0433. \u0417\u0430\u0432\u043E\u043B\u0436\u044C\u0435, \u041F\u0440\u0438\u0432\u043E\u043A\u0437\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u0434 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "+7-952-458-32-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "gazgoldernn@bk.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls["Username"].invalid && ctx.myForm.controls["Username"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls["Userphone"].invalid && ctx.myForm.controls["Userphone"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
        }
      },
      directives: [_toppanel_toppanel_component__WEBPACK_IMPORTED_MODULE_3__["ToppanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  width: 100%;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: #1FA123;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  padding-bottom: 5px;\n  height: 40px;\n  color: white;\n  word-wrap: none;\n  font-size: 18px;\n  font-family: \"Noto Sans\";\n  text-decoration: none;\n  font-weight: bold;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  padding: 0 5px;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #4ec552;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .vk[_ngcontent-%COMP%]:hover {\n  background-color: #4d7198;\n}\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n}\n.scroll-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  height: 5px;\n  z-index: 10;\n}\n#progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #1FA123;\n  width: 0%;\n}\n.content[_ngcontent-%COMP%] {\n  z-index: 5;\n  background: linear-gradient(180deg, white 0%, lightgray 100%);\n}\nfooter[_ngcontent-%COMP%] {\n  z-index: 0;\n  background-color: #333;\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 0 20px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  text-align: right;\n}\n#modal[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 50%;\n  min-height: 400px;\n  margin-top: 10px;\n  left: 25%;\n  display: flex;\n  flex-direction: column;\n  color: black;\n  background-color: #ffffffee;\n  border: 2px solid #1FA123;\n  z-index: 10;\n  padding: 20px;\n  font-size: 22px;\n  font-family: \"Noto Sans\";\n  opacity: 0;\n  display: none;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\n#modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n#modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 35px;\n  font-weight: bolder;\n}\n#modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n  cursor: pointer;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 95%;\n  padding: 10px 0;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: black 1px solid;\n  background-color: #1FA123;\n  color: white;\n  cursor: pointer;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  border-color: black;\n  border-radius: 10px;\n  background-color: #4ec552;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:disabled {\n  color: black;\n  background-color: whitesmoke;\n}\n#modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  background-color: red;\n  color: white;\n  padding: 10px;\n}\n#modal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  padding-bottom: 10px;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    align-items: center;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 20px;\n    height: 40px;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .vk[_ngcontent-%COMP%] {\n    background-color: #4d7198;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n  footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #modal[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 80%;\n    top: 5%;\n    left: 10%;\n    bottom: 20%;\n    border: 3px solid #1FA123;\n    padding: 25px;\n  }\n  #modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  #modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    justify-content: space-evenly;\n    padding: 15px 0;\n  }\n  #modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    border: black 2px solid;\n  }\n\n  #modal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-bottom: 2px solid black;\n  }\n}\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%] {\n    position: static;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    flex-direction: row;\n    background-color: white;\n    justify-content: stretch;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    background-color: #1FA123;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .vk[_ngcontent-%COMP%] {\n    background-color: #4d7198;\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .instagram[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  }\n  nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:first-child {\n    flex-grow: 1;\n    padding-left: 20px;\n  }\n  nav[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #modal[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 0%;\n    left: 0%;\n    bottom: 0%;\n    margin: 0;\n  }\n  #modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxuaWttaVxcZ2F6Z29sZGVybm4vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQWpCUTtBQ1FaO0FEVUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNSUjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQXZCSTtFQXdCSixlQUFBO0VBQ0EsZUE3QkY7RUE4QkUsd0JBN0JMO0VBOEJLLHFCQUFBO0VBQ0EsaUJBQUE7RUExQlIsNEJBQUE7RUFDQSxlQUFBO0FDb0JKO0FET1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0xoQjtBRFFRO0VBQ0kseUJBckNLO0FDK0JqQjtBRFFRO0VBQ0kseUJBQUE7QUNOWjtBRFFRO0VBQ0ksbUdBQUE7QUNOWjtBRFdBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNSSjtBRFdBO0VBQ0ksWUFBQTtFQUNBLHlCQTFEUTtFQTJEUixTQUFBO0FDUko7QURXQTtFQUNJLFVBQUE7RUFDQSw2REFBQTtBQ1JKO0FEV0E7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDUko7QURTSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNQUjtBRFFRO0VBQ0ksZUFBQTtBQ05aO0FEVVE7RUFDSSxpQkFBQTtBQ1JaO0FEYUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkEzR0c7RUE0SkgsVUFBQTtFQUNBLGFBQUE7RUF4SkEsNEJBQUE7RUFDQSxlQUFBO0FDK0ZKO0FET0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNMUjtBRE1RO0VBQ0ksaUJBQUE7QUNKWjtBRE1RO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRE1RO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNKWjtBRE9JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNMUjtBRE1RO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRE1RO0VBQ0ksdUJBQUE7RUFDQSx5QkF2SUE7RUF3SUEsWUFBQTtFQUNBLGVBQUE7RUFySVIsNEJBQUE7RUFDQSxlQUFBO0FDa0lKO0FES1E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBOUlLO0FDMklqQjtBREtRO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0FDSFo7QURLUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIWjtBRFdBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDUko7QURXQTtFQUVJO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VDVE47RURVTTtJQUNJLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDUlY7RURTVTtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtFQ1BkO0VEU1U7SUFDSSx5QkFBQTtFQ1BkO0VEU1U7SUFDSSxtR0FBQTtFQ1BkOztFRFdFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtFQ1JOO0VEU007SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNQVjtFRFVVO0lBQ0ksa0JBQUE7RUNSZDs7RURZRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0VDVE47RURXVTtJQUNJLGVBQUE7RUNUZDtFRFlNO0lBQ0ksNkJBQUE7SUFDQSxlQUFBO0VDVlY7RURXVTtJQUNJLHVCQUFBO0VDVGQ7O0VEYUU7SUFDSSw4QkFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUVJO0lBQ0ksZ0JBQUE7RUNaTjtFRGFNO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7RUNYVjtFRGFNO0lBQ0ksbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0VDWFY7RURZVTtJQUNJLGlCQUFBO0lBQ0EseUJBcFBKO0VDME9WO0VEWVU7SUFDSSx5QkFBQTtFQ1ZkO0VEWVU7SUFDSSxtR0FBQTtFQ1ZkO0VEWVU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUNWZDtFRGFNO0lBQ0ksYUFBQTtFQ1hWOztFRGNFO0lBQ0ksV0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUNYTjtFRGFVO0lBQ0ksZUFBQTtFQ1hkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkQmlnU3BhbjogMThweDtcclxuJGZvbnQ6ICdOb3RvIFNhbnMnO1xyXG4kTWFpbkNvbG9yOiAjMUZBMTIzO1xyXG4kSG92ZXJNYWluQ29sb3I6ICM0ZWM1NTI7XHJcbiRNYWluVGV4dENvbG9yOiB3aGl0ZTtcclxuQG1peGluIGFuaW1hdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE1haW5Db2xvcjtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJE1haW5UZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkQmlnU3BhbjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oKTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRIb3Zlck1haW5Db2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZrOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNzE5ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwOTQzMyAwJSwgI2U2NjgzYyAyNSUsICNkYzI3NDMgNTAlLCAjY2MyMzY2IDc1JSwgI2JjMTg4OCAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtaW5kaWNhdG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNwcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE1haW5Db2xvcjtcclxuICAgIHdpZHRoOiAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDAlLCBsaWdodGdyYXkgMTAwJSk7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmVlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJE1haW5Db2xvcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2U6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE1haW5Db2xvcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkSG92ZXJNYWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oKTtcclxufVxyXG5cclxuI21vZGFsPmRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgJEJpZ1NwYW46IDIwcHg7XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52ayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3MTk4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnN0YWdyYW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjA5NDMzIDAlLCAjZTY2ODNjIDI1JSwgI2RjMjc0MyA1MCUsICNjYzIzNjYgNzUlLCAjYmMxODg4IDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNtb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJE1haW5Db2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNtb2RhbD5kaXYge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAkQmlnU3BhbjogMjBweDtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE1haW5Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmsge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNzE5ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5zdGFncmFtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwOTQzMyAwJSwgI2U2NjgzYyAyNSUsICNkYzI3NDMgNTAlLCAjY2MyMzY2IDc1JSwgI2JjMTg4OCAxMDAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nyb2xsLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI21vZGFsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGQTEyMztcbn1cbm5hdiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubmF2IGRpdiBhIHtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3b3JkLXdyYXA6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiBkaXYgYSBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5uYXYgZGl2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjNTUyO1xufVxubmF2IGRpdiAudms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3MTk4O1xufVxubmF2IGRpdiAuaW5zdGFncmFtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjA5NDMzIDAlLCAjZTY2ODNjIDI1JSwgI2RjMjc0MyA1MCUsICNjYzIzNjYgNzUlLCAjYmMxODg4IDEwMCUpO1xufVxuXG4uc2Nyb2xsLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBoZWlnaHQ6IDVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbiNwcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRkExMjM7XG4gIHdpZHRoOiAwJTtcbn1cblxuLmNvbnRlbnQge1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB3aGl0ZSAwJSwgbGlnaHRncmF5IDEwMCUpO1xufVxuXG5mb290ZXIge1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuZm9vdGVyIGRpdiB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbmZvb3RlciBkaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmZvb3RlciBkaXY6bGFzdC1jaGlsZCBzcGFuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNtb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxlZnQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZWU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRkExMjM7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbW9kYWwgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI21vZGFsIGRpdiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jbW9kYWwgZGl2IC5jbG9zZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4jbW9kYWwgZGl2IC5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtb2RhbCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbiNtb2RhbCBmb3JtIGlucHV0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jbW9kYWwgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGQTEyMztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtb2RhbCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWM1NTI7XG59XG4jbW9kYWwgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF06ZGlzYWJsZWQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4jbW9kYWwgZm9ybSAuYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI21vZGFsID4gZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIG5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIG5hdiBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIG5hdiBkaXYgYSB7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIG5hdiBkaXYgLnZrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3MTk4O1xuICB9XG4gIG5hdiBkaXYgLmluc3RhZ3JhbSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjA5NDMzIDAlLCAjZTY2ODNjIDI1JSwgI2RjMjc0MyA1MCUsICNjYzIzNjYgNzUlLCAjYmMxODg4IDEwMCUpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciBkaXY6bGFzdC1jaGlsZCBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogODAlO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogMTAlO1xuICAgIGJvdHRvbTogMjAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxRkExMjM7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAjbW9kYWwgZGl2IC5jbG9zZSB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG4gICNtb2RhbCBmb3JtIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgI21vZGFsIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcbiAgfVxuXG4gICNtb2RhbCA+IGRpdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIG5hdiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbiAgbmF2IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB9XG4gIG5hdiBkaXY6bnRoLWNoaWxkKDIpIGEge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRkExMjM7XG4gIH1cbiAgbmF2IGRpdjpudGgtY2hpbGQoMikgLnZrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3MTk4O1xuICB9XG4gIG5hdiBkaXY6bnRoLWNoaWxkKDIpIC5pbnN0YWdyYW0ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwOTQzMyAwJSwgI2U2NjgzYyAyNSUsICNkYzI3NDMgNTAlLCAjY2MyMzY2IDc1JSwgI2JjMTg4OCAxMDAlKTtcbiAgfVxuICBuYXYgZGl2Om50aC1jaGlsZCgyKSBhOmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gIG5hdiAuc2Nyb2xsLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNtb2RhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICBib3R0b206IDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAjbW9kYWwgZGl2IC5jbG9zZSB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _toppanel_toppanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toppanel/toppanel.component */
    "./src/app/toppanel/toppanel.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/service/service.component */
    "./src/app/pages/service/service.component.ts");
    /* harmony import */


    var _pages_preeminence_preeminence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/preeminence/preeminence.component */
    "./src/app/pages/preeminence/preeminence.component.ts");
    /* harmony import */


    var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/contacts/contacts.component */
    "./src/app/pages/contacts/contacts.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _toppanel_toppanel_component__WEBPACK_IMPORTED_MODULE_4__["ToppanelComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _pages_preeminence_preeminence_component__WEBPACK_IMPORTED_MODULE_7__["PreeminenceComponent"], _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _toppanel_toppanel_component__WEBPACK_IMPORTED_MODULE_4__["ToppanelComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _pages_preeminence_preeminence_component__WEBPACK_IMPORTED_MODULE_7__["PreeminenceComponent"], _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contacts/contacts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/contacts/contacts.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppPagesContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 23,
      vars: 0,
      consts: [[1, "content"], ["src", "https://yandex.ru/map-widget/v1/?um=constructor%3A2c7e5f05ea77731b28823775969b19f1a4defdff1690bed41047a31bf8589a09&source=constructor", "width", "100%", "height", "500", "frameborder", "0"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 9:00 - 20:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " +7-952-458-32-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " gazgoldernn@bk.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0433. \u0417\u0430\u0432\u043E\u043B\u0436\u044C\u0435, \u041F\u0440\u0438\u0432\u043E\u043A\u0437\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u0434 4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 10px;\n  text-align: center;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 25px 15px;\n  font-size: 23px;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-evenly;\n  font-family: \"Noto Sans\";\n  padding: 60px 20px;\n  margin: auto;\n  min-height: 400px;\n}\n.content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 605px;\n}\n@media (max-width: 768px) {\n  h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHMvQzpcXFVzZXJzXFxuaWttaVxcZ2F6Z29sZGVybm4vc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0c1xcY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTko7QURPSTtFQUNJLGNBWkk7QUNPWjtBRFNBO0VBQ0ksaUJBQUE7RUFJQSxlQUFBO0FDVEo7QURNSTtFQUNJLGNBbkJJO0FDZVo7QURTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBL0JHO0VBZ0NILGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTko7QURTQTtFQUNJLFlBQUE7QUNOSjtBRFNBO0VBQ0k7SUFDSSxrQkFBQTtFQ05OO0FBQ0Y7QURTQTtFQUNJO0lBQ0ksV0FBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OiAnTm90byBTYW5zJztcclxuJE1haW5Db2xvcjogIzFGQTEyMztcclxuQG1peGluIGFuaW1hdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbjogMjVweCAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uY29udGVudD5kaXYge1xyXG4gICAgd2lkdGg6IDYwNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmNvbnRlbnQ+ZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSIsImgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmgyIHNwYW4ge1xuICBjb2xvcjogIzFGQTEyMztcbn1cblxuaDMge1xuICBtYXJnaW46IDI1cHggMTVweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuaDMgc3BhbiB7XG4gIGNvbG9yOiAjMUZBMTIzO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uY29udGVudCA+IGRpdiB7XG4gIHdpZHRoOiA2MDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY29udGVudCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.slideIndex = 1;
      }

      _createClass(HomeComponent, [{
        key: "plusDivs",
        value: function plusDivs(n) {
          this.showDivs(this.slideIndex += n);
        }
      }, {
        key: "showDivs",
        value: function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");

          if (n > x.length) {
            this.slideIndex = 1;
          }

          if (n < 1) {
            this.slideIndex = x.length;
          }

          ;

          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }

          x[this.slideIndex - 1].style.display = "block";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showDivs(this.slideIndex);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 156,
      vars: 0,
      consts: [[1, "content"], [1, "bigHeader", "block"], [1, "slideshow"], [1, "mySlides"], ["src", "../../../assets/1.jpg"], [1, "list"], ["src", "../../../assets/2.jpg"], ["src", "../../../assets/3.jpg"], ["src", "../../../assets/4.jpg"], [1, "leftbtn", 3, "click"], [1, "rightbtn", 3, "click"], [1, "block"], [1, "preeminencelist"], [1, "choiselist"], [1, "bad"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432, \u0434\u0430\u0447, \u043A\u043E\u0442\u0442\u0435\u0434\u0436\u0435\u0439 \u0437\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1 \u0434\u0435\u043D\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u043E\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "180 000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0440\u0443\u0431\u043B\u0435\u0439.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0443\u044E \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u043F\u0440\u0438\u043C\u0438\u043D\u044F\u044E\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u043E\u0442\u0442\u0435\u0434\u0436\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0427\u0430\u0441\u0442\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u0447");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0425\u043E\u0441\u0442\u0435\u043B\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041E\u0442\u0435\u043B\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041A\u044D\u043C\u043F\u0438\u043D\u0433\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041A\u0430\u0444\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0411\u0430\u0440\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0417\u0430\u0432\u043E\u0434\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0421\u043A\u043B\u0430\u0434\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_55_listener() {
            return ctx.plusDivs(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u276E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_57_listener() {
            return ctx.plusDivs(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u041F\u0440\u0438\u0435\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0441\u0438\u0441\u0442\u0435\u043C\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041A\u0440\u0443\u0433\u043B\u043E\u0433\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0412 \u0434\u043E\u043C\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u044E\u0442\u043D\u043E \u0438 \u0442\u0435\u043F\u043B\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u041D\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0435\u0437\u043E\u043D\u0430 \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u0443\u0442\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0412\u044B \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0441\u0432\u043E\u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u041D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0430\u043B\u044C \u0434\u043B\u044F \u043D\u0435\u0444\u0442\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0417\u0430\u0449\u0438\u0442\u043D\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u043E\u0442 \u043A\u043E\u0440\u0440\u043E\u0437\u0438\u0438 \u0438 \u0431\u043B\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0445 \u0442\u043E\u043A\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u041D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u044B\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0414\u0440\u043E\u0432\u0430 \u0438\u043B\u0438 \u043F\u0435\u043B\u043B\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "2,1 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0412\u0442/\u0447");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u0414\u0435\u0448\u0435\u0432\u0430\u044F \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0410\u0432\u0442\u043E\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 \u0446\u0435\u043D\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u041D\u0435\u0443\u0434\u043E\u0431\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0433\u043E\u0440\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u0412\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0421\u0436\u0438\u0436\u0435\u043D\u043D\u044B\u0439 \u0433\u0430\u0437");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "2,24 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0412\u0442/\u0447");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u0414\u0435\u0448\u0435\u0432\u0430\u044F \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u041D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0410\u0432\u0442\u043E\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 \u0446\u0435\u043D\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u0414\u0438\u0437\u0435\u043B\u044C\u043D\u043E\u0435 \u0442\u043E\u043F\u043B\u0438\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "4,3 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0412\u0442/\u0447");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u0410\u0432\u0442\u043E\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 \u0446\u0435\u043D\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u0412\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u041D\u0435\u0443\u0434\u043E\u0431\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u0414\u043E\u0440\u043E\u0433\u0430\u044F \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u043E\u0442 5 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0412\u0442/\u0447");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u041D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0414\u043E\u0440\u043E\u0433\u0430\u044F \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u041C\u043E\u0436\u0435\u0442 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  font-family: \"Noto Sans\";\n}\nh1[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 60px auto;\n  font-family: \"Noto Sans\";\n}\n.bigHeader[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.bigHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: uppercase;\n}\n.bigHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\n.slideshow[_ngcontent-%COMP%] {\n  width: 60vw;\n  margin: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.slideshow[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.slideshow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  background-color: #ffffffcc;\n  border: none;\n  font-size: 25px;\n  padding: 10px;\n  cursor: pointer;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\n.slideshow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #1FA123;\n}\n.slideshow[_ngcontent-%COMP%]   .leftbtn[_ngcontent-%COMP%] {\n  left: 0;\n}\n.slideshow[_ngcontent-%COMP%]   .rightbtn[_ngcontent-%COMP%] {\n  right: 0;\n}\n.mySlides[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vw;\n  position: relative;\n}\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.mySlides[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 250px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  background-color: #ffffffcc;\n  padding: 10px 20px;\n  font-size: 20px;\n  font-family: \"Noto Sans\";\n  border-top-left-radius: 50px;\n}\nli[_ngcontent-%COMP%] {\n  padding: 5px;\n  list-style: none;\n  cursor: default;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n  font-size: 20px;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: #1FA123;\n}\nli[_ngcontent-%COMP%]:before {\n  padding-right: 10px;\n  font-weight: bold;\n  color: black;\n  content: \"\u2714\";\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]:hover:before {\n  color: #1FA123;\n  content: \"\u2714\";\n}\n.preeminencelist[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n.preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 30px;\n  min-height: 60px;\n}\n.choiselist[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 350px;\n  border: #1FA123 2px solid;\n  margin: 20px;\n  padding: 10px;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 20px;\n  border-bottom: solid lightgray 1px;\n  padding: 15px;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  color: #1FA123;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .bad[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .bad[_ngcontent-%COMP%]:before {\n  color: red;\n  content: \"\u2716\";\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  text-transform: uppercase;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .slideshow[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n  .slideshow[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n  .slideshow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    top: 55%;\n    font-size: 28px;\n    color: #1FA123;\n  }\n\n  li[_ngcontent-%COMP%]:before {\n    color: #1FA123;\n  }\n\n  .mySlides[_ngcontent-%COMP%] {\n    height: 70vw;\n  }\n\n  .preeminencelist[_ngcontent-%COMP%] {\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 10px;\n  }\n  .preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-top: 20px;\n  }\n  .preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    min-height: 35px;\n  }\n\n  .choiselist[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 90%;\n    border-width: 3px;\n    margin: 20px;\n    padding: 10px;\n  }\n  .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    line-height: 23px;\n    border-width: 2px;\n  }\n  .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%] {\n    border-color: darkgrey;\n  }\n}\n@media (max-width: 425px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .bigHeader[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .slideshow[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n  .slideshow[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  .slideshow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    top: 60%;\n  }\n\n  .mySlides[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 70vw;\n    position: relative;\n  }\n  .mySlides[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 0;\n    padding: 10px 40px;\n    border-top-left-radius: 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .preeminencelist[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-top: 30px;\n  }\n  .preeminencelist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n\n  .choiselist[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n  }\n  .choiselist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcbmlrbWlcXGdhemdvbGRlcm5uL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQVhHO0FETVA7QUNRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBSUEsZUFBQTtBRFJKO0FDS0k7RUFDSSxjQWxCSTtBRGVaO0FDUUE7RUFDSSxlQUFBO0FETEo7QUNRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFqQ0c7QUQ0QlA7QUNRQTtFQVFJLFVBQUE7QURaSjtBQ0tJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FESFI7QUNJUTtFQUNJLGNBeENBO0FEc0NaO0FDUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QURMSjtBQ01JO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBREpSO0FDTUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUE5REosNEJBQUE7RUFDQSxlQUFBO0FEMkRKO0FDS0k7RUFDSSxjQXBFSTtBRGlFWjtBQ0tJO0VBQ0ksT0FBQTtBREhSO0FDS0k7RUFDSSxRQUFBO0FESFI7QUNPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ0tJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURIUjtBQ0tJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFoR0Q7RUFpR0MsNEJBQUE7QURIUjtBQ09BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQXJHQSw0QkFBQTtFQUNBLGVBQUE7RUFzR0EsZUFBQTtBREhKO0FDTUE7RUFDSSxjQTdHUTtBRDBHWjtBQ01BO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBbEhBLDRCQUFBO0VBQ0EsZUFBQTtBRGdISjtBQ0tBO0VBQ0ksY0F6SFE7RUEwSFIsWUFBQTtBREZKO0FDS0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBREZKO0FDR0k7RUFDSSxVQUFBO0FERFI7QUNFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QURBWjtBQ0tBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FERko7QUNHSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FERFI7QUNFUTtFQUNJLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FEQVo7QUNFUTtFQUNJLFlBQUE7QURBWjtBQ0VRO0VBQ0ksY0FqS0E7QURpS1o7QUNFUTtFQUNJLFVBQUE7QURBWjtBQ0VRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QURBWjtBQ0VRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBREFaO0FDRVE7RUFDSSxlQUFBO0FEQVo7QUNFUTs7RUFFSSxrQkFBQTtBREFaO0FDS0E7RUFDSTtJQUNJLGVBQUE7RURGTjs7RUNJRTtJQUNJLGVBQUE7RURETjs7RUNJTTtJQUNJLGtCQUFBO0VERFY7O0VDSUU7SUFDSSxXQUFBO0VERE47RUNFTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RURBVjtFQ0VNO0lBQ0ksUUFBQTtJQUNBLGVBQUE7SUFDQSxjQTdNQTtFRDZNVjs7RUNHRTtJQUNJLGNBak5JO0VEaU5WOztFQ0VFO0lBQ0ksWUFBQTtFRENOOztFQ0NFO0lBQ0ksc0JBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VERU47RUNETTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFREdWO0VDRlU7SUFDSSxnQkFBQTtFRElkOztFQ0FFO0lBQ0ksZ0JBQUE7RURHTjtFQ0ZNO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RURJVjtFQ0hVO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFREtkO0VDRFU7SUFDSSxzQkFBQTtFREdkO0FBQ0Y7QUNFQTtFQUNJO0lBQ0ksZUFBQTtFREFOOztFQ0VFO0lBQ0ksZUFBQTtFRENOOztFQ0NFO0lBQ0ksV0FBQTtFREVOOztFQ0FFO0lBQ0ksWUFBQTtFREdOO0VDRk07SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VESVY7RUNGTTtJQUNJLFFBQUE7RURJVjs7RUNERTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RURJTjtFQ0hNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0VES1Y7O0VDRkU7SUFDSSxXQUFBO0VES047RUNKTTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFRE1WO0VDTFU7SUFDSSxtQkFBQTtFRE9kOztFQ0hFO0lBQ0ksV0FBQTtFRE1OO0VDTE07SUFDSSxXQUFBO0lBQ0EsYUFBQTtFRE9WO0VDTlU7SUFDSSxlQUFBO0VEUWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmgxIHNwYW4ge1xuICBjb2xvcjogIzFGQTEyMztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcbn1cblxuLmJpZ0hlYWRlciB7XG4gIHdpZHRoOiA5MCU7XG59XG4uYmlnSGVhZGVyIGgyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYmlnSGVhZGVyIGgyIHNwYW4ge1xuICBjb2xvcjogIzFGQTEyMztcbn1cblxuLnNsaWRlc2hvdyB7XG4gIHdpZHRoOiA2MHZ3O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2xpZGVzaG93IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnNsaWRlc2hvdyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2M7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbGlkZXNob3cgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMxRkExMjM7XG59XG4uc2xpZGVzaG93IC5sZWZ0YnRuIHtcbiAgbGVmdDogMDtcbn1cbi5zbGlkZXNob3cgLnJpZ2h0YnRuIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5teVNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5teVNsaWRlcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15U2xpZGVzIC5saXN0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubGk6aG92ZXIge1xuICBjb2xvcjogIzFGQTEyMztcbn1cblxubGk6YmVmb3JlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgY29udGVudDogXCLinJRcIjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzIGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saTpob3ZlcjpiZWZvcmUge1xuICBjb2xvcjogIzFGQTEyMztcbiAgY29udGVudDogXCLinJRcIjtcbn1cblxuLnByZWVtaW5lbmNlbGlzdCB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnByZWVtaW5lbmNlbGlzdCBkaXYge1xuICB3aWR0aDogMzAlO1xufVxuLnByZWVtaW5lbmNlbGlzdCBkaXYgbGkge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmNob2lzZWxpc3Qge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNob2lzZWxpc3QgZGl2IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXI6ICMxRkExMjMgMnB4IHNvbGlkO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2hvaXNlbGlzdCBkaXYgbGkge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmF5IDFweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jaG9pc2VsaXN0IGRpdiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNob2lzZWxpc3QgZGl2IGxpOmJlZm9yZSB7XG4gIGNvbG9yOiAjMUZBMTIzO1xufVxuLmNob2lzZWxpc3QgZGl2IC5iYWQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmNob2lzZWxpc3QgZGl2IC5iYWQ6YmVmb3JlIHtcbiAgY29sb3I6IHJlZDtcbiAgY29udGVudDogXCLinJZcIjtcbn1cbi5jaG9pc2VsaXN0IGRpdiBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jaG9pc2VsaXN0IGRpdiBoMyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaG9pc2VsaXN0IGRpdiBoMixcbi5jaG9pc2VsaXN0IGRpdiBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmJsb2NrIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2xpZGVzaG93IHtcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuICAuc2xpZGVzaG93IGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuc2xpZGVzaG93IGJ1dHRvbiB7XG4gICAgdG9wOiA1NSU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjMUZBMTIzO1xuICB9XG5cbiAgbGk6YmVmb3JlIHtcbiAgICBjb2xvcjogIzFGQTEyMztcbiAgfVxuXG4gIC5teVNsaWRlcyB7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuICB9XG5cbiAgLnByZWVtaW5lbmNlbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5wcmVlbWluZW5jZWxpc3QgZGl2IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLnByZWVtaW5lbmNlbGlzdCBkaXYgbGkge1xuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIH1cblxuICAuY2hvaXNlbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuY2hvaXNlbGlzdCBkaXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNob2lzZWxpc3QgZGl2IGxpIHtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgfVxuICAuY2hvaXNlbGlzdCBkaXY6bGFzdC1jaGlsZCBsaSB7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JleTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmJpZ0hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2xpZGVzaG93IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbiAgLnNsaWRlc2hvdyBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNsaWRlc2hvdyBidXR0b24ge1xuICAgIHRvcDogNjAlO1xuICB9XG5cbiAgLm15U2xpZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5teVNsaWRlcyAubGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnByZWVtaW5lbmNlbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByZWVtaW5lbmNlbGlzdCBkaXYge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAucHJlZW1pbmVuY2VsaXN0IGRpdiBsaSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC5jaG9pc2VsaXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2hvaXNlbGlzdCBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNob2lzZWxpc3QgZGl2IGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn0iLCIkZm9udDogJ05vdG8gU2Fucyc7XHJcbiRNYWluQ29sb3I6ICMxRkExMjM7XHJcbkBtaXhpbiBhbmltYXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzIGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG59XHJcblxyXG4uYmlnSGVhZGVyIHtcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uc2xpZGVzaG93IHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGgxIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjYztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgIH1cclxuICAgIC5sZWZ0YnRuIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0YnRuIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm15U2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2M7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxubGkge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIEBpbmNsdWRlIGFuaW1hdGlvbigpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBjb2xvcjogJE1haW5Db2xvcjtcclxufVxyXG5cclxubGk6YmVmb3JlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGNvbnRlbnQ6IFwiXFwyNzE0XCI7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oKTtcclxufVxyXG5cclxubGk6aG92ZXI6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAkTWFpbkNvbG9yO1xyXG4gICAgY29udGVudDogXCJcXDI3MTRcIjtcclxufVxyXG5cclxuLnByZWVtaW5lbmNlbGlzdCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaG9pc2VsaXN0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogJE1haW5Db2xvciAycHggc29saWQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmF5IDFweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWQ6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNzE2XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYmxvY2sge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZXNob3cge1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaTpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAkTWFpbkNvbG9yO1xyXG4gICAgfVxyXG4gICAgLm15U2xpZGVzIHtcclxuICAgICAgICBoZWlnaHQ6IDcwdnc7XHJcbiAgICB9XHJcbiAgICAucHJlZW1pbmVuY2VsaXN0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaG9pc2VsaXN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmJpZ0hlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVzaG93IHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRvcDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5teVNsaWRlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZ3O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmVlbWluZW5jZWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hvaXNlbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/preeminence/preeminence.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/preeminence/preeminence.component.ts ***!
    \************************************************************/

  /*! exports provided: PreeminenceComponent */

  /***/
  function srcAppPagesPreeminencePreeminenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreeminenceComponent", function () {
      return PreeminenceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreeminenceComponent = /*#__PURE__*/function () {
      function PreeminenceComponent() {
        _classCallCheck(this, PreeminenceComponent);
      }

      _createClass(PreeminenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreeminenceComponent;
    }();

    PreeminenceComponent.ɵfac = function PreeminenceComponent_Factory(t) {
      return new (t || PreeminenceComponent)();
    };

    PreeminenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreeminenceComponent,
      selectors: [["app-preeminence"]],
      decls: 19,
      vars: 0,
      consts: [[1, "content"]],
      template: function PreeminenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041C\u042B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0410\u0411\u041E\u0422\u0410\u0415\u041C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041E\u041F\u0418\u0420\u0410\u042F\u0421\u042C \u0422\u041E\u041B\u042C\u041A\u041E \u041D\u0410 \u041D\u041E\u0420\u041C\u042B \u0418 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0420\u0410\u0412\u0418\u041B\u0410 \u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u041E\u0421\u0422\u0418");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0420\u0424");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041C\u044B \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C, \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0443\u044E \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F\u0445, \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u043C\u043D\u043E\u0433\u0438\u0435. \u041D\u0435 \u0441\u043F\u043E\u0440\u0438\u043C, \u0447\u0442\u043E \u0431\u0435\u0437 \u043A\u0430\u043A\u043E\u0439-\u043D\u0438\u0431\u0443\u0434\u044C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0435\u0439, \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u044E \u0437\u0430\u0434\u0430\u0447\u0443, \u043D\u043E \u043B\u044E\u0431\u0430\u044F \u043F\u043E\u0440\u044F\u0434\u043E\u0447\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u044F \u043D\u043E\u0440\u043C\u044B \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0414\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u043B\u043E\u0439\u043D\u044B\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0441\u043E\u044D\u043A\u0441\u0442\u0440\u0443\u0437\u0438\u0438 \u0438\u0437 \u0431\u0443\u0442\u0438\u043B\u043A\u0430\u0443\u0447\u0443\u043A\u0430 \u0438 \u0442\u0435\u0440\u043C\u043E\u0441\u0432\u0435\u0442\u043E\u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u044D\u0442\u0438\u043B\u0435\u043D\u0430. \u0422\u0430\u043A\u043E\u0439 \u0441\u043E\u0441\u0442\u0430\u0432 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u0443\u044E \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C, \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u0430\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440, \u043D\u0438\u0437\u043A\u043E\u0435 \u0432\u043E\u0434\u043E\u043F\u043E\u0433\u043B\u043E\u0449\u0435\u043D\u0438\u0435, \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E\u043C \u0432\u043B\u0438\u044F\u043D\u0438\u0438 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0449\u0438\u0442\u043D\u043E\u0439 \u043F\u043B\u0435\u043D\u043A\u0438 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0434\u043B\u044F \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u0439 ,\u0442\u0430\u043A \u0438 \u0434\u043B\u044F \u043F\u043E\u0434\u0437\u0435\u043C\u043D\u043E\u0439 \u043F\u0440\u043E\u043A\u043B\u0430\u0434\u043A\u0438 \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0418\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0439 \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u043F\u0430\u0433\u0443\u0431\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0445 \u043B\u0443\u0447\u0435\u0439, \u0432\u043B\u0430\u0433\u0438, \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043E\u0442 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u043E\u0434\u0437\u0435\u043C\u043D\u044B\u0439 \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434 ,\u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0434\u0430\u043D\u043D\u043E\u0439 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438 ,\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0437\u0430\u0449\u0438\u0442\u0443 \u043E\u0442 \u0432\u043B\u0430\u0433\u0438 \u0438 \u0431\u043B\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0445 \u0442\u043E\u043A\u043E\u0432.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0422\u0430\u043A\u0436\u0435 \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0440\u0430\u0437 \u0432 \u043C\u0435\u0441\u044F\u0446 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043A\u0440\u0430\u043D \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0448\u0430\u0440\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  font-family: \"Noto Sans\";\n  padding: 60px 20px;\n  width: 75%;\n  margin: auto;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-align: center;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\np[_ngcontent-%COMP%] {\n  word-spacing: 10px;\n  text-align: justify;\n  text-indent: 20px;\n  margin: 30px 0;\n}\nli[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: default;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: #1FA123;\n}\nli[_ngcontent-%COMP%]:before {\n  padding-right: 10px;\n  font-weight: bold;\n  color: black;\n  content: \"\u2714\";\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]:hover:before {\n  color: #1FA123;\n  content: \"\u2714\";\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    text-indent: 25px;\n  }\n\n  li[_ngcontent-%COMP%]:before {\n    color: #1FA123;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    text-indent: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlZW1pbmVuY2UvcHJlZW1pbmVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZWVtaW5lbmNlL0M6XFxVc2Vyc1xcbmlrbWlcXGdhemdvbGRlcm5uL3NyY1xcYXBwXFxwYWdlc1xccHJlZW1pbmVuY2VcXHByZWVtaW5lbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ09oQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBWEc7RUFZSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FETEo7QUNRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FETEo7QUNNSTtFQUNJLGNBckJJO0FEaUJaO0FDUUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FETEo7QUNRQTtFQUNJLGVBQUE7QURMSjtBQ1FBOztFQUVJLGVBQUE7QURMSjtBQ1FBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBekNBLDRCQUFBO0VBQ0EsZUFBQTtBRHFDSjtBQ09BO0VBQ0ksY0FoRFE7QUQ0Q1o7QUNPQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQXJEQSw0QkFBQTtFQUNBLGVBQUE7QURrREo7QUNNQTtFQUNJLGNBNURRO0VBNkRSLFlBQUE7QURISjtBQ01BO0VBQ0k7SUFDSSxVQUFBO0VESE47O0VDS0U7SUFDSSxpQkFBQTtFREZOOztFQ0lFO0lBQ0ksY0F4RUk7RUR1RVY7QUFDRjtBQ0lBO0VBQ0k7SUFDSSxXQUFBO0VERk47O0VDSUU7SUFDSSxpQkFBQTtFREROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVlbWluZW5jZS9wcmVlbWluZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaDIge1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaDIgc3BhbiB7XG4gIGNvbG9yOiAjMUZBMTIzO1xufVxuXG5wIHtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5wLFxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6ICMxRkExMjM7XG59XG5cbmxpOmJlZm9yZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGk6aG92ZXI6YmVmb3JlIHtcbiAgY29sb3I6ICMxRkExMjM7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtaW5kZW50OiAyNXB4O1xuICB9XG5cbiAgbGk6YmVmb3JlIHtcbiAgICBjb2xvcjogIzFGQTEyMztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtaW5kZW50OiAyNXB4O1xuICB9XG59IiwiJGZvbnQ6ICdOb3RvIFNhbnMnO1xyXG4kTWFpbkNvbG9yOiAjMUZBMTIzO1xyXG5AbWl4aW4gYW5pbWF0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgIH1cclxufVxyXG5cclxucCB7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxubGkge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5wLFxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oKTtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbn1cclxuXHJcbmxpOmJlZm9yZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjb250ZW50OiBcIlxcMjcxNFwiO1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKCk7XHJcbn1cclxuXHJcbmxpOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgIGNvbnRlbnQ6IFwiXFwyNzE0XCI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWluZGVudDogMjVweDtcclxuICAgIH1cclxuICAgIGxpOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDI1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreeminenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preeminence',
          templateUrl: './preeminence.component.html',
          styleUrls: ['./preeminence.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/service/service.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/service/service.component.ts ***!
    \****************************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppPagesServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceComponent = /*#__PURE__*/function () {
      function ServiceComponent() {
        _classCallCheck(this, ServiceComponent);
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
      return new (t || ServiceComponent)();
    };

    ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceComponent,
      selectors: [["app-service"]],
      decls: 87,
      vars: 0,
      consts: [[1, "content"], ["src", "../../../assets/p1.jpg"], ["src", "../../../assets/p2.jpg"], ["src", "../../../assets/p3.jpg"], [1, "faqs"]],
      template: function ServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u043E\u0432!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u044C \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440. \u0417\u0430\u0447\u0435\u043C \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E? \u041F\u043E \u0442\u0440\u0435\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C: \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E, \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044F. \u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u043E\u0442\u0430\u043F\u043B\u0438\u0432\u0430\u0442\u044C \u0434\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0443\u0433\u043B\u0435\u043C, \u043C\u0430\u0437\u0443\u0442\u043E\u043C, \u0434\u0438\u0437\u0435\u043B\u044C\u043D\u044B\u043C \u0442\u043E\u043F\u043B\u0438\u0432\u043E\u043C \u0438\u043B\u0438 \u0434\u0430\u0436\u0435 \u0434\u0440\u043E\u0432\u0430\u043C\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0415\u0441\u043B\u0438 \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u0440\u0430\u0432\u043D\u0438\u043C\u044B\u0435 \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438, \u0442\u043E \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435. \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0430\u0437\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0433\u0430\u0437\u043E\u0432\u043E\u0437\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u043A\u0430\u0447\u0438\u0432\u0430\u044E\u0442 \u0435\u0433\u043E \u0432 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440. \u041E\u0431\u044A\u0435\u043C \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442 \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u0434\u043E\u043C\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u043E\u043C \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B, \u043D\u0430\u043C \u043B\u0438\u0448\u044C \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0441\u0442\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u043A\u0442\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u0438\u044F \u2013 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u043E\u0432\u044B\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435. \u0412\u0430\u0448\u0430 \u043B\u0438\u0447\u043D\u0430\u044F \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u044F\u0445. \u0412\u0430\u043C \u043D\u0435 \u0441\u0442\u0440\u0430\u0448\u043D\u044B \u0430\u0432\u0430\u0440\u0438\u0438 \u043E\u0431\u0449\u0435\u0433\u043E \u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0430. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043F\u043E\u0434\u043E\u0431\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0432\u0430\u0448\u0435\u0433\u043E \u0436\u0438\u043B\u0438\u0449\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u2013 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0435\u043C \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u043C \u0434\u043E\u043C\u0435 \u0445\u043E\u0434\u0438\u0442\u044C \u043F\u043E \u0431\u0435\u043B\u043E\u0441\u043D\u0435\u0436\u043D\u043E\u043C\u0443 \u0441\u043D\u0435\u0433\u0443, \u043F\u043E\u0441\u043A\u0440\u0438\u043F\u044B\u0432\u0430\u044F \u043D\u0430 \u0434\u043E\u0440\u043E\u0436\u043A\u0430\u0445? \u0422\u043E\u0433\u0434\u0430 \u0441\u0440\u043E\u0447\u043D\u043E \u043E\u0442\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043E\u0442 \u043C\u0430\u0437\u0443\u0442\u0430, \u0441\u043E\u043B\u044F\u0440\u043A\u0438 \u0438 \u0443\u0433\u043B\u044F. \u041F\u043E\u0447\u0442\u0438 \u043F\u043E\u043B\u043D\u043E\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0435\u0440\u043D\u044B\u0445 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439 \u0432 \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u043E\u043C \u0433\u0430\u0437\u0435, \u0438 \u0435\u0433\u043E \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u0435 \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u0432\u0430\u043C \u0431\u0435\u043B\u043E\u0441\u043D\u0435\u0436\u043D\u044B\u0439 \u0441\u043D\u0435\u0433 \u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445. \u0415\u0441\u043B\u0438 \u0434\u0430\u0436\u0435, \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 \u0432\u044B\u0439\u0434\u0435\u0442 \u0438\u0437 \u0441\u0442\u0440\u043E\u044F, \u0438 \u0433\u0430\u0437 \u0432\u044B\u0440\u0432\u0435\u0442\u0441\u044F \u043D\u0430\u0440\u0443\u0436\u0443, \u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u0436\u0443\u0442\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0435\u0442. \u0421\u0436\u0438\u0436\u0435\u043D\u043D\u044B\u0439 \u0433\u0430\u0437 \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u0430\u0440\u043E\u0432\u043E\u044E \u0444\u0430\u0437\u0443 \u0438 \u0438\u0441\u043F\u0430\u0440\u044F\u0435\u0442\u0441\u044F \u0432 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443. \u0412\u0430\u043C \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u0441\u044F \u043E \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0432\u0440\u0435\u0434\u0430 \u043F\u043E\u0447\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u043F\u043E\u043A\u0440\u043E\u0432\u0443 \u0438\u043B\u0438 \u0441\u0430\u0436\u0435\u043D\u0446\u0430\u043C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0430 - \u043A\u043E\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0435\u0435 \u043D\u0430 \u0433\u0430\u0437\u043E\u0432\u043E\u043C \u0442\u043E\u043F\u043B\u0438\u0432\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043C\u0435\u0435\u0442 \u043D\u0435\u043E\u0441\u043F\u043E\u0440\u0438\u043C\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0432 \u0432\u0438\u0434\u0435 \u0434\u043E\u043B\u0433\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430 \u0441\u043B\u0443\u0436\u0431\u044B \u043F\u0435\u0440\u0435\u0434 \u0442\u0432\u0435\u0440\u0434\u043E\u0442\u043E\u043F\u043B\u0438\u0432\u043D\u044B\u043C\u0438 \u0438\u043B\u0438 \u0436\u0438\u0434\u043A\u043E\u0442\u043E\u043F\u043B\u0438\u0432\u043D\u044B\u043C\u0438 \u043A\u043E\u0442\u043B\u0430\u043C\u0438. \u0414\u0435\u043B\u043E \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0435\u0440\u044B, \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u043E \u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043C. \u041D\u0435 \u0438\u043C\u0435\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u0441 \u0441\u0435\u0440\u043E\u0439, \u0433\u0430\u0437\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u0435\u0440\u043E\u0439 \u0438 \u043F\u0440\u0430\u0432\u0434\u043E\u0439 \u043D\u0430 30% \u0434\u043E\u043B\u044C\u0448\u0435, \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u043E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u0430\u043C\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0433\u043E\u0440\u0430\u043D\u0438\u0435 \u0431\u0435\u0437 \u0437\u0430\u043F\u0430\u0445\u0430 \u2013 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0433\u0430\u0437\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0432\u0441\u0435\u043C\u0435\u0441\u0442\u043D\u043E \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430\u0445 \u043C\u043D\u043E\u0433\u043E\u044D\u0442\u0430\u0436\u0435\u043A. \u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F \u0433\u043E\u043B\u0443\u0431\u043E\u0433\u043E \u0442\u043E\u043F\u043B\u0438\u0432\u0430 \u0432 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u043F\u0440\u043E\u0442\u0435\u043A\u0430\u044E\u0442 \u0431\u0435\u0437 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u043A\u0438\u0445 \u0437\u0430\u043F\u0430\u0445\u043E\u0432, \u0430 \u0432\u0440\u0435\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0432\u044B\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u043D\u0430\u0440\u0443\u0436\u0443 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0434\u044B\u043C\u043E\u0445\u043E\u0434\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u0430\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u043D\u0435 \u0442\u0430\u043A \u0441\u043B\u043E\u0436\u043D\u043E, \u043D\u043E \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0435, \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0430 \u0435\u043C\u043A\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0433\u0430\u0437\u0430, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0435\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C, \u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043A \u0431\u0435\u0442\u043E\u043D\u043D\u043E\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044E.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043E\u0431\u044A\u0435\u043C\u0430 \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430 \u0432\u044B\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u0442\u043B\u043E\u0432\u0430\u043D \u043D\u0430 \u0433\u043B\u0443\u0431\u0438\u043D\u0443 \u043D\u0435 \u043F\u0440\u043E\u043C\u0435\u0440\u0437\u0430\u043D\u0438\u044F \u0433\u0440\u0443\u043D\u0442\u0430, \u0434\u043D\u043E \u043A\u043E\u0442\u043B\u043E\u0432\u0430\u043D\u0430 \u0437\u0430\u0441\u044B\u043F\u0430\u0435\u0442\u0441\u044F \u043F\u0435\u0441\u043A\u043E\u043C 20-30 \u0441\u043C, \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041A\u0440\u0430\u043D \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u043E\u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041F\u0440\u0435\u0434\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E-\u0441\u0431\u0440\u043E\u0441\u043D\u043E\u0439 \u043A\u043B\u0430\u043F\u0430\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0417\u0430\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0439 \u043A\u043B\u0430\u043F\u0430\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0413\u0430\u0437\u043E\u0432\u044B\u0439 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440 (\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440) \u0441 \u043A\u043B\u0430\u043F\u0430\u043D\u0430\u043C\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0413\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041A\u043B\u0430\u043F\u0430\u043D \u043E\u0442\u0431\u043E\u0440\u0430 \u043F\u0430\u0440\u043E\u0432\u043E\u0439 \u0444\u0430\u0437\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432\u043E\u0447\u043D\u044B\u0435 \u043A\u043B\u0430\u043F\u0430\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041A\u043B\u0430\u043F\u0430\u043D \u043E\u0442\u0431\u043E\u0440\u0430 \u0436\u0438\u0434\u043A\u043E\u0439 \u0444\u0430\u0437\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u041C\u0430\u043D\u043E\u043C\u0435\u0442\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0432\u043E\u043F\u0440\u043E\u0441\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u0433\u0430\u0437\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u2014 \u044D\u0442\u043E \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0430\u044F \u043E\u0442 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u0430\u0437\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F, \u0432 \u043E\u0441\u043D\u043E\u0432\u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u0445\u043E\u0434\u0438\u0442 \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 (\u0435\u043C\u043A\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u0430), \u043E\u0442 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u043B\u043E\u0436\u0435\u043D \u043F\u043E\u0434\u0437\u0435\u043C\u043D\u044B\u0439 \u0438\u043B\u0438 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u044B\u0439 \u0442\u0440\u0443\u0431\u043E\u043F\u0440\u043E\u0432\u043E\u0434 (\u0433\u0430\u0437\u043E\u043F\u0440\u043E\u0432\u043E\u0434) \u043A \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0443 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u0433\u0430\u0437\u0430 (\u0433\u0430\u0437\u043E\u0432\u044B\u0439 \u043A\u043E\u0442\u0435\u043B, \u0433\u0430\u0437\u043E\u0432\u044B\u0439 \u0432\u043E\u0434\u043E\u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C, \u0433\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430 \u0434\u043B\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430, \u0434\u0430\u0447\u0438, \u043A\u043E\u0442\u0442\u0435\u0434\u0436\u0430 \u0438\u043B\u0438 \u043A\u0430\u043A\u043E\u0433\u043E \u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0447\u0442\u043E \u0440\u0430\u0441\u0445\u043E\u0434 \u0433\u0430\u0437\u0430 \u043D\u0430 1 \u043A\u0432.\u043C. \u0432 \u0433\u043E\u0434 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E 21 \u043B\u0438\u0442\u0440. \u0418\u0437 \u044D\u0442\u043E \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u0447\u0442\u043E \u0434\u043B\u044F \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u043E\u043C\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u044C\u044E 150 \u043A\u0432.\u043C. \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E 3150 \u043B\u0438\u0442\u0440\u043E\u0432 (21 \u043B\u0438\u0442\u0440 * 150 \u043A\u0432.\u043C. = 3150 \u043B\u0438\u0442\u0440\u043E\u0432) \u0442\u0430\u043A \u0436\u0435 \u0435\u0441\u043B\u0438 \u0412\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438 \u0434\u043B\u044F \u0433\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043B\u0438\u0442\u044B \u0442\u043E \u043A \u0437\u0430\u043F\u0430\u0441\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 20%. \u041F\u043E\u043C\u043D\u0438\u0442\u0435 \u0447\u0442\u043E \u043B\u044E\u0431\u0430\u044F \u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u043C\u043A\u043E\u0441\u0442\u044C \u0437\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0434 85% \u043E\u0442 \u043E\u0431\u0449\u0435\u0433\u043E \u043E\u0431\u044A\u0435\u043C\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u043C\u043A\u043E\u0441\u0442\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0440\u0430\u0441\u0447\u0435\u0442 \u0434\u043B\u044F \u043A\u0430\u043A\u0438\u0445 \u0446\u0435\u043B\u0435\u0439 \u0412\u044B \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435. \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u043E\u0434\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043C\u043E\u0436\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 (\u043F\u0430\u0441\u043F\u043E\u0440\u0442) \u043F\u0440\u0438\u0431\u043E\u0440\u0430. \u0412 \u0441\u0440\u0435\u0434\u043D\u0435\u043C \u0435\u0441\u043B\u0438 \u0412\u044B \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u0433\u043E\u0440\u044F\u0447\u0435\u0433\u043E \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0442\u043E \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E 21 \u043B\u0438\u0442\u0440 \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u0430 \u043D\u0430 1 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043C\u0435\u0442\u0440 \u0432 \u0433\u043E\u0434, \u0442.\u0435. \u0435\u0441\u043B\u0438 \u0434\u043E\u043C \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 135 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043C\u0435\u0442\u0440\u043E\u0432 \u0442\u043E \u0432 \u0433\u043E\u0434 \u0412\u0430\u043C \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 2835 \u043B\u0438\u0442\u0440\u043E\u0432 (135\u043A\u0432.\u043C.*21\u043B=2835\u043B/\u0433\u043E\u0434). \u0418\u0437 \u044D\u0442\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0447\u0442\u043E \u0434\u043B\u044F \u0434\u043E\u043C\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u044C\u044E 135 \u043A\u0432.\u043C. \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 \u043E\u0431\u044A\u0435\u043C\u043E\u043C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 \u0447\u0435\u043C 3500 \u043B\u0438\u0442\u0440\u043E\u0432, \u0442\u0430\u043A \u043A\u0430\u043A \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0434\u0430\u043D\u043D\u043E\u0439 \u0435\u043C\u043A\u043E\u0441\u0442\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 2975 \u043B\u0438\u0442\u0440\u043E\u0432 \u0438\u043B\u0438 85%. \u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0412\u0430\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F 1 \u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u0432 \u0433\u043E\u0434.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0432 \u0420\u041E\u0421\u0422\u0415\u0425\u041D\u0410\u0414\u0417\u041E\u0420\u0415?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u041C\u043D\u043E\u0433\u0438\u0435 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0442\u0441\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u0438\u043B\u0438 \u0443\u0436\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0430\u0445 \u043D\u0430\u0434\u0437\u043E\u0440\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0412\u0430\u0448\u0435\u043C \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u043E\u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u043E-\u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430 \u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0411\u043E\u043B\u0435\u0435 \u0442\u043E\u0433\u043E, \u043D\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u041F\u0411 12-609-03 (\u041F\u0440\u0438\u043A\u0430\u0437 \u0420\u043E\u0441\u0442\u0435\u0445\u043D\u0430\u0434\u0437\u043E\u0440\u0430 \u043E\u0442 01.08.2006 N 738). \u0426\u0438\u0442\u0430\u0442\u0430: \u043F1.1.5. \u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430: \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u0433\u043E\u0440\u044F\u0447\u0435\u0433\u043E \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u0431\u044B\u0442\u043E\u0432\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u0439 \u0441 \u043A\u043E\u0442\u043B\u0430\u043C\u0438, \u0442\u0435\u043F\u043B\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C\u0438, \u0431\u0435\u0437 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0438 (\u0438\u043B\u0438) \u043F\u0440\u0438 \u0441\u0443\u043C\u043C\u0430\u0440\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F 100 \u043A\u0412\u0442 \u0438 \u043C\u0435\u043D\u0435\u0435.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0412 \u0441\u0438\u043B\u0443 \u043F. 6.2.3 \u041F\u0440\u0430\u0432\u0438\u043B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u043E\u0441\u0443\u0434\u043E\u0432, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0445 \u043F\u043E\u0434 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C, \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0413\u043E\u0441\u0433\u043E\u0440\u0442\u0435\u0445\u043D\u0430\u0434\u0437\u043E\u0440\u0430 \u2116 91 \u043E\u0442 11.06.2003\u0433. \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0441\u0443\u0434\u043E\u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430. \u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F. 6 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F 1 \u0432\u044B\u0448\u0435\u043D\u0430\u0437\u0432\u0430\u043D\u043D\u044B\u0445 \u041F\u0440\u0430\u0432\u0438\u043B. \u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0433\u0430\u0437\u0433\u043E\u043B\u044C\u0434\u0435\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438\u043B\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0435\u043C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u0412 \u0441\u0438\u043B\u0443 \u043F.1 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u0435 \u043F\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0438 \u0430\u0442\u043E\u043C\u043D\u043E\u043C\u0443 \u043D\u0430\u0434\u0437\u043E\u0440\u0443, \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u043E\u043C\u0443 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u2116 401 \u043E\u0442 30 \u0438\u044E\u043B\u044F 2004\u0433. (\u0432 \u0440\u0435\u0434. \u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \u043E\u0442 21.01.2006 N 23, \u043E\u0442 14.12.2006 N 767, \u043E\u0442 29.05.2008 N 404, \u043E\u0442 07.11.2008 N 814, \u043E\u0442 27.01.2009 N 43, \u043E\u0442 08.08.2009 N 649) \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u043F\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0438 \u0430\u0442\u043E\u043C\u043D\u043E\u043C\u0443 \u043D\u0430\u0434\u0437\u043E\u0440\u0443 (\u0420\u043E\u0441\u0442\u0435\u0445\u043D\u0430\u0434\u0437\u043E\u0440) \u043D\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u0438 \u043D\u0430\u0434\u0437\u043E\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0431\u044B\u0442\u043E\u0432\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A \u0438 \u0441\u0435\u0442\u0435\u0439.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0432\u044B\u0448\u0435\u0438\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E, \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440 (\u0441\u043E\u0441\u0443\u0434 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0421\u0423\u0413), \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0412\u0430\u0448\u0435\u043C \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u043C \u0443\u0447\u0430\u0441\u0442\u043A\u0435, \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0438\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0420\u043E\u0441\u0442\u0435\u0445\u043D\u0430\u0434\u0437\u043E\u0440\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\nh2[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 15px;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-evenly;\n  font-family: \"Noto Sans\";\n  padding: 20px 20px;\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 30px 0;\n}\nimg[_ngcontent-%COMP%] {\n  width: 45%;\n  float: right;\n  margin: 15px 25px;\n}\nimg[_ngcontent-%COMP%]:nth-child(even) {\n  float: left;\n}\np[_ngcontent-%COMP%] {\n  word-spacing: 10px;\n  text-align: justify;\n  text-indent: 20px;\n  margin: 30px 0;\n  line-height: 28px;\n}\nli[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  word-spacing: 10px;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: default;\n  line-height: 28px;\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: #1FA123;\n}\nli[_ngcontent-%COMP%]:before {\n  padding-right: 10px;\n  font-weight: bold;\n  color: black;\n  content: \"\u2714\";\n  transition: ease-in 0.2s all;\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]:hover:before {\n  color: #1FA123;\n  content: \"\u2714\";\n}\n.faqs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 10px 0;\n  border: 1px solid lightgray;\n}\n.faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  background-color: #1FA123;\n  padding: 20px 10px;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\n.faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px 10px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 30px 0;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 90%;\n    float: none;\n  }\n\n  img[_ngcontent-%COMP%]:nth-child(even) {\n    float: none;\n  }\n\n  p[_ngcontent-%COMP%] {\n    word-spacing: 5px;\n  }\n\n  li[_ngcontent-%COMP%] {\n    word-spacing: 5px;\n  }\n\n  li[_ngcontent-%COMP%]:before {\n    color: #1FA123;\n  }\n\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    border-width: 2px;\n  }\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0px;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 30px 0;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    word-spacing: 5px;\n  }\n\n  li[_ngcontent-%COMP%] {\n    word-spacing: 5px;\n  }\n\n  li[_ngcontent-%COMP%]:before {\n    color: #1FA123;\n  }\n\n  .faqs[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n    margin: 0;\n    border-width: 2px;\n  }\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0px;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlL0M6XFxVc2Vyc1xcbmlrbWlcXGdhemdvbGRlcm5uL3NyY1xcYXBwXFxwYWdlc1xcc2VydmljZVxcc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRExKO0FDTUk7RUFDSSxjQVhJO0FET1o7QUNRQTtFQUNJLFlBQUE7QURMSjtBQ01JO0VBQ0ksY0FsQkk7QURjWjtBQ1FBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkE3Qkc7RUE4Qkgsa0JBQUE7RUFDQSxZQUFBO0FETEo7QUNRQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FETEo7QUNRQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURMSjtBQ1FBO0VBQ0ksV0FBQTtBRExKO0FDUUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURMSjtBQ1FBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FETEo7QUNRQTs7RUFFSSxlQUFBO0FETEo7QUNRQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBbkVBLDRCQUFBO0VBQ0EsZUFBQTtBRCtESjtBQ09BO0VBQ0ksY0ExRVE7QURzRVo7QUNPQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQS9FQSw0QkFBQTtFQUNBLGVBQUE7QUQ0RUo7QUNNQTtFQUNJLGNBdEZRO0VBdUZSLFlBQUE7QURISjtBQ01BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QURISjtBQ0lJO0VBUUksZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBRFRSO0FDQVE7RUFDSSx5QkFoR0E7RUFpR0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FERVo7QUNHUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRERaO0FDTUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VESE47O0VDS0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFREZOOztFQ0lFO0lBQ0ksV0FBQTtFREROOztFQ0dFO0lBQ0ksaUJBQUE7RURBTjs7RUNFRTtJQUNJLGlCQUFBO0VEQ047O0VDQ0U7SUFDSSxjQW5JSTtFRHFJVjs7RUNDTTtJQUlJLGNBQUE7SUFDQSxpQkFBQTtFRERWO0VDSFU7SUFDSSxrQkFBQTtFREtkO0VDRFU7SUFDSSxlQUFBO0VER2Q7QUFDRjtBQ0VBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFREFOOztFQ0VFO0lBQ0ksV0FBQTtJQUNBLFNBQUE7RURDTjs7RUNDRTtJQUNJLGlCQUFBO0VERU47O0VDQUU7SUFDSSxpQkFBQTtFREdOOztFQ0RFO0lBQ0ksY0FuS0k7RUR1S1Y7O0VDRkU7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFREtOO0VDSk07SUFJSSxTQUFBO0lBQ0EsaUJBQUE7RURHVjtFQ1BVO0lBQ0ksa0JBQUE7RURTZDtFQ0xVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RURPZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaDIge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmgyIHNwYW4ge1xuICBjb2xvcjogIzFGQTEyMztcbn1cblxuaDMge1xuICBtYXJnaW46IDE1cHg7XG59XG5oMyBzcGFuIHtcbiAgY29sb3I6ICMxRkExMjM7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRlbnQgPiBkaXYge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHggMjVweDtcbn1cblxuaW1nOm50aC1jaGlsZChldmVuKSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5wIHtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xufVxuXG5wLFxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzIGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saTpob3ZlciB7XG4gIGNvbG9yOiAjMUZBMTIzO1xufVxuXG5saTpiZWZvcmUge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBjb250ZW50OiBcIuKclFwiO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnMgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpOmhvdmVyOmJlZm9yZSB7XG4gIGNvbG9yOiAjMUZBMTIzO1xuICBjb250ZW50OiBcIuKclFwiO1xufVxuXG4uZmFxcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmZhcXMgZGV0YWlscyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5mYXFzIGRldGFpbHMgc3VtbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRkExMjM7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZhcXMgZGV0YWlscyBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50ID4gZGl2IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgaW1nOm50aC1jaGlsZChldmVuKSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICBwIHtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgfVxuXG4gIGxpIHtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgfVxuXG4gIGxpOmJlZm9yZSB7XG4gICAgY29sb3I6ICMxRkExMjM7XG4gIH1cblxuICAuZmFxcyBkZXRhaWxzIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgfVxuICAuZmFxcyBkZXRhaWxzIHN1bW1hcnkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZmFxcyBkZXRhaWxzIHAge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jb250ZW50ID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgcCB7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIH1cblxuICBsaSB7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIH1cblxuICBsaTpiZWZvcmUge1xuICAgIGNvbG9yOiAjMUZBMTIzO1xuICB9XG5cbiAgLmZhcXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuZmFxcyBkZXRhaWxzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIH1cbiAgLmZhcXMgZGV0YWlscyBzdW1tYXJ5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZhcXMgZGV0YWlscyBwIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiJGZvbnQ6ICdOb3RvIFNhbnMnO1xyXG4kTWFpbkNvbG9yOiAjMUZBMTIzO1xyXG5AbWl4aW4gYW5pbWF0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycyBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuaDMge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQ+ZGl2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMjVweDtcclxufVxyXG5cclxuaW1nOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxucCB7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAsXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKCk7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkTWFpbkNvbG9yO1xyXG59XHJcblxyXG5saTpiZWZvcmUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY29udGVudDogXCJcXDI3MTRcIjtcclxuICAgIEBpbmNsdWRlIGFuaW1hdGlvbigpO1xyXG59XHJcblxyXG5saTpob3ZlcjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICBjb250ZW50OiBcIlxcMjcxNFwiO1xyXG59XHJcblxyXG4uZmFxcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZGV0YWlscyB7XHJcbiAgICAgICAgc3VtbWFyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudD5kaXYge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogNXB4O1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogNXB4O1xyXG4gICAgfVxyXG4gICAgbGk6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogJE1haW5Db2xvcjtcclxuICAgIH1cclxuICAgIC5mYXFzIHtcclxuICAgICAgICBkZXRhaWxzIHtcclxuICAgICAgICAgICAgc3VtbWFyeSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuY29udGVudD5kaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICB3b3JkLXNwYWNpbmc6IDVweDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICB3b3JkLXNwYWNpbmc6IDVweDtcclxuICAgIH1cclxuICAgIGxpOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICRNYWluQ29sb3I7XHJcbiAgICB9XHJcbiAgICAuZmFxcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRldGFpbHMge1xyXG4gICAgICAgICAgICBzdW1tYXJ5IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service',
          templateUrl: './service.component.html',
          styleUrls: ['./service.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/toppanel/toppanel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/toppanel/toppanel.component.ts ***!
    \************************************************/

  /*! exports provided: ToppanelComponent */

  /***/
  function srcAppToppanelToppanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToppanelComponent", function () {
      return ToppanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToppanelComponent = /*#__PURE__*/function () {
      function ToppanelComponent() {
        _classCallCheck(this, ToppanelComponent);
      }

      _createClass(ToppanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToppanelComponent;
    }();

    ToppanelComponent.ɵfac = function ToppanelComponent_Factory(t) {
      return new (t || ToppanelComponent)();
    };

    ToppanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToppanelComponent,
      selectors: [["app-toppanel"]],
      decls: 12,
      vars: 0,
      consts: [[1, "top"], ["src", "assets/logo.png"], [1, "underlogo"], [1, "Header"], [1, "telephone"]],
      template: function ToppanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 2015 \u0433\u043E\u0434\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0441 \u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0441 9:00 \u0434\u043E 20:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+7-952-458-32-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  padding-top: 0;\n  font-family: \"Noto Sans\";\n}\n.top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  text-align: center;\n}\n.top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1FA123;\n  font-size: 20px;\n}\n.top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .underlogo[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .Header[_ngcontent-%COMP%] {\n  padding: 5px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  font-size: 22px;\n}\n.top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .telephone[_ngcontent-%COMP%] {\n  padding: 10px;\n  letter-spacing: 2px;\n}\n@media (max-width: 768px) {\n  .top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .underlogo[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .Header[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wcGFuZWwvQzpcXFVzZXJzXFxuaWttaVxcZ2F6Z29sZGVybm4vc3JjXFxhcHBcXHRvcHBhbmVsXFx0b3BwYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wcGFuZWwvdG9wcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFURztBQ09QO0FER0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLGNBZkE7RUFnQkEsZUFsQkY7QUNrQlY7QURFUTtFQUNJLGtCQUFBO0FDQVo7QURFUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FERVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBWjtBREtBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUNGTjtFREdNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7RUNEVjtFREVVO0lBQ0ksYUFBQTtFQ0FkO0VERVU7SUFDSSxtQkFBQTtFQ0FkO0VERVU7SUFDSSxZQUFBO0VDQWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvcHBhbmVsL3RvcHBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJEJpZ1NwYW46IDIwcHg7XHJcbiRmb250OiAnTm90byBTYW5zJztcclxuJE1haW5Db2xvcjogIzFGQTEyMztcclxuLnRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkTWFpbkNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRCaWdTcGFuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudW5kZXJsb2dvIHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuSGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVsZXBob25lIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudW5kZXJsb2dvIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCI7XG59XG4udG9wIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9wIGRpdiBzcGFuIHtcbiAgY29sb3I6ICMxRkExMjM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50b3AgZGl2IC51bmRlcmxvZ28ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udG9wIGRpdiAuSGVhZGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnRvcCBkaXYgLnRlbGVwaG9uZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9wIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnRvcCBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICAudG9wIGRpdiBpbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLnRvcCBkaXYgLnVuZGVybG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAudG9wIGRpdiAuSGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToppanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toppanel',
          templateUrl: './toppanel.component.html',
          styleUrls: ['./toppanel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\nikmi\gazgoldernn\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map