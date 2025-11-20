// ==================== STATE MANAGEMENT ====================
const state = {
    template: 'modern',
    color: 'indigo',
    showAvatar: true,
    avatar: null,
    basic: {
        name: '张伟',
        gender: '男',
        age: '28',
        phone: '138-8888-8888',
        email: 'zhangwei@example.com',
        position: '高级前端工程师',
        summary: '5年前端开发经验，精通React、Vue等主流框架，具有丰富的大型项目开发和团队协作经验。熟悉前端工程化、性能优化和用户体验设计，能够独立完成项目从设计到上线的全流程开发。'
    },
    education: [
        {
            id: 1,
            school: '北京大学',
            major: '计算机科学与技术',
            degree: '本科',
            startDate: '2015-09',
            endDate: '2019-06',
            description: '主修课程：数据结构、算法设计、计算机网络、软件工程等。GPA: 3.8/4.0，多次获得学校奖学金。'
        }
    ],
    skills: [
        { id: 2, name: 'JavaScript/TypeScript', level: '精通' },
        { id: 3, name: 'React & Vue.js', level: '精通' },
        { id: 4, name: 'Node.js & Express', level: '熟练' },
        { id: 5, name: 'HTML5 & CSS3', level: '精通' },
        { id: 6, name: 'Webpack & Vite', level: '熟练' },
        { id: 7, name: 'Git & CI/CD', level: '熟练' }
    ],
    work: [
        {
            id: 8,
            company: '字节跳动科技有限公司',
            position: '高级前端工程师',
            startDate: '2021-07',
            endDate: '',
            description: '负责公司核心产品的前端开发工作，参与多个大型项目的架构设计和技术选型。优化页面性能，首屏加载时间减少40%。带领团队完成移动端适配和响应式设计，提升用户体验。'
        },
        {
            id: 9,
            company: '腾讯科技有限公司',
            position: '前端工程师',
            startDate: '2019-07',
            endDate: '2021-06',
            description: '参与企业级管理系统的开发，使用React技术栈完成多个业务模块。负责组件库的开发和维护，提高团队开发效率30%。与后端团队协作，优化API接口和数据交互流程。'
        }
    ],
    projects: [
        {
            id: 10,
            name: '智能数据分析平台',
            role: '前端负责人',
            startDate: '2022-03',
            endDate: '2023-01',
            description: '带领5人团队完成大数据可视化平台的前端开发。采用React + TypeScript + ECharts技术栈，实现复杂的数据图表展示和交互功能。项目上线后日活用户超过10万，获得客户高度评价。'
        },
        {
            id: 11,
            name: '移动端电商应用',
            role: '核心开发者',
            startDate: '2020-06',
            endDate: '2020-12',
            description: '使用Vue.js和Vant组件库开发移动端电商应用。实现商品展示、购物车、支付等核心功能模块。优化移动端性能和用户体验，应用在App Store获得4.8分好评。'
        }
    ],
    moreInfo: [
        {
            id: 12,
            title: '技术博客',
            date: '2020-至今',
            description: '在掘金等技术社区发表前端技术文章20余篇，累计阅读量超过50万，获得众多开发者关注和好评。'
        },
        {
            id: 13,
            title: '开源贡献',
            date: '2021-至今',
            description: '为多个知名开源项目贡献代码，包括Vue.js、Ant Design等，在GitHub上拥有500+ Stars。'
        }
    ]
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeTemplateSelection();
    initializeColorSelection();
    initializeAvatar();
    initializeBasicInfo();
    initializeDynamicSections();
    initializeButtons();

    // Populate form fields with default values
    populateBasicInfo();

    // Render default items for all sections
    renderEducationItems();
    renderSkillItems();
    renderWorkItems();
    renderProjectItems();
    renderMoreInfoItems();

    // Render initial preview
    renderResume();
});

