exports.keys = 'xubaoshi';
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.html': 'nunjucks'
    }
}
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
    'robot'
];

exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i
    ]
}