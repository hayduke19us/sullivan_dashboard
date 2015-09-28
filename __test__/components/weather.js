var __path__ = '../../client/components/widgets/weather.jsx'
jest.dontMock(__path__)

describe('Weather', function(){
  it('has a class of widget weather', function() {

    var React = require('react/addons'),
        Weather = require(__path__),
        TestUtils = React.addons.TestUtils;

    var weather_widget = TestUtils.renderIntoDocument(<Weather/>);

    var widget = TestUtils.findRenderedDOMComponentWithClass(weather_widget, 
                                                             'widget weather');

    expect(React.findDOMNode(widget).className).toEqual('widget weather')
  });
});
