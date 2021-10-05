/// <reference types="@types/google.maps"/>

// importing classes
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// creating user, company, and map
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// creating markers for user and company
customMap.addMarker(user);
customMap.addMarker(company);
