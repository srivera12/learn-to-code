const square = (x) => x * x;

console.log(square(2));

const event = {
  name: 'Party',
  guestList: ['Sarah', 'Sally', 'Susie'],
  printGuestList() {
    console.log('guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending the event');
    });
  },
};

event.printGuestList();
