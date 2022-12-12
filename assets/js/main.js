//Zajednicke konstante
var prefiksPage = 'pages/';
var prefiksDok = 'assets/doc/';
var prefiksSlike = 'assets/images/';
var prefiksPomocno = ''; //postaje ../
var prefiksOnline = '/BakinoCudoDoo';
const bodyTag = document.getElementsByTagName("body");
const strelicaObj = document.querySelector("#strelicaPocetak");
const navigacijaLink = document.querySelector("#navigacija");

const nizProizvoda = ["Predjela","Kuvanih jela","Salata","Peciva","Slatkiša","Alkohola"]
var nizCboxa = [];

const footerLink = document.querySelector("footer .row.py-3 > div");
const footerInfo = document.querySelector("footer ul#contact");
const footerInfoFaIcons = [`phone`,`envelope`,`map-marker-alt`];
const footerInfoTxt = [`&nbsp;&nbsp;063/710-5150`,`&nbsp;&nbsp;aleksandar&#46;zivic&#46;7&#46;21&#64;ict&#46;edu&#46;rs`,`&nbsp;&nbsp;Zdravka Čelara 16, Belgrade`];
const footerIcons = document.querySelector("footer ul.d-flex");


let url = window.location.pathname;
url = (url=='/BakinoCudoDoo/')?'/BakinoCudoDoo/index.html':url;
// console.log(url);
window.onload = function(){

//Konstante za navigacioni meni
const nizStranica = ["Početna","Usluge","Meni","Saveti","Kontakt","O autoru"];
const nizLinkovaStranica = [`${prefiksOnline}/index.html`,`${prefiksOnline+prefiksPage}usluge.html`,`${prefiksOnline+prefiksPage}meni.html`,`${prefiksOnline+prefiksPage}saveti.html`,`${prefiksOnline+prefiksPage}kontakt.html`,`${prefiksOnline+prefiksPage}autor.html`];

    
    if(url=='/BakinoCudoDoo/index.html'){
        // console.log("RADI");
        
//Konstante za slajeder
const slajderObj = document.querySelector("#carouselSliderIndicators");
const slajderNizSlike = [`${prefiksSlike}slanaJela.jpg`,`${prefiksSlike}cokolodnaTorta.jpg`,`${prefiksSlike}rakijaViseFlasa.jpg`];
const slajderAltSlike = ['slano posluzenje','čokolodna torta','flaše rakije raznih ukusa'];

//Konstante za prednostiBlok
const prednostiBlok = document.querySelector("#blokPrednosti");
var prednostiObj = []
prednostiObj.push({slikaSrc:`${prefiksSlike}svezeNamirnice.jpg`,slikaAlt:'Sveze namirnice',naslov:'Sveže namirnice',tekst:'Namirnice koje koristimo su isključivo od naših sigurnih partnera.',faIcon:'carrot'});
prednostiObj.push({slikaSrc:`${prefiksSlike}brzaDostava.jpg`,slikaAlt:'Brza Dostava',naslov:'Brza dostava',tekst:'Naši dostavljači su brzi i vešti da dostave hranu gde god je potrebno.',faIcon:'clock'});
prednostiObj.push({slikaSrc:`${prefiksSlike}raznovrsnaHrana.jpg`,slikaAlt:'Raznovrsna hrana',naslov:'Raznovrsna jela',tekst:'Imamo raznovrsan jelovnik, kako bi svako pronašao obrok za sebe.',faIcon:'bowl-food'});
prednostiObj.push({slikaSrc:`${prefiksSlike}velikoIskustvo.jpg`,slikaAlt:'Veliko iskustvo',naslov:'Veliko iskustvo',tekst:'Naša ekipa radi kompaktno i gotovo bez greške dugi niz godina.',faIcon:'star'});



//Komentari
const naslovKomentara = document.querySelectorAll("#Komentari div.col-12.text-center");
var komentariNaslovObj = [{naslov:"Komentari posetilaca",oznaka:``,opis:"Stalno dobijamo komentare i ovde možete videti šta ljudi koji su probali naše specijalitete misle o njima."}];
        //Slajder
            const $nizSlajderDugmica = $('button[data-az-slide]');
            slajderDugmici($nizSlajderDugmica);
        // Usluge
            const $nizDugmica=$("#Usluge .card-body button");
            const nizNaslova=document.querySelectorAll("#Usluge .row.mt-3 > div.col-12.text-center");
            let uslugeNasloviObj = [];
            uslugeNasloviObj.push({naslov:"Naše Usluge",oznaka:`Ketering "Bakino čudo"`,opis:""});
            uslugeNasloviObj.push({naslov:"Naruči specijalitete",oznaka:`Ketering "Bakino čudo"`,opis:""})
            uslugeNasloviObj.push({naslov:"Bakini Saveti",oznaka:`Ketering "Bakino čudo"`,opis:"Baka Zorka svoje savete za održavanje kuhinje i ideje za razna jela voli da deli pa tako imate šta da naučite ako želite sami da napravite neko jelo."});
        //Saveti
            let savetiObj = [];
            savetiObj.push({naslov:"Kako očistiti mašinu za sudove?",kategorija:"Higijena kuhinje",dan:11,mesec:"apr",opis:"Zvuči jednostavno, ali ljudi ne znaju kako da se reše neprijatnog mirisa nakon pranja sudova.",link:"savetiMasina.jpg",alt:"mašina za sudove"});

            savetiObj.push({naslov:"Kako da umesite lepo testo?",kategorija:"Kuvanje",dan:17,mesec:"feb",opis:`Postoje razna testa koje možete umesiti, ali ovde ćemo proći ono što me najviše ljudi pitalo. `,link:"savetiTesto.jpg",alt:"mešanje testa"});

            savetiObj.push({naslov:"5 saveta profesionalnog kuvara",kategorija:"Praktični saveti",dan:9,mesec:"jan",opis:`Profesionalni kuvari vole da podele razne detalje sa svoga posla, ali neke ključne prećute.`,link:"savetiKuvar.jpg",alt:"profesionalni kuvar"});

            let nizSaveta = document.querySelectorAll("#Usluge div.row.mt-3 div.card");
        //Komentari
            let nizKomentara = document.querySelectorAll("#Komentari .row.g-0");
            let komentariObj = [];
            komentariObj.push({ime:"Milorad Petrović",posao:"It stručnjak",datum:'20.2.2022.',opis:`Pravio sam žurku i naručio sam hranu par sati pre žurke. Nisam očekivao, ali ona je stigla na vreme vruća i ukusna. Svi su bili zadovoljni i pitali su me odakle sam naručio tako kvalitetnu hranu.`,link:"komentariIT.jpg",alt:"čovek It stručnjak",ocena:5});

            komentariObj.push({ime:"Marija Spasić",posao:"Menadžer",datum:'22.1.2022.',opis:`Čula sam od drugarice za njih i naručila sam hranu za moju svadbu. Kvalitet hrane je bio odličan i svi su bili oduševljeni i sve je bilo gotovo u roku kako smo se dogovorili. Jedino su malo skuplji, ali vredi.`,link:"komentariMenadzer.jpg",alt:"žena menadžer",ocena:4});

            komentariObj.push({ime:"Srđan Janketić",posao:"Vlasnik vrtića",datum:'13.3.2022.',opis:`Dugo godina je moja ekipa tragala za dobrim keteringom koji nudi raznovrsnu hranu za sve mališane. Jedino je <span class="fw-bold">Keternig "Bakino Čudo"</span> uspeo da nas zadovolji kvalitetom i brzinom njihovih vozača.`,link:"komentariVlasnik.jpg",alt:"čovek vlasnik vrtića",ocena:5});
        //Forma rezervacije
            const formaObj = document.querySelector("#kontaktForm");
            const formaSelect = document.querySelector("select");
            var divCbx = document.querySelectorAll(".form-floating.col-md-12 > .row");
            var inputFormObjects = formaObj.querySelectorAll(`input[type='text'],input[type='email']`);
            var labelFormObjects = formaObj.querySelectorAll("label");
            var formDugme = formaObj.querySelector("#dugmeProvera");
            formaSelect.addEventListener('change',function(){
                let pom = Number(formaSelect.value);
                // console.log(pom);
                if(pom){
                    formaSelect.previousElementSibling.classList.remove("text-danger"); 
                    formaSelect.previousElementSibling.classList.add("text-success");
                    formaSelect.classList.remove("az-form-border");
                    prikazCheckBoxova(pom);
                    divCbx[0].previousElementSibling.classList.remove("az-invisible");
                    divCbx[0].classList.remove('az-invisible');
                     divCbx[1].classList.remove('az-invisible');
                     
                    divCbx.forEach((elem) =>{
                        let p = elem.querySelectorAll("input[type='checkbox']");
                        p.forEach(elem => nizCboxa.push(elem));
                     });
                 }else{
                     formaSelect.previousElementSibling.classList.add("text-danger");
                     formaSelect.previousElementSibling.classList.add("text-success");
                     formaSelect.classList.add("az-form-border");
                     divCbx[0].previousElementSibling.classList.add("az-invisible");
                     divCbx[0].classList.add('az-invisible');
                     divCbx[1].classList.add('az-invisible');
                     divCbx[1].nextElementSibling.classList.add("az-invisible");
                 }
            })
            
            inputFormObjects.forEach(function(element){
                element.addEventListener('keyup',function(){
                if(!element.value.length){
                    bool = false;
                    element.classList.add("az-form-border");
                    element.nextElementSibling.nextElementSibling.innerHTML = 'Niste popunili polje';
                    element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
                }else{
                    element.classList.remove("az-form-border");
                    element.nextElementSibling.nextElementSibling.classList.add('az-invisible');
                    proveriElem(element);
                }
                
            })});
            formDugme.addEventListener("click",proveraForme);

        slajderSlike(slajderObj,slajderAltSlike,slajderNizSlike);
        prikazPrednosti(prednostiBlok,prednostiObj);
        procitajVise($nizDugmica);
        ispisSvihNaslova(uslugeNasloviObj,nizNaslova);
        ispisSvihNaslova(komentariNaslovObj,naslovKomentara);
        ispisSaveta(savetiObj,nizSaveta);
        ispisKomentara(komentariObj,nizKomentara);
        prikazForme(inputFormObjects,labelFormObjects);
    }else{

    }
    if(url=='/pages/usluge.html'){
        prefiksPomocno = `../`;
        prefiksPage= `..`+prefiksPage;
        console.log(prefiksPage);
    }

    if(url=='/pages/saveti.html'){
        
    }
    
    if(url=='/pages/kontakt.html'){
        
    }
    
    if(url=='/pages/autor.html'){
        
    }
    //Konstante za footer
    var footerIconObjects = [];
    footerIconObjects.push({link:"https://twitter.com/",icon:`fab fa-twitter`})
    footerIconObjects.push({link:"https://www.instagram.com/",icon:`fab fa-instagram`})
    footerIconObjects.push({link:"https://www.facebook.com/",icon:`fab fa-facebook-f`})
    footerIconObjects.push({link:`${prefiksDok}Dokumentacija (BakinoCudo).docx`,icon:`fa-solid fa-file`})
    footerIconObjects.push({link:`${prefiksPomocno}sitemap.xml`,icon:`fa-solid fa-sitemap`})
    footerIconObjects.push({link:`${prefiksPomocno}rss.xml`,icon:`fas fa-rss`})

    padajuciMeni();
    strelicaPrikaz();
    prikazNavigacije(nizStranica,nizLinkovaStranica);
    glavniLink(url);
    prikazFooterLinkova(nizStranica,nizLinkovaStranica);
    prikazFooterInformacija();
    prikazFooterIkonica(footerIconObjects);

    setTimeout(zavrsiLoadScreen,1300);
    setTimeout(()=>$("#load-screen").remove(),2300);
    setTimeout(slajderAnimacija,4500);
};

