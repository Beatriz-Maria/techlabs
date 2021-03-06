'use strict';

const createError = require('http-errors');
const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public')));

// Aqui ficarão todas as rotas do APP
app.use('/', require('./routes/index'));
app.use('/formulario', require('./routes/forms'));
app.use('/enviar_formulario', require('./routes/send_forms'))
app.use('/forms_finance', require('./routes/forms_finances'))
app.use('/forms_management', require('./routes/forms_management'))
app.use('/forms_client', require('./routes/forms_client'))
app.use('/forms_marketing', require('./routes/forms_marketing'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
