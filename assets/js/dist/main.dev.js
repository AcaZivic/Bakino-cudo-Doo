"use strict";

//Zajednicke konstante
var prefiksPage = 'pages/';
var prefiksDok = 'assets/doc/';
var prefiksSlike = 'assets/images/';
var prefiksPomocno = ''; //postaje ../

var prefiksOnline = '/BakinoCudoDoo/';
var bodyTag = document.getElementsByTagName("body");
var strelicaObj = document.querySelector("#strelicaPocetak");
var navigacijaLink = document.querySelector("#navigacija");
var nizProizvoda = ["Predjela", "Kuvanih jela", "Salata", "Peciva", "Slatkiša", "Alkohola"];
var nizCboxa = [];
var footerLink = document.querySelector("footer .row.py-3 > div");
var footerInfo = document.querySelector("footer ul#contact");
var footerInfoFaIcons = ["phone", "envelope", "map-marker-alt"];
var footerInfoTxt = ["&nbsp;&nbsp;063/710-5150", "&nbsp;&nbsp;aleksandar&#46;zivic&#46;7&#46;21&#64;ict&#46;edu&#46;rs", "&nbsp;&nbsp;Zdravka \u010Celara 16, Belgrade"];
var footerIcons = document.querySelector("footer ul.d-flex");
var url = window.location.pathname;
url = url == '/BakinoCudoDoo/' ? '/BakinoCudoDoo/index.html' : url; // console.log(url);

