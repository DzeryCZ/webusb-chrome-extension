chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("called from the extension");
    var data = request.data || {};
    console.log(data);
    navigator.usb.requestDevice({ filters: [] })
    .then(device => {
        console.log(device);
        sendResponse({success: true});
    })
    .catch(error => {
        console.error(error); 
        sendResponse({success: false});
    });
});
