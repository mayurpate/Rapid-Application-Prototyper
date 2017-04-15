        (function () {
            var kObject,jsCodeTOBeAdded = "", jsFileName = "", injectedJSCode = "", editor , pageIDBeforePrev , allsc , idFromDB , Vb, Wb, Xb, aa, N, Yb, G, ha, Zb, ia, O, $b, ja, ac, bc, ka, cc, la, ma, i, n, na, o, oa, dc, ec, fc, gc, hc, ic, jc, w, kc, lc, mc, t, nc, oc, pa, pc, ba, P, qc, rc, sc, H, Q, I, B, qa, ra, u, tc, ca, sa, uc, ta, vc, wc, xc, R, da, yc, ea, x, zc, Ac, Bc, Cc, C, Dc, Ec, Fc, ua, Gc, S, p, Hc, m, Ic, T, U, Jc, V, Kc, va, Lc, wa, Mc, v, Nc, Oc, xa, fa, Pc, Tc = {}.hasOwnProperty,
            f = function (a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) Tc.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                a.prototype = new c;
                a.__super__ = b.prototype;
                return a
            }, W = function () {
                return W.__super__.constructor.apply(this,
                    arguments)
            };
            f(W, Backbone.Model);
            W.prototype.url = function () {
                //return "/api/v1/project/" + this.id + "/htmlzip"

            };
            W.prototype.idAttribute = "unique_id";
            qa = W;
            var X = function () {
                return X.__super__.constructor.apply(this, arguments)
            };
            f(X, Backbone.Model);
           // X.prototype.urlRoot = "/api/v1/project";

           X.prototype.idAttribute = "unique_id";
           B = X;
           var J = function () {
            return J.__super__.constructor.apply(this, arguments)
        };
        f(J, Backbone.Collection);
        J.prototype.model = B;
            //J.prototype.url = "/api/v1/projects";    
            J.prototype.parse = function (a) {
                return a.projects
            };
            ra = J;
            window.JetstrapProject = B;
            window.JetstrapProjects = ra;
            window.DEBUG = window.DEBUG || !1;
            if (!window.DEBUG) {
                window.console || (window.console = {});
                xa = ["log", "debug", "warn", "info", "error"];
                fa = 0;
                for (Pc = xa.length; fa < Pc; fa++) Oc = xa[fa], console[Oc] = function () {}
            }
        window.Handlebars.registerHelper("p", function (a) {
            a.defaultValue();
            a = a.value();
            return new Handlebars.SafeString(a)
        });
        window.Handlebars.registerHelper("ps", function (a) {
            var b;
            b = a.defaultValue();
            a = a.value();
            return b !== a ? new Handlebars.SafeString(" " + a) : new Handlebars.SafeString("")
        });
        window.Handlebars.registerHelper("pattr", function (a, b) {
            var c, d;
            c = a.defaultValue();
            d = a.value();
            return c !== d ? new Handlebars.SafeString(" " + b + '="' + d + '"') : new Handlebars.SafeString("")
        });
        window.Handlebars.registerHelper("pcss", function (a, b) {
            var c;
            a.defaultValue();
            return (c = a.value()) && "" !== c ? new Handlebars.SafeString(" " + b + ": " + c + ";") : new Handlebars.SafeString("")
        });
        $.widget("jetstrap.collapser", {
            _create: function () {
                var a;
                a = this;
                return $("li > span", this.element).click(function () {
                    var b;
                    b = $(this).parent();
                    b.hasClass("active") ? a._collapse(b) : a._expand(b);
                    return !1
                })
            },
            _expand: function (a) {
                return a.addClass("active")
            },
            _collapse: function (a) {
                return a.removeClass("active")
            }
        });
        var y = function (a) {
            this.type = a;
            this.data = {}
        };
        f(y, Backbone.View);
        y.prototype.renderTemplate = function (a, b) {
            var c;
            c = $("#ds-widget-" + a).html();
            return Handlebars.compile(c)(b)
        };
        y.prototype.render = function () {
            var a, b;
            a = document.createElement("div");
            b = this.renderTemplate(this.type, this.data);
            $(a).html(b);
            return this.setElement(a)
        };
        var Y = function (a) {
            Y.__super__.constructor.call(this,
                "hidden");
            this.data = $.extend({}, a)
        };
        f(Y, y);
        Y.prototype.setValue = function () {};
        Y.prototype.getValue = function () {};
        ba = Y;
        var z = function (a) {
            z.__super__.constructor.call(this, "toggle");
            this.data = $.extend({}, a)
        };
        f(z, y);
        z.prototype.events = {
            "click .switch": "onToggleChanged"
        };
        z.prototype.onToggleChanged = function (a) {
            return $(a.currentTarget).find("input").is(":checked") ? this.trigger("valueChanged", this.data.onValue) : this.trigger("valueChanged", this.data.offValue)
        };
        z.prototype.render = function () {
            var a;
            z.__super__.render.apply(this,
                arguments);
            a = this.$el.find(".switch");
            return a.switchbtn(a.data())
        };
        z.prototype.setValue = function () {};
        v = z;
        var K = function (a) {
            K.__super__.constructor.call(this, "select");
            this.data = $.extend({}, a);
            this.data.items = a.items || []
        };
        f(K, y);
        K.prototype.events = {
            "change select": "onChange"
        };
        K.prototype.onChange = function (a) {
            a = $(a.currentTarget).val();
            return this.trigger("valueChanged", a)
        };
        K.prototype.setValue = function (a) {
            var b, c, d, e, h;
            e = this.data.items;
            h = [];
            c = 0;
            for (d = e.length; c < d; c++) b = e[c], b.value === a ? h.push(b.selected = !0) : h.push(b.selected = !1);
                return h
        };
        p = K;
        var ya = function () {
            ya.__super__.constructor.call(this, {
                items: [{
                    value: "icon-glass",
                    text: "glass"
                }, {
                    value: "icon-music",
                    text: "music"
                }, {
                    value: "icon-search",
                    text: "search"
                }, {
                    value: "icon-envelope",
                    text: "envelope"
                }, {
                    value: "icon-heart",
                    text: "heart"
                }, {
                    value: "icon-star",
                    text: "star"
                }, {
                    value: "icon-star-empty",
                    text: "star-empty"
                }, {
                    value: "icon-user",
                    text: "user"
                }, {
                    value: "icon-film",
                    text: "film"
                }, {
                    value: "icon-th-large",
                    text: "th-large"
                }, {
                    value: "icon-th",
                    text: "th"
                }, {
                    value: "icon-th-list",
                    text: "th-list"
                }, {
                    value: "icon-ok",
                    text: "ok"
                }, {
                    value: "icon-remove",
                    text: "remove"
                }, {
                    value: "icon-zoom-in",
                    text: "zoom-in"
                }, {
                    value: "icon-zoom-out",
                    text: "zoom-out"
                }, {
                    value: "icon-off",
                    text: "off"
                }, {
                    value: "icon-signal",
                    text: "signal"
                }, {
                    value: "icon-cog",
                    text: "cog"
                }, {
                    value: "icon-trash",
                    text: "trash"
                }, {
                    value: "icon-home",
                    text: "home"
                }, {
                    value: "icon-file",
                    text: "file"
                }, {
                    value: "icon-time",
                    text: "time"
                }, {
                    value: "icon-road",
                    text: "road"
                }, {
                    value: "icon-download-alt",
                    text: "download-alt"
                }, {
                    value: "icon-download",
                    text: "download"
                }, {
                    value: "icon-upload",
                    text: "upload"
                }, {
                    value: "icon-inbox",
                    text: "inbox"
                }, {
                    value: "icon-play-circle",
                    text: "play-circle"
                }, {
                    value: "icon-repeat",
                    text: "repeat"
                }, {
                    value: "icon-refresh",
                    text: "refresh"
                }, {
                    value: "icon-list-alt",
                    text: "list-alt"
                }, {
                    value: "icon-lock",
                    text: "lock"
                }, {
                    value: "icon-flag",
                    text: "flag"
                }, {
                    value: "icon-headphones",
                    text: "headphones"
                }, {
                    value: "icon-volume-off",
                    text: "volume-off"
                }, {
                    value: "icon-volume-down",
                    text: "volume-down"
                }, {
                    value: "icon-volume-up",
                    text: "volume-up"
                }, {
                    value: "icon-qrcode",
                    text: "qrcode"
                }, {
                    value: "icon-barcode",
                    text: "barcode"
                }, {
                    value: "icon-tag",
                    text: "tag"
                }, {
                    value: "icon-tags",
                    text: "tags"
                }, {
                    value: "icon-book",
                    text: "book"
                }, {
                    value: "icon-bookmark",
                    text: "bookmark"
                }, {
                    value: "icon-print",
                    text: "print"
                }, {
                    value: "icon-camera",
                    text: "camera"
                }, {
                    value: "icon-font",
                    text: "font"
                }, {
                    value: "icon-bold",
                    text: "bold"
                }, {
                    value: "icon-italic",
                    text: "italic"
                }, {
                    value: "icon-text-height",
                    text: "text-height"
                }, {
                    value: "icon-text-width",
                    text: "text-width"
                }, {
                    value: "icon-align-left",
                    text: "align-left"
                }, {
                    value: "icon-align-center",
                    text: "align-center"
                }, {
                    value: "icon-align-right",
                    text: "align-right"
                }, {
                    value: "icon-align-justify",
                    text: "align-justify"
                }, {
                    value: "icon-list",
                    text: "list"
                }, {
                    value: "icon-indent-left",
                    text: "indent-left"
                }, {
                    value: "icon-indent-right",
                    text: "indent-right"
                }, {
                    value: "icon-facetime-video",
                    text: "facetime-video"
                }, {
                    value: "icon-picture",
                    text: "picture"
                }, {
                    value: "icon-pencil",
                    text: "pencil"
                }, {
                    value: "icon-map-marker",
                    text: "map-marker"
                }, {
                    value: "icon-adjust",
                    text: "adjust"
                }, {
                    value: "icon-tint",
                    text: "tint"
                }, {
                    value: "icon-edit",
                    text: "edit"
                }, {
                    value: "icon-share",
                    text: "share"
                }, {
                    value: "icon-check",
                    text: "check"
                }, {
                    value: "icon-move",
                    text: "move"
                }, {
                    value: "icon-step-backward",
                    text: "step-backward"
                }, {
                    value: "icon-fast-backward",
                    text: "fast-backward"
                }, {
                    value: "icon-backward",
                    text: "backward"
                }, {
                    value: "icon-play",
                    text: "play"
                }, {
                    value: "icon-pause",
                    text: "pause"
                }, {
                    value: "icon-stop",
                    text: "stop"
                }, {
                    value: "icon-forward",
                    text: "forward"
                }, {
                    value: "icon-fast-forward",
                    text: "fast-forward"
                }, {
                    value: "icon-step-forward",
                    text: "step-forward"
                }, {
                    value: "icon-eject",
                    text: "eject"
                }, {
                    value: "icon-chevron-left",
                    text: "chevron-left"
                }, {
                    value: "icon-chevron-right",
                    text: "chevron-right"
                }, {
                    value: "icon-plus-sign",
                    text: "plus-sign"
                }, {
                    value: "icon-minus-sign",
                    text: "minus-sign"
                }, {
                    value: "icon-remove-sign",
                    text: "remove-sign"
                }, {
                    value: "icon-ok-sign",
                    text: "ok-sign"
                }, {
                    value: "icon-question-sign",
                    text: "question-sign"
                }, {
                    value: "icon-info-sign",
                    text: "info-sign"
                }, {
                    value: "icon-screenshot",
                    text: "screenshot"
                }, {
                    value: "icon-remove-circle",
                    text: "remove-circle"
                }, {
                    value: "icon-ok-circle",
                    text: "ok-circle"
                }, {
                    value: "icon-ban-circle",
                    text: "ban-circle"
                }, {
                    value: "icon-arrow-left",
                    text: "arrow-left"
                }, {
                    value: "icon-arrow-right",
                    text: "arrow-right"
                }, {
                    value: "icon-arrow-up",
                    text: "arrow-up"
                }, {
                    value: "icon-arrow-down",
                    text: "arrow-down"
                }, {
                    value: "icon-share-alt",
                    text: "share-alt"
                }, {
                    value: "icon-resize-full",
                    text: "resize-full"
                }, {
                    value: "icon-resize-small",
                    text: "resize-small"
                }, {
                    value: "icon-plus",
                    text: "plus"
                }, {
                    value: "icon-minus",
                    text: "minus"
                }, {
                    value: "icon-asterisk",
                    text: "asterisk"
                }, {
                    value: "icon-exclamation-sign",
                    text: "exclamation-sign"
                }, {
                    value: "icon-gift",
                    text: "gift"
                }, {
                    value: "icon-leaf",
                    text: "leaf"
                }, {
                    value: "icon-fire",
                    text: "fire"
                }, {
                    value: "icon-eye-open",
                    text: "eye-open"
                }, {
                    value: "icon-eye-close",
                    text: "eye-close"
                }, {
                    value: "icon-warning-sign",
                    text: "warning-sign"
                }, {
                    value: "icon-plane",
                    text: "plane"
                }, {
                    value: "icon-calendar",
                    text: "calendar"
                }, {
                    value: "icon-random",
                    text: "random"
                }, {
                    value: "icon-comment",
                    text: "comment"
                }, {
                    value: "icon-magnet",
                    text: "magnet"
                }, {
                    value: "icon-chevron-up",
                    text: "chevron-up"
                }, {
                    value: "icon-chevron-down",
                    text: "chevron-down"
                }, {
                    value: "icon-retweet",
                    text: "retweet"
                }, {
                    value: "icon-shopping-cart",
                    text: "shopping-cart"
                }, {
                    value: "icon-folder-close",
                    text: "folder-close"
                }, {
                    value: "icon-folder-open",
                    text: "folder-open"
                }, {
                    value: "icon-resize-vertical",
                    text: "resize-vertical"
                }, {
                    value: "icon-resize-horizontal",
                    text: "resize-horizontal"
                }, {
                    value: "icon-hdd",
                    text: "hdd"
                }, {
                    value: "icon-bullhorn",
                    text: "bullhorn"
                }, {
                    value: "icon-bell",
                    text: "bell"
                }, {
                    value: "icon-certificate",
                    text: "certificate"
                }, {
                    value: "icon-thumbs-up",
                    text: "thumbs-up"
                }, {
                    value: "icon-thumbs-down",
                    text: "thumbs-down"
                }, {
                    value: "icon-hand-right",
                    text: "hand-right"
                }, {
                    value: "icon-hand-left",
                    text: "hand-left"
                }, {
                    value: "icon-hand-up",
                    text: "hand-up"
                }, {
                    value: "icon-hand-down",
                    text: "hand-down"
                }, {
                    value: "icon-circle-arrow-right",
                    text: "circle-arrow-right"
                }, {
                    value: "icon-circle-arrow-left",
                    text: "circle-arrow-left"
                }, {
                    value: "icon-circle-arrow-up",
                    text: "circle-arrow-up"
                }, {
                    value: "icon-circle-arrow-down",
                    text: "circle-arrow-down"
                }, {
                    value: "icon-globe",
                    text: "globe"
                }, {
                    value: "icon-wrench",
                    text: "wrench"
                }, {
                    value: "icon-tasks",
                    text: "tasks"
                }, {
                    value: "icon-filter",
                    text: "filter"
                }, {
                    value: "icon-briefcase",
                    text: "briefcase"
                }, {
                    value: "icon-fullscreen",
                    text: "fullscreen"
                }]
            })
    };
    f(ya, p);
    rc = ya;
    var za = function () {
        za.__super__.constructor.call(this, {
            items: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-danger",
                text: "Danger"
            }, {
                value: "btn-inverse",
                text: "Inverse"
            }]
        })
    };
    f(za, p);
    la = za;
    
    var NN = function(a, b) {
        return a.appendChild(b)
    };


    var FF = function() {
        FF.__super__.constructor.call(this, "linkto")
    };
    f(FF, y);
    

    FF.prototype.events = {"change select": "onChange"};
    
    FF.prototype.onChange = function(a) {
        var b;
        b = $(a.currentTarget).val();
        console.log("Text value changed", b);
        if ("_URL_" === b) {
            if (a = prompt("URL")) {
                this.data.url = a;
                this.trigger("valueChanged", a);
                this.render();
                return
            }
            this.data.url = "#";
            this.render()
        }
        return this.trigger("valueChanged", b)
    };
    FF.prototype.setValue = function(a) {
        this.data.url = a;
        return $(this.el).find("select").val(a)
    };
    FF.prototype.render = function() {
        var a, b, c, d, e, h, k, f, g;
        a = this.el || document.createElement("div");
        a.innerHTML = "";
        k = document.createElement("select");
        b = !1;
        c = document.createElement("option");
        c.innerHTML = "#";
        c.setAttribute("value", "#");
        "#" === this.data.url && c.setAttribute("selected", "selected");
        NN(k, c);
        
        c = getAllPagesForUrl();
        

        f = 0;
        for (g = c.length; f < g; f++)
            e = c[f], h = e , d = document.createElement("option"),
            d.innerHTML = e, d.setAttribute("value", h), h === this.data.url && (b = !0, d.setAttribute("selected", "selected")), NN(k, d);
        !b && "#" !== this.data.url && (b = document.createElement("option"), b.innerHTML = this.data.url, b.setAttribute("selected", "selected"), b.value = this.data.url, NN(k, b));
        b = document.createElement("option");
        b.innerHTML = "URL...";
        b.setAttribute("value", "_URL_");
        NN(k, b);
        NN(a, k);
        this.data.screens = c;
        this.setElement(a);
        //return $(this.el).find("select").select2({minimumResultsForSearch: 100})
    };

    allsc = FF;

    var Aa = function () {
        Aa.__super__.constructor.call(this, {
            items: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-large",
                text: "Large"
            }, {
                value: "btn-small",
                text: "Small"
            }, {
                value: "btn-mini",
                text: "Mini"
            }]
        })
    };
    f(Aa, p);
    ka = Aa;
    var Ba = function () {
        Ba.__super__.constructor.call(this, {
            onText: "yes",
            onValue: "disabled",
            offText: "no",
            offValue: ""
        })
    };
    f(Ba, v);
    ha = Ba;
    var Ca = function () {
        Ca.__super__.constructor.call(this, {
            items: [{
                value: "",
                text: "Default"
            }, {
                value: "alert-error",
                text: "Danger"
            }, {
                value: "alert-success",
                text: "Success"
            }, {
                value: "alert-info",
                text: "Info"
            }]
        })
    };
    f(Ca, p);
    Wb = Ca;
    var Da = function () {
        Da.__super__.constructor.call(this, {
            items: [{
                value: "",
                text: "Default"
            }, {
                value: "progress-success",
                text: "Success"
            }, {
                value: "progress-warning",
                text: "Warning"
            }, {
                value: "progress-danger",
                text: "Error"
            }]
        })
    };
    f(Da, p);
    Ec = Da;
    var L = function () {
        L.__super__.constructor.call(this, "singletext")
    };
    f(L, y);
    L.prototype.events = {
        "keyup input": "onKeyUp"
    };
    L.prototype.onKeyUp = function (a) {                    
        a = $(a.currentTarget).val();
        console.log("Text value changed", a);
        this.data.text = a;
        this.trigger("valueChanged", a);        
        return !0
    };
    L.prototype.setValue = function (a) {
        this.data.text = a;
        return $(this.el).find("input[type=text]").val(a)
    };
    m = L;
    var Qc = function (a) {
        Qc.__super__.constructor.call(this, "button", {
            text: a
        })
    };
    f(Qc, y);
    var D = function (a) {
        var b;
        _.extend(this, Backbone.Events);
        b = this;
        this.k = a.key;
        this.v = a.value;
        this.name = a.name;
        this.pos = a.pos;
        this.type = a.type;
        this.widgetdata = a.widgetdata;
        this.widget = new this.type(this.widgetdata);
        this.widget.setValue(this.v);
        this.widget.bind("valueChanged", function (a) {
            var d;
            d = b.v;
            b.v = a;
            return b.trigger("propertyChanged", d)
        });
        this.dv = this.v
    };
    D.prototype.key = function () {
        return this.k
    };
    D.prototype.value = function () {
        return this.v
    };
    D.prototype.defaultValue = function () {
        return this.dv
    };
    D.prototype.setValue = function (a) {
        this.v = a;
        return this.widget.setValue(this.v)
    };
    D.prototype.widget = function () {
        return this.widget
    };
    D.prototype.renderWidget = function () {
        this.widget.setValue(this.v);
        return this.widget.render()
    };
    var Rc = function () {};
    f(Rc, Backbone.View);
    var ga = function (a) {
        this.control = a
    };
    f(ga, Rc);
    ga.prototype.render = function () {
        var a, b, c, d, e;
        b = document.createElement("div");
        e = this.control.children;
        c = 0;
        for (d = e.length; c < d; c++) a = e[c], a.render(), $(b, window.FrameDocument).append(a.renderer.renderedElement);
            return this.el = b
    };
    ga.prototype.renderTo = function (a) {
        var b, c, d, e, h, l;
        d = this.control.children;
        l = [];
        e = 0;
        for (h = d.length; e < h; e++) b = d[e], c = document.createElement("div"), b.renderer.renderTo(c), l.push($(a).append($(c).contents()));
            return l
    };
    var s = function (a) {
        this.component = a
    };
    s.prototype.renderTemplate = function (a, b) {
        var c;
        c = $("#ds-component-" + a).html();
        return Handlebars.compile(c)(b)
    };
    s.prototype.renderToBuffer = function () {
        var a;
        a = document.createElement("div");
        this.renderTo(a);
        return this.bufferedElement = $(a).contents()
    };
    s.prototype.renderTo = function (a) {
        var b;
        b = $.extend({
            el_content: this.component.getContent
        }, this.component.propertyLookup);
        b = this.renderTemplate(this.component.type, b);
        $(a).html(b);
        b = document.createElement("div");
        this.component.layout.renderTo(b);
        return this.component.dropSelector ? $(":first", a).find(this.component.dropSelector).append($(b).contents()) : $(":first", a).append($(b).contents())
    };
    s.prototype.render = function () {
        var a, b;
        b = $.extend({
            el_content: this.component.getContent()
        }, this.component.propertyLookup);
        a = this.renderTemplate(this.component.type, b);
        "page" !== this.component.type ? (b = document.createElement("div"), $(b, FrameDocument).html(a)) : b = $("body", FrameDocument);
        0 < b.children.length && ("page" !== this.component.type ? (a = $(b, FrameDocument).children(), this.configureEditablePortion(this.component, a)) : (a = $("body", FrameDocument), a.empty()), a.addClass("ds-component"), a.attr("data-componentid", this.component.componentid),
            this.renderedElement = a, this.component.layout.render(), this.placeLaidChildren(this.renderedElement, this.component.layout.el));
        return this.el = b
    };
    s.prototype.placeLaidChildren = function (a, b) {
        var c;
        c = $(b, window.FrameDocument).contents();
        return this.component.dropSelector ? $(a).find(this.component.dropSelector).append(c) : $(a).append(c)
    };
    s.prototype.configureEditablePortion = function (a, b) {
        var c;
        if (!a.isContainer) return c = b.andSelf().find(a.editableSelector), c.attr("contenteditable", !0)
    };
    s.prototype.onHover = function () {
        return this.renderedElement.addClass("ds-hover")
    };
    s.prototype.onSelect = function () {
        return this.renderedElement.addClass("ds-selected")
    };
    s.prototype.onUnselect = function () {
        return this.renderedElement.removeClass("ds-selected")
    };
    var j = function (a, b) {
        this.type = a;
        this.name = b;
        this.componentid = null;
        this.propertyLookup = {};
        this.parent = null;
        this.children = [];
        this.layout = new ga(this);
        this.renderer = new s(this);
        this.isContainer = !1;
        this.p({
            name: "Id",
            key: "elementid",
            value: "",
            pos: 0,
            type: m
        });
        this.p({
            name: "Class",
            key: "elementclass",
            value: "",
            pos: 0,
            type: m
        });
        this.editableSelector = "> *"
    };
    f(j, Backbone.View);
    j.prototype.getId = function () {
        return this.componentid
    };
    j.prototype.setId = function (a) {
        return this.componentid = a
    };
    j.prototype.p = function (a) {
        var b, c;
        c = this;
        b = new D(a);
        b.bind("propertyChanged", function (a) {
            return c.trigger("propertyChanged", b, a)
        });
        return this.propertyLookup[a.key] = b
    };
    j.prototype.getValue = function (a) {
        if (a in this.propertyLookup) return this.propertyLookup[a]
    };
    j.prototype.setValue = function (a, b) {
        if (a in this.propertyLookup) return this.propertyLookup[a].setValue(b)
    };
    j.prototype.getProperties = function () {
        return this.propertyLookup
    };
    j.prototype.getSerializedPropertes = function () {
        var a, b, c, d;
        a = {};
        d = this.propertyLookup;
        for (b in d) c = d[b], a[b] = c.value();
            return a
    };
    j.prototype.initFromSerializedProperties = function (a) {
        var b, c, d, e;
        e = [];
        for (c in a) d = a[c], (b = this.propertyLookup[c]) ? e.push(b.setValue(d)) : e.push(void 0);
            return e
    };
    j.prototype.getContent = function () {
        return "DEFAULT"
    };
    j.prototype.duplicate = function () {
        var a,
        b, c, d, e;
        c = i.birth(this.type);
        e = c.getProperties();
        for (b in this.propertyLookup) if (a = this.propertyLookup[b], d = e[b]) a = a.value(), $.isArray(a) ? d.setValue($.extend(!0, [], a)) : "object" === typeof a ? d.setValue($.extend(!0, {}, a)) : d.setValue(a);
            e = this.children;
        b = 0;
        for (d = e.length; b < d; b++) a = e[b], a = a.duplicate(), c.appendChild(a);
            return c
    };
    j.prototype.onBirth = function (a) {
        var b, c, d, e;
        c = [];
        c.push(this);
        for (e = []; c.length;) d = c.shift(), e.push(function () {
            var e, l, f, g;
            f = d.children;
            g = [];
            e = 0;
            for (l = f.length; e < l; e++) b = f[e], b.componentid = i.newId(b.type), b.onBirth(a), a.register(b), g.push(c.splice(0, 0, b));
                return g
        }());
            return e
        };
        j.prototype.prependChild = function (a) {
            if (a === this) console.error("Can't add child of self!");
            else return this.children.splice(0, 0, a), a.parent = this, this.trigger("control.childrenChanged")
        };
    j.prototype.appendChild = function (a) {
        if (a === this) console.error("Can't add child of self!");
        else return this.children.push(a), a.parent = this, this.trigger("control.childrenChanged")
    };
    j.prototype.insertChild = function (a, b) {
        if (a === this) debugger; - 1 === b ? this.children.push(a) : this.children.splice(b, 0, a);
        a.parent = this;
        return this.trigger("control.childrenChanged")
    };
    j.prototype.insertAfter = function (a, b) {
        var c, d, e, h, l;
        if (a === this) debugger;
        l = this.children;
        d = e = 0;
        for (h = l.length; e < h; d = ++e) if (c = l[d], c === b) {
            this.children.splice(d + 1, 0, a);
            a.parent = this;
            return
        }
        return this.trigger("control.childrenChanged")
    };
    j.prototype.insertBefore = function (a, b) {
        var c, d, e, h, l;
        if (a === this) debugger;
        l = this.children;
        d = e = 0;
        for (h = l.length; e < h; d = ++e) if (c = l[d], c === b) {
            this.children.splice(d,
                0, a);
            a.parent = this;
            return
        }
        return this.trigger("control.childrenChanged")
    };
    j.prototype.removeChild = function (a) {
        var b, c, d, e, h;
        h = this.children;
        c = d = 0;
        for (e = h.length; d < e; c = ++d) if (b = h[c], b === a) return this.children.splice(c, 1)
    };
    j.prototype.moveChild = function (a) {
        var b, c, d, e, h, l;
        d = -1;
        l = this.children;
        c = e = 0;
        for (h = l.length; e < h; c = ++e) if (b = l[c], b === a) {
            d = c;
            break
        }
        if (!(0 > d)) return a = this.children.splice(c, 1), this.children.splice(d, 0, a), d
    };
    j.prototype.getIndex = function (a) {
        var b, c, d, e, h;
        h = this.children;
        c = d = 0;
        for (e = h.length; d < e; c = ++d) if (b = h[c], b === a) return c;
            return -1
    };
    j.prototype.render = function () {
        return this.renderer.render()
    };
    var A = function (a, b) {
        A.__super__.constructor.call(this, a, b);
        this.isContainer = !0;
        this.dropSelector = null;
        this._lastHoverIndex = -1;
        this._rejects = this._accepts = null
    };
    f(A, j);
    A.prototype.accept = function (a) {
        this._accepts || (this._accepts = {});
        return this._accepts[a] = 1
    };
    A.prototype.reject = function (a) {
        this._rejects || (this._rejects = {});
        return this._rejects[a] = 1
    };
    A.prototype.doesAccept = function (a) {
        return this._rejects && a in this._rejects || !this._accepts || a in this._accepts ? !0 : !1
    };
    A.prototype.onHover = function (a, b) {
        var c, d, e, h, l, f, g;
        c = this.renderer.renderedElement.get(0);
        $(".shim", c).remove();
        d = c.children;
        h = $(a.renderer.bufferedElement);
        h.addClass("shim");
        l = $(c);
        this.dropSelector && (l = $(c).find(this.dropSelector));
        if (0 >= d.length) l.append(a.renderer.bufferedElement);
        else {
            d = [];
            g = c.children;
            e = 0;
            for (f = g.length; e < f; e++) c = g[e], d.push(c);
                e = f = 0;
            for (g = d.length; f < g; e = ++f) if (c = d[e], o.isBefore(c, b)) {
                $(h).insertBefore(c);
                this._lastHoverIndex = e;
                return
            }
            l.append(h);
            return this._lastHoverIndex = -1
        }
    };
    A.prototype.onDrop = function (a) {
        if (-1 === this._lastHoverIndex) return this.appendChild(a), this.getIndex(a);
        this.insertChild(a, this._lastHoverIndex);
        return this.getIndex(a)
    };
    n = A;
    var Ea = function (a, b) {
        Ea.__super__.constructor.call(this, a, b);
        this.accept("_none_")
    };
    f(Ea, n);
    tc = Ea;
    var Fa = function () {
        Fa.__super__.constructor.call(this, "container", "Container");
        this.p({
            name: "Fluid Mode",
            key: "fluidmode",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Not Fluid"
                }, {
                    value: "-fluid",
                    text: "Fluid"
                }]
            }
        })
    };
    f(Fa, n);
    na = Fa;
    var Ga = function () {
        Ga.__super__.constructor.call(this, "content", "Html Content");
        this.p({
            name: "Content",
            key: "content",
            value: "<p>Content</b>",
            type: m
        })
    };
    f(Ga, j);
    P = Ga;
    var Ha = function (a, b) {
        a || (a = "link");
        b || (b = "Link");
        Ha.__super__.constructor.call(this, a, b);
        this.p({
            name: "URL",
            key: "href",
            value: "#",
            pos: 1,
            type: allsc
        });
        this.p({
            name: "Target",
            key: "target",
            value: "",
            pos: 4,
            type: m
        });
        this.p({
            name: "Content",
            key: "content",
            value: "Link",
            type: m
        })
    };
    f(Ha, j);
    u = Ha;
    var Ia = function (a,
        b) {
        a || (a = "button");
        b || (b = "Button");
        Ia.__super__.constructor.call(this, a, b);
        this.editableSelector = "a";
        this.p({
            name: "Content",
            key: "content",
            value: "Click Me",
            pos: 0,
            type: m
        });
        this.p({
            name: "URL",
            key: "href",
            value: "#",
            pos: 1,
            type: allsc
        });
        this.p({
            name: "Type",
            key: "type",
            value: "",
            pos: 2,
            type: la
        });
        this.p({
            name: "Size",
            key: "size",
            value: "",
            pos: 3,
            type: ka
        });
        this.p({
            name: "Target",
            key: "target",
            value: "",
            pos: 4,
            type: m
        });
        this.p({
            name: "Disabled",
            key: "disabled",
            value: "",
            pos: 5,
            type: ha
        })
    };
    f(Ia, j);
    G = Ia;
    var Ja = function (a, b) {
        var c,
        d, e;
        a || (a = "buttongroup");
        b || (b = "Button Group");
        Ja.__super__.constructor.call(this, a, b);
        this.accept("button");
        c = new G;
        c.setValue("content", "Button 1");
        d = new G;
        d.setValue("content", "Button 2");
        e = new G;
        e.setValue("content", "Button 3");
        this.appendChild(c);
        this.appendChild(d);
        this.appendChild(e)
    };
    f(Ja, n);
    ac = Ja;
    var Ka = function () {
        Ka.__super__.constructor.call(this, "buttontoolbar", "Button Toolbar");
        this.accept("buttongroup");
        this.accept("buttondropdown")
    };
    f(Ka, n);
    cc = Ka;
    var E = function () {
        var a;
        E.__super__.constructor.call(this,
            "buttondropdown", "Button Dropdown");
        this.accept("button");
        this.accept("buttondropdowntoggle");
        this.accept("buttondropdownlistitem");
        this.accept("buttondropdownlistitemdivider");
        a = new ja;
        this.appendChild(a);
        a = new ia;
        this.appendChild(a)
    };
    f(E, n);
    E.prototype.onHover = function () {
        E.__super__.onHover.apply(this, arguments);
        return $(this.renderer.renderedElement).addClass("open")
    };
    E.prototype.render = function () {
        E.__super__.render.apply(this, arguments);
        return $(this.renderer.renderedElement).dropdown()
    };
    Zb = E;
    var La = function () {
        La.__super__.constructor.call(this, "buttondropdowntoggle", "Button Dropdown Toggle")
    };
    f(La, G);
    ja = La;
    var Ma = function () {
        var a;
        Ma.__super__.constructor.call(this, "buttondropdownlist", "Button Dropdown List");
        a = new O;
        this.appendChild(a);
        a = new O;
        this.appendChild(a);
        a = new O;
        this.appendChild(a)
    };
    f(Ma, n);
    ia = Ma;
    var Na = function () {
        var a;
        Na.__super__.constructor.call(this, "buttondropdownlistitem", "Button Dropdown Item");
        a = new u;
        this.appendChild(a)
    };
    f(Na, j);
    O = Na;
    var Oa = function () {
        return Oa.__super__.constructor.apply(this,
            arguments)
    };
    f(Oa, j);
    $b = Oa;
    var Pa = function () {
        Pa.__super__.constructor.call(this, "icon", "Icon");
        this.p({
            name: "Icon",
            key: "icon",
            value: "icon-glass",
            type: rc
        })
    };
    f(Pa, j);
    qc = Pa;
    var Qa = function () {
        Qa.__super__.constructor.call(this, "image", "Image");
        this.p({
            name: "Src",
            key: "src",
            value: "http://localhost/imagefor/images.jpg",
            type: m
        });
        this.p({
            name: "Width",
            key: "width",
            value: "200px",
            type: m
        });
        this.p({
            name: "Height",
            key: "height",
            value: "261px",
            type: m
        })
    };
    f(Qa, j);
    sc = Qa;
    var Ra = function () {
        Ra.__super__.constructor.call(this, "heading",
            "Heading");
        this.p({
            name: "Content",
            key: "content",
            value: "Heading",
            pos: 0,
            type: m
        });
        this.p({
            name: "Size",
            key: "size",
            value: "3",
            type: p,
            widgetdata: {
                items: [{
                    value: "1",
                    text: "1"
                }, {
                    value: "2",
                    text: "2"
                }, {
                    value: "3",
                    text: "3"
                }, {
                    value: "4",
                    text: "4"
                }, {
                    value: "5",
                    text: "5"
                }]
            }
        })
    };
    f(Ra, j);
    pa = Ra;
    var Sa = function () {
        var a;
        Sa.__super__.constructor.call(this, "pageheader", "Page Header");
        a = new pa;
        this.appendChild(a);
        this.p({
            name: "Content",
            key: "content",
            value: "Heading 3",
            pos: 0,
            type: m
        })
    };
    f(Sa, j);
    Bc = Sa;
    var Ta = function () {
        var a;
        Ta.__super__.constructor.call(this,
            "alert", "Alert");
        a = new P;
        a.setValue("content", "<h1>Hello, World!</h1><p>This is a template</p>");
        this.appendChild(a);
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: Wb
        })
    };
    f(Ta, n);
    Vb = Ta;
    var Ua = function () {
        Ua.__super__.constructor.call(this, "progressbar", "Progress Bar");
        this.p({
            name: "Value",
            key: "value",
            value: 69,
            type: m
        });
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: Ec
        });
        this.p({
            name: "Striped",
            key: "striped",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "progress-striped",
                offText: "no",
                offValue: ""
            }
        });
        this.p({
            name: "Animated",
            key: "animated",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        })
    };
    f(Ua, j);
    Dc = Ua;
    var Va = function () {
        Va.__super__.constructor.call(this, "hr", "Horizontal Rule")
    };
    f(Va, j);
    oc = Va;
    var Wa = function () {
        Wa.__super__.constructor.call(this, "hero", "Hero Unit");
        this.content = new P;
        this.content.setValue("content", "<h1>Hello, World!</h1><p>I'm a super hero!</p>");
        this.appendChild(this.content)
    };
    f(Wa, n);
    pc = Wa;
    var Xa = function () {
        var a;
        Xa.__super__.constructor.call(this, "well", "Well");
        a = new P;
        a.setValue("content", "<h1>Hello, World!</h1><p>This is a template</p>");
        this.appendChild(a)
    };
    f(Xa, n);
    Nc = Xa;
    var Ya = function () {
        Ya.__super__.constructor.call(this, "taglabel", "Tag Label");
        this.p({
            name: "Text",
            key: "text",
            value: "",
            type: ba
        });
        this.p({
            name: "Content",
            key: "content",
            value: "label",
            type: m
        });
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "label-success",
                    text: "Success"
                }, {
                    value: "label-warning",
                    text: "Warning"
                }, {
                    value: "label-important",
                    text: "Important"
                }, {
                    value: "label-info",
                    text: "Info"
                }, {
                    value: "label-inverse",
                    text: "Inverse"
                }]
            }
        })
    };
    f(Ya, j);
    Kc = Ya;
    var Za = function () {
        Za.__super__.constructor.call(this, "badge", "Badge");
        this.p({
            name: "Text",
            key: "text",
            value: "",
            type: ba
        });
        this.p({
            name: "Text",
            key: "content",
            value: "badge",
            type: m
        });
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "badge-success",
                    text: "Success"
                }, {
                    value: "badge-warning",
                    text: "Warning"
                }, {
                    value: "badge-important",
                    text: "Important"
                }, {
                    value: "badge-info",
                    text: "Info"
                }, {
                    value: "badge-inverse",
                    text: "Inverse"
                }]
            }
        })
    };
    f(Za, j);
    Xb = Za;
    var $a = function () {
        var a;
        $a.__super__.constructor.call(this, "tabs", "Tabs");
        a = new T;
        a.link.setValue("content", "Link 1");
        this.appendChild(a);
        a = new T;
        a.link.setValue("content", "Link 2");
        this.appendChild(a);
        a = new T;
        a.link.setValue("content", "Link 3");
        this.appendChild(a)
    };
    f($a, n);
    Ic = $a;
    var ab = function () {
        ab.__super__.constructor.call(this, "tabitem", "Tab Item");
        this.p({
            name: "Active",
            key: "active",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        });
        this.link = new u;
        this.appendChild(this.link)
    };
    f(ab, j);
    T = ab;
    var bb = function () {
        bb.__super__.constructor.call(this, "navbar", "Nav Bar");
        this.dropSelector = "> .navbar-inner > *:first";
        this.brand = new ca;
        this.appendChild(this.brand);
        this.links = new da;
        this.appendChild(this.links);
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "navbar-inverse",
                    text: "Inverse"
                }]
            }
        });
        this.p({
            name: "Fixed mode",
            key: "fixedmode",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Not fixed"
                }, {
                    value: "navbar-fixed-top",
                    text: "Fixed Top"
                }, {
                    value: "navbar-fixed-bottom",
                    text: "Fixed Bottom"
                }]
            }
        });
        this.p({
            name: "Fluid Mode",
            key: "fluidmode",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Not Fluid"
                }, {
                    value: "-fluid",
                    text: "Fluid"
                }]
            }
        })
    };
    f(bb, n);
    vc = bb;
    var cb = function () {
        cb.__super__.constructor.call(this, "navbarcollapse", "Nav Bar Collapsible");
        this.dropSelector = "> .navbar-inner > *:first";
        this.button = new sa;
        this.appendChild(this.button);
        this.brand = new ca;
        this.appendChild(this.brand);
        this.container = new ta;
        this.appendChild(this.container);
        this.links = new da;
        this.container.appendChild(this.links);
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "navbar-inverse",
                    text: "Inverse"
                }]
            }
        });
        this.p({
            name: "Fixed mode",
            key: "fixedmode",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Not fixed"
                }, {
                    value: "navbar-fixed-top",
                    text: "Fixed Top"
                }, {
                    value: "navbar-fixed-bottom",
                    text: "Fixed Bottom"
                }]
            }
        });
        this.p({
            name: "Fluid Mode",
            key: "fluidmode",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Not Fluid"
                }, {
                    value: "-fluid",
                    text: "Fluid"
                }]
            }
        })
    };
    f(cb, n);
    uc = cb;
    var db = function () {
        db.__super__.constructor.call(this, "navbarcollapsebutton", "Nav Bar Collapsible Button")
    };
    f(db, n);
    sa = db;
    var eb = function () {
        eb.__super__.constructor.call(this, "navbarcollapsecontainer", "Nav Bar Collapsible Container")
    };
    f(eb, n);
    ta = eb;
    var fb = function () {
        fb.__super__.constructor.call(this, "navbarbrand", "Nav Bar Brand");
        this.setValue("content", "Brand")
    };
    f(fb, u);
    ca = fb;
    var gb = function () {
        var a;
        gb.__super__.constructor.call(this, "navbarlinks", "Nav Links");
        a = new R;
        a.link.setValue("content", "Link 1");
        this.appendChild(a);
        a = new R;
        a.link.setValue("content", "Link 2");
        this.appendChild(a);
        a = new R;
        a.link.setValue("content", "Link 3");
        this.appendChild(a);
        this.p({
            name: "Alignment",
            key: "alignment",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "No float"
                }, {
                    value: "pull-left",
                    text: "Left"
                }, {
                    value: "pull-right",
                    text: "Right"
                }]
            }
        })
    };
    f(gb, n);
    da = gb;
    var hb = function () {
        hb.__super__.constructor.call(this,
            "navbarlinkitem", "Nav Link Item");
        this.p({
            name: "Active",
            key: "active",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        });
        this.link = new u;
        this.appendChild(this.link)
    };
    f(hb, j);
    R = hb;
    var ib = function () {
        ib.__super__.constructor.call(this, "navbarlinkdivider", "Nav Link Divider")
    };
    f(ib, j);
    xc = ib;
    var jb = function () {
        var a;
        jb.__super__.constructor.call(this, "sidebarnav", "Nav List");
        this.dropSelector = "> .nav-list";
        a = new ea;
        a.setValue("content", "Header");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 1");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 2");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 3");
        this.appendChild(a)
    };
    f(jb, n);
    Hc = jb;
    var kb = function () {
        var a;
        kb.__super__.constructor.call(this, "navlist", "Nav List");
        a = new ea;
        a.setValue("content", "Header");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 1");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 2");
        this.appendChild(a);
        a = new x;
        a.setValue("content", "Item 3");
        this.appendChild(a)
    };
    f(kb, n);
    yc = kb;
    var lb = function () {
        lb.__super__.constructor.call(this, "navlistheader", "Nav List Header");
        this.p({
            name: "Text",
            key: "content",
            value: "Header 1",
            type: ba
        });
        this.p({
            name: "Text",
            key: "text",
            value: "Header 1",
            type: m
        })
    };
    f(lb, j);
    ea = lb;
    var mb = function () {
        var a;
        mb.__super__.constructor.call(this, "navlistitem", "Nav List Item");
        this.p({
            name: "Active",
            key: "active",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        });
        a = new u;
        this.appendChild(a)
    };
    f(mb, j);
    x = mb;
    var nb = function () {
        var a;
        nb.__super__.constructor.call(this, "breadcrumbs", "Breadcrumbs");
        a = new N;
        this.appendChild(a);
        a.link.setValue("content", "Playlists");
        a = new aa;
        this.appendChild(a);
        a = new N;
        this.appendChild(a);
        a.link.setValue("content", "Office");
        a = new aa;
        this.appendChild(a);
        a = new N;
        this.appendChild(a);
        a.link.setValue("content", "Rick Astley")
    };
    f(nb, n);
    Yb = nb;
    var ob = function () {
        ob.__super__.constructor.call(this, "breadcrumbitem", "Breadcrumb Item");
        this.link = new u;
        this.appendChild(this.link);
        this.p({
            name: "Active",
            key: "active",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        })
    };
    f(ob, j);
    N = ob;
    var pb = function () {
        pb.__super__.constructor.call(this, "breadcrumbdivider", "Breadcrumb Divider")
    };
    f(pb, j);
    aa = pb;
    var qb = function () {
        var a, b;
        qb.__super__.constructor.call(this, "pagination", "Pagination");
        b = new C;
        this.appendChild(b);
        a.link.setValue("content", "Prev");
        a = new C;
        this.appendChild(a);
        a.link.setValue("content", "1");
        b = new C;
        this.appendChild(b);
        b.link.setValue("content", "2");
        b = new C;
        this.appendChild(b);
        b.link.setValue("content", "3");
        b = new C;
        this.appendChild(b);
        a.link.setValue("content", "Next");
        this.p({
            name: "Alignment",
            key: "alignment",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Left"
                }, {
                    value: "pagination-centered",
                    text: "Center"
                }, {
                    value: "pagination-right",
                    text: "Right"
                }]
            }
        })
    };
    f(qb, n);
    Cc = qb;
    var rb = function () {
        rb.__super__.constructor.call(this, "paginationitem", "Pagination Item");
        this.p({
            name: "Active",
            key: "active",
            value: "",
            type: v,
            widgetdata: {
                onText: "yes",
                onValue: "active",
                offText: "no",
                offValue: ""
            }
        });
        this.link = new u;
        this.link.setValue("content", "n");
        this.appendChild(this.link)
    };
    f(rb, n);
    C = rb;
    var sb = function () {
        sb.__super__.constructor.call(this, "form", "Form")
    };
    f(sb, n);
    fc = sb;
    var tb = function () {
        tb.__super__.constructor.call(this, "navbarform", "Navbar Form");
        this.p({
            name: "Align",
            key: "alignment",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "pull-right",
                    text: "Right"
                }]
            }
        })
    };
    f(tb, n);
    wc = tb;
    var Z = function (a, b) {
        Z.__super__.constructor.call(this, a, b);
        this.p({
            name: "Name",
            key: "name",
            value: "",
            type: m
        })
    };
    f(Z, j);
    Z.prototype.onBirth = function (a) {
        Z.__super__.onBirth.call(this, a);
        this.setValue("name", this.componentid);
        if (this.parent && 0 <= this.parent.type.indexOf("inputgroup")) return a = this.parent.children[0], a.setValue("for", this.componentid)
    };
    H = Z;
    var ub = function () {
        ub.__super__.constructor.call(this, "buttoninput", "Button Input");
        this.p({
            name: "Content",
            key: "content",
            value: "Click Me",
            pos: 0,
            type: m
        });
        this.p({
            name: "Type",
            key: "type",
            value: "",
            pos: 2,
            type: la
        });
        this.p({
            name: "Size",
            key: "size",
            value: "",
            pos: 3,
            type: ka
        });
        this.p({
            name: "Disabled",
            key: "disabled",
            value: "",
            pos: 5,
            type: ha
        })
    };
    f(ub, H);
    bc = ub;
    var vb = function () {
        vb.__super__.constructor.call(this, "textinput", "Text Input");
        this.p({
            name: "Type",
            key: "type",
            value: "",
            type: p,
            widgetdata: {
                items: [{
                    value: "text",
                    text: "Text"
                }, {
                    value: "password",
                    text: "Password"
                }, {
                    value: "email",
                    text: "Email"
                }, {
                    value: "datetime",
                    text: "Datetime"
                }, {
                    value: "datetime-local",
                    text: "Datetime Local"
                }, {
                    value: "date",
                    text: "Date"
                }, {
                    value: "time",
                    text: "Time"
                }, {
                    value: "month",
                    text: "Month"
                }, {
                    value: "week",
                    text: "Week"
                }, {
                    value: "number",
                    text: "Number"
                }, {
                    value: "url",
                    text: "URL"
                }, {
                    value: "search",
                    text: "Search"
                }, {
                    value: "tel",
                    text: "Tel"
                }, {
                    value: "color",
                    text: "Color"
                }]
            }
        });
        this.p({
            name: "Placeholder",
            key: "placeholder",
            value: "",
            type: m
        })
    };
    f(vb, H);
    va = vb;
    var wb = function () {
        var a, b, c;
        wb.__super__.constructor.call(this, "selectinput", "Select Input");
        a = new S;
        b = new S;
        c = new S;
        a.setValue("label", "Option 1");
        a.setValue("value", "val1");
        b.setValue("label", "Option 2");
        b.setValue("value", "val2");
        c.setValue("label", "Option 3");
        c.setValue("value",
            "val3")
    };
    f(wb, H);
    ua = wb;
    var xb = function () {
        xb.__super__.constructor.call(this, "selectoption", "Select Option");
        this.p({
            name: "Value",
            key: "value",
            value: "",
            type: m
        });
        this.p({
            name: "Label",
            key: "label",
            value: "Option",
            type: m
        })
    };
    f(xb, j);
    S = xb;
    var yb = function () {
        yb.__super__.constructor.call(this, "fileinput", "File Inut")
    };
    f(yb, H);
    oa = yb;
    var zb = function () {
        zb.__super__.constructor.call(this, "textarea", "Textarea")
    };
    f(zb, H);
    wa = zb;
    var Ab = function () {
        Ab.__super__.constructor.call(this, "inputlabel", "Input Label");
        this.p({
            name: "For",
            key: "for",
            value: "",
            type: m
        });
        this.p({
            name: "Content",
            key: "content",
            value: "Label",
            type: m
        })
    };
    f(Ab, j);
    I = Ab;
    var Bb = function (a) {
        Bb.__super__.constructor.call(this, a)
    };
    f(Bb, tc);
    Q = Bb;
    var Cb = function () {
        var a, b;
        Cb.__super__.constructor.call(this, "textinputgroup", "Input group");
        b = new I;
        a = new va;
        this.appendChild(b);
        this.appendChild(a)
    };
    f(Cb, Q);
    Lc = Cb;
    var Db = function () {
        var a, b;
        Db.__super__.constructor.call(this, "selectinputgroup", "Input group");
        b = new I;
        a = new ua;
        this.appendChild(b);
        this.appendChild(a)
    };
    f(Db, Q);
    Gc = Db;
    var Eb = function () {
        var a, b;
        Eb.__super__.constructor.call(this, "fileinputgroup", "Input group");
        b = new I;
        a = new oa;
        this.appendChild(b);
        this.appendChild(a)
    };
    f(Eb, Q);
    dc = Eb;
    var Fb = function () {
        var a, b;
        Fb.__super__.constructor.call(this, "textareainputgroup", "Input group");
        b = new I;
        a = new wa;
        this.appendChild(b);
        this.appendChild(a)
    };
    f(Fb, Q);
    Mc = Fb;
    var Gb = function () {
        var a, b, c;
        Gb.__super__.constructor.call(this, "table", "Table");
        a = new V;
        b = new V;
        c = new V;
        this.appendChild(a);
        this.appendChild(b);
        this.appendChild(c)
    };
    f(Gb, n);
    Jc = Gb;
    var Hb = function () {
        var a, b, c;
        Hb.__super__.constructor.call(this, "tablerow", "Table Row");
        a = new U;
        b = new U;
        c = new U;
        this.appendChild(a);
        this.appendChild(b);
        this.appendChild(c)
    };
    f(Hb, n);
    V = Hb;
    var Ib = function () {
        Ib.__super__.constructor.call(this, "tablecell", "Table Cell")
    };
    f(Ib, n);
    U = Ib;
    var Jb = function () {
        var a, b, c;
        Jb.__super__.constructor.call(this, "gridrow", "Grid Row");
        a = new w;
        b = new w;
        c = new w;
        this.appendChild(a);
        this.appendChild(b);
        this.appendChild(c)
    };
    f(Jb, n);
    nc = Jb;
    var Kb = function () {
        var a, b,
        c;
        Kb.__super__.constructor.call(this, "fluidgridrow", "Fluid Grid Row");
        a = new w;
        b = new w;
        c = new w;
        this.appendChild(a);
        this.appendChild(b);
        this.appendChild(c)
    };
    f(Kb, n);
    ec = Kb;
    var Lb = function (a, b) {
        Lb.__super__.constructor.call(this, a, b);
        this.p({
            name: "Size",
            key: "size",
            value: 1,
            type: m
        });
        this.p({
            name: "Content",
            key: "content",
            value: "",
            type: m
        })
    };
    f(Lb, n);
    t = Lb;
    var Mb = function () {
        Mb.__super__.constructor.call(this, "gridcol1", "Span 1");
        this.p({
            name: "Size",
            key: "size",
            value: 1,
            type: m
        })
    };
    f(Mb, t);
    hc = Mb;
    var Nb = function () {
        Nb.__super__.constructor.call(this,
            "gridcol2", "Span 2");
        this.p({
            name: "Size",
            key: "size",
            value: 2,
            type: m
        })
    };
    f(Nb, t);
    ic = Nb;
    var Ob = function () {
        Ob.__super__.constructor.call(this, "gridcol3", "Span 3");
        this.p({
            name: "Size",
            key: "size",
            value: 3,
            type: m
        })
    };
    f(Ob, t);
    jc = Ob;
    var Pb = function () {
        Pb.__super__.constructor.call(this, "gridcol4", "Span 4");
        this.p({
            name: "Size",
            key: "size",
            value: 4,
            type: m
        })
    };
    f(Pb, t);
    w = Pb;
    var Qb = function () {
        Qb.__super__.constructor.call(this, "gridcol6", "Span 6");
        this.p({
            name: "Size",
            key: "size",
            value: 6,
            type: m
        })
    };
    f(Qb, t);
    kc = Qb;
    var Rb = function () {
        Rb.__super__.constructor.call(this, "gridcol8", "Span 8");
        this.p({
            name: "Size",
            key: "size",
            value: 8,
            type: m
        })
    };
    f(Rb, t);
    lc = Rb;
    var Sb = function () {
        Sb.__super__.constructor.call(this, "gridcol9", "Span 9");
        this.p({
            name: "Size",
            key: "size",
            value: 9,
            type: m
        })
    };
    f(Sb, t);
    mc = Sb;
    var Tb = function () {
        Tb.__super__.constructor.call(this, "gridcol12", "Span 12");
        this.p({
            name: "Size",
            key: "size",
            value: 12,
            type: m
        })
    };
    f(Tb, t);
    gc = Tb;
    var Ub = function () {
        var a;
        Ub.__super__.constructor.call(this, "page", "Page");
        a = new na;
        this.appendChild(a)
    };
    f(Ub, n);
    Ac = Ub;
    var k = function () {
        _.extend(this, Backbone.Events);
        this._componentMap = {};
        this._actionStack = [];
        this._redoStack = [];
        this.project = new B;
        i.document = this;
        this.initWithDefaults()
    };
    k.ActionTypes = {
        ADD: 0,
        REMOVE: 1,
        MOVE_TO: 2,
        MOVE_FROM: 3,
        PROPERTY_TO: 4,
        PROPERTY_FROM: 5
    };
    k.prototype.initWithDefaults = function () {
        //return this.root = i.birth("page")        
        var b, c, d, e, h, l, f, g, j, k, m, n, p, o, q;            
        this.root = i.birth("page"), e = i.birth("navbar"), e.setValue("fixedmode", "navbar-fixed-top"),
            e.setValue("type", "navbar-inverse"), e.brand.setValue("content", "Project name"), e.links.children[0].link.setValue("content", "Home"), e.links.children[1].link.setValue("content", "About"), e.links.children[2].link.setValue("content", "Contact"), a = i.birth("content"), a.setValue("content", "<h1>Rapper starter template</h1>\n<p>Use this document as a way to quick start any new project.<br> All you get is this message and a barebones HTML document.</p>"), this.root.children[0].appendChild(a), this.root.prependChild(e)
    };
    k.prototype.initWithTemplate = function (a) {
        var b, c, d, e, h, l, f, g, j, k, m, n, p, o, q;
        switch (a) {
            case "none":
            return this.initWithDefaults;
            case "fluid":
            return this.root = i.birth("page"),
            this.root.children[0].setValue("fluidmode", "-fluid"), a = i.birth("fluidgridrow"), a.children = [], q = i.birth("gridcol3"), p = i.birth("sidebarnav"), q.appendChild(p), p = i.birth("gridcol9"), e = i.birth("navbarcollapse"), e.setValue("fluidmode", "-fluid"), e.setValue("fixedmode", "navbar-fixed-top"), e.setValue("type", "navbar-inverse"), e.brand.setValue("content", "Project name"), e.links.children[0].link.setValue("content", "Home"), e.links.children[1].link.setValue("content", "About"), e.links.children[2].link.setValue("content",
                "Contact"), h = i.birth("navbarform"), h.setValue("alignment", "pull-right"), l = i.birth("textinput"), l.setValue("type", "email"), l.setValue("placeholder", "Email"), l.setValue("elementclass", "span2"), k = i.birth("textinput"), k.setValue("type", "password"), k.setValue("placeholder", "Password"), k.setValue("elementclass", "span2"), h.appendChild(l), h.appendChild(k), l = i.birth("buttoninput"), l.setValue("content", "Sign in"), h.appendChild(l), e.appendChild(h), h = i.birth("hero"), h.content.setValue("content", "<h1>Hello, world!</h1><p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>"),
            l = i.birth("button"), l.setValue("type", "btn-primary"), l.setValue("content", "Learn more &raquo;"), h.appendChild(l), this.root.prependChild(e), p.appendChild(h), o = i.birth("fluidgridrow"), p.appendChild(o), f = i.birth("content"), f.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"), b = i.birth("button"), b.setValue("content", "View details &raquo;"), g = i.birth("content"), g.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"), c = i.birth("button"), c.setValue("content", "View details &raquo;"), j = i.birth("content"), j.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"),
            d = i.birth("button"), d.setValue("content", "View details &raquo;"), k = i.birth("content"), k.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"), e = i.birth("button"), e.setValue("content", "View details &raquo;"), m = i.birth("content"), m.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"),
            h = i.birth("button"), h.setValue("content", "View details &raquo;"), n = i.birth("content"), n.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"), l = i.birth("button"), l.setValue("content", "View details &raquo;"), o.children[0].appendChild(f), o.children[0].appendChild(b), o.children[1].appendChild(g),
            o.children[1].appendChild(c), o.children[2].appendChild(j), o.children[2].appendChild(d), b = i.birth("fluidgridrow"), p.appendChild(b), b.children[0].appendChild(k), b.children[0].appendChild(e), b.children[1].appendChild(m), b.children[1].appendChild(h), b.children[2].appendChild(n), b.children[2].appendChild(l), h = i.birth("hr"), e = i.birth("content"), e.setValue("content", "&copy; Company 2012"), p.appendChild(h), p.appendChild(e), a.appendChild(q), a.appendChild(p), this.root.children[1].appendChild(a);
            case "basic-marketing":
            return this.root = i.birth("page"), e = i.birth("navbar"), e.setValue("fixedmode", "navbar-fixed-top"), e.setValue("type", "navbar-inverse"), e.brand.setValue("content", "Project name"), e.links.children[0].link.setValue("content", "Home"), e.links.children[1].link.setValue("content", "About"), e.links.children[2].link.setValue("content", "Contact"), h = i.birth("navbarform"), h.setValue("alignment", "pull-right"), l = i.birth("textinput"), l.setValue("type", "email"), l.setValue("placeholder", "Email"), l.setValue("elementclass", "span2"), k = i.birth("textinput"),
            k.setValue("type", "password"), k.setValue("placeholder", "Password"), k.setValue("elementclass", "span2"), h.appendChild(l), h.appendChild(k), l = i.birth("buttoninput"), l.setValue("content", "Sign in"), h.appendChild(l), e.appendChild(h), h = i.birth("hero"), h.content.setValue("content", "<h1>Hello, world!</h1><p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>"),
            l = i.birth("button"), l.setValue("type", "btn-primary"), l.setValue("content", "Learn more &raquo;"), h.appendChild(l), this.root.prependChild(e), this.root.children[1].appendChild(h), o = i.birth("gridrow"), this.root.children[1].appendChild(o), f = i.birth("content"), f.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"),
            b = i.birth("button"), b.setValue("content", "View details &raquo;"), g = i.birth("content"), g.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"), c = i.birth("button"), c.setValue("content", "View details &raquo;"), j = i.birth("content"), j.setValue("content", "<h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>"),
            d = i.birth("button"), d.setValue("content", "View details &raquo;"), o.children[0].appendChild(f), o.children[0].appendChild(b), o.children[1].appendChild(g), o.children[1].appendChild(c), o.children[2].appendChild(j), o.children[2].appendChild(d), h = i.birth("hr"), e = i.birth("content"), e.setValue("content", "&copy; Company 2012"), this.root.children[1].appendChild(h), this.root.children[1].appendChild(e);
            case "starter":
            return this.root = i.birth("page"), e = i.birth("navbar"), e.setValue("fixedmode", "navbar-fixed-top"),
            e.setValue("type", "navbar-inverse"), e.brand.setValue("content", "Project name"), e.links.children[0].link.setValue("content", "Home"), e.links.children[1].link.setValue("content", "About"), e.links.children[2].link.setValue("content", "Contact"), a = i.birth("content"), a.setValue("content", "<h1>Bootstrap starter template</h1>\n<p>Use this document as a way to quick start any new project.<br> All you get is this message and a barebones HTML document.</p>"), this.root.children[0].appendChild(a), this.root.prependChild(e)
        }
    };
    k.prototype.initWithDemo = function () {
        var a, b, c, d;
        this.root = i.birth("page");
        b = i.birth("navbar");
        b.setValue("fixedmode", "navbar-fixed-top");
        b.brand.setValue("content", "Jetstrap");
        b.links.children[0].link.setValue("content", "Home");
        b.links.children[1].link.setValue("content", "About");
        b.links.children[2].link.setValue("content", "Contact Us");
        a = i.birth("hero");
        a.setValue("elementid", "hello");
        a.content.setValue("content", "<h1>Jetstrap saves the day</h1><p>Build cool things quickly. Save time (and money)!</p>");
        this.root.prependChild(b);
        this.root.children[1].appendChild(a);
        d = i.birth("gridrow");
        this.root.children[1].appendChild(d);
        a = i.birth("content");
        a.setValue("content", "<h2>What is this?</h2><p>This is the demo mode for Jetstrap. Unfortunately your trial has ended and saving and loading has been disabled. Please sign up for a plan to continue using Jetstrap</p>");
        b = i.birth("content");
        b.setValue("content", "<h2>Why sign up?</h2><p>Jetstrap makes it much easier and faster to build Bootstrap pages. If that's valuable to you, Jetstrap is a perfect tool.</p>");
        c = i.birth("content");
        c.setValue("content", '<h2>Who are you guys?</h2><p>We are just small team of two creating simple products that make life better. Follow us on twitter: <a target="_blank" href="http://twitter.com/maxlynch">@maxlynch</a> <a target="_blank" href="http://twitter.com/helloimben">@helloimben</a></p>');
        d.children[0].appendChild(a);
        d.children[1].appendChild(b);
        d.children[2].appendChild(c);
        return this.setCss("#hello {\n  background: url(http://jetstrap-site.s3.amazonaws.com/images/main_bg_image.jpg);\n  color: #fff;\n}\n")
    };
    k.prototype.save = function () {
        var a, b, c = this;
        b = this.serialize();
        a = this.getFullHtml();
        this.project.set({
            tree: b,
            html: a
        });
 
        idFromDB = sendDataTOQuickController(idFromDB,this.project.get("name"),  b , a);
        this.project.id=idFromDB;       
    };    
    k.prototype.startNew = function (a, b) {                       
        idFromDB = null;
        this.project = new B;
        this.project.set({
            name: a
        });
        i.reset();        
        return "none" !== b ? this.initWithTemplate(b) : this.initWithDefaults()
    };
    k.prototype.loadFrom = function () {
        var b = this;
        this.project = new B;
        i.reset();
        this.root = null;
        b.trigger("document.loadPages");        

    };
    k.prototype.loadFromDB = function (a) {
        var b = this;
        this.project = new B;
        idFromDB=a;
        this.project.id = a;
        i.reset();
        
      //  this.root = i.birth("page");

        var temp=loadPageFromDB(this.project.id);
        

        b.trigger("document.loadPages");        
        b.initFromTree(temp);
        return b.trigger("document.loaded")
        
    };
    k.prototype.pushAction = function (a) {
        this._redoStack = [];
        this._actionStack.push(a);
        return this.trigger("documentChanged")
    };
    k.prototype.undo = function () {
        var a;
        if (a = this._actionStack.pop()) return console.log("UNDO"), this.scriptAction(a.reaction,
            a), this._redoStack.push(a)
    };
    k.prototype.redo = function () {
        var a;
        if (a = this._redoStack.pop()) return console.log("REDO"), this.scriptAction(a.action, a), this._actionStack.push(a)
    };
    k.prototype.scriptAction = function (a, b) {
        switch (a) {
            case k.ActionTypes.ADD:
            b.parent.insertChild(b.control, b.index);
            break;
            case k.ActionTypes.REMOVE:
            b.parent.removeChild(b.control);
            break;
            case k.ActionTypes.MOVE_FROM:
            b.newParent.removeChild(b.control);
            b.oldParent.insertChild(b.control, b.oldPosition);
            break;
            case k.ActionTypes.MOVE_TO:
            b.oldParent.removeChild(b.control);
            b.newParent.insertChild(b.control, b.newPosition);
            break;
            case k.ActionTypes.PROPERTY_FROM:
            b.control.setValue(b.property.k, b.oldValue);
            break;
            case k.ActionTypes.PROPERTY_TO:
            b.control.setValue(b.property.k, b.newValue)
        }
        return this.trigger("documentChanged")
    };
    k.prototype.register = function (a) {
        var b;
        b = this;
        this._componentMap[a.componentid] = a;
        a.bind("propertyChanged", function (c, d) {
            b.pushAction({
                action: k.ActionTypes.PROPERTY_TO,
                reaction: k.ActionTypes.PROPERTY_FROM,
                control: a,
                property: c,
                oldValue: d,
                newValue: c.value()
            });
            return b.trigger("documentChanged")
        });
        return console.log("Registered component", a.componentid, this._componentMap)
    };
    k.prototype.getComponent = function (a) {
        return this._componentMap[a]
    };
    k.prototype.getFullHtml = function () {
        var a ;
        var scriptTag = "";
        a = this.getHtml();                    
        /* if(jsFileName != "New JS File Name" && jsFileName != "")                        
        {                        
            scriptTag = "<script src=\"../js/"+ jsFileName+".js\"> </script>";
            jsCodeTOBeAdded = jsCodeTOBeAdded + scriptTag;
          //  var appendData = "<li><a>"+jsFileName+"</a></li>"
            var appendData =  "<option>"+jsFileName+"</option>";
            //$(".dropdown-menu").append(appendData);                    
            $("#myList").append(appendData);
        }*/                    
        
        a = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n <link href="http://localhost/imagefor/frame.css" rel="stylesheet"> <link href="http://localhost/imagefor/bootstrap.css" rel="stylesheet">  <link href="http://localhost/imagefor/bootstrap-responsive.css" rel="stylesheet"> <link href="http://localhost/imagefor/normalize.css" rel="stylesheet">  <script src="http://localhost/imagefor/jquery.js"><\/script>\n  <meta charset="utf-8">\n    <title></title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="description" content="">\n    <meta name="author" content="">\n\n    <\!-- Le styles --\>\n       <style>\n      body {\n        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */\n      }\n    </style>\n    \n\n    <\!-- Le HTML5 shim, for IE6-8 support of HTML5 elements --\>\n    <\!--[if lt IE 9]>\n    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"><\/script>\n    <![endif]--\>\n\n    <\!-- Le fav and touch icons --\>\n    <link rel="shortcut icon" href="assets/ico/favicon.ico">\n    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">\n    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">\n    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">\n    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">\n    <style>\n' + this.project.get("css") + "\n    </style>\n  "+jsCodeTOBeAdded +"</head>\n  <body>\n" + a + '\n        <\/script>\n  </body>\n</html>';
       
        return a;                   
    };
    k.prototype.getHtml = function () {
        var a, b;
        b = document.createElement("div");
        a = document.createElement("div");
        this.root.layout.renderTo(a);
        $(b).append($(a).contents());
        a = $(b).html();
        return style_html(a, {
            indent_size: 2,
            indent_char: " ",
            unformatted: ["textarea"]
        })
    };
    k.prototype.getTree = function () {
        return this._getTreeNode(this.root)
    };
    k.prototype._getTreeNode = function (a) {
        var b, c, d, e, h;
        c = [];
        h = a.children;
        d = 0;
        for (e = h.length; d < e; d++) b = h[d], b = this._getTreeNode(b), c.push(b);
            return {
                id: a.componentid,
                type: a.type,
                children: c,
                properties: a.getSerializedPropertes()
            }
        };
        k.prototype.serialize = function () {
            return JSON.stringify(this.getTree())
        };
        k.prototype.initFromTree = function (a) {

            var b;
            b = null;
            if ("" === $.trim(a)) this.initWithDefaults();
            else {
                try {
                    b = JSON.parse(a)
                } catch (c) {
                    this.trigger("document.loadPages", c);
                    return
                }
                this.root = a = i.resurrect(b.type, b.id);
                return this._initFromNode(a, b, null)
            }
        };
        k.prototype._initFromNode = function (a, b, c) {
            var d, e, h, f;
            c && c.appendChild(a);
            h = b.children;
            f = [];
            d = 0;
            for (e = h.length; d < e; d++) if (b = h[d], c = i.resurrect(b.type, b.id)) c.initFromSerializedProperties(b.properties), f.push(this._initFromNode(c, b, a));
                return f
        };
        k.prototype.setCss = function (a) {
            this.project.set("css", a);
            return this.trigger("documentChanged")
        };
        k.prototype.getCss = function () {
            return this.project.get("css")
        };
        k.prototype.getRegisteredCssEntries = function () {
            var a, b, c, d, e, h, f;
            h = [];
            c = [];
            b = [];
            for (b.push(this.root); b.length;) {
                a = b.shift();
                e = a.getValue("elementid").value();
                d = a.getValue("elementclass").value();
                "" !== e && h.push(e);
                "" !== d && c.push(d);
                f = a.children;
                d = 0;
                for (e = f.length; d < e; d++) a = f[d], b.splice(0, 0, a)
            }
        return {
            classes: c,
            ids: h
        }
    };
    ma = {
        page: Ac,
        content: P,
        container: na,
        link: u,
        button: G,
        buttongroup: ac,
        buttontoolbar: cc,
        buttondropdown: Zb,
        buttondropdowntoggle: ja,
        buttondropdownlist: ia,
        buttondropdownlistitem: O,
        buttondropdownlistitemdivider: $b,
        heading: pa,
        pageheader: Bc,
        icon: qc,
        image: sc,
        alert: Vb,
        progressbar: Dc,
        hr: oc,
        hero: pc,
        well: Nc,
        taglabel: Kc,
        badge: Xb,
        tabs: Ic,
        tabitem: T,
        navbar: vc,
        navbarcollapse: uc,
        navbarcollapsebutton: sa,
        navbarcollapsecontainer: ta,
        navbarbrand: ca,
        navbarlinks: da,
        navbarlinkitem: R,
        navbarlinkdivider: xc,
        navbarform: wc,
        sidebarnav: Hc,
        navlist: yc,
        navlistheader: ea,
        navlistitem: x,
        breadcrumbs: Yb,
        breadcrumbitem: N,
        breadcrumbdivider: aa,
        pagination: Cc,
        paginationitem: C,
        form: fc,
        inputlabel: I,
        buttoninput: bc,
        textinput: va,
        textinputgroup: Lc,
        selectinput: ua,
        selectoption: S,
        selectinputgroup: Gc,
        fileinput: oa,
        fileinputgroup: dc,
        textareainputgroup: Mc,
        textarea: wa,
        table: Jc,
        tablerow: V,
        tablecell: U,
        gridrow: nc,
        fluidgridrow: ec,
        gridcol1: hc,
        gridcol2: ic,
        gridcol3: jc,
        gridcol4: w,
        gridcol6: kc,
        gridcol8: lc,
        gridcol9: mc,
        gridcol12: gc
    };
    var M = function () {};
    M.isAfter = function (a, b) {
        var c, d, e;
        c = $(a);
        d = c.offset();
        e = c.outerWidth();
        c = c.outerHeight();
        d = [
        [d.left, d.top],
        [d.left + e, d.top],
        [d.left + e, d.top + c],
        [d.left, d.top + c]
        ];
        c = d[0][1] + c / 2;
        e = d[0][0] + e / 2;
        return b.y > c && b.y < d[2][1] || b.x > e && b.x < d[1][0]
    };
    M.isBefore = function (a, b) {
        var c, d;
        c = $(a);
        d = c.offset();
        c.outerWidth();
        c = c.outerHeight();
        return b.y < d.top + c / 2 || b.x < d.left + 20
    };
    M.elementContains = function (a, b) {
        var c, d, e, h;
        e = a.offset();
        h = a.outerWidth();
        c = a.outerHeight();
        d = [0, 0, 0, 0];
        return 0 > d[3] && 0 > d[1] && b.x > e.left + h + -d[1] || b.x < e.left + d[3] || b.y > e.top + c || b.y < e.top || b.x > e.left + h || b.x < e.left || b.y > e.top + c || b.y < e.top ? !1 : !0
    };
    M.getComponentAt = function (a, b, c, d) {
        var e, h, f, g, i, j;
        e = [];
        h = a;
        for (e.push(a); e.length;) {
            a = e.shift();
            j = a.children;
            g = 0;
            for (i = j.length; g < i; g++) if (a = j[g], (!c || a.isContainer) && d !== a) if ((f = a.renderer.renderedElement) && this.elementContains(f, b)) h = a, e.splice(0, 0, a)
        }
    return h
    };
    M.eventToFramePoint = function (a) {
        var b;
        b = $("#frame iframe").offset();
        return {
            x: a.pageX - b.left,
            y: Math.max(a.pageY - b.top, 0)
        }
    };
    o = M;
    var r = function () {};
    r.document = null;
    r.typeCountMap = {};
    r.count = 0;
    r.build = function (a) {
        if (a = ma[a]) return a = new a, console.log("constructed new component", a), a
    };
    r.birth = function (a) {
        var b;
        b = r.build(a);
        b.componentid = this.newId(a);
        this.document.register(b);
        b.onBirth(this.document);
        return b
    };
    r.resurrect = function (a, b) {
        var c;
        c = r.build(a);
        c.children = [];
        c.componentid = b;
        this.document.register(c);
        return c
    };
            r.newId = function (a) {
                a in this.typeCountMap || (this.typeCountMap[a] = 0);
                return a + ++this.typeCountMap[a]
            };
            r.reset = function () {
                return this.typeCountMap = {}
            };
            i = r;

            var g = function () {
                var a, b = this;
                a = this;
              //  _.extend(this,Backbone.Events);                           

                console.log("Starting builder");
                1 === window.WTF && this._demoMode();
                this.isLoading = !0;
                this.bind("doneLoading", function () {
                    b.isLoading = !1;
                    return $("#loading-overlay").hide()
                });
                this._initDocument();
                $("#frame iframe").ready(function () {
                    var b;
                    b = function () {
                        if (!window.FrameDocument || 0 === $("body", window.FrameDocument).length) return console.log("Still not loaded, waiting"), setTimeout(b, 20);
                        console.log("Frame loaded, done waiting");
                        return a._frameLoaded()
                    };
                    return setTimeout(b, 20)
                });
                this._initViews()
            };
            f(g, Backbone.View);

      
            g.prototype._demoMode = function () {
                this._exportDisabled = this._savingDisabled = this._projectsDisabled = !0;
                return this._showBillingPromo()
            };
            g.prototype._showBillingPromo = function () {
                $("#billing-promo-modal").modal({
                    keyboard: !1,
                    backdrop: "static"
                });
                return $("#billing-promo-modal").modal("show")
            };
            g.prototype._initDocument = function () {
                var a = this;
                this._document = new k;
                this._document.bind("cssChanged", function (b) {
                    return a.cssEditor.setValue(b)
                });
                this._document.bind("documentChanged", function () {
                    if (!a.isLoading) return clearTimeout(a._changeTimeout), a._changeTimeout = setTimeout(function () {
                        a._updateHtmlEditor();
                        a.redraw();
                        a._updateCssEntries();
                        if (!a._savingDisabled) return a.save()
                    },
                100)
                });
                this._document.bind("document.saved", function () {
                    clearTimeout(a._savingClearTimeout);
                    a._savingClearTimeout = setTimeout(function () {
                        $("header .saving").hide();
                        $("header .all-saved").show();
                        return setTimeout(function () {
                            return $("header .all-saved").hide()
                        }, 3E3)
                    }, 1E3);
                    if (!1 === a._newProjectSuccessfullyCreated) return a._newProjectSuccessfullyCreated = !0, a._projectsView.hide(), $("header .project .name").text(a._document.project.get("name")), a._projectsView.trigger("newProjectAdded", a._document.project)
                });
                this._document.bind("document.saveError", function (a) {
                    return console.log("Unable to save", a)
                });
                this._document.bind("document.loaded", function () {                                                        
                    $("header .project .name").text(a._document.project.get("name"));
                    a._projectsView.trigger("project.loaded", a._document.project);
                    a._projectsView.hide();
                    a.redraw();
                    a._updateHtmlEditor();
                    a._updateCssEditor();
                    a._updateCssEntries();
                    return a.trigger("doneLoading")
                });
                return this._document.bind("document.loadPages", function (b) {   ////change
                    a.trigger("doneLoading");         
                    return a._projectsView.show()
                })
            };
            g.prototype.showProjects=function(){
            	
            	/*this._projectsView = new Fc({
                    el: $("#projects-modal")
                });*/         

            	this._projectsView.show();
                getPageNamesFromDB();
            	idFromDB = null;
                jsCodeTOBeAdded = "";
            }
            g.prototype._initViews = function () {
            	
                var a = this;
                this._projectsView = new Fc({
                    el: $("#projects-modal")
                });
                this._projectsView.bind("project.load", function (b) {
                    console.log("Loading project", b);
                    return a._projectsDisabled ? (a._projectsView.hide(), $("#billing-promo-modal").modal({
                        keyboard: !1,
                        backdrop: "static"
                    }), $("#billing-promo-modal").modal("show")) : a.loadProject(b)
                });
                this._projectsView.bind("project.activeDeleted", function () {
                    return a.closeCurrentProject()
                });
                if (!this._projectsDisabled) return this._projectsView.bind("project.create", function (b, c) {
                    a._newProjectSuccessfullyCreated = !1;
                    return a.newProject(b, c)
                })
            };
            g.prototype._frameLoaded = function () {
                var a;
                console.log("Frame loaded");
                this._createNewProject();
                this._projectsDisabled || this.loadLastProject();                
                this._initDialogs();
               // this.sourceSelector = "#components ul > li > ul li";
                this.sourceSelector = "#components li > ul li";
                this.dropTarget = "#frame-drop";
                this._initEvents();
                this._initDraggable();
                this._initDroppable();
                this._initHoverController();
                this._bindComponentEvents();
                this._bindUIEvents();
                this._bindShortcuts();
                this._projectsDisabled && (this._document.initWithDemo(), a = this._document.project.get("css"), this.cssEditor.setValue(a), this.trigger("css.valueChanged", a));        
                return this.redraw()      
            };
            
            g.prototype._createNewProject = function(){    	    
                    	/*this.createNewProjectView = new zc({
                            el: $("#createNewProject")
                        });
                return this.createNewProjectView.showView()*/
                var pageId = getNewProjectId();
                idFromDB = pageId[1];
            }

    g.prototype._initDialogs = function () {
        var a, b, c, d;
        d = this;

        b = $("#components").detach().dialog({
            title: "Components",
            autoOpen: !1,
            width: "300",
            height: "500",
            position: [20,
            200],
            focus: function () {
                return $(this).closest(".ui-dialog").css({
                    opacity: 1
                })
            },
            close: function () {
                return d._minimizeComponents()
            },
            open: function () {},
            resize: function () {}
        });
        b.parent(".ui-dialog").appendTo(".jqueryui");
                $("#createNewProject").modal("hide");   /////new code
                b.dialog("open");                
                this.componentsDialog = b;
                c = !0;
                b = $("#properties").detach().dialog({
                    title: "Properties",
                    autoOpen: !1,
                    width: 300,
                    height: 300,
                    position: [500, 80],
                    open: function () {
                        var a;             
                        c && (a = $(window).width(), $(this).dialog("option", "position", [a - 340, 100]));
                        return c = !1
                    }
                    
                });
                b.parent(".ui-dialog").appendTo(".jqueryui");
                b.width(250);
                this.propertiesDialog = b;        
                b = ace.edit("html-editor-target");
                a = require("ace/mode/html").Mode;
                b.getSession().setMode(new a);
                b.setReadOnly(!0);
                b.renderer.setHScrollBarAlwaysVisible(!1);
                b.renderer.setShowPrintMargin(!1);
                this._htmlExportEditor = b;
                b = ace.edit("css-editor-target");
                a = require("ace/mode/css").Mode;
                b.getSession().setMode(new a);
                b.renderer.setHScrollBarAlwaysVisible(!1);
                b.renderer.setShowPrintMargin(!1);
                var e = this.cssEditor = b,h;
                h = null;
            //   $("#createNewProject").modal("show");  ////new code
            return e.getSession().on("change", function () {
                if (!d.isLoading) return clearTimeout(h),
                    h = setTimeout(function () {
                        var a;
                        a = e.getValue();
                        return d.trigger("css.valueChanged", a)
                    }, 500)
            })
        };
        g.prototype._minimizeComponents = function () {
            return $("#minimize-components").show()
        };
        g.prototype._bindComponentEvents = function () {
            var a;
            a = this;
            this.bind("dnd.drop", function () {
                a.redraw();
                return a._activeContainer = null
            });
            this.bind("dnd.selected", function (b) {
                return a.selectComponent(b)
            });
            this.bind("dnd.doubleClicked", function (b, c) {
                return a.editComponentContent(b, c)
            });
            return this.bind("dnd.mousedown", function (a,c) {
                return c.renderer.renderedElement.click(a)
            })
        };
        g.prototype._processWindowResize = function () {
            return $("#frame-content").css("height", $(window).height())
        };
        g.prototype._bindUIEvents = function () {
            var a, b = this;
            a = this;

           
            a.injectView = new Fc({
                    el: $("#injectcode-modal")
                }); 
            a.injectView.bind("saveJSCode", function (b) {                                                   
                    return a._document.save()                           
                });

            $(document).ready(function () {
                return a._processWindowResize()
            });
            this._watchMediaQueries();
            $(window).resize(this._processWindowResize);
            $("#components ul").collapser();
            $("#toggle-boilerplate").click(function () {
                a._showBootstrapBoilerplate = $(this).is(":checked");
                return a._updateHtmlEditor()
            });
            $("#toggle-preview").click(function (b) {
                b = $(b.currentTarget).find("input").is(":checked");
                return a._setPreviewMode(!b)
            });
            $(document).on("click", "#delete-component", function () {
                a.deleteSelectedComponent();
                return !1
            });
            $(document).on("click", "#duplicate-component", function () {
                a.duplicateActive();
                return !1
            });
            $("#minimize-components").click(function () {
                $("#minimize-components").hide();
                return a.componentsDialog.dialog("open")
            });
            $("#debug-dump-html").click(function () {                          
                /*a._updateHtmlEditor();
                $("#html-modal").modal("show");
                a._htmlExportEditor.resize();
                return $("#html-export-editor").height($("#html-modal .modal-body").height())       */
                exportPages(a._updateHtmlEditor());         
            });
            
            $("#preview").click(function(){
                $("#preview").hide();
                $("#newp").hide();
                $("#buildui").show();
                a.componentsDialog.dialog("close");
                a.propertiesDialog.dialog("close");      
                pageIDBeforePrev = idFromDB;                                                  
                a._getPreview();  
                return 1
            });
            $("#newp").click(function(){
                a.propertiesDialog.dialog("close");   
                a.hideBreadcrumbs();
                a.showProjects();
            });   
            $("#homep").click(function(){               
               location.href = '/rapper/PageDetails/showAllProjects';
            });            
            $("#buildui").click(function(){
                $("#preview").show();
                $("#newp").show();
                $("#buildui").hide();
                $("#minimize-components").hide();
                a.componentsDialog.dialog("open");
                a._buildUI();           
            });     

            $("#injectCode").click(function(){
                                          
                a.injectView.showinjectionView();

                editor = CodeMirror.fromTextArea(document.getElementById("code"), {                                        
                            lineNumbers: true,
                            matchBrackets: true,
                            autoCloseBrackets: true,
                            collapseRange: true,
                            extraKeys: {"Enter": "newlineAndIndentContinueComment"}
                        });  
                 editor.setValue("");
             });

            $("#createWar").click(function(){
               a._toggleCssEditor();
            //  warFileCreation();                                                                                                             
            });
            
    

            $(".show-projects").click(function () {
                return b._projectsView.show()
            });
            $("#show-tutorial").click(function () {
                $("#alpha-modal").modal("show");
                return !1
            });
            $(".show-billing").click(function () {
                $("#billing-modal").modal("hide");
                $("#billing-promo-modal").modal({
                    keyboard: !1,
                    backdrop: "static"
                });
                $("#billing-promo-modal").modal("show");
                return !1
            });
            $(".show-billing").click(function () {
                $("#billing-promo-modal").modal({
                    keyboard: !1,
                    backdrop: "static"
                });
                $("#billing-promo-modal").modal("show");
                return !1
            });
            $(".show-existing-billing").click(function () {
                $("#billing-modal").modal({
                    keyboard: !1,
                    backdrop: "static"
                });
                $("#billing-modal").modal("show");
                return !1
            });
            $("#show-css").click(function () {
                a._toggleCssEditor();
                return !1
            });
            $("#css-entry-add").click(function () {
                var b;
                if ((b = $("#css-entry-select").val()) && "" !== b) a.cssEditor.insert("\n" + b + " {\n\n}"), b = a.cssEditor.selection.getCursor(), b = b.row, a.cssEditor.gotoLine(Math.max(0, b)), a.cssEditor.indent(), a.cssEditor.focus();
                return !1
            });
            $("#theme-select").change(function () {
                var b;
                b = $(this).val();
                return a._applyBootswatchTheme(b)
            });
            $("#export-zip").click(function () {
                var a,
                d;
                a = b._document.project;
                d = new qa;
                d.id = a.id;
                return window.location = d.url()
            });
            $("header .size").click(function () {
                $("header .size").removeClass("selected");
                $(this).addClass("selected");
                $("#frame-content").removeClass("desktop laptop tablet phone").addClass($(this).data("size"));
                return !1
            });
            return $(document).on("click", "#breadcrumbs > a", function () {
                var b;
                b = $(this).data("componentid");
                if (b = a._document.getComponent(b)) return a.selectComponent(b)
            })
        };
        g.prototype._bindShortcuts = function () {
            var a, b = this;
            a = this;
            key("escape, esc", function () {
                return b.clearSelection()
            });
            key("\u2318+d, ctrl+d", "all", function () {
                a.duplicateActive();
                return !1
            });
            key("\u2318+z,ctrl+z", "all", function () {
                a._document.undo();
                return !1
            });
            key("\u2318+shift+z, ctrl+shift+z", "all", function () {
                a._document.redo();
                return !1
            });
            key("\u2318+e, ctrl+e", "all", function () {
                a["export"]();
                return !1
            });
            key("\u2318+c, ctrl+c", "all", function () {
                a.copy();
                return !1
            });
            key("\u2318+v, ctrl+V", "all", function () {
                a.paste();
                return !1
            });
            return key("delete, del, backspace",
                "all", function () {
                    a.deleteSelectedComponent();
                    return !1
                })
        };
        g.prototype._setPreviewMode = function (a) { 
             
             kObject = this._document;     
            var gObject = this;                                                                                                                     
            if (this._isPreview = a) return this.hideDropFrame(), $("[contenteditable]", window.FrameDocument).removeAttr("contenteditable"), $("body", window.FrameDocument).removeClass("design") ,$(window.FrameDocument).on("click.external", "a" ,function () {                
                var a,pageId;
                a = $(this).attr("href");                            
                pageId = getPageIdForPreview(a); 
                if(pageId)                                                                                                       
                kObject.loadFromDB(pageId);    
                $("[contenteditable]", window.FrameDocument).removeAttr("contenteditable");                                                                                                                      
                return !1
            });
                this.showDropFrame();
                $("body", window.FrameDocument).addClass("design");
                $(window.FrameDocument).die("click.external");
                return this.redraw()
            };
            g.prototype._watchMediaQueries = function () {
                var a;
                if (window.matchMedia) return a = window.matchMedia("(min-width: 1170px)"), a.addListener(function (a) {
                    if (a.matches) return console.log("Screen width 1170")
                })
            };
            g.prototype.loadLastProject = function () {
                this._document.loadFrom();
                return mixpanel.track("Project Loaded")
            };
            g.prototype.loadProject = function (a) {    	
                this._document.loadFromDB(a);
                return mixpanel.track("Project Loaded")
            };
            g.prototype.closeCurrentProject = function () {
                $("header .project .name").text();
                this._document.initWithDefaults();
                return this.redraw()
            };
            g.prototype.newProject = function (a, b) {
                this._document.startNew(a, b);
                mixpanel.track("New Project Created");
                this.redraw();
                return this.save()
            };
            g.prototype.save = function () {
                var a = this;
                $("header .all-saving").hide();
                $("header .saving").show();
                clearTimeout(this._saveTimeout);
                return this._saveTimeout = setTimeout(function () {
                    return a._document.save()
                }, 500)
            };
            g.prototype.showDropFrame = function () {
                $("#frame-drop").removeClass("hidden");
                return this.clearSelection()
            };
            g.prototype.hideDropFrame = function () {
                $("#frame-drop").addClass("hidden");
                $(".shim",window.FrameDocument).remove();
                $(".ds-hover", window.FrameDocument).removeClass("ds-hover");
                $(".ds-selected", window.FrameDocument).removeClass("ds-selected");
                this._activeComponent = null;                
                //this.hideBreadcrumbs();
                return this.clearSelection()
            };
            g.prototype._createTempComponent = function (a) {
                a = ma[a];
                a = new a;
                a.renderer.renderToBuffer();
                return a
            };
            g.prototype._initEvents = function () {
            	
                var a, b = this;
                a = this;
                this.bind("themes.bootswatch.updated", function () {
                    var b, d, e, h, f;
                    $("#theme-select").empty().append('<option value="">Default</option>');
                    h = a._bootswatchThemes.themes;
                    f = [];
                    d = 0;
                    for (e = h.length; d < e; d++) b = h[d], f.push($("#theme-select").append('<option value="' + b.name + '">' + b.name + "</option>"));
                        return f
                });
                this.bind("css.valueChanged",

                    function (a) {
                        b._document.setCss(a);
                        return $("#custom-css", window.FrameDocument).replaceWith('<style id="custom-css">\n' + a + "\n</style>")
                    });
                this.bind("dragStart", function () {
                    var a;
                    a = $("#toggle-preview input");
                    if (!a.is(":checked")) return a.parent().click()
                });
                return this.bind("dragStop", function () {
                    a._activeComponent = null;
                    a._activeContainer = null;
                    return $(".ds-tag", window.FrameDocument).remove()
                })
            };
            g.prototype._initDraggable = function () {
                var a;
                a = this;
                console.log("Creating draggable for", this.sourceSelector);
                return $(this.sourceSelector).draggable({
                    appendTo: "body",
                    cursor: "hand",
                    cursorAt: {
                        left: -20,
                        top: -20
                    },
                    helper: function () {
                        var b, c;
                        $(this).text();
                        c = $(this).data("type");
                        a._activeComponent = a._createTempComponent(c);
                        b = a._activeComponent.renderer.bufferedElement;
                        b = $("<div></div>").append($(b).clone());
                        b.data("type", c);
                        b.children().first().css({
                            position: "absolute"
                        });
                        return b
                    },
                    start: function (b, c) {
                        var d;
                        d = $(c.helper).data("type");
                        console.log("Starting dragging controls", c);
                        a._isDragging = !0;
                        return a.trigger("dragStart",
                            d)
                    },
                    stop: function () {
                        console.log("Stopping dragging controls");
                        a._isDragging = !1;
                        a.trigger("dragStop");
                        return a._dragStop()
                    },
                    revert: "invalid"
                })
    };
    g.prototype._initDroppable = function () {
        var a;
        a = this;
        $(this.dropTarget).mousemove(function (b) {
            return a._dropMouseMove(b)
        });
        $(this.dropTarget).click(function (b) {                        
            a._dropMouseClick(b);
            return b.preventDefault()
        });
        $(this.dropTarget).dblclick(function (b) {                      
            a._dropMouseDoubleClick(b);
            return b.preventDefault()
        });
        $(this.dropTarget).mousedown(function (b) {
            a._dropMouseDown(b);
            return b.preventDefault()
        });
        return $(this.dropTarget).droppable({
            greedy: !0,
            tolerance: "pointer",
            activate: function () {},
            deactivate: function () {},
            over: function () {},
            out: function () {},
            drop: function (b) {
                return a._drop(b)
            }
        })
    };
    g.prototype._dropTryScroll = function (a) {
        if (!(a > dropHeight - 60)({}) && !(60 > a)({})) return {}
    };
    g.prototype._dropMouseDoubleClick = function (a) {
        var b;
        b = o.eventToFramePoint(a);
        b = o.getComponentAt(this._document.root, b);
        return this.trigger("dnd.doubleClicked", a, b)
    };
    g.prototype._dropMouseClick = function (a) {
        a = o.eventToFramePoint(a);
        a = o.getComponentAt(this._document.root, a);
        return this.trigger("dnd.selected", a)
    };
    g.prototype._dropMouseMove = function (a) {
        var b;
        if (this._document && this._document.root) {
            b = o.eventToFramePoint(a);
            a = o.getComponentAt(this._document.root, b, !0, this._activeComponent);
            if (this._isDragging && this._activeComponent && a && a.isContainer && a.doesAccept(this._activeComponent.type)) {
                $(".ds-hover", window.FrameDocument).removeClass("ds-hover");
                this._activeContainer = a;
                if (this._activeContainer === this._activeComponent) debugger;
                return this._hoverContainer(a, b)
            }
            this._activeContainer = null;
            return this._hoverComponent(a, b)
        }
    };
    g.prototype._dropMouseDown = function (a) {
        var b;
        b = o.eventToFramePoint(a);
        if (b = o.getComponentAt(this._document.root, b, !1)) return this.trigger("dnd.mousedown", a, b)
    };
    g.prototype._drop = function (a) {
        var b;
        if (a.target !== $("#frame-drop").get(0)) console.log("Not a real drop, ignoring");
        else if (o.eventToFramePoint(a), !this._activeContainer || !this._activeComponent) console.error("not dropping, no container or component found");
        else return console.log("Dropping control", this._activeComponent, "on container", this._activeContainer), a = i.birth(this._activeComponent.type), $(".shim", window.FrameDocument).remove(), $(".ds-hover", window.FrameDocument).removeClass("ds-hover"), b = this._activeContainer.onDrop(a), this._document.pushAction({
            action: k.ActionTypes.ADD,
            reaction: k.ActionTypes.REMOVE,
            control: a,
            parent: this._activeContainer,
            index: b
        }), this.showDropFrame(), this.trigger("dnd.drop", a)
    };
    g.prototype._redrop = function (a) {
        var b, c, d;
        if (a.srcElement !== $("#frame-drop").get(0)) console.log("Not a real drop, ignoring"), this.redraw();
        else if (d = o.eventToFramePoint(a), !this._activeContainer || !this._activeComponent) console.error("not dropping, no container or component found"), this.redraw();
        else return console.log("Dropping control", this._activeComponent, "on container", this._activeContainer), this._activeComponent.parent.removeChild(this._activeComponent), a = this._activeComponent, $(".shim", window.FrameDocument).remove(), $(".ds-hover", window.FrameDocument).removeClass("ds-hover"),
            b = a.parent, c = a.parent.getIndex(a), this._activeContainer.onDrop(a), this._document.pushAction({
                action: k.ActionTypes.MOVE_TO,
                reaction: k.ActionTypes.MOVE_FROM,
                control: a,
                newParent: this._activeContainer,
                newPosition: this._activeContainer.getIndex(a),
                oldParent: b,
                oldPosition: c,
                point: d
            }), this.showDropFrame(), this.trigger("dnd.drop", a), this.redraw(), this.selectComponent(a)
    };
    g.prototype._dragStop = function () {
        return $(".shim", window.FrameDocument).remove()
    };
    g.prototype._hoverContainer = function (a, b) {
        var c;
        $(".ds-hover",
            window.FrameDocument).removeClass("ds-hover");
        if (this._activeComponent) return c = a.renderer.renderedElement, a.renderer.onHover(), c = $(c).offset(), $(".ds-tag", window.FrameDocument).remove(), $('<div class="ds-tag">' + a.name + "</div>").css({
            top: Math.max(0, c.top - 20),
            left: c.left
        }).appendTo($("body", window.FrameDocument)), a.onHover(this._activeComponent, b)
    };
    g.prototype._hoverComponent = function (a) {
        $(".ds-hover", window.FrameDocument).removeClass("ds-hover");
        if ("page" !== a.type && "container" !== a.type) return this._lastHovered = a, a.renderer.onHover()
    };
    g.prototype._initHoverController = function () {
        var a, b, c, d, e;
        e = this;
        b = null;
        d = function (a, b, c) {
            var d, a = e._activeComponent.renderer.renderedElement;
            $(a).position();
            d = b.x + c.x;
            b = b.y + c.y;
            $(a).outerWidth();
            $(a).outerHeight();
            return a.css({
                position: "absolute",
                left: d + "px",
                top: b + "px",
                width: $(a).width(),
                height: $(a).height(),
                zIndex: 1E3
            })
        };
        a = function (a, c) {
            var d, e;
            d = c.renderer.renderedElement;
            $(d).addClass("ds-detached");
            e = $(d).offset();
            d.css({
                position: "absolute",
                left: e.left + "px",
                top: e.top + "px",
                width: $(d).width(),
                height: $(d).height(),
                zIndex: 1E3
            });
            d.index();
            d.parent();
            d.detach();
            $("body", window.FrameDocument).append(d);
            return b = d
        };
        c = function (b, c) {
            return a(b, c)
        };
        $.widget("jetstrap.controlHighlight", $.ui.mouse, {
            _init: function () {
                this._mouseInit();
                return this._lastPos = this._savedControl = null
            },
            _mouseStart: function (a) {
                var b, d, f;
                console.log("START REDROPPING");
                this._mouseStarted = !1;
                f = o.eventToFramePoint(a);
                b = e._activeComponent && o.elementContains(e._activeComponent.renderer.renderedElement,
                    f) ? e._activeComponent : o.getComponentAt(e._document.root, f, !1);
                if (!("page" === b.type || "container" === b.type)) if (console.log("Starting dragging on control", b.componentid), b.renderer.renderToBuffer(), d = b.parent) {
                    if (b) return e._activeComponent = b, d = $(b.renderer.renderedElement), d = d.position(), this._clickOffset = {
                        x: d.left - f.x,
                        y: d.top - f.y
                    }, $(this.el).hide(), c(a, b);
                    $(".shim").remove()
                }
            },
            _mouseDrag: function (a) {
                var b;
                console.log("Dragging control", a);
                if (e._activeComponent) return e._isDragging = !0, b = o.eventToFramePoint(a),
                    this._lastPos || (this._lastPos = b), d(a, this._lastPos, this._clickOffset), this._lastPos = b, $(".shim").remove(), a = o.getComponentAt(e._document.root, b, !0, e._activeComponent), e._hoverContainer(a, b);
                e._isDragging = !1
            },
            _mouseStop: function (a) {
                console.log("DONE REDROPPING");
                e._isDragging = !1;
                if (e._activeComponent && b) return b.remove(), e._redrop(a)
            },
        _mouseDown: function (a) {
            return $.ui.mouse.prototype._mouseDown.call(this, a)
        }
    });
        return $("#frame-drop").controlHighlight()
    };
    g.prototype.clearSelection = function () {
        $(".shim",window.FrameDocument).remove();
        $(".ds-hover", window.FrameDocument).removeClass("ds-hover");
        $(".ds-selected", window.FrameDocument).removeClass("ds-selected");
        this._activeComponent = null;
        this.propertiesDialog.dialog("close");        
        return this.hideBreadcrumbs()
    };
    g.prototype.selectComponent = function (a) {
        this.clearSelection();
        if ("page" !== a.type && (this._activeComponent = a)) return this.showPropertiesFor(a), this.showBreadcrumbsFor(a), a.renderer.onSelect()
    };
    g.prototype.deleteSelectedComponent = function () {
        if (this._activeComponent) return this._activeComponent.parent.removeChild(this._activeComponent),
            this.clearSelection(), this.redraw()
    };
    g.prototype.duplicateActive = function () {
        var a;
        if (this._activeComponent) return a = this._activeComponent.duplicate(), this._activeComponent.parent.insertAfter(a, this._activeComponent), this._document.pushAction({
            action: k.ActionTypes.ADD,
            reaction: k.ActionTypes.REMOVE,
            control: a,
            parent: this._activeComponent.parent
        }), this.redraw(), this.selectComponent(a)
    };
    g.prototype["export"] = function () {
        if (this._exportDisabled) this._showBillingPromo();
        else return this._updateHtmlEditor(),
            $("#html-modal").modal("show"), this._htmlExportEditor.resize(), $("#html-export-editor").height($("#html-modal .modal-body").height())
    };
    g.prototype.copy = function () {
        if (this._activeComponent) return this._copiedComponent = this._activeComponent
    };
    g.prototype.paste = function () {
        var a;
        if (this._copiedComponent && this._activeComponent && this._activeComponent.isContainer && this._activeComponent.doesAccept(this._copiedComponent.type)) return a = this._copiedComponent.duplicate(), this._activeComponent.appendChild(a), this.redraw(),
            this.selectComponent(a)
    };
    g.prototype.showPropertiesFor = function (a) {
        var b, c, d, e, f, g, i;
        e = a.getProperties();
        i = $("#properties");
        i.empty();
        i.append('<div class="buttons"><a href="#" id="delete-component" class="btn btn-small">Delete</a><a href="#" id="duplicate-component" class="btn btn-small">Duplicate</a></div>');
        g = [];
        for (b in e) d = e[b], "content" !== d.key() && (d.pos || (c = 0), d.widget && "hidden" !== d.widget.type && (d.renderWidget(), f = $("<div><label>" + d.name + "</label></div>"), f.append(d.widget.el), i.append(f),
            g.splice(c, 0, d)));
        $("#properties").find(":input").attr("tabindex", "-1");
        $("#properties").dialog("option", "title", a.name);
        $("#properties").dialog("open");
        $("#properties").find(":input").attr("tabindex", "1");
        return console.log("Showing sorted properties", g)
    };
    g.prototype._blurDialogs = function () {
        return $("#components").closest(".ui-dialog").css({
            opacity: 0.5
        })
    };
    g.prototype.hideBreadcrumbs = function () {
        return $("#breadcrumbs").empty().addClass("hidden")
    };
    g.prototype.showBreadcrumbsFor = function (a) {
        var b, c,
        d, e, f, g;
        b = $("#breadcrumbs");
        b.empty().removeClass("hidden");
        for (e = []; a;) e.splice(0, 0, a), a = a.parent;
            d = [];
        f = 0;
        for (g = e.length; f < g; f++) a = e[f], c = a.name || a.type, d.push('<a href="#" data-componentid="' + a.componentid + '">' + c + "</a>");
            return b.html(d.join(" / "))
    };
    g.prototype.editComponentContent = function (a, b) {
        var c;
        //if (b) return this.hideDropFrame(), c = $(b.renderer.renderedElement), c.addClass("editable"), c.attr("data-button-class", "all"), a.target = c.get(0), window.FrameWindow.etch.editableInit(a), $(b.renderer.renderedElement).focus()
        if (b) return this.hideDropFrame(), c = $(b.renderer.renderedElement), c.addClass("editable"),  $(b.renderer.renderedElement).focus()
    };
    g.prototype._showContentEditBox = function (a, b, c) {                    
        this._editBox || (this._editBox = $('<div class="ds-edit"><textarea resizable="false"></textarea></div>'), $("#frame-drop .relative").append(this._editBox), this._bindEditBoxEvents());
        this._editBox.css({
            display: "block",
            left: a.x,
            top: a.y,
            width: b,
            height: c
        });
        return this._editBox.find("textarea").focus()
    };
    g.prototype._bindEditBoxEvents = function () {
        var a;
        a = this;
        if (this._editBox) return this._editBox.bind("focusout", function () {
            return a._hideContentEditBox()
        })
    };
    g.prototype._hideContentEditBox = function () {
        this._editBox && this._editBox.hide();
        return this.showDropFrame()
    };
    g.prototype.editableFocusLost = function (a) {
        var b, c;
        console.log("processing focus lost on element", a);
        if (!this._isPreview) return a && ((b = $(a).data("componentid")) || (b = $(a).closest("[data-componentid]").data("componentid")), b && (a = $(a).find("*").andSelf().filter("[contenteditable]").removeAttr("contenteditable").html(), b = this._document.getComponent(b), c = b.getValue("content").value(), b.setValue("content", a), b.trigger("propertyChanged",
            b.getValue("content"), c))), this.showDropFrame(), $("#fake-editable").click()
    };
    g.prototype.redraw = function () {
        var a;    
        if (a = this._document.root) return a.render(), a.renderer.renderedElement
    };
    g.prototype.setFrameSize = function (a, b) {
        return $("#frame iframe").css({
            width: a,
            height: b
        })
    };
    g.prototype._updateHtmlEditor = function () {
        var a;
      //  a = this._document.getHtml();
      /*  this._showBootstrapBoilerplate && */(a = this._document.getFullHtml());   
      return a;     
      //  return this._htmlExportEditor.getSession().setValue(a)

    };
    g.prototype._getPreview = function() {                                                                  
            this._setPreviewMode(1);  
            $(window.FrameDocument).removeAttr("contenteditable");                         
    };     
    g.prototype._buildUI = function(){                                                
            this._document.loadFromDB(pageIDBeforePrev);                                                
            this._setPreviewMode(0);
    }
    g.prototype._updateCssEditor = function () {
        var a;
        a = this._document.getCss();
        this._document.setCss(a);
        $("#custom-css", window.FrameDocument).replaceWith('<style id="custom-css">\n' + a + "\n</style>");

    };
    g.prototype._updateCssEntries = function () {
        var a, b, c, d, e;
        a = this._document.getRegisteredCssEntries();
        $("#css-entry-select").empty();
        e = a.ids;
        c = 0;
        for (d = e.length; c < d; c++) b = e[c], $("#css-entry-select").append('<option value="#' + b + '">#' + b + "</option>");
            d = a.classes;
        b = 0;
        for (c = d.length; b < c; b++) a = d[b], $("#css-entry-select").append('<option value=".' + a + '">.' + a + "</option>");
            return $("#css-entry-select:first").attr("selected", "selected")
    };
    g.prototype._toggleCssEditor = function () {
        var a;
        a = this;        
        this._cssEditorUp = !this._cssEditorUp;
        return $("#css-editor").animate({
            height: this._cssEditorUp ? 400 : 0
        }, 100, function () {            
            a.cssEditor.resize();            
            return a._cssEditorUp ? (a.cssEditor.focus(), $("#show-css").addClass("active")) : $("#show-css").removeClass("active")
        })
    };
    g.prototype._getBootswatchThemes = function () {
        var a;
        a = this;
        return $.getJSON("http://api.bootswatch.com/", function (b) {
            a._bootswatchThemes = b;
            return a.trigger("themes.bootswatch.updated")
        })
    };
    g.prototype._applyBootswatchTheme = function (a) {
        var b, c, d, e, f;
        console.log("Applying theme", a);
        $("#ds-custom-theme", window.FrameDocument).remove();
        e = this._bootswatchThemes.themes;
        f = [];
        c = 0;
        for (d = e.length; c < d; c++) b = e[c], b.name === a ? f.push($("head", window.FrameDocument).append('<link rel="stylesheet" id="ds-custom-theme" href="' + b.css + '" />')) : f.push(void 0);
            return f
    };
    g.prototype.setBootswatchTheme = function () {};
    var q = function (a) {
        var b = this;
        _.extend(this, Backbone.Events);

        q.__super__.constructor.call(this, a);
        this._projectTemplate = Handlebars.compile($("#view-snippet-project-entry").html());
        this.newProjectView = new zc({
            el: $("#new-project-modal")
        });
        this.newProjectView.bind("project.create", function (a, d) {
            return b.trigger("project.create", a, d)
        });
        this.bind("newProjectAdded", function (a) {
            b._activeProject = a;
            b._projects.unshift(a);
            return b._renderProjects()
        });
        this.bind("project.loaded", function (a) {
            b._activeProject = a;
            return b._selectActiveProject()
        });
        this._projects = new ra;
        this._projects.on("reset", function () {
            return b._renderProjects(!0)
        });
        this._projects.on("remove", function (a) {
            return b._removeProject(a)
        });
        this._projects.on("change", function () {
            return 0 === b._projects.length ? $("#projects-list-empty").show() : $("#projects-list-empty").hide()
        });
        this._projects.reset(window.PROJECTS_BOOTSTRAPPED && window.PROJECTS_BOOTSTRAPPED.projects)
    };
    f(q, Backbone.View);
    q.prototype.loadProjects = function () {
        var a = this;
        console.log("Loading projects");
        return this._projects.fetch({
            success: function () {
                console.log("Loaded projects");
                return a._renderProjects()
            }
        })
    };
    q.prototype._renderProjects = function (a) {

       getPageNamesFromDB();     	

       var b = this;
       $("#projects-list tbody").empty();
       0 === this._projects.length ? (a || this.promptNewProject(), $('#projects-modal .modal-footer [data-dismiss="modal"]').hide()) : ($("#projects-list-empty").hide(), $('#projects-modal .modal-footer [data-dismiss="modal"]').show());          
    };
    q.prototype._selectActiveProject = function () {
        var a;
        $("#projects-list li.name").removeClass("selected");
        if (this._activeProject) return a = $('#projects-list tr[data-projectid="' + this._activeProject.id + '"]'), a.addClass("selected"), 1 < $("#projects-list tbody tr").length && a.remove().insertBefore($("#projects-list tbody tr:first")), a = a.find("[rel=tooltip]"), a.tooltip("destroy"), a.tooltip({
            placement: "in left"
        })
    };
    q.prototype.events = {
        'click [data-action="new-project"]': "promptNewProject",
        'click [data-action="injectionPoint"]': "addInjectionPoint",
        'click [data-action="showeditor"]': "showeditor",
        'click #projects-list [data-action="export"]': "exportProject",
        'click #projects-list [data-action="delete"]': "deleteProject",
        'click #projects-list [data-action="open"]': "loadProject"                    
    };
    q.prototype.hide = function () {
        $("#projects-modal").modal("hide");
        return $("#new-project-modal").modal("hide")
    };
   
    q.prototype.show = function () {
        $("#projects-modal").modal({
            keyboard: !1,
            backdrop: "static"
        });
        return $("#projects-modal").modal("show")
    };

    q.prototype.showeditor = function() {
        $("#jsName").toggle();
        $("#codeeditor").toggle();                    
    }

  

    q.prototype.showinjectionView = function () {
        $("#injectcode-modal").modal({
            keyboard: !1,
            backdrop: "static",                                                                
        });                       
        $("#injectcode-modal").height(600);                 
        return $("#injectcode-modal").modal("show")
    };

   
    q.prototype.addInjectionPoint = function (a) {
        var qObj=this;
        var pluginnames = new Array();
         $("#codeeditor > .container > input:checked").each(function() {
            var filename =  $(this).closest(".container").find("span:odd").text();
            //alert(filename);                        
             jsCodeTOBeAdded = jsCodeTOBeAdded + "<script src=\""+ filename+"\"> </script>" ;
           //  alert("URL has been injected...");
             qObj.trigger("saveJSCode");                        
         });
         var index = 0;
       
       $("#plugineditor > .plugcontainer > input:checked").each(function() {
           pluginnames[index++] =  $(this).closest(".plugcontainer").find("span").text();                      
         });

            jQuery.each(pluginnames,function(index,value){
              $.ajax({
                 type: "POST",
                 url: "/rapper/PageDetails/InjectionofPlugins",  
                 data: {pluginnames : value },
                 async: false         
             }).done(function(data) {                            
                       alert('done');                                                                                       
                });

            });


            if(editor.getValue() != "") {
                  injectedJSCode=editor.getValue();                                        
                  jsCodeTOBeAdded = jsCodeTOBeAdded + "<script>\n"+injectedJSCode+" \n</script>";                                    
            //      alert("JS code has been injected...");
                  qObj.trigger("saveJSCode");
            }
          


          jsFileName = $("#jsFileName").val();
          if(jsFileName != "Enter URL of JS file here...")
          {
                jsCodeTOBeAdded = jsCodeTOBeAdded + "<script src=\""+ jsFileName+"\"> </script>" ;
           //     alert("URL has been injected...");
                qObj.trigger("saveJSCode");
          }      
          
          $("input:checked").each(function() {                        
                $(this).removeAttr('checked');
          });

          $("#injectcode-modal").modal("hide") ;                  
         
         //writeJSCodeTOFile(injectedJSCode , jsFileName);    
        // injectedJSCode = "";  
       //  $("#jsFileName").val("Enter URL of JS file here...");
         //jsFileName="";              
         return !1  
    };
    q.prototype.loadProject = function (a) {        
        a = $(a.currentTarget).closest("tr").data("projectid");
        this.trigger("project.load", a);
        return !1
    };
    q.prototype._removeProject = function (a) {
        return $('#projects-list [data-projectid="' + a.id + '"]').remove()
    };
    q.prototype.deleteProject = function (a) {
        a = $(a.currentTarget).closest("tr").data("projectid");                    
        deletePageFromDB(a);
        getPageNamesFromDB();
        idFromDB = null;
        jsCodeTOBeAdded = "";
        return !1
    };
    q.prototype.exportProject = function (a) {
        var b, a = $(a.currentTarget).closest("[data-projectid]").data("projectid");
        b = new qa;
        b.id = a;
        window.location = b.url();
        return !1
    };
    q.prototype.openProject = function (a) {
        $(a.currentTarget);
        return !1
    };
    q.prototype.promptNewProject = function () {
        this.hide();
        return this.newProjectView.show()
    };
    q.prototype.createNewProject = function (a) {
        var b;
        b = new B;
        b.set({
            name: a
        });
        return b.save(null, {
            success: function (a, b) {
                return console.log("Created!", a, b)
            },
            error: function (a, b) {
                console.log("Error", a, b);
                return alert('Unable to save project. Please try again later or send an email to <a href="mailto:max@jetstrap.com">max@jetstrap.com</a>')
            }
        })
    };
    Fc = q;
    var F = function (a) {
        _.extend(this, Backbone.Events);

        F.__super__.constructor.call(this, a)
    };
    f(F, Backbone.View);
    F.prototype.events = {
        'click [data-action="create"]': "onCreate",
        'click [data-action="createNewProject"]' : "createNewProject",                    
        "submit form": "onCreate"                                         
    };
    F.prototype.show = function (a) {
        $("#projects-modal").modal("hide");
        $("#new-project-modal").modal({
            keyboard: !1,
            backdrop: "static"
        });
        a ? $('#new-project-modal [data-dismiss="modal"]').hide() : $('#new-project-modal [data-dismiss="modal"]').show();
        $("#new-project-modal").modal("show");
        return this.$el.find('[name="name"]').focus()
    };

    F.prototype.showView = function (a) {
       $("#createNewProject").modal({
        keyboard: !1,
        backdrop: "static"
    });
       return $("#createNewProject").modal("show")
    };

    F.prototype.hide = function () {
        return $("#new-project-modal").modal("hide")
    };


    F.prototype.hideView = function () {
        return $("#createNewProject").modal("hide")
    };

    F.prototype.onCreate = function () {                     
        var a, b;
        if ((a = this.$el.find('[name="name"]').val()) && "" !== $.trim(a)) b = this.$el.find("[data-template].active").data("template"), console.log("New project with template", b), "" !== $.trim(a) && (console.log("Creating project with name",
            a), this.$el.find('[name="name"]').val(""), this.trigger("project.create", a, b)), this.hide();
            return !1
    };
   
    F.prototype.createNewProject = function () {
        var tempId=createNewProject(this.$el.find('[name="name"]').val());
        idFromDB = tempId[1];
        return this.hideView()        
    };

    zc = F;

    var Sc = function () {
        var a = this;
        $(document).ready(function () {
            return a.builder = new g
        })
    };
    Sc.prototype.setFrameSize = function (a, b) {
        return this.builder.setFrameSize(a, b)
    };
    
    window.Jetstrap = new Sc
    
    }).call(this);