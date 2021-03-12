/**
 * Since XML is very verbose, you are given a way of encoding it where each tag gets mapped to a pre-defined integer value
 * The language/grammar is as follows:
 * 
 * Element   -> Tag attributes END Children END
 * Attribute -> Tag Value
 * END       -> 0
 * Tag       -> some predefined mapping to int
 * Value     -> string value
 * 
 * For example, the following XML might be converted into the compressed string below (assuming a mapping of family -> 1, person -> 2, firstName -> 3, lastName -> 4, state -> 5)
 * 
 * <family lastName='McDowell' state='CA'>
 *      <person firstName='Gayle'> Some message </person>
 * </family>
 * 
 * Becomes:
 *    1 4 McDowell 5 CA 0 2 3 Gayle 0 Some message 0 0
 * 
 * Write code to print the encoded version of an XML element (passed in Element and Attribute Objects) 
 */

function compressXML(xml) {
    let tagsAndAttributes = new Map();
    let currentTagNumber = 1;
    let allItems = [];
    let result = '';
    while(xml.length) {
        let first = xml.indexOf('<');
        let last  = xml.indexOf('>');
        if (first === 0) {
            allItems.push(xml.slice(first, last + 1));
            xml = xml.slice(last + 1)
        } else {
            allItems.push(xml.slice(0, first));
            xml = xml.slice(first)

        }
    }
    while(allItems.length) {
        let current = allItems.shift();
        console.log(current);
        if (current.indexOf('<') == -1 && current.indexOf('>') == -1) {
            // plain text
            result += `${current}`;
        } else if (current.indexOf('/') !== -1) {

            // closing tag
            result += ' 0 ';

        } else {
            // XML tag
            // remove last and first as they are < >
            let tagsOrAtts = current.slice(1, current.length - 1).split(' ');
            for(let tagOrAtt of tagsOrAtts) {
               let valueIndex = tagOrAtt.indexOf('=');
               if (valueIndex === -1) {
                   if(!tagsAndAttributes.get(tagOrAtt)) {
                    tagsAndAttributes.set(tagOrAtt, currentTagNumber)
                     currentTagNumber++
                   }
                   result += ` ${tagsAndAttributes.get(tagOrAtt)} `
               } else {
                   let attributeName = tagOrAtt.slice(0, valueIndex);
                   let attributeValue =  tagOrAtt.slice(valueIndex + 1).replace('"', '').replace('"', ''); // TODO: use regex

                   if(!tagsAndAttributes.get(attributeName)) {
                    tagsAndAttributes.set(attributeName, currentTagNumber)
                     currentTagNumber++
                   }
                   result += ` ${tagsAndAttributes.get(attributeName)} ${attributeValue} `;
               }
            }
            result += '0 '
        }

    }
    console.log(allItems, result)
}
compressXML(`<family lastName="McDowell" state="CA"><person firstName="Gayle"> Some message </person></family>`) // ' 1  2 McDowell  3 CA 0  4  5 Gayle 0  Some message  0  0 '
compressXML(`<family lastName="McDowell" state="CA">
                    <person firstName="Gayle"> Some message </person>
                    <person firstName="Alejandra"> Another message </person> 
                    <person firstName="teresa"> Yet another message </person>
            </family>`) // ' 1  2 McDowell  3 CA 0  4  5 Gayle 0  Some message  0   4  5 Alejandra 0  Another message  0   4  5 teresa 0  Yet another message  0  0 '