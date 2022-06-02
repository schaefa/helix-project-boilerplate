export default class HwPlugin {

  mySidekick
  myPlugin

  constructor(sidekick, plugin) {
    this.mySidekick = sidekick
    this.myPlugin = plugin
  }

  insertButtonClicked() {
    console.log('Insert Button Click called, sidekick: ' + this.mySidekick + ', plugin: ' + this.myPlugin);
    for(let key in this.myPlugin) {
      console.log('Plugin, key: ' + key + ', value: ' + this.myPlugin[key])
    }
  }
}
