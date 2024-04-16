class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timerElement = container.querySelector(".status__timer");

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const currentSymbolS = document.addEventListener("keydown", (e) => {
      if(this.currentSymbol.textContent === e.key) {
        this.success();
      } else {
        this.fail();
      }
    });

    /* Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     -------------------
     Получить DOM-элемент текущего символа, который необходимо ввести (свойство this.currentSymbol)
Получить символ, который был введён с клавиатуры.
Если два символа одинаковые, вызывать метод this.success
Если два символа отличаются, вызвать метод this.fail
При сравнении регистр не должен быть важен (а или А)
Обратите внимание на то, что именно записывается в this.currentSymbol. Вспомните в чем различия между keydown и keyup
     */
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.renderTimer(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  
}

//interval
  renderTimer(word) {
	 this.timerElement.textContent = word.length; 
	 let time = word.length;
	 clearInterval(this.countDown);

	 this.countDown = setInterval(() =>  {
	 	if (time > 0) {
    		time -=1;
   			this.timerElement.textContent = time;    
 	 	}   else {
    		this.timerElement.textContent = time;   
    		this.fail();
	 		}
		},1000);
	} 
}
//interval

new Game(document.getElementById('game'));
