/* Execom Data divided Chapter-Wise with React Bits ProfileCard 3D Tilt Engine Integration */

const chapterData = [
  {
    id: "sb",
    name: "IEEE MBITS SB",
    badge: "STUDENT BRANCH"
  },
  {
    id: "sps",
    name: "IEEE SPS SBC",
    badge: "SIGNAL PROCESSING"
  },
  {
    id: "cs",
    name: "IEEE CS SBC",
    badge: "COMPUTER SOCIETY"
  },
  {
    id: "wie",
    name: "IEEE WIE AG",
    badge: "WOMEN IN ENGINEERING"
  },
  {
    id: "cass",
    name: "IEEE CASS SBC",
    badge: "CIRCUITS & SYSTEMS"
  },
  {
    id: "sensors",
    name: "IEEE Sensors Council",
    badge: "SENSORS COUNCIL"
  }
];

const membersList = [
  {
    "chapterId": "sb",
    "name": "Prof. Minu Mary Joy",
    "role": "Student Branch Counselor",
    "photo": "./execom/minu.png",
    "linkedin": "https://www.linkedin.com/in/minu-joy-32304312a",
    "ieeeId": "98522526",
    "instagram": "",
    "tag": "SB Counselor"
  },
  {
    "chapterId": "sb",
    "name": "Tisa Tijo",
    "role": "Student Branch Chair",
    "photo": "./execom/tisa.png",
    "linkedin": "https://www.linkedin.com/in/tisa-tijo-ab3068291",
    "ieeeId": "99897081",
    "instagram": "https://www.instagram.com/tisa_tijo",
    "tag": "Chair"
  },
  {
    "chapterId": "sb",
    "name": "Ceeya Sarah Varghese",
    "role": "Student Branch Vice Chair",
    "photo": "./execom/ceeya.png",
    "linkedin": "https://www.linkedin.com/in/ceeya-sarah-varghese",
    "ieeeId": "100475335",
    "instagram": "https://www.instagram.com/_cee.yaa_",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "sb",
    "name": "Jaison P S",
    "role": "Student Branch Secretary",
    "photo": "./execom/jaison.png",
    "linkedin": "",
    "ieeeId": "101807826",
    "instagram": "",
    "tag": "Secretary"
  },
  {
    "chapterId": "sb",
    "name": "Manna Elsa Thomas Mannil",
    "role": "Student Branch Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "sb",
    "name": "Nadir K Muhammad Shafi",
    "role": "Student Branch Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "sb",
    "name": "Albin Eldose",
    "role": "Project Coordinator",
    "photo": "./execom/albin.png",
    "linkedin": "https://www.linkedin.com/in/albin-eldose-32b249227",
    "ieeeId": "99897401",
    "instagram": "https://www.instagram.com/___albine",
    "tag": "Project Coordinator"
  },
  {
    "chapterId": "sb",
    "name": "Ebin C Biju",
    "role": "Technical Coordinator",
    "photo": "./execom/ebin.png",
    "linkedin": "https://www.linkedin.com/in/ebin-c-biju-55816a291",
    "ieeeId": "101807740",
    "instagram": "",
    "tag": "Technical Coordinator"
  },
  {
    "chapterId": "sb",
    "name": "Jovan Shaji",
    "role": "Technical Coordinator",
    "photo": "./execom/jovan.png",
    "linkedin": "https://www.linkedin.com/in/jovanshaji",
    "ieeeId": "100475275",
    "instagram": "https://www.instagram.com/jovan.shaji",
    "tag": "Technical Coordinator"
  },
  {
    "chapterId": "sb",
    "name": "Noel P Sony",
    "role": "Membership Development Coordinator",
    "photo": "./execom/noel.png",
    "linkedin": "https://www.linkedin.com/in/noel-p-sony-4aa08037a",
    "ieeeId": "101585841",
    "instagram": "",
    "tag": "MDC"
  },
  {
    "chapterId": "sb",
    "name": "Sona Benson",
    "role": "Membership Development Coordinator",
    "photo": "./execom/sona.png",
    "linkedin": "https://www.linkedin.com/in/sona-benson-603313419",
    "ieeeId": "102305699",
    "instagram": "https://www.instagram.com/_celine_sona_",
    "tag": "MDC"
  },
  {
    "chapterId": "sb",
    "name": "Adwaith K S",
    "role": "Media & Design",
    "photo": "./execom/adwaith.png",
    "linkedin": "https://www.linkedin.com/in/adwaith-sabu-47a565291",
    "ieeeId": "102227882",
    "instagram": "",
    "tag": "Media & Design"
  },
  {
    "chapterId": "sb",
    "name": "Albert Aji",
    "role": "Design",
    "photo": "./execom/albert.png",
    "linkedin": "https://www.linkedin.com/in/albert-aji-913704327",
    "ieeeId": "100475266",
    "instagram": "https://www.instagram.com/__.albert._____",
    "tag": "Design"
  },
  {
    "chapterId": "sb",
    "name": "Adithya Mohan",
    "role": "Media & Design",
    "photo": "./execom/adithya.png",
    "linkedin": "https://www.linkedin.com/in/adithya-mohan-336877323",
    "ieeeId": "100480466",
    "instagram": "https://www.instagram.com/adiithya.m",
    "tag": "Media & Design"
  },
  {
    "chapterId": "sps",
    "name": "Prof. Minu Mary Joy",
    "role": "SPS Chapter Advisor",
    "photo": "./execom/minu.png",
    "linkedin": "https://www.linkedin.com/in/minu-joy-32304312a",
    "ieeeId": "98522526",
    "instagram": "",
    "tag": "Chapter Advisor"
  },
  {
    "chapterId": "sps",
    "name": "Syno Shaji Kurian",
    "role": "SPS Chapter Chair",
    "photo": "./execom/syno.png",
    "linkedin": "https://www.linkedin.com/in/syno-shaji-kurian-50a069291",
    "ieeeId": "100085274",
    "instagram": "",
    "tag": "Chair"
  },
  {
    "chapterId": "sps",
    "name": "Anna Eldho",
    "role": "SPS Chapter Vice Chair",
    "photo": "./execom/anna.png",
    "linkedin": "https://www.linkedin.com/in/anna-eldho-a70666379",
    "ieeeId": "101601734",
    "instagram": "",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "sps",
    "name": "Anand S",
    "role": "SPS Chapter Secretary",
    "photo": "./execom/anand.png",
    "linkedin": "https://www.linkedin.com/in/anand-s-9a7a78284",
    "ieeeId": "100089463",
    "instagram": "",
    "tag": "Secretary"
  },
  {
    "chapterId": "sps",
    "name": "Manna Elsa Thomas Mannil",
    "role": "SPS Chapter Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "sps",
    "name": "Nadir K Muhammad Shafi",
    "role": "SPS Chapter Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "sps",
    "name": "Denna Benny",
    "role": "WiSPS Representative",
    "photo": "./execom/denna.png",
    "linkedin": "",
    "ieeeId": "100089466",
    "instagram": "",
    "tag": "Women in Signal Processing "
  },
  {
    "chapterId": "cs",
    "name": "Asst. Prof. Eldhose P SIM",
    "role": "CS Chapter Advisor",
    "photo": "./execom/eldhose.png",
    "linkedin": "",
    "ieeeId": "102554882",
    "instagram": "",
    "tag": "Chapter Advisor"
  },
  {
    "chapterId": "cs",
    "name": "Syno Shaji Kurian",
    "role": "CS Chapter Chair",
    "photo": "./execom/syno.png",
    "linkedin": "https://www.linkedin.com/in/syno-shaji-kurian-50a069291",
    "ieeeId": "100085274",
    "instagram": "",
    "tag": "Chair"
  },
  {
    "chapterId": "cs",
    "name": "Neswin Easter",
    "role": "CS Chapter Vice Chair",
    "photo": "./execom/neswin.png",
    "linkedin": "https://www.linkedin.com/in/neswin-easter-b49282379",
    "ieeeId": "101634509",
    "instagram": "https://www.instagram.com/its_me_neswin",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "cs",
    "name": "Alen Basil",
    "role": "CS Chapter Secretary",
    "photo": "./execom/alen.png",
    "linkedin": "https://www.linkedin.com/in/alen-basil-61a170291",
    "ieeeId": "100084448",
    "instagram": "",
    "tag": "Secretary"
  },
  {
    "chapterId": "cs",
    "name": "Manna Elsa Thomas Mannil",
    "role": "CS Chapter Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "cs",
    "name": "Nadir K Muhammad Shafi",
    "role": "CS Chapter Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "cs",
    "name": "Grace Mary Eldo",
    "role": "WiCS Representative",
    "photo": "./execom/grace.png",
    "linkedin": "https://www.linkedin.com/in/grace-mary-eldo-516124291",
    "ieeeId": "100086227",
    "instagram": "https://www.instagram.com/_g.raceee_",
    "tag": "Women in Computing"
  },
  {
    "chapterId": "wie",
    "name": "Prof. Minu Mary Joy",
    "role": "WIE Group Advisor",
    "photo": "./execom/minu.png",
    "linkedin": "https://www.linkedin.com/in/minu-joy-32304312a",
    "ieeeId": "98522526",
    "instagram": "",
    "tag": "Chapter Advisor"
  },
  {
    "chapterId": "wie",
    "name": "Denna Benny",
    "role": "WIE Group Chair",
    "photo": "./execom/denna.png",
    "linkedin": "",
    "ieeeId": "100089466",
    "instagram": "",
    "tag": "Chair"
  },
  {
    "chapterId": "wie",
    "name": "Krishnendu B Nair",
    "role": "WIE Group Vice Chair",
    "photo": "./execom/krishna.png",
    "linkedin": "https://www.linkedin.com/in/krishnendubnair",
    "ieeeId": "101585748",
    "instagram": "",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "wie",
    "name": "Ceeya Sarah Varghese",
    "role": "WIE Group Secretary",
    "photo": "./execom/ceeya.png",
    "linkedin": "https://www.linkedin.com/in/ceeya-sarah-varghese",
    "ieeeId": "100475335",
    "instagram": "https://www.instagram.com/_cee.yaa_",
    "tag": "Secretary"
  },
  {
    "chapterId": "wie",
    "name": "Manna Elsa Thomas Mannil",
    "role": "WIE Group Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "wie",
    "name": "Nadir K Muhammad Shafi",
    "role": "WIE Group Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "cass",
    "name": "Dr. Cisil Baby",
    "role": "CASS Chapter Advisor",
    "photo": "./execom/cisil.png",
    "linkedin": "",
    "ieeeId": "102223462",
    "instagram": "",
    "tag": "Chapter Advisor"
  },
  {
    "chapterId": "cass",
    "name": "Albin Eldose",
    "role": "CASS Chapter Chair",
    "photo": "./execom/albin.png",
    "linkedin": "https://www.linkedin.com/in/albin-eldose-32b249227",
    "ieeeId": "99897401",
    "instagram": "https://www.instagram.com/___albine",
    "tag": "Chair"
  },
  {
    "chapterId": "cass",
    "name": "Faniz Fathima P A",
    "role": "CASS Chapter Vice Chair",
    "photo": "./execom/faniz.png",
    "linkedin": "https://www.linkedin.com/in/faniz-fathima-p-a-b19782327",
    "ieeeId": "100475333",
    "instagram": "",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "cass",
    "name": "Afin Eldho Varghese",
    "role": "CASS Chapter Secretary",
    "photo": "./execom/afin.png",
    "linkedin": "https://www.linkedin.com/in/afi-eldho-a6b067291",
    "ieeeId": "100091943",
    "instagram": "",
    "tag": "Secretary"
  },
  {
    "chapterId": "cass",
    "name": "Sharon Martin",
    "role": "CASS Chapter Joint Secretary",
    "photo": "./execom/sharon.png",
    "linkedin": "https://www.linkedin.com/in/sharon-martin-baa12b340",
    "ieeeId": "102246994",
    "instagram": "",
    "tag": "Joint Secretary"
  },
  {
    "chapterId": "cass",
    "name": "Manna Elsa Thomas Mannil",
    "role": "CASS Chapter Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "cass",
    "name": "Nadir K Muhammad Shafi",
    "role": "CASS Chapter Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "cass",
    "name": "Krishnendu B Nair",
    "role": "WiCASS Representative",
    "photo": "./execom/krishna.png",
    "linkedin": "https://www.linkedin.com/in/krishnendubnair",
    "ieeeId": "101585748",
    "instagram": "",
    "tag": "Women in Circuits and Systems "
  },
  {
    "chapterId": "sensors",
    "name": "Prof. Sherin Thomas",
    "role": "Sensors Chapter Advisor",
    "photo": "./execom/sherin.png",
    "linkedin": "",
    "ieeeId": "101626571",
    "instagram": "",
    "tag": "Chapter Advisor"
  },
  {
    "chapterId": "sensors",
    "name": "Delna Mariya Saji",
    "role": "Sensors Chapter Chair",
    "photo": "./execom/delna.png",
    "linkedin": "https://www.linkedin.com/in/delna-mariya-saji-885959290",
    "ieeeId": "100071889",
    "instagram": "",
    "tag": "Chair"
  },
  {
    "chapterId": "sensors",
    "name": "Meldrin Mary T J",
    "role": "Sensors Chapter Vice Chair",
    "photo": "./execom/meldrin.png",
    "linkedin": "https://www.linkedin.com/in/meldrin-mary-t-j-a485a6350",
    "ieeeId": "101540315",
    "instagram": "",
    "tag": "Vice Chair"
  },
  {
    "chapterId": "sensors",
    "name": "Adarsh K Subash",
    "role": "Sensors Chapter Secretary",
    "photo": "./execom/adarsh.png",
    "linkedin": "https://www.linkedin.com/in/adarsh-k-subash-43b92a290",
    "ieeeId": "100089861",
    "instagram": "https://www.instagram.com/adarsh._vk18?igsh=cnhrZXo1bHZ1a3Zq",
    "tag": "Secretary"
  },
  {
    "chapterId": "sensors",
    "name": "Basil Joy",
    "role": "Sensors Chapter Joint Secretary",
    "photo": "./execom/basil.png",
    "linkedin": "https://www.linkedin.com/in/basil-joy-b97964274",
    "ieeeId": "101681141",
    "instagram": "https://www.instagram.com/___.basil._",
    "tag": "Joint Secretary"
  },
  {
    "chapterId": "sensors",
    "name": "Manna Elsa Thomas Mannil",
    "role": "Sensors Chapter Treasurer",
    "photo": "./execom/manna.png",
    "linkedin": "https://www.linkedin.com/in/manna-elsa-thomas-mannil-0a2a75327",
    "ieeeId": "101636329",
    "instagram": "https://www.instagram.com/manna_elsa_",
    "tag": "Treasurer"
  },
  {
    "chapterId": "sensors",
    "name": "Nadir K Muhammad Shafi",
    "role": "Sensors Chapter Webmaster",
    "photo": "./execom/nadir.png",
    "linkedin": "https://www.linkedin.com/in/nadhir-shafi-8a2a19276",
    "ieeeId": "102211314",
    "instagram": "https://www.instagram.com/nadhir_shafi",
    "tag": "Webmaster"
  },
  {
    "chapterId": "sensors",
    "name": "Jaison P S",
    "role": "Sensors Council Coordinator",
    "photo": "./execom/jaison.png",
    "linkedin": "",
    "ieeeId": "101807826",
    "instagram": "",
    "tag": "Council Coordinator"
  }
];

