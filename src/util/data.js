const buttons = [
    [{type:'clear',text:'Clear'},{type:'clearOne',text:'CE'}],
    [{ type: 'number', text: '1', value: 1 }, { type: 'number', text: '2', value: 2 }, { type: 'number', text: '3', value: 3 }, { type: 'operation', text: '/', value: 'division' }],
    [{ type: 'number', text: '4', value: 4 }, { type: 'number', text: '5', value: 5 }, { type: 'number', text: '6', value: 6 }, { type: 'operation', text: '*', value: 'multiplication' }],
    [{ type: 'number', text: '7', value: 7 }, { type: 'number', text: '8', value: 8 }, { type: 'number', text: '9', value: 9 }, { type: 'operation', text: '-', value: 'substraction' }],
    [{ type: 'number', text: '0', value: 0 }, { type: 'decimal', text: '.', value: 'decimal' }, { type: 'equals', text: '=', value: 'equals' }, { type: 'operation', text: '+', value: 'addition' }]
];
export { buttons }