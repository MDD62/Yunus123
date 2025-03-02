const buttons = document.querySelectorAll('.note-button');

        const notes = {
            do: new Audio('müzik/do.mp3'),
            re: new Audio('müzik/re.mp3'),
            mi: new Audio('müzik/mi.mp3'),
            fa: new Audio('müzik/fa.mp3'),
            sol: new Audio('müzik/sol.mp3'),
            la: new Audio('müzik/la.mp3'),
            si: new Audio('müzik/si.mp3'),
        };

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const note = button.getAttribute('data-note');
                notes[note].currentTime = 0; 
                notes[note].play();
            });
        });
