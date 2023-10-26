const animateCursor = (event, interacting, interactable) => {
    const pointer = document.getElementById('pointer');
    const custom_cursor = document.getElementById('cursor');

    let cursorX = `calc(${event.clientX}px - 1.125rem)`,
        cursorY = `calc(${event.clientY}px - 1.125rem)`;

    let pointerX = `calc(${event.clientX}px - 0.25rem)`,
        pointerY = `calc(${event.clientY}px - 0.25rem)`;

    pointer.style.transform = `translate(${pointerX}, ${pointerY})`;

    const dimensions = interacting ? interactable.getBoundingClientRect() : null;
    const radius = interacting ? '0px' : '50%';

    if (interacting) {
        cursorX = (dimensions.x - 2) + 'px';
        cursorY = (dimensions.y - 2) + 'px';
    };

    const cursor_keyframes = {
        transform: `translate(${cursorX}, ${cursorY})`,
        width: interacting ? `${dimensions.width}px` : '2rem',
        height: interacting ? `${dimensions.height}px` : '2rem',
        borderRadius: radius,
    };

    custom_cursor.animate(cursor_keyframes, {
        duration: 400,
        fill: 'forwards'
    });
};

window.onmousemove = (event) => {
    const interactable = event.target.closest('.interactable'),
        interacting = (interactable !== null);

    animateCursor(event, interacting, interactable);
};

window.onmousedown = (event) => {
    custom_cursor.style.backgroundColor = '#F5F749';
};

window.onmouseup = (event) => {
    custom_cursor.style.backgroundColor = 'transparent';
};
