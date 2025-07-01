const Storage = {
    saveHistory: function (quizId, quizTitle, score,  timeSpent) {
      const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
      const percentage = Math.round((score / 10) * 100);
      history.push({
        quizId,
        quizTitle,
        score,
        totalQuestions: 10,
        percentage,
        timeSpent,
        date: new Date().toISOString()
      });
      localStorage.setItem("quizHistory", JSON.stringify(history));
    },
  
    getHistory: function () {
      return JSON.parse(localStorage.getItem("quizHistory")) || [];
    },
  
    clearHistory: function () {
      localStorage.removeItem("quizHistory");
    }
  };
  