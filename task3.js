const http = require('http');

// Создание сервера
const server = http.createServer((req, res) => {
    // Проверка метода запроса
    if (req.method === 'PUT') {
        // Обработка PUT-запроса
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT-запрос обработан');
    } else if (req.method === 'DELETE') {
        // Обработка DELETE-запроса
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('DELETE-запрос обработан');
    } else {
        // Ответ для других методов
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed');
    }
});

// Запуск сервера
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});