function zavrsiLoadScreen(){
    // $(".loader-wrapper").fadeOut("slow");
    // $("#load-screen").animate({"opacity":"0"});
    $("#load-screen").addClass("az-anim-opac");
    $(bodyTag).addClass("az-body-visi");
    setTimeout(function(){$("#load-screen").addClass("az-load-del")},1150);

}
function prikazNavigacije(nizStranica,nizLinkovaStranica){
    let pom = ``;
    for(indeks in nizStranica){
        pom+=`<li class='nav-item me-1'>`;
        pom+=`<a class='nav-link fs-5 px-3 py-2 az-red' href=${nizLinkovaStranica[indeks]}>${nizStranica[indeks]}</a>`;
        pom+="</li>";
    }
    navigacijaLink.innerHTML = pom;
}
function glavniLink(link){
    let pom = navigacijaLink.querySelectorAll(`li > a`);

    pom.forEach(function(a){

        if(a.getAttribute("href")==link){
            a.classList.remove('az-red');
            a.classList.add('active');
        }
    })
}
function slajderSlike(slajderObj,slajderAltSlike,slajderNizSlike){
    for(let i=0;i<slajderAltSlike.length;i++){
        var divObj = document.createElement("div");
        divObj.classList.add('carousel-item');
        if (!i) {divObj.classList.add('az-visible')};
        divObj.innerHTML =`<img src='${slajderNizSlike[i]}' class="d-block w-100 mx-auto" alt="${slajderAltSlike[i]}"/>`;
        
        slajderObj.lastElementChild.appendChild(divObj);
        // console.log(slajderObj.lastElementChild)
        // console.log(divObj);
    } 
}
function strelicaPrikaz(){
    document.addEventListener("scroll",function(){
        var skrolYOsa= window.scrollY;
        
        if (skrolYOsa>900){
            if(!strelicaObj.classList.contains("postaviStrelicu")){
                strelicaObj.classList.remove("skiniStrelicu");
                strelicaObj.classList.add("postaviStrelicu");   
                strelicaObj.classList.add("d-flex");
            }
        }
        else{
            if(strelicaObj.classList.contains("postaviStrelicu")){
                strelicaObj.classList.remove("postaviStrelicu");
                strelicaObj.classList.add("skiniStrelicu");
                setTimeout(() => {
                    strelicaObj.classList.remove("d-flex");
                }, 300);
            }
        }
    });

    strelicaPocetak.addEventListener("click",function(){
        window.scrollTo(0,0);
    })
}
function prikazPrednosti(prednostiBlok,prednostiObj){
    for(element of prednostiObj){
        let pom = `<div class="col-lg-3 col-md-6 col-10 offset-sm-1 offset-1 offset-md-0 mb-5">
                        <div class="card position-relative">`;
        pom += `<img src=${element.slikaSrc} class="card-img-top" alt="${element.slikaAlt}"/>`
        pom += `<div class="az-icon d-flex justify-content-center align-items-center bg-warning rounded-circle position-absolute">
                    <i class="fa-solid fa-${element.faIcon} fs-2 "></i>
                </div>`;
        pom +=`<div class="card-body">
                    <h5 class="card-title fw-bold">${element.naslov}</h5>
                    <p class="card-text">${element.tekst}</p>
                </div>
            </div>
        </div>`
        prednostiBlok.innerHTML+=pom;
    } 
}
function procitajVise($niz){
    $niz.each((i,element)=>
        $(element).click(function(){
            $(this).prev().slideToggle(600);
            if($(this).html()=='Pročitaj više')
            {
                $(this).html('Pročitaj manje');
            }
              
            else $(this).html('Pročitaj više')
        })
    );
}

