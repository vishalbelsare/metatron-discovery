"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverwriteMapModal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _statusPanel = require("./status-panel");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _localization = require("../../localization");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 12px;\n  min-height: 220px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 600;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./overwrite-map-modal').OverwriteMapModalProps} OverwriteMapModalProps */
var StyledMsg = _styledComponents["default"].div(_templateObject());

var StyledTitle = _styledComponents["default"].span(_templateObject2());

var StyledIcon = _styledComponents["default"].div(_templateObject3());

var StyledOverwriteMapModal = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject4());

var OverwriteMapModalFactory = function OverwriteMapModalFactory() {
  /**
   * @type {React.FunctionComponent<OverwriteMapModalProps>}
   */
  var OverwriteMapModal = function OverwriteMapModal(_ref) {
    var mapSaved = _ref.mapSaved,
        title = _ref.title,
        currentProvider = _ref.currentProvider,
        cloudProviders = _ref.cloudProviders,
        isProviderLoading = _ref.isProviderLoading,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        cleanupExportImage = _ref.cleanupExportImage;
    var provider = cloudProviders.find(function (cp) {
      return cp.name === currentProvider;
    });
    return /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledOverwriteMapModal, {
      className: "overwrite-map-modal"
    }, isProviderLoading ? /*#__PURE__*/_react["default"].createElement(StyledMsg, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.overwriteMap.title'
    })), /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledIcon, null, provider && provider.icon ? /*#__PURE__*/_react["default"].createElement(provider.icon, {
      height: "64px"
    }) : null), /*#__PURE__*/_react["default"].createElement(StyledMsg, {
      className: "overwrite-map-msg"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, title, " "), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.overwriteMap.alreadyExists',
      values: {
        mapSaved: mapSaved
      }
    })))));
  };

  return OverwriteMapModal;
};

