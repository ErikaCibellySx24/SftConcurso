# 🚔 Police Tracker Pro

Sistema de estudos completo para concursos policiais, com foco em organização, desempenho e evolução contínua.

---

## 📌 Sobre o projeto

O Police Tracker Pro é um sistema full-stack desenvolvido para auxiliar candidatos de concursos como:

- Polícia Civil PE
- Polícia Civil PB
- Polícia Penal PE

Ele permite:

- Controle de horas de estudo
- Registro de questões
- Cronograma semanal
- Revisões programadas
- Estatísticas de desempenho
- Dashboard interativo

---

## 🧠 Funcionalidades

### 📊 Dashboard
- Total de horas estudadas
- Questões resolvidas
- Taxa de acertos
- Dias consecutivos de estudo
- Gráficos de desempenho

### 📅 Cronograma
- Organização semanal de matérias
- Estrutura fixa e expansível

### ❓ Questões
- Registro de questões por matéria
- Controle de acertos e erros
- Histórico salvo no banco

### 🧠 Revisões
- Sistema de revisão espaçada (base inicial)
- Preparado para automação futura

### 📚 Matérias
- Organização por concurso
- Separação por disciplina

---

## ⚙️ Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript
- Chart.js

### Backend
- Node.js
- Express.js
- SQLite3

---

## 🗄️ Banco de dados

O sistema utiliza SQLite local.

### Tabelas principais:

- `estudos`
- `questoes`
- `cronograma`

---

## 📂 Estrutura do projeto


PoliceTrackerPro/
│
├── public/ # Frontend (HTML, CSS, JS)
│ ├── pages/
│ ├── css/
│ └── js/
│
├── server/ # Backend principal
│ ├── app.js
│ └── db.js
│
├── routes/ # Rotas da API
│ ├── estudos.js
│ ├── questoes.js
│ └── cronograma.js
│
├── models/ # Camada de dados
│ ├── Estudo.js
│ ├── Questao.js
│ └── Cronograma.js
│
├── database/
│ └── tracker.db
│
├── package.json
└── README.md


---

## 🚀 Como executar o projeto

### 1. Instalar dependências

```bash
npm install
2. Iniciar o servidor

Modo normal:

npm start

Modo desenvolvimento:

npm run dev
🌐 Acesso

Após iniciar o servidor:

http://localhost:3000/pages/dashboard.html
📡 API
Questões
GET /api/questoes → listar questões
POST /api/questoes → criar questão
Estudos
GET /api/estudos
POST /api/estudos
Cronograma
GET /api/cronograma
POST /api/cronograma
📈 Melhorias futuras
🔐 Sistema de login JWT
☁️ Banco em nuvem
📱 Versão mobile (Capacitor)
🧠 IA para montar cronograma automático
🔔 Notificações de revisão
📊 Dashboard em tempo real
👨‍💻 Status do projeto

🚧 Em desenvolvimento ativo
✔ Estrutura base concluída
✔ Backend funcional
✔ Frontend integrado

📌 Autor

Projeto pessoal de estudos e evolução em desenvolvimento web.


---

# 🚀 Se quiser o próximo upgrade

Posso te entregar agora:

### 💥 versão profissional nível SaaS:
- login JWT
- dashboard real por usuário
- gráficos puxando banco de verdade
- cronograma editável
- pomodoro salvando sessões

Só manda:
👉 **“quero versão SaaS”**