// REACT BITS TILT ENGINE UTILS
const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

class ProfileCardTiltEngine {
  constructor(wrapEl, shellEl) {
    this.wrap = wrapEl;
    this.shell = shellEl;
    this.rafId = null;
    this.running = false;
    this.lastTs = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.DEFAULT_TAU = 0.14;
    this.INITIAL_TAU = 0.6;
    this.initialUntil = 0;
  }

  setVarsFromXY(x, y) {
    if (!this.shell || !this.wrap) return;
    const width = this.shell.clientWidth || 1;
    const height = this.shell.clientHeight || 1;

    const percentX = clamp((100 / width) * x);
    const percentY = clamp((100 / height) * y);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const properties = {
      '--pointer-x': `${percentX}%`,
      '--pointer-y': `${percentY}%`,
      '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
      '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
      '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
      '--pointer-from-top': `${percentY / 100}`,
      '--pointer-from-left': `${percentX / 100}`,
      '--rotate-x': `${round(-(centerX / 5))}deg`,
      '--rotate-y': `${round(centerY / 4)}deg`
    };

    for (const [k, v] of Object.entries(properties)) {
      this.wrap.style.setProperty(k, v);
    }
  }

  step(ts) {
    if (!this.running) return;
    if (this.lastTs === 0) this.lastTs = ts;
    const dt = (ts - this.lastTs) / 1000;
    this.lastTs = ts;

    const tau = ts < this.initialUntil ? this.INITIAL_TAU : this.DEFAULT_TAU;
    const k = 1 - Math.exp(-dt / tau);

    this.currentX += (this.targetX - this.currentX) * k;
    this.currentY += (this.targetY - this.currentY) * k;

    this.setVarsFromXY(this.currentX, this.currentY);

    const stillFar = Math.abs(this.targetX - this.currentX) > 0.05 || Math.abs(this.targetY - this.currentY) > 0.05;

    if (stillFar || document.hasFocus()) {
      this.rafId = requestAnimationFrame(ts => this.step(ts));
    } else {
      this.running = false;
      this.lastTs = 0;
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTs = 0;
    this.rafId = requestAnimationFrame(ts => this.step(ts));
  }

  setImmediate(x, y) {
    this.currentX = x;
    this.currentY = y;
    this.setVarsFromXY(this.currentX, this.currentY);
  }

  setTarget(x, y) {
    this.targetX = x;
    this.targetY = y;
    this.start();
  }

  toCenter() {
    if (!this.shell) return;
    this.setTarget(this.shell.clientWidth / 2, this.shell.clientHeight / 2);
  }

  beginInitial(durationMs) {
    this.initialUntil = performance.now() + durationMs;
    this.start();
  }

  cancel() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.running = false;
    this.lastTs = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.getElementById('chapterTabs');
  const grid = document.getElementById('memberGrid');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  // React Bits ProfileCard DOM Refs
  const wrapRef = document.getElementById('pcCardWrapper');
  const shellRef = document.getElementById('pcCardShell');
  const modalAvatar = document.getElementById('modalAvatar');
  const modalMiniAvatar = document.getElementById('modalMiniAvatar');
  const modalName = document.getElementById('modalName');
  const modalTitle = document.getElementById('modalTitle');
  const modalHandle = document.getElementById('modalHandle');
  const modalStatus = document.getElementById('modalStatus');
  const linkLinkedin = document.getElementById('linkLinkedin');
  const linkInsta = document.getElementById('linkInsta');

  let currentChapter = "sb";
  let activeMembersList = [];
  let tiltEngine = null;

  if (wrapRef && shellRef) {
    tiltEngine = new ProfileCardTiltEngine(wrapRef, shellRef);

    const getOffsets = (evt, el) => {
      const rect = el.getBoundingClientRect();
      return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    shellRef.addEventListener('pointerenter', (evt) => {
      shellRef.classList.add('active');
      shellRef.classList.add('entering');
      setTimeout(() => shellRef.classList.remove('entering'), 180);
      const { x, y } = getOffsets(evt, shellRef);
      tiltEngine.setTarget(x, y);
    });

    shellRef.addEventListener('pointermove', (evt) => {
      const { x, y } = getOffsets(evt, shellRef);
      tiltEngine.setTarget(x, y);
    });

    shellRef.addEventListener('pointerleave', () => {
      tiltEngine.toCenter();
      shellRef.classList.remove('active');
    });
  }

  // Render Chapter Tabs
  function renderTabs() {
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    chapterData.forEach((ch) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `chapter-tab ${ch.id === currentChapter ? 'active' : ''}`;
      tab.innerHTML = `<span>${ch.name}</span>`;
      tab.addEventListener('click', () => {
        if (currentChapter === ch.id) return;
        currentChapter = ch.id;
        document.querySelectorAll('.chapter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderGrid();
      });
      tabsContainer.appendChild(tab);
    });
  }

  const pad = (n) => String(n + 1).padStart(2, '0');

  const isAdvisorOrProfessor = (m) => {
    const role = (m.role || '').toLowerCase();
    const name = (m.name || '').toLowerCase();
    return (
      role.includes('advisor') ||
      role.includes('counselor') ||
      name.startsWith('prof') ||
      name.startsWith('dr') ||
      name.includes('prof.')
    );
  };

  // Filter & Render Grid
  function renderGrid() {
    grid.innerHTML = '';

    if (currentChapter === "all") {
      const seen = new Set();
      activeMembersList = [];
      membersList.forEach((m) => {
        if (!seen.has(m.name)) {
          seen.add(m.name);
          activeMembersList.push(m);
        }
      });
    } else {
      activeMembersList = membersList.filter(m => m.chapterId === currentChapter);
    }

    // Sort Chapter Advisors & Professors to top
    activeMembersList.sort((a, b) => {
      const aIsAdv = isAdvisorOrProfessor(a);
      const bIsAdv = isAdvisorOrProfessor(b);
      if (aIsAdv && !bIsAdv) return -1;
      if (!aIsAdv && bIsAdv) return 1;
      return 0;
    });

    activeMembersList.forEach((m, i) => {
      const tile = document.createElement('div');
      tile.className = 'member-card-tile';

      const roleText = m.tag || m.role || 'ExeCom Member';

      tile.innerHTML = `
        <div class="tile-header">
          <span class="tile-num">${pad(i)}</span>
          <span class="tile-role">${roleText}</span>
        </div>
        <div class="tile-photo-wrapper">
          <img src="${m.photo}" alt="${m.name}" class="tile-photo" loading="lazy" onError="this.src='./logo.png'" />
          <div class="tile-photo-overlay"></div>
        </div>
        <div class="tile-info">
          <h3 class="tile-name anton-regular">${m.name}</h3>
          ${m.ieeeId ? `<div class="tile-ieee-id"><i class="fa-solid fa-id-card"></i> ID: ${m.ieeeId}</div>` : ''}
        </div>
      `;
      tile.addEventListener('click', () => openCard(i));
      grid.appendChild(tile);
    });
  }

  function openCard(i, updateUrl = true) {
    const m = activeMembersList[i];
    if (!m) return;

    modalName.textContent = m.name;
    modalTitle.textContent = m.role;
    modalAvatar.src = m.photo;
    modalAvatar.alt = m.name;
    modalMiniAvatar.src = m.photo;

    // Handle string formatting
    if (m.ieeeId) {
      modalHandle.textContent = `ID: ${m.ieeeId}`;
    } else {
      const cleanName = m.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      modalHandle.textContent = `@${cleanName}`;
    }

    const currentCh = chapterData.find(c => c.id === m.chapterId);
    modalStatus.textContent = currentCh ? currentCh.badge : "IEEE MBITS";

    // Social Links
    if (m.linkedin) {
      linkLinkedin.style.display = 'inline-flex';
      let url = m.linkedin;
      if (!url.startsWith('http')) url = 'https://' + url;
      linkLinkedin.href = url;
    } else {
      linkLinkedin.style.display = 'none';
    }

    if (m.instagram) {
      linkInsta.style.display = 'inline-flex';
      let url = m.instagram;
      if (!url.startsWith('http')) url = 'https://' + url;
      linkInsta.href = url;
    } else {
      linkInsta.style.display = 'none';
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update URL parameter to ?id={membership_id}
    if (updateUrl && m.ieeeId) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('id', m.ieeeId);
      history.pushState({ ieeeId: m.ieeeId }, '', currentUrl.toString());
    }

    // Start 3D tilt initial animation sequence
    if (tiltEngine && shellRef) {
      const initialX = (shellRef.clientWidth || 390) - 70;
      const initialY = 60;
      tiltEngine.setImmediate(initialX, initialY);
      tiltEngine.toCenter();
      tiltEngine.beginInitial(1200);
    }
  }

  function closeCard(updateUrl = true) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (tiltEngine) tiltEngine.cancel();

    if (updateUrl && window.location.search.includes('id=')) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('id');
      history.pushState({}, '', currentUrl.toString());
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', () => closeCard());
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCard();
    });
  }

  // Stop propagation on social links so they open target URL without closing card
  if (linkLinkedin) {
    linkLinkedin.addEventListener('click', (e) => {
      e.stopPropagation();
      const href = linkLinkedin.getAttribute('href');
      if (href && href !== '#') {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
      e.preventDefault();
    });
  }

  if (linkInsta) {
    linkInsta.addEventListener('click', (e) => {
      e.stopPropagation();
      const href = linkInsta.getAttribute('href');
      if (href && href !== '#') {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
      e.preventDefault();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCard();
  });

  // Handle URL deep linking on page load or browser navigation
  function openFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('id');
    if (!targetId) return;

    let index = activeMembersList.findIndex(m => m.ieeeId === targetId);
    if (index !== -1) {
      openCard(index, false);
    } else {
      const globalMember = membersList.find(m => m.ieeeId === targetId);
      if (globalMember) {
        currentChapter = globalMember.chapterId || "sb";
        renderTabs();
        renderGrid();
        const newIdx = activeMembersList.findIndex(m => m.ieeeId === targetId);
        if (newIdx !== -1) {
          openCard(newIdx, false);
        }
      }
    }
  }

  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('id');
    if (targetId) {
      openFromUrl();
    } else {
      closeCard(false);
    }
  });

  // Init
  renderTabs();
  renderGrid();
  openFromUrl();
});
