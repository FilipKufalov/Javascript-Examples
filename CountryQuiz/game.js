let countryImages = ["af-flag.gif", "al-flag.gif", "ag-flag.gif",
    "an-flag.gif", "ao-flag.gif", "ac-flag.gif", "ar-flag.gif",
    "am-flag.gif", "as-flag.gif", "au-flag.gif", "aj-flag.gif",
    "bf-flag.gif", "ba-flag.gif", "bg-flag.gif", "bb-flag.gif",
    "bo-flag.gif", "be-flag.gif", "bh-flag.gif", "bn-flag.gif",
    "bt-flag.gif", "bl-flag.gif", "bk-flag.gif", "bc-flag.gif",
    "br-flag.gif", "bx-flag.gif", "bu-flag.gif", "uv-flag.gif",
    "by-flag.gif", "iv-flag.gif", "cv-flag.gif", "cb-flag.gif",
    "cm-flag.gif", "ca-flag.gif", "ct-flag.gif", "cd-flag.gif",
    "ci-flag.gif", "ch-flag.gif", "co-flag.gif", "cn-flag.gif",
    "cg-flag.gif", "cs-flag.gif", "hr-flag.gif", "cu-flag.gif",
    "cy-flag.gif", "ez-flag.gif", "da-flag.gif", "dj-flag.gif",
    "do-flag.gif", "dr-flag.gif", "kn-flag.gif", "congo-flag.gif",
    "ec-flag.gif", "eg-flag.gif", "es-flag.gif", "ek-flag.gif",
    "er-flag.gif", "en-flag.gif", "wz-flag.gif", "et-flag.gif",
    "fj-flag.gif", "fi-flag.gif", "fr-flag.gif", "gb-flag.gif",
    "ga-flag.gif", "gg-flag.gif", "gm-flag.gif", "gh-flag.gif",
    "gr-flag.gif", "gj-flag.gif", "gt-flag.gif", "gv-flag.gif",
    "pu-flag.gif", "gy-flag.gif", "ha-flag.gif", "vt-flag.gif",
    "ho-flag.gif", "hu-flag.gif", "ic-flag.gif", "in-flag.gif",
    "id-flag.gif", "ir-flag.gif", "iz-flag.gif", "ei-flag.gif",
    "is-flag.gif", "it-flag.gif", "jm-flag.gif", "ja-flag.gif",
    "jo-flag.gif", "kz-flag.gif", "ke-flag.gif", "kr-flag.gif",
    "ku-flag.gif", "kg-flag.gif", "la-flag.gif", "lg-flag.gif",
    "le-flag.gif", "lt-flag.gif", "li-flag.gif", "ly-flag.gif",
    "ls-flag.gif", "lh-flag.gif", "lu-flag.gif", "ma-flag.gif",
    "mi-flag.gif", "my-flag.gif", "mv-flag.gif", "ml-flag.gif",
    "mt-flag.gif", "rm-flag.gif", "mr-flag.gif", "mp-flag.gif",
    "mx-flag.gif", "fm-flag.gif", "md-flag.gif", "mn-flag.gif",
    "mg-flag.gif", "mj-flag.gif", "mo-flag.gif", "mz-flag.gif",
    "bm-flag.gif", "wa-flag.gif", "nr-flag.gif", "np-flag.gif",
    "nl-flag.gif", "nz-flag.gif", "nu-flag.gif", "ng-flag.gif",
    "ni-flag.gif", "mk-flag.gif", "no-flag.gif", "mu-flag.gif",
    "pk-flag.gif", "ps-flag.gif", "pm-flag.gif", "pp-flag.gif",
    "pa-flag.gif", "pe-flag.gif", "rp-flag.gif", "pl-flag.gif",
    "po-flag.gif", "qa-flag.gif", "ro-flag.gif", "rs-flag.gif",
    "rw-flag.gif", "sc-flag.gif", "st-flag.gif", "ws-flag.gif",
    "sm-flag.gif", "tp-flag.gif", "sa-flag.gif", "sg-flag.gif",
    "ri-flag.gif", "se-flag.gif", "sl-flag.gif", "sn-flag.gif",
    "lo-flag.gif", "si-flag.gif", "bp-flag.gif", "so-flag.gif",
    "sf-flag.gif", "ks-flag.gif", "od-flag.gif", "sp-flag.gif",
    "ce-flag.gif", "vc-flag.gif", "palestine-flag.gif", "su-flag.gif",
    "ns-flag.gif", "sw-flag.gif", "sz-flag.gif", "sy-flag.gif",
    "ti-flag.gif", "tz-flag.gif", "th-flag.gif", "tt-flag.gif",
    "to-flag.gif", "tn-flag.gif", "td-flag.gif", "ts-flag.gif",
    "tu-flag.gif", "tx-flag.gif", "tv-flag.gif", "ae-flag.gif",
    "uk-flag.gif", "us-flag.gif", "ug-flag.gif", "up-flag.gif",
    "uy-flag.gif", "uz-flag.gif", "nh-flag.gif", "ve-flag.gif",
    "vm-flag.gif", "ym-flag.gif", "za-flag.gif", "zi-flag.gif"];

