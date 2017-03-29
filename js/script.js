//Display two drop-down notifications when alert icon is clicked


$(document).ready(function(){

    $(".green-alert").hide();

    $(".bell-icon").click(function(){
        $(".green-alert").show();
        $("#indicator").hide();
    });
});


//Close Alert box when x is clicked
$('.close-x').click(function() {
  $(this).parent().slideUp(300);
});


//Check to see if "Search for User" and "Message for User..." boxes have been filled in
$('#message-user-form').submit(function() {
    if($('#message-user-form input').val() == '' && $('#user-message-id').val() == ''){
        alert('Please select a user and write a message.');
        return false;
    } else if ($('#message-user-form input').val() == '') {
        alert('Please select a user.');
        return false;
    } else if ($('#user-message-id').val() == '') {
        alert('Please write a message.');
        return false;
    } else {
        alert('Your message has been sent!');
    }
});


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.bell-icon')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// AutoComplete plugin
$(function(){
    $('#user-search').autoComplete({
        minChars: 1,
        source: function(term, suggest){
            term = term.toLowerCase();
            var choices = ['Alex Anderson', 'Berny Brunswick', 'Cas Cutter', 'Joss Johnson', 
                           'Mel Martinson', 'Sacha Saunderson', 'Terry Tanenbaum', 'Val Vickerson'];
            var suggestions = [];
            for (i=0;i<choices.length;i++)
                if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
            suggest(suggestions);
        }
    });
});


// Save settings for on/off switches using local storage

function save(){
    var checkbox1 = document.getElementById('onoffswitch1');
    localStorage.setItem('onoffswitch1', checkbox1.checked);

    var checkbox2 = document.getElementById('onoffswitch2');
    localStorage.setItem('onoffswitch2', checkbox2.checked);
}

function load(){    

    var checked1 = JSON.parse(localStorage.getItem('onoffswitch1'));
    document.getElementById("onoffswitch1").checked = checked1;

    var checked2 = JSON.parse(localStorage.getItem('onoffswitch2'));
    document.getElementById("onoffswitch2").checked = checked2;

}

function wis(){
    location.reload();
    localStorage.clear();

}

load(); 

// Save settings for select list using local storage


 document.getElementById("time-zone").onchange = function() {
     localStorage['time-zone'] = document.getElementById("time-zone").value;
    };
    window.onload= function(){
        if(localStorage['time-zone'])
            document.getElementById("time-zone").value = localStorage['time-zone'];
   };