var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

router.get('/', async function(req, res, next) {
    const projects = await mongoose.model('Project').find()
    res.render('projects', {projects: projects});
});


router.get('/add-member/:id', function(req, res, next) {
    res.render('add-member', { project: {id: req.params.id} });
});

router.post('/add-member', async function(req, res, next) {
    const found = await mongoose.model('Project').findById(req.body.id)
    const existing = found.members || []
    existing.push(req.body.member)
    found.members = existing
    await found.save()
    res.redirect('/projects');
});

router.get('/create', function(req, res, next) {
    res.render('project-details', { project: {} });
});

router.get('/edit/:id', async function(req, res, next) {
    const found = await mongoose.model('Project').findById(req.params.id)
    res.render('project-details', {project: found});
});

router.get('/delete/:id', async function(req, res, next) {
    const deleted = await mongoose.model('Project').deleteOne({ _id: req.params.id })
    res.redirect('/projects');
});

router.post('/', async function(req, res, next) {
    if (req.body.id) {
        const doc = await mongoose.model('Project').findById(req.body.id)
        Object.assign(doc, req.body)
        await doc.save()
    } else {
        await mongoose.model('Project').create(req.body)
    }

    res.redirect('/projects')
});

module.exports = router;
