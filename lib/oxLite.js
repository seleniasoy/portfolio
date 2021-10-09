
window.ox = function (tagName, parent = ox.parent || document.body) {
  var elm = document.createElement(tagName);
  elm.css = css => { Object.assign(elm.style, css); return elm };
  elm.content = html => Object.assign(elm, { innerHTML: html });
  elm.attr = attr => Object.assign(elm, attr);

  elm.anim = (animation, duration) => {
    var name = "anim-" + Math.random().toString(16).substr(-6);
    oxAnimation(name, animation);
    return elm.css({ animation: name + " " + duration });
  }
  if (ox[tagName + "Style"]) elm.css(ox[tagName + "Style"]);
  ox.last = elm;
  parent.appendChild(elm);
  return elm;
}

window.oxDefaultStyle = function (tagName, css) {
  ox[tagName + "Style"] = css;
  return css;
}

window.oxAnimation = function (name, animation) {
  var stl = document.createElement("style");
  stl.innerHTML = "@keyframes " + name + "{";
  Object.keys(animation).forEach(key => {
    var tElm = document.createElement("div");
    Object.assign(tElm.style, animation[key]);
    stl.innerHTML += key + "{" + tElm.style.cssText + "}";
  });

  stl.innerHTML += "}";
  document.head.appendChild(stl);
  return stl;
}

window.oxRule = function (selector, css) {
  var tElm = document.createElement("div");
  Object.assign(tElm.style, css);
  var stl = document.createElement("style");
  stl.innerHTML = selector + "{" + tElm.style.cssText + "}";
  document.head.appendChild(stl);
  return stl;
}