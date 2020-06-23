window.onload = init;

function init() {
    // Clear forms here
    document.getElementById("subnumber").value = "";
    document.getElementById("overall_grade").value = "";
    document.getElementById("overall_marks").value = "";
}

var calc = 0;


function its_timeBois() {
    var NoOfSub = document.getElementById("subnumber").value;
    if (NoOfSub.length === 0) {
        alert("Enter No. of Subjects");
    } else {
        NoOfSub = parseInt(NoOfSub);
        if (calc == 0) {
            document.getElementById("subnumber").setAttribute('readonly', true);
            var button = document.getElementById("edit_me");
            button.innerHTML = "Calculate";
            looper(NoOfSub);
            calc++;
        }
        else if (calc == 1) {
            if (validate(NoOfSub) > 0) {
                for (let index = 0; index < NoOfSub; index++) {
                    add_grade(getSubjects(index), calc_grade(getScore(index)), getScore(index));
                }
                document.getElementById("form").className = "collapse border-bottom border-right border-left";
                document.getElementById("resultsbro").scrollIntoView();
                overall(NoOfSub);
                read_only(NoOfSub)
                calc++;
            }
        }
        else {
            alert("data already calculated refresh page to reset");
        }
    }
}

function looper(NoOfSub) {
    for (let index = 0; index < NoOfSub; index++) {
        add_sub_input(index + 1);
        add_score_input(index + 1);
    }
}

function getSubjects(index) {
    return document.getElementById("sub_name" + (parseInt(index) + 1)).value;
}

function getScore(index) {
    return document.getElementById("score_sub" + (parseInt(index) + 1)).value;
}

function add_sub_input(input_no) {
    const inputs = document.getElementById("inputs");
    var div_parent = inputs.appendChild(document.createElement("div"));
    var div1 = div_parent.appendChild(document.createElement("div"));
    var div2 = div_parent.appendChild(document.createElement("div"));
    var sub_label = div1.appendChild(document.createElement("label"));
    var sub_input = div2.appendChild(document.createElement("input"));
    div_parent.className = "row pb-3";
    div1.className = "col-12 col-sm-4 my-auto";
    div2.className = "col-12 col-sm-7";
    sub_input.className = "form-control";
    sub_input.id = "sub_name" + input_no;
    sub_input.placeholder = "Subject Name";
    sub_input.type = "text";
    sub_label.innerHTML = "Subject " + input_no + " Name:";
}

function add_score_input(input_no) {
    const inputs = document.getElementById("inputs");
    var div_parent = inputs.appendChild(document.createElement("div"));
    var div1 = div_parent.appendChild(document.createElement("div"));
    var div2 = div_parent.appendChild(document.createElement("div"));
    const score_label = div1.appendChild(document.createElement("label"));
    var score_input = div2.appendChild(document.createElement("input"));
    div_parent.className = "row pb-3";
    div1.className = "col-12 col-sm-4 my-auto";
    div2.className = "col-12 col-sm-7";
    score_input.className = "form-control";
    score_input.id = "score_sub" + input_no;
    score_input.placeholder = "Score out of 100";
    score_input.type = "number";
    score_label.innerHTML = "Subject " + input_no + " score:";
}

function add_grade(Subject, grade, marks) {
    const subGrade = document.getElementById("sub_grades");
    var gradecontainer = subGrade.appendChild(document.createElement("div"));
    var card_subject = gradecontainer.appendChild(document.createElement("li"));
    var card_marks = gradecontainer.appendChild(document.createElement("a"));
    var card_grade = gradecontainer.appendChild(document.createElement("a"));
    gradecontainer.className = "gradecontainer";
    card_subject.className = "subject";
    card_marks.className = "grade";
    card_grade.className = "grade";
    card_subject.innerHTML = Subject;
    card_marks.innerHTML = marks;
    card_grade.innerHTML = grade;
    Subject.value = "";
}


function calc_grade(grade) {
    if (grade > 90) {
        return "A++";
    } else if (grade > 80) {
        return "A";
    } else if (grade > 70) {
        return "B";
    } else if (grade > 50) {
        return "C";
    } else if (grade > 30) {
        return "D";
    } else if (grade >= 0) {
        return "F";
    }
}

function validate(NoOfSub) {
    for (let index = 1; index <= parseInt(NoOfSub); index++) {
        if (
            (document.getElementById("sub_name" + index).value).length === 0 ||
            (document.getElementById("score_sub" + index).value).length === 0
        ) {
            alert("enter data for Subject " + index);
            return 0;
        }
    }
    return 1;
}
function overall(NoOfSub) {
    var score = 0;
    for (let index = 1; index <= parseInt(NoOfSub); index++) {
        score = parseInt(score) + parseInt(document.getElementById("score_sub" + index).value);
    }
    document.getElementById("overall_grade").value = calc_grade((score / (NoOfSub * 100)) * 100);
    document.getElementById("overall_marks").value = score;
}

function read_only(NoOfSub) {
    const inputs = document.getElementById("inputs");
    var div_parent = inputs.appendChild(document.createElement("div"));
    var div1 = div_parent.appendChild(document.createElement("div"));
    var sub_label = div1.appendChild(document.createElement("label"));
    sub_label.innerHTML = "<i>To Re-enter Values Refresh the Page</i>";
    div_parent.className = "row pb-3";
    div1.className = "col-12 col-sm-12 my-auto";
    for (let index = 1; index <= parseInt(NoOfSub); index++) {
        document.getElementById("sub_name" + index).setAttribute('readonly', true);
        document.getElementById("score_sub" + index).setAttribute('readonly', true);
    }
}