// Converts the text pasted from an Itaú table into a YNAB compatible CSV
return 'Date,Payee,Category,Memo,Outflow,Inflow\n' + 
  documentContent
    .replace(/^.*SDO CTA\/APL AUTOMATICAS.*\n?/gm, '')
    .replace(/\./g, '')
    .replace(/,/g, '.')
    .replace(/(\d\d\/\d\d)/g, '$1/2019,')
    .replace(/(-?\d+\.\d\d)/g, ',,,,$1')
    .replace(/(\d+\.\d\d)\s-/g, '-$1')
    .replace(/2018,\s+D\s+/g, '2018,')
    .replace(/\s+$/gm, '')
    .replace(/\s{2,}/g, '')