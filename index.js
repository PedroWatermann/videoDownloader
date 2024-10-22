const videoUrl = document.getElementById('linkVideo');

function mostrarVideo() {
    let link = videoUrl.value;
    let videoFrame = document.getElementById("frame");
    
    if (link.includes("youtube.com")) {
        const videoId = link.split('v=')[1]?.split('&')[0];
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        videoUrl.value = "";
    } else if (link.includes("vimeo.com")) {
        const videoId = link.split('/').pop();
        videoFrame.src = `https://player.vimeo.com/video/${videoId}`;
        videoUrl.value = "";
    } else {
        videoFrame.src = "";
        videoUrl.value = "";
        videoUrl.focus();
        alert("Digite um link válido!");
    }
}