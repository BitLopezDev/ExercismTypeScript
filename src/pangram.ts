/**
   * 
   * @param sentence : string
   * @returns boolean
   * we take the letters of the alphabet and compare the sentence with those
   */
export function isPangram1(sentence : string = 'hgf') : boolean{
    var alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ];
    

    [...sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "")].forEach(char => {
        
       
        if (alphabet.indexOf(char) !== -1){
            alphabet.splice(alphabet.indexOf(char), 1);
            console.log(char);
        }
         else if (alphabet.indexOf(char) === -1){
        return false;
         }

        
    });
    //console.log(alphabet);
    if(alphabet.length !== 0) return false;
    
    return true;

}