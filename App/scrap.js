let btnscrap = document.getElementById('btnscrap')

btnscrap.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    var port = chrome.tabs.connect(tab.id);
    var searchText = document.getElementById('searchText').value;

        if(searchText){
            document.getElementById('loader').style.display = "block";
            port.postMessage({acction: 'search', searchtext:searchText});    
        }
    })
    
    chrome.runtime.onMessageExternal.addListener(
        function(request, sender, sendResponse){
            if(sender.id == blocklistedExtension)
                return;
            else if (request.getTargetData)
                sendResponse({targetData: targetData});
            else if (request.activateLasers){
                var sucess = activateLasers();
                sendResponse({activateLasers:sucess});
            }
        });
    
