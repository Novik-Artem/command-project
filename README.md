# command-project
cd core => npm run dev - перейти в папку core и запуск сервера
1. http://localhost:9000/api/characters - все персонажи
2. http://localhost:9000/api/characters/{char_id} - один персонаж, вместо char_id цифра id нужного перса
3. http://localhost:9000/api/quotes/random?author=Walter White - одна цитата по имени
4. http://localhost:9000/api/characters?limit=3 - вернет количество персонажей, указанное в limit
5. http://localhost:9000/api/characters?limit=3&offset=3 - вернет n персогажей, offset отвечает за индекс элемента, с которого начинать выборку
6. http://localhost:9000/api/characters?limit=2&page=3 - упрощенная пагинация(параметр offset не нужен, вернет page страницу с limit персонажей)
