let switchBtn = document.getElementById('switch');
let isOn = true;
//Switch Button is clicked
switchBtn.addEventListener('input', () => {
    if (isOn){
        document.documentElement.style.setProperty('--light-bg', 'var(--dark-bg)');
        document.documentElement.style.setProperty('--top-light-bg-pattern', 'var(--top-dark-bg-pattern)');
        document.documentElement.style.setProperty('--light-card-bg', 'var(--dark-card-bg)');
        document.documentElement.style.setProperty('--light-hover', 'var(--dark-hover)');
        document.documentElement.style.setProperty('--light-text1', 'var(--dark-text1)');
        document.documentElement.style.setProperty('--light-text2', 'var(--dark-text2)');
        //negate the value of isOn (switch state);
        isOn = !isOn;
    }
    else {
        document.documentElement.style.setProperty('--light-bg', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--top-light-bg-pattern', 'hsl(225, 100%, 98%)');
        document.documentElement.style.setProperty('--light-card-bg', 'hsl(227, 47%, 96%)');
        document.documentElement.style.setProperty('--light-hover', 'hsl(227, 47%, 93%)');
        document.documentElement.style.setProperty('--light-text1', 'hsl(228, 12%, 44%)');
        document.documentElement.style.setProperty('--light-text2', 'hsl(230, 17%, 14%)');
        //negate the value of isOn (switch state);
        isOn = !isOn;       
    }
});