type Colors = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "goldenrod" | "gold" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavenderblush" | "lavender" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";
interface CSSKStyle {
    width: "auto" | "inherit",
    height: "auto" | "inherit",
    margin: "auto" | "inherit",
    marginLeft: "auto" | "inherit",
    marginRight: "auto" | "inherit",
    marginTop: "auto" | "inherit",
    marginBottom: "auto" | "inherit",
    padding: "inherit",
    paddingLeft: "",
    paddingRight: "",
    paddingTop: "",
    paddingBottom: "",
    font: "",
    fontSize: "",
    fontStyle: "italic" | "normal" | "oblique",
    fontWeight: "bold" | "bolder" | "lighter" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "inherit",
    fontFamily: "cursive" | "fantasy" | "inherit" | "monospace" | "sans-serif" | "serif",
    border: "",
    borderRadius: "",
    borderTop: "",
    borderBottom: "",
    borderLeft: "",
    borderRight: "",
    borderColor: "inherit" | Colors,
    borderWidth: "medium" | "thin" | "thick" | "inherit",
    position: "absolute" | "fixed" | "relative" | "static" | "sticky" | "inherit",
    textAlign: "center" | "left" | "justify" | "right" | "inherit",
    background: "",
    backgroundColor: "inherit" | Colors,
    backgroundPosition: "left" | "center" | "right" | "bottom" | "top",
    backgroundRepeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space",
    backgroundImage: "image()" | "linear-gradient()" | "radial-gradient()" | "repeating-linear-gradient()" | "repeating-radial-gradient()" | "url()",
    backgroundSize: "auto" | "contain" | "cover",
    backgroundClip: "border-box" | "content-box" | "padding-box" | "inherit",
    right: "auto" | "inherit",
    left: "auto" | "inherit",
    top: "auto" | "inherit",
    bottom: "auto" | "inherit",
    overflow: "auto" | "hidden" | "scroll" | "visible" | "inherit",
    overflowX: "auto" | "hidden" | "scroll" | "visible" | "inherit",
    overflowY: "auto" | "hidden" | "scroll" | "visible" | "inherit",
    opacity: "inherit",
    cursor: "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "inherit" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out",
    display: "block" | "contents" | "flex" | "flow-root" | "grid" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "none" | "run-in" | "subgrid" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "inherit",
    color: "inherit" | Colors,
    visibility: "collapse" | "hidden" | "visible" | "inherit",
    float: "left" | "right" | "none" | "inherit",
    textDecoration: "line-through" | "none" | "overline" | "underline" | "inherit",
    lineHeight: "normal" | "inherit",
    zIndex: "auto" | "inherit",
    verticalAlign: "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | "inherit",
    boxSizing: "border-box" | "content-box" | "inherit",
    clear: "both" | "left" | "none" | "right" | "inherit",
    whiteSpace: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "inherit",
    maxWidth: "none" | "inherit",
    outline: "inherit",
    content: "attr()" | "close-quote" | "no-close-quote" | "no-open-quote" | "normal" | "none" | "open-quote" | "inherit",
    minWidth: "inherit",
    minHeight: "inherit",
    listStyle: "none" | "inherit" | "initial" | "unset" | "url()" | "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "inside" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "outside" | "square" | "upper-alpha" | "upper-latin" | "upper-roman",
    boxShadow: "",
    textShadow: "",
    textIndent: "inherit",
    maxHeight: "none" | "inherit",
    textOverflow: "clip" | "ellipsis" | "inherit",
    borderStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    borderSpacing: "inherit",
    borderCollapse: "collapse" | "separate" | "inherit",
    borderLeftColor: "inherit" | Colors,
    borderLeftStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    borderLeftWidth: "medium" | "thin" | "thick" | "inherit",
    borderRightColor: "inherit" | Colors,
    borderRightStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    borderRightWidth: "medium" | "thin" | "thick" | "inherit",
    borderTopColor: "inherit" | Colors,
    borderTopStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    borderTopWidth: "medium" | "thin" | "thick" | "inherit",
    borderBottomColor: "inherit" | Colors,
    borderBottomStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    borderBottomWidth: "medium" | "thin" | "thick" | "inherit",
    borderTopLeftRadius: "",
    borderTopRightRadius: "",
    borderBottomLeftRadius: "",
    borderBottomRightRadius: "",
    userSelect: "all" | "auto" | "contain" | "none" | "text",
    textTransform: "capitalize" | "full-width" | "lowercase" | "none" | "uppercase" | "inherit",
    listStyleType: "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "square" | "upper-alpha" | "upper-latin" | "upper-roman" | "inherit",
    wordWrap: "break-word" | "normal",
    transition: "",
    letterSpacing: "normal" | "inherit",
    transform: "matrix()" | "matrix3d()" | "none" | "perspective()" | "rotate()" | "rotate3d()" | "rotateX()" | "rotateY()" | "rotateZ()" | "scale()" | "scale3d()" | "scaleX()" | "scaleY()" | "scaleZ()" | "skewX()" | "skewY()" | "translate()" | "translate3d()" | "translateX()" | "translateY()" | "translateZ()",
    pointerEvents: "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke",
    direction: "ltr" | "rtl" | "inherit",
    clip: "auto" | "inherit",
    tableLayout: "auto" | "fixed" | "inherit",
    src: "url()",
    resize: "both" | "horizontal" | "none" | "vertical" | "inherit",
    wordBreak: "normal" | "break-all" | "keep-all",
    filter: "blur()" | "brightness()" | "contrast()" | "custom()" | "drop-shadow()" | "grayscale()" | "hue-rotate()" | "invert()" | "none" | "opacity()" | "sepia()" | "saturate()" | "url()",
    transformOrigin: "bottom" | "center" | "left" | "right" | "top",
    fontVariant: "normal" | "small-caps" | "inherit",
    quotes: "none" | "inherit",
    unicodeBidi: "bidi-override" | "embed" | "normal" | "inherit",
    wordSpacing: "normal" | "inherit",
    textRendering: "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed",
    outlineColor: "invert" | "inherit",
    listStylePosition: "inside" | "outside" | "inherit",
    outlineOffset: "inherit",
    orphans: "inherit",
    outlineStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    outlineWidth: "medium" | "thin" | "thick" | "inherit",
    flex: "auto" | "initial" | "none",
    flexGrow: "",
    flexDirection: "column" | "column-reverse" | "row" | "row-reverse",
    flexFlow: "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse",
    flexWrap: "nowrap" | "wrap" | "wrap-reverse",
    flexShrink: "",
    flexBasis: "auto",
    listStyleImage: "none" | "url()" | "inherit",
    unicodeRange: "",
    alignItems: "baseline" | "center" | "flex-end" | "flex-start" | "stretch",
    transitionDelay: "",
    transitionDuration: "",
    justifyContent: "center" | "flex-end" | "flex-start" | "space-around" | "space-between",
    transitionProperty: "all" | "none",
    order: "",
    transitionTimingFunction: "cubic-bezier()" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "step-end" | "step-start" | "steps()",
    backgroundAttachment: "fixed" | "local" | "scroll" | "inherit",
    backgroundOrigin: "border-box" | "content-box" | "padding-box" | "inherit",
    backfaceVisibility: "hidden" | "visible",
    pageBreakInside: "auto" | "avoid" | "inherit",
    pageBreakAfter: "always" | "auto" | "avoid" | "left" | "right" | "inherit",
    widows: "inherit",
    counterIncrement: "none" | "inherit",
    counterReset: "none" | "inherit",
    perspectiveOrigin: "bottom" | "center" | "left" | "right" | "top",
    perspective: "none",
    emptyCells: "hide" | "show" | "inherit",
    captionSide: "bottom" | "top" | "inherit",
    transformStyle: "flat" | "preserve-3d",
    borderImage: "url()",
    fontStretch: "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded",
    willChange: "auto" | "contents" | "opacity" | "scroll-position" | "transform" | "inherit" | "initial" | "unset",
    animation: "",
    pageBreakBefore: "always" | "auto" | "avoid" | "left" | "right" | "inherit",
    alignSelf: "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch",
    alignContent: "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch",
    borderImageSlice: "",
    borderImageWidth: "auto",
    borderImageOutset: "",
    borderImageRepeat: "repeat" | "round" | "space" | "stretch",
    tabSize: "",
    objectFit: "contain" | "cover" | "fill" | "none" | "scale-down",
    fontKerning: "auto" | "none" | "normal",
    animationName: "none",
    animationDuration: "",
    borderImageSource: "",
    animationFillMode: "backwards" | "both" | "forwards" | "none",
    animationTimingFunction: "cubic-bezier()" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "step-end" | "step-start" | "steps()",
    animationIterationCount: "infinite",
    animationDelay: "",
    fontVariantLigatures: "normal" | "none",
    backgroundBlendMode: "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light",
    objectPosition: "left" | "center" | "right" | "bottom" | "top",
    mixBlendMode: "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light",
    shapeOutside: "none" | "inherit" | "circle()" | "ellipse()" | "polygon()" | "inset()" | "margin-box" | "border-box" | "padding-box" | "content-box" | "url()" | "image()" | "linear-gradient()" | "radial-gradient()" | "repeating-linear-gradient()" | "repeating-radial-gradient()",
    shapeMargin: "",
    isolation: "auto" | "isolate",
    shapeImageThreshold: "",
    animationDirection: "alternate" | "alternate-reverse" | "normal" | "reverse",
    animationPlayState: "paused" | "running",
    all: "",
    columnFill: "auto" | "balance",
    textAlignLast: "center" | "left" | "justify" | "right" | "inherit",
    textDecorationColor: "",
    textDecorationStyle: "dashed" | "dotted" | "double" | "solid" | "wavy",
    textDecorationLine: "line-through" | "none" | "overline" | "underline",
    fontSizeAdjust: "auto" | "none",
    textUnderlinePosition: "alphabetic" | "auto" | "below" | "left" | "right",
    scrollBehavior: "auto" | "smooth",
    gridColumn: "auto",
    gridRow: "auto",
    gridTemplate: "none",
    caretColor: "auto",
    gridTemplateColumns: "auto",
    gridAutoColumns: "",
    gridAutoFlow: "row" | "column" | "dense",
    gridAutoRows: "",
    gridColumnStart: "",
    gridTemplateRows: "auto",
    gridRowEnd: "",
    gridColumnEnd: "",
    gridRowStart: "",
    boxDecorationBreak: "clone" | "slice",
    breakAfter: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "region" | "right",
    breakBefore: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "region" | "right",
    breakInside: "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region",
    columns: "",
    columnCount: "",
    columnGap: "normal",
    columnRule: "",
    columnRuleColor: "",
    columnRuleStyle: "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "inherit",
    columnRuleWidth: "medium" | "thin" | "thick" | "inherit",
    columnSpan: "all" | "none",
    columnWidth: "auto" | "inherit",
    flowInto: "none",
    flowFrom: "none" | "inherit",
    fontFeatureSettings: "normal",
    fontLanguageOverride: "normal",
    fontSynthesis: "none" | "style" | "weight",
    fontVariantAlternates: "normal",
    fontVariantCaps: "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps",
    fontVariantEastAsian: "normal",
    fontVariantNumeric: "normal",
    fontVariantPosition: "normal" | "sub" | "super",
    hyphens: "auto" | "manual" | "none",
    imageOrientation: "",
    imageResolution: "from-image" | "snap",
    regionBreakAfter: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "region" | "right",
    regionBreakBefore: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "region" | "right",
    regionBreakInside: "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region",
    regionFragment: "auto" | "break",
    shapeInside: "auto" | "circle()" | "ellipse()" | "inherit" | "outside-shape" | "polygon()" | "rectangle()",
    textDecorationSkip: "edges" | "ink" | "none" | "objects" | "spaces",
    textEmphasis: "",
    textEmphasisColor: "",
    textEmphasisPosition: "above" | "below" | "left" | "right",
    textEmphasisStyle: "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle",
    fontDisplay: "auto" | "block" | "swap" | "fallback" | "optional",
    grid: "",
    gridArea: "",
    gridColumnGap: "",
    gridGap: "",
    gridRowGap: "",
    gridTemplateAreas: "",
    hangingPunctuation: "allow-end" | "first" | "force-end" | "last" | "none"
}