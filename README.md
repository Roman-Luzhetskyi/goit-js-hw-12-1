# Домашнє завдання №12 `goit-js-hw-12`
- Створи репозиторій `goit-js-hw-12`
- Збери проєкт за допомогою [Vite](https://vitejs.dev/). Ми підготували для тебе [готову збірку](https://github.com/goitacademy/vanilla-app-template) з усіма додатковими налаштуваннями проєкту та рекомендуємо використовувати саме її.
- Для HTTP-запитів використовуй бібліотеку [axios](https://axios-http.com/).
- Використовуй синтаксис `async/await`.
- Прочитай завдання і виконай його в редакторі коду.
- Переконайся, що код відформатований за допомогою Prettier, а в консолі відсутні помилки й попередження під час відкриття живої сторінки завдання.
- Здай домашнє завдання на перевірку.

>[!NOTES] Для стилізації розмітки твоїх завдань використовуй цей [макет](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=3-1010&mode=design&t=R5msgXbYO44mRUZ0-0).

**Завдання — Пошук зображень**
Використовуй код із домашньої роботи попереднього модуля та доповни код застосунку пошуку зображень новим функціоналом.

**Рефакторинг**

Додай у проєкт бібліотеку [Axios](https://axios-http.com/) для роботи з HTTP-запитами та виконай рефакторинг, замінивши нею використання `fetch`.

Використовуй синтаксис `async/await` для роботи з асинхронними запитами. Виконай рефакторинг свого коду.

**Пагінація**

Pixabay API підтримує пагінацію та надає параметри `page` і `per_page`. Зроби так, щоб у кожній відповіді при пошуку зображень приходило 15 об'єктів (за замовчуванням 20).
- Початкове значення параметра page повинно бути 1.
- З кожним наступним запитом його необхідно збільшити на 1.
- У разі пошуку за новим ключовим словом значення page потрібно повернути до початкового, оскільки буде пагінація для нової колекції зображень.

Додай в HTML-документі після галереї розмітку кнопки з текстом `Load more`, за кліком на яку необхідно виконувати запит за наступною групою зображень і додавати розмітку до вже існуючих елементів галереї. Для цього при сабміті форми тобі необхідно зберігати те, що ввів користувач у глобальну змінну.
- Поки в галерії нема зображень, кнопка повинна бути прихована.
- Після того як у галереї з'являються зображення, кнопка з'являється в інтерфейсі під галереєю.
- При повторному сабміті форми кнопка спочатку ховається, а після отримання результатів запиту знову відображається за потреби.
- Перенеси індикатор завантаження під кнопку завантаження додаткових зображень.

Подивись демовідео роботи застосунку на цьому етапі.

<iframe width="1236" height="695" src="https://www.youtube.com/embed/00hLHI3hx28" title="Пагінація" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Кінець колекції**
У відповіді бекенд повертає властивість `totalHits` — загальна кількість зображень, які відповідають критерію пошуку (для безкоштовного акаунту). Якщо користувач дійшов до кінця колекції, ховай кнопку `Load more` і виводь повідомлення з текстом `"We're sorry, but you've reached the end of search results."`.

Подивись демовідео роботи застосунку на цьому етапі.
<iframe width="778" height="438" src="https://www.youtube.com/embed/0ZQVWxm0VcQ" title="Кінець колекції" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Прокручування сторінки**
Зроби плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень. Для цього отримай у коді висоту однієї карточки галереї, використовуючи функцію [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). Після цього використовуй метод [window.scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy) для прокрутки сторінки на дві висоти карточки галереї.
Подивись демовідео роботи застосунку на цьому етапі.
<iframe width="778" height="438" src="https://www.youtube.com/embed/aEhYvL7wIV8" title="Прокручування сторінки" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**На що буде звертати увагу ментор при перевірці:**
- Домашня робота містить два посилання: на вихідні файли і живу сторінку на `GitHub` Pages
- Проєкт зібраний за допомогою `Vite`
- Консоль в інструментах розробника не містить помилок, попереджень і консоль логів
- Елементи на сторінці стилізовані згідно з макетом (або власні стилі)
- Проєкт містить код із попередньої ДЗ
- Усі асинхронні запити відрефакторені і реалізовані за допомогою синтаксиса async/await
- За один запит у відповідь приходить не більше 15 елементів
- Нові зображення додаються в DOM за одну операцію
- На сторінці під галереєю міститься кнопка `Load more`, при кліку на яку відправляється запит на наступну сторінку
- Після додавання нових елементів до списку зображень на екземплярі `SimpleLightbox` викликається метод `refresh()`
- Коли користувач отримує результати за максимально можливою сторінкою для конкретного пошукового слова, тобто вже немає чого підвантажувати, кнопка `Load more` зникає і з’являється відповідне повідомлення
При кожному новому сабміті форми номер сторінки скидається до дефолтного 1 і результати попередніх запитів зникають
При кліку на маленьке зображення в галереї відкривається його збільшена версія у модальному вікні з використанням бібліотеки `SimpleLightbox`
