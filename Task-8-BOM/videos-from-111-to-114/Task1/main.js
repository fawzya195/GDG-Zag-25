
  let fontSelect = document.getElementById('fontSelect');
  let colorSelect = document.getElementById('colorSelect');
  let sizeSelect = document.getElementById('sizeSelect');
  let text = document.getElementById('text');

  // Function to apply styles
  function applyStyles() {
    document.body.style.fontFamily = fontSelect.value;
    document.body.style.color = colorSelect.value;
    document.body.style.fontSize = sizeSelect.value;
  }

  // Function to save selections
  function saveSettings() {
    localStorage.setItem('font', fontSelect.value);
    localStorage.setItem('color', colorSelect.value);
    localStorage.setItem('size', sizeSelect.value);
  }

  // Event Listeners
  fontSelect.onchange = function() {
    applyStyles();
    saveSettings();
  }

  colorSelect.onchange = function() {
    applyStyles();
    saveSettings();
  }

  sizeSelect.onchange = function() {
    applyStyles();
    saveSettings();
  }

  // Apply saved settings if they exist
  window.onload = function() {
    if (localStorage.getItem('font')) {
      fontSelect.value = localStorage.getItem('font');
      document.body.style.fontFamily = fontSelect.value;
    }

    if (localStorage.getItem('color')) {
      colorSelect.value = localStorage.getItem('color');
      document.body.style.color = colorSelect.value;
    }

    if (localStorage.getItem('size')) {
      sizeSelect.value = localStorage.getItem('size');
      document.body.style.fontSize = sizeSelect.value;
    }
  }

