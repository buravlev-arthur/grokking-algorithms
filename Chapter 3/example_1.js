const main_box = [[],[[],[],[]],[[],[],[[],[],'key']],[[],[]]];

const make_a_pile_to_look_through = (arr) => {
  const pile = [];

  for (el of arr) {
    pile.push(el);
  }

  return pile;
};

const is_box = (item) => Array.isArray(item);

const is_a_key = (item) => item === 'key';

const look_for_key = (main_box) => {
  const pile = make_a_pile_to_look_through(main_box);

  while (pile.length > 0) {
    const box = pile.shift();

    for (item of box) {
      if (is_box(item)) {
        pile.push(item);
      } else if (is_a_key(item)) {
        console.log('found the key!');
      }
    }
  }
};

look_for_key(main_box);