window.onload = function () {
  if (url == '/BakinoCudoDoo/index.html') {
    // console.log("RADI");
    //Konstante za slajeder
    var slajderObj = document.querySelector("#carouselSliderIndicators");
    var slajderNizSlike = ["".concat(prefiksOnline + prefiksSlike, "slanaJela.jpg"), "".concat(prefiksOnline + prefiksSlike, "cokolodnaTorta.jpg"), "".concat(prefiksOnline + prefiksSlike, "rakijaViseFlasa.jpg")];
    var slajderAltSlike = ['slano posluzenje', 'čokolodna torta', 'flaše rakije raznih ukusa']; //Konstante za prednostiBlok

    var prednostiBlok = document.querySelector("#blokPrednosti");
    var prednostiObj = [];
    prednostiObj.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "svezeNamirnice.jpg"),
      slikaAlt: 'Sveze namirnice',
      naslov: 'Sveže namirnice',
      tekst: 'Namirnice koje koristimo su isključivo od naših sigurnih partnera.',
      faIcon: 'carrot'
    });
    prednostiObj.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "brzaDostava.jpg"),
      slikaAlt: 'Brza Dostava',
      naslov: 'Brza dostava',
      tekst: 'Naši dostavljači su brzi i vešti da dostave hranu gde god je potrebno.',
      faIcon: 'clock'
    });
    prednostiObj.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "raznovrsnaHrana.jpg"),
      slikaAlt: 'Raznovrsna hrana',
      naslov: 'Raznovrsna jela',
      tekst: 'Imamo raznovrsan jelovnik, kako bi svako pronašao obrok za sebe.',
      faIcon: 'bowl-food'
    });
    prednostiObj.push({
      slikaSrc: "".concat(prefiksOnline + prefiksSlike, "velikoIskustvo.jpg"),
      slikaAlt: 'Veliko iskustvo',
      naslov: 'Veliko iskustvo',
      tekst: 'Naša ekipa radi kompaktno i gotovo bez greške dugi niz godina.',
      faIcon: 'star'
    }); //Komentari

    var naslovKomentara = document.querySelectorAll("#Komentari div.col-12.text-center");
    var komentariNaslovObj = [{
      naslov: "Komentari posetilaca",
      oznaka: "",
      opis: "Stalno dobijamo komentare i ovde možete videti šta ljudi koji su probali naše specijalitete misle o njima."
    }]; //Slajder

    var $nizSlajderDugmica = $('button[data-az-slide]');
    slajderDugmici($nizSlajderDugmica); // Usluge

    var $nizDugmica = $("#Usluge .card-body button");
    var nizNaslova = document.querySelectorAll("#Usluge .row.mt-3 > div.col-12.text-center");
    var uslugeNasloviObj = [];
    uslugeNasloviObj.push({
      naslov: "Naše Usluge",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: ""
    });
    uslugeNasloviObj.push({
      naslov: "Naruči specijalitete",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: ""
    });
    uslugeNasloviObj.push({
      naslov: "Bakini Saveti",
      oznaka: "Ketering \"Bakino \u010Dudo\"",
      opis: "Baka Zorka svoje savete za održavanje kuhinje i ideje za razna jela voli da deli pa tako imate šta da naučite ako želite sami da napravite neko jelo."
    }); //Saveti

    var savetiObj = [];
    savetiObj.push({
      naslov: "Kako očistiti mašinu za sudove?",
      kategorija: "Higijena kuhinje",
      dan: 11,
      mesec: "apr",
      opis: "Zvuči jednostavno, ali ljudi ne znaju kako da se reše neprijatnog mirisa nakon pranja sudova.",
      link: "savetiMasina.jpg",
      alt: "mašina za sudove"
    });
    savetiObj.push({
      naslov: "Kako da umesite lepo testo?",
      kategorija: "Kuvanje",
      dan: 17,
      mesec: "feb",
      opis: "Postoje razna testa koje mo\u017Eete umesiti, ali ovde \u0107emo pro\u0107i ono \u0161to me najvi\u0161e ljudi pitalo. ",
      link: "savetiTesto.jpg",
      alt: "mešanje testa"
    });
    savetiObj.push({
      naslov: "5 saveta profesionalnog kuvara",
      kategorija: "Praktični saveti",
      dan: 9,
      mesec: "jan",
      opis: "Profesionalni kuvari vole da podele razne detalje sa svoga posla, ali neke klju\u010Dne pre\u0107ute.",
      link: "savetiKuvar.jpg",
      alt: "profesionalni kuvar"
    });
    var nizSaveta = document.querySelectorAll("#Usluge div.row.mt-3 div.card"); //Komentari

    var nizKomentara = document.querySelectorAll("#Komentari .row.g-0");
    var komentariObj = [];
    komentariObj.push({
      ime: "Milorad Petrović",
      posao: "It stručnjak",
      datum: '20.2.2022.',
      opis: "Pravio sam \u017Eurku i naru\u010Dio sam hranu par sati pre \u017Eurke. Nisam o\u010Dekivao, ali ona je stigla na vreme vru\u0107a i ukusna. Svi su bili zadovoljni i pitali su me odakle sam naru\u010Dio tako kvalitetnu hranu.",
      link: "komentariIT.jpg",
      alt: "čovek It stručnjak",
      ocena: 5
    });
    komentariObj.push({
      ime: "Marija Spasić",
      posao: "Menadžer",
      datum: '22.1.2022.',
      opis: "\u010Cula sam od drugarice za njih i naru\u010Dila sam hranu za moju svadbu. Kvalitet hrane je bio odli\u010Dan i svi su bili odu\u0161evljeni i sve je bilo gotovo u roku kako smo se dogovorili. Jedino su malo skuplji, ali vredi.",
      link: "komentariMenadzer.jpg",
      alt: "žena menadžer",
      ocena: 4
    });
    komentariObj.push({
      ime: "Srđan Janketić",
      posao: "Vlasnik vrtića",
      datum: '13.3.2022.',
      opis: "Dugo godina je moja ekipa tragala za dobrim keteringom koji nudi raznovrsnu hranu za sve mali\u0161ane. Jedino je <span class=\"fw-bold\">Keternig \"Bakino \u010Cudo\"</span> uspeo da nas zadovolji kvalitetom i brzinom njihovih voza\u010Da.",
      link: "komentariVlasnik.jpg",
      alt: "čovek vlasnik vrtića",
      ocena: 5
    }); //Forma rezervacije

    var formaObj = document.querySelector("#kontaktForm");
    var formaSelect = document.querySelector("select");
    var divCbx = document.querySelectorAll(".form-floating.col-md-12 > .row");
    var inputFormObjects = formaObj.querySelectorAll("input[type='text'],input[type='email']");
    var labelFormObjects = formaObj.querySelectorAll("label");
    var formDugme = formaObj.querySelector("#dugmeProvera");
    formaSelect.addEventListener('change', function () {
      var pom = Number(formaSelect.value); // console.log(pom);

      if (pom) {
        formaSelect.previousElementSibling.classList.remove("text-danger");
        formaSelect.previousElementSibling.classList.add("text-success");
        formaSelect.classList.remove("az-form-border");
        prikazCheckBoxova(pom);
        divCbx[0].previousElementSibling.classList.remove("az-invisible");
        divCbx[0].classList.remove('az-invisible');
        divCbx[1].classList.remove('az-invisible');
        divCbx.forEach(function (elem) {
          var p = elem.querySelectorAll("input[type='checkbox']");
          p.forEach(function (elem) {
            return nizCboxa.push(elem);
          });
        });
      } else {
        formaSelect.previousElementSibling.classList.add("text-danger");
        formaSelect.previousElementSibling.classList.add("text-success");
        formaSelect.classList.add("az-form-border");
        divCbx[0].previousElementSibling.classList.add("az-invisible");
        divCbx[0].classList.add('az-invisible');
        divCbx[1].classList.add('az-invisible');
        divCbx[1].nextElementSibling.classList.add("az-invisible");
      }
    });
    inputFormObjects.forEach(function (element) {
      element.addEventListener('keyup', function () {
        if (!element.value.length) {
          bool = false;
          element.classList.add("az-form-border");
          element.nextElementSibling.nextElementSibling.innerHTML = 'Niste popunili polje';
          element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
        } else {
          element.classList.remove("az-form-border");
          element.nextElementSibling.nextElementSibling.classList.add('az-invisible');
          proveriElem(element);
        }
      });
    });
    formDugme.addEventListener("click", proveraForme);
    slajderSlike(slajderObj, slajderAltSlike, slajderNizSlike);
    prikazPrednosti(prednostiBlok, prednostiObj);
    procitajVise($nizDugmica);
    ispisSvihNaslova(uslugeNasloviObj, nizNaslova);
    ispisSvihNaslova(komentariNaslovObj, naslovKomentara);
    ispisSaveta(savetiObj, nizSaveta);
    ispisKomentara(komentariObj, nizKomentara);
    prikazForme(inputFormObjects, labelFormObjects);
  } else {
    prefiksPomocno = "../";
    prikazImenaStrane();
  }

  if (url == "".concat(prefiksOnline, "pages/usluge.html")) {}

  if (url == "".concat(prefiksOnline, "pages/saveti.html")) {}

  if (url == "".concat(prefiksOnline, "pages/kontakt.html")) {}

  if (url == "".concat(prefiksOnline, "pages/autor.html")) {} //Konstante za footer


  var footerIconObjects = [];
  footerIconObjects.push({
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  });
  footerIconObjects.push({
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  });
  footerIconObjects.push({
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  });
  footerIconObjects.push({
    link: "".concat(prefiksOnline + prefiksDok, "Dokumentacija (BakinoCudo).docx"),
    icon: "fa-solid fa-file"
  });
  footerIconObjects.push({
    link: "".concat(prefiksOnline, "sitemap.xml"),
    icon: "fa-solid fa-sitemap"
  });
  footerIconObjects.push({
    link: "".concat(prefiksOnline, "rss.xml"),
    icon: "fas fa-rss"
  }); //Konstante za navigacioni meni

  var nizStranica = ["Početna", "Usluge", "Meni", "Saveti", "Kontakt", "O autoru"];
  var nizLinkovaStranica = ["".concat(prefiksOnline, "index.html"), "".concat(prefiksOnline + prefiksPage, "usluge.html"), "".concat(prefiksOnline + prefiksPage, "meni.html"), "".concat(prefiksOnline + prefiksPage, "saveti.html"), "".concat(prefiksOnline + prefiksPage, "kontakt.html"), "".concat(prefiksOnline + prefiksPage, "autor.html")];
  padajuciMeni();
  strelicaPrikaz();
  prikazNavigacije(nizStranica, nizLinkovaStranica);
  glavniLink(url);
  prikazFooterLinkova(nizStranica, nizLinkovaStranica);
  prikazFooterInformacija();
  prikazFooterIkonica(footerIconObjects);
  setTimeout(zavrsiLoadScreen, 1300);
  setTimeout(function () {
    return $("#load-screen").remove();
  }, 2300);
  setTimeout(slajderAnimacija, 4500);
};

