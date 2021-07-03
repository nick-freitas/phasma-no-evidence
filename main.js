(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\phasma-no-evidence\src\main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavBarComponent {
    constructor() { }
    ngOnInit() { }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Phasma No-Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Phasma No-Evidence</a>
      </div>
    </nav>
  `,
                styles: [``],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "79Qe":
/*!*************************************!*\
  !*** ./src/app/time-change.pipe.ts ***!
  \*************************************/
/*! exports provided: TimeChangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeChangePipe", function() { return TimeChangePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimeChangePipe {
    transform(value) {
        return (Math.floor(value / 100) / 10).toFixed(1);
    }
}
TimeChangePipe.ɵfac = function TimeChangePipe_Factory(t) { return new (t || TimeChangePipe)(); };
TimeChangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "msToSec", type: TimeChangePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeChangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'msToSec' }]
    }], null, null); })();


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

/***/ "FFxU":
/*!*************************************!*\
  !*** ./src/app/data/ghosts.data.ts ***!
  \*************************************/
/*! exports provided: GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GHOSTS", function() { return GHOSTS; });
const GHOSTS = [
    // Non-Freezing
    {
        name: 'Poltergeist',
        description: `A Poltergeist's ability to manipulate objects, specifically doors, can make it easier to identify. However, if the ghost is one that specifically affects multiple light fixtures and other electronics at once, it's more likely to be a Jinn.Poltergeists throw items with higher force than other ghosts.
      An unwritten quirk of the Poltergeist is that they have the greatest capacity to roam from their Ghost Room, going far to move objects away from its space. In larger maps, this can result in red herrings when looking for Ghost Activity and cause players to waste time searching areas that ultimately do not house the Poltergeist.`,
        positiveTests: ['Poltergeist Test'],
    },
    {
        name: 'Revenant',
        description: `Unlike other Ghosts, who will often have a specific target selected when starting a Hunt they will hone in on, Revenants can freely switch targets if there is another player that is closer by - and especially one that is in plain view and available, making its goal of killing players more convenient. 
      If you are not hiding during a hunt the only way to stay alive is to light a smudge stick while it is chasing you to make it wander somewhere else.`,
        positiveTests: ['Revenant Test'],
    },
    {
        name: 'Jinn',
        description: `Jinns tend to interact with electronics more than any other ghost. They may cause phones to ring, radios to activate, TV's to turn on, or car alarms to go off more often. This also extends to light switches, which may cause unsure investigators to confuse a Jinn for a Mare or Poltergeist; although Mares also have the power to turn lights off, they will not often turn lights back on as Jinn do, and Poltergeists will likely disturb more general objects that aren't light switches such as doors.`,
        positiveTests: ['Jinn Test'],
    },
    {
        name: 'Spirit',
        description: 'With no special powers, and a harsher reaction to Smudge Sticks, Spirits serve as a baseline to measure other Ghosts against. With their behavior ranging from shy to active, passive to hostile, a Spirit can have any number of perceived characteristics. It is this lack of defining traits that can confuse investigators; therefore, a Spirit can be easily mistaken for another entity.',
        positiveTests: ['Spirit Test'],
    },
    {
        name: 'Oni',
        description: `The Oni is also described as being extremely strong, and it will throw objects around the room with great force when interacting with them. However, these objects are not dangerous to the hunters or their sanity unlike those thrown by Poltergeists.`,
    },
    {
        name: 'Shade',
        description: `Noted as being shy ghosts, Shades lower their activity in the presence of multiple investigators. Because of its temperament, it can be harder to find Ghost Activity when sticking together. However, like all ghosts in the game, the Shade is more likely to hunt when the players' Sanity is low.`,
        positiveTests: ['Shade Test'],
    },
    // Freezing
    {
        name: 'Wraith',
        description: 'Wraiths almost never touch the ground, but this does not apply to the ghost model. Because of this, footprint sounds from a wraith will be rare to non-existent, and they can travel directly through doors without having to open them.',
        requiresFreezingTemp: true,
        positiveTests: ['Wraith Test'],
    },
    {
        name: 'Phantom',
        description: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.',
        requiresFreezingTemp: true,
        positiveTests: ['Phantom Test'],
    },
    {
        name: 'Yurei',
        description: `A Yurei will drain sanity at 0.4% per second during a manifestation, this is higher then the usual 0.2% per second from other ghosts.
    The higher manifestation drain will also happen during a hunt if the player is within 10 meters of the ghost.`,
        requiresFreezingTemp: true,
        positiveTests: ['Yurei Test'],
    },
    {
        name: 'Mare',
        description: `Mares have a higher chance of initiating hunts when players are in darkness, especially if the lights are turned off in the ghost room. 
    It tends to turn lights and the fuse box off more than any other ghost type when active. An active Mare stalking low-sanity players have the capacity to 
    initiate hunts within mere moments of each other, allowing them to rival even Demons in aggression. Note that staying in the light does not prevent the 
    Mare from hunting; it will still be able to initiate Hunts provided it is not currently the Setup Phase, though it will be less aggressive in doing so 
    when compared to other ghost types.`,
        requiresFreezingTemp: true,
        positiveTests: ['Mare Test'],
    },
    {
        name: 'Banshee',
        description: `Unlike other ghosts, who will often change their selected target between Hunts, Banshees will always target the same player every time it hunts 
    until it successfully kills them. While this means other players are safe from the Banshee's power so long as its target is alive, it makes carrying out objectives 
    by the targeted player more difficult, though at the same time making it much easier for other players. Banshees fear the Crucifix, which boosts the Hunt-stopping 
    range of one from 3 meters to 5 meters against it.`,
        requiresFreezingTemp: true,
        positiveTests: ['Banshee Test'],
    },
    {
        name: 'Demon',
        description: `They are generally regarded as the most dangerous type of ghost to encounter; noted for being highly aggressive, it will attack more often than any other 
    ghost, and usually without warning. They are notorious for initiating hunts frequently, a trait that is exacerbated by lower sanity levels, and compounded by higher 
    difficulties like Professional where hunts last much longer. Taking all of these factors into account, Demons at their most aggressive will hunt in intervals as short 
    as half-minutes, forcing the players to spend more total time hiding than investigating.`,
        requiresFreezingTemp: true,
        positiveTests: ['Demon Test'],
    },
];


