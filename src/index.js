import $ from 'jquery';


function updateTime {
  setInterval(function() {
    $('#main').html('You have been on this page for ${num} seconds.');
  }
}

updateTime();
