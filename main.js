// Navigation menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Toggle function for displaying/hiding links on smaller screens
  function toggleNavbar() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive"; // Add the "responsive" class to show links
    } else {
      x.className = "navbar"; // Remove the "responsive" class to hide links
    }
  }
  
  function toggleActive(el) {
    var currentActive = document.querySelector('.navbar .active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    el.classList.add('active');
  }
  
  // Sentence 
  const jobTitles = ["Student", "Designer", "Developer", "Writer", "Artist", "Explorer"];
      let index = 0;
   function changeJobTitle() {
        const jobTitleElement = document.getElementById('dynamicJob');
        jobTitleElement.innerHTML = jobTitles[index];
        index = (index + 1) % jobTitles.length;
      }
      setInterval(changeJobTitle, 400);
      // i
      function toggleInfo() {
        var infoContent123 = document.getElementById('infoContent123');
        infoContent123.style.display = (infoContent123.style.display === 'block') ? 'none' : 'block';
      }
  // Introduction
  function showIntroduction() {
    document.getElementById('initial-image').style.display = 'none';
    document.getElementById('my-image').style.display = 'block';
    document.getElementById('introduction').style.display = 'block';
    animateText();
  }
  function animateText() {
    var text = document.getElementById('intro-text').innerHTML;
    document.getElementById('intro-text').innerHTML = '';
    var i = 0;
    var speed = 30;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById('intro-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
      else {
        document.getElementById('resume-button').style.display = 'inline-block';
      }
    }
  
    typeWriter();
  }
  
  function downloadResume() {
    var resumeUrl = '/GATE2021_QP_CS-1.pdf';
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
  }
  
  // Certificates
  const slider=document.getElementById("slider");
  let slideIndex=0;
  function nextSlide(){
    slideIndex=(slideIndex+1)%slider.children.length;
    updateSlider();
  }
  function updateSlider(){
    const translateValue= -slideIndex*100+'%';
    slider.style.transition='transform 0.5s ease-out';
    slider.style.transform=`translate(${translateValue})`;
    if(slideIndex===slider.children.length-1){
      setTimeout(()=> {
        slideIndex=0;
        slider.style.transition='transform 0.5s ease-in-out';
        updateSlider();
      },500);
    }
  }
  setInterval(nextSlide,2000);
  
  // Invite
  document.getElementById("shareButton").onclick=function(){
    if(navigator.share){
      navigator.share({
         title:"Portfolio",
         text:"Hello, I am Dileep. We are here to provide the best and free web development courses and we are always here to add the respective documents to get downloaded.Please Support Us.Thanks in advance.",
         url:"https://dileepreddy11.github.io/dileepreddy.com/"
      })
      .then(()=> console.log("Shared Successfully"))
      .catch((error)=>console.error("Error Sharing:", error));
    }else{
      alert("Sharing not supported on this device.");
    }
    };
    
  
   function showQR(){
    var qrDiv= document.getElementById('qrCode');
    qrDiv.style.display='block';
   }
   function hideQR(){
    var qrDiv= document.getElementById('qrCode');
    qrDiv.style.display='none';
   }
  // Donate
  function openUPIApp(app, vpa, amount, event){
    event.preventDefault();
    var upiLink='upi://' + vpa + '?am=' + amount;
    window.location.href= upiLink;
  }
  
  function copyToClipboard(upiId){
     var tempInput= document.createElement('input');
     tempInput.value=upiId;
     document.body.appendChild(tempInput);
     tempInpu.select();
     document.execCommand('copy');
     document.body.removeChild(tempInput);
     alert('UPI ID copied to clipboard. You can now paste it in your UPI payment app to begin your payment with secure. thanks from Dileep team.')
  }
  // Services
  function downloadFile(){
    var downloadLink=document.getElementById('downloadLink');
    downloadLink.style.display='block';
    downloadLink.click();
    downloadLink.style.display='none';
  }