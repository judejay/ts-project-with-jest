export const convertToRoman =(num : number, result = "" ): string  => {

    ///object with map of values
    const mapOfValues ={
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    
    
    for (const field in mapOfValues ) {
        if (num >= mapOfValues[field as keyof typeof mapOfValues]  ) {
            if(num !==0) {
                return convertToRoman(num -mapOfValues[field as keyof typeof mapOfValues], result + field);
            }
        }
    }
    return result;
    }
    
