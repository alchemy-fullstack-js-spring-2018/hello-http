const seaFacts = [

    {
        seaFact: 'Shark skin is covered in millions of tiny little teeth, called dermal denticles.'
    }, 
    {
        seaFact: 'Some hermit crabs in the Sea of Cortez use living corals rather than the recycled shells of other creatures for shelter.'
    }, 
    {
        seaFact: 'The colossal squid has a doughnut-shaped brain, through which it passes its food on the way to the stomach. The brain is able to absorb nutrients directly.'
    }, 
    {
        seaFact: 'Giant tubeworms that inhabit deep sea hydrothermal vents have a symbiotic relationship with chemosynthetic bacteria in their guts. These bacteria oxidize hydrogen sulfide and provide almost all of the nutrients the tubeworms need for growth.'
    },
    
];

const seaFactGrab = () => {
    return seaFacts[Math.floor(Math.random() * seaFacts.length)];
};

module.exports = seaFactGrab;