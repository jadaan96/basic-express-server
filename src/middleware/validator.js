'use strict';

module.exports = (req, res, next) => {
    let name = req.query.name;
    
    const pattern = /^[A-Za-z]+$/;
    const match = pattern.test(name);
console.log(match)
    if (name && match) {
        next();
    } else {
        next({message: 'Not a name'})
    }
};