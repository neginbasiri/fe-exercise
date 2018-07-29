export default class Scroll {

  constructor(elementId){
    console.log(elementId);
    window.scroll({
      top: document.getElementById(elementId),
      behavior: 'smooth'
    });
  }
}