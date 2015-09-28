var __path__ = '../../client/components/widgets/internet.jsx'
jest.dontMock(__path__)

describe('Internet', function(){
  it('has a class of widget internet', function() {
    var React = require('react/addons'),
        Internet = require(__path__),
        TestUtils = React.addons.TestUtils;

    var weather_widget = TestUtils.renderIntoDocument(<Internet/>);

    var widget = TestUtils.findRenderedDOMComponentWithClass(weather_widget,
                                                             'widget internet');

    expect(React.findDOMNode(widget).className).toEqual('widget internet')
  });
});