function prikazImenaStrane() {
  var prikazStrane = document.querySelectorAll("#naslovna span");
  prikazStrane.forEach(function (elem) {
    elem.innerText = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf(".")).toLowerCase();
  });
}

function zavrsiLoadScreen() {
  // $(".loader-wrapper").fadeOut("slow");
  // $("#load-screen").animate({"opacity":"0"});
  $("#load-screen").addClass("az-anim-opac");
  $(bodyTag).addClass("az-body-visi");
  setTimeout(function () {
    $("#load-screen").addClass("az-load-del");
  }, 1150);
}

function prikazNavigacije(nizStranica, nizLinkovaStranica) {
  var pom = "";

  for (indeks in nizStranica) {
    pom += "<li class='nav-item me-1'>";
    pom += "<a class='nav-link fs-5 px-3 py-2 az-red' href=".concat(nizLinkovaStranica[indeks], ">").concat(nizStranica[indeks], "</a>");
    pom += "</li>";
  }

  navigacijaLink.innerHTML = pom;
}

function glavniLink(link) {
  var pom = navigacijaLink.querySelectorAll("li > a");
  pom.forEach(function (a) {
    if (a.getAttribute("href") == link) {
      a.classList.remove('az-red');
      a.classList.add('active');
    }
  });
}

