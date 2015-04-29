/**
 * jConcise分为以下功能区：
 * 基础功能：	BasicFunction
 * 选择器：		Selecter
 * 组件：		Component
 * 字符串方法：	String
 * 数学方法：	Math
 * 数组方法：	Array
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
		 * 遍历对象
		 * @param {Object} obj 可遍历的对象String、Array、Object
		 * @param {Object} func 遍历到每个元素后执行的方法，接收当前被遍历的元素
		 */
		iteration: function(obj, func){
			for(var i in obj){
				func(obj[i]);
			}
		},
		
		/**
		 * 判断入参是否为数组
		 * @param {Object} obj 要检查的内容
		 */
		isArray: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
		 * 判断入参是否为数字
		 * @param {Object} obj 要检查的内容
		 */
		isNumber: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为Boolean值
		 * @param {Object} obj 要检查的内容
		 */
		isBoolean: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为Date对象
		 * @param {Object} obj 要检查的内容
		 */
		isDate: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为String类型
		 * @param {Object} obj 要检查的内容
		 */
		isString: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为Function
		 * @param {Object} obj 要检查的内容
		 */
		isFunction: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为正则表达式
		 * @param {Object} obj 要检查的内容
		 */
		isRegExp: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		/**
		 * 判断入参是否为Object对象
		 * @param {Object} obj
		 */
		isObject: function(obj){
			if(this.Regular.nonsense(obj)) return false;
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
			}
			return false;
		},
		
		
		/**
		 * 以name - value的形式，log输出一个对象
		 * @param {Object} obj 要遍历输出的对象
		 * @param {Boolean} execFunc 是否执行对象中的方法
		 */
		logObj: function(obj, execFunc){
			for(var name in obj){
				if(this.isFunction(obj[name]) && execFunc == true){
					obj[name]();
				}else{
					console.log(name + ': ' + obj[name]);
				}
			}
		},
		/**
		 * 判断一个对象是否在一个容器中
		 * @param {Object} container
		 * @param {Object} obj
		 */
		contains: function(container, obj){
			if(JC.Regular.nonsense(container)) return false;
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
		 * @param {Function} 要执行的方法
		 * @param {Number} 执行次数
		 */
		loop: function(func, num){
			for(var i=0;i < num;i++){
				func();
			}
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
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
				if(JC.Regular.nonsense(strict) || !JC.isBoolean(strict)){
					strict = true;
				}if(JC.Regular.nonsense(returnAll) || !JC.isBoolean(returnAll)){
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
			}
			
			
		},
		
		
		// Array				----------> End
		
		
		
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
				if(JC.Regular.nonsense(date) || !JC.isDate(date)){
					date = new Date();
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
			 * TODO: 该方法通过获得一个指定区间内的随机数作为Date对象的总毫秒值，
			 * 通过Date对象的setTime方法获得随机Date对象。但随机数有很大的几率是较小的值，
			 * 结果是生成的随机Date对象有很大几率徘徊于1970年。
			 * 目前的解决方案是循环获得一定数量的随机数，取其平均值。 
			 */
			getRandomDate: function(){
				var LOOP_NUM = 7;
				var numArr = [];
				var milliTime = 0;
				while(numArr.length < LOOP_NUM){
					var digit = parseInt(Math.random() * GCP.Date.maxMilliTimeDigit) + 1;
					var sign = JC.Math.getRandomNum(2) === 1 ? 1: -1;
					milliTime = parseInt(Math.random() * Math.pow(10, digit)) * sign;
					if(milliTime <= GCP.Date.maxMilliTime && milliTime >= GCP.Date.minMilliTime){
						numArr.push(milliTime);
					}
				}
				milliTime = JC.Array.avg(numArr);
				return new Date(milliTime);
			},
			/**
			 * 获得一个从B.C 9999年至A.D 9999年之间的随机时间字符串
			 * 可以指定时间字符串的样式
			 * @param {String} style
			 */
			getRandomDateStr: function(style){
				if(JC.Regular.nonsense(style) || !JC.isString(style)){
					style = this.FORMAT_TYPE_DATETIME;
				}
				
				return this.formatDate(
					style, 
					this.getRandomDate()
				);
			},
			
			/**
			 * 获得一个指定时间区域内的随机时间
			 * @param {Date} start
			 * @param {Date} end
			 */
			getRandomDateByRange: function(start, end){
				
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
			 * 检查入参是否为无实际意义的参数，包括null和undefined
			 * @param {Object} obj
			 */
			nonsense: function(obj){
				if(obj === null || obj === undefined) return true;
			},
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
				return /^[+-]?\d*\.?(\d+)?$/.test(obj);
			}
		}
		
		
		// Regular					----------> End
		
	}
})();






