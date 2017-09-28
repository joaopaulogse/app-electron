const { app, BrowserWindow } = require("electron")

// reload changes
require('electron-reload')(__dirname+'src')

app.on('ready', ()=>{
    let mainWindow = new BrowserWindow({width:800, height:600})
    // mainWindow.loadURL(`file://${__dirname}/public/index.html`)
    mainWindow.loadURL(`http://localhost:8080/`)
})

