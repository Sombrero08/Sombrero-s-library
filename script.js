function checkAnswers() {
    var score = 0;

    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "") {
        score++;
    }

    // 추가적인 문제의 답을 여기에 확인...

    document.getElementById("result").innerHTML = "당신의 점수: " + score + "점";
}

let currentQuestion = 0;

function showNextQuestion() {
    const questions = document.querySelectorAll('.question');
    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.remove('active');
        currentQuestion++;
        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add('active');
        } else {
            // 모든 문제가 끝났을 때 수행할 작업
            checkAnswers();
        }
    }
}

// 초기 문제 설정
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.question')[0].classList.add('active');
});
