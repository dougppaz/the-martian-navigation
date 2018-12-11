/* eslint-env mocha */
const { expect } = require('chai');
const { Probe } = require('./models');

describe('class Probe', () => {
  describe('simple instance', () => {
    let instance;

    beforeEach(() => {
      instance = new Probe();
    });

    it('initial direction is rigth', () => {
      expect(instance.direction).to.equal(Probe.RIGTH);
    });

    it('initial position is (0, 0)', () => {
      expect(instance.x).to.equal(0);
      expect(instance.y).to.equal(0);
    });

    it('default matrix size is 5x5', () => {
      expect(instance.matrixSize[0]).to.equal(5);
      expect(instance.matrixSize[1]).to.equal(5);
    });
  });

  describe('instance with matrix size 4x3', () => {
    let instance;

    beforeEach(() => {
      instance = new Probe({
        matrixSize: [4, 3],
      });
    });

    it('matrix size is 4x3', () => {
      expect(instance.matrixSize[0]).to.equal(4);
      expect(instance.matrixSize[1]).to.equal(3);
    });
  });

  describe('static rotate()', () => {
    describe('direction is left', () => {
      let fn;

      beforeEach(() => {
        fn = value => Probe.rotate(Probe.LEFT, value);
      });

      describe('turn left', () => {
        it('returns down', () => {
          expect(fn(Probe.TURN_LEFT)).to.equal(Probe.DOWN);
        });
      });

      describe('turn rigth', () => {
        it('returns up', () => {
          expect(fn(Probe.TURN_RIGTH)).to.equal(Probe.UP);
        });
      });
    });

    describe('direction is rigth', () => {
      let fn;

      beforeEach(() => {
        fn = value => Probe.rotate(Probe.RIGTH, value);
      });

      describe('turn left', () => {
        it('returns up', () => {
          expect(fn(Probe.TURN_LEFT)).to.equal(Probe.UP);
        });
      });

      describe('turn rigth', () => {
        it('returns down', () => {
          expect(fn(Probe.TURN_RIGTH)).to.equal(Probe.DOWN);
        });
      });
    });

    describe('direction is up', () => {
      let fn;

      beforeEach(() => {
        fn = value => Probe.rotate(Probe.UP, value);
      });

      describe('turn left', () => {
        it('returns left', () => {
          expect(fn(Probe.TURN_LEFT)).to.equal(Probe.LEFT);
        });
      });

      describe('turn rigth', () => {
        it('returns rigth', () => {
          expect(fn(Probe.TURN_RIGTH)).to.equal(Probe.RIGTH);
        });
      });
    });

    describe('direction is down', () => {
      let fn;

      beforeEach(() => {
        fn = value => Probe.rotate(Probe.DOWN, value);
      });

      describe('turn left', () => {
        it('returns rigth', () => {
          expect(fn(Probe.TURN_LEFT)).to.equal(Probe.RIGTH);
        });
      });

      describe('turn rigth', () => {
        it('returns left', () => {
          expect(fn(Probe.TURN_RIGTH)).to.equal(Probe.LEFT);
        });
      });
    });
  });
});
