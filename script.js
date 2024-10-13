document.addEventListener('DOMContentLoaded', function() {
    const copiarEmailBtn = document.getElementById('copiarEmailBtn');
    
    copiarEmailBtn.addEventListener('click', function() {
      const email = document.getElementById('email');
      const textArea = document.createElement('textarea');
      textArea.value = email.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Email copiado al portapapeles!');
    });
  });  