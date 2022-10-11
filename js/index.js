import "../css/styles.scss";
import { defaultColor, chengeColor } from "./changeColor"
import {sliderGenerate} from "./sliderGenerate"

let idValue = 0;
/*
class Unit {
    constructor(id, name, rarity, weapons, element, region, icon) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.weapons = weapons;
        this.element = element;
        this.region = region;
        this.icon = icon;
        idValue++;
    }
}

class Game{
     personagesList[i] = new Unit(idValue, ' personagesList[i]', 5, 'Two-handed', "Piro", "Mondstadt", 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f5ae62eff2cf426e98626c882dd0cf0d_3240767163310397909.png')
}*/

/*let  personagesList[i] = {id: idValue, 
            name: ' personagesList[i]', 
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
            }
 */

 sliderGenerate();

//checked__color
let placeArray = document.getElementById('place')
const colorArray = ["rgba(108, 206, 231, 0.9)", "rgba(216, 203, 84, 0.9)", "rgba(156, 0, 130, 0.9)"]
for (let i = 0; i < placeArray.children.length; i++) {
    if (i === 0) {
        defaultColor(placeArray.children[i], colorArray[i])
    }

    placeArray.children[i].children[0].addEventListener("click", () => {
        chengeColor(placeArray.children, placeArray.children[i], colorArray[i])
    })
}
//checked__color
