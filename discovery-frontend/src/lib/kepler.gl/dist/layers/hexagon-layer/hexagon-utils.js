"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexagonToPolygonGeo = hexagonToPolygonGeo;

var _core = require("@deck.gl/core");

var _console = _interopRequireDefault(require("global/console"));

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
function hexagonToPolygonGeo(_ref, properties, radius, mapState) {
  var object = _ref.object;
  var viewport = new _core.WebMercatorViewport(mapState);

  if (!Array.isArray(object.position)) {
    return null;
  }

  var screenCenter = viewport.projectFlat(object.position);

  var _viewport$getDistance = viewport.getDistanceScales(object.position),
      unitsPerMeter = _viewport$getDistance.unitsPerMeter;

  if (!Array.isArray(unitsPerMeter)) {
    _console["default"].warn("unitsPerMeter is undefined");

    return null;
  }

  var pixRadius = radius * unitsPerMeter[0];
  var coordinates = [];

  for (var i = 0; i < 6; i++) {
    var vertex = hex_corner(screenCenter, pixRadius, i);
    coordinates.push(viewport.unprojectFlat(vertex));
  }

  coordinates.push(coordinates[0]);
  return {
    geometry: {
      coordinates: coordinates,
      type: 'LineString'
    },
    properties: properties
  };
}

