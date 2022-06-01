 window.hlx.initSidekick({
  // owner: 'schaefa',
  // repo: 'https://github.com/schaefa/helix-project-boilerplate',
  // project: 'AS Helix Project',
  plugins: [
    {
      id: 'Inserts',
      button: {
        text: 'Insert Into',
        action: function () {
          // alert('Plugin Button Clicked');
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