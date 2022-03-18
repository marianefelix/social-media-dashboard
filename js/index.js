const setTheme = (theme = 'dark') => {
    localStorage.setItem('theme', theme);
};

const getTheme = () => {
    const themeFromLocalStorage = localStorage.getItem('theme');

    if (themeFromLocalStorage === null) {
        return 'dark';
    }

    return themeFromLocalStorage;
}



const handleUserPreferenceTheme = (theme) => {
    const themeOptions = {
        'light': {
            'description': 'Dark Mode',
            'state': 'off'
        },
        'dark': {
            'description': 'Light Mode',
            'state': 'on'
        },
    };

    setTheme(theme);

    const themeDescriptionElement = document.getElementById('theme-description');
    const button = document.getElementById('theme-toggle-button');

    document.body.setAttribute('class', `${theme}-theme`);
    themeDescriptionElement.textContent = themeOptions[theme].description;
    button.setAttribute('class', themeOptions[theme].state);
};

const toggleTheme = () => {
    const currentTheme = getTheme();
    let newTheme = '';

    if (currentTheme === 'dark') {
        newTheme = 'light';
    } else {
        newTheme = 'dark';
    }

    handleUserPreferenceTheme(newTheme);
};

const currentTheme = getTheme();
handleUserPreferenceTheme(currentTheme);
