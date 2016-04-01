import React, { Text, TouchableHighlight } from "react-native";
import { shallow } from "enzyme";
import sinon from "sinon";
import AngryButton from "../AngryButton";

describe("<AngryButton/>", () => {
  it("should render", () => {
    const button = shallow(<AngryButton text="bananas" />);
    expect(button.contains(TouchableHighlight)).to.equal(true);
    expect(button.contains(Text)).to.equal(true);
  });

  it("should capitalise text", () => {
    const button = shallow(<AngryButton text="bananas" />);
    expect(button.find(Text).props().children).to.equal("BANANAS");
  });

  it("should handle button presses", () => {
    const onPress = sinon.spy();
    const button = shallow(<AngryButton text="yo" onPress={onPress}/>);
    button.simulate('press');
    expect(onPress.calledOnce).to.equal(true);
  });
});
