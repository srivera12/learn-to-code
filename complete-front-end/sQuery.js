// SO MUCH struggle with this. Don't really get it or understand it, doesn't work
// understand what he's trying to illustrate, but not this code
// looked back over it - he doesn't get rid of the real jQuery and I'm convinced that's why it works
class squery {
  constructor(el) {
    // does el mean anything specific? used it a few times
    if (el.indexOf(".") > -1) {
      // replace not super well explained why
      el = el.replace(".", "");
      this.elements = document.getElementsByClassName(el);
    } else if (el.indexOf("#") > -1) {
      el = el.replace("#", "");
      this.elements = [document.getElementById(el)];
    } else {
      this.elements = document;
    }
  }

  addClass(cl) {
    let count = 0;
    while (count < this.elements.length) {
      if (this.elements[count].className) {
        this.elements[count].className += " " + cl;
      } else {
        this.elements[count].className = cl;
      }
      count++;
    }
  }
}

function sQuery(el) {
  let element = new squery(el);
  return element;
}
