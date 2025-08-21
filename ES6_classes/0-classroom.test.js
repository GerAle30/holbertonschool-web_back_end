import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  describe('constructor', () => {
    test('should create a ClassRoom instance with maxStudentsSize', () => {
      const maxSize = 25;
      const classroom = new ClassRoom(maxSize);

      expect(classroom).toBeInstanceOf(ClassRoom);
      expect(classroom._maxStudentsSize).toBe(maxSize);
    });

    test('should handle zero maxStudentsSize', () => {
      const classroom = new ClassRoom(0);
      expect(classroom._maxStudentsSize).toBe(0);
    });

    test('should handle negative maxStudentsSize', () => {
      const classroom = new ClassRoom(-5);
      expect(classroom._maxStudentsSize).toBe(-5);
    });

    test('should handle large maxStudentsSize', () => {
      const largeSize = 1000;
      const classroom = new ClassRoom(largeSize);
      expect(classroom._maxStudentsSize).toBe(largeSize);
    });

    test('should handle undefined maxStudentsSize', () => {
      const classroom = new ClassRoom();
      expect(classroom._maxStudentsSize).toBeUndefined();
    });

    test('should handle null maxStudentsSize', () => {
      const classroom = new ClassRoom(null);
      expect(classroom._maxStudentsSize).toBeNull();
    });

    test('should handle string maxStudentsSize', () => {
      const classroom = new ClassRoom('30');
      expect(classroom._maxStudentsSize).toBe('30');
    });
  });

  describe('instance properties', () => {
    test('should have _maxStudentsSize property', () => {
      const classroom = new ClassRoom(20);
      expect(classroom).toHaveProperty('_maxStudentsSize');
    });

    test('should not expose maxStudentsSize without underscore', () => {
      const classroom = new ClassRoom(20);
      expect(classroom.maxStudentsSize).toBeUndefined();
    });
  });

  describe('class behavior', () => {
    test('should be a proper class constructor', () => {
      expect(typeof ClassRoom).toBe('function');
      expect(ClassRoom.prototype.constructor).toBe(ClassRoom);
    });

    test('should create different instances with different values', () => {
      const classroom1 = new ClassRoom(10);
      const classroom2 = new ClassRoom(20);

      expect(classroom1._maxStudentsSize).toBe(10);
      expect(classroom2._maxStudentsSize).toBe(20);
      expect(classroom1).not.toBe(classroom2);
    });

    test('should maintain property independence between instances', () => {
      const classroom1 = new ClassRoom(15);
      const classroom2 = new ClassRoom(25);

      // Modify one instance
      classroom1._maxStudentsSize = 30;

      // Check that the other instance is unaffected
      expect(classroom1._maxStudentsSize).toBe(30);
      expect(classroom2._maxStudentsSize).toBe(25);
    });
  });
});
