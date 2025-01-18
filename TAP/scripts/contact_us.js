document.getElementById('contactform').addEventListener('submit',function(event) {
    event.preventDefault();
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (userName && userEmail && message){
        alert(`მადლობა ${userName} თქვენი წერილისთვის! დაგიკავშირდებით.`)
    }else {
        alert(`შეავსეთ ყველა ველი წერილის დასატოვებლად !`)
    }
});