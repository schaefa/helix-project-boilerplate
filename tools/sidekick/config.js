import { insertButtonClicked } from './hw-plugin';

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
        // alert('Callback called, sidekick: ' + sidekick + ', plugin: ' + plugin);
      }
    }
  ]
});