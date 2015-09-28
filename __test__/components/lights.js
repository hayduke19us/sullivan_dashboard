var __path__ = '../../client/components/widgets/lights.jsx'
jest.dontMock(__path__)

describe('Lights', function(){
  it('has a class of widget lg lights', function() {
    var React = require('react/addons'),
        Lights = require(__path__),
        TestUtils = React.addons.TestUtils;

    var lights_widget = TestUtils.renderIntoDocument(<Lights/>);

    var widget = TestUtils.findRenderedDOMComponentWithClass(lights_widget, 'widget lg lights');
    expect(React.findDOMNode(widget).className).toEqual('widget lg lights')
  });
});
