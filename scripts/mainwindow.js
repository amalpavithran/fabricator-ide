// electron libary to access BrowserWindow object so that you can call methods like minimize, maximize and close methods for your application
const remote = require('electron').remote;


// function to exit app
function exitApp() {
    //get current window and then close it
    var window = remote.getCurrentWindow();

    //prompt user before confirming exiting from the app
    var exitStatus = confirm("Are you sure you want to quit the application?");
    //close the application if user chose to quit the app
    if (exitStatus == true) {
        window.close();
    }
}

function clearSearch() {
    // select search box by id
    var searchInput = document.querySelector('#search-input')
    // clear value
    searchInput.value = ''
}