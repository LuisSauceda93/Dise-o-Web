var $form = $("#formulario"),
    $titulo = $("#titulo"),
    $url = $("#url"),
    $button = $("#mostrar-form"),
    $list = $("#contenido"),
    $post = $(".item").first();

//Eventos

function mostrarFormulario() {
  // body...
  $form.slideToggle();
  return false;
}

function agregarPost() {
  // body...
  var url = $url.val(),
      titulo = $titulo.val();
      $clone = $post.clone();
      $clone.find(".titulo_item a").text(titulo).attr("href", url);

  $clone.hide();
  $list.prepend($clone);
  $clone.fadeIn();
  $titulo.val("");
  $url.val("");

  return false;
}

$button.click(mostrarFormulario);
$form.on("submit", agregarPost);