/***/ }),

/***/ "I/oy":
/*!***********************************!*\
  !*** ./src/app/data/maps.data.ts ***!
  \***********************************/
/*! exports provided: MAPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPS", function() { return MAPS; });
var MAP_SIZES;
(function (MAP_SIZES) {
    MAP_SIZES[MAP_SIZES["SMALL"] = 0] = "SMALL";
    MAP_SIZES[MAP_SIZES["MEDIUM"] = 1] = "MEDIUM";
    MAP_SIZES[MAP_SIZES["LARGE"] = 2] = "LARGE";
})(MAP_SIZES || (MAP_SIZES = {}));
const MAPS = [
    {
        name: 'Tanglewood Street House',
        size: MAP_SIZES.SMALL,
    },
    {
        name: 'Edgefield Street House',
        size: MAP_SIZES.SMALL,
    },
    {
        name: 'Ridgeview Road House',
        size: MAP_SIZES.SMALL,
    },
    {
        name: 'Grafton Farmhouse',
        size: MAP_SIZES.SMALL,
    },
    {
        name: 'Bleasdale Farmhouse',
        size: MAP_SIZES.SMALL,
    },
    {
        name: 'Brownstone High School',
        size: MAP_SIZES.MEDIUM,
    },
    {
        name: 'Prison',
        size: MAP_SIZES.MEDIUM,
    },
    {
        name: 'Asylum',
        size: MAP_SIZES.LARGE,
    },
].map((map) => {
    switch (map.size) {
        case MAP_SIZES.LARGE:
            map.setupDropRate = 0.03;
            map.normalDropRate = 0.05;
            break;
        case MAP_SIZES.MEDIUM:
            map.setupDropRate = 0.05;
            map.normalDropRate = 0.08;
            break;
        case MAP_SIZES.SMALL:
            map.setupDropRate = 0.09;
            map.normalDropRate = 0.12;
            break;
    }
    map.soloSetupDropRate = map.setupDropRate / 2.0;
    map.soloNormalDropRate = map.normalDropRate / 2.0;
    return map;
});


/***/ }),

