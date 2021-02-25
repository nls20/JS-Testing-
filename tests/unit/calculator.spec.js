import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('can add 1 to 4 to total 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('can subtract 4 from 7 to total 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can multiply 3 by 5 to total 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('can divide 21 by 7 to total 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('it should concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('5');
    wrapper.vm.numberClick('8');
    wrapper.vm.numberClick('2')
    expect(wrapper.vm.runningTotal).to.equal(582)
  })

  it('should chain multiple objects together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('9');
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('3')
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

})
