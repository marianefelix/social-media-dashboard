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

const toggleTheme = () => {
    const currentTheme = getTheme();
    const themeDescriptionElement = document.getElementById('theme-description');
    const button = document.getElementById('theme-toggle-button');

    if (currentTheme === 'dark') {
        setTheme('light');
        
        document.body.setAttribute('class', 'light-theme');
        themeDescriptionElement.textContent = 'Dark Mode';
        button.setAttribute('class', 'off');
    } else {
        setTheme('dark');

        document.body.setAttribute('class', 'dark-theme');
        themeDescriptionElement.textContent = 'Light Mode';
        button.removeAttribute('class');
    }
};

setTheme();

