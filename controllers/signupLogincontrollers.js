const Employee = require("../models/Employee");
const Student = require("../models/Student");
const cloudinary = require("cloudinary");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function signUpStudent(req, res) {
  try {
    cloudinary.config({
      cloud_name: "dln7svzdo",
      api_key: "776616335115449",
      api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc",
    });

    let student = new Student(req.body);
    let password = bcrypt.hashSync(req.body.password, saltRounds);
    student.password = password;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      student.profileImage = result.secure_url;
    }
    await student.save();
    res.render("signupSuccessful", { student: student });
  } catch (err) {
    console.log(err.message);
  }
}

async function signUpEmployee(req, res) {
  try {
    if(req.passkey == 12234556){
      cloudinary.config({
        cloud_name: "dln7svzdo",
        api_key: "776616335115449",
        api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc",
      });
  
      let employee = new Employee(req.body);
      let password = bcrypt.hashSync(req.body.password, saltRounds);
      employee.password = password;
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        employee.profileImage = result.secure_url;
      }
      await employee.save();
      res.render("signupSuccessful", { employee: employee });
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function loginStudent(req, res) {
  try {
    console.log(req.body.email);
    let student = await Student.findOne({ mobileNo: req.body.email });
    console.log(student, "student");
    if (!student) {
      res.end("No such user exist");
    } else {
      let isMatch = await bcrypt.compare(req.body.password, student.password); //return a boolean value
      if (isMatch) {
        res.render("loginEnter", { student: student });
      } else {
        res.end("Incorrect Password");
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function loginEmployee(req, res) {
  try {
    if (req.passkey == 11234456) {
      console.log(req.body.email);
      let employee = await Employee.findOne({ mobileNo: req.body.email });
      console.log(employee, "employee");
      if (!employee) {
        res.end("No such user exist");
      } else {
        let isMatch = await bcrypt.compare(
          req.body.password,
          employee.password
        ); //return a boolean value
        if (isMatch) {
          res.render("loginEnter", { employee: employee });
        } else {
          res.end("Incorrect Password");
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  signUpStudent,
  signUpEmployee,
  loginStudent,
  loginEmployee,
};
