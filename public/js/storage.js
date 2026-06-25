const AppState = {
  get() {
    return JSON.parse(localStorage.getItem("policeTracker")) || {
      xp: 0,
      nivel: 1,
      estudo: {
        horas: 0,
        questoes: 0,
        acertos: 0
      },
      materias: {}
    };
  },

  save(state) {
    localStorage.setItem("policeTracker", JSON.stringify(state));
  }
};