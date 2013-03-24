var kontakt = new Date(2013, 3, 6, 11, 0, 0);

function setupCounter(elementId)
{
  setInterval(function()
  {
    var time_left = Math.round(kontakt.getTime() - new Date().getTime()) / 1000;

    var hours_left = Math.floor(time_left / 3600);
    time_left -= hours_left * 3600;

    var minutes_left = Math.floor(time_left / 60);
    time_left -= minutes_left * 60;

    document.getElementById(elementId).innerHTML = hours_left + ' saat<br />' + minutes_left + ' dakika<br />' + Math.floor(time_left) + ' saniye kaldı';
  }, 1000);
}
