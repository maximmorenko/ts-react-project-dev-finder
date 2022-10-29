# [Проект GitHub user finder DEMO](https://ts-react-project-dev-finder.vercel.app/)

## [challeng](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6)

## [API](https://api.github.com/users/maximmorenko)

## настройка окружения:

### Dependencies
- типы, тайпскрипт, препроцессор sass, и библиотеку generate-react-cli устанавлеваем как дев зависимости.
- библиотека "generate-react-cli" позволяет быстрее создавать реакт-компоненты с использованием созданых шаблонов
- для этого будем использовать спец. npm команду "component"
- запуск: npm run component + название компонента
- [подробнее о работе с библиотеокй](https://www.youtube.com/watch?v=9ro7lKAAj2I)
- "baseUrl": "./src" позволяет не писать полный относительный путь в момент импорта
- позволяет обращаться к папке на уровне src напрямую, с любого уровня, и дальше уже добавляем нужный путь

## Пубрикация проекта на vercel
- create new project
- import current repo
- все настройки по умолчанию, жмем deploy
- предварительно можно, для проверки, собрать локально (npm run build)