let countryNames = ["afghanistan", "albania", "algeria", "andorra",
    "angola", "antigua", "argentina", "armenia", "australia", "austria",
    "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus",
    "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia", "botswana",
    "brazil", "brunei ", "bulgaria", "burkina", "burundi", "cote", "cabo",
    "cambodia", "cameroon", "canada", "car", "chad", "chile", "china",
    "colombia", "comoros", "congo", "costa rica", "croatia", "cuba",
    "cyprus", "czech", "denmark", "djibouti", "dominica", "dominican",
    "north korea", "drc", "ecuador", "egypt", "el salvador",
    "equatorial guinea", "eritrea", "estonia", "eswatini", "ethiopia", "fiji",
    "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana",
    "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana",
    "haiti", "holy see", "honduras", "hungary", "iceland", "india",
    "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica",
    "japan", "jordan", "kazakhstan", "kenya", "kiribati", "kuwait",
    "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia",
    "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar",
    "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands",
    "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco",
    "mongolia", "montenegro", "morocco", "mozambique", "myanmar", "namibia",
    "nauru", "nepal", "netherlands", "new zealand", "nicaragua", "niger",
    "nigeria", "macedonia", "norway", "oman", "pakistan", "palau", "panama",
    "papua new guinea", "paraguay", "peru", "philippines", "poland",
    "portugal", "qatar", "romania", "russia", "rwanda",
    "saint kitts and nevis", "saint lucia", "samoa", "san marino", "sao tome and principe",
    "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone",
    "singapore", "slovakia", "slovenia", "solomon islands", "somalia",
    "south africa", "south korea", "south sudan", "spain", "sri lanka",
    "st. vincent grenadines", "state of palestine", "sudan", "suriname",
    "sweden", "switzerland", "syria", "tajikistan", "tanzania", "thailand",
    "timor-leste", "togo", "tonga", "trinidad", "tunisia", "turkey",
    "turkmenistan", "tuvalu", "united arab emirates", "united kingdom",
    "united states", "uganda", "ukraine", "uruguay", "uzbekistan",
    "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];

let startpoints = 0;
let RandomNumber;
let answer = document.getElementById('answer');
let flag = document.getElementById("country");

function startGame() {
    RandomNumber = Math.floor(Math.random() * 196);
    flag.src = `https://www.worldometers.info/img/flags/${countryImages[RandomNumber]}`;
}

function skipFlag() {
    RandomNumber = Math.floor(Math.random() * 196);
    startpoints -= 1;
    points.innerText = startpoints;
    answer.innerHTML = "";
    flag.src = `https://www.worldometers.info/img/flags/${countryImages[RandomNumber]}`;
}

function showAnswer() {
    answer.innerHTML = countryNames[RandomNumber].toUpperCase();
    startpoints -= 5;
    points.innerText = startpoints;
}

function showLegend() {
    document.getElementById('legenddiv').style.visibility = "hidden";
    console.log("test");
}

document.getElementById("country").onclick = function () {
    let country = prompt("Which country is it?");
    let points = document.getElementById('points');
    if (country.toLowerCase() == countryNames[RandomNumber]) {
        alert("Correct guess");
        startpoints += 5;
        skipFlag();
    } else {
        alert("Try again");
        startpoints -= 3;
    }
    console.log(RandomNumber);
    points.innerText = startpoints;
}