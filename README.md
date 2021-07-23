# Тестовое задание в I-ONE
Ссылка на демо https://sad-villani-af8dd0.netlify.app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Задание 
[Google Docs](https://docviewer.yandex.ru/view/1130000052164664/?page=1&*=PIqSJL8Tnt5Dbrwk217YNWd3n0F7InVybCI6InlhLW1haWw6Ly8xNzY0ODQ4MTAzOTc1ODE0MDgvMS4yIiwidGl0bGUiOiLQotCXIFZ1ZSDQstCw0LrQsNC90YHQuNGPLmRvY3giLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjExMzAwMDAwNTIxNjQ2NjQiLCJ0cyI6MTYyNjk3OTM1MDk2NywieXUiOiIzNjE1ODM0NjIxNTg4MDY4MTg2In0%3D)

Необходимо разработать NuxtJS приложение, которое будет представлять из себя список
задач всех пользователей, с возможностью зайти в каждую задачу и посмотреть
информацию о ней. Кроме того, на главной странице должна быть реализована
фильтрация задач по пользователям.

**Подробное описание**

Когда мы загружаем приложение в браузере, на странице должен отобразиться список
всех задач. Как именно это будет выглядеть – на ваш выбор. Самое главное, чтобы все
задачи были ссылками и вели на страницу с описанием конкретной задачи. На этой же
странице должен быть реализован фильтр по пользователям. Использовать другие АПИ
нельзя. Минимально это должно выглядеть так: сбоку от продуктов должны выводиться
все доступные пользователи в формате чекбоксов, при выборе любого из них, задачи
должны фильтроваться.
При переходе в конкретную задачу, выводится информация о ней и о пользователе, к
которому она принадлежит.