chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
        console.log('Sidebar removed');
		let adv = document.querySelectorAll('[aria-label="advertisement"]')[0];
		let mainPanel = adv.parentElement.parentElement.parentElement;

		mainPanel.parentNode.removeChild(mainPanel);
		

		// ----------------------------------------------------------

	}
	}, 2000);
});
