/**
 * jConcise分为以下功能区：
 * 基础功能：	BasicFunction
 * 选择器：		Selecter
 * 组件：		Component
 * 基础方法：	Common
 * 字符串方法：	String
 * 数学方法：	Math
 * 数组方法：	Array
 * 对象方法：	Object
 * 时间方法：	Date
 * 浏览器：		Browser
 * 规则、正则或合法性检查：	Regular
 */
var JC = jConcise = (function(){
	var GCP = {
		Date: {
			yearZero: 946656000000,
			minMilliTime: -253370736000000,
			maxMilliTime: 253402271999000,
			maxMilliTimeDigit: 15
		}
	}
	return {
		// BasicFunction		----------> Begin
		/**
		 * 获得屏幕宽度值
		 */
		getScreenWidth: function(){
			return window.screen.width;
		},
		/**
		 * 获得屏幕高度值
		 */
		getScreenHeight: function(){
			return window.screen.height;
		},
		/**
		 * 获得网页可见区域宽度值
		 */
		getSightWidth: function(){
			return document.body.clientWidth;
		},
		/**
		 * 获得网页可见区域高度值
		 */
		getSightHeight: function(){
			return document.body.clientHeight;
		},
		/**
		 * 获得页面宽度值
		 */
		getPageWidth: function(){
			return document.body.scrollWidth;
		},
		/**
		 * 获得页面高度值
		 */
		getPageHeight: function(){
			return document.body.scrollHeight;
		},
		/**
		 * 获得页面上部被卷去的高度值
		 */
		getScrollTop: function(){
			return document.body.scrollTop;
		},
		/**
		 * 获得页面左侧被卷去的宽度值
		 */
		getScrollLeft: function(){
			return document.body.scrollLeft;
		},
		
		/**
		 * 判断入参是否为数字
		 * @param {Object} obj 要检查的内容
		 */
		isNumber: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'number' && obj.constructor === Number){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都为数字
		 * @param {Array} arr
		 */
		isNumbers: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isNumber(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isNumber(arr);
			}
		},
		/**
		 * 判断入参是否为Boolean值
		 * @param {Object} obj 要检查的内容
		 */
		isBoolean: function(obj){
			if(this.isVoid(obj)) return false;
//			if(this.isArray())
			
			if(typeof obj === 'boolean' && obj.constructor === Boolean){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都为布尔值
		 * @param {Object} arr
		 */
		isBooleans: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isBoolean(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isBoolean(arr);
			}
		},
		/**
		 * 判断入参是否为Date对象
		 * @param {Object} obj 要检查的内容
		 */
		isDate: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Date){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都是Date对象
		 * @param {Object} arr
		 */
		isDates: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isDate(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isDate(arr);
			}
		},
		/**
		 * 判断入参是否为String类型
		 * @param {Object} obj 要检查的内容
		 */
		isString: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'string' && obj.constructor === String){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都是String字符串
		 * @param {Object} arr
		 */
		isStrings: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isString(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isString(arr);
			}
		},
		/**
		 * 判断入参是否为Function
		 * @param {Object} obj 要检查的内容
		 */
		isFunction: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'function' && obj.constructor === Function){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都是Function
		 * @param {Object} arr
		 */
		isFunctions: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isFunction(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isFunction(arr);
			}
		},
		/**
		 * 判断入参是否为正则表达式
		 * @param {Object} obj 要检查的内容
		 */
		isRegExp: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === RegExp){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都是正则表达式
		 * @param {Object} arr
		 */
		isRegExps: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isRegExp(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isRegExp(arr);
			}
		},
		/**
		 * 判断入参是否为数组
		 * @param {Object} obj 要检查的内容
		 */
		isArray: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Array){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都为数组
		 * @param {Object} arr
		 */
		isArrays: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isArray(arr[i])){
						return false;
					}
				}
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为Object对象
		 * @param {Object} obj
		 */
		isObject: function(obj){
			if(this.isVoid(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Object){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参数组内的元素是否都是Object对象
		 * @param {Object} arr
		 */
		isObjects: function(arr){
			if(JC.isArray(arr)){
				for(var i in arr){
					if(!JC.isObject(arr[i])){
						return false;
					}
				}
				return true;
			}else{
				return this.isObject(arr);
			}
		},
		/**
		 * 判断对象是否是原始数据类型的数据。
		 * @param {Object} obj
		 */
		isPrimitiveDataType: function(obj) {
			if (this.isVoid(obj) || this.isNumber() || this.isBoolean() || this.isString()) {
				return true;
			}
			return false;
		},
		/**
		 * 判断对象是否是对象数据类型、非原始数据类型的数据。
		 * @param {Object} obj
		 */
		isObjectDataType: function(obj) {
			return !this.isPrimitiveDataType(obj);
		},
		
		/**
		 * 判断入参的类型是否相同
		 * @param {Object} obj1
		 * @param {Object} obj2
		 * @return {Boolean} true, same type; false, different type.
		 */
		isSameType: function(obj1, obj2) {
			if (typeof obj1 === typeof obj2 && obj1.constructor === obj2.constructor) return true;
			return false;
		},
		
		/**
		 * 检查入参是否为无实际意义的参数（null或undefined）
		 * @param {Object} obj
		 */
		isVoid: function(obj) {
			if (obj === null || obj === undefined) return true;
			return false;
		},
		/**
		 * 检查所有入参是否均为无实际意义的参数（null或undefined）
		 */
		isVoids: function() {
			for (var i = 0, l = arguments.length;i < l;i++) {
				if (!this.isVoid(arguments[i])) return false;
			}
			return true;
		},
		/**
		 * 检查所有入参中是否存在无实际意义的参数（null或undefined）
		 */
		isVoidIn: function(){
			for (var i = 0, l = arguments.length;i < l;i++) {
				if (this.isVoid(arguments[i])) return true;
			}
			return false;
		},
		/**
		 * 检查入参是否为空值，空值包括：
		 * null
		 * undefined
		 * 空字符串
		 * 空字符串
		 * 空数组
		 * 空对象
		 * @param {Object} obj
		 */
		isEmpty: function(obj) {
			if (this.isVoid(obj) || obj === '') return true;
			if (this.isArray(obj) && obj.length == 0) return true;
			if (this.isObject(obj) && this.Object.getSize(obj) == 0) return true;
			return false;
		},
		
		
		// BasicFunction		----------> End
		
		
		// Selecter				----------> Begin
		/**
		 * 根据元素id获得元素对象
		 * @param {String} id 元素id属性值
		 * @return {Object} 元素对象
		 */
		getById: function(id){
			return document.getElementById(id);
		},
		/**
		 * 根据元素的name属性获得所有元素对象
		 * @param {String} name 元素name属性值
		 * @return {Object} 元素对象数组
		 */
		getByName: function(name){
			return document.getElementsByName(name);
		},
		/**
		 * 获得同一类型的所有元素对象
		 * @param {String} tagName 元素名称
		 * @return {Object} 元素对象数组
		 */
		getByEl: function(tagName){
			return document.getElementsByTagName(tagName);
		},
		/**
		 * 根据元素的class属性获得所有元素对象
		 * @param {Object} className 元素class属性值
		 * @return {Object} 元素对象数组
		 */
		getByClass: function(className){
			return document.getElementsByClassName(className);
		},
		/**
		 * 根据document.querySelector()方法获得某个元素对象
		 * @param {Object} target 
		 */
		queryEl: function(target){
			return document.querySelector(target);
		},
		/**
		 * 根据document.querySelectorAll方法获得元素对象数组
		 * @param {Object} target
		 */
		queryEls: function(target){
			return document.querySelectorAll(target);
		},
		
		
		// Selecter				----------> End
		
		
		
		
		
		// String				----------> Begin
		Common: {
			/**
			 * 以name - value的形式，log输出一个对象
			 * @param {Object} obj 要遍历输出的对象
			 * @param {Boolean} execFunc 是否执行对象中的方法
			 */
			logObj: function(obj, execFunc){
				if(!JC.isBoolean(execFunc)) execFunc = false;
				
				for(var name in obj){
					if(this.isFunction(obj[name]) && execFunc == true){
						obj[name]();
					}else{
						console.log(name + ': ' + obj[name]);
					}
				}
			},
			/**
			 * 遍历一个对象，针对其中的元素执行某方法
			 * @param {Object} obj 可遍历的对象String、Array、Object
			 * @param {Object} func 遍历到每个元素后执行的方法，接收当前被遍历的元素
			 */
			loopObj: function(obj, func){
				if(!JC.isFunction(func)) return;
				
				for(var key in obj){
					func(obj[key]);
				}
			},
			/**
			 * 循环执行某方法一定次数
			 * @param {Function} 要执行的方法
			 * @param {Number} 执行次数
			 */
			loopFn: function(func, num){
				if(!JC.isFunction(func)) return;
				if(!JC.isNumber(num) || num < 0) num = 0;
				
				for(var i=0;i < num;i++){
					func();
				}
			},
			
			/**
			 * 判断一个对象是否在一个容器中
			 * @param {Object} container
			 * @param {Object} obj
			 */
			contains: function(container, obj){
				if(JC.isVoid(container)) return false;
				if(JC.isArray(container) || JC.isObject(container)){
					for(var key in container){
						if(container[key] === obj){
							return true;
						}
					}
				}else if(JC.isString(container)){
					if(container.indexOf(obj) !== -1){
						return true;
					}
				}
				return false;
			},
			/**
			 * 去除对象中的重复数据，目前支持字符串、数组
			 * @param {Object} obj 
			 */
			distinct: function(obj){
				if(JC.isString(obj) || JC.isArray(obj)){
					var arr = [];
					for(var key in obj){
						if(!JC.contains(arr, obj[key])){
							arr.push(obj[key]);
						}
					}
					if(JC.isString(obj)){
						return arr.join('');
					}
					return arr;
				}
				return obj;
			},
			/**
			 * 生成随机颜色字符串
			 * @return {String} 颜色字符串
			 */
			getRandomColor: function(){
				var color = '#';
				JC.Common.loopFn(function(){
					color += JC.Math.HDOB(JC.Math.getRandomNum(16), 10, 16);
				}, 6);
				return color;
			},
			/**
			 * 克隆一个数据。如果目标数据属于对象类型，不克隆继承的属性。
			 * @param {Object} obj
			 */
			clone: function(obj) {
				// 不克隆函数
				if (this.isFunction(obj)) {
					throw new Error('[JC - Common]Invalid parameter: function');
				}
				
				// 克隆：Date, ArrayObject, 
				if (!this.isPrimitiveDataType(obj) || !this.isRegExp(obj)) {
					if (this.isDate(obj)) {
						return new Date(obj.getTime());
					} else if (this.isArrays(obj)) {
						return [].slice.call(obj);
					} else if (this.isObject(obj)) {
						return JC.Object.clone(obj);
					}
				}
				return obj;
			}
		},
				
		
		
		
		// String				----------> End
		
		
		
		
		
		
		
		// String				----------> Begin
		String: {
			/**
			 * 以数组形式返回入参字符串中的数字
			 * @param {Object} str
			 */
			getNumbers: function(str){
				return str.match(/\d/g);
			},
			/**
			 * 以字符串的形式返回入参字符串中的数字
			 * @param {Object} str
			 */
			getNumbersStr: function(str){
				return this.getNumbers(str).join('');
			},
			/**
			 * 以数组形式返回入参字符串中的英文字符
			 * @param {Object} str
			 */
			getChars: function(str){
				return str.match(/[a-zA-Z]/g);
			},
			/**
			 * 以字符串的形式返回入参字符串中的英文字符
			 * @param {Object} str
			 */
			getCharsStr: function(str){
				return this.getChars(str).join('');
			},
			/**
			 * 以数组形式返回入参字符串中非数字内容
			 * @param {Object} str
			 */
			getNaN: function(str){
				return str.match(/[^\d]/g);
			},
			/**
			 * 以字符串形式返回入参字符串中非数字内容
			 * @param {Object} str
			 */
			getNaNStr: function(str){
				return this.getNaN(str).join('');
			},
			/**
			 * 判断接收到的字符串的内容是否可作为纯数字，是否可完全转换为数字。
			 * @param {Object} str
			 * @return {Boolean} if true, then all number; if false, then not all number
			 */
			isStrIsNum: function(str) {
				if (JC.isVoid(str) || !JC.isString(str)) {
					throw new Error('[JC - String]Invalid parameter: null, undefined or not string.');
				}
				
				var tN = Number(str);
				if (!isNaN(tN)) return true;
				return false;
			}
		},
		
		
		// String				----------> Begin
		
		
		
		// Array				----------> Begin
		/**
		 * 数组相关方法
		 */
		Array: {
			/**
			 * 计算数组内数字之和
			 * @param {Array} arr
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 */
			sum: function(arr, strict){
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				var sum = 0;
				if(JC.isArray(arr)){
					for(var i in arr){
						if(JC.isNumber(arr[i])){
							sum += arr[i];
						}else if(strict === false && JC.Regular.testNumber(arr[i])){
							sum += parseFloat(arr[i]);
						}
					}
				}
				return sum;
			},
			/**
			 * 计算数组内数字的平均值
			 * @param {Array} arr
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 */
			avg: function(arr, strict){
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				var VALID_NUM = 0;
				var sum = 0;
				if(JC.isArray(arr)){
					for(var i in arr){
						if(JC.isNumber(arr[i])){
							sum += arr[i];
							VALID_NUM += 1;
						}else if(strict === false && JC.Regular.testNumber(arr[i])){
							sum += parseFloat(arr[i]);
							VALID_NUM += 1;
						}
					}
				}
				return sum / VALID_NUM;
			},
			/**
			 * 获取一个数字数组中的最小值，如果没有合法的最小值，返回null
			 * @param {Array} arr
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 */
			min: function(arr, strict){
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				var min = null;
				for(var i in arr){
					var cur = arr[i];
					if(JC.isNumber(cur) || (strict === false && JC.Regular.testNumber(cur))){
						cur = parseFloat(cur);
						if(min === null){
							min = cur;
						}
						if(cur < min){
							min = cur;
						}
					}
				}
				return min;
			},
			/**
			 * 获取一个数字数组中的最大值，如果没有合法的最大值，返回null
			 * @param {Array} arr
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 */
			max: function(arr, strict){
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				var max = null;
				for(var i in arr){
					var cur = arr[i];
					if(JC.isNumber(cur) || (strict === false && JC.Regular.testNumber(cur))){
						cur = parseFloat(cur);
						if(max === null){
							max = cur;
						}
						if(cur > max){
							max = cur;
						}
					}
				}
				return max;
			},
			/**
			 * 获取一个数字数组中的最小值和最大值，如果没有合法的极值，对应返回值为null
			 * @param {Array} arr
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 * @param {Array} 一个包含两个元素的数组，元素1是最小值，元素2是最大值
			 */
			extreme: function(arr, strict){
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				var min = null;
				var max = null;
				for(var i in arr){
					var cur = arr[i];
					if(JC.isNumber(cur) || (strict === false && JC.Regular.testNumber(cur))){
						cur = parseFloat(cur);
						if(min === null){
							min = cur;
						}
						if(max === null){
							max = cur;
						}
						if(cur < min){
							min = cur;
						}
						if(cur > max){
							max = cur;
						}
					}
				}
				return [min, max];
			},
			/**
			 * 计算一个数字数组中所有数字的次方
			 * @param {Array} arr
			 * @param {Number} exp 次方值
			 * @param {Boolean} strict 是否不将字符串型式的数字计算在内，默认为true
			 * @param {Boolean} returnAll 在返回的数组中，是否按照入参数组，原样（原值、原位置）返回非数字元素
			 */
			pow: function(arr, exp, strict, returnAll){
				if(!JC.isNumber(exp)){
					exp = 1;
				}
				if(JC.isVoid(strict) || !JC.isBoolean(strict)){
					strict = true;
				}
				if(JC.isVoid(returnAll) || !JC.isBoolean(returnAll)){
					returnAll = true;
				}
				
				var newArr = [];
				for(var i=0,l=arr.length;i < l;i++){
					var cur = arr[i];
					if(JC.isNumber(cur) || (strict === false && JC.Regular.testNumber(cur))){
						cur = parseFloat(cur);
						cur = Math.pow(cur, exp);
						newArr.push(cur);
					}else if(returnAll === true){
						newArr.push(cur);
					}
				}
				return newArr;
			},
			/**
			 * 判断指定数组中是否包含目标值
			 * @param {Array} arr
			 * @param {Object} key
			 * @return {Boolean} true，如果包含；false，如果不包含。
			 */
			contains: function(arr, value) {
				if (JC.isVoid(arr) || !JC.isArray(arr)) {
					throw new Error('[JC - Array]Invalid parameter: null, undefined or not an array.');
				}
				// if missing the second parameter, show error info.
				if (arguments.length <= 1) {
					throw new Error('[JC - Array]Missing parameter: your second parameter is missing.');
				}
				
				for (var i = 0, l = arr.length;i < l;i++) {
					if (arr[i] === value) {
						return true;
					}
				}
				return false;
			},
			/**
			 * 判断接收到的两个数组是否内容相同
			 * @param {Array} arr1
			 * @param {Array} arr2
			 */
			equals: function(arr1, arr2) {
				if (JC.isVoidIn(arr1, arr2) || !JC.isArray(arr1) || !JC.isArray(arr2)) {
					throw new Error('[JC - Array]Invalid parameter: null, undefined or not an array.');
				}
				
				if (arr1 == arr2) return true;
				
				if (arr1.length != arr2.length) {
					return false;
				} else {
					for (var i = 0, l = arr1.length;i < l;i++) {
						if (arr1[i] != arr2[i]) return false;
					}
					return true;
				}
				return true;
			},
			/**
			 * 清空入参数组
			 */
			clear: function() {
				for (var i = 0, l = arguments.length;i < l;i++) {
					var tObj = arguments[i];
					if (!JC.isVoid(tObj) && JC.isArray(tObj)) {
						tObj.splice(0, tObj.length);
					}
				}
			},
			/**
			 * 将类数组对象转换为数组
			 * @param {Object} obj
			 */
			convertFromArrayLike: function(obj) {
				if (JC.isVoid(obj)) {
					throw new Error('[JC - Array]Invalid parameter: null or undefined.');
				}
				
				return [].slice.call(obj);
			},
			/**
			 * 获得第一个符合条件的对象在数组中的索引，如果数组中没有符合条件对象，返回-1。
			 * 该方法不涉及任何对象的继承属性。
			 * @param {Object} arr
			 * @param {Object} obj
			 * @return {Boolean} -1, no eligible object; >= 0, the index of eligible object.
			 */
			getIndexOfEligibleObj: function(arr, obj) {
				// 第二入参必须存在
				if (arguments.length < 2) {
					throw new Error('[JC - Array]Missing parameter: your second parameter is missing.');
				}
				
				// 入参合法性验证
				if (JC.isVoidIn(arr, obj)) {
					throw new Error('[JC - Array]Invalid parameter: null or undefined.');
				}
				if (!JC.isArray(arr)) {
					throw new Error('[JC - Array]Invalid parameter: not an array.');
				}
				if (!JC.isObject(obj)) {
					throw new Error('[JC - Array]Invalid parameter: not an object.');
				}
				
				for (var i = 0, l = arr.length;i < l;i++) {
					var tObj = arr[i];
					if (JC.isObject(tObj)) {
						var flag = true;
						// 以入参对象为基准，数组中要检查的对象必须包含入参对象中的全部键值
						for (var key in obj) {
							if (obj.hasOwnProperty(key)) {
								if (!(tObj.hasOwnProperty(key) && obj[key] == tObj[key])) {
									flag = false;
									break;
								}
							}
						}
						if (flag == true) return i;
					}
				}
				return -1;
			}
		},
		
		// Array				----------> End
		
		
		
		
		
		// Object				----------> Begin
		Object: {
			/**
			 * 获得对象的大小
			 * @param {Object} obj
			 */
			getSize: function(obj) {
				if (JC.isVoid(obj)) {
					throw new Error('[JC - Object]Invalid parameter: null or undefined.');
				}
				if (!JC.isObject(obj)) {
					throw new Error('[JC - Object]Invalid parameter: not an object.');
				}
				return Object.keys(obj).length;
			},
			/**
			 * 克隆目标对象
			 * @param {Object} obj
			 */
			clone: function(obj) {
				if (JC.isVoid(obj)) {
					throw new Error('[JC - Object]Invalid parameter: null or undefined.');
				}
				if (!JC.isObject(obj)) {
					throw new Error('[JC - Object]Invalid parameter: not an object.');
				}
				
				var tObj = new Object();
				for (var key in obj) {
					if (JC.isObject(obj[key])) {
						tObj[key] = this.clone(obj[key]);
					} else {
						tObj[key] = obj[key];
					}
				}
				return tObj;
			},
			/**
			 * 判断某对象中是否包含指定的键。
			 * @param {Object} obj
			 * @param {Object} key
			 * @return {Boolean} true，如果包含；false，如果不包含。
			 */
			contains: function(obj, key) {
				if (JC.isVoid(obj) || !JC.isObject(obj)) {
					throw new Error('[JC - Object]Invalid parameter: null, undefined or not an object.');
				}
				// if missing the second parameter, show error info.
				if (arguments.length <= 1) {
					throw new Error('[JC - Object]Missing parameter: your second parameter is missing.');
				}
				
				return JC.Array.contains(Object.keys(obj), key);
			},
			/**
			 * 判断两个入参对象是否相等。该方法不统计继承的属性。
			 * 该方法会在以下情况认为两者完全相等：
			 * 两者都是对象，且指向相同引用；
			 * 两者都是对象，且完全相等；
			 * 两者都是null；
			 * 两者都是undefined。
			 * @param {Object} obj1
			 * @param {Object} obj2
			 */
			equals: function(obj1, obj2) {
				if (JC.isVoidIn(obj1, obj2)) {
					throw new Error('[JC - Object]Invalid parameter: null or undefined.');
				}
				if (!JC.isObject(obj1) || !JC.isObject(obj2)) {
					throw new Error('[JC - Object]Invalid parameter: not an object.');
				}
				
				if (this.getSize(obj1) != this.getSize(obj2)) return false;
				
				for (var key in obj1) {
					if (obj1.hasOwnProperty(key)) {
						if (!this.contains(obj2, key)) {
							return false;
						} else {
							if (!JC.isSameType(obj1[key], obj2[key])) {
								return false;
							} else {
								var value1 = obj1[key];
								var value2 = obj2[key];
								if (JC.isArray(value1)) {
									if (!JC.Array.equals(value1, value2)) {
										return false;
									}
								} else if (JC.isObject(value1)) {
									if (!JC.Object.equals(value1, value2)) {
										return false;
									}
								} else {
									if (value1 != value2) {
										return false;
									}
								}
							}
						}
					}
				}
				return true;
			},
			/**
			 * 简单粗暴的合并多个对象，返回新生成的对象。如果多个对象中存在相同的键，后者键值替代前者键值。
			 */
			mergeByRude: function() {
				var obj = {};
				
				for (var i = 0, l = arguments.length;i < l;i++) {
					var tObj = arguments[i];
					if (!JC.isVoid(tObj) && JC.isObject(tObj)) {
						for (var key in tObj) {
							obj[key] = tObj[key];
						}
					}
				}
				
				return obj;
			}
		},
		
		
		
		
		
		// Object				----------> End
		
		
		
		
		
		
		// Math					----------> Begin
		/**
		 * 数学相关方法
		 */
		Math: {
			
			/**
			 * 创建并获得一个伪UUID，可以添加ID前缀
			 * @param {String} prefix
			 */
			getUUID: function(prefix){
				if(prefix){
					prefix = prefix.trim();
				}else{
					prefix = '';
				}
				
				// This method from stackoverflow.com - http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
				function u1(){
					var t = [];
					var hexDigits = '0123456789abcdef';
					for(var i=0;i < 36;i++){
						t[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
					}
					t[14] = '4';
					t[19] = hexDigits.substr((t[19] & 0x3) | 0x8, 1);
					t[8] = t[13] = t[18] = t[23] = '-';
					var	uuid = t.join('');
					return uuid;
				}
				
				// This method from stackoverflow.com - http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
				function u2(){
					function hd4(){// 4 hex digits
						return (((1 + Math.random()) * 0x10000) | 0).toString(16).substr(1);
					}
					return (hd4() + hd4() + '-' + hd4() + '-' + hd4() + '-' + hd4() + '-' + hd4() + hd4() + hd4());
				}
				
				// This method from stackoverflow.com - http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
				function u3(){
					return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
						var r = Math.random() * 16 | 0;
						var v = (c == 'x'?r:(r&0x3|0x8));
						return v.toString(16);
					});
				}
				
				// This method from stackoverflow.com - http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
				function u4(){
					var d = new Date().getTime();
					return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
						var r = (d + Math.random() * 16) % 16 | 0;
						d = Math.floor(d / 16);
						return (c == 'x' ? r : (r&0x3 | 0x8)).toString(16);
					});
				}
				
				var uuid = '';
				switch(parseInt(Math.random() * 4)){
				case 0:
					uuid = u1();
				case 1: 
					uuid = u2();
				case 2:
					uuid = u3();
				case 3:
					uuid = u4();
				}
				return prefix + uuid;
			},
			/**
			 * 获取[0,maximum)之间的随机数
			 * @param {Object} maximum maximum 随机数最大值，不包含
			 */
			getRandomNum: function(maximum){
				if(maximum == null) return Math.random();
				return Math.floor(Math.random()*maximum);
			},
			/**
			 * 获取[0,maximum)之间的随机数数组，可不重复
			 * @param {Object} maximum 随机数最大值，不包含
			 * @param {Object} length 要生成的随机数数组的长度
			 * @param {Object} isDistinct 是否清除重复元素
			 */
			getRandomNumArr: function(maximum,length,isDistinct){
				var arr = new Array(),arrl = 0,num = 0,isExist = false;
				while(arrl < length){
					num = this.getRandomNum(maximum);
					if(isDistinct == true){
						isExist = false;
						// 检查数组中是否存在相同的随机数
						for(var i=0,l=arr.length;i < l;i++){
							if(arr[i] == num){
								isExist = true;
								break;
							}
						}
					}
					if(!isExist){
						arr.push(num);
						arrl++;
					}
				}
				return arr;
			},
			/**
			 * 进制转换
			 * @param {Number} n 要转换进制的元素
			 * @param {Object} b 转换前进制
			 * @param {Object} a 转换后进制
			 */
			HDOB: function(n, b, a){
				return parseInt('' + n, b).toString(a);
			},
			/**
			 * 计算机存储大小单位转换，接收一个bytes型参数，转换为其他单位数值。
			 * @param {Object} bytes
			 * @param {Number} num
			 * @param {Number} base
			 */
			unitConvert: function(bytes, num, base){
				if(bytes === null || bytes === undefined || bytes <= 0){
					return ['0', 'B'];
				}
				var base = (base === 1000 || base === 1024) ? base : 1024,
					units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB','BB','NB','DB','CB']
					index = Math.floor(Math.log(bytes) / Math.log(base));
				var size = (bytes / Math.pow(base, index)).toFixed(num < 0 ? 2 : num);
				var unit = units[index];
				return [size, unit];
			}
			
		},
		
		
		// Math					----------> End
		
		
		
		
		// Date					----------> Begin
		/**
		 * 事件相关方法
		 */
		Date: {
			FORMAT_TYPE_DATE: 'yyyy-MM-dd',
			FORMAT_TYPE_TIME: 'HH:mm:ss',
			FORMAT_TYPE_DATETIME: 'yyyy-MM-dd HH:mm:ss',
			
			/**
			 * 检测年份值是否合法
			 * @param {Number} y
			 */
			isRightYear: function(y){
				y = parseInt(y);
				if(JC.isNumber(y)){
					if(y >= 1 && y <= 9999) return true;
				}
				return false;
			},
			/**
			 * 检测月份值是否合法
			 * @param {Number} m
			 */
			isRightMonth: function(m){
				m = parseInt(m);
				if(JC.isNumber(m)){
					if(m >= 1 && m <= 12) return true;
				}
				return false;
			},
			/**
			 * 检测小时值是否合法
			 * @param {Number} h
			 */
			isRightHour: function(h){
				h = parseInt(h);
				if(JC.isNumber(h)){
					if(h >= 1 && h <= 24) return true;
				}
				return false;
			},
			/**
			 * 检测分钟值是否合法
			 * @param {Number} m
			 */
			isRightMinutes: function(m){
				m = parseInt(m);
				if(JC.isNumber(m)){
					if(m >= 1 && m <= 60) return true;
				}
				return false;
			},
			/**
			 * 检测秒值是否合法
			 * @param {Number} s
			 */
			isRightSeconds: function(s){
				s = parseInt(s);
				if(JC.isNumber(s)){
					if(s >= 1 && s <= 60) return true;
				}
				return false;
			},
			/**
			 * 检测毫秒值是否合法
			 * @param {Number} ms
			 */
			isRightMilliseconds: function(ms){
				ms = parseInt(ms);
				if(JC.isNumber(ms)){
					if(ms >= 1 && ms <= 999) return true;
				}
				return false;
			},
			
			
			/**
			 * 补零，如果入参是大于等于0且小于等于10的数字，前置补零（默认）
			 * 可以根据Boolean型参follow的值，进行后置补零
			 * @param {Number} num
			 * @param {Boolean} follow 后置加零
			 */
			zeroFill: function(num, follow){
				if(!JC.isNumber(num)) return num;
				if(!JC.isBoolean(follow)) follow = false;
				
				if(num >= 0 && num <= 9){
					if(!follow){
						num = '0' + num;
					}else{
						num += '0';
					}
					return num;
				}
				return num;
			},
			
			/**
			 * 格式化时间字符串
			 * 将Date类型的时间对象转换为指定格式的字符串
			 * 格式化参数：
			 * yyyy: 四位年份
			 * yy: 两位年份
			 * MM: 月份
			 * dd: 日期在其所在月
			 * HH: 小时，24小时制
			 * mm: 分钟
			 * ss: 秒
			 * ms: 毫秒
			 * @param {String} style 格式化样式
			 * @param {Date} date 要格式化的时间，如果该值不是Date类型，或者为null，使用系统当前时间
			 */
			formatDate: function(style, date){
				if(JC.isVoid(date) || !JC.isDate(date)){
					date = new Date();
				}
				if(JC.isVoid(style) || !JC.isString(style)){
					style = this.FORMAT_TYPE_DATETIME;
				}
				
				var dateStr = style.replace(/yyyy|yy|MM|dd|HH|mm|ss|ms/g, function(s){
					switch(s){
						case 'yyyy': return date.getFullYear();
						case 'yy': return date.getYear();
						case 'MM': return JC.Date.zeroFill(date.getMonth() + 1);
						case 'dd': return JC.Date.zeroFill(date.getDate());
						case 'HH': return JC.Date.zeroFill(date.getHours());
						case 'mm': return JC.Date.zeroFill(date.getMinutes());
						case 'ss': return JC.Date.zeroFill(date.getSeconds());
						case 'ms': return date.getMilliseconds();
					}
				});
				return dateStr;
			},
			/**
			 * 快速格式化时间字符串
			 * 将Date类型的时间对象以预定义的样式格式化为字符串
			 * 该方法调用formatDate方法
			 * 预定义type：
			 * date: yyyy-MM-dd
			 * time: HH:mm:ss
			 * datetime: yyyy-MM-dd HH:mm:ss
			 * 默认为datetime
			 * @param {String} type
			 * @param {Date} date
			 */
			quickFormatDate: function(type, date){
				var style = this.FORMAT_TYPE_DATETIME;
				if(type === 'date'){
					style = this.FORMAT_TYPE_DATE;
				}else if(type === 'time'){
					style = this.FORMAT_TYPE_TIME;
				}
				
				return this.formatDate(style, date);
			},
			
			
			/**
			 * 获得一个从B.C 9999年至A.D 9999年之间的随机时间对象
			 * @return {Date}
			 */
			getRandomDate: function(){
				return this.getRandomDateByRange(new Date(GCP.Date.maxMilliTime), new Date(GCP.Date.minMilliTime));
			},
			/**
			 * 获得一个从B.C 9999年至A.D 9999年之间的随机时间字符串
			 * 可以指定时间字符串的样式
			 * @param {String} style
			 * @return {String}
			 */
			getRandomDateStr: function(style){
				if(JC.isVoid(style) || !JC.isString(style)){
					style = this.FORMAT_TYPE_DATETIME;
				}
				
				return this.formatDate(
					style, 
					this.getRandomDate()
				);
			},
			
			/**
			 * 获得一个指定时间区域内的随机时间
			 * 如果入参并非都是Date对象，或者截止时间小于起始时间，则返回当前时间
			 * @param {Date} start
			 * @param {Date} end
			 * @return {Date}
			 */
			getRandomDateByRange: function(start, end){
				if(!(JC.isDates([start, end]) && end >= start)){
					return new Date();
				}
				
				var startMilliTime = start.getTime();
				var td = end.getTime() - startMilliTime;
				return new Date(startMilliTime + JC.Math.getRandomNum(td));
			},
			/**
			 * 获得一个指定时间区域的随机时间字符串
			 * @param {Date} start
			 * @param {Date} end
			 * @param {String} style
			 * @return {String}
			 */
			getRandomDateStrByRange: function(start, end, style){
				if(JC.isVoid(style) || !JC.isString(style)){
					style = this.FORMAT_TYPE_DATETIME;
				}
				
				return this.formatDate(
					style,
					this.getRandomDateByRange(start, end)
				);
			},
			/**
			 * 获得一组指定时间区间内内升序排列的随机时间对象
			 * 如果起始时间和截止时间并非都是Date对象，或者截止时间小于起始时间，返回空数组
			 * @param {Number} size 随机时间数量
			 * @param {Date} start 开始时间
			 * @param {Date} end 结束时间
			 * @return {Array}
			 */
			getRandomDateArrByRange: function(size, start, end){
				if(!(JC.isDates([start, end]) && end >= start)){
					return [];
				}
				if(!JC.Regular.testPositiveInteger(size)){
					size = 0;
				}
				size = parseInt(size);
				
				var arr = [];
				JC.Common.loopFn(function(){
					arr.push(JC.Date.getRandomDateByRange(start, end));
				}, size);
				
				return arr.sort(function(a, b){
					return a - b;
				});
			},
			/**
			 * 获得一组指定时间区间内内升序排列的随机时间字符串
			 * @param {Number} size
			 * @param {Date} start
			 * @param {Date} end
			 * @param {String} style
			 */
			getRandomDateStrArrByRange: function(size, start, end, style){
				var arr = this.getRandomDateArrByRange(size, start, end);
				arr.sort(function(a, b){
					return a - b;
				});
				
				var strArr = [];
				JC.Common.loopObj(arr, function(date){
					strArr.push(JC.Date.formatDate(style, date));
				});
				return strArr;
			},
			/**
			 * 以当前系统时间为基准，指定一个时间偏移量，获取一个该偏移量内的随机时间对象
			 * @param {String} offset
			 */
			getRandomDateByNow: function(offset){
				var now = new Date();
				if(!JC.isString(offset)){
					return now;
				}
				
				var nowTimes = now.getTime();
				var start = new Date(nowTimes);
				var end = new Date(nowTimes);
				var i_y = i_M = i_d = i_H = i_m = i_s = 0;
				offset.replace(/[+-]?\d*(\.\d+)?y|[+-]?\d*(\.\d+)?M|[+-]?\d*(\.\d+)?d|[+-]?\d*(\.\d+)?H|[+-]?\d*(\.\d+)?m|[+-]?\d*(\.\d+)?s/g, function(c){
					var unit = c.charAt(c.length - 1);
					switch(unit){
					case 'y': 
						var year = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(year)) i_y = parseInt(year);
					case 'M':
						var month = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(month)) i_M = parseInt(month);
						break;
					case 'd':
						var day = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(day)) i_d = parseInt(day);
						break;
					case 'H':
						var hour = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(hour)) i_H = parseInt(hour);
						break;
					case 'm':
						var minutes = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(minutes)) i_m = parseInt(minutes);
						break;
					case 's':
						var seconds = c.slice(0, c.length - 1);
						if(JC.Regular.testPositiveInteger(seconds)) i_s = parseInt(seconds);
						break;
					}
				});
				
				start.setFullYear(start.getFullYear() - i_y);
				start.setMonth(start.getMonth() - i_M);
				start.setDate(start.getDate() - i_d);
				start.setHours(start.getHours() - i_H);
				start.setMinutes(start.getMinutes() - i_m);
				start.setSeconds(start.getSeconds() - i_s);
				
				end.setFullYear(end.getFullYear() + i_y);
				end.setMonth(end.getMonth() + i_M);
				end.setDate(end.getDate() + i_d);
				end.setHours(end.getHours() + i_H);
				end.setMinutes(end.getMinutes() + i_m);
				end.setSeconds(end.getSeconds() + i_s);
				
				return this.getRandomDateByRange(start, end);
			},
			/**
			 * 以当前系统时间为基准，指定一个时间偏移量，获取一个该偏移量内的随机时间字符串
			 * @param {String} offset
			 * @param {String} style
			 */
			getRandomDateStrByNow: function(offset, style){
				return this.formatDate(style, this.getRandomDateByNow(offset));
			},
			/**
			 * 以当前系统时间为基准，指定一个时间偏移量，获取一组该偏移量内的随机时间对象
			 * @param {Number} size
			 * @param {String} offset
			 * @return {Array}
			 */
			getRandomDateArrByNow: function(size, offset){
				if(!JC.Regular.testPositiveInteger(size)){
					size = 0;
				}
				size = parseInt(size);
				
				var arr = [];
				JC.Common.loopFn(function(){
					arr.push(JC.Date.getRandomDateByNow(offset));
				}, size);
				
				return arr.sort(function(a, b){
					return a - b;
				});
			},
			/**
			 * 以当前系统时间为基准，指定一个时间偏移量，获取一组该偏移量内的随机时间字符串
			 * @param {Number} size
			 * @param {String} offset
			 * @param {String} style
			 * @return {Array}
			 */
			getRandomDateStrArrByNow: function(size, offset, style){
				var arr = this.getRandomDateArrByNow(size, offset);
				arr.sort(function(a, b){
					return a - b;
				});
				
				var strArr = [];
				JC.Common.loopObj(arr, function(date){
					strArr.push(JC.Date.formatDate(style, date));
				});
				return strArr;
			}
			
			
			
			
			
			
			