function hex_corner(center, radius, i) {
  var angle_deg = 60 * i + 30;
  var angle_rad = Math.PI / 180 * angle_deg;
  return [center[0] + radius * Math.cos(angle_rad), center[1] + radius * Math.sin(angle_rad)];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLXV0aWxzLmpzIl0sIm5hbWVzIjpbImhleGFnb25Ub1BvbHlnb25HZW8iLCJwcm9wZXJ0aWVzIiwicmFkaXVzIiwibWFwU3RhdGUiLCJvYmplY3QiLCJ2aWV3cG9ydCIsIldlYk1lcmNhdG9yVmlld3BvcnQiLCJBcnJheSIsImlzQXJyYXkiLCJwb3NpdGlvbiIsInNjcmVlbkNlbnRlciIsInByb2plY3RGbGF0IiwiZ2V0RGlzdGFuY2VTY2FsZXMiLCJ1bml0c1Blck1ldGVyIiwiQ29uc29sZSIsIndhcm4iLCJwaXhSYWRpdXMiLCJjb29yZGluYXRlcyIsImkiLCJ2ZXJ0ZXgiLCJoZXhfY29ybmVyIiwicHVzaCIsInVucHJvamVjdEZsYXQiLCJnZW9tZXRyeSIsInR5cGUiLCJjZW50ZXIiLCJhbmdsZV9kZWciLCJhbmdsZV9yYWQiLCJNYXRoIiwiUEkiLCJjb3MiLCJzaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxTQUFTQSxtQkFBVCxPQUF1Q0MsVUFBdkMsRUFBbURDLE1BQW5ELEVBQTJEQyxRQUEzRCxFQUFxRTtBQUFBLE1BQXZDQyxNQUF1QyxRQUF2Q0EsTUFBdUM7QUFDMUUsTUFBTUMsUUFBUSxHQUFHLElBQUlDLHlCQUFKLENBQXdCSCxRQUF4QixDQUFqQjs7QUFDQSxNQUFJLENBQUNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixNQUFNLENBQUNLLFFBQXJCLENBQUwsRUFBcUM7QUFDbkMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNNLFdBQVQsQ0FBcUJQLE1BQU0sQ0FBQ0ssUUFBNUIsQ0FBckI7O0FBTjBFLDhCQU9sREosUUFBUSxDQUFDTyxpQkFBVCxDQUEyQlIsTUFBTSxDQUFDSyxRQUFsQyxDQVBrRDtBQUFBLE1BT25FSSxhQVBtRSx5QkFPbkVBLGFBUG1FOztBQVMxRSxNQUFJLENBQUNOLEtBQUssQ0FBQ0MsT0FBTixDQUFjSyxhQUFkLENBQUwsRUFBbUM7QUFDakNDLHdCQUFRQyxJQUFSOztBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1DLFNBQVMsR0FBR2QsTUFBTSxHQUFHVyxhQUFhLENBQUMsQ0FBRCxDQUF4QztBQUVBLE1BQU1JLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNWLFlBQUQsRUFBZU0sU0FBZixFQUEwQkUsQ0FBMUIsQ0FBekI7QUFDQUQsSUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QkgsTUFBdkIsQ0FBakI7QUFDRDs7QUFFREYsRUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCSixXQUFXLENBQUMsQ0FBRCxDQUE1QjtBQUVBLFNBQU87QUFDTE0sSUFBQUEsUUFBUSxFQUFFO0FBQ1JOLE1BQUFBLFdBQVcsRUFBWEEsV0FEUTtBQUVSTyxNQUFBQSxJQUFJLEVBQUU7QUFGRSxLQURMO0FBS0x2QixJQUFBQSxVQUFVLEVBQVZBO0FBTEssR0FBUDtBQU9EOztBQUVELFNBQVNtQixVQUFULENBQW9CSyxNQUFwQixFQUE0QnZCLE1BQTVCLEVBQW9DZ0IsQ0FBcEMsRUFBdUM7QUFDckMsTUFBTVEsU0FBUyxHQUFHLEtBQUtSLENBQUwsR0FBUyxFQUEzQjtBQUNBLE1BQU1TLFNBQVMsR0FBSUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQkgsU0FBcEM7QUFFQSxTQUFPLENBQUNELE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWXZCLE1BQU0sR0FBRzBCLElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxTQUFULENBQXRCLEVBQTJDRixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVl2QixNQUFNLEdBQUcwQixJQUFJLENBQUNHLEdBQUwsQ0FBU0osU0FBVCxDQUFoRSxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1dlYk1lcmNhdG9yVmlld3BvcnR9IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnZ2xvYmFsL2NvbnNvbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4YWdvblRvUG9seWdvbkdlbyh7b2JqZWN0fSwgcHJvcGVydGllcywgcmFkaXVzLCBtYXBTdGF0ZSkge1xuICBjb25zdCB2aWV3cG9ydCA9IG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KG1hcFN0YXRlKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5wb3NpdGlvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNjcmVlbkNlbnRlciA9IHZpZXdwb3J0LnByb2plY3RGbGF0KG9iamVjdC5wb3NpdGlvbik7XG4gIGNvbnN0IHt1bml0c1Blck1ldGVyfSA9IHZpZXdwb3J0LmdldERpc3RhbmNlU2NhbGVzKG9iamVjdC5wb3NpdGlvbik7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHVuaXRzUGVyTWV0ZXIpKSB7XG4gICAgQ29uc29sZS53YXJuKGB1bml0c1Blck1ldGVyIGlzIHVuZGVmaW5lZGApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGl4UmFkaXVzID0gcmFkaXVzICogdW5pdHNQZXJNZXRlclswXTtcblxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gaGV4X2Nvcm5lcihzY3JlZW5DZW50ZXIsIHBpeFJhZGl1cywgaSk7XG4gICAgY29vcmRpbmF0ZXMucHVzaCh2aWV3cG9ydC51bnByb2plY3RGbGF0KHZlcnRleCkpO1xuICB9XG5cbiAgY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1swXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZW9tZXRyeToge1xuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICB0eXBlOiAnTGluZVN0cmluZydcbiAgICB9LFxuICAgIHByb3BlcnRpZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGV4X2Nvcm5lcihjZW50ZXIsIHJhZGl1cywgaSkge1xuICBjb25zdCBhbmdsZV9kZWcgPSA2MCAqIGkgKyAzMDtcbiAgY29uc3QgYW5nbGVfcmFkID0gKE1hdGguUEkgLyAxODApICogYW5nbGVfZGVnO1xuXG4gIHJldHVybiBbY2VudGVyWzBdICsgcmFkaXVzICogTWF0aC5jb3MoYW5nbGVfcmFkKSwgY2VudGVyWzFdICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGVfcmFkKV07XG59XG4iXX0=