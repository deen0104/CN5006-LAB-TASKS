const dateofBirth = "12/12/2001";
const getStudentName = () => "Deen Alam";
const getCampusName = () => "University of london";

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
