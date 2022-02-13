const { v4: uuidv4 } = require('uuid');

const db = [
    {
        id: uuidv4(),
        img:'https://method-estate.com/wp-content/uploads/2021/02/%D1%86%D1%88%D0%B8-%D0%BE%D1%81%D0%BB%D0%B0.jpg',
        title: 'От мертвого осла уши',
        description: 'Свежие ушки',
        code: 18435
    },
    {
        id: uuidv4(),
        img:'https://alex-news.ru/wp-content/uploads/2018/08/bublik_800x600.jpg',
        title: 'Дырка от бублика',
        description: 'Ни разу не использована',
        code: 16735
    },
    { 
        id: uuidv4(),
        img:'https://gloksat.ru/images/staty/5bfd0d96716ca79723b82e39.png',
        title: 'Посылка типовая',
        description: 'На деревню дедушке',
        code: 37648 
    },
];

module.exports = db;