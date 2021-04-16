let man = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
}

man.contacts.phone = '+37312345678'; 
console.log(man);

delete man.address;
console.log(man);