const { events } = require('../backend/api.js');
const eventsData = require('../backend/events.js');

describe('Event Handlers', () => {
    let req, res;
  
    beforeEach(() => {
      req = {};
      res = { json: jest.fn() };
    });
  
    test('should return all events', () => {
      events(req, res);
      expect(res.json).toHaveBeenCalledWith(eventsData);
    });
  });