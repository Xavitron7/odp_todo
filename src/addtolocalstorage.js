import getFromLocalStorage from "./getfromlocalstorage.js";

//Adds the project or task to local storage, depending on first argument), then calls the getfromlocalstorage function

const addToLocalStorage = (destination, list) => {

    localStorage.setItem(destination, list);

    getFromLocalStorage();

}

export default addToLocalStorage;