/***/ "JXP5":
/*!********************************************************************************!*\
  !*** ./src/app/no-evidence-ghost-tester/no-evidence-ghost-tester.component.ts ***!
  \********************************************************************************/
/*! exports provided: NoEvidenceGhostTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoEvidenceGhostTesterComponent", function() { return NoEvidenceGhostTesterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_tests_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/tests.data */ "e6Y/");
/* harmony import */ var _data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ghosts.data */ "FFxU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NoEvidenceGhostTesterComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Warning: Changing the selection here will reset the Test selections below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoEvidenceGhostTesterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " In order to display tests you must first determine if there are freezing temps in the ghost rooms. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "btn-primary": a0, "btn-secondary": a1 }; };
function NoEvidenceGhostTesterComponent_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_ng_template_15_div_0_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.confirmPass(test_r7.name, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_ng_template_15_div_0_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.confirmPass(test_r7.name, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_ng_template_15_div_0_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.confirmPass(test_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Untested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, test_r7.passed === true, test_r7.passed !== true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, test_r7.passed === false, test_r7.passed !== false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, test_r7.passed === undefined, test_r7.passed !== undefined));
} }
function NoEvidenceGhostTesterComponent_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoEvidenceGhostTesterComponent_ng_template_15_div_0_div_1_Template, 11, 14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r7);
} }
function NoEvidenceGhostTesterComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoEvidenceGhostTesterComponent_ng_template_15_div_0_Template, 2, 1, "div", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tests);
} }
function NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Testable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Freezing Temps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Freezing Temps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_4_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_7_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_small_8_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ghost_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ghost_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ghost_r19.positiveTests == null ? null : ghost_r19.positiveTests.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ghost_r19.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ghost_r19.requiresFreezingTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ghost_r19.requiresFreezingTemp);
} }
function NoEvidenceGhostTesterComponent_div_17_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoEvidenceGhostTesterComponent_div_17_ul_5_li_1_Template, 9, 5, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.ghosts);
} }
function NoEvidenceGhostTesterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Possible Ghosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NoEvidenceGhostTesterComponent_div_17_ul_5_Template, 2, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ghosts == null ? null : ctx_r4.ghosts.length);
} }
function NoEvidenceGhostTesterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have more then 1 passed test, that is not possible!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.resetEverything(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click here to reset everything and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NoEvidenceGhostTesterComponent {
    constructor() {
        this.ghosts = _data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__["GHOSTS"].map((g) => (Object.assign({}, g)));
        this.tests = _data_tests_data__WEBPACK_IMPORTED_MODULE_1__["TESTS"].map((t) => (Object.assign({}, t)));
        this.duplicateTestResults = false;
    }
    ngOnInit() { }
    confirmFreezingTemp(confirm) {
        this.freezingTemps = confirm;
        if (confirm === undefined) {
            this.ghosts = _data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__["GHOSTS"].map((g) => (Object.assign({}, g)));
            return;
        }
        this.resetEverything(this.freezingTemps);
    }
    confirmPass(testName, passed) {
        console.log('testing');
        this.tests = this.tests.map((test) => {
            if (test.name === testName) {
                test.passed = passed;
            }
            return test;
        });
        // if this was a pass, then the one we did is the right one
        if (passed) {
            this.ghosts = [
                _data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__["GHOSTS"].find((ghost) => ghost.name ===
                    this.tests.find((test) => test.name === testName).positiveTestFor),
            ];
        }
        else {
            this.ghosts = this.applyTestResults(this.applyFreezeFilterToGhosts(_data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__["GHOSTS"]));
        }
        // See if we have multiple
        const numberOfPasses = this.tests.filter((test) => test.passed).length;
        if (numberOfPasses > 1) {
            this.duplicateTestResults = true;
        }
        else {
            this.duplicateTestResults = false;
        }
    }
    applyFreezeFilterToGhosts(ghosts) {
        return ghosts.filter((ghost) => !!this.freezingTemps === !!ghost.requiresFreezingTemp);
    }
    applyFreezeFilterToTests(tests) {
        return tests.filter((test) => !!this.freezingTemps === !!test.freezingTempTest);
    }
    applyTestResults(ghosts) {
        return ghosts.filter((ghost) => {
            // if there is no test we can perform, then return the ghost because we can't eliminate it
            if (!ghost.positiveTests || !ghost.positiveTests.length) {
                return ghost;
            }
            // if there are tests, make sure every test hasn't been failed (false)
            // (should be true for passed or undefined for unknown)
            return ghost.positiveTests.every((testName) => this.tests.find((test) => test.name === testName).passed !== false);
        });
    }
    resetEverything(freezingTemps) {
        this.duplicateTestResults = false;
        this.freezingTemps = freezingTemps;
        this.ghosts = this.applyFreezeFilterToGhosts(_data_ghosts_data__WEBPACK_IMPORTED_MODULE_2__["GHOSTS"].map((g) => (Object.assign({}, g))));
        this.tests = this.applyFreezeFilterToTests(_data_tests_data__WEBPACK_IMPORTED_MODULE_1__["TESTS"].map((t) => (Object.assign({}, t))));
        console.log('reset');
    }
}
NoEvidenceGhostTesterComponent.ɵfac = function NoEvidenceGhostTesterComponent_Factory(t) { return new (t || NoEvidenceGhostTesterComponent)(); };
NoEvidenceGhostTesterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoEvidenceGhostTesterComponent, selectors: [["app-no-evidence-ghost-tester"]], decls: 19, vars: 17, consts: [[1, "card"], [1, "freezing-temps"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", 3, "ngClass", "click"], ["class", "reset-warning", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf", "ngIfElse"], ["testBlock", ""], ["class", "card possible-ghosts mt-2", 4, "ngIf"], ["class", "alert alert-danger d-flex flex-column mt-2", "role", "alert", 4, "ngIf"], [1, "reset-warning"], [1, "card", "mt-2"], ["class", "card test mt-2", 4, "ngFor", "ngForOf"], [1, "card", "test", "mt-2"], ["class", "card-body", 4, "ngIf"], [1, "card", "possible-ghosts", "mt-2"], ["class", "list-group list-group-flush", 4, "ngIf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "flex-column", "mt-2"], [1, "btn", "btn-danger", 3, "click"]], template: function NoEvidenceGhostTesterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Freezing Temps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " There are 6 ghosts that show Freezing Temps and 6 ghosts that do not show Freezing Temps. On a No Evidence run, this can be accomplished by seeing or not seeing your breath in the ghost's room. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_Template_button_click_7_listener() { return ctx.confirmFreezingTemp(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_Template_button_click_9_listener() { return ctx.confirmFreezingTemp(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoEvidenceGhostTesterComponent_Template_button_click_11_listener() { return ctx.confirmFreezingTemp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unknown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NoEvidenceGhostTesterComponent_span_13_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NoEvidenceGhostTesterComponent_div_14_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NoEvidenceGhostTesterComponent_ng_template_15_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NoEvidenceGhostTesterComponent_div_17_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NoEvidenceGhostTesterComponent_div_18_Template, 5, 0, "div", 10);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.freezingTemps === true, ctx.freezingTemps !== true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.freezingTemps === false, ctx.freezingTemps !== false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.freezingTemps === undefined, ctx.freezingTemps !== undefined));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freezingTemps !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freezingTemps === undefined)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.duplicateTestResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duplicateTestResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.reset-warning[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  font-size: 0.8rem;\n  font-style: italic;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vLWV2aWRlbmNlLWdob3N0LXRlc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJuby1ldmlkZW5jZS1naG9zdC10ZXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXNldC13YXJuaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoEvidenceGhostTesterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-evidence-ghost-tester',
                templateUrl: './no-evidence-ghost-tester.component.html',
                styleUrls: ['./no-evidence-ghost-tester.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R94S":
/*!**************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.ts ***!
  \**************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _time_change_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-change.pipe */ "79Qe");




function StopwatchComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "msToSec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Delta: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.lapDelta), " ");
} }
function StopwatchComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "msToSec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lap_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, lap_r4), " ");
} }
function StopwatchComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (1 time is hidden) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StopwatchComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r3.lapTimes.length - 5, " times are hidden) ");
} }
const _c0 = function (a0, a1) { return { "btn-danger": a0, "btn-success": a1 }; };
class StopwatchComponent {
    constructor() {
        this.running = false;
        this.counter = 0;
        this.lapTimes = [];
        this.lapDelta = 0;
    }
    ngOnInit() { }
    startResumeTimer() {
        this.running = !this.running;
        //IF the counter is running startTime will be the number that the timer
        //starts with when you pause and resume, this.counter is the current time
        //that is displayed on the web browser
        if (this.running) {
            const startTime = Date.now() - (this.counter || 0);
            clearInterval(this.timerRef);
            this.timerRef = setInterval(() => {
                this.counter = Date.now() - startTime;
            });
        }
        else {
            clearInterval(this.timerRef);
        }
    }
    lapTime() {
        this.lapTimes.unshift(this.counter);
        if (this.lapTimes.length < 2) {
            this.lapDelta = 0;
            return;
        }
        this.lapDelta = this.lapTimes[0] - this.lapTimes[1];
    }
    clearTime() {
        this.running = false;
        this.counter = 0;
        this.lapTimes = [];
        this.lapDelta = 0;
        clearInterval(this.timerRef);
    }
    ngOnDestroy() {
        clearInterval(this.timerRef);
    }
}
StopwatchComponent.ɵfac = function StopwatchComponent_Factory(t) { return new (t || StopwatchComponent)(); };
StopwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StopwatchComponent, selectors: [["app-stopwatch"]], decls: 17, vars: 17, consts: [[1, "d-flex", "justify-content-center"], [1, "stopwatch-label", "d-flex", "justify-content-center"], ["id", "counterSize"], [1, "timer-btn-container", "d-flex", "flex-row", "justify-content-center", "row"], [1, "btn", "timer-btn", "d-flex", "justify-content-center", "col-md-6", 3, "ngClass", "click"], [1, "btn", "timer-btn", "btn-secondary", "d-flex", "justify-content-center", "col-md-6", 3, "click"], [1, "laptimes", "d-flex", "justify-content-center", "flex-column"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "font-italic", 4, "ngIf"], [1, "font-italic"]], template: function StopwatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "msToSec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_Template_button_click_7_listener() { return ctx.startResumeTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_Template_button_click_9_listener() { return ctx.running ? ctx.lapTime() : ctx.clearTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StopwatchComponent_span_12_Template, 3, 3, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StopwatchComponent_span_13_Template, 3, 3, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StopwatchComponent_span_15_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StopwatchComponent_span_16_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.counter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.running, !ctx.running));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.running ? "Stop" : "Start", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.running ? "Lap" : "Clear", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lapDelta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 10, ctx.lapTimes, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lapTimes.length === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lapTimes.length > 6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_time_change_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeChangePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: ["#counterSize[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0b3B3YXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3RvcHdhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvdW50ZXJTaXplIHtcclxuICBmb250LXNpemU6IDMuMnJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stopwatch',
                templateUrl: './stopwatch.component.html',
                styleUrls: ['./stopwatch.component.scss'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _sanity_tester_sanity_tester_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanity-tester/sanity-tester.component */ "r+Yk");
