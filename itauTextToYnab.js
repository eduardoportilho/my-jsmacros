// Converts the text pasted from an Itaú table into a YNAB compatible CSV
return 'Date,Payee,Category,Memo,Outflow,Inflow\n' + 
  documentContent
    .replace(/\./g, '∙')                        // . -> bullet 
    .replace(/(\d),(\d)/g, '$1.$2')             // 0,1 -> 0.1
    .replace(/(\d\d\/\d\d\/\d\d\d\d);/g, '$1,') // 10/06/2019; -> 10/06/2019;
    .replace(/;/g, ',,,,')                      // Inflow na coluna certa