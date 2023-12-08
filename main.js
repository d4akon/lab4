// Obsługa localStorage:
// localStorage.getItem(key) localStorage.setItem(key, stringValue) localStorage.removeItem(key) localStorage.clear()
// Zapisywanie dat (timestamp lub ISO string):
// Date.now() //timestamp
// new Date().toISOString() //format ISO
// Wyświetlanie daty
// dateObject.toLocaleString()
// dateObject.get*()

window.onload = function generateStorageNotes(){
    let notes = JSON.parse[localStorage.getItem("notes")];
    console.log(notes);
    notes.forEach(element => {
         generateNote(element);
    });
}

const notesContainer = document.getElementById("notes-container");

let notes = [];

class Note {
    constructor(title, content, color, isPinned = false){
        this.title = title;
        this.content = content;
        this.color = color;
        this.isPinned = isPinned;
    }
};

function saveValues(){
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let color = document.getElementById("color").value;

    let note = new Note(title, content, color)
    notes.push(note);

    generateNote(note);
    
    console.log(notes);

    localStorage.setItem("notes", JSON.stringify(notes));
}

function generateNote(note){
    let noteElement = document.createElement("div");
    let titleElement = document.createElement("h4");
    let contentElement = document.createElement("p");
    let dateElement = document.createElement("p");

    let date = new Date();
    let stringDate = date.toISOString();

    titleElement.append(note.title);
    contentElement.append(note.content);
    dateElement.append("Data stworzenia: ", stringDate);

    noteElement.append(titleElement, contentElement, dateElement);
    noteElement.style.background = note.color;
    notesContainer.append(noteElement);
}