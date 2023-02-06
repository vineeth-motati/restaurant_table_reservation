function activateLayout() {
    document.getElementById('section').classList.remove('activate-users');
    document.getElementById('section').classList.add('activate-layout');
    document.getElementById('edit-layout').classList.toggle('active');
    document.getElementById('manage-users').classList.toggle('active');
}
function activateUsers() {
    document.getElementById('section').classList.remove('activate-layout');
    document.getElementById('section').classList.add('activate-users');
    document.getElementById('edit-layout').classList.toggle('active');
    document.getElementById('manage-users').classList.toggle('active');
}

document
    .getElementById('edit-layout')
    .addEventListener('click', activateLayout);
document
    .getElementById('manage-users')
    .addEventListener('click', activateUsers);
