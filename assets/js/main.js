$(function () {
  'use script'

  feather.replace();

  const sb = new PerfectScrollbar('.sidebar-body', {
    suppressScrollX: true
  });

  $('.sidebar').on('mouseenter mouseleave', function (e) {
    var isHover = (e.type === 'mouseenter') ? true : false;

    if ($('.sidebar').hasClass('minimized')) {
      if (isHover) {
        setTimeout(function () {
          $('.sidebar').addClass('expand');
          sb.update();
        }, 300);
      } else {
        $('.sidebar').removeClass('expand');
        $('.sidebar-body').scrollTop(0);
        sb.update();
      }
    }
  });

  // checkbox in tabbed panel
  $('#pills-tab li').click(function () {
    $(".dataTable tr th").click();
    //var activetab = $(this).find('button');
    $(this).closest('ul').find('input[type="checkbox"]').prop('checked', '');
    $(this).closest('li').find('input[type="checkbox"]').prop('checked', 'checked');
  });

  // hide overlay box
  $('.overlay-box').on('click', function () {
    $(this).hide();
  })

  // toggle update ecs
	
	$('.togglebginside').on('click', function(){
		$('.bg-inside').slideToggle();
	})
	

  // checkbox as radio
  $('.selecttypes .form-check').click(function () {
    var postecs = new bootstrap.Modal(document.getElementById("postpondecsmodal"), {
		backdrop:false
	});
	var stopecs = new bootstrap.Modal(document.getElementById("stopecsmodal"), {
		backdrop:false
	});
	  var bankdetails = new bootstrap.Modal(document.getElementById("bankdetailsmodal"), {
		backdrop:false
	});
	  var changeamt = new bootstrap.Modal(document.getElementById("changecsamtmodal"), {
		backdrop:false
	});
	  var changeperiod = new bootstrap.Modal(document.getElementById("changeperiodmodal"), {
		backdrop:false
	});var othertext = new bootstrap.Modal(document.getElementById("othermodal"), {
		backdrop:false
	});
	  var checks = $('input[type="checkbox"]');
    $('input#postpondecs[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
		postecs.show();
      }
    });
	  
	  $('input#stopecs[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
          stopecs.show();
      }
    });
	  
	   $('input#bankdetails[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
          bankdetails.show();
      }
    });
	  
	  $('input#changeecsamt[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
          changeamt.show();
      }
    });
	  
	   $('input#changeperiod[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
          changeperiod.show();
      }
    });
	  
	  $('input#otherm[type="checkbox"]').on('change', function (e) {
      if (e.target.checked) {
		$(this).parent('.form-check').siblings().find(checks).prop('checked', '');
          othertext.show();
      }
    });
	  
  });


  // single level menu
  $('.nav-sidebar > .nav-link').on('click', function () {
    // e.preventDefault();

    // remove active siblings
    // $(this).addClass('active').siblings().removeClass('active');

    // remove active siblings from other nav
    //  var ss = $(this).closest('.nav-sidebar').siblings('.nav-sidebar');
    //  var sg = $(this).closest('.nav-group').siblings('.nav-group');

    // ss.find('.active').removeClass('active');
    // ss.find('.show').removeClass('show');

    // sg.find('.active').removeClass('active');
    // sg.find('.show').removeClass('show');
  });

  // two level menu
  $('.nav-sidebar .nav-item').on('click', '.nav-link', function () {
    //e.preventDefault();

    if ($(this).hasClass('with-sub')) {
      $(this).parent().toggleClass('show');
      $(this).parent().siblings().removeClass('show');
    } else {
      $(this).parent().addClass('active').siblings().removeClass('active');
      $(this).parent().siblings().find('.sub-link').removeClass('active');
    }

    //  var ss = $(this).closest('.nav-sidebar').siblings('.nav-sidebar');
    //  var sg = $(this).closest('.nav-group').siblings('.nav-group');

    //  ss.find('.active').removeClass('active');
    //  ss.find('.show').removeClass('show');

    //  sg.find('.active').removeClass('active');
    //  sg.find('.show').removeClass('show');

    sb.update();
  });

  $('.nav-sub').on('click', '.sub-link', function () {
    //e.preventDefault();

    // $(this).addClass('active').siblings().removeClass('active');

    //  $(this).closest('.nav-item').addClass('active').siblings().removeClass('active');
    // $(this).closest('.nav-item').siblings().find('.sub-link').removeClass('active');

    //$(this).closest('.nav-sidebar').siblings().find('.active').removeClass('active');
    // $(this).closest('.nav-group').siblings().find('.active').removeClass('active');
  });


  $('.nav-group-label').on('click', function () {
    $(this).closest('.nav-group').toggleClass('show');
    $(this).closest('.nav-group').siblings().removeClass('show');

    sb.update();
  });

  // content menu
  $('.contentMenu').on('click', function (e) {
    e.preventDefault();

    $(this).children().toggleClass('fa-arrow-right-long')
    $('.sidebar').toggleClass('minimized');

    $('.sidebar-body').scrollTop(0);
    sb.update();
  });

  // mobile menu
  $('#mobileMenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-show');
  });

  // for demo only


});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


