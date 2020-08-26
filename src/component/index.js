import React, { useContext, useRef, useState, useEffect } from 'react'
import _ from 'lodash';
import cornerstone from 'cornerstone-core'
import cornerstoneTools from 'cornerstone-tools'
import { StyleSheet, Text, View, Button } from 'react-native';
import CornerstoneViewport, { ViewportOverlay } from 'react-cornerstone-viewport';
export default function Viewer() {
  const stateView = {
    // tools: toolsState(callInputModal),
    eventListeners: [
      {
        target: 'element',
        eventName: cornerstoneTools.EVENTS.MEASUREMENT_COMPLETED,
        // handler: (e) => handleAdd(e, state)
      },
      {
        target: 'element',
        eventName: cornerstoneTools.EVENTS.MEASUREMENT_MODIFIED,
        // handler: _.debounce((e) => handleModify(e, state), DEBOUNCE_TIME)
      },
      {
        target: 'cornerstone',
        eventName: cornerstoneTools.EVENTS.MOUSE_DRAG,
        // handler: _.debounce((e) => handleMouseMove(e, state), SHORT_DEBOUNCE_TIME)
      },
      {
        target: 'element',
        eventName: cornerstoneTools.EVENTS.MEASUREMENT_REMOVED,
        // handler: (e) => handleRemove(e, state)
      },
      {
        target: 'cornerstone',
        eventName: cornerstone.EVENTS.NEW_IMAGE,
        // handler: (e) => innitToolData(e, state, callInputModal)
      }
    ],
    elemaentEnable: (event, index) => {
      const cornerstoneElement = event.detail.element
      cornerstoneElement.addEventListener(
        'cornerstoneimagerendered',
        imageRenderedEvent => {
          const viewport = imageRenderedEvent.detail.viewport;
          cornerstone.setViewport(cornerstoneElement, viewport);
        }
      );
    },
    style: {
      width: "100%",
      height: "calc(100vh - 35px)",
      boxSizing: 'border-box',
      paddingTop: '15px'
    }
  }
  return (
    // <View style={styles.container}>
    <CornerstoneViewport
      key='1'
      // data-cy={`viewport-container${viewport.index}`}
      // tools={stateView.tools}
      imageIds={['dicomweb://devcloud1.digihcs.com:11494/studies/1.2.840.113619.2.55.3.4271045733.996.1449464144.595/series/1.2.840.113619.2.55.3.4271045733.996.1449464144.601.3/instances/1.2.840.113619.2.55.3.4271045733.996.1449464144.869.1/frames/1']}
      imageIdIndex={0}
    // className={viewportClassName}
    // activeTool={activeTool}
    // setViewportActive={() => changActiveIndex(viewport.index, state)}
    // onElementEnabled={(e) => stateView.elemaentEnable(e, 0)}
    // style={{
    //   width: gridLayout?.style[viewport.index]?.width,
    //   height: gridLayout?.style[viewport.index]?.height,F
    //   border: "2px solid gray"
    // }}
    // loadIndicatorDelay={100}
    // eventListeners={stateView.eventListeners}
    // resizeThrottleMs={500}
    // onNewImage={() => {
    //   // handle re-render overlay after existed meta-data
    //   setLoading(false)
    //   setTimeout(() => setLoading(true), SHORT_DEBOUNCE_TIME)
    // }}
    // return function null when loading = false ( switch component to re-render overlay )
    // viewportOverlayComponent={loading ? ViewportOverlay : console.log()}
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
