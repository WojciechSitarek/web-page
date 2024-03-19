function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function openCity(cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");  
    document.getElementById(cityName).style.display = "block"; 
  }
  document.getElementById("defaultOpen").click();

  function showTile(country) {
    
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function(tile) {
      tile.style.display = 'none';
    });

    var selectedTile = document.getElementById(country);
    if (selectedTile) {
      selectedTile.style.display = 'flex';
    }
  }

