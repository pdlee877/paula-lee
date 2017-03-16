$(document).ready(function() {
    
    stickyNavigation();
    navigationScroll();
    hoverIconTextPopUp();    
        
});


// Create skills chart
Highcharts.chart('highcharts-container', {
    chart: {
        type: 'column',
        backgroundColor: '#d6d6d6'
    },
    title: {
        text: 'Technical Skills Breakdown'
    },
    subtitle: {
        text: 'Click the columns to view skill breakdown.'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        categories: ['Getting Started', 'Basic', 'Average', 'Pretty Good', 'Holy Cow'],
        labels: {
            formatter: function() {
                return this.value;
            }
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false
            }
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.dataLabels}</b><br/>'
    },

    series: [{
        name: 'Skills',
        colorByPoint: true,
        data: [{
            name: 'Front-End',
            dataLabels: 'Average',
            y: 3,
            color: '#4E6766',
            drilldown: 'Front-End'
        }, {
            name: 'Back-End',
            dataLabels: 'Basic',
            y: 2,
            color: '#5AB1BB',
            drilldown: 'Back-End'
        }, {
            name: 'Databases',
            dataLabels: 'Basic',
            y: 2,
            color: '#f1c40f ',
            drilldown: 'Databases'
        }, {
            name: 'Test-Driven Development',
            dataLabels: 'Getting Started',
            y: 1,
            color: '#A5C882',
            drilldown: 'Test-Driven Development'
        }]
    }],
    drilldown: {
        series: [{
            name: 'Front-End',
            id: 'Front-End',
            data: [
                [
                    'HTML5',
                    3
                ],
                [
                    'CSS3',
                    2
                ],
                [
                    'Highcharts',
                    2
                ],
                [
                    'JavaScript',
                    2
                ],
                [
                    'Haml',
                    1
                ],
                [
                    'React',
                    0
                ]
            ]
        }, {
            name: 'Back-End',
            id: 'Back-End',
            data: [
                [
                    'Ruby',
                    4
                ],
                [
                    'Rails',
                    3
                ],
                [
                    'Sinatra',
                    3
                ],
                [
                    'Python',
                    1
                ],
                [
                    'Node',
                    0
                ]
            ]
        }, {
            name: 'Databases',
            id: 'Databases',
            data: [
                [
                    'PostgreSQL',
                    3
                ],
                [
                    'SQLite3',
                    3
                ],
                [
                    'ActiveRecord (ORM)',
                    3
                ]
            ]
        }, {
            name: 'Test-Driven Development',
            id: 'Test-Driven Development',
            data: [
                [
                    'Jasmine',
                    4
                ],
                [
                    'RSpec',
                    3
                ],
                [
                    'Capybara',
                    1
                ]
            ]
        }, {
            name: 'Opera',
            id: 'Opera',
            data: [
                [
                    'v12.x',
                    0.34
                ],
                [
                    'v28',
                    0.24
                ],
                [
                    'v27',
                    0.17
                ],
                [
                    'v29',
                    0.16
                ]
            ]
        }]
    }
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