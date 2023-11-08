const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserController {

    static login(req, res) {
        res.render('users/login', { layout: 'authLayout' })
    }

    static async loginPost(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } })

        if (!user) {
            req.flash('message', 'Usuario não encontrado')
            res.render('users/login', { layout: 'authLayout' })
            return
        } else if (!bcrypt.compareSync(password, user.password)) {
            req.flash('message', 'Acesso negado')
            res.render('users/login', { layout: 'authLayout' })
            return
        }

        req.session.userId = user.id;

        req.session.save(() => {
            res.redirect('/tasks')
        })
    }

    static register(req, res) {
        res.render('users/registerUser', { layout: 'authLayout' })
    }
    static async registerPost(req, res) {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // verificar campos
        if (!password || !email || !name) {
            req.flash('message', 'Preencha todos os campos')
            res.render('users/registerUser', { layout: 'authLayout' })
            return
        } else if ((email.indexOf('@') == -1) || (email.indexOf('.com') == -1)) {
            req.flash('message', 'Campo de email invalido')
            res.render('users/registerUser', { layout: 'authLayout' })
            return
        }

        // verificar se email já existe no banco de dados
        let emailExists = await User.findOne({ where: { email: email } })

        if (emailExists) {
            req.flash('message', 'Email já cadastrado!')
            res.render('users/registerUser', { layout: 'authLayout' })
            return
        }

        //criptografando password
        const salt = bcrypt.genSaltSync(10);
        const criptPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: criptPassword
        }

        try {
            await User.create(user)
            req.flash('message', 'Usuario cadastrado com sucesso!')
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }








    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}

