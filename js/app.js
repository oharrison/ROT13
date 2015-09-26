(function() {
    
    var app = {
        alphabets : [
            "A", "B", "C",
            "D", "E", "F", 
            "G", "H", "I",
            "J", "K", "L",
            "M", "N", "O",
            "P", "Q", "R", 
            "S", "T", "U", 
            "V", "W", "X", 
            "Y", "Z"
        ],
        cacheDOM : function cacheDOM() {
            var elemTextArea = document.getElementById("text-area");
            var elemRotItButton = document.getElementById("rotit");
            
            return {
                elemTextArea : elemTextArea,
                elemRotItButton : elemRotItButton
            }
        },
        init : function() {
            this.activeDOM = this.cacheDOM();
            this.activeDOM.elemRotItButton.addEventListener("click", this.rotit.bind(this));
        },
        rotit : function() {
            var self = this; // store 'this' in self so that it could be accessed from within the scope of the map function
            var plainText = self.activeDOM.elemTextArea.value;
            var rotXValue = 13;
            
            var cipherText = plainText.split("")
                .map(function(char) {
                    var index = self.alphabets.indexOf(char.toUpperCase());
                    if (index != -1) {
                        var rotPosition = index + rotXValue;
                        if (rotPosition <= self.alphabets.length - 1) {
                            if (char === char.toUpperCase()) {
                                return self.alphabets[rotPosition];
                            } else {
                                return self.alphabets[rotPosition].toLowerCase();
                            }
                            
                        } else {
                            if (char == char.toUpperCase())
                            {
                                return self.alphabets[rotPosition % self.alphabets.length];
                            } else {
                                return self.alphabets[rotPosition % self.alphabets.length].toLowerCase();
                            }  
                        }
                    } else {
                        return char;
                    }
                }).join("");
            self.render(cipherText);
        },
        render : function(cipherText) {
            this.activeDOM.elemTextArea.value = cipherText;
        }
    }
    
    app.init();
    
})();