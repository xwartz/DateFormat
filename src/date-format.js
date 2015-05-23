Date.prototype.Format = function (format) {
    var date = {
      'Y+': this.getFullYear(), // Year
      "M+": this.getMonth() + 1, //Month
      "D+": this.getDate(), //Day
      "H+": this.getHours(), //Hour
      "m+": this.getMinutes(), //Minute
      "s+": this.getSeconds(), //Second
      "S": this.getMilliseconds() //Fractional Second
    }

    for(var key in date) {
      if(new RegExp('(' + key + ')').test(format)) {
        var str = ('' + date[key])
        var fre = RegExp.$1.length - str.length
        var hol = '';
        for(var i = 0; i < fre; i++) {
          hol = '0'.concat('0')
        }
        format = format.replace(RegExp.$1, (hol + date[key]).substr(fre))
      }
    }

    return format
  }