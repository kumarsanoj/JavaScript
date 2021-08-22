Array.prototype._forEach = function(callback) {
    if (typeof callback !== "function") {
        throw new Error(`${callback} is not a function`)
    }
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype._indexOf = function(element) {
    for(let i = 0; i < this.length; i++) {
        if(element === this[i]) {
            return i;
        } 
    }
    return -1;
}
// Assumption: pos will be integer number
//TODO: where pos is negative number
Array.prototype._splice = function(pos, noOfItemToDelete, ...itemsToadd) {
    let diff = itemsToadd.length - noOfItemToDelete;
    if (diff > 0) {
        let i = this.length - 1;
        while(i > pos) {
            this[i+diff] = this[i];
            i--;
        }
        let j = 0, k = 0;
        let deletedItem = [];
        for(i = pos; i < (pos + itemsToadd.length); i++) {
            if (i < pos + noOfItemToDelete) {
                deletedItem[k] = this[i];
                k++;
            }
            this[i] = itemsToadd[j]
            j++
        }
        return deletedItem;
    } else {
        let j = 0;
        let i;
        for(i =pos; i < (pos + itemsToadd); i++) {
            this[i] = itemsToadd[j];
            j++;
        }
        let diffInInteger = Math.abs(diff);
        while(i + diffInInteger  < this.length) {
            this[i] = this[i + diffInInteger];
            i++;
        }
        this.length = this.length - diffInInteger;
        return [];
    }
}

Array.prototype._at = function(number) {
    if (number > -1 && number < this.length) {
        return this[number];
    } else if(number < 0 && Math.abs(number) <= this.length) {
        return this[this.length + number]
    }
}

Array.prototype._concat = function(...arrList) {
    let result = [...this];
    for (let i = 0; i < arrList.length; i++) {
        result = [...result, ...arrList[i]]
    }
    return result;
}

Array.prototype._copyWithin = function(target, start, end) {
    let i = target;
    let j = start;
    while(i <= (target + (end - start))) {
        this[i] = this[j];
        i++;
        j++;
    }
    return this;
}

Array.prototype._entries = function() {
    let arr = this;
    let i = 0;
    return {
        next: function() {
            if (i < arr.length) {
                let ret =  {
                    value: [i, arr[i]],
                    done: false
                }
                i = i+1;
                return ret;
            }
            return {value: undefined, done: true}
        }
    }
}

Array.prototype._every = function(callback) {
    if (typeof callback === 'function') {
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            if (res === false) {
                return false;
            }
        }
        return true;
    }
}

Array.prototype._filter = function(callback) {
    if (typeof callback === 'function') {
        let ret = []
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            if (res === true) {
                ret.push(this[i]);
            }
        }
        return ret;
    }
}

Array.prototype._find = function(callback) {
    if (typeof callback === 'function') {
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            if (res === true) {
                return this[i];
            }
        }
        
    }
}

Array.prototype._findIndex = function(callback) {
    if (typeof callback === 'function') {
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            if (res === true) {
                return i;
            }
        }
        
    }
}

Array.prototype._includes = function(ele) {
    for(let i=0; i < this.length; i++) {
        if (this[i] === ele) {
            return true;
        }
    }
    return false;
}

Array.prototype._join = function(separator) {
    let str = ''
    let sep;
    if (separator === '') {
        sep='';
    } else if (separator) {
        sep=`${separator}`;
    } else {
        sep=',';
    }
    str = this[0]
    for(let i=1; i < this.length; i++) {
        str = str + sep +this[i]
    }
    return str;
}

Array.prototype._keys = function() {
    let arr = this;
    let i = 0;
    return {
        next: function() {
            if (i < arr.length) {
                let ret =  {
                    value: i,
                    done: false
                }
                i = i+1;
                return ret;
            }
            return {value: undefined, done: true}
        }
    }
}

Array.prototype._map = function(callback) {
    if (typeof callback === 'function') {
        let ret = []
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            ret.push(res);
        }
        return ret;
    }
}

Array.prototype._reduce = function(callback, initialValue) {
    if (typeof callback === 'function') {
        let accumulator = initialValue === undefined ? this[0] : initialValue;
        for(let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
            accumulator =  callback(accumulator, this[i], i, this);
        }
        return accumulator;
    }
}

Array.prototype._reduceRight = function(callback, initialValue) {
    if (typeof callback === 'function') {
        let accumulator = initialValue === undefined ? this[this.length - 1] : initialValue;
        for(let i = initialValue === undefined ? this.length - 2 : this.length - 1; i >= 0; i--) {
            accumulator =  callback(accumulator, this[i], i, this);
        }
        return accumulator;
    }
}
Array.prototype._reverse = function() {
    let left = 0; 
    let right = this.length - 1;
    while(left < right) {
        let temp = this[left];
        this[left] = this[right];
        this[right] = temp;
        left++;
        right--;
    }
}

Array.prototype._slice = function(start, end= this.length) {
    let result = [];
    for(let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}
Array.prototype._some = function() {
    if (typeof callback === 'function') {
        for(let i=0; i < this.length; i++) {
            let res = callback(this[i], i, this);
            if (res === true) {
                return true;
            }
        }
        return true;
    }
}

Array.prototype._toString = function() {
    let str = ''
    let sep=",";
    str = this[0]
    for(let i=1; i < this.length; i++) {
        str = str + sep +this[i]
    }
    return str;
}
Array.prototype._values = function() {
    let arr = this;
    let i = 0;
    return {
        next: function() {
            if (i < arr.length) {
                let ret =  {
                    value: arr[i],
                    done: false
                }
                i = i+1;
                return ret;
            }
            return {value: undefined, done: true}
        }
    }
}