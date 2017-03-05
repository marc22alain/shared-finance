// commment
function load() {
  // $('#popin').html('new');

  var data;
  $.ajax({
    url: 'data',
    type: 'GET',
    dataType : 'json'
  }).done(function(data) {
    // $('#popin').html(JSON.stringify(data));
    data.forEach(function(bill) {
      populateBill(bill);
    });
  }).fail(function(xhr, status, error) {
    $('#popin').html(status);
  }).always(function(xhr, status) {
    console.log("done");
  });

};

$( document ).ready(load);


var populateBill = function(bill) {
  var newBill = $('<div>' + bill.payee + ' -- $' + bill.value + ': ' + bill.duedate + ' <button id="'+ bill.payee +'"> Pay </button></div>');
  newBill.appendTo('#popin');
  var billButton = $('#' + bill.payee).on('click', function() {
  	// alert('paid: ' + bill.payee);
  	bill.status = 'paid';
  	pay(bill);
  })
};

var pay = function(bill) {
  $.ajax({
  	url: 'payment',
  	type: 'PUT',
    dataType : 'json',
    data: bill
  }).done(function(data) {
  	alert('Confirmation: ' + data.confirmation);
  }).fail(function(xhr, status, error) {
    $('#popin').html(status);
  }).always(function(xhr, status) {
    console.log("done");
  });
};
