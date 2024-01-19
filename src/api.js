const people = [
  {
    id: 'abraham',
    name: 'Abraham Lincoln',
    bio: 'Abraham Lincoln was an American lawyer and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865',
    quotes: [
      {
        id: 0,
        text: 'You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.',
      },
      {
        id: 1,
        text: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
      },
      {
        id: 2,
        text: 'Government of the people, by the people, for the people, shall not perish from the Earth.',
      },
      {
        id: 3,
        text: "Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
      },
      {
        id: 4,
        text: 'You cannot escape the responsibility of tomorrow by evading it today.',
      },
    ],
  },
  {
    id: 'jrr',
    name: 'J.R.R. Tolkien',
    bio: 'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings',
    quotes: [
      { id: 0, text: 'Not all those who wander are lost.' },
      {
        id: 1,
        text: 'Still round the corner, there may wait, a new road or a secret gate.',
      },
      {
        id: 2,
        text: 'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement. For even the very wise cannot see all ends.',
      },
      {
        id: 3,
        text: 'The proper study of Man is anything but Man; and the most improper job of any man, even saints (who at any rate were at least unwilling to take it on), is bossing other men. Not one in a million is fit for it, and least of all those who seek the opportunity.',
      },
    ],
  },
  {
    id: 'jane',
    name: 'Jane Austen',
    bio: 'Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century',
    quotes: [
      {
        id: 0,
        text: 'To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.',
      },
      {
        id: 1,
        text: 'Selfishness must always be forgiven you know, because there is no hope of a cure.',
      },
      {
        id: 2,
        text: 'My idea of good company is the company of clever, well-informed people who have a great deal of conversation; that is what I call good company.',
      },
      {
        id: 3,
        text: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      },
      {
        id: 4,
        text: 'The power of doing anything with quickness is always prized much by the possessor, and often without any attention to the imperfection of the performance.',
      },
    ],
  },
  {
    id: 'tyler',
    name: 'Tyler, The Creator',
    bio: 'Tyler Gregory Okonma (born March 6, 1991), better known as Tyler, the Creator, is an American rapper, singer, songwriter, record producer, actor, visual artist, designer and comedian',
    quotes: [
      {
        id: 0,
        text: "If the world was ending, I think I would grab some Cinnamon Toast Crunch, a bunch of water, and I'd probably just... I'd probably go crazy.",
      },
      {
        id: 1,
        text: "I want to take Justin Bieber for a month and just lock him up in a cage where we sit and make music. He's one of the most successful people in the world, but his music could be so much tighter.",
      },
      { id: 2, text: "I don't really listen to rap; I just like to rap." },
      {
        id: 3,
        text: "Usually, when I'm rappin', I'm creating a big story or a concept song that sounds like a movie to me.",
      },
    ],
  },
];

export function getPerson(idToFind) {
  return people.find(({ id }) => id === idToFind);
}

export function getPeople() {
  return people;
}
