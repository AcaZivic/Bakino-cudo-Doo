"use strict";

var prefiksPage = "pages/",
    prefiksDok = "assets/doc/",
    prefiksSlike = "assets/images/",
    prefiksPomocno = "",
    prefiksOnline = "/BakinoCudoDoo/";
var bodyTag = document.getElementsByTagName("body"),
    strelicaObj = document.querySelector("#strelicaPocetak"),
    navigacijaLink = document.querySelector("#navigacija"),
    nizProizvoda = ["Predjela", "Kuvanih jela", "Salata", "Peciva", "Slatkiša", "Alkohola"];
var nizCboxa = [];
var footerLink = document.querySelector("footer .row.py-3 > div"),
    footerInfo = document.querySelector("footer ul#contact"),
    footerInfoFaIcons = ["phone", "envelope", "map-marker-alt"],
    footerInfoTxt = ["&nbsp;&nbsp;063/710-5150", "&nbsp;&nbsp;aleksandar&#46;zivic&#46;7&#46;21&#64;ict&#46;edu&#46;rs", "&nbsp;&nbsp;Zdravka \u010Celara 16, Belgrade"],
    footerIcons = document.querySelector("footer ul.d-flex");
var url = window.location.pathname;

function proveraFormeUzivo(e) {
  var i = document.querySelector("select");
  var a = document.querySelectorAll(".form-floating.col-md-12 > .row");
  i.addEventListener("change", function () {
    var e = Number(i.value);
    e ? (i.previousElementSibling.classList.remove("text-danger"), i.previousElementSibling.classList.add("text-success"), i.classList.remove("az-form-border"), prikazCheckBoxova(e), a[0].previousElementSibling.classList.remove("az-invisible"), a[0].classList.remove("az-invisible"), a[1].classList.remove("az-invisible"), a.forEach(function (e) {
      e.querySelectorAll("input[type='checkbox']").forEach(function (e) {
        return nizCboxa.push(e);
      });
    })) : (i.previousElementSibling.classList.add("text-danger"), i.previousElementSibling.classList.remove("text-success"), i.classList.add("az-form-border"), a[0].previousElementSibling.classList.add("az-invisible"), a[0].classList.add("az-invisible"), a[1].classList.add("az-invisible"), a[1].nextElementSibling.classList.add("az-invisible"));
  }), e.forEach(function (e) {
    e.addEventListener("keyup", function () {
      e.value.length ? (e.classList.remove("az-form-border"), e.nextElementSibling.nextElementSibling.classList.add("az-invisible"), proveriElem(e)) : (bool = !1, e.classList.add("az-form-border"), e.nextElementSibling.nextElementSibling.innerHTML = "Niste popunili polje", e.nextElementSibling.nextElementSibling.classList.remove("az-invisible"));
    });
  });
}

function zavrsiLoadScreen() {
  $("#load-screen").addClass("az-anim-opac"), $(bodyTag).addClass("az-body-visi"), setTimeout(function () {
    $("#load-screen").addClass("az-load-del");
  }, 1150);
}

function prikazNavigacije(e, i) {
  var a = "";

  for (indeks in e) {
    a += "<li class='nav-item me-1'>", a += "<a class='nav-link fs-5 px-3 py-2 az-red' href=".concat(i[indeks], ">").concat(e[indeks], "</a>"), a += "</li>";
  }

  navigacijaLink.innerHTML = a;
}

function glavniLink(e) {
  navigacijaLink.querySelectorAll("li > a").forEach(function (i) {
    i.getAttribute("href") == e && (i.classList.remove("az-red"), i.classList.add("active"));
  });
}

function slajderSlike(e, i, a) {
  for (var t = 0; t < i.length; t++) {
    var s = document.createElement("div");
    s.classList.add("carousel-item"), t || s.classList.add("az-visible"), s.innerHTML = "<img src='".concat(a[t], "' class=\"d-block w-100 mx-auto\" alt=\"").concat(i[t], "\"/>"), e.lastElementChild.appendChild(s);
  }
}