var OverwriteMapModal = OverwriteMapModalFactory();
exports.OverwriteMapModal = OverwriteMapModal;
var _default = OverwriteMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1zZyIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFRpdGxlIiwic3BhbiIsIlN0eWxlZEljb24iLCJTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCIsIkNlbnRlclZlcnRpY2FsRmxleGJveCIsIk92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSIsIk92ZXJ3cml0ZU1hcE1vZGFsIiwibWFwU2F2ZWQiLCJ0aXRsZSIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsImNsZWFudXBFeHBvcnRJbWFnZSIsInByb3ZpZGVyIiwiZmluZCIsImNwIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQWY7O0FBS0EsSUFBTUMsV0FBVyxHQUFHRiw2QkFBT0csSUFBVixvQkFBakI7O0FBS0EsSUFBTUMsVUFBVSxHQUFHSiw2QkFBT0MsR0FBVixvQkFBaEI7O0FBSUEsSUFBTUksdUJBQXVCLEdBQUcsa0NBQU9DLHdDQUFQLENBQUgsb0JBQTdCOztBQUtBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQzs7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQVFwQjtBQUFBLFFBUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLFFBTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLFFBTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLFFBSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLFFBSEpDLGlCQUdJLFFBSEpBLGlCQUdJO0FBQUEsUUFGSkMsb0JBRUksUUFGSkEsb0JBRUk7QUFBQSxRQURKQyxrQkFDSSxRQURKQSxrQkFDSTtBQUNKLFFBQU1DLFFBQVEsR0FBR0osY0FBYyxDQUFDSyxJQUFmLENBQW9CLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNDLElBQUgsS0FBWVIsZUFBaEI7QUFBQSxLQUF0QixDQUFqQjtBQUNBLHdCQUNFLGdDQUFDLCtCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUVBLGVBRG5CO0FBRUUsTUFBQSxjQUFjLEVBQUVDLGNBRmxCO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUUsb0JBSHhCO0FBSUUsTUFBQSxrQkFBa0IsRUFBRUM7QUFKdEIsb0JBTUUsZ0NBQUMsdUJBQUQ7QUFBeUIsTUFBQSxTQUFTLEVBQUM7QUFBbkMsT0FDR0YsaUJBQWlCLGdCQUNoQixnQ0FBQyxTQUFELHFCQUNFLGdDQUFDLFdBQUQscUJBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsNEJBQUQ7QUFBaUIsTUFBQSxJQUFJLEVBQUVHLFFBQVEsSUFBSUEsUUFBUSxDQUFDSTtBQUE1QyxNQUpGLENBRGdCLGdCQVFoQiwrRUFDRSxnQ0FBQyxVQUFELFFBQ0dKLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxJQUFyQixnQkFBNEIsZ0NBQUMsUUFBRCxDQUFVLElBQVY7QUFBZSxNQUFBLE1BQU0sRUFBQztBQUF0QixNQUE1QixHQUE4RCxJQURqRSxDQURGLGVBSUUsZ0NBQUMsU0FBRDtBQUFXLE1BQUEsU0FBUyxFQUFDO0FBQXJCLG9CQUNFLGdDQUFDLFdBQUQsUUFBY1YsS0FBZCxNQURGLGVBRUUsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUUsa0NBQXRCO0FBQTBELE1BQUEsTUFBTSxFQUFFO0FBQUNELFFBQUFBLFFBQVEsRUFBUkE7QUFBRDtBQUFsRSxNQUZGLENBSkYsQ0FUSixDQU5GLENBREY7QUE2QkQsR0F2Q0Q7O0FBd0NBLFNBQU9ELGlCQUFQO0FBQ0QsQ0E3Q0Q7O0FBK0NPLElBQU1BLGlCQUFpQixHQUFHRCx3QkFBd0IsRUFBbEQ7O2VBQ1FBLHdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDZW50ZXJWZXJ0aWNhbEZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VXBsb2FkQW5pbWF0aW9ufSBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5pbXBvcnQgSW1hZ2VNb2RhbENvbnRhaW5lciBmcm9tICcuL2ltYWdlLW1vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL292ZXJ3cml0ZS1tYXAtbW9kYWwnKS5PdmVyd3JpdGVNYXBNb2RhbFByb3BzfSBPdmVyd3JpdGVNYXBNb2RhbFByb3BzICovXG5cbmNvbnN0IFN0eWxlZE1zZyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyNHB4O1xuYDtcblxuY29uc3QgU3R5bGVkT3ZlcndyaXRlTWFwTW9kYWwgPSBzdHlsZWQoQ2VudGVyVmVydGljYWxGbGV4Ym94KWBcbiAgcGFkZGluZzogMjRweCAxMnB4O1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbmA7XG5cbmNvbnN0IE92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSA9ICgpID0+IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxPdmVyd3JpdGVNYXBNb2RhbFByb3BzPn1cbiAgICovXG4gIGNvbnN0IE92ZXJ3cml0ZU1hcE1vZGFsID0gKHtcbiAgICBtYXBTYXZlZCxcbiAgICB0aXRsZSxcbiAgICBjdXJyZW50UHJvdmlkZXIsXG4gICAgY2xvdWRQcm92aWRlcnMsXG4gICAgaXNQcm92aWRlckxvYWRpbmcsXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmcsXG4gICAgY2xlYW51cEV4cG9ydEltYWdlXG4gIH0pID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IGNsb3VkUHJvdmlkZXJzLmZpbmQoY3AgPT4gY3AubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cbiAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxuICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e2NsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZE92ZXJ3cml0ZU1hcE1vZGFsIGNsYXNzTmFtZT1cIm92ZXJ3cml0ZS1tYXAtbW9kYWxcIj5cbiAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgPyAoXG4gICAgICAgICAgICA8U3R5bGVkTXNnPlxuICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5vdmVyd3JpdGVNYXAudGl0bGUnfSAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgICA8VXBsb2FkQW5pbWF0aW9uIGljb249e3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb259IC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1zZz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFN0eWxlZEljb24+XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb24gPyA8cHJvdmlkZXIuaWNvbiBoZWlnaHQ9XCI2NHB4XCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgIDxTdHlsZWRNc2cgY2xhc3NOYW1lPVwib3ZlcndyaXRlLW1hcC1tc2dcIj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+e3RpdGxlfSA8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwub3ZlcndyaXRlTWFwLmFscmVhZHlFeGlzdHMnfSB2YWx1ZXM9e3ttYXBTYXZlZH19IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTXNnPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdHlsZWRPdmVyd3JpdGVNYXBNb2RhbD5cbiAgICAgIDwvSW1hZ2VNb2RhbENvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuICByZXR1cm4gT3ZlcndyaXRlTWFwTW9kYWw7XG59O1xuXG5leHBvcnQgY29uc3QgT3ZlcndyaXRlTWFwTW9kYWwgPSBPdmVyd3JpdGVNYXBNb2RhbEZhY3RvcnkoKTtcbmV4cG9ydCBkZWZhdWx0IE92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeTtcbiJdfQ==