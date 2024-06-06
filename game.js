const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

const story = [
    {
        text: "당신은 어둠의 성에서 깨어납니다. 당신의 목표는 이 곳을 탈출하는 것입니다. 어떻게 할 건가요?",
        options: [
            { text: "도망친다", nextStoryIndex: 1 },
            { text: "선착대기한다", nextStoryIndex: 2 }
        ]
    },
    {
        text: "당신은 어둠의 성에서 도망칩니다. 성문은 닫혀있고, 당신은 나가기 위해 암석에 올라가야 합니다. 어떻게 할 건가요?",
        options: [
            { text: "암석을 올라간다", nextStoryIndex: 3 },
            { text: "뒤로 돌아간다", nextStoryIndex: 0 }
        ]
    },
    {
        text: "당신은 어둠의 성에서 선착대기합니다. 어둠의 환영에 깨어난 후, 당신은 성 주변의 풍경을 탐험할 수 있습니다. 어떻게 할 건가요?",
        options: [
            { text: "풍경을 탐험한다", nextStoryIndex: 4 },
            { text: "장소를 떠난다", nextStoryIndex: 0 }
        ]
    },
    {
        text: "당신은 성문에 도착합니다. 그러나 성문은 닫혀있고, 외부로 향하는 길은 매우 위험합니다. 어떻게 할 건가요?",
        options: [
            { text: "성문을 열어본다", nextStoryIndex: 5 },
            { text: "암석으로 돌아간다", nextStoryIndex: 1 }
        ]
    },
    {
        text: "당신은 성 주변을 탐험합니다. 그러나 어둠의 환영은 당신을 현혹시키고, 당신은 길을 잃습니다. 어떻게 할 건가요?",
        options: [
            { text: "계속 탐험한다", nextStoryIndex: 6 },
            { text: "되돌아간다", nextStoryIndex: 0 }
        ]
    },
    {
        text: "당신은 성문을 열고 밖으로 나갑니다. 어둠의 세계로 향하는 길은 위험하지만, 당신은 자유롭습니다. 축하합니다!",
        options: []
    },
    {
        text: "당신은 계속해서 성 주변을 탐험합니다. 이 곳에는 끝없는 어둠이 펼쳐져 있습니다...",
        options: [
            { text: "계속 탐험한다", nextStoryIndex: 7 },
            { text: "되돌아간다", nextStoryIndex: 0 }
        ]
    },
    {
        text: "당신은 어둠의 환영에 속아 무한한 어둠 속으로 빨려들어갑니다. 당신은 다시는 밝은 세계를 보지 못합니다...",
        options: []
    }
];

let currentStoryIndex = 0;

function renderStory() {
    const currentStory = story[currentStoryIndex];
    storyElement.textContent = currentStory.text;

    optionsElement.innerHTML = '';
    currentStory.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.nextStoryIndex));
        optionsElement.appendChild(button);
    });
}

function selectOption(nextStoryIndex) {
    currentStoryIndex = nextStoryIndex;
    renderStory();
}

renderStory();
