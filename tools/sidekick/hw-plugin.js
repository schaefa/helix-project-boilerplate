const CLIENT_ID = '<YOUR_CLIENT_ID>';
const API_KEY = '<YOUR_API_KEY>';
const DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1';

export default class HwPlugin {

  mySidekick
  myPlugin
  gapiInited
  gapi

  constructor(sidekick, plugin) {
    this.mySidekick = sidekick
    this.myPlugin = plugin
  }

  loadGapi() {
    const gapiScript = document.createElement("script");
    gapiScript.id = 'gapi'
    gapiScript.src = "https://apis.google.com/js/client.js";
    gapiScript.onload = () => {
      console.log('Gapi On-Load called')
      // window.gapi.load('client', () => {
      //   window.gapi.client.setApiKey(types.API_KEY)
      //   window.gapi.client.setClientId(types.CLIENT_ID)
      //   window.gapi.client.setDiscoveryDocs(types.DISCOVERY_DOCS)
      //   window.gapi.client.setScope(types.SCOPE)
      //   window.gapi.client.load('client:auth2', 'v3', () => {
      //     console.log("gapi is ready")
      //     this.setState({ gapiReady: true });
      //   });
      // });
    };
    document.head.append(gapiScript);
    this.gapi = gapiScript
  }

  insertButtonClicked() {
    console.log('Insert Button Click called, sidekick: ' + this.mySidekick + ', plugin: ' + this.myPlugin);
    let url = document.location.href
    let startingPos = url.search('\/d\/');
    let endingPos = url.search('\/edit');
    console.log('Url: ' + url + ', staring pos: ' + startingPos + ', ending pos: ' + endingPos);
    if(startingPos > 0 && endingPos > startingPos) {
      let documentId = url.substring(startingPos + 3, endingPos);
      console.log('Document Id: ' + documentId);
      this.printDocTitle(documentId).then(console.log('Print Doc Title Done'))
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

  async printDocTitle(documentId) {
    try {
      const response = await gapi.client.docs.documents.get({
        documentId: documentId,
      });
      const doc = response.result;
      const output = `Document ${doc.title} successfully found.\n`;
      console.log('Document Title: ' + output);
    } catch (err) {
      console.log('Document Title retrieval failed: ' + err.message);
    }
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