function ispisSvihNaslova(obj,objDiv){
    for(element in obj){
        if(obj[element].oznaka !='')
            objDiv[element].innerHTML +=`<h2 class="fs-6">${obj[element].oznaka}</h2>`;
        if(obj[element].naslov !='');
            objDiv[element].innerHTML+=`<h3 class="pb-2 fs-1 text-capitalize">${obj[element].naslov}</h3>`;
        if(obj[element].opis !=''){
            var textElement = document.createElement("p");
            textElement.classList.add("py-2","az-pad");
            var textElementSadrzaj = document.createTextNode(obj[element].opis);
            textElement.appendChild(textElementSadrzaj);
            objDiv[element].appendChild(textElement);
        }   
    }
}

function ispisSaveta(objects,objDiv){

    objDiv.forEach(function(element,indeks){
    element.innerHTML+=`<div class="card-body position-relative">
         <div class="az-icon d-flex justify-content-center align-items-center align-content-center bg-warning rounded-circle position-absolute">
           <p class="fw-bold text-center text-uppercase">${objects[indeks].dan}<br/>${objects[indeks].mesec}</p>
        </div>
         <h4 class="fs-6">${objects[indeks].kategorija}</h4>
         <h5 class="card-title fw-bold">${objects[indeks].naslov}</h5>
         <p class="card-text">${objects[indeks].opis}</p>
         <a href="pages/saveti.html" class="btn btn-primary az-bg-red-2">Saznaj više</a>  </div>`;
         let pom =  objDiv[indeks].querySelector(".card-body").previousElementSibling;
        //  pom.src=prefiksSlike+objects[indeks].link;
        pom.setAttribute("src",prefiksSlike+objects[indeks].link)
        pom.setAttribute("alt",`${objects[indeks].alt}`)
    })
}

