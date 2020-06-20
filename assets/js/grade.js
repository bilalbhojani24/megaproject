window.onload = init;

function init() {
    // Clear forms here
    document.getElementById("subnumber").value = "";
    document.getElementById("subname").value = "";
    document.getElementById("score").value = "";
}

var loop = 0;


function its_timeBois() {
    if (loop > 0) {
        if (loop == 1) {
            alert("Reached Max Subjects Refresh Page To start Over")
        } else {
            loop_me();
            loop -= 1;
        }
    }
    else {
        var NoOfSub = document.getElementById("subnumber").value;
        if (NoOfSub.length === 0) {
            alert("Enter No. of Subjects");
        } else {
            NoOfSub = parseInt(NoOfSub);
            loop = NoOfSub + 1; //adding one for the logic in loop > 0 to work
            document.getElementById("subnumber").setAttribute('readonly', true);
            var button = document.getElementById("edit_me");
            button.innerHTML = "Calculate";
            document.getElementById("subname").readOnly = false;
            document.getElementById("score").readOnly = false;
        }
    }
}

function loop_me() {
    var Subject = document.getElementById("subname").value;
    var grade = document.getElementById("score").value;
    if (Subject.length === 0 && grade.length === 0) {
        alert("input missing");
    }
    else {
        grade = parseFloat(grade);
        var result = calc_grade(grade);
        add_grade(Subject, result);
    }

}

function add_grade(Subject, grade) {
    const subGrade = document.getElementById("sub_grades");
    var gradecontainer = subGrade.appendChild(document.createElement("div"));
    var card_subject = gradecontainer.appendChild(document.createElement("li"));
    var card_grade = gradecontainer.appendChild(document.createElement("a"));
    gradecontainer.className = "gradecontainer";
    card_subject.className = "subject";
    card_grade.className = "grade"
    card_subject.innerHTML = Subject;
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
    } else if (grade > 0) {
        return "F";
    }
}