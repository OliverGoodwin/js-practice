let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let temp = ""

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    if(saveEl.textContent != "Previous Shiny Attempts: "){
        temp = " - " + count
        saveHelper()
    }
    else{
        temp = count
        saveHelper()
    }
}

function saveHelper(){
        saveEl.textContent += temp
        count = 0
        countEl.innerText = count
}