/* harmony import */ var _no_evidence_ghost_tester_no_evidence_ghost_tester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-evidence-ghost-tester/no-evidence-ghost-tester.component */ "JXP5");





class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "mt-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sanity-tester", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-no-evidence-ghost-tester", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _sanity_tester_sanity_tester_component__WEBPACK_IMPORTED_MODULE_2__["SanityTesterComponent"], _no_evidence_ghost_tester_no_evidence_ghost_tester_component__WEBPACK_IMPORTED_MODULE_3__["NoEvidenceGhostTesterComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styles: [''],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z2dG":
/*!*******************************************!*\
  !*** ./src/app/data/difficulties.data.ts ***!
  \*******************************************/
/*! exports provided: DIFFICULTIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIFFICULTIES", function() { return DIFFICULTIES; });
const DIFFICULTIES = [
    {
        name: 'Amateur',
        dropRate: 1.0,
    },
    {
        name: 'Intermediate',
        dropRate: 1.5,
    },
    {
        name: 'Professional',
        dropRate: 2.0,
    },
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "dsCx");
/* harmony import */ var _time_change_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-change.pipe */ "79Qe");
/* harmony import */ var _sanity_tester_sanity_tester_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sanity-tester/sanity-tester.component */ "r+Yk");
/* harmony import */ var _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stopwatch/stopwatch.component */ "R94S");
/* harmony import */ var _no_evidence_ghost_tester_no_evidence_ghost_tester_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./no-evidence-ghost-tester/no-evidence-ghost-tester.component */ "JXP5");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _time_change_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeChangePipe"],
        _sanity_tester_sanity_tester_component__WEBPACK_IMPORTED_MODULE_8__["SanityTesterComponent"],
        _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_9__["StopwatchComponent"],
        _no_evidence_ghost_tester_no_evidence_ghost_tester_component__WEBPACK_IMPORTED_MODULE_10__["NoEvidenceGhostTesterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _time_change_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeChangePipe"],
                    _sanity_tester_sanity_tester_component__WEBPACK_IMPORTED_MODULE_8__["SanityTesterComponent"],
                    _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_9__["StopwatchComponent"],
                    _no_evidence_ghost_tester_no_evidence_ghost_tester_component__WEBPACK_IMPORTED_MODULE_10__["NoEvidenceGhostTesterComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production,
                        // Register the ServiceWorker as soon as the app is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000'
                    })],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dsCx":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "navbar", "fixed-bottom", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "navbar-brand"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Calculations assume you have vsync on at 60fps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                template: `
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          Calculations assume you have vsync on at 60fps.
        </a>
      </div>
    </nav>
  `,
                styles: [``],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "e6Y/":
/*!************************************!*\
  !*** ./src/app/data/tests.data.ts ***!
  \************************************/
/*! exports provided: TESTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTS", function() { return TESTS; });
const TESTS = [
    // Non-Freezing
    {
        name: 'Poltergeist Test',
        description: 'When items are thrown in front of player, that players sainty drops 2 times the amount of items thrown percent.',
        positiveTestFor: 'Poltergeist',
    },
    {
        name: 'Revenant Test',
        description: `During a Hunt, the Revenant can move twice as fast the default speed when it is chasing a player, but it will move 1.5x slower when it isn't.`,
        positiveTestFor: 'Revenant',
    },
    {
        name: 'Jinn Test',
        description: `During a hunt the Jinn can move twice as fast the default speed when it is chasing a player until it is within 3 meters of the player and then it will drop back to regular hunting speed.`,
        positiveTestFor: 'Jinn',
    },
    {
        name: 'Spirit Test',
        description: `Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90`,
        positiveTestFor: 'Spirit',
    },
    {
        name: 'Shade Test',
        description: 'Most activity will only happen when there is only one player in the ghost room. If there are two or more people in the ghost room, it will not initiate a Hunt.',
        positiveTestFor: 'Shade',
    },
    // Freezing
    {
        name: 'Wraith Test',
        description: `When it disturbes a salt pile (there is an impression on the salt), it does not leave any footprints behind (there is no green footprint visible in black light). To be sure, check for footprints in 3 or more salt piles to determine if it's a Wraith.`,
        positiveTestFor: 'Wraith',
        freezingTempTest: true,
    },
    {
        name: 'Phantom Test',
        description: `Taking a photo of the Phantom will make it disappear.`,
        positiveTestFor: 'Phantom',
        freezingTempTest: true,
    },
    {
        name: 'Yurei Test',
        description: `Using Smudge Sticks on the Yurei will cause it to not wander around the location for 90 seconds.`,
        positiveTestFor: 'Yurei',
        freezingTempTest: true,
    },
    {
        name: 'Mare Test',
        description: `If it switchs lights off and never switches lights on, it is likely to be a Mare.`,
        positiveTestFor: 'Mare',
        freezingTempTest: true,
    },
    {
        name: 'Banshee Test',
        description: `If it hunts when the player(s) have more than 65% sanity, it's a Banshee.`,
        positiveTestFor: 'Banshee',
        freezingTempTest: true,
    },
    {
        name: 'Demon Test',
        description: `Sanity does not Drop when a question was asked successfully on a Ouiji Board.
    Or if there is no Ouiji Board on the map if a hunt starts and the player(s) sanity is between 50% - 65%,
    it's a Demon.`,
        positiveTestFor: 'Demon',
        freezingTempTest: true,
    },
];


