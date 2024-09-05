const http = require('http');

// Создание сервера
const server = http.createServer((req, res) => {
    // Проверка наличия заголовка Authorization
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        // Если заголовок отсутствует, возвращаем статус 401
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Unauthorized');
    } else {
        // Если заголовок присутствует, возвращаем статус 200
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Authorization header received');
    }
});

// Запуск сервера
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});