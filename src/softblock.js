import React, { useEffect, useState } from "react";

function Softblock() {
  const [interceptedUrl, setInterceptedUrl] = useState("");

  useEffect(() => {
    // DOMContentLoaded equivalent in React using useEffect with an empty dependency array
    console.log("Softblock page launched 12345");

    // Function to handle the fetching and setting of the intercepted URL
    function fetchAndSetInterceptedUrl() {
      console.log("we're going into the function");
      // chrome.storage.local.get("interceptedURL", (data) => {
      //   if (data.interceptedURL) {
      //     console.log("Received intercepted URL from storage:", data.interceptedURL);
      //     setInterceptedUrl(data.interceptedURL); // Set state

      //     // Optionally clear the URL from storage after retrieving it
      //     chrome.storage.local.remove("interceptedURL", () => {
      //       console.log("Intercepted URL cleared from storage.");
      //     });
      //   }
      // });
    }

    // Call the function immediately upon component mount
    fetchAndSetInterceptedUrl();
  }, []); // Empty dependency array to mimic componentDidMount

  // Rendering the component with the intercepted URL
  return (
    <div>
      <h1>Softblock Page</h1>
      {interceptedUrl ? (
        <p>Intercepted URL: {interceptedUrl}</p>
      ) : (
        <p>No URL intercepted or already cleared.</p>
      )}
    </div>
  );
}

export default Softblock;
