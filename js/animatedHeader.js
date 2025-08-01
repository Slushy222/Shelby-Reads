 function initAnimatedText() {
    const words = [
                    'books', 'literature', 'non-fiction', 'smut', 'romantasy', 
                    'the back of a cereal box', 'car manuals', 'history', 
                    'movie tickets', 'you', 'boys', 'people', 'dogs', 'plants',
                    'poetry', 'memoirs', 'biographies', 'mysteries', 'thrillers',
                    'sci-fi', 'fantasy', 'horror', 'young adult', 'classics',
                    'graphic novels', 'manga', 'comics', 'cookbooks', 'self-help',
                    'philosophy', 'psychology', 'true crime', 'travel guides', 'textbooks',
                    'dictionaries', 'encyclopedias', 'atlases', 'diaries', 'journals',
                    'newspapers', 'magazines', 'blogs', 'emails', 'text messages',
                    'social media posts', 'wikipedia articles', 'reddit threads', 'reviews',
                    'instruction manuals', 'warning labels', 'street signs', 'menus',
                    'shopping lists', 'receipts', 'song lyrics', 'sheet music',
                    'maps', 'calendars', 'greeting cards', 'postcards',
                    'love letters', 'break-up texts', 'grocery lists', 'to-do lists',
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
                    'ingredient lists', 'nutritional facts', 'assembly instructions',
                    'user manuals', 'terms of service', 'privacy policies',
                    'error messages', 'spam emails', 'chain letters',
                    'ancient scrolls', 'hieroglyphics', 'cave paintings', 'runes',
                    'tea leaves', 'palm lines', 'crystal balls', 'ouija boards',
                    'wine bottle labels', 'beer coasters', 'napkin scribblings', 'wedding invitations',
                    'parking tickets', 'speeding tickets', 'jury duty summons',
                    'doctor\'s notes', 'prescription bottles',
                    'fortune teller cards', 'magic 8-balls', 'fortune cookies',
                    'twitter rants', 'instagram captions',
                    'tiktok comments', 'youtube descriptions', 'discord chats',
                    'work emails she ignores', 'meeting notes',
                    'conference badges', 'name tags', 'price tags', 'clothing labels',
                    'food packaging', 'shampoo bottles', 'soap dispensers',
                    'elevator buttons', 'exit signs', 'fire extinguisher instructions',
                    'first aid kits', 'safety manuals', 'apartment leases', 'insurance policies',
                    'bank statements', 'credit card bills', 'tax forms',
                    'voter registration', 'census forms', 'survey responses',
                    'library fines', 'overdue notices', 'late payment warnings', 'noise complaints', 'hoa violations',
                    'speeding camera tickets', 'red light violations', 'jury summons',
                    'therapy notes', 'prescription labels',
                    'vitamin bottles', 'supplement facts', 'expiration dates',
                    'serial numbers', 'model numbers', 'warranty cards',
                    'return policies', 'store receipts', 'membership agreements', 'gym contracts',
                    'phone bills', 'internet bills', 'utility statements',
                    'cable packages', 'streaming subscriptions',
                    'download confirmations', 'update notifications', 'error logs',
                    'system messages', 'pop-up ads', 'cookie notifications',
                    'newsletter signups', 'unsubscribe links', 'confirmation emails',
                    'password reset emails', 'security alerts', 'login notifications',
                    'backup codes', 'verification texts', 'two-factor prompts',
                    'captcha puzzles', 'robot tests', 'feedback forms', 'review requests', 'rating prompts',
                    'game instructions', 'cheat codes', 'walkthrough guides',
                    'strategy guides', 'rule books', 'scorecards',
                    'bingo cards', 'lottery tickets', 'scratch-offs',
                    'raffle tickets', 'concert tickets', 'theater programs',
                    'playbills', 'opera programs', 'ballet programs',
                    'museum placards', 'art descriptions', 'gallery labels',
                    'exhibit information', 'historical markers', 'monument inscriptions',
                    'building directories', 'floor plans', 'emergency exits',
                    'fire escape routes', 'evacuation procedures', 'safety protocols',
                    'visitor passes', 'security clearances', 'access cards', 'key fobs', 'door codes',
                    'combination locks', 'remote controls', 'button labels', 'switch plates',
                    'circuit breakers', 'fuse boxes', 'electrical panels',
                    'thermostats', 'timer settings',
                    'siri suggestions', 'google searches', 'autocomplete suggestions',
                    'search results', 'sponsored ads', 'related articles',
                    'recommended videos', 'suggested friends', 'people you may know',
                    'trending topics', 'breaking news', 'news alerts',
                    'weather warnings', 'emergency broadcasts', 'amber alerts',
                    'missing person reports', 'wanted posters',
                    'reward flyers', 'lost pet signs', 'garage sale signs',
                    'yard sale prices', 'estate sale listings', 'auction catalogs',
                    'real estate listings', 'rental agreements', 'roommate ads',
                    'personal ads', 'dating profiles', 'match suggestions', 'friend requests',
                    'group invitations', 'event invites', 'calendar reminders',
                    'appointment confirmations', 'reservation details', 'booking confirmations',
                    'travel itineraries', 'boarding passes', 'luggage tags',
                    'customs forms', 'passport renewals',
                    'voter guides', 'ballots', 'candidate statements',
                    'political flyers', 'campaign promises', 'election results',
                    'poll numbers', 'exit surveys',
                    'code reviews', 'bug reports', 'book reviews'
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
                    animatedElement.textContent = ' ' + words[currentIndex]; // Add space before word
                    lastIndex = currentIndex;
                }
                
                function startAnimation() {
                    if (isAnimating) return; // Prevent multiple animations
                    
                    isAnimating = true;
                    animatedElement.textContent = ' books'; // Always show "books" first on hover
                    
                    initialTimeout = setTimeout(() => {
                        updateWord(); // Then change to random word after a brief moment
                        animationInterval = setInterval(updateWord, 500); // Continue every 0.5 seconds
                    }, 750); // Wait 750ms before starting the cycling
                }
                
                function stopAnimation() {
                    isAnimating = false;
                    clearInterval(animationInterval);
                    clearTimeout(initialTimeout);
                    animatedElement.textContent = ''; // Hide the word completely
                }
                
                // Add hover event listeners
                titleElement.addEventListener('mouseenter', startAnimation);
                titleElement.addEventListener('mouseleave', stopAnimation);
            }
            
            // Initialize when page loads
            document.addEventListener('DOMContentLoaded', initAnimatedText);