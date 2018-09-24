var htmlConvert = require('html-convert');
var fs = require('fs');
 
var convert = htmlConvert({
	  quality     : 100,         // The default image quality. Defaults to 100. Only relevant for jpeg format.
	  width       : 370,        // Changes the width size. Defaults to 1280
      height      : 470,         // Changes the height size. Defaults to 960
	
});
 
// convert a website url
 
convert('https://www.bangchak.co.th/oilprice.html')
  .pipe(fs.createWriteStream('out.png'));
 
