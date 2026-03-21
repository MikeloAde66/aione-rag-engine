// Character images - using real images instead of figma:asset imports
const leoImage = 'https://images.unsplash.com/photo-1669557894342-3aa8514c0fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwY3ViJTIwY3V0ZSUyMHllbGxvd3xlbnwxfHx8fDE3NzIzMTM3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const ellieImage = 'https://images.unsplash.com/photo-1743964451762-9fbd78f1a2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwZWxlcGhhbnQlMjBjdXRlJTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcyMzEzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const curatorImage = 'https://images.unsplash.com/photo-1611627408206-ca32cf655ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYXJ0JTIwY3VyYXRvciUyMG11c2V1bSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NzIzMTM3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const millyImage = 'https://images.unsplash.com/photo-1574275364876-19d20cf571ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwbW9ua2V5JTIwcGxheWZ1bCUyMGhhcHB5fGVufDF8fHx8MTc3MjMxMzcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const bennyImage = 'https://images.unsplash.com/photo-1747184046952-8890127c598a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYnVubnklMjByYWJiaXQlMjBjdXRlfGVufDF8fHx8MTc3MjMxMzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export interface Character {
  id: string;
  name: string;
  fullName: string;
  role: string;
  emoji: string;
  image: string; // Added image property
  color: string;
  bgColor: string;
  borderColor: string;
  animal: string;
  age: string;
  personality: string[];
  catchphrase: string;
  funFacts: string[];
  likes: string[];
  dislikes: string[];
  teachingStyle: string;
  favoriteMaterial: string;
  specialSkill: string;
  quote: string;
  voiceDescription: string;
  backstory: string;
}

