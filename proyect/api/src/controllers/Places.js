const { Places } = require('../db');

const allPlaces = async function () {
    const a = await Users.findAll()
    //console.log(a)
    return a;
}

const getPlaces = async function (req, res) {
    try {
        let a = await allPlaces()
        return res.status(200).send(a)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

} 

const postPlaces = async function (req, res) {

    console.log(req.body)
    let {
        userName,
        password,
        email,
        phoneNumber,
        role
    } = req.body
    //console.log(req.body)

    //let pas = await bcryptjs.hash(password, 8)
    //console.log("esto es paswprd ",pas)
    let allUser = await allUsers();
    
    let b = allUser.filter(e => e.userName === userName)
    let c = allUser.filter(o => o.email === email)
     if(c[0]){
         return res.send('email ya registrado')
     }
     if(b[0]){
       return res.status(200).send('ya tenemos creado ese usuario, prueba con otro')
    } else{

   const random = as()
    try {
        let userCreated = await Users.create({
            userName,
            password,
            email,
            phoneNumber,
            role,
            random
        })
        console.log(userCreated.dataValues)

        const ID = userCreated.id
        //await sendEmail(email, ID,random)
        //console.log(userCreated.dataValues.userName, userCreated.dataValues.password )
        //await trar( userCreated.dataValues.userName, userCreated.dataValues.password )
        res.send('todo ok')
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
    }
}

module.exports = { getPlaces, postPlaces };