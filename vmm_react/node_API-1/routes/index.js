var express = require('express');
var router = express.Router();
let session = require('express-session');

let connection = require('../db/DBconfig');

router.post('/update-user-status', (req, res) => {
    console.log(req.body);
    let {id, action} = req.body;

    let updateUserStatus = `UPDATE user_signup SET status='${action}' WHERE id=${id}`;
    connection.query(updateUserStatus, (err) => {
        if(err) {
            console.log(err);
        }

        res.send('updated');
    });
});

router.get("/get-users", (req, res) => {
    let fetchUsers = `SELECT * FROM user_signup`;
    connection.query(fetchUsers, (e, rows) => {
        if (e) {
            console.log(e);
        }

        res.send(rows);
    });
});

router.get('/logout', (req, res) => {
    session.UserName = undefined;
    session.UserID = undefined;
    res.send("logout");
});

router.get('/get-my-contacts', (req, res) => {
    let userID = session.UserID;
    let fetchContacts = `SELECT * FROM contacts WHERE userID=${userID}`;
    connection.query(fetchContacts, (error, rows) => {
        if (error) {
            console.log(error);
        }

        res.send(rows);
    });
});

router.post('/save-my-contact', (req, res) => {
    let {address, contactName, phone} = req.body;
    let userID = session.UserID;

    if (req.files === null) {
        return res.send("photo");
    }

    let photo = req.files.photo;
    let serverPath = `public/contacts/${photo.name}`;
    let databasePath = `contacts/${photo.name}`;
    photo.mv(serverPath, (e) => {
        if (e) {
            console.log(e);
        }

        let insertContact = `INSERT INTO contacts VALUES(null, "${contactName}", "${phone}", "${databasePath}", "${address}", ${userID})`;
        connection.query(insertContact, (error) => {
            if (error) {
                console.log(error);
                return res.send("error");
            }

            res.send("saved");
        });
    });
});

router.post("/user-change-password", (req, res) => {
    // console.log(req.body);
    let {password, newPassword, confirmPassword} = req.body;
    let id = session.UserID;
    let username = session.UserName;

    if (newPassword !== confirmPassword) {
        return res.send("password");
    }

    let checkUser = `SELECT * FROM user_signup WHERE userName="${username}" AND password="${password}";`;
    connection.query(checkUser, (e, rows) => {
        if (e) {
            console.log(e);
        }

        if (rows.length > 0) {
            let updatePassword = `update user_signup SET password="${newPassword}" WHERE id=${id}`;
            connection.query(updatePassword, (e) => {
                if (e) {
                    console.log(e);
                }

                res.send("updated");
            });
        } else {
            res.send("invalid");
        }
    });
});

router.post("/user-registration", (req, res) => {
    // console.log(req.body);
    // console.log(req.files);

    let {address, confirmPassword, email, firstName, gender, lastName, password, phone, userName} = req.body;

    if (password !== confirmPassword) {
        return res.send("password");
    }

    let checkExist = `SELECT * FROM user_signup WHERE userName="${userName}"`;
    connection.query(checkExist, (err, row) => {
        if (err) {
            console.log(err);
        }

        console.log(row.length);

        if (row.length > 0) {
            return res.send("exist");
        }

        let photo = req.files.photo;
        let serverPath = `public/users/${photo.name}`;
        let dbPath = `users/${photo.name}`;
        photo.mv(serverPath, (e) => {
            if (e) {
                console.log(e);
            }

            let insertSQl = `INSERT INTO user_signup VALUES(null, "${firstName}", "${lastName}", "${userName}", "${password}", "${email}", "${phone}", "${gender}", "${address}", "${dbPath}", "Active")`;
            connection.query(insertSQl, (e) => {
                if (e) {
                    return res.send("error");
                }

                res.send("submitted");
            });
        });

    });
});

router.get('/check-user-logged-in', (req, res) => {
    // console.log(session.UserEmail);
    if (session.UserName === undefined) {
        // if (session.UserEmail === undefined) {
        res.send("failed");
    } else {
        res.send("success");
    }
});

router.post('/adminLogin', (req, res) => {
    console.log(req.body);
    let {email, password} = req.body;

    let checkUser = `SELECT * FROM admin WHERE email="${email}" AND password="${password}";`;
    connection.query(checkUser, (e, rows) => {
        if (e) {
            console.log(e);
        }

        if (rows.length > 0) {
            session.AdminEmail = email;
            res.send("success");
        } else {
            res.send("failed");
        }

    });
});