// Populate basic info fields
function populateBasicInfo() {
    document.getElementById('name').value = state.basic.name;
    document.getElementById('gender').value = state.basic.gender;
    document.getElementById('age').value = state.basic.age;
    document.getElementById('phone').value = state.basic.phone;
    document.getElementById('email').value = state.basic.email;
    document.getElementById('position').value = state.basic.position;
    document.getElementById('summary').value = state.basic.summary;
}

// Render existing education items
function renderEducationItems() {
    const container = document.getElementById('educationList');
    container.innerHTML = '';
    state.education.forEach((edu, index) => {
        const html = createEducationHTML(edu, index + 1);
        container.insertAdjacentHTML('beforeend', html);
    });
}

function createEducationHTML(edu, num) {
    return `
        <div class="item-card" data-id="${edu.id}">
            <div class="item-card-header">
                <span class="item-card-title">教育经历 ${num}</span>
                <button class="btn btn-remove" onclick="removeEducationItem(${edu.id})">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
                    </svg>
                    删除
                </button>
            </div>
            <div class="form-group">
                <label>学校名称</label>
                <input type="text" class="input" placeholder="请输入学校名称" value="${edu.school}"
                    onchange="updateEducation(${edu.id}, 'school', this.value)">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>专业</label>
                    <input type="text" class="input" placeholder="专业名称" value="${edu.major}"
                        onchange="updateEducation(${edu.id}, 'major', this.value)">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <select class="input" onchange="updateEducation(${edu.id}, 'degree', this.value)">
                        <option value="">请选择</option>
                        <option value="博士" ${edu.degree === '博士' ? 'selected' : ''}>博士</option>
                        <option value="硕士" ${edu.degree === '硕士' ? 'selected' : ''}>硕士</option>
                        <option value="本科" ${edu.degree === '本科' ? 'selected' : ''}>本科</option>
                        <option value="专科" ${edu.degree === '专科' ? 'selected' : ''}>专科</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>开始时间</label>
                    <input type="month" class="input" value="${edu.startDate}"
                        onchange="updateEducation(${edu.id}, 'startDate', this.value)">
                </div>
                <div class="form-group">
                    <label>结束时间</label>
                    <input type="month" class="input" value="${edu.endDate}"
                        onchange="updateEducation(${edu.id}, 'endDate', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>描述</label>
                <textarea class="input" rows="3" placeholder="在校期间的主要成就、获奖情况等..."
                    onchange="updateEducation(${edu.id}, 'description', this.value)">${edu.description}</textarea>
            </div>
        </div>
    `;
}

// Similar functions for other sections
function renderSkillItems() {
    const container = document.getElementById('skillsList');
    container.innerHTML = '';
    state.skills.forEach((skill, index) => {
        const html = createSkillHTML(skill, index + 1);
        container.insertAdjacentHTML('beforeend', html);
    });
}

