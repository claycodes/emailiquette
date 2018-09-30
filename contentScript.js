
window.addEventListener("DOMNodeInserted", function(event) {
	if($('div[aria-label="Message Body"').length == 0) {
      //alert('nope');
    }else{
      var stuff = $('div[aria-label="Message Body"').html();
      console.log(stuff);
    }
});