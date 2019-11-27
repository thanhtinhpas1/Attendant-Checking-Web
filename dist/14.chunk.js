webpackJsonp([14],{

/***/ "../../../../../src/app/quiz/quiz-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Quiz</h3>\r\n            <div class=\"navbar-btn\">\r\n                <div class=\"pull-right\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selected_course\" (ngModelChange)=\"onChangeCourse()\">\r\n                        <option *ngFor=\"let course of courses\" [ngValue]=\"course\">{{course.name}}-{{course.class_name}}</option>\r\n                    </select>\r\n                </div>\r\n                <button class=\"btn btn-round btn-primary pull-right\" (click)=\"onAddQuiz()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <tabset [justified]=\"true\">\r\n                <tab heading='Template'>\r\n                    <accordion>\r\n                        <ng-container *ngFor=\"let quiz of quiz_list; let i = index\">\r\n                            <ng-container *ngIf=\"quiz.is_template\">\r\n                                <accordion-group #group [isOpen]=\"quiz.isOpen\">\r\n                                    <h4 accordion-heading>\r\n                                        {{quiz.title}} - {{quiz.created_at | date:'short'}} - {{quiz.questions.length}} questions\r\n                                        <i class=\"pull-right float-xs-right fa\" [ngClass]=\"{'fa-chevron-down': group?.isOpen, 'fa-chevron-right': !group?.isOpen}\"></i>\r\n                                    </h4>\r\n                                    <button class=\"btn btn-success\" (click)=\"onSaveQuiz(i)\"><i class=\"fa fa-save\"></i> Save</button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"onDeleteQuiz(quiz.id)\"><i class=\"fa fa-times\"></i> Delete</button>\r\n                                    <div class=\"container-fluid\" *ngFor=\"let question of quiz.questions; let j = index\">\r\n                                        <form class=\"form-group well\">\r\n                                            <div class=\"form-group row\">\r\n                                                <div class=\"col-sm-6 col-xs-12\">\r\n                                                    <textarea autosize rows=\"2\" class=\"form-control only_bottom_border\" name=\"question_title_{{i}}\" placeholder=\"Question\" [(ngModel)]=\"question.text\" style=\"resize: none;\" (keydown)=\"onTabInTextarea($event)\"></textarea>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4 col-xs-6\">\r\n                                                    <label class=\"control-label col-sm-3\">Timer: </label>\r\n                                                    <div class=\"col-sm-9\">\r\n                                                        <select class=\"form-control\" [(ngModel)]=\"question.timer\" name=\"question_timer_{{j}}\">\r\n                                                            <option *ngFor=\"let timer of appService.timers\" [value]=\"timer.value\">{{timer.text}}</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\" *ngIf=\"quiz.questions.length > 1\">\r\n                                                    <button class=\"btn btn-danger\" (click)=\"onRemoveTemplateQuestion(i,j)\"><i class=\"fa fa-times\"></i></button>\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\" *ngIf=\"j == quiz.questions.length-1\">\r\n                                                    <button class=\"btn btn-primary\" (click)=\"onAddTemplateQuestion(i)\"><i class=\"fa fa-plus\"></i></button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group row\">\r\n                                                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                                    <input class=\"form-control\" name=\"question_{{j}}_option_a\" placeholder=\"Option A\" [(ngModel)]=\"question.option_a\">\r\n                                                </div>\r\n                                                <div class=\"col-sm-1 radio\">\r\n                                                    <label>\r\n                                                        <input type=\"radio\" name=\"optradio\" [value]=\"question.option_a\" [(ngModel)]=\"question.correct_option\">\r\n                                                        <p class=\"green_text\" *ngIf=\"question.option_a == question.correct_option\">Correct</p>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                                    <input class=\"form-control\" name=\"question_{{j}}_option_b\" placeholder=\"Option B\" [(ngModel)]=\"question.option_b\">\r\n                                                </div>\r\n                                                <div class=\"col-sm-1 radio\">\r\n                                                    <label>\r\n                                                        <input type=\"radio\" name=\"optradio\" [value]=\"question.option_b\" [(ngModel)]=\"question.correct_option\">\r\n                                                        <p class=\"green_text\" *ngIf=\"question.option_b == question.correct_option\">Correct</p>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group row\">\r\n                                                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                                    <input class=\"form-control\" name=\"question_{{j}}_option_c\" placeholder=\"Option C\" [(ngModel)]=\"question.option_c\">\r\n                                                </div>\r\n                                                <div class=\"col-sm-1 radio\">\r\n                                                    <label>\r\n                                                        <input type=\"radio\" name=\"optradio\" [value]=\"question.option_c\" [(ngModel)]=\"question.correct_option\">\r\n                                                        <p class=\"green_text\" *ngIf=\"question.option_c == question.correct_option\">Correct</p>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                                    <input class=\"form-control\" name=\"question_{{j}}_option_d\" placeholder=\"Option D\" [(ngModel)]=\"question.option_d\">\r\n                                                </div>\r\n                                                <div class=\"col-sm-1 radio\">\r\n                                                    <label>\r\n                                                        <input type=\"radio\" name=\"optradio\" [value]=\"question.option_d\" [(ngModel)]=\"question.correct_option\">\r\n                                                        <p class=\"green_text\" *ngIf=\"question.option_d == question.correct_option\">Correct</p>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </accordion-group>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </accordion>\r\n                </tab>\r\n                <tab heading='Result'>\r\n                    <accordion>\r\n                        <ng-container *ngFor=\"let quiz of quiz_list; let i = index\">\r\n                            <ng-container *ngIf=\"!quiz.is_template\">\r\n                                <accordion-group #group [isOpen]=\"quiz.isOpen\">\r\n                                    <h4 accordion-heading>\r\n                                        {{quiz.title}} - {{quiz.created_at | date:'short'}} - {{quiz.questions.length}} questions\r\n                                        <i class=\"pull-right float-xs-right fa\" [ngClass]=\"{'fa-chevron-down': group?.isOpen, 'fa-chevron-right': !group?.isOpen}\"></i>\r\n                                    </h4>\r\n                                    <button class=\"btn btn-danger\" (click)=\"onDeleteQuiz(quiz.id)\"><i class=\"fa fa-times\"></i> Delete</button>\r\n                                    <div class=\"row\" *ngFor=\"let question of quiz.questions\">\r\n                                        <div class=\"col-sm-8 col-xs-12\">\r\n                                            <h4 style=\"white-space: pre-wrap\"><label class=\"underline\">Q:</label> {{question.text}}</h4>\r\n                                            <h4 [ngClass]=\"{'green_text': question.option_a == question.correct_option}\">A. {{question.option_a}}</h4>\r\n                                            <h4 [ngClass]=\"{'green_text': question.option_b == question.correct_option}\">B. {{question.option_b}}</h4>\r\n                                            <h4 [ngClass]=\"{'green_text': question.option_c == question.correct_option}\">C. {{question.option_c}}</h4>\r\n                                            <h4 [ngClass]=\"{'green_text': question.option_d == question.correct_option}\">D. {{question.option_d}}</h4>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4 col-xs-12\" style=\"overflow:auto; max-height:300px;\">\r\n                                            <h4><label class=\"underline\">A:</label> {{question.answers.length}} answers</h4>\r\n                                            <table class=\"table table-striped\">\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let answer of question.answers\">\r\n                                                        <td>{{answer.student_name}} - {{answer.student_code}}</td>\r\n                                                        <td>{{answer.selected_option}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                        <hr/>\r\n                                    </div>\r\n                                </accordion-group>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </accordion>\r\n                </tab>\r\n            </tabset>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"deleteQuizModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Confirm Delete Quiz</h4>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"deleteQuiz()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addQuizModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Add new quiz</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"row modal-body\">\r\n                        <div class=\"well form-group\">\r\n                            <textarea autosize class=\"form-control only_bottom_border\" placeholder=\"Quiz title\" [(ngModel)]=\"quiz.title\" name=\"quiz_title\" style=\"font-size: large; resize: none;\"></textarea>\r\n                        </div>\r\n                        <div *ngFor=\"let question of quiz.questions; let i = index;\">\r\n                            <form class=\"form-group well\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-6 col-xs-12\">\r\n                                        <textarea autosize rows=\"2\" class=\"form-control only_bottom_border\" name=\"question_title_{{i}}\" placeholder=\"Question\" [(ngModel)]=\"question.text\" style=\"resize: none;\" (keydown)=\"onTabInTextarea($event)\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-xs-6\">\r\n                                        <label class=\"control-label col-sm-3\">Timer: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control\" [(ngModel)]=\"question.timer\" name=\"question_timer_{{i}}\">\r\n                                                <option *ngFor=\"let timer of appService.timers\" [value]=\"timer.value\">{{timer.text}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\" *ngIf=\"quiz.questions.length > 1\">\r\n                                        <button class=\"btn btn-danger\" (click)=\"onRemoveQuestion(i)\"><i class=\"fa fa-times\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\" *ngIf=\"i == quiz.questions.length-1\">\r\n                                    <button class=\"btn btn-primary\" (click)=\"onAddQuestion(i)\"><i class=\"fa fa-plus\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_a\" placeholder=\"Option A\" [(ngModel)]=\"question.option_a\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_a\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_a == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_b\" placeholder=\"Option B\" [(ngModel)]=\"question.option_b\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_b\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_b == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_c\" placeholder=\"Option C\" [(ngModel)]=\"question.option_c\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_c\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_c == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_d\" placeholder=\"Option D\" [(ngModel)]=\"question.option_d\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_d\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_d == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"addQuiz()\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizTeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizTeacherComponent = (function () {
    function QuizTeacherComponent(authService, courseService, appService, quizService, studentService, router) {
        this.authService = authService;
        this.courseService = courseService;
        this.appService = appService;
        this.quizService = quizService;
        this.studentService = studentService;
        this.router = router;
        this.courses = [];
        this.quiz_list = [];
        this.quiz = {
            id: 0,
            title: '',
            is_template: true,
            questions: [{
                    text: '',
                    option_a: '',
                    option_b: '',
                    option_c: '',
                    option_d: '',
                    correct_option: null,
                    timer: 10,
                    answers: []
                }]
        };
        this.deleting_quiz_id = 0;
    }
    QuizTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getTeachingCourses(this.authService.current_user.id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
            _this.courses = result.courses;
            _this.selected_course = _this.courses[0];
            _this.loadQuiz();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get teaching course", 'error'); });
    };
    QuizTeacherComponent.prototype.onChangeCourse = function () {
        this.loadQuiz();
    };
    QuizTeacherComponent.prototype.loadQuiz = function () {
        var _this = this;
        this.quizService.getQuizByCourseAndClass(this.selected_course['id'], this.selected_course['class_id']).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
            else {
                _this.quiz_list = result.quiz_list;
                for (var i = 0; i < _this.quiz_list.length; i++) {
                    _this.quiz_list[i]['isOpen'] = false;
                }
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get quiz list", 'error'); });
    };
    QuizTeacherComponent.prototype.onAddQuiz = function () {
        this.quiz = {
            id: 0,
            title: '',
            is_template: true,
            questions: [{
                    text: '',
                    option_a: '',
                    option_b: '',
                    option_c: '',
                    option_d: '',
                    correct_option: null,
                    timer: 10,
                    answers: []
                }]
        };
        jQuery('#addQuizModal').modal('show');
    };
    QuizTeacherComponent.prototype.addQuiz = function () {
        var _this = this;
        this.quizService.addQuiz(this.selected_course['id'], this.selected_course['class_id'], this.quiz).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
            else {
                _this.loadQuiz();
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'success');
                jQuery('#addQuizModal').modal('hide');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't add quiz", 'error'); });
    };
    QuizTeacherComponent.prototype.onAddQuestion = function () {
        this.quiz.questions.push({
            text: '',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            correct_option: null,
            timer: 10,
            answers: []
        });
    };
    QuizTeacherComponent.prototype.onRemoveQuestion = function (index) {
        for (var i = index; i < this.quiz.questions.length - 1; i++) {
            this.quiz.questions[i].text = this.quiz.questions[i + 1].text;
            this.quiz.questions[i].option_a = this.quiz.questions[i + 1].option_a;
            this.quiz.questions[i].option_b = this.quiz.questions[i + 1].option_b;
            this.quiz.questions[i].option_c = this.quiz.questions[i + 1].option_c;
            this.quiz.questions[i].option_d = this.quiz.questions[i + 1].option_d;
            this.quiz.questions[i].correct_option = this.quiz.questions[i + 1].correct_option;
            this.quiz.questions[i].timer = this.quiz.questions[i + 1].timer;
        }
        this.quiz.questions.pop();
    };
    QuizTeacherComponent.prototype.onSaveQuiz = function (index) {
        var _this = this;
        this.quizService.updateQuiz(this.quiz_list[index]).subscribe(function (result) {
            if (result.result == 'success') {
                _this.appService.showPNotify('success', result.message, 'success');
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't delete quiz", 'error'); });
    };
    QuizTeacherComponent.prototype.onDeleteQuiz = function (quiz_id) {
        this.deleting_quiz_id = quiz_id;
        jQuery('#deleteQuizModal').modal('show');
    };
    QuizTeacherComponent.prototype.deleteQuiz = function () {
        var _this = this;
        this.quizService.deleteQuiz(this.deleting_quiz_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
            else {
                _this.loadQuiz();
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'success');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't delete quiz", 'error'); });
    };
    QuizTeacherComponent.prototype.onTabInTextarea = function (event) {
        if (event.keyCode === 9) {
            // // get caret position/selection
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;
            var value = event.target.value;
            // set textarea value to: text before caret + tab + text after caret
            event.target.value = value.substring(0, start) + "\t" + value.substring(end);
            // put caret at right position again (add one for the tab)
            event.target.selectionStart = event.target.selectionEnd = start + 1;
            // prevent the focus lose
            event.preventDefault();
        }
    };
    QuizTeacherComponent.prototype.onAddTemplateQuestion = function (quiz_index) {
        this.quiz_list[quiz_index].questions.push({
            text: '',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            correct_option: null,
            timer: 10,
            answers: []
        });
    };
    QuizTeacherComponent.prototype.onRemoveTemplateQuestion = function (quiz_index, question_index) {
        for (var i = question_index; i < this.quiz_list[quiz_index].questions.length - 1; i++) {
            this.quiz_list[quiz_index].questions[i].text = this.quiz_list[quiz_index].questions[i + 1].text;
            this.quiz_list[quiz_index].questions[i].option_a = this.quiz_list[quiz_index].questions[i + 1].option_a;
            this.quiz_list[quiz_index].questions[i].option_b = this.quiz_list[quiz_index].questions[i + 1].option_b;
            this.quiz_list[quiz_index].questions[i].option_c = this.quiz_list[quiz_index].questions[i + 1].option_c;
            this.quiz_list[quiz_index].questions[i].option_d = this.quiz_list[quiz_index].questions[i + 1].option_d;
            this.quiz_list[quiz_index].questions[i].correct_option = this.quiz_list[quiz_index].questions[i + 1].correct_option;
            this.quiz_list[quiz_index].questions[i].timer = this.quiz_list[quiz_index].questions[i + 1].timer;
        }
        this.quiz_list[quiz_index].questions.pop();
    };
    return QuizTeacherComponent;
}());
QuizTeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quiz-teacher',
        template: __webpack_require__("../../../../../src/app/quiz/quiz-teacher.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["n" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["n" /* QuizService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], QuizTeacherComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=quiz-teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_teacher_component__ = __webpack_require__("../../../../../src/app/quiz/quiz-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module_autosize_autosize_module__ = __webpack_require__("../../../../../src/app/shared/module/autosize/autosize.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__quiz_teacher_component__["a" /* QuizTeacherComponent */] },
];
var QuizModule = (function () {
    function QuizModule() {
    }
    return QuizModule;
}());
QuizModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(Routes),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["d" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_module_autosize_autosize_module__["a" /* AutosizeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__quiz_teacher_component__["a" /* QuizTeacherComponent */],
        ],
        providers: []
    })
], QuizModule);

//# sourceMappingURL=quiz.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map