$(function() {
  // your code here

  $('.accordion-header').on('click', function() {
    let $content = $(this).next('.accordion-content')

    if ($content.is(':visible')) {
        $content.slideUp().removeClass('open')
    } else {
        $('.accordion-content').slideUp().removeClass('open')

        $content.slideDown().addClass('open')
    }
})

$('.todos button').on('click', function() {
  $.ajax({
      url: 'https://dummyjson.com/todos',
      method: 'GET',
      success: function(response) {
          const todos = response.todos;
          const $ul = $('.todos ul');
          
          $ul.empty();
          
          todos.forEach(function(todo) {
              $ul.append(`<li>${todo.todo}</li>`);
          });
      },
      error: function() {
          alert('Failed to load to-do items.');
      }
  });
});
})