function slajderSlike(slajderObj, slajderAltSlike, slajderNizSlike) {
  for (var i = 0; i < slajderAltSlike.length; i++) {
    var divObj = document.createElement("div");
    divObj.classList.add('carousel-item');

    if (!i) {
      divObj.classList.add('az-visible');
    }

    ;
    divObj.innerHTML = "<img src='".concat(slajderNizSlike[i], "' class=\"d-block w-100 mx-auto\" alt=\"").concat(slajderAltSlike[i], "\"/>");
    slajderObj.lastElementChild.appendChild(divObj); // console.log(slajderObj.lastElementChild)
    // console.log(divObj);
  }
}

function strelicaPrikaz() {
  document.addEventListener("scroll", function () {
    var skrolYOsa = window.scrollY;

    if (skrolYOsa > 900) {
      if (!strelicaObj.classList.contains("postaviStrelicu")) {
        strelicaObj.classList.remove("skiniStrelicu");
        strelicaObj.classList.add("postaviStrelicu");
        strelicaObj.classList.add("d-flex");
      }
    } else {
      if (strelicaObj.classList.contains("postaviStrelicu")) {
        strelicaObj.classList.remove("postaviStrelicu");
        strelicaObj.classList.add("skiniStrelicu");
        setTimeout(function () {
          strelicaObj.classList.remove("d-flex");
        }, 300);
      }
    }
  });
  strelicaPocetak.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

function prikazPrednosti(prednostiBlok, prednostiObj) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = prednostiObj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      element = _step.value;
      var pom = "<div class=\"col-lg-3 col-md-6 col-10 offset-sm-1 offset-1 offset-md-0 mb-5\">\n                        <div class=\"card position-relative\">";
      pom += "<img src=".concat(element.slikaSrc, " class=\"card-img-top\" alt=\"").concat(element.slikaAlt, "\"/>");
      pom += "<div class=\"az-icon d-flex justify-content-center align-items-center bg-warning rounded-circle position-absolute\">\n                    <i class=\"fa-solid fa-".concat(element.faIcon, " fs-2 \"></i>\n                </div>");
      pom += "<div class=\"card-body\">\n                    <h5 class=\"card-title fw-bold\">".concat(element.naslov, "</h5>\n                    <p class=\"card-text\">").concat(element.tekst, "</p>\n                </div>\n            </div>\n        </div>");
      prednostiBlok.innerHTML += pom;
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

function procitajVise($niz) {
  $niz.each(function (i, element) {
    return $(element).click(function () {
      $(this).prev().slideToggle(600);

      if ($(this).html() == 'Pročitaj više') {
        $(this).html('Pročitaj manje');
      } else $(this).html('Pročitaj više');
    });
  });
}

function ispisSvihNaslova(obj, objDiv) {
  for (element in obj) {
    if (obj[element].oznaka != '') objDiv[element].innerHTML += "<h2 class=\"fs-6\">".concat(obj[element].oznaka, "</h2>");
    if (obj[element].naslov != '') ;
    objDiv[element].innerHTML += "<h3 class=\"pb-2 fs-1 text-capitalize\">".concat(obj[element].naslov, "</h3>");

    if (obj[element].opis != '') {
      var textElement = document.createElement("p");
      textElement.classList.add("py-2", "az-pad");
      var textElementSadrzaj = document.createTextNode(obj[element].opis);
      textElement.appendChild(textElementSadrzaj);
      objDiv[element].appendChild(textElement);
    }
  }
}

function ispisSaveta(objects, objDiv) {
  objDiv.forEach(function (element, indeks) {
    element.innerHTML += "<div class=\"card-body position-relative\">\n         <div class=\"az-icon d-flex justify-content-center align-items-center align-content-center bg-warning rounded-circle position-absolute\">\n           <p class=\"fw-bold text-center text-uppercase\">".concat(objects[indeks].dan, "<br/>").concat(objects[indeks].mesec, "</p>\n        </div>\n         <h4 class=\"fs-6\">").concat(objects[indeks].kategorija, "</h4>\n         <h5 class=\"card-title fw-bold\">").concat(objects[indeks].naslov, "</h5>\n         <p class=\"card-text\">").concat(objects[indeks].opis, "</p>\n         <a href=\"pages/saveti.html\" class=\"btn btn-primary az-bg-red-2\">Saznaj vi\u0161e</a>  </div>");
    var pom = objDiv[indeks].querySelector(".card-body").previousElementSibling; //  pom.src=prefiksSlike+objects[indeks].link;

    pom.setAttribute("src", prefiksSlike + objects[indeks].link);
    pom.setAttribute("alt", "".concat(objects[indeks].alt));
  });
}

function ispisKomentara(objects, objDiv) {
  objDiv.forEach(function (element, indeks) {
    var cuvarTeksta = "";
    cuvarTeksta += "<div class=\"col-md-3\">\n        <img src=\"".concat(prefiksSlike + objects[indeks].link, "\" class=\"img-fluid rounded-start\" alt=\"").concat(objects[indeks].alt, "\"/></div>");
    cuvarTeksta += "<div class=\"col-md-9 d-flex align-items-center\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">".concat(objects[indeks].ime, "</h5>\n          <h6>").concat(objects[indeks].posao, "</h6>");
    var pom = 'az-opac',
        ocena = '';
    ocena += "<div class=\"row w-50 mx-auto\">";
    ocena += "<div class=\"col-2 offset-1\">\n                <img class=\"w-100 mx-auto\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>";

    for (var i = 2; i < 6; i++) {
      if (i <= objects[indeks].ocena) {
        ocena += "<div class=\"col-2 \">\n                <img class=\"w-100 mx-auto\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>";
      } else {
        ocena += "<div class=\"col-2\">\n                <img class=\"w-100 mx-auto ".concat(pom, "\" src=\"assets/images/Logo.png\" alt=\"Baka logo\"/>\n                </div>");
      }
    }

    ocena += "</div>";
    cuvarTeksta += ocena;
    cuvarTeksta += "<p class=\"card-text py-3\">".concat(objects[indeks].opis, "</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Poslato: ").concat(objects[indeks].datum, "</small></p></div></div>");
    element.innerHTML = cuvarTeksta; // console.log(cuvarTeksta);
  });
}

function prikazFooterLinkova(nizStranica, nizLinkovaStranica) {
  for (var i = 0; i < 3; i++) {
    footerLink.innerHTML += "<ul class=\"row my-3\">\n        <li class=\"col-6\"><a href=\"".concat(nizLinkovaStranica[i], "\">").concat(nizStranica[i], "</a></li>\n        <li class=\"col-6\"><a href=\"").concat(nizLinkovaStranica[i + 3], "\">").concat(nizStranica[i + 3], "</a></li>\n      </ul>");
  }
}

function prikazFooterInformacija() {
  // <li class="my-3"><i class="fas fa-phone"></i> &nbsp;&nbsp;063/710-5150</li>
  for (element in footerInfoFaIcons) {
    footerInfo.innerHTML += "<li class=\"my-3\"><i class=\"fas fa-".concat(footerInfoFaIcons[element], "\"></i>").concat(footerInfoTxt[element], "</li>");
  }
}

function prikazFooterIkonica(footerIconObjects) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = footerIconObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

function prikazForme(inputFormObjects, labelFormObjects) {
  var _loop = function _loop(i) {
    inputFormObjects[i].addEventListener("focus", function () {
      labelFormObjects[i].innerHTML += "  (Primer: ".concat(inputFormObjects[i].getAttribute("placeholder"), ")");
    });
    inputFormObjects[i].addEventListener("blur", function () {
      labelFormObjects[i].innerHTML = labelFormObjects[i].getAttribute('for').substring(5) + "<span class=\"text-danger\"><i class=\"fa-regular fa-asterisk\"></i></span>";
    });
  };

  for (var i = 0; i < inputFormObjects.length; i++) {
    _loop(i);
  }
}

function proveraForme() {
  var bool = true;
  var inputFormObjects = this.parentElement.parentElement.querySelectorAll("input[type='text'],input[type='email']");
  var selectFormObject = document.querySelector("select");
  var radioObj = document.kontaktForm.tipKontakt;
  inputFormObjects.forEach(function (element, indeks) {
    if (!element.value.length) {
      bool = false;
      element.classList.add("az-form-border");
      element.nextElementSibling.nextElementSibling.innerHTML = 'Niste popunili polje';
      element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
    } else {
      if (!proveriElem(element)) bool = false;
    }
  });
  var br = 0;

  if (selectFormObject.selectedIndex) {
    selectFormObject.classList.remove("az-form-border");
    nizCboxa.forEach(function (elem) {
      if (elem.checked) br++;
    });

    if (!br) {
      // console.log(document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling);
      document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.remove("az-invisible");
      bool = false;
    } else {
      document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.add("az-invisible");
    }
  } else {
    bool = false;
    selectFormObject.classList.add("az-form-border");
  }

  ;

  if (!radioObj.value) {
    radioObj[0].parentElement.parentElement.nextElementSibling.classList.remove('az-invisible');
    bool = false;
  } else {
    radioObj[0].parentElement.parentElement.nextElementSibling.classList.add('az-invisible');
  }

  if (bool) {
    this.previousElementSibling.classList.remove("az-red");
    this.previousElementSibling.classList.add("text-success");
    this.previousElementSibling.innerHTML = "Uspešno ste naručili hranu !";
    inputFormObjects.forEach(function (element, indeks) {
      element.value = '';
    });
    selectFormObject.selectedIndex = 0;
  } else {
    this.previousElementSibling.classList.add("az-red");
    this.previousElementSibling.classList.remove("text-success");
    this.previousElementSibling.innerHTML = "Niste dobro popunili formu !";
  }

  this.previousElementSibling.classList.remove("az-invisible");
}

function proveriElem(element) {
  var provera = true;
  var bool = true; //	0XX XXXX XXX

  var regExpTel = /^(06[^7]\/[0-9]{7})|(067\/7[0-9]{6})$/;
  var regExpMejl = /^[\w\_]{3,}\@[a-z]{3,}\.[a-z]{2,3}$/;
  var regExpIme = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,})*$/;
  var regIme = /input(?=(Ime|Prezime))/;

  if (element.id.match(regIme)) {
    provera = regExpIme.test(element.value);
  }

  if (element.id == 'inputEmail') {
    provera = regExpMejl.test(element.value);
  }

  if (element.id == 'inputTelefon') {
    provera = regExpTel.test(element.value);
  }

  if (!provera) {
    bool = false;
    element.classList.add("az-form-border");
    element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
    element.nextElementSibling.nextElementSibling.innerHTML = 'Niste popunili polje u trazenom formatu';
  } else {
    element.classList.remove("az-form-border");
    element.nextElementSibling.nextElementSibling.classList.add('az-invisible');
  }

  return bool;
}

