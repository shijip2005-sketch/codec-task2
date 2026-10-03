import './style.css';

const exams = [
  {
    id: 1,
    title: "Java Programming",
    category: "Programming",
    icon: "☕",
    color: "java",
    questions: 10,
    duration: 15,
    level: "Intermediate",
    description: "Test your knowledge of Java, OOP concepts, loops and arrays."
  },
  {
    id: 2,
    title: "Python Fundamentals",
    category: "Programming",
    icon: "🐍",
    color: "python",
    questions: 10,
    duration: 15,
    level: "Beginner",
    description: "Explore Python syntax, data types, functions and conditions."
  },
  {
    id: 3,
    title: "Web Development",
    category: "Technology",
    icon: "🌐",
    color: "web",
    questions: 10,
    duration: 20,
    level: "Intermediate",
    description: "HTML, CSS, JavaScript and modern web development concepts."
  },
  {
    id: 4,
    title: "Database Management",
    category: "Database",
    icon: "🗄️",
    color: "database",
    questions: 10,
    duration: 15,
    level: "Intermediate",
    description: "SQL queries, normalization, keys and database concepts."
  },
  {
    id: 5,
    title: "Aptitude & Reasoning",
    category: "Assessment",
    icon: "🧠",
    color: "aptitude",
    questions: 10,
    duration: 20,
    level: "Intermediate",
    description: "Practice logical reasoning, percentages and problem solving."
  }
];

