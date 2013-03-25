var kontakt = new Date(2013, 3, 6, 11, 0, 0);
var kontakt_end = new Date(2013, 3, 7, 20, 0, 0);

function setupCounter(elementId)
{
  setInterval(function()
  {
    var now = new Date();

    if (kontakt > now)
    {
      var time_left = Math.round(kontakt.getTime() - now.getTime()) / 1000;

      var days_left = Math.floor(time_left / 86400);
      time_left -= days_left * 86400;

      var hours_left = Math.floor(time_left / 3600);
      time_left -= hours_left * 3600;

      var minutes_left = Math.floor(time_left / 60);
      time_left -= minutes_left * 60;

      document.getElementById(elementId).innerHTML = days_left + ' gün<br />' + hours_left + ' saat<br />' + minutes_left + ' dakika<br />' + Math.floor(time_left) + ' saniye kaldı';
    }
    else if (kontakt_end > now)
    {
      document.getElementById(elementId).innerHTML = 'KONTAKT 3<br />başladı!';
    }
    else
    {
      document.getElementById(elementId).innerHTML = 'KONTAKT 3<br />sona erdi.';
    }
  }, 1000);
}
