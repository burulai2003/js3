var user = {
    name: 'movie series',
    title: 'EUPHORIA',
    premiered: 'on July 16,2019',
    theNumberOfEpisodes: '2 seasons, 16 episodes',
    aLittleAboutTheMovie: 'A group of high school students struggle with drugs, love, social media and money as they come of age while trying to establish their identity.',

    Cast: {
        mainCharacters: 'Zendaya, Jacob Elordi , Hunter Shuffer, Sydney Sweeney',
        producer: 'Daphna Levin',
        composer: 'Labrinth'
    }
}
console.log('about' + ' ' + user.name)
console.log('the name of movie series' + ' ' + user.title);
console.log('premiered' + ' ' + user.premiered)
console.log('the number of episodes' + ' ' + user.theNumberOfEpisodes)
console.log('The movie is about' + ' ' + user.aLittleAboutTheMovie)
console.log('Main Charachters' + ' ' + user.Cast.mainCharacters)
console.log('producer' + ' ' + user.Cast.producer)
console.log('composer' + ' ' + user.Cast.composer)