function strelicaPrikaz() {
  document.addEventListener("scroll", function () {
    window.scrollY > 900 ? strelicaObj.classList.contains("postaviStrelicu") || (strelicaObj.classList.remove("skiniStrelicu"), strelicaObj.classList.add("postaviStrelicu"), strelicaObj.classList.add("d-flex")) : strelicaObj.classList.contains("postaviStrelicu") && (strelicaObj.classList.remove("postaviStrelicu"), strelicaObj.classList.add("skiniStrelicu"), setTimeout(function () {
      strelicaObj.classList.remove("d-flex");
    }, 300));
  }), strelicaPocetak.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

function prikazPrednosti(e, i) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      element = _step.value;
      var a = "<div class=\"col-lg-3 col-md-6 col-10 offset-sm-1 offset-1 offset-md-0 mb-5\">\n                        <div class=\"card position-relative\">";
      a += "<img src=".concat(element.slikaSrc, " class=\"card-img-top\" alt=\"").concat(element.slikaAlt, "\"/>"), a += "<div class=\"az-icon d-flex justify-content-center align-items-center bg-warning rounded-circle position-absolute\">\n                    <i class=\"fa-solid fa-".concat(element.faIcon, " fs-2 \"></i>\n                </div>"), a += "<div class=\"card-body\">\n                    <h5 class=\"card-title fw-bold\">".concat(element.naslov, "</h5>\n                    <p class=\"card-text\">").concat(element.tekst, "</p>\n                </div>\n            </div>\n        </div>"), e.innerHTML += a;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function procitajVise(e) {
  e.each(function (e, i) {
    return $(i).click(function () {
      $(this).prev().slideToggle(600), "Pročitaj više" == $(this).html() ? $(this).html("Pročitaj manje") : $(this).html("Pročitaj više");
    });
  });
}

function ispisSvihNaslova(e, i) {
  for (element in e) {
    if ("" != e[element].oznaka && (i[element].innerHTML += "<h2 class=\"fs-6\">".concat(e[element].oznaka, "</h2>")), e[element].naslov, i[element].innerHTML += "<h3 class=\"pb-2 fs-1 text-capitalize\">".concat(e[element].naslov, "</h3>"), "" != e[element].opis) {
      var a = document.createElement("p");
      a.classList.add("py-2", "az-pad");
      var t = document.createTextNode(e[element].opis);
      a.appendChild(t), i[element].appendChild(a);
    }
  }
}

function ispisSaveta(e, i) {
  i.forEach(function (a, t) {
    a.innerHTML += "<div class=\"card-body position-relative\">\n         <div class=\"az-icon d-flex justify-content-center align-items-center align-content-center bg-warning rounded-circle position-absolute\">\n           <p class=\"fw-bold text-center text-uppercase\">".concat(e[t].dan, "<br/>").concat(e[t].mesec, "</p>\n        </div>\n         <h4 class=\"fs-6\">").concat(e[t].kategorija, "</h4>\n         <h5 class=\"card-title fw-bold\">").concat(e[t].naslov, "</h5>\n         <p class=\"card-text\">").concat(e[t].opis, "</p>\n         <a href=\"pages/saveti.html\" class=\"btn btn-primary az-bg-red-2\">Saznaj vi\u0161e</a>  </div>");
    var s = i[t].querySelector(".card-body").previousElementSibling;
    s.setAttribute("src", prefiksSlike + e[t].link), s.setAttribute("alt", "".concat(e[t].alt));
  });
}

function ispisKomentara(e, i) {
  i.forEach(function (i, a) {
    var t = "";
    t += "<div class=\"col-md-3\">\n        <img src=\"".concat(prefiksSlike + e[a].link, "\" class=\"img-fluid rounded-start\" alt=\"").concat(e[a].alt, "\"/></div>"), t += "<div class=\"col-md-9 d-flex align-items-center\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">".concat(e[a].ime, "</h5>\n          <h6>").concat(e[a].posao, "</h6>");
    var s = "";
    s += '<div class="row w-50 mx-auto">', s += "<div class=\"col-2 offset-1\">\n                <img class=\"w-100 mx-auto\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>";

    for (var l = 2; l < 6; l++) {
      l <= e[a].ocena ? s += "<div class=\"col-2 \">\n                <img class=\"w-100 mx-auto\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>" : s += "<div class=\"col-2\">\n                <img class=\"w-100 mx-auto az-opac\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>";
    }

    s += "</div>", t += s, t += "<p class=\"card-text py-3\">".concat(e[a].opis, "</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Poslato: ").concat(e[a].datum, "</small></p></div></div>"), i.innerHTML = t;
  });
}

function prikazFooterLinkova(e, i) {
  for (var a = 0; a < 3; a++) {
    footerLink.innerHTML += "<ul class=\"row my-3\">\n        <li class=\"col-6\"><a href=\"".concat(i[a], "\">").concat(e[a], "</a></li>\n        <li class=\"col-6\"><a href=\"").concat(i[a + 3], "\">").concat(e[a + 3], "</a></li>\n      </ul>");
  }
}

function prikazFooterInformacija() {
  for (element in footerInfoFaIcons) {
    footerInfo.innerHTML += "<li class=\"my-3\"><i class=\"fas fa-".concat(footerInfoFaIcons[element], "\"></i>").concat(footerInfoTxt[element], "</li>");
  }
}

function prikazFooterIkonica(e) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      element = _step2.value;
      footerIcons.innerHTML += "<li><a class=\"az-sm d-flex justify-content-center align-items-center rounded-circle\" href=\"".concat(element.link, "\"><i class=\"").concat(element.icon, "\"></i></a> </li>");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function prikazForme(e, i) {
  var _loop = function _loop(a) {
    e[a].addEventListener("focus", function () {
      i[a].innerHTML += "  (Primer: ".concat(e[a].getAttribute("placeholder"), ")");
    }), e[a].addEventListener("blur", function () {
      i[a].innerHTML = i[a].getAttribute("for").substring(5) + '<span class="text-danger"><i class="fa-regular fa-asterisk"></i></span>';
    });
  };

  for (var a = 0; a < e.length; a++) {
    _loop(a);
  }
}

function proveraForme() {
  var e = !0;
  var i = this.parentElement.parentElement.querySelectorAll("input[type='text'],input[type='email']"),
      a = document.querySelector("select"),
      t = document.kontaktForm.tipKontakt;
  i.forEach(function (i, a) {
    i.value.length ? proveriElem(i) || (e = !1) : (e = !1, i.classList.add("az-form-border"), i.nextElementSibling.nextElementSibling.innerHTML = "Niste popunili polje", i.nextElementSibling.nextElementSibling.classList.remove("az-invisible"));
  });
  var s = 0;

  if (a.selectedIndex ? (a.classList.remove("az-form-border"), nizCboxa.forEach(function (e) {
    e.checked && s++;
  }), s ? document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.add("az-invisible") : (document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.remove("az-invisible"), e = !1)) : (e = !1, a.classList.add("az-form-border")), t.value ? t[0].parentElement.parentElement.nextElementSibling.classList.add("az-invisible") : (t[0].parentElement.parentElement.nextElementSibling.classList.remove("az-invisible"), e = !1), e) {
    this.previousElementSibling.classList.remove("az-red"), this.previousElementSibling.classList.add("text-success"), this.previousElementSibling.innerHTML = "Uspešno ste naručili hranu !", i.forEach(function (e, i) {
      e.value = "";
    }), a.selectedIndex = 0, a.previousElementSibling.classList.add("text-danger"), a.previousElementSibling.classList.remove("text-success"), a.classList.remove("az-form-border");
    var l = document.querySelectorAll(".form-floating.col-md-12 > .row");
    l[0].previousElementSibling.classList.add("az-invisible"), l[0].classList.add("az-invisible"), l[1].classList.add("az-invisible"), l[1].nextElementSibling.classList.add("az-invisible");
  } else this.previousElementSibling.classList.add("az-red"), this.previousElementSibling.classList.remove("text-success"), this.previousElementSibling.innerHTML = "Niste dobro popunili formu !";

  this.previousElementSibling.classList.remove("az-invisible");
}

function proveriElem(e) {
  var i = !0,
      a = !0;
  return e.id.match(/input(?=(Ime|Prezime))/) && (i = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,})*$/.test(e.value)), "inputEmail" == e.id && (i = /^[\w\_]{3,}\@[a-z]{3,}\.[a-z]{2,3}$/.test(e.value)), "inputTelefon" == e.id && (i = /^(06[^7]\/[0-9]{7})|(067\/7[0-9]{6})$/.test(e.value)), i ? (e.classList.remove("az-form-border"), e.nextElementSibling.nextElementSibling.classList.add("az-invisible")) : (a = !1, e.classList.add("az-form-border"), e.nextElementSibling.nextElementSibling.classList.remove("az-invisible"), e.nextElementSibling.nextElementSibling.innerHTML = "Niste popunili polje u trazenom formatu"), a;
}

