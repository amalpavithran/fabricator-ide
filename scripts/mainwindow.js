// electron libary to access BrowserWindow object so that you can call methods like minimize, maximize and close methods for your application
const remote = require('electron').remote;
const Tooltip = require('tooltip.js');
// var searchInput = document.querySelector('#search-input');
const tools = document.querySelectorAll('.panel-key__tool')
const options = document.querySelectorAll('.panel-key__option')

const toolsArray = Array.from(tools);
toolsArray.map((tool) => {
    tool.addEventListener('click', function() {
        deselectTools()
        this.classList.toggle('active');
    })
})

const optionsArray = Array.from(options);
optionsArray.map((option) => {
    option.addEventListener('click', function() {
        endAction()
        this.classList.add('active');
    })
})

function init() {
    toolsArray[0].classList.add('active');
	
	// Add tooltip
	const reference = document.querySelector('.panel-key');
	var options =  { placement: 'top', // or bottom, left, right, and variations
				 title: "Top",
				 template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	};
	options.title = "Add";
	const tool1 = new Tooltip(document.getElementById("#add-btn"), options);

	options.title = "Move";
	const tool2 = new Tooltip(document.getElementById("#move-btn"), options);
	
	options.title = "Open";
	const tool3 = new Tooltip(document.getElementById("#open-btn"), options);
	
	options.title = "Save";
	const tool4 = new Tooltip(document.getElementById("#save-btn"), options);

	options.title = "Settings";
	const tool5 = new Tooltip(document.getElementById("#settings-btn"), options);

	options.title = "Help";
	const tool6 = new Tooltip(document.getElementById("#help-btn"), options);

	options.title = "Exit";
	const tool7 = new Tooltip(document.getElementById("#exit-btn"), options);
}

function deselectTools() {
    toolsArray.map((tool) => {
        tool.classList.remove('active')
    })
}

function testAction() {
    console.log("Starting process")
    setTimeout(() => {
        console.log("Completed running process")
        endAction()
    }, 300)
}

function endAction() {
    optionsArray.map((option) => {
        option.classList.remove('active')
    })
}

// function to exit app
function exitApp() {
    setTimeout(() => {        
        //get current window and then close it
        var window = remote.getCurrentWindow();
    
        //prompt user before confirming exiting from the app
        var exitStatus = confirm("Are you sure you want to quit the application?");
        //close the application if user chose to quit the app
        if (exitStatus == true) {
            window.close();
        }
        endAction()
    }, 300);
}

function openFile() {
    testAction()
}
function saveFile() {
    testAction()
}
function openSettings() {
    testAction()
}
function openHelp() {
    testAction()
}

function clearSearch() {
    // select search box by id
    var searchInput = document.querySelector('#search-input')
    // clear value
    searchInput.value = ''
}

init()
