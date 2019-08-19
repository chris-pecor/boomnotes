<h3>A small note application which uses Laravel and React</h1>

<p>Prerequisites:</p>
<p>The following assumes you know your way around a terminal and have the following installed: git, composer, npm and laravel (artisan)</p>
    
    <p>To install:</p>
    <p>Open your terminal and navigate to where you would like the base application installed. Say, /var/www/ or where ever your websever can easily be configured to run the app (I don't know what you have).</p>
    
    Run the following:
    git clone the repo: git clone https://github.com/chris-pecor/boomnotes.git
    
    Once the repo has been cloned successfully, cd into that joker:
    cd boomnotes
    
    Run composer:
    composer install
    
    Run npm:
    npm install
    
    Okay, now that all libraries are in place we need to copy the env:
    cp .env.example .env
    
    Generate the laravel encryption key:
    php artisan key:generate
    
    Alas, you should be able to navigate to the root directory of the app and enter some stuff into the 'Add Note' form. Have fun from there.
   