const questions = {
  1: [
    ["Which keyword is used to inherit a class in Java?", ["implements", "extends", "inherits", "super"], 1],
    ["Which method is the entry point of Java?", ["start()", "run()", "main()", "init()"], 2],
    ["Which is not a primitive data type?", ["int", "boolean", "String", "char"], 2],
    ["Which keyword creates an object?", ["new", "class", "this", "void"], 0],
    ["Java supports which programming paradigm?", ["Only procedural", "Object-oriented", "Only functional", "Markup"], 1],
    ["Which loop executes at least once?", ["for", "while", "do-while", "foreach"], 2],
    ["Which symbol ends a Java statement?", [".", ":", ";", ","], 2],
    ["Which keyword prevents inheritance?", ["static", "final", "private", "void"], 1],
    ["Which collection stores unique elements?", ["List", "ArrayList", "Set", "Queue"], 2],
    ["Which operator checks equality?", ["=", "==", "!=", "++"], 1]
  ],
  2: [
    ["Which keyword defines a function in Python?", ["function", "def", "fun", "method"], 1],
    ["Which data type is immutable?", ["List", "Dictionary", "Set", "Tuple"], 3],
    ["What is the output of 2 ** 3?", ["6", "8", "9", "5"], 1],
    ["Which symbol starts a comment?", ["//", "/*", "#", "--"], 2],
    ["Which function displays output?", ["print()", "show()", "display()", "echo()"], 0],
    ["Which keyword is used for a loop?", ["repeat", "loop", "for", "iterate"], 2],
    ["What is len([1,2,3])?", ["2", "3", "4", "1"], 1],
    ["Which value represents no value?", ["null", "None", "undefined", "empty"], 1],
    ["Which operator means floor division?", ["/", "%", "//", "**"], 2],
    ["Which collection stores key-value pairs?", ["List", "Tuple", "Set", "Dictionary"], 3]
  ],
  3: [
    ["What does HTML stand for?", ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Language"], 0],
    ["Which CSS property changes text color?", ["font", "color", "background", "text-style"], 1],
    ["Which tag creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], 1],
    ["Which language adds interactivity?", ["HTML", "CSS", "JavaScript", "SQL"], 2],
    ["Which CSS property controls spacing inside an element?", ["margin", "padding", "border", "display"], 1],
    ["Which method selects an element by ID?", ["getElementById()", "queryClass()", "getTag()", "selectId()"], 0],
    ["Which attribute provides image alternative text?", ["title", "alt", "src", "href"], 1],
    ["Which CSS layout is one-dimensional?", ["Grid", "Flexbox", "Table", "Float"], 1],
    ["Which HTTP method commonly retrieves data?", ["POST", "DELETE", "GET", "PATCH"], 2],
    ["What does responsive design mean?", ["Only mobile", "Adapts to screen sizes", "Only desktop", "Fixed width"], 1]
  ],
  4: [
    ["What does SQL stand for?", ["Structured Query Language", "Simple Query List", "Standard Question Language", "System Query Logic"], 0],
    ["Which command retrieves data?", ["GET", "SELECT", "FETCH ALL", "OPEN"], 1],
    ["Which key uniquely identifies a row?", ["Foreign key", "Primary key", "Duplicate key", "Secondary key"], 1],
    ["Which command adds new records?", ["INSERT", "UPDATE", "ALTER", "DROP"], 0],
    ["Which clause filters rows?", ["ORDER BY", "GROUP BY", "WHERE", "JOIN"], 2],
    ["Which command removes a table?", ["DELETE", "REMOVE", "DROP", "CLEAR"], 2],
    ["Which function counts rows?", ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"], 1],
    ["Which key references another table?", ["Primary", "Foreign", "Unique", "Candidate"], 1],
    ["Which clause sorts results?", ["SORT", "ORDER BY", "ARRANGE", "GROUP"], 1],
    ["Which command modifies existing data?", ["UPDATE", "INSERT", "CREATE", "SELECT"], 0]
  ],
  5: [
    ["What is 20% of 250?", ["40", "50", "60", "25"], 1],
    ["Find the next number: 2, 4, 8, 16, ?", ["24", "30", "32", "36"], 2],
    ["If 5 pens cost ₹50, what is the cost of 8?", ["₹70", "₹80", "₹90", "₹100"], 1],
    ["What is the average of 10, 20 and 30?", ["15", "20", "25", "30"], 1],
    ["A person walks 5 km north and 5 km south. Distance from start?", ["5 km", "10 km", "0 km", "15 km"], 2],
    ["What is the square of 12?", ["124", "144", "132", "154"], 1],
    ["Find the odd one out.", ["2", "4", "8", "9"], 3],
    ["What is 3/4 of 100?", ["25", "50", "75", "80"], 2],
    ["If today is Monday, what day is after 10 days?", ["Wednesday", "Thursday", "Friday", "Sunday"], 1],
    ["Find the LCM of 4 and 6.", ["8", "10", "12", "24"], 2]
  ]
};

const app = document.querySelector('#app');

let currentPage = 'home';
let selectedExam = null;
let currentQuestion = 0;
let answers = {};
let results = JSON.parse(localStorage.getItem('examoraResults') || '[]');
let timerInterval = null;
let remainingTime = 0;

function render() {
  if (currentPage === 'home') renderHome();
  else if (currentPage === 'exams') renderExams();
  else if (currentPage === 'exam') renderExam();
  else if (currentPage === 'results') renderResults();
  else if (currentPage === 'login') renderLogin();
  else if (currentPage === 'register') renderRegister();
  else if (currentPage === 'admin') renderAdmin();
}

function layout(content, active = 'home') {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-icon">E</div>
          <span>examora<span class="brand-dot">.</span></span>
        </div>

        <div class="side-label">MENU</div>

        <nav class="side-nav">
          <button class="${active === 'home' ? 'active' : ''}" onclick="go('home')">
            <span>⌂</span> Overview
          </button>
          <button class="${active === 'exams' ? 'active' : ''}" onclick="go('exams')">
            <span>▤</span> Explore Exams
          </button>
          <button class="${active === 'results' ? 'active' : ''}" onclick="go('results')">
            <span>◷</span> My Results
          </button>
          <button class="${active === 'admin' ? 'active' : ''}" onclick="go('admin')">
            <span>⚙</span> Admin
          </button>
        </nav>

        <div class="sidebar-bottom">
          <div class="help-card">
            <div class="help-icon">✦</div>
            <strong>Need a little help?</strong>
            <p>Stay focused. Your progress matters!</p>
          </div>
          <button class="profile" onclick="go('login')">
            <div class="avatar">SP</div>
            <div><strong>Student</strong><small>Welcome back!</small></div>
            <span class="profile-arrow">↗</span>
          </button>
        </div>
      </aside>

      <main class="main-area">
        <header class="topbar">
          <div class="mobile-brand">E <b>examora.</b></div>
          <div class="breadcrumb">Workspace <span>/</span> ${active === 'home' ? 'Overview' : active.charAt(0).toUpperCase() + active.slice(1)}</div>
          <div class="top-actions">
            <button class="icon-btn" onclick="go('results')" title="Results">♧</button>
            <button class="user-pill" onclick="go('login')"><span class="avatar small">SP</span> Student</button>
          </div>
        </header>
        <section class="page-content">${content}</section>
        <footer>© 2026 Examora <span>Learn. Practice. Achieve.</span></footer>
      </main>
    </div>
  `;
}

function renderHome() {
  currentPage = 'home';
  app.innerHTML = layout(`
    <div class="welcome-row">
      <div>
        <div class="eyebrow">MONDAY, YOUR LEARNING SPACE</div>
        <h1>Hey there, Shiji! <span class="wave">✦</span></h1>
        <p class="muted">A fresh day to learn something new. Let's make it count.</p>
      </div>
      <button class="primary-btn" onclick="go('exams')">Explore exams <span>→</span></button>
    </div>

    <div class="hero-banner">
      <div class="hero-copy">
        <span class="hero-tag">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>Small steps.<br>Big achievements.</h2>
        <p>Practice at your own pace and build confidence, one question at a time.</p>
        <button class="hero-btn" onclick="go('exams')">Find your next exam <span>↗</span></button>
      </div>
      <div class="hero-art">
        <div class="art-circle"></div>
        <div class="art-card">
          <div class="art-check">✓</div>
          <strong>You're doing great!</strong>
          <span>Keep your momentum going</span>
          <div class="art-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>
        <div class="art-star">✦</div>
        <div class="art-spark">✧</div>
      </div>
    </div>

    <div class="section-heading">
      <div><h2>Your learning overview</h2><p>A little progress each day adds up.</p></div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon purple">▤</div><span>Total exams</span><strong>05</strong><small>Ready to explore</small></div>
      <div class="stat-card"><div class="stat-icon pink">◷</div><span>Completed</span><strong>${results.length}</strong><small>Keep it going</small></div>
      <div class="stat-card"><div class="stat-icon blue">✦</div><span>Average score</span><strong>${results.length ? Math.round(results.reduce((a, b) => a + b.score, 0) / results.length) + '%' : '—'}</strong><small>Your performance</small></div>
      <div class="stat-card"><div class="stat-icon green">♧</div><span>Learning streak</span><strong>01</strong><small>Start today</small></div>
    </div>

    <div class="section-heading exam-heading">
      <div><h2>Picked for you <span class="sparkle">✦</span></h2><p>Explore a little. Discover a lot.</p></div>
      <button class="text-btn" onclick="go('exams')">View all exams →</button>
    </div>

    <div class="exam-grid">
      ${exams.slice(0, 3).map(examCard).join('')}
    </div>
  `, 'home');
}

function examCard(exam) {
  return `
    <article class="exam-card">
      <div class="exam-card-top">
        <div class="exam-icon ${exam.color}">${exam.icon}</div>
        <span class="level">${exam.level}</span>
      </div>
      <span class="category">${exam.category}</span>
      <h3>${exam.title}</h3>
      <p>${exam.description}</p>
      <div class="exam-meta">
        <span>▤ ${exam.questions} Questions</span>
        <span>◷ ${exam.duration} min</span>
      </div>
      <button class="exam-btn" onclick="startExam(${exam.id})">Start exam <span>→</span></button>
    </article>
  `;
}

function renderExams() {
  currentPage = 'exams';
  app.innerHTML = layout(`
    <div class="page-title">
      <div class="eyebrow">THE EXAM LIBRARY</div>
      <h1>Explore exams <span class="sparkle">✦</span></h1>
      <p>Choose a subject, challenge yourself, and celebrate your progress.</p>
    </div>

    <div class="filter-row">
      <div class="search-box"><span>⌕</span><input id="examSearch" placeholder="Search exams..." oninput="filterExams()"></div>
      <span class="result-count">05 exams available</span>
    </div>

    <div class="exam-grid full-grid" id="examGrid">
      ${exams.map(examCard).join('')}
    </div>
  `, 'exams');
}

function filterExams() {
  const value = document.getElementById('examSearch').value.toLowerCase();
  document.getElementById('examGrid').innerHTML =
    exams.filter(e => e.title.toLowerCase().includes(value) || e.category.toLowerCase().includes(value))
      .map(examCard).join('') || '<div class="empty-state">No exams found. Try another search.</div>';
}

function startExam(id) {
  selectedExam = exams.find(e => e.id === id);
  currentQuestion = 0;
  answers = {};
  remainingTime = selectedExam.duration * 60;
  currentPage = 'exam';
  clearInterval(timerInterval);
  renderExam();

  timerInterval = setInterval(() => {
    remainingTime--;
    const timer = document.getElementById('timer');
    if (timer) timer.textContent = formatTime(remainingTime);
    if (remainingTime <= 0) submitExam();
  }, 1000);
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function renderExam() {
  const qs = questions[selectedExam.id];
  const q = qs[currentQuestion];

  app.innerHTML = `
    <div class="exam-workspace">
      <div class="exam-topline">
        <button class="back-btn" onclick="go('exams')">← Exit exam</button>
        <div class="timer-pill">◷ <span id="timer">${formatTime(remainingTime)}</span></div>
      </div>

      <div class="exam-progress"><div style="width:${((currentQuestion + 1) / qs.length) * 100}%"></div></div>

      <div class="question-panel">
        <div class="question-head">
          <span class="eyebrow">QUESTION ${currentQuestion + 1} OF ${qs.length}</span>
          <span class="question-number">${String(currentQuestion + 1).padStart(2, '0')} / ${qs.length}</span>
        </div>
        <h1>${q[0]}</h1>
        <p class="muted">Select one answer from the options below.</p>

        <div class="option-list">
          ${q[1].map((option, i) => `
            <button class="option ${answers[currentQuestion] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${option}</span>
              <span class="option-check">${answers[currentQuestion] === i ? '✓' : ''}</span>
            </button>
          `).join('')}
        </div>

        <div class="question-footer">
          <button class="secondary-btn" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>← Previous</button>
          ${currentQuestion === qs.length - 1
            ? '<button class="primary-btn" onclick="submitExam()">Submit exam ✓</button>'
            : '<button class="primary-btn" onclick="nextQuestion()">Next question →</button>'}
        </div>
      </div>
      <p class="exam-note">Take your time and choose carefully. You can review your answers before submitting.</p>
    </div>
  `;
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  renderExam();
}

function nextQuestion() {
  if (currentQuestion < questions[selectedExam.id].length - 1) {
    currentQuestion++;
    renderExam();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderExam();
  }
}

function submitExam() {
  clearInterval(timerInterval);
  const qs = questions[selectedExam.id];
  let correct = 0;
  qs.forEach((q, i) => {
    if (answers[i] === q[2]) correct++;
  });

  const result = {
    id: Date.now(),
    title: selectedExam.title,
    score: Math.round((correct / qs.length) * 100),
    correct,
    total: qs.length,
    date: new Date().toLocaleDateString()
  };

  results.unshift(result);
  localStorage.setItem('examoraResults', JSON.stringify(results));
  currentPage = 'results';
  renderResultDetail(result);
}

function renderResultDetail(result) {
  app.innerHTML = layout(`
    <div class="result-detail">
      <div class="result-confetti">✦</div>
      <div class="eyebrow">EXAM COMPLETED</div>
      <h1>Well done, Shiji! 🎉</h1>
      <p class="muted">You've completed ${result.title}. Every attempt is progress.</p>
      <div class="score-circle"><div><strong>${result.score}%</strong><span>Your score</span></div></div>
      <div class="result-stats">
        <div><strong>${result.correct}</strong><span>Correct answers</span></div>
        <div><strong>${result.total - result.correct}</strong><span>Incorrect answers</span></div>
        <div><strong>${result.total}</strong><span>Total questions</span></div>
      </div>
      <div class="result-actions">
        <button class="primary-btn" onclick="go('exams')">Try another exam →</button>
        <button class="secondary-btn" onclick="go('results')">View all results</button>
      </div>
    </div>
  `, 'results');
}

function renderResults() {
  currentPage = 'results';
  app.innerHTML = layout(`
    <div class="page-title">
      <div class="eyebrow">YOUR JOURNEY</div>
      <h1>My results <span class="sparkle">✦</span></h1>
      <p>Look how far you've come. Every attempt counts.</p>
    </div>

    <div class="results-summary">
      <div><span>Exams completed</span><strong>${results.length}</strong></div>
      <div><span>Average score</span><strong>${results.length ? Math.round(results.reduce((a,b)=>a+b.score,0)/results.length) + '%' : '—'}</strong></div>
      <div><span>Best score</span><strong>${results.length ? Math.max(...results.map(r=>r.score)) + '%' : '—'}</strong></div>
    </div>

    <div class="section-heading"><div><h2>Recent attempts</h2><p>Your completed assessments.</p></div></div>
    <div class="results-list">
      ${results.length ? results.map(r => `
        <div class="result-row">
          <div class="result-mini-icon">✓</div>
          <div class="result-info"><strong>${r.title}</strong><small>${r.date} · ${r.correct}/${r.total} correct</small></div>
          <div class="result-score">${r.score}%</div>
        </div>
      `).join('') : '<div class="empty-state">No results yet. Take your first exam and your progress will appear here! ✦</div>'}
    </div>
  `, 'results');
}

function renderLogin() {
  currentPage = 'login';
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-decoration"><div class="brand"><div class="brand-icon">E</div><span>examora<span class="brand-dot">.</span></span></div><div class="auth-art"><div class="auth-big">✦</div><h2>Your potential<br>has no limits.</h2><p>Learn at your pace. Grow with every challenge.</p></div></div>
      <div class="auth-form-wrap">
        <button class="back-btn" onclick="go('home')">← Back to home</button>
        <div class="auth-form"><div class="eyebrow">WELCOME BACK</div><h1>Sign in</h1><p class="muted">Continue your learning journey.</p>
          <form onsubmit="event.preventDefault();go('home')">
            <label>Email address</label><input type="email" placeholder="you@example.com" required>
            <label>Password</label><input type="password" placeholder="Enter your password" required>
            <button class="primary-btn auth-submit">Sign in →</button>
          </form>
          <p class="auth-switch">New to Examora? <button onclick="go('register')">Create account</button></p>
        </div>
      </div>
    </div>
  `;
}

function renderRegister() {
  currentPage = 'register';
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-decoration"><div class="brand"><div class="brand-icon">E</div><span>examora<span class="brand-dot">.</span></span></div><div class="auth-art"><div class="auth-big">✧</div><h2>Make room for<br>new possibilities.</h2><p>Your learning journey begins with one small step.</p></div></div>
      <div class="auth-form-wrap">
        <button class="back-btn" onclick="go('home')">← Back to home</button>
        <div class="auth-form"><div class="eyebrow">JOIN THE COMMUNITY</div><h1>Create account</h1><p class="muted">Set up your student account.</p>
          <form onsubmit="event.preventDefault();go('login')">
            <label>Full name</label><input type="text" placeholder="Your name" required>
            <label>Email address</label><input type="email" placeholder="you@example.com" required>
            <label>Password</label><input type="password" placeholder="Create password" required>
            <button class="primary-btn auth-submit">Create account →</button>
          </form>
          <p class="auth-switch">Already a member? <button onclick="go('login')">Sign in</button></p>
        </div>
      </div>
    </div>
  `;
}

function renderAdmin() {
  currentPage = 'admin';
  app.innerHTML = layout(`
    <div class="page-title"><div class="eyebrow">ADMINISTRATION</div><h1>Admin overview</h1><p>Examora platform summary.</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon purple">▤</div><span>Available exams</span><strong>05</strong><small>Active assessments</small></div>
      <div class="stat-card"><div class="stat-icon blue">◷</div><span>Local attempts</span><strong>${results.length}</strong><small>On this browser</small></div>
      <div class="stat-card"><div class="stat-icon green">✓</div><span>Questions</span><strong>50</strong><small>Across five exams</small></div>
      <div class="stat-card"><div class="stat-icon pink">✦</div><span>Platform</span><strong>Live</strong><small>Frontend preview</small></div>
    </div>
    <div class="section-heading"><div><h2>Exam library</h2><p>Current assessments.</p></div></div>
    <div class="results-list">${exams.map(e => `<div class="result-row"><div class="exam-icon ${e.color}">${e.icon}</div><div class="result-info"><strong>${e.title}</strong><small>${e.questions} questions · ${e.duration} minutes</small></div><span class="status-badge">Active</span></div>`).join('')}</div>
  `, 'admin');
}

function go(page) {
  clearInterval(timerInterval);
  currentPage = page;
  render();
  window.scrollTo(0, 0);
}

window.go = go;
window.startExam = startExam;
window.filterExams = filterExams;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.submitExam = submitExam;

render();