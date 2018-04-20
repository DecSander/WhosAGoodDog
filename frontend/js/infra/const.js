let preferencesDefaultBeforeMod = {
  activity_minutes: 0.5,
  shedding: 0.5,
  coat_length: 0.5,
  weight: 0.5,
  energy_level: 0.5,
  food_monthly_cost: 0.5,
  lifespan: 0.5,
  height: 0.5,
  popularity: 0.5,
  trainability: 0.5,
  temperament: 0.5,
  health: 0.5,
  grooming_frequency: 0.5,
  walk_miles: 0.5
};

Object.keys(preferencesDefaultBeforeMod).forEach(k => {
  preferencesDefaultBeforeMod[`${k}Importance`] = 0;
});

export const preferencesDefault = Object.freeze(preferencesDefaultBeforeMod);

export const preferenceKeys = Object.freeze(Object.keys(preferencesDefault));

export const preferenceLabels = Object.freeze({
  activity_minutes: ['Inactive', 'Active'],
  shedding: ['Doesn\'t Shed', 'Sheds Often'],
  coat_length: ['Short', 'Long'],
  weight: ['Small', 'Big'],
  energy_level: ['Low Energy', 'High Energy'],
  food_monthly_cost: ['Cheap', 'Expensive'],
  lifespan: ['Short', 'Long'],
  height: ['Short', 'Tall'],
  popularity: ['Unpopular', 'Popular'],
  trainability: ['Stubborn', 'Easy to Train'],
  temperament: ['Calm', 'Excited'],
  health: ['Unhealthy', 'Healthy'],
  grooming_frequency: ['Infrequently', 'Frequently'],
  walk_miles: ['Rarely', 'Often']
});

