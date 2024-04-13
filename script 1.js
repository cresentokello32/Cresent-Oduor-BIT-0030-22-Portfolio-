 
         document.getElementById('contact-link').addEventListener('click', function(event) {
            event.preventDefault();
            showContent('contact');
        });
        function showContent(page) {
        document.getElementById('contact-content').style.display = 'none';
            document.getElementById(page + '-content').style.display = 'block';
        }
    