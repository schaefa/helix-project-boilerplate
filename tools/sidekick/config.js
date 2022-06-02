let mySidekick;
let myPlugin

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
          insertButtonClicked();
        },
        isPressed: function () {
          // alert('Plugin Button Pressed')
        }
      },
      callback: function (sidekick, plugin) {
        mySidekick = sidekick;
        myPlugin = plugin;
      }
    }
  ]
});

export function insertButtonClicked() {
  console.log('Insert Button Click called, sidekick: ' + mySidekick + ', plugin: ' + myPlugin);
}

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