var arrLang = {
  'en': {
    'dashboard': 'Dashboard',
    'my profile': 'My Profile',
    'my donation': 'My Donation',
    'online donation': 'Online Donation',
    'donate monthly': 'Donate Monthly',
    'birthday / anniversary': 'Birthday / Anniversary',
    'my monthly donation': 'My Monthly Donations',
    'celebrate in gaushala': 'Celebrate in Gaushala',
    'my references': 'My References',
    'feedback / complaints': 'Feedback / Complaints'
  },
  'hi': {
    'dashboard': 'डैशबोर्ड',
    'my profile': 'मेरा प्रोफ़ाइल',
    'my donation': 'मेरे दान',
    'online donation': 'ऑनलाइन दान',
    'donate monthly': 'Donate Monthly',
    'birthday / anniversary': 'Birthday / Anniversary',
    'my monthly donation': 'My Monthly Donations',
    'celebrate in gaushala': 'Celebrate in Gaushala',
    'my references': 'मेरे संदर्भ',
    'feedback / complaints': 'प्रतिक्रिया/शिकायत'
  }
};
$(function () {
  $('.translate').click(function () {
    $(this).attr('id', function (index, attr) {
      return attr == 'en' ? 'hi' : 'en';
    });
    $(this).children().attr('src', function (index, attr) {
      return attr == 'assets/images/english.svg' ? 'assets/images/hindi.svg' : 'assets/images/english.svg';
    });
    var lang = $(this).attr('id');
    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});


// floating input box
function checkForInput(element) {
  const $label = $(element).siblings('label');
  if ($(element).val().length > 0) {
    $label.addClass('input-has-value');
  } else {
    $label.removeClass('input-has-value');
  }
}
$('input.textdemo').each(function () {
  checkForInput(this);
});
$('input.textdemo').on('change keyup', function () {
  checkForInput(this);
});

// floating selectbox
$("select.addfloat").change(function () {
  if ($(this).val() == "0") {
    $(this).parent().removeClass('floatadded');
  } else {
    $(this).parent().addClass('floatadded');
  }
});

// floating date
$('.floatingdate input').click(function () {
  $(this).attr('type', 'date');
})


// floating datepicker
$('.floatinginput input').click(function () {
  $(this).next().addClass('input-has-value');
})

// profile upload button
$(".camera-img").click(function () {
  $("input[id='imageupload']").click();
});


// save and next
$('.btnNext').click(function (e) {
  e.preventDefault();
  $('.nav-pills .active').next('button').trigger('click');
});


$(function () {
  $('.date-picker').datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: false,
    dateFormat: 'MM yy',
    onClose: function (dateText, inst) {
      $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
      if ($(this).val() == "0") {
        $(this).next().removeClass('input-has-value');
      } else {
        $(this).next().addClass('input-has-value');
      }
    }
  });
});


// quantity
$(document).ready(function () {
  $('.cqbox .minus').click(function () {
    var $input = $(this).parent().find('input.cquantity');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.cqbox .plus').click(function () {
    var $input = $(this).parent().find('input.cquantity');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


// datatable

$('.resdatatable').DataTable({
  dom: 'Bfrltp',
  "bLengthChange": true,
  oLanguage: {
    sLengthMenu: " <img src='assets/images/table.svg'> _MENU_",
  },
  responsive: true,
  scrollX: '100%',
  pageLength: 10,
  lengthMenu: [0, 5, 10, 20, 50, 100, 200, 500],
  language: {
    search: '<img src="assets/images/search.svg">',
    searchPlaceholder: "Search records",
    paginate: {
      next: '&#8594;', // or '→'
      previous: '&#8592;' // or '←' 
    }
  },

  buttons: [{
      extend: 'copyHtml5',
      text: '<img src="assets/images/copy.svg">',
      titleAttr: 'Copy'
    }, {
      extend: 'excelHtml5',
      text: '<img src="assets/images/excel.svg">',
      titleAttr: 'Excel'
    }, {
      extend: 'csvHtml5',
      text: '<img src="assets/images/csv.svg">',
      titleAttr: 'CSV'
    }, {
      extend: 'pdfHtml5',
      text: '<img src="assets/images/pdf.svg">',
      titleAttr: 'PDF'
    }, {
      extend: 'print',
      text: '<img src="assets/images/print.svg">',
      titleAttr: 'Print'
    }

  ]

});


$(function() {
	$('.datepicker2').mask('00/00/0000');
  });