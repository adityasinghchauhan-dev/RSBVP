// ================================
// SUBJECTS
// ================================

const SUBJECTS = {
    Mathematics: {
        emoji: '📐',
        desc: 'Logic, numbers & problem-solving',
        topics: ['Algebra', 'Trigonometry', 'Sets', 'Probability']
    },

    Physics: {
        emoji: '⚛️',
        desc: 'Understand the physical world',
        topics: ['Motion', 'Work & Energy', 'Units & Measurement', 'Waves']
    },

    Chemistry: {
        emoji: '🧪',
        desc: 'Matter, reactions & structure',
        topics: ['Atomic Structure', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium']
    },

    'Computer Science': {
        emoji: '💻',
        desc: 'Programming & computational thinking',
        topics: ['Python Basics', 'Conditionals', 'Loops', 'Lists']
    }
};

// ================================
// QUESTION BANK
// ================================

const BANK = [

    // MATHEMATICS — ALGEBRA

    {
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'easy',
        q: 'If 3x + 5 = 20, what is x?',
        opts: ['3', '5', '7', '10'],
        a: 1,
        exp: 'Subtract 5 from both sides: 3x = 15. Divide by 3, so x = 5.'
    },

    {
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'medium',
        q: 'Which is the factorization of x² − 9?',
        opts: [
            '(x − 9)(x + 1)',
            '(x − 3)(x + 3)',
            '(x − 3)²',
            'x(x − 9)'
        ],
        a: 1,
        exp: 'It is a difference of squares: x² − 3² = (x − 3)(x + 3).'
    },

    {
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'hard',
        q: 'If 2x + y = 7 and x − y = 2, find x.',
        opts: ['1', '2', '3', '4'],
        a: 2,
        exp: 'Add the equations: 3x = 9, so x = 3.'
    },

    // MATHEMATICS — TRIGONOMETRY

    {
        subject: 'Mathematics',
        topic: 'Trigonometry',
        difficulty: 'easy',
        q: 'What is sin 30°?',
        opts: ['0', '1/2', '√3/2', '1'],
        a: 1,
        exp: 'The standard value of sin 30° is 1/2.'
    },

    {
        subject: 'Mathematics',
        topic: 'Trigonometry',
        difficulty: 'medium',
        q: 'Which identity is correct?',
        opts: [
            'sin²θ − cos²θ = 1',
            'sinθ + cosθ = 1',
            'sin²θ + cos²θ = 1',
            'tanθ = sinθ + cosθ'
        ],
        a: 2,
        exp: 'The fundamental identity is sin²θ + cos²θ = 1.'
    },

    {
        subject: 'Mathematics',
        topic: 'Trigonometry',
        difficulty: 'hard',
        q: 'If tan θ = 3/4 and θ is acute, what is sin θ?',
        opts: ['3/5', '4/5', '3/4', '5/3'],
        a: 0,
        exp: 'Using a 3-4-5 triangle, opposite = 3 and hypotenuse = 5, so sin θ = 3/5.'
    },

    // MATHEMATICS — SETS

    {
        subject: 'Mathematics',
        topic: 'Sets',
        difficulty: 'easy',
        q: 'Which symbol means “is an element of”?',
        opts: ['⊆', '∩', '∈', '∪'],
        a: 2,
        exp: 'The symbol ∈ means belongs to or is an element of a set.'
    },

    {
        subject: 'Mathematics',
        topic: 'Sets',
        difficulty: 'medium',
        q: 'If A={1,2,3} and B={3,4}, what is A ∩ B?',
        opts: ['{1,2,4}', '{3}', '{1,2,3,4}', '∅'],
        a: 1,
        exp: 'Intersection contains elements common to both sets. Only 3 is common.'
    },

    // MATHEMATICS — PROBABILITY

    {
        subject: 'Mathematics',
        topic: 'Probability',
        difficulty: 'easy',
        q: 'A fair coin is tossed once. Probability of getting heads?',
        opts: ['0', '1/4', '1/2', '1'],
        a: 2,
        exp: 'There are two equally likely outcomes, and one is heads: 1/2.'
    },

    {
        subject: 'Mathematics',
        topic: 'Probability',
        difficulty: 'medium',
        q: 'A die is rolled. What is the probability of getting an even number?',
        opts: ['1/6', '1/3', '1/2', '2/3'],
        a: 2,
        exp: 'Even outcomes are 2, 4 and 6: 3 out of 6, or 1/2.'
    },

    // PHYSICS — MOTION

    {
        subject: 'Physics',
        topic: 'Motion',
        difficulty: 'easy',
        q: 'The SI unit of speed is:',
        opts: ['km/h', 'm/s', 'm/s²', 'N'],
        a: 1,
        exp: 'Speed is distance divided by time. Its SI unit is metre per second (m/s).'
    },

    {
        subject: 'Physics',
        topic: 'Motion',
        difficulty: 'medium',
        q: 'A body changes velocity from 4 m/s to 10 m/s in 3 s. Its acceleration is:',
        opts: ['2 m/s²', '3 m/s²', '6 m/s²', '14 m/s²'],
        a: 0,
        exp: 'a = (10 − 4)/3 = 2 m/s².'
    },

    {
        subject: 'Physics',
        topic: 'Motion',
        difficulty: 'hard',
        q: 'A body starts from rest and accelerates at 2 m/s² for 5 s. Distance travelled?',
        opts: ['10 m', '20 m', '25 m', '50 m'],
        a: 2,
        exp: 's = ut + ½at² = 0 + ½(2)(25) = 25 m.'
    },

    // PHYSICS — WORK AND ENERGY

    {
        subject: 'Physics',
        topic: 'Work & Energy',
        difficulty: 'easy',
        q: 'Work is done when a force causes:',
        opts: ['Only heat', 'Displacement', 'Mass change', 'No movement'],
        a: 1,
        exp: 'In physics, work is done when force produces displacement in its direction (or a component of it).'
    },

    {
        subject: 'Physics',
        topic: 'Work & Energy',
        difficulty: 'medium',
        q: 'The SI unit of work is:',
        opts: ['Watt', 'Newton', 'Joule', 'Pascal'],
        a: 2,
        exp: 'Work and energy are measured in joules (J).'
    },

    // PHYSICS — UNITS

    {
        subject: 'Physics',
        topic: 'Units & Measurement',
        difficulty: 'easy',
        q: 'Which is an SI base unit of length?',
        opts: ['Centimetre', 'Kilometre', 'Metre', 'Foot'],
        a: 2,
        exp: 'The metre (m) is the SI base unit for length.'
    },

    {
        subject: 'Physics',
        topic: 'Units & Measurement',
        difficulty: 'medium',
        q: 'How many significant figures are in 0.00450?',
        opts: ['2', '3', '4', '5'],
        a: 1,
        exp: 'Leading zeros are not significant; 4, 5 and the final zero are significant: 3.'
    },

    // PHYSICS — WAVES

    {
        subject: 'Physics',
        topic: 'Waves',
        difficulty: 'easy',
        q: 'Frequency is measured in:',
        opts: ['Metres', 'Hertz', 'Joules', 'Seconds'],
        a: 1,
        exp: 'Frequency is measured in hertz (Hz), equivalent to cycles per second.'
    },

    // CHEMISTRY — ATOMIC STRUCTURE

    {
        subject: 'Chemistry',
        topic: 'Atomic Structure',
        difficulty: 'easy',
        q: 'Which particle has a negative charge?',
        opts: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
        a: 2,
        exp: 'Electrons carry a negative electric charge.'
    },

    {
        subject: 'Chemistry',
        topic: 'Atomic Structure',
        difficulty: 'medium',
        q: 'Atomic number is equal to the number of:',
        opts: ['Neutrons', 'Protons', 'Nucleons', 'Shells'],
        a: 1,
        exp: 'Atomic number is the number of protons in the nucleus.'
    },

    // CHEMISTRY — BONDING

    {
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        difficulty: 'easy',
        q: 'An ionic bond generally forms by:',
        opts: [
            'Sharing electrons',
            'Transfer of electrons',
            'Sharing protons',
            'Merging nuclei'
        ],
        a: 1,
        exp: 'An ionic bond results from electron transfer and electrostatic attraction between ions.'
    },

    {
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        difficulty: 'medium',
        q: 'A covalent bond involves:',
        opts: [
            'Electron sharing',
            'Only neutron transfer',
            'Proton loss',
            'No electrons'
        ],
        a: 0,
        exp: 'Covalent bonds form when atoms share electron pairs.'
    },

    // CHEMISTRY — THERMODYNAMICS

    {
        subject: 'Chemistry',
        topic: 'Thermodynamics',
        difficulty: 'easy',
        q: 'For an exothermic process, heat is generally:',
        opts: [
            'Absorbed by system',
            'Released by system',
            'Always zero',
            'Converted to mass only'
        ],
        a: 1,
        exp: 'An exothermic process releases heat to its surroundings.'
    },

    {
        subject: 'Chemistry',
        topic: 'Thermodynamics',
        difficulty: 'medium',
        q: 'At constant pressure, heat exchanged is equal to change in:',
        opts: [
            'Internal energy only',
            'Enthalpy',
            'Entropy only',
            'Volume only'
        ],
        a: 1,
        exp: 'At constant pressure (with appropriate conditions), qₚ = ΔH.'
    },

    // CHEMISTRY — EQUILIBRIUM

    {
        subject: 'Chemistry',
        topic: 'Equilibrium',
        difficulty: 'easy',
        q: 'At dynamic equilibrium in a reversible reaction:',
        opts: [
            'Both reactions stop',
            'Forward and reverse rates are equal',
            'Only products form',
            'Concentrations must be equal'
        ],
        a: 1,
        exp: 'The forward and reverse reactions continue at equal rates.'
    },

    // COMPUTER SCIENCE — PYTHON

    {
        subject: 'Computer Science',
        topic: 'Python Basics',
        difficulty: 'easy',
        q: 'What is the output of print(2 + 3 * 4)?',
        opts: ['20', '14', '24', '9'],
        a: 1,
        exp: 'Multiplication happens before addition: 2 + 12 = 14.'
    },

    {
        subject: 'Computer Science',
        topic: 'Python Basics',
        difficulty: 'medium',
        q: 'Which data type is the value 3.14?',
        opts: ['int', 'str', 'float', 'bool'],
        a: 2,
        exp: 'A number containing a decimal point is a float in Python.'
    },

    // COMPUTER SCIENCE — CONDITIONALS

    {
        subject: 'Computer Science',
        topic: 'Conditionals',
        difficulty: 'easy',
        q: 'Which keyword checks another condition after if?',
        opts: ['else if', 'elif', 'then', 'check'],
        a: 1,
        exp: 'Python uses elif for another conditional branch.'
    },

    {
        subject: 'Computer Science',
        topic: 'Conditionals',
        difficulty: 'medium',
        q: 'What does this print? x=8; if x>5: print("Yes")',
        opts: ['No', 'Yes', '8', 'Error'],
        a: 1,
        exp: 'Since 8 is greater than 5, the condition is true and Yes is printed.'
    },

    // COMPUTER SCIENCE — LOOPS

    {
        subject: 'Computer Science',
        topic: 'Loops',
        difficulty: 'easy',
        q: 'Which loop is commonly used to iterate over items in a sequence?',
        opts: ['repeat', 'foreach', 'for', 'loop'],
        a: 2,
        exp: 'Python’s for loop iterates over items in a sequence or iterable.'
    },

    {
        subject: 'Computer Science',
        topic: 'Loops',
        difficulty: 'medium',
        q: 'How many times does range(4) produce a value?',
        opts: ['3', '4', '5', '0'],
        a: 1,
        exp: 'range(4) produces 0, 1, 2, 3 — four values.'
    },

    // COMPUTER SCIENCE — LISTS

    {
        subject: 'Computer Science',
        topic: 'Lists',
        difficulty: 'easy',
        q: 'Which brackets are used to create a Python list?',
        opts: ['()', '{}', '[]', '<>'],
        a: 2,
        exp: 'Python lists are written using square brackets.'
    },

    {
        subject: 'Computer Science',
        topic: 'Lists',
        difficulty: 'medium',
        q: 'If a=[10,20,30], what is a[1]?',
        opts: ['10', '20', '30', '1'],
        a: 1,
        exp: 'Python indexing starts at 0, so index 1 refers to the second item: 20.'
    }

];

// ================================
// DATA STORAGE
// ================================

const STORAGE = 'learnai_demo_v1';

let data = load();

let selectedSubject = 'Mathematics';
let selectedTopics = [];
let session = null;
let toastTimer;

function fresh() {
    return {
        name: 'Student',
        mastery: {},
        history: [],
        lastDates: []
    };
}

function load() {
    try {
        return Object.assign(
            fresh(),
            JSON.parse(localStorage.getItem(STORAGE) || '{}')
        );
    } catch {
        return fresh();
    }
}

function save() {
    localStorage.setItem(STORAGE, JSON.stringify(data));
}

function key(subject, topic) {
    return subject + '|' + topic;
}

function mastery(subject, topic) {
    return data.mastery[key(subject, topic)] ?? 0.35;
}

function setMastery(subject, topic, value) {
    data.mastery[key(subject, topic)] =
        Math.max(0, Math.min(1, value));
}

function pct(value) {
    return Math.round(value * 100);
}

function esc(text) {
    return String(text).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[character]));
}