function ispisKomentara(objects,objDiv){
    
    objDiv.forEach((element,indeks) =>{
        var cuvarTeksta=``;
        cuvarTeksta+=`<div class="col-md-3">
        <img src="${prefiksSlike+objects[indeks].link}" class="img-fluid rounded-start" alt="${objects[indeks].alt}"/></div>`;
        cuvarTeksta+=`<div class="col-md-9 d-flex align-items-center">
        <div class="card-body">
          <h5 class="card-title">${objects[indeks].ime}</h5>
          <h6>${objects[indeks].posao}</h6>`;
          let pom='az-opac',ocena='';
        ocena+=`<div class="row w-50 mx-auto">`;
        ocena +=`<div class="col-2 offset-1">
                <img class="w-100 mx-auto" src="assets/images/Logo.png" alt="Baka logo"/>
                </div>`;
        for(let i=2;i<6;i++){
            if(i<=objects[indeks].ocena){
                ocena +=`<div class="col-2 ">
                <img class="w-100 mx-auto" src="assets/images/Logo.png" alt="Baka logo"/>
                </div>`;
            }else{
                ocena +=`<div class="col-2">
                <img class="w-100 mx-auto ${pom}" src="assets/images/Logo.png" alt="Baka logo"/>
                </div>`;
            }
        }
        ocena+=`</div>`;
        cuvarTeksta+=ocena;
        cuvarTeksta+=`<p class="card-text py-3">${objects[indeks].opis}</p>
        <p class="card-text"><small class="text-muted">Poslato: ${objects[indeks].datum}</small></p></div></div>`;
        element.innerHTML = cuvarTeksta;
        // console.log(cuvarTeksta);
    });
}

