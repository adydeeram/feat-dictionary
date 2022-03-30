class Httprequest{

    async getWord(word){
        const wordRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const dataRes = await wordRes.json();

        return dataRes;
    }


}