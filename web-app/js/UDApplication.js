        var ApplicationValues = {
            element_color: "#ffffbb",
            dialog: new Dialog()
        };
        var Application = function (a) {
            a = a || {};
            if (!(a.id && a.width && a.height)) {
                return
            }
            this._width = a.width;
            this._height = a.height;
            this._generateStructure(a.id);
            this._generateGeneralMenu();
            this._selected = null;
            this._diagrams = [];
            this._tabs = [];
           // this.setProfileSpecificMenu()
        };
        var _acceptedDiagrams = [];
        var _acceptedElementsUML = [];
        var _genericMenu = [];
        var _specificMenu = [];
        var _stereotypes = [];
        var _metaclass = [];
        var _delProfileElement = function (b) {
            if (b.getType() == "UMLMetaclass") {
                for (var a in _metaclass) {
                    if (_metaclass[a] == b) {
                        _metaclass.splice(a, 1)
                    }
                }
            }
            if (b.getType() == "UMLStereotype") {
                for (var a in _stereotypes) {
                    if (_stereotypes[a] == b) {
                        _stereotypes.splice(a, 1)
                    }
                }
            }
        };
        Application.prototype._generateStructure = function (b) {
            var g = document.getElementById(b);
            var d = document.createElement("div");
            d.setAttribute("id", "ud_tools_div");
            var f = document.createElement("ul");
            f.setAttribute("id", "ud_tools_ul1");
            var e = document.createElement("ul");
            e.setAttribute("id", "ud_tools_ul2");
            d.appendChild(f);
            d.appendChild(e);
            g.appendChild(d);
            this._tools_div = d;
            this._tools_ul1 = f;
            this._tools_ul2 = e;
            var l = document.createElement("div");
            l.setAttribute("id", "ud_container_div");
            var n = document.createElement("div");
            n.setAttribute("id", "ud_selector_div");
            var a = document.createElement("ul");
            a.setAttribute("id", "ud_selector_ul");
            n.appendChild(a);
            l.appendChild(n);
            this._selector_ul = a;
            var j = document.createElement("div");
            j.setAttribute("id", "ud_diagram_div");
            j.setAttribute("class", "ud_diagram_div");
            j.style.width = this._width + "px";
            j.style.height = this._height + "px";
            this._diagram_div = j;
            l.appendChild(j);
            g.appendChild(l);
            var c;
            c = document.createElement("canvas");
            c.setAttribute("class", "ud_diagram_canvas");
            c.width = this._width;
            c.height = this._height;
            j.appendChild(c);
            this._mainContext = c.getContext("2d");
            this._mainCanvas = c;
            c = document.createElement("canvas");
            c.setAttribute("class", "ud_diagram_canvas");
            c.width = this._width;
            c.height = this._height;
            c.onmousedown = function () {
                return false
            };
            j.appendChild(c);
            this._motionContext = c.getContext("2d");
            var h = document.createElement("div");
            h.setAttribute("id", "ud_update_div");
            h.title = "apply changes in profile to diagrams";
            h.style.right = 15 + "px";
            h.style.display = "none";
            j.appendChild(h);
            var k = this;
            h.onclick = function () {
                ApplicationValues.dialog._text = "Do you want to update the diagrams according to the changes of the profile?";
                ApplicationValues.dialog._cancelable = true;
                if (k._selected && k._diagrams[k._selected].getType() == "UMLProfile") {
                    ApplicationValues.dialog.show(function () {
                        var o = [];
                        for (i in k._diagrams) {
                            if (k._diagrams[i].getType() != "UMLProfile") {
                                o.push(k._diagrams[i])
                            }
                        }
                        k._diagrams[k._selected].updateProfile(o)
                    })
                }
            };
            var m = document.createElement("div");
            m.setAttribute("id", "ud_delete_div");
            j.appendChild(m);
            var k = this;
            m.onclick = function () {
                ApplicationValues.dialog._text = 'Do you want to delete the diagram "' + k._diagrams[k._selected].getName() + '"?';
                ApplicationValues.dialog._cancelable = true;
                if (k._selected) {
                    ApplicationValues.dialog.show(function () {
                        k._delDiagram();
                        k._generateSpecificMenu()
                    })
                }
            }
        };
        Application.prototype._changeTabName = function (c) {
            var e = this._diagrams[c].getName();
            if (e.length > 20) {
                e = e.substring(0, 17);
                e += "..."
            }
            var b = this._tabs[c];
            var d = b.firstChild;
            var a = d.firstChild;
            d.removeChild(a);
            d.appendChild(document.createTextNode(e))
        };
        Application.prototype._addTab = function (b) {
            var a = document.createElement("li");
            var d = document.createElement("a");
            d.appendChild(document.createTextNode(""));
            a.appendChild(d);
            this._selector_ul.appendChild(a);
            this._tabs[b] = a;
            var c = this;
            a.onclick = function () {
                if (c._selected == b) {
                    ApplicationValues.dialog._text = "Diagram name:";
                    ApplicationValues.dialog._cancelable = true;
                    var e = c._diagrams[b];
                    ApplicationValues.dialog.show(function (f) {
                        if (f == "") {
                            f = "Untitle"
                        }
                        e.setName(f);
                        c._changeTabName(b);
                        e.draw()
                    }, e.getName())
                } else {
                    c._selectDiagram(b)
                }
            };
            this._changeTabName(b)
        };
        Application.prototype._delTab = function (a) {
            this._selector_ul.removeChild(this._tabs[a]);
            delete this._tabs[a]
        };
        Application.prototype._generateIndex = function () {
            var a = Math.random();
            while (true) {
                if (a in this._diagrams) {
                    a = Math.random()
                } else {
                    return a
                }
            }
        };
        Application.prototype.addDiagram = function (a) {
            var b = this._generateIndex();
            a.initialize(b, this._diagram_div, this._mainContext, this._motionContext, this._width, this._height);
            this._diagrams[b] = a;
            this._diagrams[b].setUpdateHeightCanvas(true);
            if (a.isVisible()) {
                this._addTab(b)
            }
            this._selectDiagram(b)
        };
        Application.prototype._delDiagram = function () {
            var a = this._selected;
            if (a) {
                this._diagrams[a].interaction(false);
                this._delTab(a);
                if (this._diagrams[a].getType() == "UMLProfile") {
                    var c = [];
                    for (b in this._diagrams) {
                        if (this._diagrams[b].getType() != "UMLProfile") {
                            c.push(this._diagrams[b])
                        }
                    }
                    this._diagrams[a].removeProfile(c);
                    for (b = 0; b < this._diagrams[a]._nodes.length; b++) {
                        _delProfileElement(this._diagrams[a]._nodes[b])
                    }
                }
                delete this._diagrams[a];
                this._selected = null;
                var b;
                for (b in this._diagrams) {
                    if (this._diagrams[b]._visible) {
                        this._selectDiagram(b);
                        return
                    }
                }
                this._clearCanvas()
            }
        };
        Application.prototype._clearCanvas = function () {
            this._mainContext.clearRect(0, 0, this._width, this._height);
            this._motionContext.clearRect(0, 0, this._width, this._height)
        };
        Application.prototype._selectDiagram = function (b) {
            if (this._selected && this._diagrams[b].isVisible()) {
                this._diagrams[this._selected].interaction(false);
                this._tabs[this._selected].removeAttribute("class")
            }
            this._clearCanvas();
            this._diagrams[b].draw();
            this._diagrams[b].interaction(true);
            if (this._diagrams[b].isVisible()) {
                this._selected = b;
                this._tabs[b].setAttribute("class", "active");
                this._generateSpecificMenu();
                var a = document.getElementById("ud_update_div");
                if (this._diagrams[b].getType() == "UMLProfile") {
                    a.style.display = "block"
                } else {
                    a.style.display = "none"
                }
            }
        };
        Application.prototype._getDiagramImage = function () {
            if (this._selected) {
                this._diagrams[this._selected].stopEvents();
                this._diagrams[this._selected].draw();
                return this._mainCanvas.toDataURL("image/png")
            }
        };
        Application.prototype._generateGeneralMenu = function () {
            var e = this;
            var g = this._tools_div;
            var c = document.createElement("h1");
            var f = document.createTextNode("Actions");
            var b = document.createElement("img");
            b.setAttribute("src", "../images/img/app/horizontal_flow.png");
            c.appendChild(b);
            c.appendChild(f);
            g.insertBefore(c, this._tools_ul1);
            var j = document.getElementById("ud_tools_ul1");
            j.style.display = "none"

            c.onclick = function () {
                var j = document.getElementById("ud_tools_ul1");
                      var h;
                  
                       if (j.style.display == "none") {
                                           
                   if ( $.fn.makisu.enabled ) {
                            var $Actions = $( '#ud_tools_ul1' );
                                   $Actions.makisu({
                                        selector: 'li',
                                        overlap: 0.85,
                                        speed: 1.7
                                    });
                                 $( '#ud_tools_ul1' ).makisu( 'open' );
                              
                                       }    
                     j.style.display = "block";                             
                        this.childNodes[0].setAttribute("src", "../images/img/app/vertical_flow.png")
                  
                } else {
                    

                    this.childNodes[0].setAttribute("src", "../images/img/app/horizontal_flow.png")     
                    
                     $( '#ud_tools_ul1' ).hide("slow",function(){j.style.display = "none"});
                           
                    
                        
                    
                    
                }
            };

            this._addMenuItem(this._tools_ul1, "Next", function (m) {
                var p = this;
                this._active = true;
                var h = document.createElement("div");
                var j = document.createElement("form");
                var k = document.createElement("textarea");
               
                h.className = "ud_popup";
                k.setAttribute("rows", 15);
                k.setAttribute("cols", 90);
              
                var n = function (v) {
                    m.setXMLString(k.value);
                    document.body.removeChild(h)
                };
               
                
                
                k.value=m.getCurrentXMLString();
                
                sendDataTOParse(k.value);
               
                var o = function (v) {
                    document.body.removeChild(h)
                };
                j.onsubmit = function () {
                    return false
                };
              
                j.appendChild(document.createElement("br"));
            
                h.style.top = (window.innerHeight - j.offsetHeight) / 2 + "px";
                h.style.left = (window.innerWidth - j.offsetWidth) / 2 + "px"
            }, 0, "import_export");
            
            this._addMenuItem(this._tools_ul1, "Delete object", function (l, h, p) {
                var n = l.getElementByPoint(h, p);
                if (n) {
                    var o = false;
                    var m = "";
                    for (var j = 0; j < n._components.length && !o; j++) {
                        if (n._components[j].getId() == "name") {
                            m = n._components[j]._text;
                            o = true
                        }
                    }
                    if (m != "") {
                        m = ' "' + m + '" '
                    }
                    ApplicationValues.dialog._text = "Do you want to delete the object" + m + " (" + n.getType() + ") ?";
                    ApplicationValues.dialog._cancelable = true
                }
                if (n != null && n instanceof Element) {
                    ApplicationValues.dialog.show(function () {
                        l.delElement(n);
                        l.draw();
                        _delProfileElement(n)
                    })
                }
            }, 1, "delete_object");
            var a = _genericMenu;
            var d;
            for (d in a) {
                if (a[d].length == 3) {
                    this._addMenuItem(this._tools_ul1, a[d][0], a[d][1], a[d][2])
                } else {
                    if (a[d].length == 4) {
                        this._addMenuItem(this._tools_ul1, a[d][0], a[d][1], a[d][2], a[d][3])
                    }
                }
            }
            g = this._tools_div;
            c = document.createElement("h1");
            f = document.createTextNode("Diagram elements");
            c.onclick = function () {
                var j = document.getElementById("ud_tools_ul2");
                var h;
                if (j.style.display == "none") {
                   
                    if ( $.fn.makisu.enabled ) {
                        var $Actions = $( '#ud_tools_ul2' );
                               $Actions.makisu({
                                    selector: 'li',
                                    overlap: 0.85,
                                    speed: 1.7
                                });
                              $( '#ud_tools_ul2' ).makisu( 'open' );
                            $( '#ud_tools_ul2' ).show("slow",function(){j.style.display = "block"});
                    }
                    j.style.display = "block";
                    this.childNodes[0].setAttribute("src", "../images/img/app/vertical_flow.png")
                } else {
                     //$( '#ud_tools_ul2' ).makisu( 'close' );
                     this.childNodes[0].setAttribute("src", "../images/img/app/horizontal_flow.png")
                     $( '#ud_tools_ul2' ).hide("slow",function(){j.style.display = "none"});
                    
                   
                }
            };
            b = document.createElement("img");
            b.setAttribute("src", "../images/img/app/vertical_flow.png");
            c.appendChild(b);
            c.appendChild(f);
            g.insertBefore(c, this._tools_ul2)
        };
        Application.prototype._generateSpecificMenu = function () {
            var c;
            var d = this._tools_ul2;
            while (d.hasChildNodes()) {
                d.removeChild(d.firstChild)
            }
            if (this._selected) {
                var c, b;
                var a = _specificMenu[this._diagrams[this._selected].getType()];
                for (c in a) {
                    if (a[c].length == 4) {
                        this._addMenuItem(this._tools_ul2, a[c][0], a[c][1], a[c][2], a[c][3])
                    } else {
                        if (a[c].length == 3) {
                            this._addMenuItem(this._tools_ul2, a[c][0], a[c][1], a[c][2])
                        }
                    }
                }
                this._addMenuItem(this._tools_ul2, "Note", function (f, e, g) {
                    f.addElement(new UMLNote({
                        x: e,
                        y: g
                    }))
                }, 1, "UMLNote");
              /*  this._addMenuItem(this._tools_ul2, "Anchor", function (k, j, m, h, l) {
                    var g = k.getElementByPoint(j, m);
                    var f = k.getElementByPoint(h, l);
                    if (g != null) {
                        if (!f) {
                            f = new UMLNote({
                                x: h,
                                y: l
                            });
                            k.addElement(f)
                        }
                        var e = new UMLLine({
                            a: g,
                            b: f
                        });
                        k.addElement(e)
                    }
                }, 2, "UMLAnchor")*/
            }
        };
        Application.prototype.updateBackgroundElementDiagram = function () {
            for (i in this._diagrams) {
                this._diagrams[i].setBackgroundNodes(ApplicationValues.element_color)
            }
        };
        Application.prototype._interactionSingleClick = function (d) {
            var b = this._diagrams[this._selected];
            b.interaction(false);
            var c = this;
            var a = function (g) {
                var f = g.pageX - c._diagram_div.offsetLeft;
                var e = g.pageY - c._diagram_div.offsetTop;
                d(b, f, e);
                c._diagram_div.onclick = false;
                b.draw();
                b.interaction(true)
            };
            this._diagram_div.onclick = a
        };
        Application.prototype._interactionDoubleClick = function (g) {
            var c = this._diagrams[this._selected];
            c.interaction(false);
            var b = 0,
                d = 0;
            var f = true;
            var e = this;
            var a = function (k) {
                var j = k.pageX - e._diagram_div.offsetLeft;
                var h = k.pageY - e._diagram_div.offsetTop;
                if (f) {
                    f = false;
                    b = j;
                    d = h
                } else {
                    g(c, b, d, j, h);
                    e._diagram_div.onclick = false;
                    c.draw();
                    c.interaction(true)
                }
            };
            this._diagram_div.onclick = a
        };
        Application.prototype._addMenuItem = function (a, g, f, k, b) {
            var h = document.createElement("li");
            var e = document.createElement("a");
            var j = document.createTextNode(g);
            if (b) {
                var c = document.createElement("img");
                c.setAttribute("src", "../images/img/app/" + b + ".png");
                h.appendChild(c)
            }
            e.appendChild(j);
            h.appendChild(e);
            a.appendChild(h);
            var d = this;
            switch (k) {
                case 0:
                    h.addEventListener("click", function () {
                        if (d._selected) {
                            f(d, d._diagrams[d._selected])
                        } else {
                            f(d)
                        }
                    }, false);
                    break;
                case 1:
                    h.addEventListener("click", function () {
                        if (d._selected) {
                            d._interactionSingleClick(f)
                        }
                    }, false);
                    break;
                case 2:
                    h.addEventListener("click", function () {
                        if (d._selected) {
                            d._interactionDoubleClick(f)
                        }
                    }, false);
                    break;
                default:
                    break
            }
        };
        Application.prototype.getXML = function () {
            var b = (new DOMParser()).parseFromString("<umldiagrams/>", "text/xml");
            var d = b.getElementsByTagName("umldiagrams")[0];
            var a;
            var c;
            for (c in this._diagrams) {
                a = this._diagrams[c].getXML(b);
                d.appendChild(a)
            }
            return b
        };
        Application.prototype.getCurrentXML = function () {
            var b = (new DOMParser()).parseFromString("<umldiagrams/>", "text/xml");
            var c = b.getElementsByTagName("umldiagrams")[0];
            var a;
            a = this._diagrams[this._selected].getXML(b);
            c.appendChild(a);
            return b
        };
        Application.prototype.getXMLString = function () {
            return (new XMLSerializer()).serializeToString(this.getXML())
        };
        Application.prototype.getCurrentXMLString = function () {
            return (new XMLSerializer()).serializeToString(this.getCurrentXML())
        };
        Application.prototype.setXML = function (xml) {
            var application = xml.getElementsByTagName("umldiagrams")[0];
            if (!application) {
                alert("Not found a valid XML string");
                return
            }
            var xmlnodes = application.childNodes;
            var aux, nodeName;
            var i, j;
            for (i = 0; i < xmlnodes.length; i++) {
                nodeName = xmlnodes[i].nodeName;
                for (j in _acceptedDiagrams) {
                    if (nodeName == _acceptedDiagrams[j]) {
                        aux = eval("new " + nodeName + "()");
                        if (nodeName != "UMLProfile") {
                            aux.setXML(xmlnodes[i], _stereotypes)
                        } else {
                            aux.setXML(xmlnodes[i], this._diagrams, _acceptedElementsUML);
                            this.storeInformationProfile(aux)
                        }
                        this.addDiagram(aux);
                        break
                    }
                }
            }
        };
        Application.prototype.storeInformationProfile = function (b) {
            var c = b.getElements();
            for (var a = 0; a < c[0].length; a++) {
                _metaclass.push(c[0][a])
            }
            for (a = 0; a < c[1].length; a++) {
                _stereotypes.push(c[1][a])
            }
        };
        Application.prototype.foundInArray = function (c, b) {
            for (var a = 0; a < c.length; a++) {
                if (b == c[a]) {
                    return true
                }
            }
            return false
        };
        Application.prototype.setXMLString = function (a) {
            a = a.replace(/\n/gi, "");
            this.setXML((new DOMParser()).parseFromString(a, "text/xml"))
        };
        _acceptedDiagrams.push("UMLClassDiagram");
        _acceptedElementsUML.push(["Class", "UMLClass"], ["Data Type", "UMLDataType"], ["Association N-ary", "UMLNAssociation"], ["Component (Class diagram)", "UMLComponent"], ["Interface Extended", "UMLInterfaceExtended"], ["UMLPackage", "Package"], ["Package Container", "UMLPackageContainer"], ["UMLGeneralizationSet"]);
        _genericMenu.push(["New class diagram", function (a) {
            a.addDiagram(new UMLClassDiagram({
                backgroundNodes: ApplicationValues.element_color
            }))
        },
        0, "UMLClassDiagram"]);
        _specificMenu.UMLClassDiagram = [
            ["Class", function (b, a, d) {
                var c = new UMLClass({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLClass"],
           /* ["DataType", function (b, a, d) {
                var c = new UMLDataType({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLDataType"]*/,
            /*["Component", function (b, a, d) {
                var c = new UMLComponent({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLComponent"],*/
            /*["Interface", function (b, a, d) {
                var c = new UMLInterfaceExtended({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLInterfaceExtended"],*/
            /*["Package", function (b, a, d) {
                var c = new UMLPackage({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLPackage"],*/
           /* ["Package container", function (b, a, d) {
                var c = new UMLPackageContainer({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                b.addElement(c)
            },
            1, "UMLPackageContainer"],*/
            /*["N-ary Association", function (b, a, d) {
                var c = new UMLNAssociation({
                    x: a,
                    y: d,
                    stereotypes: _stereotypes
                });
                //b.addElement(c)
            },
            1, "UMLNAssociation"],
            ["Generalization", function (e, d, g, c, f) {
                var b = e.getElementByPoint(d, g);
                var a = e.getElementByPoint(c, f);
                if (b && b.getType() == "UMLGeneralizationSet") {
                    b.addElement(a)
                } else {
                    if (a && a.getType() == "UMLGeneralizationSet") {
                        a.addElement(b)
                    } else {
                        e.addRelationFromPoints(new UMLGeneralization(), d, g, c, f)
                    }
                }
            },
            2, "UMLGeneralization"]*/,
            ["Association", function (e, d, g, c, f) {
                var b = e.getElementByPoint(d, g);
                var a = e.getElementByPoint(c, f);
                if (b && b.getType() == "UMLNAssociation") {
                    b.addElement(a);
                    e.addElement(b.getRelation(a))
                } else {
                    if (a && a.getType() == "UMLNAssociation") {
                        a.addElement(b);
                        e.addElement(a.getRelation(b))
                    } else {
                        e.addRelationFromPoints(new UMLAssociation(), d, g, c, f)
                    }
                }
            },
            2, "UMLAssociation"],
            ["Aggregation", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLAggregation(), b, e, a, d)
            },
            2, "UMLAggregation"],
            ["Composition", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLComposition(), b, e, a, d)
            },
            2, "UMLComposition"],
            ["Dependency", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLDependency(), b, e, a, d)
            },
            2, "UMLDependency"],/*
            ["Realization", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLRealization(), b, e, a, d)
            },
            2, "UMLRealization"],
            ["Usage", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLUsage(), b, e, a, d)
            },
            2, "UMLUsage"],
            ["Package merge", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLPackageMerge(), b, e, a, d)
            },
            2, "UMLPackageMerge"],
            ["Package public import", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLPackagePublicImport(), b, e, a, d)
            },
            2, "UMLPackagePublicImport"],
            ["Package private import", function (c, b, e, a, d) {
                c.addRelationFromPoints(new UMLPackagePrivateImport(), b, e, a, d)
            },
            2, "UMLPackagePrivateImport"]*/
        ];
        _acceptedDiagrams.push("UMLUseCaseDiagram");
        _acceptedElementsUML.push(["Actor", "UMLActor"], ["Use Case", "UMLUseCase"], ["UseCaseExtended", "UMLUseCaseExtended"], ["System", "UMLSystem"], ["SubSystem", "UMLSubSystem"]);