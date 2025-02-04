console.log("Background script loaded.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
  console.log("Popup opened.");
});