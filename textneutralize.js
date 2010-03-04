(function () {
  function replaceNeutralized (index) {
    var node = document.getElementById('neutralized' + index);
    var wasControversial = node.getAttribute('isControversial');
    if (wasControversial) {
      node.innerHTML = node.getAttribute('neutral');
      node.setAttribute('isControversial', '');
    } else {
      node.innerHTML = node.getAttribute('controversial');
      node.setAttribute('isControversial', 'yes');
    }
  }

  function jsReplaceNeutralizedLink (index, replacementText) {
    return 'javascript:replaceNeutralized(' + index + ',"' 
      + replacementText + '")';
  }
 
  window.replaceNeutralized = replaceNeutralized;
 })();
