document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notesList');
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');

    // Load notes from local storage and display them
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note-item';
            noteElement.innerHTML = `
                <p>${note.content}</p>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            `;
            notesList.appendChild(noteElement);
            
            // Attach event listeners for edit and delete buttons
            noteElement.querySelector('.editBtn').addEventListener('click', () => editNote(note.id));
            noteElement.querySelector('.deleteBtn').addEventListener('click', () => deleteNote(note.id));
        });
    }

    // Add a new note
    addNoteBtn.addEventListener('click', () => {
        const content = noteInput.value.trim();
        if (content) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            const newNote = {
                id: Date.now(),
                content: content,
                timestamp: new Date().toLocaleString()
            };
            notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    });

    // Edit a note
    function editNote(id) {
        const notes = JSON.parse(localStorage.getItem('notes'));
        const note = notes.find(note => note.id === id);
        if (note) {
            const newContent = prompt('Edit your note:', note.content);
            if (newContent) {
                note.content = newContent;
                localStorage.setItem('notes', JSON.stringify(notes));
                loadNotes();
            }
        }
    }

    // Delete a note
    function deleteNote(id) {
        const notes = JSON.parse(localStorage.getItem('notes'));
        const updatedNotes = notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        loadNotes();
    }

    // Initial load of notes
    loadNotes();
});
