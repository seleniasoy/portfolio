

/**
 * Set a temporal style in an element type (until called again)
 * @example
 * // Set the background color of the next buttons
 *  oxDefaultStyle("button", {
 *  backgroundColor: "red"
 * });
 * ox("button").content("Red Button");
 * ox("button").content("Another Red Button");
 * //clear the button style
 * oxDefaultStyle("button", {});
 * ox("button").content("Normal button");
 */

declare function oxDefaultStyle(tagName?: string, css?: CSSKStyle | CSSStyleDeclaration | string): CSSStyleDeclaration;

/**
 * Create a global css rule
 * @example
 * oxRule(".header>span::hover", {
 *  color: "blue",
 *  backgroundColor: "#457"
 * })
 */
declare function oxRule(selector: string, css: CSSKStyle | CSSStyleDeclaration): HTMLStyleElement;
/**
 * Create a global animation
 * @example
 * oxAnimation("fadeIn", {
 *    from:{
 *        opacity: "0",
 *    },
 *    to: {
 *        opacity: "1"
 *    }
 * })
 */
declare function oxAnimation(name: string, animation?: AnimationList): HTMLStyleElement;
/**
 * Create an html element
 * @param tagName Type of element to create
 * @param parent Parent element
 */
declare function ox<K extends keyof HTMLElementTagNameMap>
  (tagName: K, parent?: HTMLElement): HTMLElementTagNameMap[K];

interface AnimationList {
  [s: string]: CSSKStyle | CSSStyleDeclaration
}

interface Function {
  last: HTMLElement;
  parent: HTMLElement;
}

interface HTMLElement {
  /**
   * @sumary Style an element
   * @example
   * ox("div").css({
   *    color: "white",
   *    backgroundColor: "#F305ff"
   * });
   * @returns the element
   */
  css(css: CSSKStyle | CSSStyleDeclaration): this,
  /**
   * @sumary Set attributes of the element
   * @example
   * ox("input").attr({
    *    placeholder: "Enter your name",
    *    className: "inp-blue",
    *    onclick: function(){
    *       alert("clicked");
    *    }
    * });
    * @returns the element
    */
  attr(attr: HTMLElement): this,
  /**
   * @sumary Set the inner text/html of the element
   * @example
   * ox("h1").content("Wellcome");
   * @returns the element
   */
  content(html: string): this,

  /**
   * @sumary Animate an element
   * @example
   * ox("div").anim({
   *   from: {
   *       transform: "translateY(-50%) rotate(45deg)",
   *       opacity: "0"
   *   }
   * }, "1.5s");
   * 
   * @returns the element
   */
  anim(animation: AnimationList, duration: string): this
}

