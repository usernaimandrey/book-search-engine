[![Eslint status](https://github.com/usernaimandrey/book-search-engine/actions/workflows/node.js.yml/badge.svg)](https://github.com/usernaimandrey/book-search-engine/actions/workflows/node.js.yml)

# Приложение для поиска книг

### Тестовое задание https://future-group.ru/

## Технологии:

1. React(Hooks)
2. Redux Toolkit
3. Приложение работает через Google Books API
4. AXIOS
5. Обработка форм Formik
6. Пагинация LoadMore

## Демонстрация на [Vercel](https://book-search-engine-qm8or0pmu-usernaimandrey.vercel.app/)

## Приложение можно запустить локально в изолированном окружении.
### Для этого у вас должен быть установленн Vagrant и VirtualBox:
1. Склонируйте репозеторий:
```
git clone https://github.com/usernaimandrey/book-search-engine.git
cd book-search-engine

```
2. Инициализируем Vagrant:
```
vagrant up

```
3. Подключамся:
```
vagrant ssh

```
4. Переходим в папку с проектом и запускаем dev-сервер:
```
cd /vagrant
make start

```