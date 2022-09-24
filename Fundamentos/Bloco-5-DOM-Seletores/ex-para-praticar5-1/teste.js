function catAndMouse(mouse, cat1, cat2) {
    let distanceCat1 = Math.abs(cat1 - mouse);
    let distanceCat2 = Math.abs(cat2 - mouse);
    if (distanceCat1 < distanceCat2) {
      return 'cat1';
    } else if (distanceCat2 < distanceCat1) {
      return 'cat2';
    } else if (distanceCat1 === distanceCat2) {
      return 'os gatos trombam e o rato foge';
    }
    
  }
  console.log(catAndMouse(1, 0, 2));