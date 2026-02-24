function initAnimatedText() {
    const words = [
                    'books', 'literature', 'non-fiction', 'smut', 'romantasy', 
                    'the back of a cereal box', 'car manuals', 'history', 
                    'movie tickets', 'you', 'boys', 'people', 'dogs', 'plants',
                    'poetry', 'memoirs', 'biographies', 'mysteries', 'thrillers',
                    'sci-fi', 'fantasy', 'horror', 'young adult', 'classics',
                    'graphic novels', 'comics', 'cookbooks', 'self-help',
                    'philosophy', 'psychology', 'true crime', 'travel guides', 'textbooks',
                    'dictionaries', 'encyclopedias', 'atlases', 'diaries', 'journals',
                    'newspapers', 'magazines', 'blogs', 'emails', 'text messages',
                    'social media posts', 'wikipedia articles', 'reddit threads', 'reviews',
                    'instruction manuals', 'warning labels', 'street signs', 'menus',
                    'shopping lists', 'receipts', 'song lyrics', 'sheet music',
                    'maps', 'calendars', 'greeting cards', 'postcards',
                    'love letters', 'grocery lists', 'to-do lists',
                    'sticky notes', 'fortune cookies', 'horoscopes', 'tarot cards',
                    'subtitles', 'closed captions', 'graffiti',
                    'bathroom stalls', 'license plates', 'bumper stickers', 'tattoos',
                    'anything with words', 'literally everything', 'whatever she can find',
                    'things she probably shouldn\'t', 'words that make her cry',
                    'words that make her laugh', 'words that change her life',
                    'stories about cats', 'stories about murder', 'stories about love',
                    'stories that keep her up all night', 'fairy tales', 'folk tales',
                    'urban legends', 'conspiracy theories', 'fan fiction',
                    'academic papers', 'research studies', 'weather reports',
                    'nutritional facts','taylor\'s code',
                    'terms of service',
                    'error messages', 'spam emails',
                    'ancient scrolls', 'hieroglyphics', 
                    'tea leaves', 'palm lines', 'crystal balls', 'ouija boards',
                    'wine bottle labels', 'napkin scribblings', 'wedding invitations',
                    'parking tickets', 'speeding tickets', 'jury duty summons',
                    'doctor\'s notes',
                    'magic 8-balls', 'fortune cookies',
                    'twitter rants', 'instagram captions',
                    'tiktok comments', 'discord chats',
                    'work emails she ignores', 
                    'conference badges', 'name tags', 'price tags', 'clothing labels',
                    'shampoo bottles', 
                    'elevator buttons',
                    'library fines',
                    'therapy notes',
                    'expiration dates',
                    'store receipts',
                    'phone bills', 'internet bills',
                    'notifications', 'error logs',
                    'cookie notifications',
                    'game instructions', 'cheat codes',
                    'rule books', 'scorecards',
                    'bingo cards', 'lottery tickets', 'scratch-offs',
                    'raffle tickets', 'concert tickets', 'theater programs',
                    'playbills',
                    'museum placards', 'gallery labels',
                    'floor plans', 'emergency exits',
                    'thermostats', 'all of google',
                    'search results',
                    'breaking news',
                    'weather warnings', 'emergency broadcasts',
                    'event invites', 'calendar reminders',
                    'reservation details', 'booking confirmations',
                    'travel itineraries', 'boarding passes', 'luggage tags',
                    'ballots',
                    'book reviews', 'lots and lots of books'
                ];
                
                const animatedElement = document.getElementById('animatedWord');
                const titleElement = document.getElementById('webTitle');
                let currentIndex = 0;
                let lastIndex = 0;
                let animationInterval;
                let initialTimeout;
                let isAnimating = false;
                
                function getRandomIndex() {
                    let newIndex;
                    do {
                        newIndex = Math.floor(Math.random() * words.length);
                    } while (newIndex === lastIndex && words.length > 1);
                    return newIndex;
                }
                
                function updateWord() {
                    currentIndex = getRandomIndex();
                    animatedElement.textContent = ' ' + words[currentIndex];
                    lastIndex = currentIndex;
                }
                
                function startAnimation() {
                    if (isAnimating) return;
                    
                    isAnimating = true;
                    document.body.classList.add('blur-background'); // Add blur class
                    animatedElement.textContent = ' books';
                    
                    initialTimeout = setTimeout(() => {
                        updateWord();
                        animationInterval = setInterval(updateWord, 700);
                    }, 750);
                }
                
                function stopAnimation() {
                    isAnimating = false;
                    document.body.classList.remove('blur-background'); // Remove blur class
                    clearInterval(animationInterval);
                    clearTimeout(initialTimeout);
                    animatedElement.textContent = '';
                }
                
                titleElement.addEventListener('mouseenter', startAnimation);
                titleElement.addEventListener('mouseleave', stopAnimation);
            }
            
            document.addEventListener('DOMContentLoaded', initAnimatedText);

            window.onload = () => {
                if (new URLSearchParams(window.location.search).get("scrollBottom")) {
                    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
                }
            };