router.post('/userLogin', (req, res) => {
    // console.log(req.body);
    let {username, password} = req.body;

    let checkUser = `SELECT * FROM user_signup WHERE userName="${username}" AND password="${password}"`;
    connection.query(checkUser, (e, rows) => {
        if (e) {
            console.log(e);
        }

        // console.log(rows[0]);

        if (rows.length > 0) {

            if(rows[0].status === 'Active') {
                session.UserName = username;
                session.UserID = rows[0].id;
                res.send("success");
            } else {
                res.send("inactive");
            }


        } else {
            res.send("failed");
        }

    });
});

router.post('/user-login', (req, res) => {
    // console.log(req.body);
    let {email, password} = req.body;

    let checkUser = `SELECT * FROM users2 WHERE email="${email}" AND password="${password}";`;
    connection.query(checkUser, (e, rows) => {
        if (e) {
            console.log(e);
        }

        // console.log(rows);
        if (rows.length > 0) {
            session.UserEmail = email;
            res.send("success");
        } else {
            res.send("failed");
        }

    });
});

router.post('/get-sub-category', (req, res) => {
    // console.log(req.body);
    if (req.body.id !== "") {
        let {id} = req.body;
        // let fetchSubCategory = `// SELECT * FROM subcategory WHERE category=${id}`;
        let fetchSubCategory = `SELECT * FROM subcategory WHERE category=${req.body.id}`;
        connection.query(fetchSubCategory, (e, rows) => {
            if (e) {
                console.log(e);
            }

            res.send(rows);
        });
    }
});

router.get('/get-category', (req, res) => {
    let fetchCategory = `SELECT * FROM category`;
    connection.query(fetchCategory, (e, rows) => {
        if (e) {
            console.log(e);
        }

        res.send(rows);
    });
});

router.post('/save-form', (req, res) => {
    console.log(req.body);

    // let {name, email, password, country, language, gender} = req.body;

    // let {firstName, middleName, lastName} = name;


    res.send("success");
});

router.post("/update-data", (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    let {firstName, lastName, fatherName, gender, address, rollNumber} = req.body;

    let updateSQL = "";

    if (req.files !== null) {
        let photo = req.files.photo;
        let serverPath = `public/images/${photo.name}`;
        let databasePath = `images/${photo.name}`;

        photo.mv(serverPath, (e) => {
            if (e) {
                console.log(e);
            }
        });

        updateSQL += `UPDATE students SET firstName="${firstName}",lastName="${lastName}",photo="${databasePath}",fatherName="${fatherName}",gender="${gender}",address="${address}" WHERE rollNumber=${rollNumber}`;
    } else {
        updateSQL += `UPDATE students SET firstName="${firstName}",lastName="${lastName}",fatherName="${fatherName}",gender="${gender}",address="${address}" WHERE rollNumber=${rollNumber}`;
    }

    connection.query(updateSQL, (e) => {
        if (e) {
            return res.send("error");
        }
        res.send("updated");
    });
});

router.get("/get-single-student-data/:rollNumber", (req, res) => {
    // console.log(req.params);
    let {rollNumber} = req.params;
    let getData = `SELECT * FROM students WHERE rollNumber=${rollNumber}`;
    connection.query(getData, (e, row) => {
        if (e) {
            return res.send("error");
        }
        res.send(row);
    });
});

router.get("/delete-record/:rollNumber", (req, res) => {
    let {rollNumber} = req.params;
    let deleteSQL = `DELETE FROM students WHERE rollNumber=${rollNumber}`;
    connection.query(deleteSQL, (e) => {
        if (e) {
            return res.send("error");
        }
        res.send("deleted");
    });
});

router.get('/fetch-student-data', (req, res) => {
    let selectSQL = `select * from students`;
    connection.query(selectSQL, (e, rows) => {
        if (e) {
            return res.send("error");
        }

        // console.log(rows);
        res.send(rows);
    });
});

router.post("/add-student", (req, res) => {
    // console.log(req.body);
    let {firstName, lastName, fatherName, gender, address} = req.body;

    if (firstName !== "" && lastName !== "" && fatherName !== "" && address !== "") {
        // console.log(req.files);

        if (req.files === null) {
            res.send("please upload photo.")
        } else {
            let photo = req.files.photo;
            let serverPath = `public/images/${photo.name}`;
            let dbPath = `images/${photo.name}`;

            photo.mv(serverPath, (e) => {
                if (e) {
                    // console.log(e);
                    return res.send("error during file upload");
                }

                let insertSQL = `INSERT INTO students VALUES(null, "${firstName}", "${lastName}", "${fatherName}", "${dbPath}", "${gender}", "${address}")`;
                connection.query(insertSQL, (error) => {
                    if (error) {
                        return res.send("error in sql...");
                    }
                    res.send("new student added");
                });
            });
        }

    } else {
        res.send("all fields are required.")
    }

});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