function prikazCheckBoxova(pom) {
  var cuvaj = document.querySelector(".form-floating.col-md-12 > .row");
  cuvaj.innerHTML = '';
  var brElem;

  switch (pom) {
    case 3:
      brElem = 5;
      break;

    default:
      brElem = 6;
  }

  for (var i = 0; i < brElem; i++) {
    var divObj = document.createElement("div");
    divObj.classList.add("col-4", "text-center");
    var inputCbx = document.createElement("input");
    var idCbx = nizProizvoda[i].substring(0, 5).toLowerCase();
    inputCbx.setAttribute("id", idCbx);
    inputCbx.setAttribute("type", "checkbox");
    inputCbx.setAttribute("value", "".concat(i));
    inputCbx.classList.add("form-check-input", "me-2");
    var lblCbx = document.createElement("label");
    lblCbx.setAttribute("for", idCbx);
    lblCbx.classList.add("form-check-label");
    lblCbx.innerText = nizProizvoda[i];
    divObj.appendChild(inputCbx);
    divObj.appendChild(lblCbx);
    cuvaj.appendChild(divObj);

    if (i == 2) {
      cuvaj = cuvaj.nextElementSibling;
      cuvaj.innerHTML = '';
    }

    ;
  }
}

function padajuciMeni() {
  $("#btnMeni").click(function () {
    $(this).next().slideToggle();
  });
}

