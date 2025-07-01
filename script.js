const rawData = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self-Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`
const data = JSON.parse(rawData);

// to populate the DOM w/ the stats data
const allCategories = document.querySelectorAll('.category');
for (let category of allCategories){
    const id = category.id;

    const daily = category.querySelector('.daily');
    const dailyHours = daily.querySelector('h3');
    const dailyPrevious = daily.querySelector('span');

    const weekly = category.querySelector('.weekly');
    const weeklyHours = weekly.querySelector('h3');
    const weeklyPrevious = weekly.querySelector('span');

    const monthly = category.querySelector('.monthly');
    const monthlyHours = monthly.querySelector('h3');
    const monthlyPrevious = monthly.querySelector('span');

    
    for (let d of data){
        if (id === d.title.toLowerCase()) {
            dailyHours.textContent = d.timeframes.daily.current + 'hrs';
            dailyPrevious.textContent = d.timeframes.daily.previous  + 'hrs';

            weeklyHours.textContent = d.timeframes.weekly.current + 'hrs';
            weeklyPrevious.textContent = d.timeframes.weekly.previous + 'hrs';

            monthlyHours.textContent = d.timeframes.monthly.current + 'hrs';
            monthlyPrevious.textContent = d.timeframes.monthly.previous + 'hrs';
        }
    }
}

const allRadio = document.querySelectorAll('input[type="radio"]');
const allStat = document.querySelectorAll('.stat');
for (let radio of allRadio) {
    radio.addEventListener('change', function(){
        // to hide all stats
        allStat.forEach(stat => {
            stat.classList.add('d-none');
        })
        const id = this.id;
        // to show the stats that match the checked radio input
        for (let stat of allStat) {
            if (stat.classList.contains(id)) {
                stat.classList.remove('d-none');
            }
        }
    })
}