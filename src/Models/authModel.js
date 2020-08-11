const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const db = require('../Configs/dbMySql');

const authModel = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            //query SELECT username FROM tb_user WHERE username=body.username
            //jika ada hasilnya (data.length > 0) reject(Username Has Been Taken)
            //hasilnya kosong (data.length === 0) lakukan proses registrasi

            // registration
            bcrypt.genSalt(10, (err, salt) => {
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

}

module.exports = authModel;