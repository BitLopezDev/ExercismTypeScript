export function toRna4(dna : String ='ACGT') {
    const mapper = new Map<String, String>([
      ["G", "C"],
      ["C", "G"],
      ["T", "A"],
      ["A", "U"],
    ]);
  
       [...dna].forEach(char => {
          if(!mapper.has(char)){
              throw new Error("Invalid input DNA.");
          }
      });
      var mapped = [...dna].map(char => mapper.get(char)).join('');
  
  
  return mapped; 
  }
  export function toRna(dna: string = "ACGT") {
    var rna: string = "";
    for (let i = 0; i < dna.length; i++) {
      //rna += transform();
      rna += transform(dna.substring(i, i + 1));
    }
    function transform(j: string) {
      if (j.length > 0 && j.length < 2) {
        switch (j.toLowerCase()) {
          case "g":
            return "C";
          case "c":
            return "G";
          case "t":
            return "A";
          case "a":
            return "U";
  
          default:
            throw new Error("Invalid input DNA.");
        }
      }
    }
    return rna;
  }

  const mapperRNA2 = new Map<string, string>([
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
])
export function toRna2(strand: string) {
    let transcribedRNA2: string = ''
    const chars = [...strand].forEach((char, i) => {
        if (!mapperRNA2.has(char)) throw new Error('Invalid input DNA.')
        transcribedRNA2 += mapperRNA2.get(char)
    });
    return transcribedRNA2
}

// En función única:
export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }
export function toRna3(DNA: string): string {
  return [...DNA].reduce((output, letter) => {
    if (!(Object.keys(nuc_map).includes(letter))) {throw Error('Invalid input DNA.');}
    output += nuc_map[letter]; return output
  }, '');
}