/***/ }),

/***/ "lH3u":
/*!*************************************************!*\
  !*** ./src/app/sanity-tester/sanity.service.ts ***!
  \*************************************************/
/*! exports provided: SanityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanityService", function() { return SanityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_difficulties_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/difficulties.data */ "Z2dG");
/* harmony import */ var _data_maps_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/maps.data */ "I/oy");





class SanityService {
    constructor() {
        this.lowSanityDelta = -2;
        this.highSanityDelta = 3;
        this.sanity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ low: 0, high: 0 });
        this.nextSanity(100);
        this.inDarkness$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.map = _data_maps_data__WEBPACK_IMPORTED_MODULE_3__["MAPS"][0];
        this.difficulty = _data_difficulties_data__WEBPACK_IMPORTED_MODULE_2__["DIFFICULTIES"][0];
        this.subscriptions = [];
        this.subscriptions.push(this.inDarkness$.subscribe((inDarkness) => {
            if (!inDarkness) {
                return this.stopTimer();
            }
            this.timing = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe((_) => this.nextSanity(this.sanity$.value.low -
                this.lowSanityDelta -
                (this.map.normalDropRate || 0)));
        }));
    }
    stopTimer() {
        var _a;
        (_a = this.timing) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    setMap(map) {
        this.map = map;
    }
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    resetSanity(sanity) {
        sanity = sanity - this.lowSanityDelta;
        this.nextSanity(sanity);
    }
    setDarkness(value) {
        this.inDarkness$.next(value);
    }
    nextSanity(sanity) {
        this.sanity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            low: this.getLowSanity(sanity),
            high: this.getHighSanity(sanity),
        });
    }
    getLowSanity(sanity) {
        const lowSanity = sanity + this.lowSanityDelta;
        if (lowSanity < 0)
            return 0;
        return lowSanity;
    }
    getHighSanity(sanity) {
        const highSanity = sanity + this.highSanityDelta;
        if (highSanity > 100)
            return 100;
        return highSanity;
    }
}
SanityService.ɵfac = function SanityService_Factory(t) { return new (t || SanityService)(); };
SanityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SanityService, factory: SanityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "r+Yk":
/*!**********************************************************!*\
  !*** ./src/app/sanity-tester/sanity-tester.component.ts ***!
  \**********************************************************/
