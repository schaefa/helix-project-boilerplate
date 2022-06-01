 window.hlx.initSidekick({
  owner: 'schaefa',
  repo: 'https://github.com/schaefa/helix-project-boilerplate',
  project: 'AS Helix Project',
  plugins: [
    {
      id: 'Inserts',
      button: 'Insert Into',
      callback: function (sidekick, plugin) {
        alert('Callback called, sidekick: ' + sidekick + ', plugin: ' + plugin);
      }
    },
  ],
});