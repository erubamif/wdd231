const courses = [
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 2,
        completed: true,
        subject: "WDD"
    },
    {
        code: "WDD 131",
        name: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true,
        subject: "WDD"
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development I",
        credits: 2,
        completed: false,
        subject: "WDD"
    },
    {
        code: "CSE 110",
        name: "Introduction to Programming",
        credits: 2,
        completed: true,
        subject: "CSE"
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 2,
        completed: true,
        subject: "CSE"
    },
    {
        code: "CSE 210",
        name: "Programming with Classes",
        credits: 2,
        completed: true,
        subject: "CSE"
    }
];

const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#total-credits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
        `;

        courseContainer.appendChild(card);
    });

    const credits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredits.textContent = credits;
}

allButton.addEventListener("click", () => {
    displayCourses(courses);
});

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});

displayCourses(courses);