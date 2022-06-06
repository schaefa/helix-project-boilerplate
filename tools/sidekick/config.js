import HwPlugin from './hw-plugin.js'

let hwPlugin

window.hlx.initSidekick(
  {
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
            console.log('isPressed(), param1: ' + param1 + ', keys: ' + Object.keys(param1))
            return true;
          }
        },
        callback: function (sidekick, plugin) {
          hwPlugin = new HwPlugin(sidekick, plugin)
          hwPlugin.loadGapi()
        }
      }
    ]
  }
);
