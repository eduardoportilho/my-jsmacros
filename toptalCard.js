// Converts the text pasted from an Toptal Card table into a YNAB compatible CSV
return 'Date,Payee,Category,Memo,Outflow,Inflow\n' + 
  documentContent
    .replace(/\t\n/gm, ',,,')
    .replace(/,,,\$([\d\.\,]+)\s*USD/gm, ',$$$1 USD,,$1,')
    .replace(/(\w{3})\s(\d{2})\s(\d{4})\s*/g, '$2/$1/$3,')
    .replace(/\/jan\//gi, '/01/')
    .replace(/\/feb\//gi, '/02/')
    .replace(/\/mar\//gi, '/03/')
    .replace(/\/apr\//gi, '/04/')
    .replace(/\/may\//gi, '/05/')
    .replace(/\/jun\//gi, '/06/')
    .replace(/\/jul\//gi, '/07/')
    .replace(/\/aug\//gi, '/08/')
    .replace(/\/sep\//gi, '/09/')
    .replace(/\/act\//gi, '/10/')
    .replace(/\/nov\//gi, '/11/')
    .replace(/\/dec\//gi, '/12/')