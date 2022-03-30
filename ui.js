let definition = "";
let Synonym = "";
let audioUrl = "";
class UI {
  constructor() {
    this.newWord = document.getElementById("wordarea");
    this.newSynonym = document.getElementById("synonyms");
    this.playBtn = document.getElementById("audioBtn");
  }
  showWord(data) {
    const check = data;
    const getAudio = check.map((e) => {
      return e.phonetics;
    });
    getAudio.forEach((element) => {
      element.forEach((e) => {
        audioUrl = e.audio;
      });
    });
    const checking = check.map((e) => {
      return e.meanings;
    });
    checking.forEach((e) => {
      e.forEach((e) => {
        e.definitions.forEach((e) => {
          definition += `
                            <div class="w-full text-white mt-5 bg-emerald-500">
                            <div class="container flex items-center justify-between px-1 py-4 mx-auto">
                                <div class="flex">
                                    
                    
                                    <p class="mx-3">${e.definition}</p>
                                </div>
                    
                                
                            </div>
                        </div>
                            
                            
                            `;
          if (e.synonyms == "") {
            Synonym = `
                        <div class="w-full mt-5 text-white bg-blue-500">

                            <div class="container flex items-center justify-between px-1 py-4 mx-auto">
                                <div class="flex">
                                <p class="mx-3">synonyms not found for this word</p>
                                </div>
                            </div>
                        </div>`            

            
            
          } else {
            Synonym += `
                                
                            <div class="w-full mt-5 text-white bg-blue-500">
                                <div class="container flex items-center justify-between px-1 py-4 mx-auto">
                                    <div class="flex">
                                    <p class="mx-3">${e.synonyms}</p>
                                    </div>
                                </div>
                            </div>`
          }
        });
      });
    });
    // console.log(definition);

    this.newWord.innerHTML += definition;
    this.newSynonym.innerHTML += Synonym;
    this.playBtn.addEventListener("click", function (e) {
      const audio = new Audio(audioUrl);
      audio.play();
      e.preventDefault()
    });
  }

  clearData() {
    this.newWord.innerHTML = "";
    this.newSynonym.innerHTML = "";
    definition = "";
    Synonym = "";
    audioUrl = "";
    document.getElementById('word').innerText = ''
  }
}
