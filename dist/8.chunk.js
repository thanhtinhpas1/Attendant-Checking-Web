webpackJsonp([8],{

/***/ "../../../../../src/app/teachers/teacher-detail/teacher-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div *ngIf=\"teacher_not_found\" class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3 class=\"course_title\">Teacher not found</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!teacher_not_found\" class=\"x_panel\">\r\n        <div class=\"x_content\">\r\n            <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\r\n                <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\" [src]=\"teacher.avatar\">\r\n                <ng-container *ngIf=\"!isEditingTeacher\">\r\n                    <h3>{{editing_name}}</h3>\r\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\r\n                        <li>\r\n                            <i class=\"fa fa-phone user-profile-icon\"></i> {{teacher.phone}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-envelope-o user-profile-icon\"></i> {{teacher.email}}\r\n                        </li>\r\n                    </ul>\r\n                    <button class=\"btn btn-primary\" (click)=\"onEditTeacher()\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isEditingTeacher\">\r\n                    <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\r\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\r\n                        <li>\r\n                            <i class=\"fa fa-phone\"></i>\r\n                            <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-envelope-o\"></i>\r\n                            <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\r\n                        </li>\r\n                    </ul>\r\n                    <button class=\"btn btn-default\" (click)=\"onCancelEditTeacher()\">Cancel</button>\r\n                    <button class=\"btn btn-success\" (click)=\"onSaveEditTeacher()\">Save</button>\r\n                </ng-container>\r\n                <br />\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                <tabset>\r\n                    <tab heading='Current Courses'>\r\n                        <table class=\"data table text-center table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Code</th>\r\n                                    <th>Name</th>\r\n                                    <th>Role</th>\r\n                                    <th>Class</th>\r\n                                    <th>Semester</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let course of teaching_courses\" (click)=\"onCellClick(course.id)\">\r\n                                    <td>{{course.course_code}}</td>\r\n                                    <td>{{course.course_name}}</td>\r\n                                    <td *ngIf=\"course.teacher_role\">TA</td>\r\n                                    <td *ngIf=\"!course.teacher_role\">Lecturer</td>\r\n                                    <td>{{course.class_name}}</td>\r\n                                    <td>{{course.semester_name}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<result-message-modal [modal_title]=\"apiResult\" [modal_message]=\"apiResultMessage\"></result-message-modal>"

/***/ }),

/***/ "../../../../../src/app/teachers/teacher-detail/teacher-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherDetailComponent = (function () {
    function TeacherDetailComponent(route, router, teacherService, appService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.teacherService = teacherService;
        this.appService = appService;
        this.teacher_not_found = false;
        this.teacher = {
            id: 0,
            first_name: '',
            last_name: '',
            class_name: '',
            status: 0,
            email: '',
            phone: '',
            avatar: '',
        };
        this.isEditingTeacher = false;
        this.route.params.subscribe(function (params) { _this.teacher_id = params['id']; });
        this.teacherService.getTeacherDetail(this.teacher_id)
            .subscribe(function (result) {
            _this.teacher = result.teacher;
            if (_this.teacher == undefined || _this.teacher == null) {
                _this.teacher_not_found = true;
                return;
            }
            _this.teaching_courses = result.teaching_courses;
            _this.editing_name = _this.teacher.first_name + ' ' + _this.teacher.last_name;
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't teacher detail", 'error'); });
    }
    TeacherDetailComponent.prototype.ngOnInit = function () {
    };
    TeacherDetailComponent.prototype.onCellClick = function (id) {
        //this.appService.navigationData.current_teacher_id = id;
        this.router.navigate(['courses/', id]);
    };
    TeacherDetailComponent.prototype.onEditTeacher = function () {
        this.editing_name = this.teacher.first_name + ' ' + this.teacher.last_name;
        this.editing_mail = this.teacher.email;
        this.editing_phone = this.teacher.phone;
        this.isEditingTeacher = true;
    };
    TeacherDetailComponent.prototype.onCancelEditTeacher = function () {
        this.isEditingTeacher = false;
    };
    TeacherDetailComponent.prototype.onSaveEditTeacher = function () {
        var _this = this;
        this.teacherService.updateTeacher(this.teacher_id, this.editing_name, this.editing_mail, this.editing_phone, this.teacher.avatar)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                _this.isEditingTeacher = false;
                _this.teacher.email = _this.editing_mail;
                _this.teacher.phone = _this.editing_phone;
            }
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't update teacher", 'error'); });
    };
    return TeacherDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], TeacherDetailComponent.prototype, "resultMessageModal", void 0);
TeacherDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'teacher-detail',
        template: __webpack_require__("../../../../../src/app/teachers/teacher-detail/teacher-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _e || Object])
], TeacherDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=teacher-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Teachers</h3>\r\n            <div class=\"pull-right navbar-btn\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" data-toggle=\"modal\" data-target=\"#addTeacherModal\"> <i class=\"fa fa-plus\"></i> Add </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onImportTeacher()\"> <i class=\"fa fa-upload\"></i> Import</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onExportTeacher()\"> <i class=\"fa fa-download\"></i> Export</button>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">\r\n                    <input placeholder=\"Search Teacher Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"onSearchChange()\" />\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <table class=\"table table-bordered text-center table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th (click)='onSortNameClick()'>\r\n                            Name\r\n                            <i *ngIf=\"sort_tag[sort_index] == 'asc'\" class=\"fa fa-chevron-up\"></i>\r\n                            <i *ngIf=\"sort_tag[sort_index] == 'dsc'\" class=\"fa fa-chevron-down\"></i>\r\n                        </th>\r\n                        <th>Phone</th>\r\n                        <th>Email</th>\r\n                        <th>Current Courses</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let teacher of teacher_list\" (click)='onCellClick(teacher.id,teacher.email)'>\r\n                        <td>{{teacher.first_name}} {{teacher.last_name}}</td>\r\n                        <td>{{teacher.phone}}</td>\r\n                        <td>{{teacher.email}}</td>\r\n                        <td>{{teacher.current_courses}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\r\n            <div class=\"form-group\">\r\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"onSearchChange()\">\r\n                    <option>10</option>\r\n                    <option>30</option>\r\n                    <option>50</option>\r\n                </select>\r\n                <span>Items/page</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addTeacherModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Add Teacher</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">First Name<span class=\"required\">*</span></label>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"newTeacherFirstName\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Last Name<span class=\"required\">*</span></label>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"newTeacherLastName\" name=\"last_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Email <span class=\"required\">*</span></label>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"newTeacherEmail\" name=\"email\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Phone </label>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"phone\" [(ngModel)]=\"newTeacherPhone\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <label> *Password will be the part before \"@\" in email</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelAddTeacher()\">Cancel</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onAddTeacher()\">Add</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<import-modal [import_type]=\"appService.import_export_type.teacher\" [title]=\"'Import Teacher'\" (onClose)=\"onCloseImport($event)\"></import-modal>\r\n<export-modal [export_type]=\"appService.import_export_type.teacher\" [title]=\"'Export Teacher'\" [search_data]=\"export_search_data\"></export-modal>"

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeachersComponent = (function () {
    function TeachersComponent(TeacherService, router, appService) {
        this.TeacherService = TeacherService;
        this.router = router;
        this.appService = appService;
        this.searchText = '';
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.newTeacherFirstName = "";
        this.newTeacherLastName = "";
        this.newTeacherPhone = "";
        this.newTeacherEmail = "";
        this.sort_tag = ['none', 'asc', 'dsc'];
        this.sort_index = 0;
        this.export_search_data = {};
        this.onSearchChange();
    }
    TeachersComponent.prototype.ngOnInit = function () { };
    TeachersComponent.prototype.onSearchChange = function () {
        var _this = this;
        this.TeacherService.getListTeachers(this.searchText, this.pageNumber, this.itemsPerPage, this.sort_tag[this.sort_index])
            .subscribe(function (result) {
            _this.teacher_list = result.teacher_list;
            _this.totalItems = result.total_items;
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't teacher list", 'error'); });
    };
    TeachersComponent.prototype.onPageChanged = function (event) {
        var _this = this;
        this.pageNumber = event.page;
        this.TeacherService.getListTeachers(this.searchText, this.pageNumber, this.itemsPerPage, this.sort_tag[this.sort_index])
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.teacher_list = result.teacher_list;
            _this.totalItems = result.total_items;
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't teacher list", 'error'); });
    };
    TeachersComponent.prototype.onSortNameClick = function () {
        if (this.sort_index == 2) {
            this.sort_index = 0;
        }
        else {
            this.sort_index++;
        }
        this.onSearchChange();
    };
    TeachersComponent.prototype.onCellClick = function (id, email) {
        this.router.navigate(['/teachers/', id]);
    };
    TeachersComponent.prototype.onCancelAddTeacher = function () {
        jQuery("#addTeacherModal").modal("hide");
        this.newTeacherEmail = this.newTeacherFirstName = this.newTeacherLastName = this.newTeacherPhone;
    };
    TeachersComponent.prototype.onAddTeacher = function () {
        var _this = this;
        this.TeacherService.addTeacher(this.newTeacherFirstName, this.newTeacherLastName, this.newTeacherEmail, this.newTeacherPhone)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                _this.newTeacherEmail = _this.newTeacherFirstName = _this.newTeacherLastName = _this.newTeacherPhone = "";
                _this.onSearchChange();
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't add teacher", 'error'); });
    };
    TeachersComponent.prototype.onImportTeacher = function () {
        this.importModal.onOpenModal();
    };
    TeachersComponent.prototype.onCloseImport = function (event) {
        this.onSearchChange();
    };
    TeachersComponent.prototype.onExportTeacher = function () {
        this.export_search_data = {};
        this.export_search_data['search_text'] = this.searchText;
        this.export_search_data['sort_tag'] = this.sort_tag[this.sort_index];
        this.exportModal.onOpenModal();
    };
    return TeachersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]) === "function" && _a || Object)
], TeachersComponent.prototype, "importModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]) === "function" && _b || Object)
], TeachersComponent.prototype, "exportModal", void 0);
TeachersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teachers',
        template: __webpack_require__("../../../../../src/app/teachers/teachers.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _e || Object])
], TeachersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=teachers.component.js.map

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teachers_component__ = __webpack_require__("../../../../../src/app/teachers/teachers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacher_detail_teacher_detail_component__ = __webpack_require__("../../../../../src/app/teachers/teacher-detail/teacher-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersModule", function() { return TeachersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var teachersRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__teachers_component__["a" /* TeachersComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__teacher_detail_teacher_detail_component__["a" /* TeacherDetailComponent */] }
];
var TeachersModule = (function () {
    function TeachersModule() {
    }
    return TeachersModule;
}());
TeachersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(teachersRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["d" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__teachers_component__["a" /* TeachersComponent */],
            __WEBPACK_IMPORTED_MODULE_5__teacher_detail_teacher_detail_component__["a" /* TeacherDetailComponent */]
        ],
        providers: []
    })
], TeachersModule);

//# sourceMappingURL=teachers.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map