// ================================
// NAVIGATION
// ================================

function go(page) {

    document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === page);
    });

    document.querySelectorAll('.nav button').forEach(button => {
        button.classList.toggle(
            'active',
            button.dataset.page === page
        );
    });

    if (page === 'dashboard') renderDashboard();
    if (page === 'learn') renderLearn();
    if (page === 'progress') renderProgress();
    if (page === 'studyplan') buildPlan();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.nav button').forEach(button => {
    button.addEventListener('click', () => {
        go(button.dataset.page);
    });
});

// ================================
// PROFILE
// ================================

function openProfile() {
    document.getElementById('nameInput').value = data.name || '';
    document.getElementById('profileModal').classList.add('show');
}

function closeProfile() {
    document.getElementById('profileModal').classList.remove('show');
}

function saveProfile() {
    let name = document.getElementById('nameInput').value.trim();

    if (name) {
        data.name = name;
    }

    save();
    closeProfile();
    renderDashboard();
    toast('Profile saved');
}

// ================================
// SUBJECT RENDERING
// ================================

function renderSubjects(element, selectMode = false) {

    element.innerHTML = Object.entries(SUBJECTS)
        .map(([subject, object]) => {

            return `
                <div class="subject
                    ${selectMode && subject === selectedSubject ? 'selected' : ''}"
                    ${selectMode ? `onclick="selectSubject('${subject}')"` : ''}>

                    <div class="emoji">${object.emoji}</div>

                    <h3>${subject}</h3>

                    <p>${object.desc}</p>

                    ${!selectMode ? `
                        <div class="progress">
                            <span style="width:${subjectMastery(subject)}%"></span>
                        </div>

                        <p>${subjectMastery(subject)}% estimated mastery</p>
                    ` : ''}

                </div>
            `;
        })
        .join('');
}

