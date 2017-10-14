describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should be able to output intersections', function() {
    var set2 = Set();
    
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set2.add('Susan Sarandon');
    set2.add('Danny Glover');
    set2.add('Donald Glover');
    expect(set.intersection(set2)).to.eql(['Susan Sarandon', 'Danny Glover']);
    expect(set.intersection(set2)).to.not.eql(['Susan Sarandon', 'Donald Glover']);
  });

  it('should add values of both numbers and strings', function() {
    set.add('Susan Sarandon');
    set.add(42);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(42)).to.equal(true);
  });

  it('should take value as an object and value as an array', function() {
    set.add([0, 1, 'moose', 'and', 'squirrel']);
    set.add({'villains': ['natasha', 'boris']});
    expect(set.contains([0, 1, 'moose', 'and', 'squirrel'])).to.equal(true);
    expect(set.contains({'villains': ['natasha', 'boris']})).to.equal(true);
    expect(set.contains(['james is feeling light headed'])).to.equal(false);
  });

});
