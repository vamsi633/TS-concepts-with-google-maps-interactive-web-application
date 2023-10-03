import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPharse = faker.company.catchPhrase();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `
        <div>
            <h3>User Name is : ${this.companyName}</h3>
            <h3>Catchpharse is :${this.catchPharse}</h3>
        </div>
    `;
  }
}
