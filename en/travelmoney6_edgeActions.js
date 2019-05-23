/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53605, function(sym, e) {
         //play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'city'
   (function(symbolName) {   
   
   })("city");
   //Edge symbol end:'city'

   //=========================================================
   
   //Edge symbol: 'stars'
   (function(symbolName) {   
   
   })("stars");
   //Edge symbol end:'stars'

   //=========================================================
   
   //Edge symbol: 'pos-paper'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53605, function(sym, e) {
         //play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("pos-paper");
   //Edge symbol end:'pos-paper'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13683168");