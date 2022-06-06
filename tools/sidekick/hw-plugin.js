const CLIENT_ID = '<YOUR_CLIENT_ID>';
const API_KEY = '<YOUR_API_KEY>';

export default class HwPlugin {

  mySidekick
  myPlugin
  gapiInited

  constructor(sidekick, plugin) {
    this.mySidekick = sidekick
    this.myPlugin = plugin
  }

  insertButtonClicked() {
    console.log('Insert Button Click called, sidekick: ' + this.mySidekick + ', plugin: ' + this.myPlugin);
    let url = document.location.href
    let startingPos = url.search('\/d\/');
    let endingPos = url.search('\/edit');
    console.log('Url: ' + url + ', staring pos: ' + startingPos + ', ending pos: ' + endingPos);
    if(startingPos > 0 && endingPos > startingPos) {
      let documentId = url.sub(startingPos + 3, endingPos);
      console.log('Document Id: ' + documentId);
    }

    // for(let key in this.myPlugin) {
    //   console.log('Plugin, key: ' + key + ', value: ' + this.myPlugin[key])
    // }
    // chrome.identity.getAuthToken(
    //   {
    //     callback: function (token, grantedScope) {
    //       console.log('Auth Token: ' + token + ', granted scope: ' + grantedScope)
    //     }
    //   }
    // )
  }

  /**
   * Callback after api.js is loaded.
   */
  gapiLoaded() {
    gapi.load('client', intializeGapiClient);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async intializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    this.gapiInited = true;
  }
}