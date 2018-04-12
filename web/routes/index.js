var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alekta Solutions.' });
});

module.exports = router;

<script src="skel.min.js">

{

prefix: "style", //

resetCSS: true,

boxModel: "border",

grid: { gutters: 2 },

breakpoints: {

wide: { range: "1200-", containers: 1140, grid: { gutters: 4 } },

narrow: { range: "481-1199", containers: 960 },

Another breakpoint. Kicks in between 481px and 1199px and uses 960px containers.

mobile: { range: "-480", containers: "fluid", lockViewport: true, grid: { collapse: true } }

}

}

</script>
