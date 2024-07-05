
document.getElementById('serverButton').addEventListener('click', function() {
    const userResponse = confirm('You clicked the server button! Do you want to connect to the server at: Prismpeak.mczhost.fun?');
    
});


document.getElementById('discordButton').addEventListener('click', function() {
    const userResponse = confirm('Proceed to Discord Invitation Link? PM Ofpi Chrus To invite you');
    
    }
);






document.querySelectorAll('.navbar ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.style.fontWeight = 'bold';
        link.style.color = 'red';
    }
});

