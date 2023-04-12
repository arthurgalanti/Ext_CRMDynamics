document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("showFunctions").addEventListener('click', ()=>{injectScript("scripts/show.js")}, false);
    document.getElementById("copyFunctions").addEventListener('click', ()=>{injectScript("scripts/copy.js")}, false);
    document.getElementById("pasteFunctions").addEventListener('click', ()=>{injectScript("scripts/paste.js")}, false);
    document.getElementById("cleanFunctions").addEventListener('click', ()=>{injectScript("scripts/clean.js")}, false);
    chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
  });

async function injectScript(srcPath) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let ids = await chrome.webNavigation.getAllFrames({tabId: tab.id});
    const url = tab.url; 
    const urlCroped = url.slice(0, url.lastIndexOf("/"));
    console.log(urlCroped);
    const frame = ids.filter((obj) => {
      return obj.url === (`${urlCroped}/_grid/cmds/dlg_role.aspx?iObjType=8&iTotal=1&dType=1`)
   });

   if (frame[0])
   {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, frameIds : [frame[0].frameId]},
      files: [ `${srcPath}` ]
      });
   }else
   {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, frameIds : [0]},
        files: [ "scripts/alert.js" ]
    })
   }
    
}