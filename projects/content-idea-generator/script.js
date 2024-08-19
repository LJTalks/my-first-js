document.getElementById('generateBtn').addEventListener('click', function () {
    const keyword = document.getElementById('keywordInput').value.trim();
    if (keyword) {
        generateIdea(keyword);
    } else {
        alert("Please enter a keyword");
        document.getElementById('keywordInput').focus();
    }
});

function generateIdea(keyword) {
    const ideas = [
        `How to effectively use ${keyword} in your daily routine`,
        `Top 10 tips for mastering ${keyword}`,
        `The history of ${keyword} and its impact on modern society`,
        `Why ${keyword} is important for your business`,
        `The future of ${keyword} in the next decade`
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    displayIdea(randomIdea);
}

// const ideaText = document.createElement('span');
// ideaText.textContent = idea;
// ideaText.className = 'idea-text';

function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');
    const buttonsContainer = document.getElementById('buttonsContainer');
    
    ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';
    ideaItem.textContent = idea;
    ideasContainer.appendChild(ideaItem);
}


function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');

    const ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';

    ideaItem.innerHTML = `
        <span>${idea}</span>
        <button class="copyBtn">Copy</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    ideasContainer.appendChild(ideaItem);

    // Add event listeners for the buttons
    ideaItem.querySelector('.copyBtn').addEventListener('click', copyIdea);
    ideaItem.querySelector('.editBtn').addEventListener('click', editIdea);
    ideaItem.querySelector('.deleteBtn').addEventListener('click', deleteIdea);
}

function copyIdea(event) {
    // Logic to copy the idea (e.g., copy to clipboard)
    const idea = event.target.parentElement.querySelector('span').textContent;
    console.log(`Copying idea: ${idea}`);
}

function editIdea(event) {
    // Logic to edit the idea
    const ideaElement = event.target.parentElement.querySelector('span');
    const newIdea = prompt('Edit your idea:', ideaElement.textContent);
    if (newIdea) {
        ideaElement.textContent = newIdea;
    }
}

function deleteIdea(event) {
    // Logic to delete the idea
    const ideaItem = event.target.parentElement;
    ideaItem.remove();
}