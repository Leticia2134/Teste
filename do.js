document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });

    card.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        if (draggingCard) {
            e.target.appendChild(draggingCard);
        }
    });
});
