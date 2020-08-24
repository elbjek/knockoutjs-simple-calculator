import ko from './knockout.js'
import './style.css';
var calculatorModel = {
	isOpen:ko.observable(false),
	calculatorNumberArray:[
		{val:1, type:"btn"},
		{val:2, type:"btn"},
		{val:3, type:"btn"},
		{val:4, type:"btn"},
		{val:5, type:"btn"},
		{val:6, type:"btn"},
		{val:7, type:"btn"},
		{val:8, type:"btn"},
		{val:9, type:"btn"},
		{val:0, type:"btn"},
	],
	buttonValue:ko.observable(),
	openCalc: function () {
		this.isOpen(!this.isOpen());
		this.buttonValue("")
	},
	sendValue:function(value){
        this.buttonValue(this.buttonValue() + value)
	},
	backspace: function() {
		this.buttonValue(this.buttonValue().slice(0,-1))
	},
	deleteAll: function() {
		this.buttonValue("")
	},
	submit: function() {
		this.isOpen(false);
	},
	closeCalc: function() {
		this.isOpen(false);
	}
};

console.log(calculatorModel);
ko.applyBindings(calculatorModel);
  