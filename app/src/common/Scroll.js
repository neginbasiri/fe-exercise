export default class Scroll {

  constructor(elementId){
    console.log(elementId);
    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth'
    });
  }
}