/*! exports provided: SanityTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanityTesterComponent", function() { return SanityTesterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _data_maps_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/maps.data */ "I/oy");
/* harmony import */ var _data_difficulties_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/difficulties.data */ "Z2dG");
/* harmony import */ var _sanity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sanity.service */ "lH3u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stopwatch/stopwatch.component */ "R94S");









function SanityTesterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sanity_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, sanity_r3.high, "0.0-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, sanity_r3.low, "0.0-1"));
} }
function SanityTesterComponent_a_40_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SanityTesterComponent_a_40_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const map_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectMap(map_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", map_r4.name, " ");
} }
function SanityTesterComponent_a_49_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SanityTesterComponent_a_49_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const difficulty_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectDifficulty(difficulty_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const difficulty_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", difficulty_r7.name, " ");
} }
class SanityTesterComponent {
    constructor(sanityService) {
        this.sanityService = sanityService;
        this.resetValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.maps = _data_maps_data__WEBPACK_IMPORTED_MODULE_2__["MAPS"];
        this.map = this.maps[0];
        this.difficulties = _data_difficulties_data__WEBPACK_IMPORTED_MODULE_3__["DIFFICULTIES"];
        this.difficulty = this.difficulties[0];
        this.inDarkness = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.subscriptions = [];
        this.subscriptions.push(this.inDarkness.valueChanges.subscribe((value) => {
            this.sanityService.setDarkness(value);
        }));
    }
    selectMap(map) {
        this.map = map;
        this.sanityService.setMap(this.map);
    }
    selectDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.sanityService.setDifficulty(this.difficulty);
    }
    ngOnInit() { }
    resetSanity() {
        this.sanityService.resetSanity(this.resetValue.value);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
SanityTesterComponent.ɵfac = function SanityTesterComponent_Factory(t) { return new (t || SanityTesterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sanity_service__WEBPACK_IMPORTED_MODULE_4__["SanityService"])); };
SanityTesterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SanityTesterComponent, selectors: [["app-sanity-tester"]], decls: 53, vars: 9, consts: [[1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSanityTest", "aria-expanded", "true", "aria-controls", "collapseSanityTest", 1, "accordion-button"], ["id", "collapseSanityTest", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "d-flex", "row"], [1, "col-md-10"], [1, "d-flex", "flex-column"], ["type", "checkbox", "id", "inDarknessCheckbox", "checked", "", 1, "form-check-input", 3, "formControl"], ["for", "inDarknessCheckbox", 1, "form-check-label", "px-2"], [1, "font-italic", "px-4"], [1, "sanity-block", "d-flex", "flex-column", "my-4"], [1, ""], [1, "card-title"], ["class", "d-flex flex-row", 4, "ngIf"], [1, "d-flex", "flex-row"], ["type", "number", "id", "resetSanityTextBox", "placeholder", "Lowest sanity in range", 1, "", 3, "formControl"], [1, "btn", "btn-primary", 3, "click"], [1, "mt-4", "d-flex"], [1, "map"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "diff", "mx-4"], [1, "mt-4", "d-flex", "flex-row"], [1, "col-md-2"], [1, "dropdown-item", 3, "click"]], template: function SanityTesterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sanity Tester (beta) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tracks the standard amount of sanity you should lose for that specific Map and Difficutly. If you witness ghost activities and your final truck sanity is under this range, this is an indicator that you are looking at a Phantom or Yurei. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " In Darkness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (Sanity will count down while you are in darkness) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sanity Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SanityTesterComponent_div_22_Template, 9, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reset Sanity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SanityTesterComponent_Template_button_click_29_listener() { return ctx.resetSanity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SanityTesterComponent_a_40_Template, 2, 1, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SanityTesterComponent_a_49_Template, 2, 1, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-stopwatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inDarkness);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 7, ctx.sanityService.sanity$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.resetValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.map.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.difficulty.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.difficulties);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.font-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNhbml0eS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNhbml0eS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb250LWl0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanityTesterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sanity-tester',
                templateUrl: './sanity-tester.component.html',
                styleUrls: ['./sanity-tester.component.scss'],
            }]
    }], function () { return [{ type: _sanity_service__WEBPACK_IMPORTED_MODULE_4__["SanityService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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