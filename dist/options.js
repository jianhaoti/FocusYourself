(()=>{document.getElementById("addButton").addEventListener("click",(function(){var e=document.getElementById("websiteInput"),n=e.value.trim();n&&function(e){try{return new URL(e),!0}catch(e){return!1}}(n)?chrome.runtime.sendMessage({type:"updateBlocklist",action:"add",url:n},t):(alert("Please enter a valid URL."),e.focus())})),document.addEventListener("click",(function(e){e.target.closest("#blocklistDisplay li")||e.target.closest("#websiteInput")||n()}));var e=document.getElementById("removeButton");function t(t){var c=document.getElementById("blocklistDisplay");c.innerHTML="",t.blocklist.forEach((function(t){var l=document.createElement("li");l.textContent=t,l.addEventListener("click",(function(t){t.stopPropagation(),n();var c=document.querySelector("#blocklistDisplay .selected");c&&c.classList.remove("selected"),l.classList.add("selected"),e.disabled=!1})),c.appendChild(l)}))}function n(){var t=document.querySelector("#blocklistDisplay .selected");t&&t.classList.remove("selected"),e.disabled=!0}e.addEventListener("click",(function(){var e=document.querySelector("#blocklistDisplay .selected");e&&chrome.runtime.sendMessage({type:"updateBlocklist",action:"remove",url:e.textContent},t)})),document.addEventListener("DOMContentLoaded",(function(){chrome.runtime.sendMessage({type:"updateBlocklist",action:"fetch"},(function(e){e&&e.blocklist?t(e):console.error("Failed to fetch blocklist",e)}))}))})();