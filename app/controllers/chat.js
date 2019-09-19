module.exports.iniciaChat = (application, req, res) => {
    
    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,20);

    var err = req.validationErrors();

    if(err){
        res.render('index', {validacao: err});
        return;
    }

    application.get('io').emit( //Ou io.emit  -- porém deve ser declarado e require a variável io.
        'msgForClient',
        {apelido: dadosForm.apelido, msg: "acabou de entrar no chat!" }
        )
    
    res.render('chat', {dadosForm : dadosForm});
} 