function prikazCheckBoxova(e) {
  var i = document.querySelector(".form-floating.col-md-12 > .row");
  i.innerHTML = "";
  var a;
  a = 3 === e ? 5 : 6;

  for (var t = 0; t < a; t++) {
    var s = document.createElement("div");
    s.classList.add("col-4", "text-center");
    var l = document.createElement("input"),
        n = nizProizvoda[t].substring(0, 5).toLowerCase();
    l.setAttribute("id", n), l.setAttribute("type", "checkbox"), l.setAttribute("value", "".concat(t)), l.classList.add("form-check-input", "me-2");
    var o = document.createElement("label");
    o.setAttribute("for", n), o.classList.add("form-check-label"), o.innerText = nizProizvoda[t], s.appendChild(l), s.appendChild(o), i.appendChild(s), 2 == t && ((i = i.nextElementSibling).innerHTML = "");
  }
}

function padajuciMeni() {
  $("#btnMeni").click(function () {
    $(this).next().slideToggle();
  });
}

url = "/BakinoCudoDoo/" == url ? "/BakinoCudoDoo/index.html" : url, window.onload = function () {
  if ("/BakinoCudoDoo/index.html" == url) {
    var e = document.querySelector("#carouselSliderIndicators"),
        i = ["".concat(prefiksOnline + prefiksSlike, "slanaJela.jpg"), "".concat(prefiksOnline + prefiksSlike, "cokolodnaTorta.jpg"), "".concat(prefiksOnline + prefiksSlike, "rakijaViseFlasa.jpg")],
        a = document.querySelector("#blokPrednosti");
    var t = [];
    t.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "svezeNamirnice.jpg"),
      slikaAlt: "Sveze namirnice",
      naslov: "Sveže namirnice",
      tekst: "Namirnice koje koristimo su isključivo od naših sigurnih partnera.",
      faIcon: "carrot"
    }), t.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "brzaDostava.jpg"),
      slikaAlt: "Brza Dostava",
      naslov: "Brza dostava",
      tekst: "Naši dostavljači su brzi i vešti da dostave hranu gde god je potrebno.",
      faIcon: "clock"
    }), t.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "raznovrsnaHrana.jpg"),
      slikaAlt: "Raznovrsna hrana",
      naslov: "Raznovrsna jela",
      tekst: "Imamo raznovrsan jelovnik, kako bi svako pronašao obrok za sebe.",
      faIcon: "bowl-food"
    }), t.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "velikoIskustvo.jpg"),
      slikaAlt: "Veliko iskustvo",
      naslov: "Veliko iskustvo",
      tekst: "Naša ekipa radi kompaktno i gotovo bez greške dugi niz godina.",
      faIcon: "star"
    });
    var s = document.querySelectorAll("#Komentari div.col-12.text-center"),
        l = $("button[data-az-slide]");
    slajderDugmici(l);
    var n = $("#Usluge .card-body button"),
        o = document.querySelectorAll("#Usluge .row.mt-3 > div.col-12.text-center"),
        r = [];
    r.push({
      naslov: "Naše Usluge",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: ""
    }), r.push({
      naslov: "Naruči specijalitete",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: ""
    }), r.push({
      naslov: "Bakini Saveti",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: "Baka Zorka svoje savete za održavanje kuhinje i ideje za razna jela voli da deli pa tako imate šta da naučite ako želite sami da napravite neko jelo."
    });
    var c = [];
    c.push({
      naslov: "Kako očistiti mašinu za sudove?",
      kategorija: "Higijena kuhinje",
      dan: 11,
      mesec: "apr",
      opis: "Zvuči jednostavno, ali ljudi ne znaju kako da se reše neprijatnog mirisa nakon pranja sudova.",
      link: "savetiMasina.jpg",
      alt: "mašina za sudove"
    }), c.push({
      naslov: "Kako da umesite lepo testo?",
      kategorija: "Kuvanje",
      dan: 17,
      mesec: "feb",
      opis: "Postoje razna testa koje mo\u017Eete umesiti, ali ovde \u0107emo pro\u0107i ono \u0161to me najvi\u0161e ljudi pitalo. ",
      link: "savetiTesto.jpg",
      alt: "mešanje testa"
    }), c.push({
      naslov: "5 saveta profesionalnog kuvara",
      kategorija: "Praktični saveti",
      dan: 9,
      mesec: "jan",
      opis: "Profesionalni kuvari vole da podele razne detalje sa svoga posla, ali neke klju\u010Dne pre\u0107ute.",
      link: "savetiKuvar.jpg",
      alt: "profesionalni kuvar"
    });
    var d = document.querySelectorAll("#Usluge div.row.mt-3 div.card"),
        u = document.querySelectorAll("#Komentari .row.g-0"),
        v = [];
    v.push({
      ime: "Milorad Petrović",
      posao: "It stručnjak",
      datum: "20.2.2022.",
      opis: "Pravio sam \u017Eurku i naru\u010Dio sam hranu par sati pre \u017Eurke. Nisam o\u010Dekivao, ali ona je stigla na vreme vru\u0107a i ukusna. Svi su bili zadovoljni i pitali su me odakle sam naru\u010Dio tako kvalitetnu hranu.",
      link: "komentariIT.jpg",
      alt: "čovek It stručnjak",
      ocena: 5
    }), v.push({
      ime: "Marija Spasić",
      posao: "Menadžer",
      datum: "22.1.2022.",
      opis: "\u010Cula sam od drugarice za njih i naru\u010Dila sam hranu za moju svadbu. Kvalitet hrane je bio odli\u010Dan i svi su bili odu\u0161evljeni i sve je bilo gotovo u roku kako smo se dogovorili. Jedino su malo skuplji, ali vredi.",
      link: "komentariMenadzer.jpg",
      alt: "žena menadžer",
      ocena: 4
    }), v.push({
      ime: "Srđan Janketić",
      posao: "Vlasnik vrtića",
      datum: "13.3.2022.",
      opis: "Dugo godina je moja ekipa tragala za dobrim keteringom koji nudi raznovrsnu hranu za sve mali\u0161ane. Jedino je <span class=\"fw-bold\">Keternig \"Bakino \u010Cudo\"</span> uspeo da nas zadovolji kvalitetom i brzinom njihovih voza\u010Da.",
      link: "komentariVlasnik.jpg",
      alt: "čovek vlasnik vrtića",
      ocena: 5
    });
    var p = document.querySelector("#kontaktForm");
    var m = p.querySelectorAll("input[type='text'],input[type='email']"),
        k = p.querySelectorAll("label"),
        f = p.querySelector("#dugmeProvera");
    proveraFormeUzivo(m), f.addEventListener("click", proveraForme), slajderSlike(e, ["slano posluzenje", "čokolodna torta", "flaše rakije raznih ukusa"], i), prikazPrednosti(a, t), procitajVise(n), ispisSvihNaslova(r, o), ispisSvihNaslova([{
      naslov: "Komentari posetilaca",
      oznaka: "",
      opis: "Stalno dobijamo komentare i ovde možete videti šta ljudi koji su probali naše specijalitete misle o njima."
    }], s), ispisSaveta(c, d), ispisKomentara(v, u), prikazForme(m, k);
  } else prefiksPomocno = "../", prikazImenaStrane();

  if (url == "".concat(prefiksOnline, "pages/usluge.html") && funkModal(), url == "".concat(prefiksOnline, "pages/meni.html")) {
    var b = document.querySelector(".row.text-center > button");
    b.addEventListener("click", function () {
      b.parentElement.previousElementSibling.classList.toggle("az-invisible"), "Vidi više" == b.innerText && (b.innerText = "Vidi manje");
    });
  }

  url == "".concat(prefiksOnline, "pages/kontakt.html") && formaPlugin();
  var g = [];
  g.push({
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  }), g.push({
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  }), g.push({
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  }), g.push({
    link: "".concat(prefiksOnline + prefiksDok, "Dokumentacija.pdf"),
    icon: "fa-solid fa-file"
  }), g.push({
    link: "".concat(prefiksOnline, "sitemap.xml"),
    icon: "fa-solid fa-sitemap"
  }), g.push({
    link: "".concat(prefiksOnline, "rss.xml"),
    icon: "fas fa-rss"
  });
  var h = ["Početna", "Usluge", "Meni", "Saveti", "Kontakt", "O autoru"],
      z = ["".concat(prefiksOnline, "index.html"), "".concat(prefiksOnline + prefiksPage, "usluge.html"), "".concat(prefiksOnline + prefiksPage, "meni.html"), "".concat(prefiksOnline + prefiksPage, "saveti.html"), "".concat(prefiksOnline + prefiksPage, "kontakt.html"), "".concat(prefiksOnline + prefiksPage, "autor.html")];
  padajuciMeni(), strelicaPrikaz(), prikazNavigacije(h, z), glavniLink(url), prikazFooterLinkova(h, z), prikazFooterInformacija(), prikazFooterIkonica(g), setTimeout(zavrsiLoadScreen, 1300), setTimeout(function () {
    return $("#load-screen").remove();
  }, 2300), setTimeout(slajderAnimacija, 4500);
};
var brAk = 0;

