/**
 * -------------- FONCTIONS --------------
 *
 *  @author Didier Tirard
 *  @version 10-04-2020
 */
 

/**
 *  @function init
 *  Inititialiser l'affichage des sprites en fonction de la largeur du navigateur
 *  Il faut appeler la fonction redimSprite et lui passer les paramètres :
 *    - élément à modifier
 *    - coefficient d'affichage
 *
 *  En jQuery, pour cibler un élément du DOM (page web) : $('#ID') 
 *    - la virgule sépare les paramètres
 *    - le point est utilisé pour les valeurs décimales
 *  Exemple : pour cibler <div id="sprite1">, en jQuery $('#sprite1')
 */
function init() {
  redimSprite($('#sprite1'),0.9);
  redimSprite($('#sprite2'),0.4);
  redimSprite($('#awadansleau'),0.4);
}

/**
 *  @function redimSprite
 *  redimensionner un sprite
 *  @param elt : div du sprite (exemple $('#sprite1')) en jQuery
 *         percent : pourcentage souhaité de la taille du navigateur
 *  -------------- NE PAS MODIFIER CE CODE --------------
 */  
function redimSprite(elt, percent) {
  // calcul du coefficient en fonction de la largeur du navigateur
  coeff = elt.css('height').split('px')[0]/elt.css('width').split('px')[0];
  // modifiaction de la css
  elt.css({
    'width': window.innerWidth*percent+'px',
    'height': window.innerWidth*percent*coeff+'px'
  })
  // SURVOL :hover
  elt.hover(
    function() {
      $(this).css('background-position-y',elt.css('height').split('px')[0]*(-1)+'px');
    },
    function() {
      $(this).css('background-position-y','0px');
    }
  )
}
