"use strict";
"undefined" != typeof AOS && AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load"
    }),
    function() {
        var e = document.querySelectorAll(".card-stack"),
            o = ["load", "resize", "scroll"];
        [].forEach.call(e, function(e) {
            var t = e.querySelectorAll(".card-stack-item");
            o.forEach(function(e) {
                window.addEventListener(e, function() {
                    var d = [].slice.call(t).reverse();
                    d.reduce(function(e, t, o) {
                        var n = t.clientHeight + parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom")),
                            a = e + (n - (d[o - 1] ? d[o - 1].offsetTop - t.offsetTop : n)) / n,
                            r = t.firstElementChild,
                            l = r.firstElementChild,
                            c = "calc(-1rem * " + a + ")",
                            i = "calc(1 - .2 * " + a + ")",
                            s = "calc(1 - .03 * " + a + ")";
                        return r.style.transform = "translateY(" + c + ") scale(" + s + ")", l.style.opacity = i, a
                    }, 0)
                })
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="countup"]');

        function o(e) {
            var t = e.dataset.from ? +e.dataset.from : null,
                o = e.dataset.to ? +e.dataset.to : null,
                n = e.dataset.decimals ? +e.dataset.decimals : null,
                a = e.dataset.duration ? +e.dataset.duration : null,
                r = e.dataset.options ? JSON.parse(e.dataset.options) : null,
                l = new CountUp(e, t, o, n, a, r);
            l.error ? console.error(l.error) : (l.start(), e.classList.add("counted"))
        }
        "undefined" != typeof CountUp && e && [].forEach.call(e, function(e) {
            "countup:in" !== e.getAttribute("data-aos-id") && o(e)
        }), document.addEventListener("aos:in:countup:in", function(e) {
            if (e.detail instanceof Element) o(e.detail);
            else {
                var t = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
                [].forEach.call(t, function(e) {
                    o(e)
                })
            }
        })
    }(), jQuery().fancybox && ($.fancybox.defaults.image.preload = !1, $.fancybox.defaults.toolbar = !1, $.fancybox.defaults.clickContent = !1),
    function() {
        var e = document.querySelectorAll('[data-toggle="flickity"]');
        "undefined" != typeof Flickity && e && [].forEach.call(e, function(o) {
            o.addEventListener("click", function() {
                var e = parseInt(o.dataset.slide),
                    t = document.querySelector(o.dataset.target);
                Flickity.data(t).selectCell(e)
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll(".highlight");
        "undefined" != typeof hljs && e && [].forEach.call(e, function(e) {
            hljs.highlightBlock(e)
        })
    }(),
    function() {
        var e = document.querySelectorAll("[data-isotope]"),
            t = document.querySelectorAll("[data-filter]"),
            o = ["click"];
        e && t && Isotope && imagesLoaded && (window.onload = function() {
            [].forEach.call(e, function(e) {
                var t, o;
                t = e, o = Isotope.data(t), new imagesLoaded(t, function() {
                    o.layout()
                })
            }), [].forEach.call(t, function(t) {
                t.addEventListener(o[0], function(e) {
                    ! function(e, t) {
                        e.preventDefault();
                        var o = t.dataset.filter,
                            n = document.querySelector(t.dataset.target);
                        Isotope.data(n).arrange({
                            filter: o
                        })
                    }(e, t)
                })
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll("[data-map]");
        "undefined" != typeof mapboxgl && e && [].forEach.call(e, function(e) {
            var t, o, n, a;
            o = (t = e).dataset.map ? JSON.parse(t.dataset.map) : {}, n = {
                container: t,
                style: "mapbox://styles/mapbox/streets-v11",
                scrollZoom: !1,
                interactive: !1
            }, a = Object.assign(n, o), mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map(a)
        })
    }(),
    function() {
        var e = document.querySelectorAll(".modal");
        $(e).on({
            "show.bs.modal": function() {
                document.documentElement.style.overflowX = "visible"
            },
            "hidden.bs.modal": function() {
                document.documentElement.style.overflowX = ""
            }
        })
    }(),
    function() {
        var e = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropright"),
            t = document.querySelectorAll(".navbar-nav .dropdown"),
            o = document.querySelectorAll(".navbar-nav .dropright"),
            a = ["mouseenter"],
            r = ["mouseleave", "click"],
            l = 16;

        function c(e) {
            var t, o, n, a, r;
            window.innerWidth < 992 || (e.classList.add("showing"), setTimeout(function() {
                e.classList.remove("showing"), e.classList.add("show")
            }, 1), t = e.parentElement, o = t.parentElement, n = o.classList.contains("dropright"), a = n ? [-32, 0] : [0, 0], r = n ? "right-start" : "auto", Popper.createPopper(o, t, {
                placement: r,
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: a
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: l
                    }
                }]
            }))
        } [].forEach.call(e, function(t) {
            var n = t.querySelector(".dropdown-menu");
            a.forEach(function(e) {
                t.addEventListener(e, function() {
                    c(n)
                })
            }), r.forEach(function(e) {
                t.addEventListener(e, function(e) {
                    var t, o;
                    t = e, o = n, window.innerWidth < 992 || o.classList.contains("show") && ("click" === t.type && t.target.closest(".dropdown-menu form") || (o.classList.add("showing"), o.classList.remove("show"), setTimeout(function() {
                        o.classList.remove("showing")
                    }, 200)))
                })
            })
        }), [].forEach.call(o, function(e) {
            var t = e.querySelector('[data-toggle="dropdown"]'),
                o = e.querySelector(".dropdown-menu");
            t.addEventListener("click", function(e) {
                e.preventDefault(),
                    function(e, t) {
                        if (!(992 <= window.innerWidth)) {
                            e.stopPropagation();
                            var o = t.parentElement.closest(".dropdown-menu").querySelectorAll(".dropdown-menu");
                            [].forEach.call(o, function(e) {
                                e !== t && e.classList.remove("show")
                            }), t.classList.toggle("show")
                        }
                    }(e, o)
            })
        }), $(t).on("hide.bs.dropdown", function() {
            var e = this.querySelectorAll(".dropright .dropdown-menu");
            [].forEach.call(e, function(e) {
                var t;
                t = e, 992 <= window.innerWidth || t.classList.remove("show")
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll(".navbar-reveal"),
            t = ["load", "scroll"],
            a = window.pageYOffset;
        e && [].forEach.call(e, function(n) {
            t.forEach(function(e) {
                window.addEventListener(e, function() {
                    var e, t, o;
                    e = n, t = window.pageYOffset, o = a < t && 0 < t ? "-100%" : "0", e.querySelector(".navbar-collapse").classList.contains("show") || (e.style.transform = "translateY(".concat(o, ")")), a = t
                })
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll(".navbar"),
            r = ["load", "scroll"];

        function c(e) {
            e.classList.remove("navbar-dark"), e.classList.add("navbar-light"), e.style.boxShadow = "inset 1000px 1000px 1000px white"
        }

        function i(e) {
            e.classList.remove("navbar-light"), e.classList.add("navbar-dark"), s(e)
        }

        function s(e) {
            e.style.boxShadow = ""
        }

        function l(e, t, o, n, a) {
            var r = window.pageYOffset,
                l = a.classList.contains("show");
            "show" === e.type && c(t), "hidden" === e.type && o && s(t), "hidden" === e.type && (!n && !o || n && !r) && i(t), "load" !== e && "scroll" !== e || !n || l || (r ? c : i)(t)
        } [].forEach.call(e, function(t) {
            var o = t.querySelector(".navbar-collapse"),
                n = t.classList.contains("navbar-light"),
                a = t.classList.contains("navbar-togglable");
            r.forEach(function(e) {
                window.addEventListener(e, function() {
                    l(e, t, n, a, o)
                })
            }), $(o).on("show.bs.collapse hidden.bs.collapse", function(e) {
                l(e, t, n, a, o)
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="password"]');
        [].forEach.call(e, function(n) {
            n.addEventListener("click", function(e) {
                e.preventDefault();
                var t = document.querySelector(n.getAttribute("href")),
                    o = "password" === t.type ? "text" : "password";
                t.type = o
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="popover"]');
        e && $(e).popover()
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="price"]');
        "undefined" != typeof CountUp && e && [].forEach.call(e, function(r) {
            r.addEventListener("click", function() {
                var e = r.dataset.target,
                    t = document.querySelector(e),
                    o = t.innerHTML,
                    n = r.dataset.value,
                    a = new CountUp(t, o, n);
                a.error ? console.error(a.error) : a.start()
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="prices"]');
        "undefined" != typeof CountUp && e && [].forEach.call(e, function(o) {
            o.addEventListener("change", function() {
                var e = o.dataset.target,
                    t = document.querySelectorAll(e),
                    r = o.checked;
                [].forEach.call(t, function(e) {
                    var t = e.dataset.minValue,
                        o = e.dataset.maxValue,
                        n = e.innerHTML,
                        a = new CountUp(e, n, r ? o : t);
                    a.error ? console.error(a.error) : a.start()
                })
            })
        })
    }(),
    function() {
        var e = "[data-scroll]";
        "undefined" != typeof SmoothScroll && new SmoothScroll(e, {
            header: ".navbar.fixed-top",
            offset: function(e, t) {
                return t.dataset.offset ? t.dataset.offset : 24
            }
        })
    }(),
    function() {
        var e = document.querySelectorAll(".svg-shim > svg");
        /MSIE \d|Trident.*rv:/.test(navigator.userAgent) && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = window.getComputedStyle(e, null).getPropertyValue("color"),
                    o = (new XMLSerializer).serializeToString(e);
                o = "data:image/svg+xml," + (o = (o = (o = (o = (o = (o = o.replace(/currentColor/g, t)).replace(/\s\s+/g, " ")).replace(/</g, "%3C")).replace(/>/g, "%3E")).replace(/#/g, "%23")).replace(/"/g, "'"));
                var n = document.createElement("img");
                n.src = o, n.alt = "...";
                var a = e.parentNode;
                a.appendChild(n), a.removeChild(e)
            }(e)
        })
    }(),
    function() {
        var e = document.querySelectorAll(".table-clickable [data-href]");
        [].forEach.call(e, function(t) {
            t.addEventListener("click", function(e) {
                e.preventDefault(), document.location.href = t.dataset.href
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="table-features"]');
        [].forEach.call(e, function(t) {
            t.addEventListener("change", function() {
                var e = t.dataset.target;
                document.querySelector(e).classList.toggle("table-features-alt")
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="tooltip"]');
        e && $(e).tooltip()
    }(),
    function() {
        var e = document.querySelectorAll("[data-typed]");
        "undefined" != typeof Typed && e && [].forEach.call(e, function(e) {
            var t = e.dataset.options ? JSON.parse(e.dataset.options) : {},
                o = Object.assign({
                    typeSpeed: 30,
                    backSpeed: 30,
                    backDelay: 2e3,
                    loop: !0
                }, t);
            new Typed(e, o)
        })
    }();