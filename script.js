
async function fetchData () {
    const request = await fetch("https://bored.api.lewagon.com/api/activity/");
    const data = await request.json();

    const getInput = document.getElementById('generateInput');
    getInput.value = data.activity;

    getInput.style.height = 'auto'; 
    getInput.style.height = (getInput.scrollHeight) + 'px';
};