function slajderDugmici(e) {
  e.each(function (i, a) {
    var t = i;
    $(a).click(function () {
      var i = $("#carouselSliderIndicators .carousel-inner .az-visible"),
          a = $(i.parent().children()[t]);
      a.hasClass("az-visible") || (i.hide("slow").removeClass("az-visible"), a.fadeIn().addClass("az-visible")), brAk = t, $(e).removeClass("az-active"), $(this).addClass("az-active");
    });
  });
}

function slajderAnimacija() {
  var e = $("#carouselSliderIndicators .carousel-inner .az-visible"),
      i = e.next().length ? e.next() : e.parent().children(":first");
  e.hide("slow").removeClass("az-visible"), i.fadeIn().addClass("az-visible");
  var a = $("#carouselSliderIndicators button").filter("button[data-az-slide = ".concat(brAk, "]")),
      t = a.next().length ? a.next() : a.parent().children(":first");
  brAk = brAk < 2 ? ++brAk : 0, a.removeClass("az-active"), t.addClass("az-active"), setTimeout(slajderAnimacija, 4e3);
}

function funkModal() {
  document.querySelectorAll(".card-body > button").forEach(function (e) {
    e.addEventListener("click", function () {
      $(this).next().addClass("az-visible"), $(this).next().animate({
        opacity: "1"
      }, 500), $('<div id="pozadinaModal" class="modal-backdrop fade show"></div>').appendTo($("body"));
    });
  });
  document.querySelectorAll(".modal-header > button,.modal-footer > button").forEach(function (e) {
    e.addEventListener("click", function () {
      var e = $(this).parent().parent().parent().parent();
      e.animate({
        opacity: "0"
      }, 500), setTimeout(function () {
        $(e).removeClass("az-visible");
      }, 500), $("#pozadinaModal").remove();
    });
  });
}

