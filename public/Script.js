import $ from 'jquery';
import 'bootstrap-datepicker';

$(document).ready(function() {
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
  });
});
