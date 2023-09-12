const dynamicContent = document.getElementById("video-btns-title");
const scrollLesson = document.querySelector(".scroll-lesson");
const video_show = document.querySelector(".video-screen iframe");
const Next_btn = document.querySelector(".next-btn");
const prev_btn = document.querySelector(".prev-btn");

scrollLesson.addEventListener("click", function (event) {
    const target = event.target.closest(".scroll-lesson-item");
    if (target) {
        const lessonTitle = target.querySelector(".lesson-title");
        const lessonURL = target.querySelector(".lesson-url");

        dynamicContent.textContent = lessonTitle.textContent;
        video_show.src = lessonURL.textContent;
    }
});

Next_btn.addEventListener("click", function () {
    const title1 = document.querySelector(".video-btns-title"); 
    const str = title1.textContent;
    const match = str.match(/\d+/);
    const number = parseInt(match[0]);

    const next_mark = parseInt(number, 10) + 1;
    const next_scroll_lesson = document.querySelector(`.scroll-lesson .scroll-lesson-item:nth-child(${next_mark})`); 
    const next_lesson_title = next_scroll_lesson.querySelector(".lesson-title")
    const next_lesson_url = next_scroll_lesson.querySelector(".lesson-url")

    title1.textContent = next_lesson_title.textContent
    video_show.src = next_lesson_url.textContent
});

prev_btn.addEventListener("click", function () {
    const title1 = document.querySelector(".video-btns-title"); 
    const str = title1.textContent;
    const match = str.match(/\d+/);
    const number = parseInt(match[0]);

    const prev_mark = parseInt(number, 10) - 1;
    const prev_scroll_lesson = document.querySelector(`.scroll-lesson .scroll-lesson-item:nth-child(${prev_mark})`); 
    const prev_lesson_title = prev_scroll_lesson.querySelector(".lesson-title")
    const prev_lesson_url = prev_scroll_lesson.querySelector(".lesson-url")

    title1.textContent = prev_lesson_title.textContent
    video_show.src = prev_lesson_url.textContent
    // next_scroll_lesson.style.backgroundColor = "red"
});

function addLesson(lessonName, lessonDuration, lessonURL) {
    const newLesson = `
        <div class="scroll-lesson-item rounded-4 m-auto my-1 d-flex align-items-center justify-content-around">
            <div class="video-img w-25 h-75 bg-black rounded-4">
                <img src="" alt="" class="w-100 h-100 rounded-4">
            </div>
            <div class="lesson-title text-white fw-bold">${lessonName}</div>
            <div class="lesson-duration text-white fw-bold">${lessonDuration}</div>
            <div class="lesson-url text-white fw-bold d-none">${lessonURL}</div>
        </div>
    `;

    scrollLesson.innerHTML += newLesson;

    // Get the newly added lesson item
    const newLessonItem = scrollLesson.lastElementChild;

    // Attach event listener to the new lesson item
    newLessonItem.addEventListener("click", function () {
        dynamicContent.textContent = lessonName;
        video_show.src = lessonURL;
    });

    // Extract and set the thumbnail for the new lesson
    const thumbnail = newLessonItem.querySelector(".video-img img");
    const regex = /embed\/([a-zA-Z0-9_-]+)/;
    const match = lessonURL.match(regex);

    if (match) {
        const videoId = match[1];
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        thumbnail.src = thumbnailUrl;
    }
}

// Example usage of the addLesson function
addLesson('Lesson 1', '2.1 Hour', 'https://www.youtube.com/embed/mvZHDpCHphk?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 2', '2.1 Hour', 'https://www.youtube.com/embed/02a5T6ktx8M?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 3', '2.1 Hour', 'https://www.youtube.com/embed/xiMHoMVWdI4?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 4', '2.1 Hour', 'https://www.youtube.com/embed/YsENRLNaYug?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 5', '2.1 Hour', 'https://www.youtube.com/embed/zlkIcCHj3Dg?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 6', '2.1 Hour', 'https://www.youtube.com/embed/43lT7k0Zws0?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 7', '2.1 Hour', 'https://www.youtube.com/embed/hQnZxqp3Q0Y?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 8', '2.1 Hour', 'https://www.youtube.com/embed/U0307lBCiDk?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 9', '2.1 Hour', 'https://www.youtube.com/embed/cr2Nk2E0f5A?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 10', '2.1 Hour', 'https://www.youtube.com/embed/7I_fUo5mO-U?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 11', '2.1 Hour', 'https://www.youtube.com/embed/j0Wktr70Cgw?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
addLesson('Lesson 12', '2.1 Hour', 'https://www.youtube.com/embed/PEp4oqzthnw?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs');
