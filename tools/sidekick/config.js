const HWPlugin = require('hw-plugin')

let hwPlugin

window.hlx.initSidekick({
   // Does not work so ignore it for now
  // owner: 'schaefa',
  // repo: 'https://github.com/schaefa/helix-project-boilerplate',
  // project: 'AS Helix Project',
  plugins: [
    {
      id: 'Inserts',
      button: {
        text: 'Insert Into',
        action: function () {
          hwPlugin.insertButtonClicked();
        },
        isPressed: function (param1) {
          // alert('Plugin Button Pressed')
          console.log('isPressed(), param1: ' + param1)
          return true;
        }
      },
      callback: function (sidekick, plugin) {
        hwPlugin = new HWPlugin(sidekick, plugin)
      }
    }
  ]
});

// The import does work but the
// async function loadPlugins() {
//   // alert('Callback called, sidekick: ' + sidekick + ', plugin: ' + plugin);
//   try {
//     const loadPlugin = new Promise((resolve) => {
//       (async () => {
//         try {
//           const mod = await import(`./hw-plugin.js`);
//         } catch (err) {
//           // eslint-disable-next-line no-console
//           console.log(`failed to load HW Sidekick Extension`, err);
//         }
//         resolve();
//       })();
//     });
//     await Promise.all([loadPlugin]);
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.log(`failed to load HW Sidekick Extension`, err);
//   }
// }
//
// loadPlugins()
