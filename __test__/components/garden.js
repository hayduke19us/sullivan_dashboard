var __path__ = '../../client/components/widgets/garden.jsx'
jest.dontMock(__path__)

describe('Weather', function(){
  it('has a class of widget garden', function() {
    var React = require('react/addons')
    var Garden = require(__path__)
    var TestUtils = React.addons.TestUtils;

    var garden_widget = TestUtils.renderIntoDocument(<Garden/>);

    var widget = TestUtils.findRenderedDOMComponentWithClass(garden_widget, 'widget garden');
    expect(React.findDOMNode(widget).className).toEqual('widget garden')
  });
});
