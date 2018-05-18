$(document).ready(function() {
  $('logo__burger-wrapper').on('click', function() {
    alert( "clicked" );
    $(this).addClass('logo__closed');
    $('logo__cross-wrapper').removeClass('logo__closed');
    $('main-header__navigation').removeClass('visually-hidden');
  });
});
