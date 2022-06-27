var item = document.getElementById('range');
item.onchange = function() {
    value = (item.value - item.min) / (item.max - item.min)
    item.style.backgroundImage = [
        '-webkit-gradient(',
        'linear, ',
        'left top, ',
        'right top, ',
        'color-stop(' + value + ', #e20074), ',
        'color-stop(' + value + ', #b8b7b8)',
        ')'
    ].join('');
};