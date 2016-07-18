// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const shell = require('electron').shell

const os = require('os')

const hdf5 = require('hdf5').hdf5;
const h5lt = require('hdf5').h5lt;
const Access = require('hdf5/lib/globals').Access;

// function load_data(path) {
//   // console.log(path)
//   var h5file = new hdf5.File(path, Access.ACC_RDONLY)
//   var group = h5file.openGroup('DataSet1')
//   var x = h5lt.readDataset(group.id, 'xpoints')
//   // console.log(x)
//   return {
//     type: 'line',
//           // x: [1, 2, 4],
//           // y: [3, 4, 5]
//     x:  Array.from(h5lt.readDataset(group.id, 'xpoints')),
//     y:  Array.from(h5lt.readDataset(group.id, 'real'))
//
//   }
// }
// // var data = load_data();
//
// function plot_data(data) {
//   console.log(data)
//   Plotly.plot('my-graph', [load_data()]);
// }

// const fileManagerBtn = document.getElementById('open-file-manager')
// fileManagerBtn.addEventListener('click', plot_data(load_data()))


const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('button')

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function (event, path) {
  // document.getElementById('selected-file').innerHTML = `You selected: ${path}`
  plot_data(load_data(path[0]))
})
