const btn=document.getElementById("clear-history-btn");
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("history-container");
    const history = Storage.getHistory();
  
    if (!history || history.length === 0) {
      container.innerHTML = "<p>No quiz history yet.</p>";
      return;
    }
  
    const list = document.createElement("ul");
  
    history.forEach(entry => {
      const item = document.createElement("li");
      item.textContent = `${entry.quizTitle} | Score: ${entry.score} / 10 | Time: ${entry.timeSpent} seconds | Date: ${new Date(entry.date).toLocaleString()}`;
      list.appendChild(item);
    });
  
    container.appendChild(list);
  });
  document.getElementById('clear-history-btn').addEventListener('click', () => {
    Storage.clearHistory(); // Clear data
  
    const container = document.getElementById('history-container');
    container.innerHTML = '<p>No quiz history yet.</p>'; // Update UI immediately
  });
  
  