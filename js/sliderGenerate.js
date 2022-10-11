const personagesList = [
    {
        id: 0,
        name: 'Jean',
        rank: 5,
        weapons: 'Sword',
        element: "Anemo",
        region: "Mondstadt",
        img: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/b51565c6f1298e534e90b6e63332e9c1_4240077663550682265.png',
        hp: 1143,
        att: 18,
        deff: 59,
        speedClassAtt: 0,
        elementalSkill: 83.4,
        speedElementalSkill: 10,
        elementalBurst: 53,
        speedElementalBurst: 12,
    },
    {
        id: 1,
        name: 'Diluc',
        rank: 5,
        weapons: 'Two-handed',
        element: "Piro",
        region: "Mondstadt",
        img: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f5ae62eff2cf426e98626c882dd0cf0d_3240767163310397909.png',
        hp: 1010,
        att: 26,
        deff: 61,
        speedClassAtt: 0,
        elementalSkill: 83.4,
        speedElementalSkill: 10,
        elementalBurst: 53,
        speedElementalBurst: 12,
    },
    {
        id: 2,
        name: 'Eula',
        rank: 5,
        weapons: 'Two-handed',
        element: "Cryo",
        region: "Mondstadt",
        img: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/4c4b8babc68ffedce9bd5766b60e1ae5_8042598886702510210.png',
        hp: 1029,
        att: 26,
        deff: 58,
        speedClassAtt: 0,
        elementalSkill: 38.1,
        speedElementalSkill: 4,
        elementalBurst: 63.86,
        speedElementalBurst: 20,
    }
];
function writeInformation(slide, numberPerson) {
    let imgPerson = document.createElement('div');
        imgPerson.classList.add('slider__page__image-hero');
        slide.appendChild(imgPerson);
    let herosImg = document.createElement('img');
        imgPerson.appendChild(herosImg);
        herosImg.src =  personagesList[numberPerson].img;
        herosImg.alt =  personagesList[numberPerson].name;
    let infOfPerson = document.createElement('div');
            infOfPerson.classList.add('slider__page__info');
            slide.appendChild(infOfPerson);
        let namePersonRank = document.createElement('div');
            namePersonRank.classList.add('slider__page__info__name-rank');
            infOfPerson.appendChild(namePersonRank);
        let namePerson = document.createElement('h2');
            namePersonRank.appendChild(namePerson);
            namePerson.innerText =  personagesList[numberPerson].name;
        let starsWrapper = document.createElement('h5');
            namePersonRank.appendChild(starsWrapper);
            for (let j = 0; j <  personagesList[numberPerson].rank; j++) {
                let star = document.createElement('span');
                starsWrapper.appendChild(star);
                star.innerText = '★'
            }
        let personElement = document.createElement('div');
            personElement.classList.add('slider__page__info__el-wp-rg');
            infOfPerson.appendChild(personElement);
        let elementImg = document.createElement('img');
            personElement.appendChild(elementImg);
            if ( personagesList[numberPerson].element === "Anemo") {
                elementImg.src = "../img/elements/Element_Anemo.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Geo") {
                elementImg.src = "../img/elements/Element_Geo.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Electro") {
                elementImg.src = "../img/elements/Element_Electro.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Dendro") {
                elementImg.src = "../img/elements/Element_Dendro.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Piro") {
                elementImg.src = "../img/elements/Element_Pyro.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Hydro") {
                elementImg.src = "../img/elements/Element_Hydro.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }
            if ( personagesList[numberPerson].element === "Cryo") {
                elementImg.src = "../img/elements/Element_Cryo.png";
                elementImg.alt =  personagesList[numberPerson].element;
            }

        let elementName = document.createElement('h4');
            personElement.appendChild(elementName);
            elementName.innerText =  personagesList[numberPerson].element;

        let personWeapons = document.createElement('div');
            personWeapons.classList.add('slider__page__info__el-wp-rg');
            infOfPerson.appendChild(personWeapons);
        let weaponsImg = document.createElement('img');
            personWeapons.appendChild(weaponsImg);
            if ( personagesList[numberPerson].weapons === "Bow") {
                weaponsImg.src = "../img/weapons_type/Icon_Bow.png";
                weaponsImg.alt =  personagesList[numberPerson].weapons;
            }
            if ( personagesList[numberPerson].weapons === "Catalyst") {
                weaponsImg.src = "../img/weapons_type/Icon_Catalyst.png";
                weaponsImg.alt =  personagesList[numberPerson].weapons;
            }
            if ( personagesList[numberPerson].weapons === "Two-handed") {
                weaponsImg.src = "../img/weapons_type/Icon_Claymore.png";
                weaponsImg.alt =  personagesList[numberPerson].weapons;
            }
            if ( personagesList[numberPerson].weapons === "Polearm") {
                weaponsImg.src = "../img/weapons_type/Icon_Polearm.png";
                weaponsImg.alt =  personagesList[numberPerson].weapons;
            }
            if ( personagesList[numberPerson].weapons === "Sword") {
                weaponsImg.src = "../img/weapons_type/Icon_Sword.png";
                weaponsImg.alt =  personagesList[numberPerson].weapons;
            }
        let weaponsName = document.createElement('h4');
            personWeapons.appendChild(weaponsName);
            weaponsName.innerText =  personagesList[numberPerson].weapons;

        let personRegion = document.createElement('div');
            personRegion.classList.add('slider__page__info__el-wp-rg');
            infOfPerson.appendChild(personRegion);
        let regionImg = document.createElement('img');
            personRegion.appendChild(regionImg);
            if ( personagesList[numberPerson].region === "Mondstadt") {
                regionImg.src = "../img/region/mond.png";
                regionImg.alt =  personagesList[numberPerson].region;
            }
            if ( personagesList[numberPerson].region === "Liyue") {
                regionImg.src = "../img/region/liyue.png";
                regionImg.alt =  personagesList[numberPerson].region;
            }
            if ( personagesList[numberPerson].region === "Inazuma") {
                regionImg.src = "../img/region/inazuma.png";
                regionImg.alt =  personagesList[numberPerson].region;
            }
            if ( personagesList[numberPerson].region === "Sumeru") {
                regionImg.src = "../img/region/sumeru.png";
                regionImg.alt =  personagesList[numberPerson].region;
            }
        let regionName = document.createElement('h4');
            personRegion.appendChild(regionName);
            regionName.innerText =  personagesList[numberPerson].region;

        let characteristics = document.createElement('ul');
            characteristics.classList.add('slider__page__info__characteristics');
            infOfPerson.appendChild(characteristics);
            for (let j = 0; j < 4; j++) {
                let li = document.createElement('li');
                characteristics.appendChild(li);
                let p = document.createElement('p');
                li.appendChild(p);
                let span = document.createElement('span');
                if (j === 0) {
                    p.innerText = "HP: ";
                    p.appendChild(span);
                    span.innerText =  personagesList[numberPerson].hp;
                }
                if (j === 1) {
                    p.innerText = "ATT: ";
                    p.appendChild(span);
                    span.innerText =  personagesList[numberPerson].att;
                }
                if (j === 2) {
                    p.innerText = "DEFF: ";
                    p.appendChild(span);
                    span.innerText =  personagesList[numberPerson].deff;
                }
                if (j === 3) {
                    p.innerText = "ATT SPEED: ";
                    p.appendChild(span);
                    span.innerText =  personagesList[numberPerson].speedClassAtt;
                }
            }
}


function sliderGenerate(){
    const sliderWrapper = document.querySelector(".slider");
    const dotsList = document.querySelector('.switches__herous-number');
    const switchesLeft = document.querySelector(".switches__left");
    let divsArray = [];
    let dotsArray = [];
    for(let numberPerson = 0; numberPerson < personagesList.length; numberPerson++){
        let slide = document.createElement('div');
            sliderWrapper.appendChild(slide);
            slide.classList.add('slider__page');
            divsArray.push(slide)

        //info page part
        writeInformation(slide, numberPerson)
        //info page part
        
        let dots = document.createElement('span');
            dotsList.appendChild(dots);
            dots.innerText = '✧';
            if(numberPerson === 0){
                dots.classList.add('active-dot');
            }

            dotsArray.push(dots)
    }
    console.log( divsArray, dotsArray)
}   

















/*
function createSlide(numberPerson){
    //console.log(numberPerson,  personagesList[numberPerson].name)
    let slide = document.createElement('div');
        sliderWrapper.appendChild(slide);
        slide.classList.add('slider__page');
        slide.style.left = '0px';
        arr.push(slide);
        if(arr.length > 1){
            slide.style.left = '100%';
            let privious = numberPerson-1;
            arr[privious].style.left ='-100%';
            setTimeout(()=>{
                arr[ numberPerson].style.left ='0px';
            },0)
        }
    let imgPerson = document.createElement('div');
        imgPerson.classList.add('slider__page__image-hero');
        slide.appendChild(imgPerson);
    let herosImg = document.createElement('img');
        imgPerson.appendChild(herosImg);
        herosImg.src =  personagesList[numberPerson].img;
        herosImg.alt =  personagesList[numberPerson].name;
    let infOfPerson = document.createElement('div');
        infOfPerson.classList.add('slider__page__info');
        slide.appendChild(infOfPerson);

    let namePersonRank = document.createElement('div');
        namePersonRank.classList.add('slider__page__info__name-rank');
        infOfPerson.appendChild(namePersonRank);
    let namePerson = document.createElement('h2');
        namePersonRank.appendChild(namePerson);
        namePerson.innerText =  personagesList[numberPerson].name;
    let starsWrapper = document.createElement('h5');
        namePersonRank.appendChild(starsWrapper);
        for (let j = 0; j <  personagesList[numberPerson].rank; j++) {
            let star = document.createElement('span');
            starsWrapper.appendChild(star);
            star.innerText = '★'
        }
    let personElement = document.createElement('div');
        personElement.classList.add('slider__page__info__el-wp-rg');
        infOfPerson.appendChild(personElement);
    let elementImg = document.createElement('img');
        personElement.appendChild(elementImg);
        if ( personagesList[numberPerson].element === "Anemo") {
            elementImg.src = "../img/elements/Element_Anemo.png";
            elementImg.alt =  personagesList[numberPerson].element;
        }
        if ( personagesList[numberPerson].element === "Piro") {
            elementImg.src = "../img/elements/Element_Pyro.png";
            elementImg.alt =  personagesList[numberPerson].element;
        }
        if ( personagesList[numberPerson].element === "Cryo") {
            elementImg.src = "../img/elements/Element_Cryo.png";
            elementImg.alt =  personagesList[numberPerson].element;
        }
    let elementName = document.createElement('h4');
        personElement.appendChild(elementName);
        elementName.innerText =  personagesList[numberPerson].element;

    let personWeapons = document.createElement('div');
        personWeapons.classList.add('slider__page__info__el-wp-rg');
        infOfPerson.appendChild(personWeapons);
    let weaponsImg = document.createElement('img');
        personWeapons.appendChild(weaponsImg);
        if ( personagesList[numberPerson].weapons === "Two-handed") {
            weaponsImg.src = "../img/weapons_type/Icon_Claymore.webp";
            weaponsImg.alt =  personagesList[numberPerson].weapons;
        }
        if ( personagesList[numberPerson].weapons === "Sword") {
            weaponsImg.src = "../img/weapons_type/Icon_Sword.webp";
            weaponsImg.alt =  personagesList[numberPerson].weapons;
        }
    let weaponsName = document.createElement('h4');
        personWeapons.appendChild(weaponsName);
        weaponsName.innerText =  personagesList[numberPerson].weapons;

    let personRegion = document.createElement('div');
        personRegion.classList.add('slider__page__info__el-wp-rg');
        infOfPerson.appendChild(personRegion);
    let regionImg = document.createElement('img');
        personRegion.appendChild(regionImg);
        if ( personagesList[numberPerson].region === "Mondstadt") {
            regionImg.src = "../img/region/mond.png";
            regionImg.alt =  personagesList[numberPerson].region;
        }
    let regionName = document.createElement('h4');
        personRegion.appendChild(regionName);
        regionName.innerText =  personagesList[numberPerson].region;

    let characteristics = document.createElement('ul');
        characteristics.classList.add('slider__page__info__characteristics');
        infOfPerson.appendChild(characteristics);
        for (let j = 0; j < 4; j++) {
            let li = document.createElement('li');
            characteristics.appendChild(li);
            let p = document.createElement('p');
            li.appendChild(p);
            let span = document.createElement('span');
            if (j === 0) {
                p.innerText = "HP: ";
                p.appendChild(span);
                span.innerText =  personagesList[numberPerson].hp;
            }
            if (j === 1) {
                p.innerText = "ATT: ";
                p.appendChild(span);
                span.innerText =  personagesList[numberPerson].att;
            }
            if (j === 2) {
                p.innerText = "DEFF: ";
                p.appendChild(span);
                span.innerText =  personagesList[numberPerson].deff;
            }
            if (j === 3) {
                p.innerText = "ATT SPEED: ";
                p.appendChild(span);
                span.innerText =  personagesList[numberPerson].speedClassAtt;
            }
        }
}

function sliderGenerate(){

    let dotsList = document.querySelector('.switches__herous-number');
    let numberPerson = 0;
    const switchesLeft = document.querySelector(".switches__left");
    switchesLeft.addEventListener('click', ()=>{
        sliderWrapper.innerHTML = ''
        createSlide(--numberPerson)
    })
    const switchesRight = document.querySelector(".switches__right");
        switchesRight.addEventListener('click', ()=>{
            createSlide(++numberPerson)
        })
    createSlide(numberPerson)
    for(let i = 0; i < personagesList.length; i++){
        let dots = document.createElement('span');
        dotsList.appendChild(dots);
        dots.innerText = '✧';
        if(numberPerson === i){
            dots.classList.add('active-dot');
        }
    }
}    */

export {sliderGenerate};