function prikazFooterLinkova(nizStranica,nizLinkovaStranica){
    for(let i=0;i<3;i++){
        footerLink.innerHTML+=`<ul class="row my-3">
        <li class="col-6"><a href="${nizLinkovaStranica[i]}">${nizStranica[i]}</a></li>
        <li class="col-6"><a href="${nizLinkovaStranica[i+3]}">${nizStranica[i+3]}</a></li>
      </ul>`;
    }
}
function prikazFooterInformacija(){
    // <li class="my-3"><i class="fas fa-phone"></i> &nbsp;&nbsp;063/710-5150</li>
    for(element in footerInfoFaIcons){
        footerInfo.innerHTML+=`<li class="my-3"><i class="fas fa-${footerInfoFaIcons[element]}"></i>${footerInfoTxt[element]}</li>`;
    }
}
function prikazFooterIkonica(footerIconObjects){
    for(element of footerIconObjects){
        footerIcons.innerHTML+=`<li><a class="az-sm d-flex justify-content-center align-items-center rounded-circle" href="${element.link}"><i class="${element.icon}"></i></a> </li>`;
    }
}
function prikazForme(inputFormObjects,labelFormObjects){
    for(let i =0;i<inputFormObjects.length;i++){
        inputFormObjects[i].addEventListener("focus",function(){
            labelFormObjects[i].innerHTML += `  (Primer: ${inputFormObjects[i].getAttribute("placeholder")})`;
        });
        inputFormObjects[i].addEventListener("blur",function(){
            labelFormObjects[i].innerHTML = labelFormObjects[i].getAttribute('for').substring(5,) + `<span class="text-danger"><i class="fa-regular fa-asterisk"></i></span>`;
        });
    }
    
}
function proveraForme(){
    var bool = true;
    let inputFormObjects = this.parentElement.parentElement.querySelectorAll("input[type='text'],input[type='email']");
    let selectFormObject = document.querySelector("select");
    let radioObj = document.kontaktForm.tipKontakt;
    inputFormObjects.forEach((element,indeks) =>{
        if(!element.value.length){
            bool = false;
            element.classList.add("az-form-border");
            element.nextElementSibling.nextElementSibling.innerHTML = 'Niste popunili polje';
            element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
        }else{
            if(!proveriElem(element))bool=false;
        }
    });

    let br = 0;
    if(selectFormObject.selectedIndex){
        selectFormObject.classList.remove("az-form-border");
        nizCboxa.forEach(function(elem){
            if(elem.checked) br++;
        });
        if(!br){
            // console.log(document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling);
            document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.remove("az-invisible");
            bool = false;
        }else {
            document.querySelector(".form-floating.col-md-12 > .row").nextElementSibling.nextElementSibling.classList.add("az-invisible");
        }
    }else {bool = false;selectFormObject.classList.add("az-form-border");};

    if(!radioObj.value){
        radioObj[0].parentElement.parentElement.nextElementSibling.classList.remove('az-invisible');
        bool = false;
    }else {
        radioObj[0].parentElement.parentElement.nextElementSibling.classList.add('az-invisible');
        
    }
    if(bool){
        this.previousElementSibling.classList.remove("az-red")
        this.previousElementSibling.classList.add("text-success");
        this.previousElementSibling.innerHTML = "Uspešno ste naručili hranu !";

    }else{
        this.previousElementSibling.classList.add("az-red")
        this.previousElementSibling.classList.remove("text-success");
        this.previousElementSibling.innerHTML = "Niste dobro popunili formu !";
    }
    this.previousElementSibling.classList.remove("az-invisible");
}
function proveriElem(element){
    let provera = true;
    let bool = true;
    //	0XX XXXX XXX
    let regExpTel = /^(06[^7]\/[0-9]{7})|(067\/7[0-9]{6})$/;
    let regExpMejl = /^[\w\_]{3,}\@[a-z]{3,}\.[a-z]{2,3}$/;
    let regExpIme = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,})*$/;
            var regIme = /input(?=(Ime|Prezime))/;
            if(element.id.match(regIme)){
                provera = regExpIme.test(element.value);
            }
            if(element.id =='inputEmail'){
                provera = regExpMejl.test(element.value);
            }
            if(element.id =='inputTelefon'){
                provera = regExpTel.test(element.value);
            }
            if(!provera){
                bool=false;
                element.classList.add("az-form-border");
                element.nextElementSibling.nextElementSibling.classList.remove('az-invisible');
                element.nextElementSibling.nextElementSibling.innerHTML ='Niste popunili polje u trazenom formatu';
            }else{
                element.classList.remove("az-form-border");
                element.nextElementSibling.nextElementSibling.classList.add('az-invisible');
            }
    return bool;
}

