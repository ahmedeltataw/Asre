let More = document.querySelector(".form-container .more") as HTMLButtonElement;
let Mins = document.querySelector(".form-container .mins") as HTMLButtonElement;
let InputNumberPeople = document.querySelector("#numberUser") as HTMLInputElement;
let Cost = document.querySelector("#cost") as HTMLInputElement;
//
let openSearch = document.getElementById("openSearch") as HTMLButtonElement;
let closeSearch = document.getElementById("closeMode") as HTMLButtonElement;
let Model = document.querySelector(".form-container") as HTMLDivElement
//  more mins function 
let currentValue: number = 1;
let MorePeople = () => {
    currentValue++
    InputNumberPeople.value = currentValue.toString()
    Cost.value = (parseInt(Cost.value) * 2).toString();

}
let MinsPeople = () => {
    if (currentValue > 1) {
        currentValue--
        InputNumberPeople.value = currentValue.toString()
        Cost.value = (parseInt(Cost.value) / 2).toString();
    }

}
//
let toggleModel = (show: boolean) => {

    if (show) {
        Model.style.display = "block"
        setTimeout(() => {
            Model.classList.add("active")
        }, 100)
    } else{
        Model.classList.remove("active")
        setTimeout(() => {
            Model.style.display = "none"
        }, 300)
        
    }

}
More.addEventListener("click", MorePeople)
Mins.addEventListener("click", MinsPeople)
openSearch.addEventListener("click", ()=>toggleModel(true))
closeSearch.addEventListener("click", ()=>toggleModel(false))