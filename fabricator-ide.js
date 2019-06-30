const { app, BrowserWindow } = require('electron')

function mainWindow() {
    let win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        frame: false
    })

    win.loadFile('mainwindow.html')

    win.on('closed', () => {
        win = null
    })

    win.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    win.on('activate', () => {
        if (win === null) {
            mainWindow()
        }
    })

}

app.on('ready', mainWindow)