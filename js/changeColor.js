function defaultColor(params, color){
    params.children[1].checked = true;
    params.style.backgroundColor = color;
    params.style.boxShadow = "4px 4px 10px rgb(0, 0, 0)"
}

function chengeColor(dropColorValue, params, color) {
    for (let j = 0; j < dropColorValue.length; j++) {
        dropColorValue[j].style.backgroundColor = null;
        dropColorValue[j].style.boxShadow = null;
    }
params.children[1].checked = true;
params.style.backgroundColor = color;
params.style.boxShadow = "4px 4px 10px rgb(0, 0, 0)"
}

export {defaultColor, chengeColor};