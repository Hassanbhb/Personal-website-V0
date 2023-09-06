const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')

const getTheme = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

const setTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    sun.classList.add("hidden");
  } else {
    document.documentElement.classList.add('dark');
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  }
  window.localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', () => setTheme(getTheme()))
document.addEventListener('astro:after-swap', () => setTheme(getTheme()));

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  if(isDark){
    moon.classList.add("hidden")
    sun.classList.remove("hidden")
  }else{
    moon.classList.remove("hidden")
    sun.classList.add("hidden")
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

const mode_btn = document.querySelector('.mode_btn')
mode_btn.addEventListener('click', handleToggleClick)