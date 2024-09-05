const http = require('http');
const fs = require('fs');

// Создание сервера
const server = http.createServer((req, res) => {
    try {
        // Имитируем ошибку для тестирования
        throw new Error('Test error');

    } catch (err) {
        // Логируем ошибку в файл errors.log
        fs.appendFile('errors.log', `${new Date().toISOString()} - ${err.message}\n`, (fsErr) => {
            if (fsErr) {
                console.error('Failed to write to log file:', fsErr);
            }
        });

        // Формируем ответ на ошибку
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});

// Запуск сервера
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});