// Animated stories about famous art - fun cartoon versions!

// Import individual character images - using real images instead of figma:asset
const leoImage = 'https://images.unsplash.com/photo-1669557894342-3aa8514c0fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwY3ViJTIwY3V0ZSUyMHllbGxvd3xlbnwxfHx8fDE3NzIzMTM3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const ellieImage = 'https://images.unsplash.com/photo-1743964451762-9fbd78f1a2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwZWxlcGhhbnQlMjBjdXRlJTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcyMzEzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const curatorImage = 'https://images.unsplash.com/photo-1611627408206-ca32cf655ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYXJ0JTIwY3VyYXRvciUyMG11c2V1bSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NzIzMTM3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const millyImage = 'https://images.unsplash.com/photo-1574275364876-19d20cf571ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwbW9ua2V5JTIwcGxheWZ1bCUyMGhhcHB5fGVufDF8fHx8MTc3MjMxMzcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const bennyImage = 'https://images.unsplash.com/photo-1747184046952-8890127c598a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYnVubnklMjByYWJiaXQlMjBjdXRlfGVufDF8fHx8MTc3MjMxMzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export interface Story {
  id: string;
  title: string;
  shortTitle: string;
  artistName: string;
  year: string;
  thumbnail: string;
  coverImage: string;
  description: string;
  funFacts: string[];
  artTricks: string[]; // What kids learn (simpler than "techniques")
  videoUrl: string;
  duration: string;
  ageRange: string;
  artBuddyHost: string;
  artBuddyImage: string;
}

export const stories: Story[] = [
  {
    id: 'mona-lisa-smile',
    title: "The Mystery of Mona Lisa's Smile!",
    shortTitle: 'Mona Lisa',
    artistName: 'Leonardo (a really cool artist from long ago!)',
    year: '500 years ago!',
    thumbnail: leoImage,
    coverImage: 'https://images.unsplash.com/photo-1580130732478-4e6d365e8a3d?w=800',
    description: 'Leo the Lion tells an ANIMATED story about a painting with the most famous smile ever! Why is she smiling? Let\'s find out!',
    funFacts: [
      '🎨 It took 4 YEARS to paint her!',
      '😊 Her smile looks different from every angle - magic!',
      '👀 Her eyes follow you around the room!',
      '🖼️ It\'s one of the most famous paintings EVER!'
    ],
    artTricks: [
      'How to draw a gentle smile',
      'Making soft, smooth colors',
      'Drawing realistic faces',
      'Being patient with your art'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'Leo the Lion',
    artBuddyImage: leoImage
  },
  {
    id: 'starry-night-adventure',
    title: 'The Swirly Starry Night!',
    shortTitle: 'Starry Night',
    artistName: 'Vincent (who LOVED stars and colors!)',
    year: '130 years ago!',
    thumbnail: millyImage,
    coverImage: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800',
    description: 'Milly takes you on an ANIMATED adventure through the swirly, whirly, AMAZING starry sky!',
    funFacts: [
      '🌟 The stars are painted with THICK, swirly paint!',
      '🎨 Vincent used A LOT of blue and yellow!',
      '🌙 The moon is super bright and beautiful!',
      '💙 He painted what he saw from his window!'
    ],
    artTricks: [
      'Making swirly patterns',
      'Using thick paint strokes',
      'Mixing blues and yellows',
      'Drawing stars and moons'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '7 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'Milly the Monkey',
    artBuddyImage: millyImage
  },
  {
    id: 'sunflowers-story',
    title: 'The Happiest Sunflowers Ever!',
    shortTitle: 'Sunflowers',
    artistName: 'Vincent (yes, the same star guy!)',
    year: '135 years ago!',
    thumbnail: curatorImage,
    coverImage: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800',
    description: 'The Curator shows you ANIMATED sunflowers that are SO happy and bright, they make everyone smile!',
    funFacts: [
      '🌻 He painted 11 sunflowers in a vase!',
      '💛 SO MUCH YELLOW - his favorite color!',
      '😊 These flowers are super cheerful!',
      '🎨 The paint is thick like frosting on a cake!'
    ],
    artTricks: [
      'Drawing flowers',
      'Using lots of one color',
      'Making things look happy',
      'Thick paint techniques'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '6 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'The Curator',
    artBuddyImage: curatorImage
  },
  {
    id: 'great-wave',
    title: 'The GIANT Wave!',
    shortTitle: 'The Great Wave',
    artistName: 'Hokusai (from Japan!)',
    year: '195 years ago!',
    thumbnail: bennyImage,
    coverImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    description: 'Benny hops into an ANIMATED wave that\'s HUGE! Watch the boats brave the big waves!',
    funFacts: [
      '🌊 The wave looks like it has CLAWS!',
      '🗻 There\'s a mountain hiding in the background!',
      '⛵ Three boats are riding the wave!',
      '🎨 It was printed from carved wood blocks!'
    ],
    artTricks: [
      'Drawing water and waves',
      'Making things look powerful',
      'Using blue and white together',
      'Creating movement in art'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '7 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'Benny the Bunny',
    artBuddyImage: bennyImage
  },
  {
    id: 'water-lilies',
    title: 'The Peaceful Water Lilies!',
    shortTitle: 'Water Lilies',
    artistName: 'Monet (who had a magical garden!)',
    year: '100 years ago!',
    thumbnail: ellieImage,
    coverImage: 'https://images.unsplash.com/photo-1485486312232-f0d995a59a1c?w=800',
    description: 'Ellie takes you on an ANIMATED journey to a peaceful pond with beautiful floating flowers!',
    funFacts: [
      '🌸 He had a real pond in his garden!',
      '🎨 He painted it over and over again!',
      '💚 The greens and pinks are SO pretty!',
      '😌 Looking at it makes you feel calm and happy!'
    ],
    artTricks: [
      'Painting water reflections',
      'Using soft colors',
      'Making peaceful scenes',
      'Blending colors smoothly'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'Ellie the Elephant',
    artBuddyImage: ellieImage
  },
  {
    id: 'composition-shapes',
    title: 'Shapes Make Pictures!',
    shortTitle: 'Cool Shapes',
    artistName: 'Mondrian (the square and line master!)',
    year: '100 years ago!',
    thumbnail: leoImage,
    coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    description: 'Leo shows you ANIMATED art made from squares, rectangles, and primary colors - it\'s like art LEGOS!',
    funFacts: [
      '🟥 Only red, yellow, blue, black, and white!',
      '📐 Everything is made of straight lines!',
      '🎨 It looks simple but it\'s PERFECT!',
      '🏙️ It inspired designers all over the world!'
    ],
    artTricks: [
      'Using straight lines',
      'Making art with shapes',
      'Primary colors only',
      'Balance and design'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '6 mins',
    ageRange: '6-12 years',
    artBuddyHost: 'Leo the Lion',
    artBuddyImage: leoImage
  }
];

export const getStoryById = (id: string) => {
  return stories.find(story => story.id === id);
};