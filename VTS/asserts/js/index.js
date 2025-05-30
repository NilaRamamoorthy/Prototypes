  //  JavaScript Alert on Submit
        function handleForm(event) {
            event.preventDefault();
            alert('Message received!');
            event.target.reset();
        }