export const characters: Record<string, Character> = {
  'leo-lion': {
    id: 'leo-lion',
    name: 'Leo the Lion',
    fullName: 'Leo the Lion',
    role: 'Drawing & Sketching Master',
    emoji: '🦁',
    image: leoImage,
    color: 'orange-500',
    bgColor: 'orange-50',
    borderColor: 'orange-300',
    animal: 'Lion',
    age: '8 years old',
    personality: ['Brave', 'Creative', 'Encouraging', 'Patient'],
    catchphrase: 'Let\'s draw something ROAR-some!',
    funFacts: [
      'Leo loves to paint sunsets with his mane flowing in the wind!',
      'His favorite color is golden yellow, just like his mane',
      'He once drew a self-portrait that won the Savannah Art Contest!',
      'Leo can draw with both paws at the same time',
      'His studio has over 1,000 crayons in every color imaginable',
    ],
    likes: ['Warm colors', 'Big brushes', 'Sunny days', 'Bold lines', 'Teaching friends'],
    dislikes: ['Rainy days', 'Mistakes that can\'t be fixed', 'Running out of yellow paint'],
    teachingStyle: 'Leo is brave and bold! He encourages kids to be confident with their art and reminds them that every artist makes mistakes - that\'s how we learn!',
    favoriteMaterial: 'Big, chunky crayons',
    specialSkill: 'Drawing amazing animal faces',
    quote: 'Every line you draw makes you braver! Don\'t be afraid to try!',
    voiceDescription: 'Warm, confident, and encouraging - like a friendly big brother who believes in you',
    backstory: 'Leo grew up in the sunny savannah where he loved watching the golden sunsets. One day, he tried to draw what he saw and discovered his love for art! Now he teaches other animals to be brave with their creativity.',
  },
  'milly-monkey': {
    id: 'milly-monkey',
    name: 'Milly the Monkey',
    fullName: 'Milly the Monkey',
    role: 'Color Mixing Expert',
    emoji: '🐵',
    image: millyImage,
    color: 'amber-600',
    bgColor: 'amber-50',
    borderColor: 'amber-300',
    animal: 'Monkey',
    age: '7 years old',
    personality: ['Playful', 'Creative', 'Curious', 'Energetic'],
    catchphrase: 'Let\'s monkey around with colors!',
    funFacts: [
      'Milly can swing from vine to vine while painting!',
      'She discovered how to mix colors by accident when playing with fruit',
      'Milly once created 50 different shades of brown!',
      'Her tail is like an extra paintbrush - she uses it to create unique effects',
      'She keeps her favorite colors in coconut shells',
    ],
    likes: ['Mixing colors', 'Bananas', 'Swinging while drawing', 'Bright tropical colors', 'Making messes'],
    dislikes: ['Staying still too long', 'Boring colors', 'Clean studios'],
    teachingStyle: 'Milly is playful and fun! She teaches kids that mixing colors is like magic - you can create any color you imagine by experimenting and playing!',
    favoriteMaterial: 'Watercolor paints and lots of mixing palettes',
    specialSkill: 'Mixing the perfect color combinations',
    quote: 'Colors are meant to be mixed and matched! Don\'t be afraid to experiment!',
    voiceDescription: 'Playful, enthusiastic, and giggly - like a fun friend who loves to explore',
    backstory: 'Milly grew up in the jungle where she loved playing with colorful fruits and flowers. One day she discovered she could mix colors together to create new ones, and now she teaches everyone about the magic of color mixing!',
  },
  'ellie-elephant': {
    id: 'ellie-elephant',
    name: 'Ellie the Elephant',
    fullName: 'Ellie the Elephant',
    role: 'Memory & Pattern Master',
    emoji: '🐘',
    image: ellieImage,
    color: 'gray-600',
    bgColor: 'gray-50',
    borderColor: 'gray-300',
    animal: 'Elephant',
    age: '9 years old',
    personality: ['Wise', 'Patient', 'Gentle', 'Memory expert'],
    catchphrase: 'An elephant never forgets... especially not their art lessons!',
    funFacts: [
      'Ellie never forgets a single drawing she\'s ever seen!',
      'She uses her trunk to spray paint like a living paintbrush!',
      'Ellie can remember complex patterns and recreate them perfectly',
      'Her favorite thing is teaching kids about shapes and patterns',
      'She once painted an entire mural using only her trunk!',
    ],
    likes: ['Patterns', 'Teaching shapes', 'Remembering details', 'Big canvases', 'Water painting'],
    dislikes: ['Forgetting things (which never happens!)', 'Rushing through art', 'Small paintbrushes'],
    teachingStyle: 'Ellie is wise and patient! She helps kids understand patterns, shapes, and how to remember what they\'ve learned. She never forgets to encourage her students!',
    favoriteMaterial: 'Large brushes and pattern stamps',
    specialSkill: 'Perfect memory for shapes and patterns',
    quote: 'Remember: practice makes perfect, and I never forget a student\'s progress!',
    voiceDescription: 'Gentle, wise, and reassuring - like a kind grandmother who always believes in you',
    backstory: 'Ellie discovered her amazing memory when she was young. She realized she could remember every pattern, shape, and technique she learned. Now she uses her gift to help young artists never forget the basics!',
  },
  'benny-bunny': {
    id: 'benny-bunny',
    name: 'Benny the Bunny',
    fullName: 'Benny the Bunny',
    role: 'Shape & Speed Artist',
    emoji: '🐰',
    image: bennyImage,
    color: 'gray-500',
    bgColor: 'gray-50',
    borderColor: 'gray-300',
    animal: 'Bunny',
    age: '6 years old',
    personality: ['Energetic', 'Fast', 'Playful', 'Fun'],
    catchphrase: 'Quick like a bunny! Let\'s draw shapes and have fun!',
    funFacts: [
      'Benny is the fastest artist in the forest - he can draw 10 shapes in one minute!',
      'He hops around while he draws, never staying still!',
      'Benny invented \"hop drawing\" - making art while bouncing!',
      'His ears wiggle when he\'s really focused on his shapes',
      'He can draw perfect circles in his sleep (and sometimes does!)',
    ],
    likes: ['Drawing circles and squares', 'Fast sketching', 'Carrots', 'Hopping around', 'Teaching shapes'],
    dislikes: ['Sitting still too long', 'Slow, boring lessons', 'Running out of energy'],
    teachingStyle: 'Benny is energetic and exciting! He teaches kids that learning shapes can be fast and fun. You don\'t have to spend hours to create something cool!',
    favoriteMaterial: 'Quick-dry markers and shape stencils',
    specialSkill: 'Speed drawing and teaching basic shapes',
    quote: 'Shapes are everywhere! Circles, squares, and triangles make everything!',
    voiceDescription: 'Energetic, fast-talking, and enthusiastic - like an excited friend who can\'t wait to play',
    backstory: 'Benny was always the fastest bunny in the meadow. One day he discovered he could draw shapes just as fast as he could hop, and now he teaches others that learning can be quick, fun, and bouncy!',
  },
  'the-curator': {
    id: 'the-curator',
    name: 'The Curator',
    fullName: 'Curator Q. Rator',
    role: 'Museum Director & Art Guide',
    emoji: '🎨',
    image: curatorImage,
    color: 'blue-600',
    bgColor: 'blue-50',
    borderColor: 'blue-300',
    animal: 'Art Expert',
    age: 'Timeless',
    personality: ['Knowledgeable', 'Inspiring', 'Wise', 'Friendly'],
    catchphrase: 'Welcome to the world of art, young curator!',
    funFacts: [
      'The Curator knows everything about every piece of art in the museum!',
      'She has traveled to art museums all around the world',
      'The Curator has been teaching art for many, many years',
      'She can tell you the story behind any painting or drawing',
      'The Curator\'s favorite thing is watching kids discover their love for art',
    ],
    likes: ['Art history', 'Telling stories', 'Museums', 'Helping kids learn', 'Famous masterpieces'],
    dislikes: ['Messy galleries', 'Not appreciating art', 'Touching artwork with dirty hands'],
    teachingStyle: 'The Curator is wise and inspiring! She guides kids through the wonderful world of art, sharing stories about famous artists and helping kids understand what makes art special.',
    favoriteMaterial: 'A magical curator\'s magnifying glass',
    specialSkill: 'Knowing the story behind every piece of art',
    quote: 'Every great artist was once a beginner. Your journey starts here!',
    voiceDescription: 'Warm, knowledgeable, and inspiring - like a friendly museum guide who loves sharing her passion',
    backstory: 'The Curator has dedicated her life to art. She runs the Q Rator Museum and loves nothing more than introducing young artists to the magical world of creativity and helping them discover their own artistic talents!',
  },
};

export const getAllCharacters = (): Character[] => {
  try {
    return Object.values(characters);
  } catch (error) {
    console.error('Error getting all characters:', error);
    return [];
  }
};

export const getCharacterById = (id: string): Character | undefined => {
  try {
    if (!id) return undefined;
    return characters[id];
  } catch (error) {
    console.error('Error getting character by id:', error);
    return undefined;
  }
};

export const getCharactersByLesson = (lessonId: string): Character[] => {
  try {
    // Map lessons to their teaching characters
    const lessonCharacterMap: Record<string, string[]> = {
      'beginner-1': ['leo-lion'],
      'beginner-2': ['benny-bunny'],
      'beginner-3': ['milly-monkey'],
      'beginner-4': ['the-curator'],
      'beginner-5': ['ellie-elephant'],
    };

    const characterIds = lessonCharacterMap[lessonId] || [];
    return characterIds.map(id => characters[id]).filter(Boolean);
  } catch (error) {
    console.error('Error getting characters by lesson:', error);
    return [];
  }
};