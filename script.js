let dragItem = document.getElementById("dragItem");
        let dropZone = document.getElementById("dropZone");
        let message = document.getElementById("message");

        //  Drag Start Event (Jab dragging start ho)
        dragItem.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text", event.target.id);
            message.innerText = "Dragging started!";
        });

        //  Drag Event (Jab dragging ho rahi ho)
        dragItem.addEventListener("drag", function () {
            message.innerText = "Dragging...";
        });

        //  Drag End Event (Jab dragging end ho jaye)
        dragItem.addEventListener("dragend", function () {
            message.innerText = "Dragging ended!";
        });

        //  Drag Over Event (Jab dragged item drop zone ke upar ho)
        dropZone.addEventListener("dragover", function (event) {
            event.preventDefault(); // Default behavior rokna zaroori hai warna drop event trigger nahi hoga
            message.innerText = "You are over the drop zone!";
        });

        //  Drop Event (Jab item drop ho jaye)
        dropZone.addEventListener("drop", function (event) {
            event.preventDefault();
            let draggedElement = document.getElementById(event.dataTransfer.getData("text"));
            dropZone.appendChild(draggedElement);
            message.innerText = "Item dropped successfully!";
        });