var brAk = 0;

function slajderDugmici($pom) {
  // console.log($($pom[0]).attr('data-az-slide'));
  $pom.each(function (i, elem) {
    var pom = i;
    $(elem).click(function () {
      var $trenutno = $("#carouselSliderIndicators .carousel-inner .az-visible");
      var $sledeci = $($trenutno.parent().children()[pom]);

      if (!$sledeci.hasClass('az-visible')) {
        $trenutno.hide('slow').removeClass('az-visible');
        $sledeci.fadeIn().addClass("az-visible");
      }

      brAk = pom;
      $($pom).removeClass('az-active');
      $(this).addClass('az-active');
    });
  });
}

function slajderAnimacija() {
  // let slajdObj = document.querySelector("#carouselSliderIndicators");
  var $trenutno = $("#carouselSliderIndicators .carousel-inner .az-visible");
  var $sledeci = $trenutno.next().length ? $trenutno.next() : $trenutno.parent().children(":first");
  $trenutno.hide('slow').removeClass('az-visible');
  $sledeci.fadeIn().addClass("az-visible");
  var $trenutnoDugme = $("#carouselSliderIndicators button").filter("button[data-az-slide = ".concat(brAk, "]"));
  var $sledeceDugme = $trenutnoDugme.next().length ? $trenutnoDugme.next() : $trenutnoDugme.parent().children(":first");
  brAk = brAk < 2 ? ++brAk : 0;
  $trenutnoDugme.removeClass("az-active");
  $sledeceDugme.addClass("az-active");
  setTimeout(slajderAnimacija, 4000);
}