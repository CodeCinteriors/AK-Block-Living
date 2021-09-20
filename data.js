var APP_DATA = {
  "scenes": [
    {
      "id": "0-living360a",
      "name": "Living360A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.444132221962672,
        "pitch": 0,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.45885938510457436,
          "pitch": 0.04121147457154706,
          "rotation": 0,
          "target": "1-living360b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living360b",
      "name": "Living360B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0.31797923166256226,
        "pitch": 0.03431229560310989,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.8402765920106035,
          "pitch": 0.06804146362331664,
          "rotation": 0,
          "target": "0-living360a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Living-AK Block",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
