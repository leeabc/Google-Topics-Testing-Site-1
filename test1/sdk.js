async function fetchTopics() {
  try {
    const topics = await document.browsingTopics({skipObservation:true});
    console.log('Retrieved Topics:', topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
  }
}

fetchTopics();

// create a function to create a iframe into the current page
function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.browsingTopics = true;

  // to check if the document & body are exists
  if (!document || !document.body) {
    return;
  }

  // set the iframe have script to run the js script to alert the result of await document.browsingTopics()
  iframe.srcdoc = `
    <script>
      (async () => {
        try {
          const topics = await document.browsingTopics();
          console.log('Retrieved Topics: ' + JSON.stringify(topics));
        } catch (error) {
          alert('Error fetching topics: ' + JSON.stringify(error));
        }
      })();
    </script>
  `;

  document.body.appendChild(iframe);
}

createIframe();