function formaPlugin() {
  jQuery.validator.setDefaults({
    debug: !0,
    success: "valid"
  });
  var e = document.querySelectorAll("input");
  prikazForme(e, document.querySelectorAll("label"));
  var i = $("#konForm");
  var a = i.validate({
    rules: {
      inputIme: {
        required: !0,
        minlength: 3
      },
      inputPrezime: {
        required: !0,
        minlength: 3
      },
      inputEmail: {
        required: !0,
        email: !0
      },
      txtOblast: {
        required: !0
      }
    },
    success: function success(e) {
      e.text("").addClass("valid");
    }
  });
  var t;
  $(".col-12 > button").click(function () {
    t = i.valid();
    var s = $("#porukaGreska"),
        l = document.querySelector("textarea");
    brisiPoruke(a), l.value.length && (l.nextElementSibling.innerHTML = ""), t ? (s.removeClass("az-invisible"), s.html("Sve je ispravno popunjeno poruka je poslata!"), s.removeClass("az-red"), s.addClass("text-success"), $("label.error").text(""), e.forEach(function (e) {
      e.value = "";
    }), l.value = "") : (s.removeClass("az-invisible"), console.log(s), s.html("Niste popunili sva polja ispravno !"), s.removeClass("text-success"), s.addClass("az-red"));
  }), e.forEach(function (e) {
    e.addEventListener("focus", function () {
      brisiPoruke(a);
    });
  });
}

function brisiPoruke(e) {
  e.showErrors({
    inputIme: "",
    inputEmail: "",
    inputPrezime: "",
    txtOblast: "Morate ostaviti poruku koju prosleđujete!"
  });
}

function prikazImenaStrane() {
  document.querySelectorAll("#naslovna span").forEach(function (e) {
    e.innerText = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")).toLowerCase();
  });
}