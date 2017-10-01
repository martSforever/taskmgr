import {Component, ReflectiveInjector, Inject} from '@angular/core';
import {OverlayContainer} from "@angular/material";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  darkTheme = false;

  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config) {
    console.log(config);
  }

  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }

  /*squareState = 'blue';*/
  /*onClick() {
    this.squareState = this.squareState === 'green' ? 'blue' : 'green';
  }*/

}


/*依赖注入示例*/
class Id {
  id: string;

  static getInstance(idType: string): Id {
    var id = new Id();
    id.id = idType;
    return id;
  }
}

class Address {
  province: string;
  city: string;
  district: string;
  street: string;

  constructor(province, city, district, street) {
    this.province = province;
    this.city = city;
    this.district = district;
    this.street = street;
  }
}

class Person {
  id: Id;
  address: Address;

  constructor(@Inject(Id)id, @Inject(Address)address) {
    this.id = id;
    this.address = address;
  }
}

const injector = ReflectiveInjector.resolveAndCreate([
  Person,
  {
    provide: Address, useFactory: () => {
    /*每次得到同一个对象*/
    /*if (environment.production) {
      return new Address('北京', '北京', '朝阳区', '朝阳街道');
    } else {
      return new Address('西藏', '拉萨', 'xx区', 'xx街道');
    }*/
    /*视频教程中老师说是每次得到一个新的对象，但是实际操作中发现得到的还是同一个对象，有可能是我自己代码有问题*/
    return () => {
      if (environment.production) {
        return new Address('北京', '北京', '朝阳区', '朝阳街道');
      } else {
        return new Address('西藏', '拉萨', 'xx区', 'xx街道');
      }
    }
  }
  },
  {
    provide: Id, useFactory: () => {
    return Id.getInstance('idCard');
  }
  }
]);

/*当在子池中找不到的时候，会到父池中寻找，所以在module中provide的东西，在component中都可以使用*/

const childInjector = injector.resolveAndCreateChild([Person]);
const address1 = injector.get(Address);
const address2 = injector.get(Address);
const address3 = childInjector.get(Address);
console.log(address1 == address2);
console.log(address1 == address3);

const person1 = injector.get(Person);
const person2 = childInjector.get(Person);
console.log(person1 == person2);
