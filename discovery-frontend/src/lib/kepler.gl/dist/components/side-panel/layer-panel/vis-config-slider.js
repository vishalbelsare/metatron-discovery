"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VisConfigSliderFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _localization = require("../../../localization");

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  property: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  step: _propTypes["default"].number,
  isRanged: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].bool
};
VisConfigSliderFactory.deps = [_rangeSlider["default"]];

function VisConfigSliderFactory(RangeSlider) {
  var VisConfigSlider = function VisConfigSlider(_ref) {
    var config = _ref.layer.config,
        property = _ref.property,
        label = _ref.label,
        range = _ref.range,
        step = _ref.step,
        isRanged = _ref.isRanged,
        disabled = _ref.disabled,
        _onChange2 = _ref.onChange,
        inputTheme = _ref.inputTheme;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, {
      disabled: Boolean(disabled)
    }, label ? /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, typeof label === 'string' ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: label
    }) : typeof label === 'function' ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: label(config)
    }) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "property.".concat(property)
    })) : null, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
      range: range,
      value0: isRanged ? config.visConfig[property][0] : range[0],
      value1: isRanged ? config.visConfig[property][1] : config.visConfig[property],
      step: step,
      isRanged: Boolean(isRanged),
      onChange: function onChange(value) {
        return _onChange2((0, _defineProperty2["default"])({}, property, isRanged ? value : value[1]));
      },
      inputTheme: inputTheme,
      showInput: true
    }));
  };

  VisConfigSlider.propTypes = propTypes;
  return VisConfigSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1zbGlkZXIuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGF5ZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicHJvcGVydHkiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJsYWJlbCIsIm9uZU9mVHlwZSIsImJvb2wiLCJyYW5nZSIsImFycmF5T2YiLCJudW1iZXIiLCJzdGVwIiwiaXNSYW5nZWQiLCJkaXNhYmxlZCIsImlucHV0VGhlbWUiLCJWaXNDb25maWdTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsIlJhbmdlU2xpZGVyIiwiVmlzQ29uZmlnU2xpZGVyIiwiY29uZmlnIiwiQm9vbGVhbiIsInZpc0NvbmZpZyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBRlg7QUFHaEJHLEVBQUFBLFFBQVEsRUFBRUwsc0JBQVVNLElBQVYsQ0FBZUosVUFIVDtBQUloQkssRUFBQUEsS0FBSyxFQUFFUCxzQkFBVVEsU0FBVixDQUFvQixDQUFDUixzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVTLElBQTdCLEVBQW1DVCxzQkFBVU0sSUFBN0MsQ0FBcEIsQ0FKUztBQUtoQkksRUFBQUEsS0FBSyxFQUFFVixzQkFBVVcsT0FBVixDQUFrQlgsc0JBQVVZLE1BQTVCLEVBQW9DVixVQUwzQjtBQU1oQlcsRUFBQUEsSUFBSSxFQUFFYixzQkFBVVksTUFOQTtBQU9oQkUsRUFBQUEsUUFBUSxFQUFFZCxzQkFBVVMsSUFQSjtBQVFoQk0sRUFBQUEsUUFBUSxFQUFFZixzQkFBVVMsSUFSSjtBQVNoQk8sRUFBQUEsVUFBVSxFQUFFaEIsc0JBQVVTO0FBVE4sQ0FBbEI7QUFZQVEsc0JBQXNCLENBQUNDLElBQXZCLEdBQThCLENBQUNDLHVCQUFELENBQTlCOztBQUVlLFNBQVNGLHNCQUFULENBQWdDRyxXQUFoQyxFQUE2QztBQUMxRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsUUFDZEMsTUFEYyxRQUN0QnZCLEtBRHNCLENBQ2R1QixNQURjO0FBQUEsUUFFdEJuQixRQUZzQixRQUV0QkEsUUFGc0I7QUFBQSxRQUd0QkksS0FIc0IsUUFHdEJBLEtBSHNCO0FBQUEsUUFJdEJHLEtBSnNCLFFBSXRCQSxLQUpzQjtBQUFBLFFBS3RCRyxJQUxzQixRQUt0QkEsSUFMc0I7QUFBQSxRQU10QkMsUUFOc0IsUUFNdEJBLFFBTnNCO0FBQUEsUUFPdEJDLFFBUHNCLFFBT3RCQSxRQVBzQjtBQUFBLFFBUXRCVixVQVJzQixRQVF0QkEsUUFSc0I7QUFBQSxRQVN0QlcsVUFUc0IsUUFTdEJBLFVBVHNCO0FBQUEsd0JBV3RCLGdDQUFDLGtDQUFEO0FBQWtCLE1BQUEsUUFBUSxFQUFFTyxPQUFPLENBQUNSLFFBQUQ7QUFBbkMsT0FDR1IsS0FBSyxnQkFDSixnQ0FBQyw0QkFBRCxRQUNHLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsZ0JBQ0MsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVBO0FBQXRCLE1BREQsR0FFRyxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLGdCQUNGLGdDQUFDLDhCQUFEO0FBQWtCLE1BQUEsRUFBRSxFQUFFQSxLQUFLLENBQUNlLE1BQUQ7QUFBM0IsTUFERSxnQkFHRixnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUscUJBQWNuQixRQUFkO0FBQXBCLE1BTkosQ0FESSxHQVVGLElBWE4sZUFZRSxnQ0FBQyxXQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUVPLEtBRFQ7QUFFRSxNQUFBLE1BQU0sRUFBRUksUUFBUSxHQUFHUSxNQUFNLENBQUNFLFNBQVAsQ0FBaUJyQixRQUFqQixFQUEyQixDQUEzQixDQUFILEdBQW1DTyxLQUFLLENBQUMsQ0FBRCxDQUYxRDtBQUdFLE1BQUEsTUFBTSxFQUFFSSxRQUFRLEdBQUdRLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQnJCLFFBQWpCLEVBQTJCLENBQTNCLENBQUgsR0FBbUNtQixNQUFNLENBQUNFLFNBQVAsQ0FBaUJyQixRQUFqQixDQUhyRDtBQUlFLE1BQUEsSUFBSSxFQUFFVSxJQUpSO0FBS0UsTUFBQSxRQUFRLEVBQUVVLE9BQU8sQ0FBQ1QsUUFBRCxDQUxuQjtBQU1FLE1BQUEsUUFBUSxFQUFFLGtCQUFBVyxLQUFLO0FBQUEsZUFBSXBCLFVBQVEsc0NBQUdGLFFBQUgsRUFBY1csUUFBUSxHQUFHVyxLQUFILEdBQVdBLEtBQUssQ0FBQyxDQUFELENBQXRDLEVBQVo7QUFBQSxPQU5qQjtBQU9FLE1BQUEsVUFBVSxFQUFFVCxVQVBkO0FBUUUsTUFBQSxTQUFTO0FBUlgsTUFaRixDQVhzQjtBQUFBLEdBQXhCOztBQW9DQUssRUFBQUEsZUFBZSxDQUFDdkIsU0FBaEIsR0FBNEJBLFNBQTVCO0FBRUEsU0FBT3VCLGVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwcm9wZXJ0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNSYW5nZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0VGhlbWU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5WaXNDb25maWdTbGlkZXJGYWN0b3J5LmRlcHMgPSBbUmFuZ2VTbGlkZXJGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlzQ29uZmlnU2xpZGVyRmFjdG9yeShSYW5nZVNsaWRlcikge1xuICBjb25zdCBWaXNDb25maWdTbGlkZXIgPSAoe1xuICAgIGxheWVyOiB7Y29uZmlnfSxcbiAgICBwcm9wZXJ0eSxcbiAgICBsYWJlbCxcbiAgICByYW5nZSxcbiAgICBzdGVwLFxuICAgIGlzUmFuZ2VkLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlLFxuICAgIGlucHV0VGhlbWVcbiAgfSkgPT4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uIGRpc2FibGVkPXtCb29sZWFuKGRpc2FibGVkKX0+XG4gICAgICB7bGFiZWwgPyAoXG4gICAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICAgIHt0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsfSAvPlxuICAgICAgICAgICkgOiB0eXBlb2YgbGFiZWwgPT09ICdmdW5jdGlvbicgPyAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWwoY29uZmlnKX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2Bwcm9wZXJ0eS4ke3Byb3BlcnR5fWB9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICB2YWx1ZTA9e2lzUmFuZ2VkID8gY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV1bMF0gOiByYW5nZVswXX1cbiAgICAgICAgdmFsdWUxPXtpc1JhbmdlZCA/IGNvbmZpZy52aXNDb25maWdbcHJvcGVydHldWzFdIDogY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19XG4gICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgIGlzUmFuZ2VkPXtCb29sZWFuKGlzUmFuZ2VkKX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiBpc1JhbmdlZCA/IHZhbHVlIDogdmFsdWVbMV19KX1cbiAgICAgICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cbiAgICAgICAgc2hvd0lucHV0XG4gICAgICAvPlxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgKTtcblxuICBWaXNDb25maWdTbGlkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG4gIHJldHVybiBWaXNDb25maWdTbGlkZXI7XG59XG4iXX0=