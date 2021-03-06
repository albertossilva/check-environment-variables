describe('variableCheckers:BooleanVariableChecker', () => {
  const { expect } = require('chai');
  const BooleanVariableChecker = require('../BooleanVariableChecker');

  it('returns an error when variableValue is not an boolean', () => {
    const { error } = BooleanVariableChecker('an invalid boolean', { variableName: 'A_VARIABLE' });

    expect(error).to.equal('The value: "an invalid boolean" is not a valid boolean.');
  });

  it('returns error null when variableValue is an true', () => {
    const { error } = BooleanVariableChecker('true', { variableName: 'A_VARIABLE' });

    expect(error).to.equal(null);
  });

  it('returns error null when variableValue is an false', () => {
    const { error } = BooleanVariableChecker('false', { variableName: 'A_VARIABLE' });

    expect(error).to.equal(null);
  });

  it('returns error null when variableValue is null and it is not required', () => {
    const { error } = BooleanVariableChecker(null, { variableName: 'A_VARIABLE' });

    expect(error).to.equal(null);
  });

  it('returns an error when variableValue is required, but it is not sent', () => {
    const { error } = BooleanVariableChecker(null, { required: true, variableName: 'A_VARIABLE' });

    expect(error).to.equal('The variable is not defined on the environment.');
  });

  it('returns an error when variableValue is not an boolean', () => {
    const { error } = BooleanVariableChecker('an invalid boolean', { variableName: 'A_VARIABLE' });

    expect(error).to.equal('The value: "an invalid boolean" is not a valid boolean.');
  });
});
