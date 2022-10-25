// File Name: index.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 25, 2022 

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}