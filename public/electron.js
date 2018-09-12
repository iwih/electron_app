const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let imageWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680, show: false});
    mainWindow.loadURL(isDev ? 'http://localhost:3000' :
        `file://${url.format({
            pathname: path.join(__dirname, './'),
            hash: 'baz',
            protocol: 'file',
            slashes: true,
        })}`);
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.once('ready-to-show', () => mainWindow.show())

    imageWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
    imageWindow.loadURL(isDev ? 'http://localhost:3000/Image' :
        `file://${url.format({
            pathname: path.join(__dirname, './Image'),
            hash: 'baz',
            protocol: 'file',
            slashes: true,
        })}`);
    imageWindow.on('close', (event) => {
        event.preventDefault()
        imageWindow.hide()
    });
}



app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('show-image-window', (event, args) => {
    imageWindow.show();
    imageWindow.webContents.send('image', args)
});