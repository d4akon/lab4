function pinNote(index) {
    notes[index].isPinned = !notes[index].isPinned;

    notes.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return 0;
    });

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        generateNote(note, index);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

window.onload = function generateStorageNotes() {
    let storedNotes = localStorage.getItem("notes");
    notes = storedNotes ? JSON.parse(storedNotes) : [];
    console.log(notes);

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        generateNote(note, index);
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

    let note = new Note(title, content, color);
    notes.push(note);

    generateNote(note, notes.length - 1);
    
    console.log(notes);

    localStorage.setItem("notes", JSON.stringify(notes));
}

function generateNote(note, index){
    let noteElement = document.createElement("div");
    let titleElement = document.createElement("h4");
    let contentElement = document.createElement("p");
    let dateElement = document.createElement("p");
    let pinElement = document.createElement("input");

    pinElement.type = "checkbox";
    pinElement.checked = note.isPinned;
    pinElement.addEventListener("change", () => pinNote(index));

    let date = new Date();
    let stringDate = date.toLocaleDateString();

    titleElement.append(note.title);
    contentElement.append(note.content);
    dateElement.append("Data stworzenia: ", stringDate);

    noteElement.append(pinElement, titleElement, contentElement, dateElement);
    noteElement.style.background = note.color;
    notesContainer.append(noteElement);
}
