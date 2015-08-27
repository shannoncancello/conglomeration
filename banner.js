<script type="text/javascript">
    var images = new Array('photos/avengers.jpg', 'photos/doctor.jpg', 'photos/tmng.jpg', 'photos/trek.jpg');
    var l = images.length;
    var random_no = Math.floor(l*Math.random());
    document.getElementById("banner").src = images[random_no];
  </script>