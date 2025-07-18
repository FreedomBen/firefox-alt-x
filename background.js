browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-pin") {
    toggleTabPin();
  }
});

browser.browserAction.onClicked.addListener(() => {
  toggleTabPin();
});

async function toggleTabPin() {
  try {
    const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true });
    
    if (activeTab) {
      await browser.tabs.update(activeTab.id, { pinned: !activeTab.pinned });
    }
  } catch (error) {
    console.error("Error toggling tab pin:", error);
  }
}