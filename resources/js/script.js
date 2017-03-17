$(document).ready(function() {
    
    stickyNavigation();
    navigationScroll();
    hoverIconTextPopUp();
//    skillsHighChart(); 
});



/* Stick navigation */
var stickyNavigation = function() {
    $('.js--section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
}; 

/* Navigation scroll */
var navigationScroll = function(){
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }

       });
    });
};

/* Hover Text */
var hoverIconTextPopUp = function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light'
    });
};



// Create skills chart
//var skillsHighChart = function() {
//    Highcharts.chart('highcharts-container', {
//
//        chart: {
//            type: 'column',
//            backgroundColor: '#F6F0ED',
//            style: {
//                "fontFamily": 'Lato',
//                "fontSize": "20px"
//            }
//        },
//        title: {
//            text: 'Click the columns to view skill breakdown.',
//            style: { 
//                "fontSize": '18px'
//            }
//        },
//        xAxis: {
//            categories: ['Front-End', 'Back-End', 'Databases', 'Test-Driven Development'],
//            labels: {
//                style: {
//                    "fontSize": '22px'
//                },
//                formatter: function() {
//                    return this.value
//                }
//            }
//        },
//        yAxis: {
//            
//            endOnTick: true,
//            categories: ['', 'Getting Started', 'Basic', 'Average', 'Pretty Good', 'Holy Cow'],
//            gridLineColor: "#555",
//            min: 0,
//            title: { text: 'Levels'},
//            labels: {
//                formatter: function() {
//                    return this.value
//                },
//                style: {
//                    "fontSize": '22px',
//                    "color": "#945D5E"
//                }
//            }
//
//        },
//        legend: {
//            enabled: false
//        },
//        plotOptions: {
//            series: {
//                borderWidth: 0,
//                dataLabels: {
//                    enabled: false
//                }
//            }
//        },
//
//        tooltip: {
//            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
//        },
//
//        series: [{
//            name: 'Skills',
//            colorByPoint: true,
//            data: [{
//                name: 'Front-End',
//                y: 4,
//                color: '#28536B',
//                drilldown: 'Front-End'
//            }, {
//                name: 'Back-End',
//                y: 3,
//                color: '#648767',
//                drilldown: 'Back-End'
//            }, {
//                name: 'Databases',
//                y: 3,
//                color: '#785964',
//                drilldown: 'Databases'
//            }, {
//                name: 'Test-Driven Development',
//                y: 2,
//                color: '#454545',
//                drilldown: 'Test-Driven Development'
//            }]
//        }],
//        drilldown: {
//            series: [{
//                name: 'Front-End',
//                id: 'Front-End',
//                data: [
//                    [
//                        'HTML5',
//                        4
//                    ],
//                    [
//                        'CSS3',
//                        3
//                    ],
//                    [
//                        'Highcharts',
//                        3
//                    ],
//                    [
//                        'JavaScript',
//                        3
//                    ],
//                    [
//                        'Haml',
//                        2
//                    ],
//                    [
//                        'React',
//                        1
//                    ]
//                ]
//            }, {
//                name: 'Back-End',
//                id: 'Back-End',
//                data: [
//                    [
//                        'Ruby',
//                        5
//                    ],
//                    [
//                        'Rails',
//                        4
//                    ],
//                    [
//                        'Sinatra',
//                        4
//                    ],
//                    [
//                        'Python',
//                        2
//                    ],
//                    [
//                        'Node',
//                        1
//                    ]
//                ]
//            }, {
//                name: 'Databases',
//                id: 'Databases',
//                data: [
//                    [
//                        'PostgreSQL',
//                        4
//                    ],
//                    [
//                        'SQLite3',
//                        4
//                    ],
//                    [
//                        'ActiveRecord (ORM)',
//                        4
//                    ]
//                ]
//            }, {
//                name: 'Test-Driven Development',
//                id: 'Test-Driven Development',
//                data: [
//                    [
//                        'Jasmine',
//                        5
//                    ],
//                    [
//                        'RSpec',
//                        4
//                    ],
//                    [
//                        'Capybara',
//                        2
//                    ]
//                ]
//            }]
//        }
//    });
//}