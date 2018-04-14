import $ from 'jquery';
import './style.css';


function updateTime() {
  let num = 0;
  setInterval(() => {
    $('#main').html(`You have been on this page for ${num} seconds.`);
    num += 1;
  }, 1000);
}

updateTime();