function createSkillHTML(skill, num) {
    return `
        <div class="item-card" data-id="${skill.id}">
            <div class="item-card-header">
                <span class="item-card-title">技能 ${num}</span>
                <button class="btn btn-remove" onclick="removeSkillItem(${skill.id})">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
                    </svg>
                    删除
                </button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>技能名称</label>
                    <input type="text" class="input" placeholder="如：JavaScript, Python等" value="${skill.name}"
                        onchange="updateSkill(${skill.id}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label>掌握程度</label>
                    <select class="input" onchange="updateSkill(${skill.id}, 'level', this.value)">
                        <option value="熟练" ${skill.level === '熟练' ? 'selected' : ''}>熟练</option>
                        <option value="精通" ${skill.level === '精通' ? 'selected' : ''}>精通</option>
                        <option value="了解" ${skill.level === '了解' ? 'selected' : ''}>了解</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

function renderWorkItems() {
    const container = document.getElementById('workList');
    container.innerHTML = '';
    state.work.forEach((work, index) => {
        const html = createWorkHTML(work, index + 1);
        container.insertAdjacentHTML('beforeend', html);
    });
}

function createWorkHTML(work, num) {
    return `
        <div class="item-card" data-id="${work.id}">
            <div class="item-card-header">
                <span class="item-card-title">工作经历 ${num}</span>
                <button class="btn btn-remove" onclick="removeWorkItem(${work.id})">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
                    </svg>
                    删除
                </button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>公司名称</label>
                    <input type="text" class="input" placeholder="公司名称" value="${work.company}"
                        onchange="updateWork(${work.id}, 'company', this.value)">
                </div>
                <div class="form-group">
                    <label>职位</label>
                    <input type="text" class="input" placeholder="职位名称" value="${work.position}"
                        onchange="updateWork(${work.id}, 'position', this.value)">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>开始时间</label>
                    <input type="month" class="input" value="${work.startDate}"
                        onchange="updateWork(${work.id}, 'startDate', this.value)">
                </div>
                <div class="form-group">
                    <label>结束时间</label>
                    <input type="month" class="input" value="${work.endDate}"
                        onchange="updateWork(${work.id}, 'endDate', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>工作描述</label>
                <textarea class="input" rows="4" placeholder="主要工作内容、项目成果、业绩等..."
                    onchange="updateWork(${work.id}, 'description', this.value)">${work.description}</textarea>
            </div>
        </div>
    `;
}

function renderProjectItems() {
    const container = document.getElementById('projectsList');
    container.innerHTML = '';
    state.projects.forEach((project, index) => {
        const html = createProjectHTML(project, index + 1);
        container.insertAdjacentHTML('beforeend', html);
    });
}

function createProjectHTML(project, num) {
    return `
        <div class="item-card" data-id="${project.id}">
            <div class="item-card-header">
                <span class="item-card-title">项目经历 ${num}</span>
                <button class="btn btn-remove" onclick="removeProjectItem(${project.id})">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
                    </svg>
                    删除
                </button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>项目名称</label>
                    <input type="text" class="input" placeholder="项目名称" value="${project.name}"
                        onchange="updateProject(${project.id}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label>担任角色</label>
                    <input type="text" class="input" placeholder="如：前端开发、项目负责人等" value="${project.role}"
                        onchange="updateProject(${project.id}, 'role', this.value)">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>开始时间</label>
                    <input type="month" class="input" value="${project.startDate}"
                        onchange="updateProject(${project.id}, 'startDate', this.value)">
                </div>
                <div class="form-group">
                    <label>结束时间</label>
                    <input type="month" class="input" value="${project.endDate}"
                        onchange="updateProject(${project.id}, 'endDate', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>项目描述</label>
                <textarea class="input" rows="4" placeholder="项目背景、技术栈、个人贡献、项目成果等..."
                    onchange="updateProject(${project.id}, 'description', this.value)">${project.description}</textarea>
            </div>
        </div>
    `;
}

function renderMoreInfoItems() {
    const container = document.getElementById('moreInfoList');
    container.innerHTML = '';
    state.moreInfo.forEach((info, index) => {
        const html = createMoreInfoHTML(info, index + 1);
        container.insertAdjacentHTML('beforeend', html);
    });
}

function createMoreInfoHTML(info, num) {
    return `
        <div class="item-card" data-id="${info.id}">
            <div class="item-card-header">
                <span class="item-card-title">其他信息 ${num}</span>
                <button class="btn btn-remove" onclick="removeMoreInfoItem(${info.id})">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
                    </svg>
                    删除
                </button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" class="input" placeholder="如：获奖情况、证书等" value="${info.title}"
                        onchange="updateMoreInfo(${info.id}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>时间</label>
                    <input type="text" class="input" placeholder="时间" value="${info.date}"
                        onchange="updateMoreInfo(${info.id}, 'date', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>描述</label>
                <textarea class="input" rows="3" placeholder="详细描述..."
                    onchange="updateMoreInfo(${info.id}, 'description', this.value)">${info.description}</textarea>
            </div>
        </div>
    `;
}

// ==================== TAB NAVIGATION ====================
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-item');
    const panels = document.querySelectorAll('.form-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(`panel-${targetTab}`).classList.add('active');
        });
    });
}

// ==================== TEMPLATE SELECTION ====================
function initializeTemplateSelection() {
    const templateCards = document.querySelectorAll('.template-card');

    templateCards.forEach(card => {
        card.addEventListener('click', () => {
            templateCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            state.template = card.dataset.template;
            renderResume();
        });
    });
}

// ==================== COLOR SELECTION ====================
function initializeColorSelection() {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            state.color = option.dataset.color;
            updateThemeColors();
            renderResume();
        });
    });
}

function updateThemeColors() {
    const root = document.documentElement;
    const colorMap = {
        'indigo': ['#6366f1', '#8b5cf6'],
        'blue': ['#3b82f6', '#06b6d4'],
        'green': ['#10b981', '#059669'],
        'purple': ['#8b5cf6', '#a855f7'],
        'red': ['#ef4444', '#f97316'],
        'dark': ['#1f2937', '#374151']
    };

    const [primary, secondary] = colorMap[state.color] || colorMap['indigo'];
    root.style.setProperty('--theme-primary', primary);
    root.style.setProperty('--theme-secondary', secondary);
}

// ==================== AVATAR HANDLING ====================
function initializeAvatar() {
    const avatarInput = document.getElementById('avatarInput');
    const avatarPreview = document.getElementById('avatarPreview');
    const showAvatarToggle = document.getElementById('showAvatar');

    avatarPreview.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                state.avatar = e.target.result;
                avatarPreview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
                renderResume();
            };
            reader.readAsDataURL(file);
        }
    });

    showAvatarToggle.addEventListener('change', (e) => {
        state.showAvatar = e.target.checked;
        renderResume();
    });
}

// ==================== BASIC INFO ====================
function initializeBasicInfo() {
    const fields = ['name', 'gender', 'age', 'phone', 'email', 'position', 'summary'];

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input) {
            input.addEventListener('input', (e) => {
                state.basic[field] = e.target.value;
                renderResume();
            });
        }
    });
}

// ==================== DYNAMIC SECTIONS ====================
function initializeDynamicSections() {
    document.getElementById('addEducation').addEventListener('click', addEducationItem);
    document.getElementById('addSkill').addEventListener('click', addSkillItem);
    document.getElementById('addWork').addEventListener('click', addWorkItem);
    document.getElementById('addProject').addEventListener('click', addProjectItem);
    document.getElementById('addMoreInfo').addEventListener('click', addMoreInfoItem);
}

function addEducationItem() {
    const id = Date.now();
    const item = {
        id,
        school: '',
        major: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
    };

    state.education.push(item);
    const html = createEducationHTML(item, state.education.length);
    document.getElementById('educationList').insertAdjacentHTML('beforeend', html);
}

function updateEducation(id, field, value) {
    const item = state.education.find(e => e.id === id);
    if (item) {
        item[field] = value;
        renderResume();
    }
}

function removeEducationItem(id) {
    state.education = state.education.filter(e => e.id !== id);
    document.querySelector(`#educationList .item-card[data-id="${id}"]`).remove();
    renderResume();
}