function subjectMastery(subject) {
    let topics = SUBJECTS[subject].topics;

    return Math.round(
        topics.reduce((total, topic) => {
            return total + mastery(subject, topic);
        }, 0) / topics.length * 100
    );
}

function allTopics() {
    return Object.entries(SUBJECTS).flatMap(([subject, object]) =>
        object.topics.map(topic => ({
            s: subject,
            t: topic
        }))
    );
}

// ================================
// DASHBOARD
// ================================

function renderDashboard() {

    document.getElementById('welcome').textContent =
        `Welcome back, ${data.name || 'Student'} 👋`;

    document.getElementById('profileName').textContent =
        data.name || 'Student';

    document.getElementById('avatar').textContent =
        (data.name || 'S').trim().charAt(0).toUpperCase();

    let values = allTopics().map(x => mastery(x.s, x.t));

    document.getElementById('overall').textContent =
        pct(values.reduce((a, b) => a + b, 0) / values.length) + '%';

    document.getElementById('quizCount').textContent =
        data.history.length;

    document.getElementById('weakCount').textContent =
        values.filter(v => v < 0.6).length;

    document.getElementById('streak').textContent =
        calcStreak() + ' day' + (calcStreak() === 1 ? '' : 's');

    renderSubjects(document.getElementById('subjects'));

    let topics = allTopics()
        .sort((a, b) => mastery(a.s, a.t) - mastery(b.s, b.t))
        .slice(0, 5);

    document.getElementById('masteryPreview').innerHTML =
        topics.map(x => `
            <div class="topic-row">

                <div class="topic-line">
                    <span>${esc(x.t)}</span>
                    <small>${pct(mastery(x.s, x.t))}%</small>
                </div>

                <div class="progress">
                    <span style="width:${pct(mastery(x.s, x.t))}%"></span>
                </div>

            </div>
        `).join('');

    let recent = data.history.slice(-4).reverse();

    document.getElementById('recent').innerHTML = recent.length
        ? `
            <div class="activity">
                ${recent.map(h => `
                    <div class="activity-item">

                        <div class="activity-icon">📝</div>

                        <div>
                            <strong>${esc(h.subject)} · ${h.score}/${h.total}</strong>
                            <small>${esc(h.date)} · ${h.topics.join(', ')}</small>
                        </div>

                    </div>
                `).join('')}
            </div>
        `
        : `
            <div class="empty">
                No quiz sessions yet. Start your first quiz to see activity here.
            </div>
        `;
}

