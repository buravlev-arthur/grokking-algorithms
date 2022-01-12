const main_box = [[],[[],[],[]],[[],[],[[],[],'key']],[[],[]]];

const is_box = (item) => Array.isArray(item);

const is_a_key = (item) => item === 'key';

const look_for_key = (box) => {
  for (item of box) {
    if (is_box(item)) {
      look_for_key(item);
    } else if (is_a_key(item)) {
      console.log('found the key!');
    }
  }
};

look_for_key(main_box);