function addSkillItem() {
    const id = Date.now();
    const item = {
        id,
        name: '',
        level: '熟练'
    };

    state.skills.push(item);
    const html = createSkillHTML(item, state.skills.length);
    document.getElementById('skillsList').insertAdjacentHTML('beforeend', html);
}

function updateSkill(id, field, value) {
    const item = state.skills.find(s => s.id === id);
    if (item) {
        item[field] = value;
        renderResume();
    }
}

function removeSkillItem(id) {
    state.skills = state.skills.filter(s => s.id !== id);
    document.querySelector(`#skillsList .item-card[data-id="${id}"]`).remove();
    renderResume();
}

function addWorkItem() {
    const id = Date.now();
    const item = {
        id,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    };

    state.work.push(item);
    const html = createWorkHTML(item, state.work.length);
    document.getElementById('workList').insertAdjacentHTML('beforeend', html);
}

function updateWork(id, field, value) {
    const item = state.work.find(w => w.id === id);
    if (item) {
        item[field] = value;
        renderResume();
    }
}

function removeWorkItem(id) {
    state.work = state.work.filter(w => w.id !== id);
    document.querySelector(`#workList .item-card[data-id="${id}"]`).remove();
    renderResume();
}

function addProjectItem() {
    const id = Date.now();
    const item = {
        id,
        name: '',
        role: '',
        startDate: '',
        endDate: '',
        description: ''
    };

    state.projects.push(item);
    const html = createProjectHTML(item, state.projects.length);
    document.getElementById('projectsList').insertAdjacentHTML('beforeend', html);
}