function prikazCheckBoxova(pom){
    let cuvaj = document.querySelector(".form-floating.col-md-12 > .row");
    cuvaj.innerHTML = '';
    let brElem;
    switch(pom){
        case 3:  brElem=5; break;
        default: brElem=6;
    }
    for(let i =0;i<brElem;i++){
        let divObj = document.createElement("div");
        divObj.classList.add("col-4","text-center"); 
        let inputCbx = document.createElement("input");
        let idCbx = nizProizvoda[i].substring(0,5).toLowerCase();
        inputCbx.setAttribute("id",idCbx);
        inputCbx.setAttribute("type","checkbox");
        inputCbx.setAttribute("value",`${i}`);
        inputCbx.classList.add("form-check-input","me-2");
        let lblCbx = document.createElement("label");
        lblCbx.setAttribute("for",idCbx);
        lblCbx.classList.add("form-check-label");
        lblCbx.innerText = nizProizvoda[i];

        divObj.appendChild(inputCbx);
        divObj.appendChild(lblCbx);
        cuvaj.appendChild(divObj);
        if(i==2) {cuvaj = cuvaj.nextElementSibling; cuvaj.innerHTML=''};
    }
}

function padajuciMeni(){
    $("#btnMeni").click(function(){
        $(this).next().slideToggle();
    })
}
let brAk = 0
function slajderDugmici($pom){
    // console.log($($pom[0]).attr('data-az-slide'));
    $pom.each(function(i,elem){
        let pom = i;
        $(elem).click(function(){
            var $trenutno = $(`#carouselSliderIndicators .carousel-inner .az-visible`);
            var $sledeci = $($trenutno.parent().children()[pom]);
            if(!$sledeci.hasClass('az-visible')){
            $trenutno.hide('slow').removeClass('az-visible');
            $sledeci.fadeIn().addClass("az-visible");}
            brAk = pom;
            $($pom).removeClass('az-active');
            $(this).addClass('az-active');
        });
    });
}

function slajderAnimacija(){
    // let slajdObj = document.querySelector("#carouselSliderIndicators");
    var $trenutno = $(`#carouselSliderIndicators .carousel-inner .az-visible`);
    var $sledeci = $trenutno.next().length ? ($trenutno.next()) : ($trenutno.parent().children(":first"));
    $trenutno.hide('slow').removeClass('az-visible');
    $sledeci.fadeIn().addClass("az-visible");
    let $trenutnoDugme = $("#carouselSliderIndicators button").filter(`button[data-az-slide = ${brAk}]`);
    let $sledeceDugme = $trenutnoDugme.next().length ? ($trenutnoDugme.next()): ($trenutnoDugme.parent().children(":first"));
    brAk = brAk<2 ? ++brAk:0;
    $trenutnoDugme.removeClass("az-active")
    $sledeceDugme.addClass("az-active");
    setTimeout(slajderAnimacija,4000);
}