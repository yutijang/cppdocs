  document.addEventListener("DOMContentLoaded", function() {
    const anchor = window.location.hash;
    const anchorMap = {
      "#containers": "/cppdocs/docs/containers/#containers",
      "#array": "/cppdocs/docs/array/#array",
      "#vector": "/cppdocs/docs/vector/#vector"
    };

    if (anchor) {
      const targetUrl = anchorMap[anchor];
      if (targetUrl) {
        window.location.href = targetUrl;
      } else {
        window.location.href = "/cppdocs/404/";
      }
    }
  });
