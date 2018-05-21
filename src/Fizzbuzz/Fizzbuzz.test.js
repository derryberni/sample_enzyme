import React from 'react';
import { shallow, mount, render,configure } from 'enzyme';
import Fizzbuzz from './Fizzbuzz';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Check Logik', () => {
it('inputan 3', () => {
   expect(render(<Fizzbuzz nilai="3"/>).text()).toEqual('Derry');
});

it('inputan 5', ()=> {
  expect(render(<Fizzbuzz nilai="5"/>).text()).toEqual('Berni');
});

it('inputan 15',  ()=>{
 expect(render(<Fizzbuzz nilai="15"/>).text()).toEqual('Derry Berni Cahyady');
});
});


it('compontent diload didalam class tsb', ()=>{
 expect(shallow(<Fizzbuzz nilai="15"/>).is('.nilai_disini')).toBe(true);
});

it('check class ada brp', ()=>{
 expect(mount(<Fizzbuzz nilai="15"/>).find('.content').length).toBe(1);
});

