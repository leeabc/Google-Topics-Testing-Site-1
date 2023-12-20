async function fetchTopics() {
  try {
    const topics = await document.browsingTopics();
    console.log('Retrieved Topics:', topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
  }
}

fetchTopics();