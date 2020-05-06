
/**
 *
 *	PROCESSING-LIKE API FOR SVG VERSION 0.01
 *	2020, PROF. GUILHERME RANOYA
 *	FEDERAL UNIVERSITY OF PERNAMBUCO (UFPE), BRAZIL
 *
 *  ----------------------------------------------------
 *
 * 
 *  USE
 *
 *  <svg id='ElementID'></svg>
 * 
 *  <script>
 *
 *  var handle = new p4svg('ElementID');
 *  handle.draw = function() {
 *  
 *  	// Processing-like code
 *  
 *  }
 * 	</script>
 *
 * 
 */


enumerateElem = 0;


/**
 *
 * 	PROTOTIPE/MODEL FUNCTION
 * 	
 */

p4svg = function(where) {

	var self = this;										// SHARE VARIABLES
	this.frmrate = 100; 									// FRAMERATE
	this.where = where;										// SVG / DIV INSERT
	this.strokeReg = "#000000";								// DEFAULT STROKE
	this.fillReg = "transparent";							// DEFAULT FILL
	this.strokeWeightReg = 2;								// DEFAULT STROKEWEIGHT
	this.drawstack = "";									// SVG XML STACK
	this.insertplace = document.getElementById(where);		// ELEMENT ID TO INSERT



	// CHECK IF ELEMENT ID EXISTS AND CREATE IT IF DON'T
	if (this.insertplace == null) { 
		console.log("P4SVG: " + this.where + " is null");
		xpto = document.createElement("div");
		xpto.id = 'p4svgparent' + enumerateElem;
		document.body.appendChild(xpto);
		this.where = "p4svgparent"+enumerateElem;
		this.insertplace = document.getElementById(this.where);
		this.insertplace.innerHTML = "<svg id='p4svgchild" + enumerateElem + "'></svg>";
		this.where = 'p4svgchild' + enumerateElem;
		enumerateElem++;

	} else if (this.insertplace.tagName != "svg" && this.insertplace.tagName != "SVG") {
		console.log("P4SVG: " + this.where + " is " + this.insertplace.tagName);
		this.insertplace.innerHTML = "<svg id='p4svgchild" + enumerateElem + "'></svg>";
		this.where = 'p4svgchild' + enumerateElem;
		enumerateElem++;
	
	} else {
		console.log("P4SVG: " + this.where + " is svg");
	}



	// DEFAULT DRAW
	this.draw = function() {
		console.log("RUN draw");
	};

	// DEFAULT SETUP
	this.setup = function() {
		console.log("RUN setup");
	};




	// VIRTUAL MACHINE RUNING DRAW AND INSERTING DATA INTO ELEMENT
	// THIS IS THE HEART OF THE THING
	// 
	this.vmachinerun = function() {

		self.draw();
		this.lsite = self.where;
		this.ldata = self.drawstack;
		//console.log("- lsite:" + self.where + " | ldata:" + self.drawstack);
		document.getElementById(this.lsite).innerHTML = this.ldata;

	};

	// LOOPING DE VIRTUAL MACHINE
	this.runvmachine = setInterval(this.vmachinerun, self.frmrate);




	/*
	 *
	 *
	 * PROCESSING API CONVERSION
	 * FUNCTIONS FOR INSTANCES AND STATIC APPLICATION
	 *
	 * this.function -> instances
	 * function -> static use (only one svg in the page)
	 *
	 * on instances (multiple svgs in the page):
	 * handler.draw = function () {
	 * 
	 * 		this.cicle(10,10,50);
	 * 
	 * }
	 *
	 * on static (only one svg in the page):
	 * handler.draw = function() {
	 * 
	 * 		circle(10,10,50);
	 * 		
	 * }
	 * 
	 * 
	 */


// noLoop ------------------------------------------------------------------
	this.noLoop = function() {

		clearInterval(self.runvmachine);

	};

	noLoop = function() {

		clearInterval(self.runvmachine);

	};



// circle ------------------------------------------------------------------
	this.circle = function (cx,cy,r) { 

		this.cx = cx;
		this.cy = cy;
		this.r = r;
		this.strk = self.strokeReg;
		this.fillR = self.fillReg;
		this.weig = self.strokeWeightReg;
		self.drawstack += "<circle cx="+this.cx+" cy="+this.cy+" r="+this.r+" stroke='" + this.strk + "' stroke-width='" + this.weig + "' fill='" + this.fillR + "' />";

	};

	circle = function (cx,cy,r) { 

		this.cx = cx;
		this.cy = cy;
		this.r = r;
		this.strk = self.strokeReg;
		this.fillR = self.fillReg;
		this.weig = self.strokeWeightReg;
		self.drawstack += "<circle cx="+this.cx+" cy="+this.cy+" r="+this.r+" stroke='" + this.strk + "' stroke-width='" + this.weig + "' fill='" + this.fillR + "' />";

	};

// background --------------------------------------------------------------
	this.background = function(cor) {

		this.cor = cor;
		self.drawstack = "";
	 	self.drawstack = "<rect width='100%' height='100%' fill='" + this.cor + "' />";

	};

	background = function(cor) {

		this.cor = cor;
		self.drawstack = "";
	 	self.drawstack = "<rect width='100%' height='100%' fill='" + this.cor + "' />";

	};


// fill --------------------------------------------------------------------
	this.fill = function(cor) {

		this.cor = cor;
		self.fillReg = this.cor;

	};

	fill = function(cor) {

		this.cor = cor;
		self.fillReg = this.cor;

	};


// stroke --------------------------------------------------------------------
	this.stroke = function(cor) {

		this.cor = cor;
		self.strokeReg = this.cor;

	};

	stroke = function(cor) {

		this.cor = cor;
		self.strokeReg = this.cor;

	};


// strokeWeight --------------------------------------------------------------------
	this.strokeWeight = function(siz) {

		this.siz = siz;
		self.strokeWeightReg = this.siz;

	};

	strokeWeight = function(siz) {

		this.siz = siz;
		self.strokeWeightReg = this.siz;

	};




};