export const breeds = ['rottweiler', 'miniature-pinscher', 'nederlandse-kooikerhondje', 'american-leopard-hound', 'spinone-italiano', 'welsh-terrier', 'staffordshire-bull-terrier', 'giant-schnauzer', 'teddy-roosevelt-terrier', 'shikoku', 'hokkaido', 'berger-picard', 'jagdterrier', 'american-water-spaniel', 'azawakh', 'chihuahua', 'weimaraner', 'doberman-pinscher', 'english-toy-spaniel', 'cairn-terrier', 'miniature-american-shepherd', 'hovawart', 'basenji', 'beagle', 'portuguese-sheepdog', 'australian-kelpie', 'pudelpointer', 'bearded-collie', 'beauceron', 'field-spaniel', 'slovensky-kopov', 'belgian-laekenois', 'cardigan-welsh-corgi', 'pyrenean-shepherd', 'bergamasco-sheepdog', 'brussels-griffon', 'irish-wolfhound', 'pyrenean-mastiff', 'sealyham-terrier', 'labrador-retriever', 'american-eskimo-dog', 'bluetick-coonhound', 'tibetan-terrier', 'black-and-tan-coonhound', 'skye-terrier', 'norrbottenspets', 'soft-coated-wheaten-terrier', 'norfolk-terrier', 'chesapeake-bay-retriever', 'chinese-shar-pei', 'border-collie', 'catahoula-leopard-dog', 'cirneco-delletna', 'german-wirehaired-pointer', 'borzoi', 'portuguese-pointer', 'kai-ken', 'flat-coated-retriever', 'keeshond', 'sloughi', 'biewer-terrier', 'harrier', 'irish-setter', 'russell-terrier', 'perro-de-presa-canario', 'bull-terrier', 'czechoslovakian-vlcak', 'silky-terrier', 'pekingese', 'caucasian-shepherd-dog', 'transylvanian-hound', 'st-bernard', 'basset-fauve-de-bretagne', 'alaskan-malamute', 'chinese-crested', 'redbone-coonhound', 'old-english-sheepdog', 'scottish-deerhound', 'briard', 'deutscher-wachtelhund', 'anatolian-shepherd-dog', 'jindo', 'west-highland-white-terrier', 'swedish-vallhund', 'icelandic-sheepdog', 'pumi', 'whippet', 'saluki', 'dogo-argentino', 'cocker-spaniel', 'standard-schnauzer', 'nova-scotia-duck-tolling-retriever', 'kuvasz', 'drever', 'karelian-bear-dog', 'carolina-dog', 'pharaoh-hound', 'german-shepherd-dog', 'lagotto-romagnolo', 'dogue-de-bordeaux', 'welsh-springer-spaniel', 'schipperke', 'irish-red-and-white-setter', 'pomeranian', 'american-staffordshire-terrier', 'petit-basset-griffon-vendeen', 'pug', 'german-pinscher', 'canaan-dog', 'papillon', 'appenzeller-sennenhunde', 'rhodesian-ridgeback', 'working-kelpie', 'dalmatian', 'havanese', 'shih-tzu', 'portuguese-podengo', 'french-bulldog', 'bloodhound', 'mastiff', 'american-foxhound', 'great-dane', 'brittany', 'boxer', 'dandie-dinmont-terrier', 'affenpinscher', 'thai-ridgeback', 'rafeiro-do-alentejo', 'mudi', 'mountain-cur', 'wire-fox-terrier', 'xoloitzcuintli', 'rat-terrier', 'wirehaired-vizsla', 'spanish-mastiff', 'braque-francais-pyrenean', 'irish-water-spaniel', 'russian-tsvetnaya-bolonka', 'afghan-hound', 'clumber-spaniel', 'boston-terrier', 'boerboel', 'neapolitan-mastiff', 'swedish-lapphund', 'danish-swedish-farmdog', 'dachshund', 'pembroke-welsh-corgi', 'cesky-terrier', 'norwegian-elkhound', 'portuguese-water-dog', 'taiwan-dog', 'wirehaired-pointing-griffon', 'poodle', 'bedlington-terrier', 'norwegian-buhund', 'portuguese-podengo-pequeno', 'black-russian-terrier', 'shiba-inu', 'gordon-setter', 'russian-toy', 'curly-coated-retriever', 'spanish-water-dog', 'bulldog', 'bavarian-mountain-scent-hound', 'basset-hound', 'boykin-spaniel', 'glen-of-imaal-terrier', 'miniature-bull-terrier', 'cane-corso', 'bracco-italiano', 'finnish-lapphund', 'estrela-mountain-dog', 'cavalier-king-charles-spaniel', 'great-pyrenees', 'braque-du-bourbonnais', 'hanoverian-scenthound', 'yorkshire-terrier', 'puli', 'porcelaine', 'central-asian-shepherd-dog', 'sussex-spaniel', 'miniature-schnauzer', 'lakeland-terrier', 'smooth-fox-terrier', 'lapponian-herder', 'grand-basset-griffon-vendeen', 'manchester-terrier', 'chinook', 'small-munsterlander-pointer', 'belgian-sheepdog', 'newfoundland', 'finnish-spitz', 'shetland-sheepdog', 'norwich-terrier', 'bolognese', 'greyhound', 'chow-chow', 'airedale-terrier', 'tornjak', 'akita', 'greater-swiss-mountain-dog', 'italian-greyhound', 'kerry-blue-terrier', 'kishu-ken', 'tosa', 'entlebucher-mountain-dog', 'pointer', 'lowchen', 'yakutian-laika', 'collie', 'leonberger', 'australian-shepherd', 'norwegian-lundehund', 'kromfohrlander', 'tibetan-mastiff', 'bernese-mountain-dog', 'american-hairless-terrier', 'english-springer-spaniel', 'drentsche-patrijshond', 'golden-retriever', 'german-shorthaired-pointer', 'japanese-chin', 'vizsla', 'otterhound', 'parson-russell-terrier', 'bouvier-des-flandres', 'plott', 'lhasa-apso', 'peruvian-inca-orchid', 'slovensky-cuvac', 'broholmer', 'american-english-coonhound', 'border-terrier', 'toy-fox-terrier', 'australian-cattle-dog', 'stabyhoun', 'bullmastiff', 'treeing-tennessee-brindle', 'barbet', 'bichon-frise', 'ibizan-hound', 'lancashire-heeler', 'coton-de-tulear', 'german-longhaired-pointer', 'maltese', 'dutch-shepherd', 'german-spitz', 'english-cocker-spaniel', 'polish-lowland-sheepdog', 'english-foxhound', 'scottish-terrier', 'french-spaniel', 'belgian-malinois', 'schapendoes', 'eurasier', 'australian-terrier', 'hamiltonstovare', 'komondor', 'siberian-husky', 'treeing-walker-coonhound', 'english-setter', 'samoyed', 'belgian-tervuren', 'tibetan-spaniel', 'irish-terrier'];
