import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg' //так как это свг то можно импортировать как компонент
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'


import styles from './ThemeSwitcher.module.scss';


export const ThemeSwitcher = () => {

  const [isDark, setDark] = useState(false); //проверяем темная ли тема, по умолчанию фолс, т.е светлая
  const themeText = isDark ? 'Ligth' : 'Dark'; //для польователя укажем текстовой вариант переключения темы
  // если включен дарк, то показываем лайт, если нет, то дарк
  // для показа иконок та же логика
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  // в юзэфекте будем проверять весли переменная isDark изменилась то у боди нужно поменять атрибут
  useEffect(() => {
    // обращаемся к боди и устанавливаем значение дата-атрибута, если текущее темно, то стави светлое, и наоборот
    document.body.setAttribute('data-theme', isDark ? 'ligth' : 'dark');
  }, [isDark])

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      {/* по клику меняем тему */}
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon}/>
      ThemeSwitcher Component
    </div>
  )
};