//			
//			setCurrentTime: function(str){
//				return new Date(str);
//			},
//			/**
//			 * 计时器
//			 */
//			timer: function(){
//				
//			},
//			/**
//			 * 倒计时
//			 */
//			countdown: function(seconds){
//				
//			},
		},
		
		
		// Date					----------> End
		
		
		
		
		
		// Browser					----------> Begin
		/**
		 * 浏览器相关方法
		 */
		Browser: {
			/**
			 * Get browser's name
			 */
			getName: function(){
				var nua = navigator.userAgent.toLocaleLowerCase();
				if(nua.indexOf('trident') > 0){
					return 'IE';
				}else if(nua.indexOf('maxthon') > 0){
					return 'Maxthon';
				}else if(nua.indexOf('chrome') > 0){
					return 'Chrome';
				}else if(nua.indexOf('firefox') > 0){
					return 'Firefox';
				}else if(nua.indexOf('safari') > 0){
					return 'Safari';
				}
			},
			/**
			 * Get browser's version
			 */
			getVersion: function(){
				var browserName = this.getName();
				var nua = navigator.userAgent.toLocaleLowerCase();
				var reg = new RegExp(browserName.toLocaleLowerCase() + '/[\\d\\.]+');
				var arr = nua.match(reg) || [browserName + '/unknow version'];
				var version = arr[0].slice(browserName.length + 1);
				return version;
			}
		},
		
		
		
		
		// Browser					----------> End
		
		
		
		
		
		// Regular					----------> Begin
		/**
		 * 规则、正则或合法性检查
		 */
		Regular: {
			/**
			 * 去除字符串中的非法字符
			 * @param {Object} str
			 * @param {Object} trim 是否去除首位空格
			 * @param {Object} exclude 需要去除的内容，可以是字符串、数组和对象
			 */
			clearIllegalChars: function(str, trim, exclude){
				var defExclude = '`~!@#$%^&*()={}:;\',\\[\\].<>/?…—-|';
				if(trim){
					str = str.trim();
				}
				if(JC.isString(exclude) || JC.isArray(exclude) || JC.isObject(exclude)){
					exclude = JC.distinct(exclude);
				}else{
					exclude = defExclude;
				}
				var reg = new RegExp('[' + exclude + ']', 'g');
				return str.replace(reg, '');
			},
			
			/**
			 * 检测入参是否为数字：+11, -11, 11, 11., 11.11, .11, -.11
			 * @param {Object} obj
			 */
			testNumber: function(obj){
				return /^[+-]?\d*(\.\d+)?$/.test(obj);
			},
			/**
			 * 判断一个数字（字符串）是否为正整数（字符串）
			 * @param {Object} num
			 */
			testPositiveInteger: function(num){
				return /^[+]?[1-9]+\d*$/.test('' + num);
			}
		}
		
		
		// Regular					----------> End
		
	}
})();






