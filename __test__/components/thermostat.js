var __path__ = '../../client/components/widgets/thermostat.jsx'
jest.dontMock(__path__)

describe('thermostat', function(){
  it('has a class of widget thermostat', function() {
    var React = require('react/addons'),
        Thermostat = require(__path__),
        TestUtils = React.addons.TestUtils;

    var thermostat_widget = TestUtils.renderIntoDocument(<Thermostat/>);

    var widget = TestUtils.findRenderedDOMComponentWithClass(thermostat_widget, 'widget thermostat');
    expect(React.findDOMNode(widget).className).toEqual('widget thermostat')
  });
});