function updateProject(id, field, value) {
    const item = state.projects.find(p => p.id === id);
    if (item) {
        item[field] = value;
        renderResume();
    }
}

function removeProjectItem(id) {
    state.projects = state.projects.filter(p => p.id !== id);
    document.querySelector(`#projectsList .item-card[data-id="${id}"]`).remove();
    renderResume();
}

function addMoreInfoItem() {
    const id = Date.now();
    const item = {
        id,
        title: '',
        date: '',
        description: ''
    };

    state.moreInfo.push(item);
    const html = createMoreInfoHTML(item, state.moreInfo.length);
    document.getElementById('moreInfoList').insertAdjacentHTML('beforeend', html);
}

function updateMoreInfo(id, field, value) {
    const item = state.moreInfo.find(m => m.id === id);
    if (item) {
        item[field] = value;
        renderResume();
    }
}

function removeMoreInfoItem(id) {
    state.moreInfo = state.moreInfo.filter(m => m.id !== id);
    document.querySelector(`#moreInfoList .item-card[data-id="${id}"]`).remove();
    renderResume();
}

// ==================== BUTTONS ====================
function initializeButtons() {
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('确定要重置所有内容吗？此操作不可撤销。')) {
            location.reload();
        }
    });

    document.getElementById('downloadBtn').addEventListener('click', downloadPDF);

    switch (state.template) {
        case 'modern':
            preview.innerHTML = renderModernTemplate();
            break;
        case 'classic':
            preview.innerHTML = renderClassicTemplate();
            break;
        case 'creative':
            preview.innerHTML = renderCreativeTemplate();
            break;
        case 'professional':
            preview.innerHTML = renderProfessionalTemplate();
            break;
        default:
            preview.innerHTML = renderModernTemplate();
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    return `${year}.${month}`;
}

function formatDateRange(start, end) {
    const startFormatted = formatDate(start);
    const endFormatted = end ? formatDate(end) : '至今';
    return startFormatted && endFormatted ? `${startFormatted} - ${endFormatted}` : '';
}

