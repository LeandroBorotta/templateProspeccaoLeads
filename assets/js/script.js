function toggleChat() {
    var chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
  }

  function sendMessage() {
    var input = document.getElementById('messageInput');
    var message = input.value.trim();
    if (message) {
      var chatMessages = document.getElementById('chatMessages');
      var messageElement = document.createElement('div');
      messageElement.className = 'chat-message user';
      messageElement.textContent = 'You: ' + message;
      chatMessages.appendChild(messageElement);
      input.value = '';

      // Simulate a response
      setTimeout(function () {
        var responseElement = document.createElement('div');
        responseElement.className = 'chat-message support';
        responseElement.textContent = 'Support: Thanks for your message. We\'ll get back to you shortly.';
        chatMessages.appendChild(responseElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }
  }