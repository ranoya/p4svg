enumerateElem = 0;

p4svg = (where) => {
  let loopInterval = null;
  let strokeReg = "#000000";
  let fillReg = "transparent";
  let strokeWeightReg = 2;
  let drawstack = "";

  let insertplace = document.getElementById(where);

  if (!insertplace) {
    console.log(`P4SVG: ${where} is null`);
    const newInsertPlace = document.createElement("div");
    newInsertPlace.id = `p4svgparent${enumerateElem}`;
    document.body.appendChild(newInsertPlace);
    where = `p4svgparent${enumerateElem}`;
    insertplace = document.getElementById(where);
    insertplace.innerHTML = `<svg id='p4svgchild${enumerateElem}'></svg>`;
    where = `p4svgchild${enumerateElem}`;
    enumerateElem++;
  }

  if (insertplace.tagName != "svg" && insertplace.tagName != "SVG") {
    console.log(`P4SVG: ${where} is ${insertplace.tagName}`);
    insertplace.innerHTML = `<svg id='p4svgchild${enumerateElem}'></svg>`;
    where = `p4svgchild${enumerateElem}`;
    enumerateElem++;
  }

  const methods = {};

  methods.circle = (cx, cy, r) => {
    drawstack += `<circle cx='${cx}' cy='${cy}' r='${r}' stroke='${strokeReg}' stroke-width='${strokeWeightReg}' fill='${fillReg}' />`;
    return methods;
  };

  methods.background = (cor) => {
    drawstack = "";
    drawstack = `<rect width='100%' height='100%' fill='${cor}' />`;
    return methods;
  };

  methods.fill = (cor) => {
    fillReg = cor;
    return methods;
  };

  methods.stroke = (cor) => {
    strokeReg = cor;
    return methods;
  };

  methods.strokeWeight = (siz) => {
    strokeWeightReg = siz;
    return methods;
  };

  methods.draw = (callback) => {
    document.getElementById(where).innerHTML = drawstack;
    callback && callback(methods);
    return methods;
  };

  methods.loop = (callback, frmrate = 100) => {
    methods.draw();
    loopInterval = setInterval(() => {
      callback(methods);
      methods.draw();
    }, frmrate);
    return methods;
  };

  methods.noLoop = () => {
    clearInterval(loopInterval);
    return methods;
  };

  return methods;
};