// Modern Template
function renderModernTemplate() {
    const avatarHtml = state.showAvatar && state.avatar
        ? `<img src="${state.avatar}" alt="Avatar" class="resume-avatar">`
        : '';

    return `
        <div class="resume resume-modern">
            <div class="resume-sidebar">
                ${avatarHtml}
                <h1 class="resume-name">${state.basic.name || '您的姓名'}</h1>
                <div class="resume-position">${state.basic.position || '求职岗位'}</div>
                
                ${state.basic.phone || state.basic.email || state.basic.gender || state.basic.age ? `
                    <div style="margin-top: 24px;">
                        ${state.basic.phone ? `<div class="contact-item">📱 ${state.basic.phone}</div>` : ''}
                        ${state.basic.email ? `<div class="contact-item">📧 ${state.basic.email}</div>` : ''}
                        ${state.basic.gender ? `<div class="contact-item">👤 ${state.basic.gender}</div>` : ''}
                        ${state.basic.age ? `<div class="contact-item">🎂 ${state.basic.age}岁</div>` : ''}
                    </div>
                ` : ''}
                
                ${state.skills.length > 0 ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: white; border-color: rgba(255,255,255,0.3);">⚡ 专业技能</div>
                        ${state.skills.map(skill => skill.name ? `
                            <div style="margin-bottom: 12px; font-size: 13px;">
                                <div style="font-weight: 600;">${skill.name}</div>
                                <div style="opacity: 0.8; font-size: 12px;">${skill.level}</div>
                            </div>
                        ` : '').join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="resume-main">
                ${state.basic.summary ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💡 个人优势</div>
                        <div style="font-size: 13px; line-height: 1.8; color: var(--color-text-secondary);">${state.basic.summary}</div>
                    </div>
                ` : ''}
                
                ${state.education.length > 0 ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🎓 教育背景</div>
                        ${state.education.map(edu => edu.school ? `
                            <div class="resume-item">
                                <div class="resume-item-header">
                                    <div>
                                        <div class="resume-item-title">${edu.school}</div>
                                        <div class="resume-item-subtitle">${edu.major || ''} ${edu.degree ? '· ' + edu.degree : ''}</div>
                                    </div>
                                    <div class="resume-item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
                                </div>
                                ${edu.description ? `<div class="resume-item-description">${edu.description}</div>` : ''}
                            </div>
                        ` : '').join('')}
                    </div>
                ` : ''}
                
                ${state.work.length > 0 ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💼 工作经历</div>
                        ${state.work.map(work => work.company ? `
                            <div class="resume-item">
                                <div class="resume-item-header">
                                    <div>
                                        <div class="resume-item-title">${work.company}</div>
                                        <div class="resume-item-subtitle">${work.position || ''}</div>
                                    </div>
                                    <div class="resume-item-date">${formatDateRange(work.startDate, work.endDate)}</div>
                                </div>
                                ${work.description ? `<div class="resume-item-description">${work.description}</div>` : ''}
                            </div>
                        ` : '').join('')}
                    </div>
                ` : ''}
                
                ${state.projects.length > 0 ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🚀 项目经历</div>
                        ${state.projects.map(project => project.name ? `
                            <div class="resume-item">
                                <div class="resume-item-header">
                                    <div>
                                        <div class="resume-item-title">${project.name}</div>
                                        <div class="resume-item-subtitle">${project.role || ''}</div>
                                    </div>
                                    <div class="resume-item-date">${formatDateRange(project.startDate, project.endDate)}</div>
                                </div>
                                ${project.description ? `<div class="resume-item-description">${project.description}</div>` : ''}
                            </div>
                        ` : '').join('')}
                    </div>
                ` : ''}
                
                ${state.moreInfo.length > 0 ? `
                    <div class="resume-section">
                        <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⭐ 更多信息</div>
                        ${state.moreInfo.map(info => info.title ? `
                            <div class="resume-item">
                                <div class="resume-item-header">
                                    <div class="resume-item-title">${info.title}</div>
                                    ${info.date ? `<div class="resume-item-date">${info.date}</div>` : ''}
                                </div>
                                ${info.description ? `<div class="resume-item-description">${info.description}</div>` : ''}
                            </div>
                        ` : '').join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Classic Template  
function renderClassicTemplate() {
    return `
        <div class="resume resume-classic">
            <div class="resume-header">
                ${state.showAvatar && state.avatar ? `
                    <img src="${state.avatar}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 16px; object-fit: cover;">
                ` : ''}
                <h1 class="resume-name">${state.basic.name || '您的姓名'}</h1>
                <div class="resume-position">${state.basic.position || '求职岗位'}</div>
                <div class="contact-info">
                    ${state.basic.phone ? `<span>📱 ${state.basic.phone}</span>` : ''}
                    ${state.basic.email ? `<span>📧 ${state.basic.email}</span>` : ''}
                    ${state.basic.gender ? `<span>👤 ${state.basic.gender}</span>` : ''}
                    ${state.basic.age ? `<span>🎂 ${state.basic.age}岁</span>` : ''}
                </div>
            </div>
            
            ${state.basic.summary ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💡 个人优势</div>
                    <div style="font-size: 13px; line-height: 1.8;">${state.basic.summary}</div>
                </div>
            ` : ''}
            
            ${state.education.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🎓 教育背景</div>
                    ${state.education.map(edu => edu.school ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${edu.school}</div>
                                    <div class="resume-item-subtitle">${edu.major || ''} ${edu.degree ? '· ' + edu.degree : ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
                            </div>
                            ${edu.description ? `<div class="resume-item-description">${edu.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.skills.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⚡ 专业技能</div>
                    <div>
                        ${state.skills.map(skill => skill.name ? `
                            <span class="skill-tag">${skill.name} - ${skill.level}</span>
                        ` : '').join('')}
                    </div>
                </div>
            ` : ''}
            
            ${state.work.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💼 工作经历</div>
                    ${state.work.map(work => work.company ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${work.company}</div>
                                    <div class="resume-item-subtitle">${work.position || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(work.startDate, work.endDate)}</div>
                            </div>
                            ${work.description ? `<div class="resume-item-description">${work.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.projects.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🚀 项目经历</div>
                    ${state.projects.map(project => project.name ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${project.name}</div>
                                    <div class="resume-item-subtitle">${project.role || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(project.startDate, project.endDate)}</div>
                            </div>
                            ${project.description ? `<div class="resume-item-description">${project.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.moreInfo.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⭐ 更多信息</div>
                    ${state.moreInfo.map(info => info.title ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div class="resume-item-title">${info.title}</div>
                                ${info.date ? `<div class="resume-item-date">${info.date}</div>` : ''}
                            </div>
                            ${info.description ? `<div class="resume-item-description">${info.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Creative Template
function renderCreativeTemplate() {
    return `
        <div class="resume resume-creative">
            <div class="resume-header">
                <div style="display: flex; align-items: center; gap: 24px;">
                    ${state.showAvatar && state.avatar ? `
                        <img src="${state.avatar}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 20px; object-fit: cover; box-shadow: var(--shadow-lg);">
                    ` : ''}
                    <div style="flex: 1;">
                        <h1 class="resume-name">${state.basic.name || '您的姓名'}</h1>
                        <div style="font-size: 16px; color: var(--theme-primary); font-weight: 600; margin-bottom: 12px;">${state.basic.position || '求职岗位'}</div>
                        <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 13px; color: var(--color-text-secondary);">
                            ${state.basic.phone ? `<span>📱 ${state.basic.phone}</span>` : ''}
                            ${state.basic.email ? `<span>📧 ${state.basic.email}</span>` : ''}
                            ${state.basic.gender ? `<span>👤 ${state.basic.gender}</span>` : ''}
                            ${state.basic.age ? `<span>🎂 ${state.basic.age}岁</span>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            ${state.basic.summary ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💡 个人优势</div>
                    <div style="font-size: 13px; line-height: 1.8; color: var(--color-text-secondary);">${state.basic.summary}</div>
                </div>
            ` : ''}
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div>
                    ${state.education.length > 0 ? `
                        <div class="resume-section">
                            <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🎓 教育背景</div>
                            ${state.education.map(edu => edu.school ? `
                                <div class="resume-item">
                                    <div class="resume-item-title">${edu.school}</div>
                                    <div class="resume-item-subtitle">${edu.major || ''} ${edu.degree ? '· ' + edu.degree : ''}</div>
                                    <div class="resume-item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
                                    ${edu.description ? `<div class="resume-item-description">${edu.description}</div>` : ''}
                                </div>
                            ` : '').join('')}
                        </div>
                    ` : ''}
                </div>
                
                <div>
                    ${state.skills.length > 0 ? `
                        <div class="resume-section">
                            <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⚡ 专业技能</div>
                            ${state.skills.map(skill => skill.name ? `
                                <span class="skill-tag">${skill.name} - ${skill.level}</span>
                            ` : '').join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            ${state.work.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💼 工作经历</div>
                    ${state.work.map(work => work.company ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${work.company}</div>
                                    <div class="resume-item-subtitle">${work.position || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(work.startDate, work.endDate)}</div>
                            </div>
                            ${work.description ? `<div class="resume-item-description">${work.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.projects.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🚀 项目经历</div>
                    ${state.projects.map(project => project.name ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${project.name}</div>
                                    <div class="resume-item-subtitle">${project.role || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(project.startDate, project.endDate)}</div>
                            </div>
                            ${project.description ? `<div class="resume-item-description">${project.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.moreInfo.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⭐ 更多信息</div>
                    ${state.moreInfo.map(info => info.title ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div class="resume-item-title">${info.title}</div>
                                ${info.date ? `<div class="resume-item-date">${info.date}</div>` : ''}
                            </div>
                            ${info.description ? `<div class="resume-item-description">${info.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Professional Template
function renderProfessionalTemplate() {
    return `
        <div class="resume resume-professional">
            <div class="resume-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h1 class="resume-name">${state.basic.name || '您的姓名'}</h1>
                        <div class="resume-position">${state.basic.position || '求职岗位'}</div>
                    </div>
                    ${state.showAvatar && state.avatar ? `
                        <img src="${state.avatar}" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(255,255,255,0.3);">
                    ` : ''}
                </div>
                <div class="contact-info">
                    ${state.basic.phone ? `<span>📱 ${state.basic.phone}</span>` : ''}
                    ${state.basic.email ? `<span>📧 ${state.basic.email}</span>` : ''}
                    ${state.basic.gender ? `<span>👤 ${state.basic.gender}</span>` : ''}
                    ${state.basic.age ? `<span>🎂 ${state.basic.age}岁</span>` : ''}
                </div>
            </div>
            
            ${state.basic.summary ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💡 个人优势</div>
                    <div style="font-size: 13px; line-height: 1.8;">${state.basic.summary}</div>
                </div>
            ` : ''}
            
            ${state.work.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">💼 工作经历</div>
                    ${state.work.map(work => work.company ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${work.company}</div>
                                    <div class="resume-item-subtitle">${work.position || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(work.startDate, work.endDate)}</div>
                            </div>
                            ${work.description ? `<div class="resume-item-description">${work.description}</div>` : ''}
                        </div>
                   ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.projects.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🚀 项目经历</div>
                    ${state.projects.map(project => project.name ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${project.name}</div>
                                    <div class="resume-item-subtitle">${project.role || ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(project.startDate, project.endDate)}</div>
                            </div>
                            ${project.description ? `<div class="resume-item-description">${project.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.education.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">🎓 教育背景</div>
                    ${state.education.map(edu => edu.school ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div>
                                    <div class="resume-item-title">${edu.school}</div>
                                    <div class="resume-item-subtitle">${edu.major || ''} ${edu.degree ? '· ' + edu.degree : ''}</div>
                                </div>
                                <div class="resume-item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
                            </div>
                            ${edu.description ? `<div class="resume-item-description">${edu.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
            
            ${state.skills.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⚡ 专业技能</div>
                    <div>
                        ${state.skills.map(skill => skill.name ? `
                            <span class="skill-tag">${skill.name} - ${skill.level}</span>
                        ` : '').join('')}
                    </div>
                </div>
            ` : ''}
            
            ${state.moreInfo.length > 0 ? `
                <div class="resume-section">
                    <div class="resume-section-title" style="color: var(--theme-primary); border-color: var(--theme-primary);">⭐ 更多信息</div>
                    ${state.moreInfo.map(info => info.title ? `
                        <div class="resume-item">
                            <div class="resume-item-header">
                                <div class="resume-item-title">${info.title}</div>
                                ${info.date ? `<div class="resume-item-date">${info.date}</div>` : ''}
                            </div>
                            ${info.description ? `<div class="resume-item-description">${info.description}</div>` : ''}
                        </div>
                    ` : '').join('')}
                </div>
            ` : ''}
        </div>
    `;
}
