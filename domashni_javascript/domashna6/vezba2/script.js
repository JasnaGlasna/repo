    document.body.style.fontFamily = "Arial, sans-serif";
    document.getElementById('nickname').textContent = 'Princess Lea';
    document.getElementById('favorites').textContent = 'kolaci, gino-torta, sladoled';
    document.getElementById('hometown').textContent = 'Carstvo na kolacite';

    var items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
      items[i].className = "listitem";
    }
    