// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Units tests for sayHello function
describe('sayHello', function(){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('Should return "Hello, Jane" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('Should return "Hello, Alex" when "Alex" is passed as input', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('Should return "Hello, Pat" when "Pat" is passed as input', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('Should return "Hello, world" when executed', function(){
        expect(sayHello()).toBe("Hello, world");
    })
});