export default class Scroll {

  constructor(elementId, position){
    const elm = document.getElementById('content-container');
    elm.scrollIntoView({
      block: 'start',
      inline: "nearest",
      behavior: 'smooth'
    });

  }
}

