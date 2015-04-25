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
 * 合法性检查：	Valid
 */
var JC = jConcise = (function(){
	var GCP = {
		Date: {
			mixMilliTime: -253370736000000,
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
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'number' && obj.constructor === Number){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为Boolean值
		 * @param {Object} obj 要检查的内容
		 */
		isBoolean: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'boolean' && obj.constructor === Boolean){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为数组
		 * @param {Object} obj 要检查的内容
		 */
		isArray: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Array){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为Date对象
		 * @param {Object} obj 要检查的内容
		 */
		isDate: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Date){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为String类型
		 * @param {Object} obj 要检查的内容
		 */
		isString: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'string' && obj.constructor === String){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为Function
		 * @param {Object} obj 要检查的内容
		 */
		isFunction: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'function' && obj.constructor === Function){
				return true;
			}
			return false;
		},
		/**
		 * 判断入参是否为正则表达式
		 * @param {Object} obj 要检查的内容
		 */
		isRegExp: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === RegExp){
				return true;
			}
			return false;
		},
		
		isObject: function(obj){
			if(this.Valid.nonsense(obj)) return false;
			if(typeof obj === 'object' && obj.constructor === Object){
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
			if(JC.Valid.nonsense(container)) return false;
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
			 * 以数组形式返回入参字符串中的字符
			 * @param {Object} str
			 */
			getChars: function(str){
				return str.match(/[a-zA-Z]/g);
			},
			/**
			 * 以字符串的形式返回入参字符串中的字符
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
			 * @param {Object} arr
			 */
			sum: function(arr){
				var sum = 0;
				if(JC.isArray(arr)){
					for(var i in arr){
						if(JC.isNumber(arr[i])){
							sum += arr[i];
						}
					}
				}
				return sum;
			},
			
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
			},
			
		},
		
		
		// Math					----------> End
		
		
		
		
		// Date					----------> Begin
		/**
		 * 事件相关方法
		 */
		Date: {
			/**
			 * 获得一个从B.C 9999年至A.D 9999年之间的随机时间对象
			 */
			getRandomDate: function(str){
				var digit = parseInt(Math.random() * GCP.Date.maxMilliTimeDigit) + 1;
				var sign = JC.Math.getRandomNum(2) === 1 ? 1: -1;
				var milliTime = parseInt(Math.random() * Math.pow(10, digit)) * sign;
				if(milliTime > GCP.Date.maxMilliTime){
					milliTime = GCP.Date.maxMilliTime;
				}else if(milliTime < GCP.Date.minMilliTime){
					milliTime = GCP.Date.minMilliTime;
				}
				return new Date(milliTime);
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
		
		
		
		
		
		// Valid					----------> Begin
		/**
		 * 数据合法性检查
		 */
		Valid: {
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
			}
		}
		
		
		// Valid					----------> End
		
	}
})();






