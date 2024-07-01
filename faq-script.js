document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faqs-whole-container-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector(".faqs-whole-container-answer");

            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }
        });
    });
});
