const expect = chai.expect;

let testValue = 9;

describe('Week6_Functions', () => {
    describe('#getCardInfo', () => {
        it(`Card Value should equal testValue = ${testValue}`, () => {
            const testCard = new Card("10 of Diamonds", 9);
            expect(testCard.value).to.be.equal(testValue);
        });

        it('Test will pass if Card has a property value', () => {
            const testCard2 = new Card("Hearts", 5);
            expect(testCard2).has.property('value');
            expect(testCard2.value).to.be.equal(5);
        })
    })
})