// ================================
// LEARNING STREAK
// ================================

function calcStreak() {

    let days = [...new Set(data.history.map(h => h.iso))]
        .sort()
        .reverse();

    if (!days.length) return 0;

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let todayIso = today.toISOString().slice(0, 10);

    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let yesterdayIso = yesterday.toISOString().slice(0, 10);

    if (days[0] !== todayIso && days[0] !== yesterdayIso) {
        return 0;
    }

    let streak = 0;
    let current = new Date(days[0] + 'T00:00:00');

    for (let day of days) {

        let date = new Date(day + 'T00:00:00');

        if (Math.round((current - date) / 86400000) === streak) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

// ================================
// LEARNING PAGE
// ================================

function renderLearn() {
    renderSubjects(
        document.getElementById('subjectSelect'),
        true
    );

    renderTopicChecks();
}

function selectSubject(subject) {
    selectedSubject = subject;
    selectedTopics = SUBJECTS[subject].topics.slice();
    renderLearn();
}

function renderTopicChecks() {

    let topics = SUBJECTS[selectedSubject].topics;

    if (!selectedTopics.length) {
        selectedTopics = topics.slice();
    }

    document.getElementById('topicChecks').innerHTML =
        topics.map(topic => `
            <label>

                <input type="checkbox"
                    ${selectedTopics.includes(topic) ? 'checked' : ''}
                    onchange="toggleTopic('${topic}', this.checked)">

                <span>${esc(topic)}</span>

                <span style="margin-left:auto;color:var(--muted)">
                    ${pct(mastery(selectedSubject, topic))}% mastery
                </span>

            </label>
        `).join('');
}

function toggleTopic(topic, on) {

    if (on && !selectedTopics.includes(topic)) {
        selectedTopics.push(topic);
    }

    if (!on) {
        selectedTopics = selectedTopics.filter(x => x !== topic);
    }
}

function toggleTopics(on) {
    selectedTopics = on
        ? SUBJECTS[selectedSubject].topics.slice()
        : [];

    renderTopicChecks();
}

// ================================
// ADAPTIVE QUESTION SELECTION
// ================================

function chooseQuestion(pool) {

    if (!pool.length) return null;

    let weighted = pool.map(question => {

        let m = mastery(question.subject, question.topic);

        let difficulty = question.difficulty === 'easy'
            ? 0.25
            : question.difficulty === 'medium'
                ? 0.5
                : 0.75;

        let weight =
            1 + Math.abs(m - difficulty) * 1.4 +
            (m < 0.55 && question.difficulty !== 'easy' ? -0.2 : 0);

        return {
            q: question,
            w: Math.max(0.1, weight)
        };
    });

    let total = weighted.reduce((sum, item) => sum + item.w, 0);

    let random = Math.random() * total;

    for (let item of weighted) {
        random -= item.w;

        if (random <= 0) {
            return item.q;
        }
    }

    return weighted[0].q;
}

// ================================
// START QUIZ
// ================================

function startQuiz() {

    if (!selectedTopics.length) {
        toast('Choose at least one topic');
        return;
    }

    let pool = BANK.filter(question =>
        question.subject === selectedSubject &&
        selectedTopics.includes(question.topic)
    );

    if (!pool.length) {
        toast('No sample questions for these topics yet');
        return;
    }

    let count = Math.min(
        +document.getElementById('quizLength').value,
        pool.length
    );

    session = {
        subject: selectedSubject,
        topics: selectedTopics.slice(),
        pool: pool.slice(),
        count: count,
        idx: 0,
        answers: [],
        current: null,
        locked: false
    };

    go('quiz');
    renderQuestion();
}

// ================================
// DISPLAY QUESTION
// ================================

function renderQuestion() {

    let question = chooseQuestion(session.pool);

    session.current = question;
    session.locked = false;

    document.getElementById('qTopic').textContent =
        question.topic;

    let difficulty = document.getElementById('qDifficulty');

    difficulty.textContent =
        question.difficulty[0].toUpperCase() +
        question.difficulty.slice(1);

    difficulty.className = 'tag ' + question.difficulty;

    document.getElementById('qText').textContent =
        question.q;

    document.getElementById('qNumber').textContent =
        `${session.idx + 1} / ${session.count}`;

    document.getElementById('qProgress').style.width =
        (session.idx / session.count * 100) + '%';

    document.getElementById('quizTitle').textContent =
        session.subject + ' · Adaptive practice';

    document.getElementById('options').innerHTML =
        question.opts.map((option, i) => `
            <button class="option" onclick="answer(${i})">
                <span class="letter">${'ABCD'[i]}</span>
                ${esc(option)}
            </button>
        `).join('');

    let feedback = document.getElementById('feedback');

    feedback.className = 'feedback';
    feedback.textContent = '';

    document.getElementById('nextBtn').disabled = true;

    document.getElementById('nextBtn').textContent =
        session.idx === session.count - 1
            ? 'Finish quiz'
            : 'Next question →';

    document.getElementById('qHint').textContent =
        'Choose the best answer.';
}

// ================================
// CHECK ANSWER
// ================================

function answer(index) {

    if (session.locked) return;

    session.locked = true;

    let question = session.current;
    let correct = index === question.a;

    session.answers.push({
        q: question,
        chosen: index,
        correct
    });

    document.querySelectorAll('.option').forEach((button, i) => {

        button.disabled = true;

        if (i === question.a) {
            button.classList.add('correct');
        }

        if (i === index && !correct) {
            button.classList.add('wrong');
        }
    });

    let feedback = document.getElementById('feedback');

    feedback.className =
        'feedback show ' + (correct ? 'good' : 'bad');

    feedback.textContent =
        (correct ? 'Correct! ' : 'Not quite. ') + question.exp;

    document.getElementById('nextBtn').disabled = false;

    updateMastery(question, correct);
}

// ================================
// AI MASTERY UPDATE
// Bayesian Knowledge Tracing
// ================================

function updateMastery(question, correct) {

    let old = mastery(question.subject, question.topic);

    let guess = 0.2;
    let slip = 0.1;
    let learn = 0.12;

    let prior = old;

    let posterior;

    if (correct) {

        posterior =
            (prior * (1 - slip)) /
            (prior * (1 - slip) + (1 - prior) * guess);

    } else {

        posterior =
            (prior * slip) /
            (prior * slip + (1 - prior) * (1 - guess);
    }

    let updated = posterior + (1 - posterior) * learn;

    setMastery(question.subject, question.topic, updated);
}

// ================================
// NEXT QUESTION
// ================================

function nextQuestion() {

    if (!session.locked) return;

    session.idx++;

    if (session.idx >= session.count) {
        finishQuiz();
        return;
    }

    renderQuestion();
}

// ================================
// FINISH QUIZ
// ================================

function finishQuiz() {

    let answers = session.answers;

    let correct = answers.filter(a => a.correct).length;

    let topics = session.topics;

    let date = new Date();

    let historyEntry = {
        subject: session.subject,
        topics: topics.slice(),
        score: correct,
        total: answers.length,
        date: date.toLocaleDateString(),
        iso: date.toISOString().slice(0, 10),
        answers: answers.map(a => ({
            topic: a.q.topic,
            correct: a.correct,
            difficulty: a.q.difficulty
        }))
    };

    data.history.push(historyEntry);

    save();

    document.getElementById('resultScore').textContent =
        `${correct}/${answers.length}`;

    let score = correct / answers.length;

    document.getElementById('resultMessage').textContent =
        score >= 0.8
            ? 'Excellent work! Keep challenging yourself.'
            : score >= 0.5
                ? 'Good effort. Let’s strengthen a few concepts.'
                : 'This is a useful starting point. Your learning path will focus on the fundamentals.';

    document.getElementById('resultBar').style.width =
        pct(score) + '%';

    document.getElementById('resultSub').textContent =
        pct(score) + '% correct in this quiz';

    let byTopic = topics.map(topic => ({
        t: topic,
        v: mastery(session.subject, topic)
    })).sort((a, b) => a.v - b.v);

    document.getElementById('resultTopics').innerHTML =
        byTopic.map(x => `
            <div class="topic-row">

                <div class="topic-line">
                    <span>${esc(x.t)}</span>
                    <small>${pct(x.v)}%</small>
                </div>

                <div class="progress">
                    <span style="width:${pct(x.v)}%"></span>
                </div>

            </div>
        `).join('');

    document.getElementById('resultPlan').innerHTML =
        makePlan(session.subject, topics)
            .slice(0, 3)
            .map((plan, i) => `
                <div class="plan-item">

                    <div class="plan-num">${i + 1}</div>

                    <div>
                        <b>${esc(plan.title)}</b>

                        <div class="note" style="margin-top:4px">
                            ${esc(plan.desc)}
                        </div>
                    </div>

                </div>
            `).join('');

    go('results');

    session = null;

    renderDashboard();
}

// ================================
// EXIT QUIZ
// ================================

function quitQuiz() {

    if (confirm('Exit this quiz? Your unfinished answers will not be saved.')) {
        session = null;
        go('learn');
    }
}

// ================================
// PERSONALIZED STUDY PLAN
// ================================

function makePlan(subject, topics) {

    return topics.map(topic => {

        let m = mastery(subject, topic);

        let title =
            m < 0.4
                ? `Rebuild the basics: ${topic}`
                : m < 0.65
                    ? `Practice ${topic}`
                    : m < 0.85
                        ? `Strengthen ${topic}`
                        : `Challenge yourself in ${topic}`;

        let desc =
            m < 0.4
                ? 'Review a short concept lesson, then solve 3 easy questions.'
                : m < 0.65
                    ? 'Study worked examples and try 5 medium questions.'
                    : m < 0.85
                        ? 'Try mixed questions and explain your reasoning.'
                        : 'Try advanced questions and revisit this topic next week.';

        return {
            t: topic,
            m,
            title,
            desc
        };

    }).sort((a, b) => a.m - b.m);
}

// ================================
// FULL LEARNING PATH
// ================================

function buildPlan() {

    let all = allTopics()
        .map(x => ({
            s: x.s,
            t: x.t,
            m: mastery(x.s, x.t)
        }))
        .sort((a, b) => a.m - b.m);

    document.getElementById('fullPlan').innerHTML =
        all.map((x, i) => {

            let plan = makePlan(x.s, [x.t])[0];

            return `
                <div class="plan-item">

                    <div class="plan-num">${i + 1}</div>

                    <div style="flex:1">

                        <b>${esc(x.s)} · ${esc(x.t)}</b>

                        <div class="progress">
                            <span style="width:${pct(x.m)}%"></span>
                        </div>

                        <div class="note">
                            Estimated mastery ${pct(x.m)}% · ${esc(plan.desc)}
                        </div>

                    </div>

                </div>
            `;

        }).join('');
}

// ================================
// PROGRESS PAGE
// ================================

function renderProgress() {

    let all = allTopics();

    document.getElementById('progressBars').innerHTML =
        all.map(x => `
            <div class="topic-row">

                <div class="topic-line">
                    <span>${esc(x.s)} · ${esc(x.t)}</span>
                    <small>${pct(mastery(x.s, x.t))}%</small>
                </div>

                <div class="progress">
                    <span style="width:${pct(mastery(x.s, x.t))}%"></span>
                </div>

            </div>
        `).join('');

    let history = data.history.slice().reverse();

    document.getElementById('history').innerHTML =
        history.length
            ? `
                <table class="table">

                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${history.slice(0, 10).map(h => `
                            <tr>
                                <td>${esc(h.subject)}</td>
                                <td>${h.score}/${h.total}</td>
                                <td>${esc(h.date)}</td>
                            </tr>
                        `).join('')}
                    </tbody>

                </table>
            `
            : `
                <div class="empty">
                    Quiz history will appear here.
                </div>
            `;

    let recent = data.history.slice(-7);

    document.getElementById('trendChart').innerHTML =
        recent.length
            ? recent.map(h => {

                let value = h.score / h.total * 100;

                return `
                    <div class="barwrap">

                        <div class="barvalue">
                            ${Math.round(value)}%
                        </div>

                        <div class="bar" style="height:${Math.max(4, value)}%"></div>

                        <div class="barlabel">
                            ${esc(h.date.split('/').slice(0, 2).join('/'))}
                        </div>

                    </div>
                `;

            }).join('')
            : `
                <div class="empty">
                    Complete quizzes to build your trend chart.
                </div>
            `;
}

// ================================
// EXPORT DATA
// ================================

function exportData() {

    let blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
    );

    let a = document.createElement('a');

    a.href = URL.createObjectURL(blob);
    a.download = 'learnai-progress.json';

    a.click();

    URL.revokeObjectURL(a.href);

    toast('Progress exported');
}

// ================================
// RESET DATA
// ================================

function resetData() {

    if (confirm('Reset all LearnAI progress and profile data saved in this browser?')) {

        data = fresh();

        save();

        renderDashboard();
        renderProgress();
        buildPlan();

        toast('Progress reset');
    }
}

// ================================
// TOAST MESSAGE
// ================================

function toast(message) {

    let element = document.getElementById('toast');

    element.textContent = message;

    element.classList.add('show');

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        element.classList.remove('show');
    }, 2400);
}

// ================================
// INITIALIZE APP
// ================================

renderDashboard();
renderLearn();
buildPlan();