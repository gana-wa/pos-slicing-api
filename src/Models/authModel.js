const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Configs/dbMySql');

const authModel = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            //query SELECT username FROM tb_user WHERE username=body.username
            //jika ada hasilnya (data.length > 0) reject(Username Has Been Taken)
            //hasilnya kosong (data.length === 0) lakukan proses registrasi

            // registration
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) {
                    reject(err);
                }
                const { password } = body;
                bcrypt.hash(password, salt, (err, hashedPassword) => {
                    if (err) {
                        reject(err);
                    }
                    const newBody = { ...body, password: hashedPassword };
                    const queryString = "INSERT INTO tb_user SET ?";
                    db.query(queryString, newBody, (err, data) => {
                        if (!err) {
                            resolve(data);
                        } else {
                            reject(err);
                        }
                    })
                })
            })
        })
    }, //end registration
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT username, password FROM tb_user WHERE username=?";
            db.query(queryString, body.username, (err, data) => {
                // check error query
                if (err) {
                    reject(err);
                }
                // check data
                if (data.length) {
                    // check password
                    bcrypt.compare(body.password, data[0].password, (err, result) => {
                        if (result) {
                            const token = jwt.sign(body, process.env.SECRET_KEY);
                            const msg = "Login success..!"
                            resolve({ msg, token })
                        }
                        if (!result) {
                            reject({ msg: "Wrong password..!" })
                        }
                        if (err) {
                            reject(err);
                        }
                    })
                } else {
                    reject("Username not found..!")
                }
            })
        })
    },
}

module.exports = authModel;