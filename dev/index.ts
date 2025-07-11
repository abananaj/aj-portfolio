// ==================== TESTS
console.log('hello from index.ts');
import {testModule} from "./scripts/testModule";
console.log(testModule);
// babel
[1, 2, 3].map(n => n + 1);

// ==================== STYLES
import "./index.scss";

// ==================== GSAP

// import "./scripts/nameMorph.ts";

// ==================== NAV
// import "./scripts/single-pg-nav.js";
    // import * as $ from 'jquery';
    // Or, if you have esModuleInterop enabled in tsconfig.json:
import $ from 'jquery';
    
class StickyNavigation {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $(".nav-tab a").click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => {
            this.onScroll();
        });
        $(window).resize(() => {
            this.onResize();
        });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop =
            $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset =
            $(".pg-header").offset().top +
            $(".pg-header").height() -
            this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $(".pg-menu").addClass("pg-menu--top");
        } else {
            $(".pg-menu").removeClass("pg-menu--top");
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $(".nav-tab a").each(function () {
            let id = $(this).attr("href");
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom =
                $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if (
                $(window).scrollTop() > offsetTop &&
                $(window).scrollTop() < offsetBottom
            ) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css("width");
            left = this.currentTab.offset().left;
        }
        $(".nav-tab-indicator").css("width", width);
        $(".nav-tab-indicator").css("left", left);
    }
}

new StickyNavigation();


// ==================== BOOTSTRAP
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";