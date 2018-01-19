function addMapCells() {
    let map = document.querySelector('.map');
    for (let i = 0; i < 144; i++) {
        map.appendChild(document.createElement('div'));
    }
}
