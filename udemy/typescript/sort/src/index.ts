// importing classes
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// running the methods and logging the result - numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
numbersCollection.print();

// running the methods and logging the result - string
const charactersCollection = new CharactersCollection('BaXyP');
charactersCollection.sort();
charactersCollection.print();

// running the methods and logging the result - numbers
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
