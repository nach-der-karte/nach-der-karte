function scrollToTag(hash) {
    var rmv = document.querySelectorAll(".colored-link");
    for (i = 0; i < rmv.length; i++) {
      rmv[i].classList.remove("colored-link");
    }
    var children = document.querySelectorAll("#" + hash);
    console.log(event.target)
    
    for (i = 0; i < children.length; i++) {
      children[i].classList.add("colored-link");
      
      children[i].scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
    }
    event.target.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth"
    });
  }
  

  /* Randomise function adapted from here: https://stackoverflow.com/questions/18256139/random-li-list-with-jquery-before-page-get-loaded */

(function($) {
  $.fn.randomise = function(childElem) {
      return this.each(function() {
          var $this = $(this);
          var elems = $this.children(childElem);
          elems.sort(function() { return (Math.round(Math.random())-0.5); });  
          $this.detach(childElem);  
          for(var i=0; i < elems.length; i++){
              $this.append(elems[i]);
              if((i % 2) == 1 ){
                elems[i].style.backgroundColor = "#fafafa";
              }
              else if ((i % 2) == 0 ){
                elems[i].style.backgroundColor = "#faf5f4";
              }   
          }   
      });    
  }
})(jQuery);

function randStart() {
  $("div#main-story").randomise("div.story-wrapper");
}