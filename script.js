(function(){
    var script = {
 "start": "this.init(); this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": true,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.31,
  "pitch": -14.98
 },
 "id": "panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_05E2F829_088A_7B40_419E_58E242452596",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_05E2F829_088A_7B40_419E_58E242452596_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 0)",
   "media": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.17,
  "pitch": 0
 },
 "id": "camera_4DCFD953_0D41_7671_416C_E5499D3EFD60"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.91,
  "pitch": 0
 },
 "id": "camera_32EBAC21_0D41_6DCE_41A6_9C9EE9B6037B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.38,
  "pitch": 0
 },
 "id": "camera_4E65FA78_0D41_6A3E_4197_ADDD79BECCB3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.87,
  "pitch": 0
 },
 "id": "camera_33008CD9_0D41_6E71_4190_C4221EE55962"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.11,
  "pitch": 0
 },
 "id": "camera_4D9649F3_0D41_7632_41A0_EF0CC529100B"
},
{
 "thumbnailUrl": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Compound 1",
 "id": "panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
   "backwardYaw": 51.89,
   "yaw": -129.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
   "backwardYaw": 51.89,
   "yaw": -129.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
   "backwardYaw": 148.02,
   "yaw": -75.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
   "backwardYaw": 148.02,
   "yaw": -75.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
   "backwardYaw": -21.59,
   "yaw": -57.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
   "backwardYaw": -21.59,
   "yaw": -57.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  }
 ],
 "vfov": 83.42,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1354B999_0B41_76FE_4164_626CC32A5ACA",
  "this.overlay_1C48CAE9_0B41_6A5E_41A1_115531508960",
  "this.overlay_24099A62_0BC1_2A52_4191_40B2A726D92C",
  "this.overlay_3A128D03_0BC1_2FD2_419D_E3B9DD232FB0",
  "this.overlay_3BD1CFE3_0BC2_EA51_419D_0932412FA320",
  "this.overlay_397221B6_0BC3_D633_419A_C44BFAF8572A",
  "this.overlay_395BBA04_0B41_75D6_4187_1ADF9E760AD2"
 ],
 "hfovMin": "224%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.74,
  "pitch": 0
 },
 "id": "camera_32CF2BEF_0D41_6A52_419C_B52107E22A93"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.28,
  "pitch": 0
 },
 "id": "camera_4D311910_0D41_77CE_4160_E2C54D50B2EC"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.87,
  "pitch": 0
 },
 "id": "camera_33763CCB_0D41_6E52_419D_5D5D7A7DCDAE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.98,
  "pitch": 0
 },
 "id": "camera_4DB87A37_0D41_6A32_41A5_12C0FD3D3060"
},
{
 "thumbnailUrl": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_t.jpg",
 "class": "Panorama",
 "label": "Library Study Area",
 "id": "panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 79.73,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_291C5ADF_0B47_6A72_4191_A2331FF32E11"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
   "backwardYaw": -8.17,
   "yaw": -59.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
   "backwardYaw": -8.17,
   "yaw": -59.06,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_05E2F829_088A_7B40_419E_58E242452596",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_05E2F829_088A_7B40_419E_58E242452596_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "media": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.25,
  "pitch": 0
 },
 "id": "panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_camera"
},
{
 "thumbnailUrl": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_t.jpg",
 "class": "Panorama",
 "label": "Lab Way",
 "id": "panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 127.22,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3F30A934_0B47_5636_41A3_EDCD86BC02BB",
  "this.overlay_3DD2977B_0B41_5A32_419B_6B4CA8AA9108"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "backwardYaw": -84.67,
   "yaw": -123.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "backwardYaw": -84.67,
   "yaw": -123.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
   "backwardYaw": -12.9,
   "yaw": 67.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
   "backwardYaw": -12.9,
   "yaw": 67.06,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_t.jpg",
 "class": "Panorama",
 "label": "Library Shelves",
 "id": "panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 79.75,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2F854631_0B43_DA31_4191_9270A0983A4B",
  "this.overlay_3ED4401D_0B41_35F6_4196_EAFB0527E22D"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
   "backwardYaw": -59.06,
   "yaw": -8.17,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
   "backwardYaw": -59.06,
   "yaw": -8.17,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.91,
  "pitch": 0
 },
 "id": "camera_32F3EC2B_0D41_6DD2_4183_8F0B07A085DF"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.35,
  "pitch": 0
 },
 "id": "camera_3228DB9F_0D41_6AF2_4158_4C3761913274"
},
{
 "thumbnailUrl": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_t.jpg",
 "class": "Panorama",
 "label": "Reception",
 "id": "panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 82.85,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1EA029C3_08FF_67CD_4197_071ADC40E3B2",
  "this.overlay_14626736_0B41_5A33_41A5_FF2D62BB2BEE",
  "this.overlay_2A488ACD_0B47_2A56_418E_BC2BF644C904"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "backwardYaw": -151.72,
   "yaw": -21.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "backwardYaw": -151.72,
   "yaw": -21.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "backwardYaw": 6.83,
   "yaw": 111.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "backwardYaw": 6.83,
   "yaw": 111.09,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.02,
  "pitch": 0
 },
 "id": "panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39,
  "pitch": 12.54
 },
 "id": "panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.21,
  "pitch": 0
 },
 "id": "camera_3286DC4A_0D41_6E53_419F_9DA254A1B537"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.33,
  "pitch": 0
 },
 "id": "camera_32328BB3_0D41_6A32_41A1_1B13254758C8"
},
{
 "thumbnailUrl": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_t.jpg",
 "class": "Panorama",
 "label": "Silent Zone 1",
 "id": "panorama_12C2A492_0873_6C4F_4181_7D941D340839",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 80.06,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2F19CA8F_0BC1_2AD2_41A4_5A76C123EB37"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
   "backwardYaw": -24.13,
   "yaw": -141.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
   "backwardYaw": -24.13,
   "yaw": -141.44,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_t.jpg",
 "class": "Panorama",
 "label": "Marketing Reception",
 "id": "panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 82.45,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2AA33329_0B43_5BDE_41A0_346182F3F02D",
  "this.overlay_399A29C5_0B43_5651_418C_75D1F1F36931"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "backwardYaw": -21.59,
   "yaw": -151.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "backwardYaw": -21.59,
   "yaw": -151.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
   "backwardYaw": -95.45,
   "yaw": 95.62,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
   "backwardYaw": -95.45,
   "yaw": 95.62,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.39,
  "pitch": 0
 },
 "id": "camera_3320DCFD_0D41_6E36_419C_2C6C31A98A4A"
},
{
 "thumbnailUrl": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Enterance",
 "id": "panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_05E2F829_088A_7B40_419E_58E242452596",
   "backwardYaw": -156.53,
   "yaw": -27.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_05E2F829_088A_7B40_419E_58E242452596",
   "backwardYaw": -156.53,
   "yaw": -27.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
   "backwardYaw": -23.41,
   "yaw": -57.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
   "backwardYaw": -23.41,
   "yaw": -57.04,
   "distance": 1
  }
 ],
 "vfov": 85.73,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0A6E32A8_078E_6F4F_4183_13D0B215453C",
  "this.overlay_06AD39C5_0835_67D5_4182_A93CD8BEE34B",
  "this.overlay_1F0E0DE4_0B43_6E56_418B_4EC3B172D030"
 ],
 "hfovMin": "200%",
 "hfov": 360,
 "pitch": 0
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlay": "this.IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006",
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "mouseControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_t.jpg",
 "class": "Panorama",
 "label": "Main Compound",
 "id": "panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 80.09,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1F4586F2_08EF_6DCF_4174_FC06E2C8318C",
  "this.overlay_174E4791_0B4F_5ACE_414D_596EC827F6F7",
  "this.overlay_10E4552A_0B43_3FD3_41A0_0E66C308C4D5",
  "this.overlay_33DEDFB4_0B47_2A36_41A6_8927D3AE2344"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.72,
  "pitch": 0
 },
 "id": "camera_32E5EC0E_0D41_6DD3_41A0_4D7BAEE3FFDC"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.37,
  "pitch": 0
 },
 "id": "camera_33CBED29_0D41_6FDE_419D_2012F639FD4C"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 0)",
   "media": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "thumbnailUrl": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_t.jpg",
 "class": "Panorama",
 "label": "First Floor",
 "id": "panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 79.73,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2D043A11_0BC1_D5CE_4182_515AFDCF19F0",
  "this.overlay_3CB6CA60_0B5F_2A4E_419A_CCFED6705D39"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "backwardYaw": -123.22,
   "yaw": -84.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "backwardYaw": -123.22,
   "yaw": -84.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
   "backwardYaw": 130.63,
   "yaw": -119.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
   "backwardYaw": 130.63,
   "yaw": -119.65,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_150379A3_0873_A44D_419E_D803E74DA4B6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.41,
  "pitch": 0
 },
 "id": "camera_4E009AAA_0D41_6AD2_419F_1960BEA851D7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 0)",
   "media": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "thumbnailUrl": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_t.jpg",
 "class": "Panorama",
 "label": "Finance",
 "id": "panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 101.17,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_167E8D10_0837_5C4B_4187_32A244531FC6",
  "this.overlay_2B70A886_0835_6457_41A0_29E6C44989F3",
  "this.overlay_2E691DA0_0BC1_EECE_41A4_C0CEE0E47F86"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "backwardYaw": -119.65,
   "yaw": 130.63,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08",
   "backwardYaw": -119.65,
   "yaw": 130.63,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.94,
  "pitch": 0
 },
 "id": "camera_4DFF39C4_0D41_7656_416C_1D434782D336"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.12,
  "pitch": 0
 },
 "id": "panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_camera"
},
{
 "thumbnailUrl": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Packing Space",
 "id": "panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "backwardYaw": -57.04,
   "yaw": -23.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "backwardYaw": -57.04,
   "yaw": -23.41,
   "distance": 1
  }
 ],
 "vfov": 82.92,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1E48AFB9_0B47_2A3E_4185_486F49DF0922"
 ],
 "hfovMin": "230%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_13D3E51E_085F_6C77_4198_F27D798FE107_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.41,
  "pitch": 0
 },
 "id": "camera_4E47AA4B_0D41_6A52_418A_D5FEE3796A27"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.74,
  "pitch": 0
 },
 "id": "camera_32D7ABFB_0D41_6A31_41A7_5A1AB2A7876B"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.18,
  "pitch": 0
 },
 "id": "camera_336DACC1_0D41_6E4E_4162_CF8EB4101FF8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.55,
  "pitch": 0
 },
 "id": "camera_321BCB7D_0D41_6A31_4190_DC254C39F42F"
},
{
 "thumbnailUrl": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Game Room",
 "id": "panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -75.79,
   "yaw": 148.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -75.79,
   "yaw": 148.02,
   "distance": 1
  }
 ],
 "vfov": 85.13,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3E8F6080_0B42_F6CE_4171_B826C389C950"
 ],
 "hfovMin": "234%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.47,
  "pitch": 0
 },
 "id": "camera_33429C9A_0D41_6EF2_4181_4E5269C9FCD4"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.35,
  "pitch": 0
 },
 "id": "camera_32251B8D_0D41_6AD1_419A_F789145558E8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.59,
  "pitch": 0
 },
 "id": "camera_3281FC44_0D41_6E56_41A1_A1016079FDA4"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.17,
  "pitch": 0
 },
 "id": "camera_4DC2A93D_0D41_7636_4192_2188BD6998D7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.11,
  "pitch": 0
 },
 "id": "camera_4DA3AA05_0D41_75D6_4194_E304CA376DA3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.41,
  "pitch": 0
 },
 "id": "camera_4E111AC0_0D41_6A4F_41A2_3DABF6CCE3DD"
},
{
 "thumbnailUrl": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_t.jpg",
 "class": "Panorama",
 "label": "Marketing Dept",
 "id": "panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 82.75,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_38F67D07_0B47_6FD1_4181_8405FC94B553"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "backwardYaw": 95.62,
   "yaw": -95.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "backwardYaw": 95.62,
   "yaw": -95.45,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.56,
  "pitch": 0
 },
 "id": "camera_33DF0D43_0D41_6E52_414E_7763D88B2E3D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.28,
  "pitch": 0
 },
 "id": "camera_4D3B0929_0D41_77DE_41A5_384140485BC4"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.67,
  "pitch": 0
 },
 "id": "panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_camera"
},
{
 "thumbnailUrl": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_t.jpg",
 "class": "Panorama",
 "label": "Silent Zone Main",
 "id": "panorama_150379A3_0873_A44D_419E_D803E74DA4B6",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 79.73,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2913B37A_0B41_5A32_41A1_FC7622ABE069",
  "this.overlay_2F216F93_0B43_2AF1_4193_FAD77068CA73"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839",
   "backwardYaw": -141.44,
   "yaw": -24.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_12C2A492_0873_6C4F_4181_7D941D340839",
   "backwardYaw": -141.44,
   "yaw": -24.13,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.55,
  "pitch": 0
 },
 "id": "camera_321EEB86_0D41_6AD2_41A8_32787BBB4E89"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.59,
  "pitch": 0
 },
 "id": "camera_334F9CA8_0D41_6EDE_4195_EE6270AF4D28"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.41,
  "pitch": 0
 },
 "id": "camera_4E554A62_0D41_6A52_41A8_3F1B3A64D60B"
},
{
 "thumbnailUrl": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_t.jpg",
 "class": "Panorama",
 "label": "Masjid Gate",
 "id": "panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 82.5,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_11915485_08D2_AC55_417F_1F70FAD002D2",
  "this.overlay_166E815F_0B43_F672_4177_F2D1A175A94A",
  "this.overlay_15BF3CE1_0B41_EE4E_41A2_0607F6241235"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "backwardYaw": -103.26,
   "yaw": -39.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "backwardYaw": -103.26,
   "yaw": -39.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "backwardYaw": -103.26,
   "yaw": -42.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "backwardYaw": -103.26,
   "yaw": -42.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "backwardYaw": -160.28,
   "yaw": 134.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "backwardYaw": -160.28,
   "yaw": 134.41,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 107.75,
  "pitch": 0
 },
 "id": "panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.72,
  "pitch": 0
 },
 "id": "camera_4DE0C97E_0D41_7632_41A4_2C227CE16C83"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_camera"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.96,
  "pitch": 0
 },
 "id": "camera_329DAC6A_0D41_6E52_41A6_2997511BFC74"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.77,
  "pitch": 0
 },
 "id": "panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.38,
  "pitch": 0
 },
 "id": "camera_4E725A96_0D41_6AF2_4180_0B701E533599"
},
{
 "thumbnailUrl": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Computer Lab",
 "id": "panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "backwardYaw": 67.06,
   "yaw": -12.9,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9",
   "backwardYaw": 67.06,
   "yaw": -12.9,
   "distance": 1
  }
 ],
 "vfov": 80.8,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2F10D246_0BC1_DA52_4183_F9936ED9E997"
 ],
 "hfovMin": "199%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.1,
  "pitch": 0
 },
 "id": "camera_323FDBC7_0D41_6A52_4180_852B5897C551"
},
{
 "thumbnailUrl": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Compound 2",
 "id": "panorama_05E2F829_088A_7B40_419E_58E242452596",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "backwardYaw": -27.28,
   "yaw": -156.53,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "backwardYaw": -27.28,
   "yaw": -156.53,
   "distance": 1
  }
 ],
 "vfov": 81.59,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_33354FC4_0B41_2A56_4199_4D483D0A3C2E",
  "this.overlay_32C38FA9_0B4F_6ADE_418E_FB6C81D63F5D",
  "this.overlay_37183666_0B42_DA52_419F_880910E66C53"
 ],
 "hfovMin": "221%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.26,
  "pitch": 0
 },
 "id": "panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_camera"
},
{
 "thumbnailUrl": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_t.jpg",
 "class": "Panorama",
 "label": "SUN GYM",
 "id": "panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 83.26,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_12CB9DFB_0B41_6E32_418C_1342A44A6914"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -129.82,
   "yaw": 51.89,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -129.82,
   "yaw": 51.89,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.74,
  "pitch": 0
 },
 "id": "camera_32C5FBD6_0D41_6A72_41A8_546D82B0D991"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.96,
  "pitch": 0
 },
 "id": "camera_32948C5D_0D41_6E76_4180_8659C16CEAFA"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.94,
  "pitch": 0
 },
 "id": "camera_4D8A89DD_0D41_7676_417C_EA71B1438E14"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.59,
  "pitch": 0
 },
 "id": "camera_32FBDC35_0D41_6E36_41A0_A41BF01CE477"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.72,
  "pitch": 0
 },
 "id": "camera_32DD4C08_0D41_6DDE_419E_6D72D4656DE6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.47,
  "pitch": 0
 },
 "id": "camera_32BBFC8F_0D41_6ED2_41A4_69B70D2841FE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.21,
  "pitch": 0
 },
 "id": "camera_328FCC5A_0D41_6E72_419A_BAEF2A47295C"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.45,
  "pitch": 0
 },
 "id": "panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.56,
  "pitch": 0
 },
 "id": "camera_33E80D4D_0D41_6E56_41A5_4C68B3C0A19B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.59,
  "pitch": 0
 },
 "id": "camera_33562CB2_0D41_6E32_41A5_57085C008C6D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.37,
  "pitch": 0
 },
 "id": "camera_33D49D2F_0D41_6FD2_4132_F8B53A2A1AA2"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.04,
  "pitch": 0
 },
 "id": "panorama_05E2F829_088A_7B40_419E_58E242452596_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.33,
  "pitch": 0
 },
 "id": "camera_322F2BAA_0D41_6AD3_4179_44D037288B74"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 0)",
   "media": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.94,
  "pitch": 0
 },
 "id": "camera_4DF479B0_0D41_76CE_419B_4F145E7EA600"
},
{
 "thumbnailUrl": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_t.jpg",
 "class": "Panorama",
 "label": "Masjid Compound",
 "id": "panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 84.44,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_175D77D1_0B46_DA4E_41A3_B1328875C879",
  "this.overlay_3E54133D_0B41_5A31_41A4_D42D8BDD73D2"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "backwardYaw": -39.61,
   "yaw": -103.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "backwardYaw": -39.61,
   "yaw": -103.26,
   "distance": 1
  }
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.78,
  "pitch": 0
 },
 "id": "camera_333ECD1B_0D41_6FF2_41A4_375FA5693672"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.39,
  "pitch": 0
 },
 "id": "panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.56,
  "pitch": 0
 },
 "id": "camera_330A4CDF_0D41_6E72_4184_458D332ED920"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.78,
  "pitch": 0
 },
 "id": "camera_3334AD11_0D41_6FCE_4183_54B42C223017"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_12C2A492_0873_6C4F_4181_7D941D340839_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 0)",
   "media": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.39,
  "pitch": 0
 },
 "id": "camera_332B9D09_0D41_6FDE_416B_A6CC1BA04D5B"
},
{
 "thumbnailUrl": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Reception - Outside",
 "id": "panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "backwardYaw": 111.09,
   "yaw": 6.83,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834",
   "backwardYaw": 111.09,
   "yaw": 6.83,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "backwardYaw": 134.41,
   "yaw": -160.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "backwardYaw": 134.41,
   "yaw": -160.28,
   "distance": 1
  }
 ],
 "vfov": 86.3,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_159F8670_0B41_3A4E_4197_AAED070C6674",
  "this.overlay_16940C29_0B43_2DD1_418C_BD82FC9597BD"
 ],
 "hfovMin": "225%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.98,
  "pitch": 0
 },
 "id": "camera_4DAF4A23_0D41_75D2_4197_1F22B37C9D32"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.1,
  "pitch": 0
 },
 "id": "camera_32385BBD_0D41_6A36_41A5_0187204171E2"
},
{
 "thumbnailUrl": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Cafeteria",
 "id": "panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/b/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/f/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/u/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/r/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/d/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/l/0/{row}_{column}.jpg",
      "colCount": 11,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -57.44,
   "yaw": -21.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "backwardYaw": -57.44,
   "yaw": -21.59,
   "distance": 1
  }
 ],
 "vfov": 85.48,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_385D1FD0_0B41_6A4F_4190_1F94F300DAF8"
 ],
 "hfovMin": "222%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.83,
  "pitch": 0
 },
 "id": "camera_32AECC85_0D41_6ED6_4194_89A5963091B9"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.83,
  "pitch": 0
 },
 "id": "camera_32A5CC7B_0D41_6E32_41A3_27E56499C10D"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.18,
  "pitch": 0
 },
 "id": "camera_3363FCB9_0D41_6E31_4183_B0F559CE60C2"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.74,
  "pitch": 0
 },
 "id": "camera_32CB8BE0_0D41_6A4E_4187_42B9E67C92CE"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_05E2F829_088A_7B40_419E_58E242452596",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_05E2F829_088A_7B40_419E_58E242452596_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 0)",
   "media": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.94,
  "pitch": 0
 },
 "id": "camera_4DEB7994_0D41_76F6_417B_370CA9C695A4"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.56,
  "pitch": 0
 },
 "id": "camera_33140CF3_0D41_6E32_4151_700C76635A7A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.72,
  "pitch": 0
 },
 "id": "camera_4DD6596A_0D41_7652_417A_C5AE341D69D6"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006_pressed.png",
 "data": {
  "name": "Button17847"
 },
 "iconURL": "skin/IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006.png",
 "id": "IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006",
 "left": "47.23%",
 "minHeight": 0,
 "width": 64.05,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2337FB6B_0BC1_2A52_4194_38CB32B71006_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "bottom": "17.45%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 50.9,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 21,
 "minHeight": 1,
 "width": 149,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "AHMAD IDRIS",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "bottom": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 31,
 "class": "Label",
 "fontSize": 18,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "shadowBlurRadius": 6,
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.51,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 0.42,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "shadowHorizontalLength": 3,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  0,
  0,
  0,
  0,
  0,
  0.19,
  1,
  1,
  1
 ],
 "top": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#A4F2F5",
  "#330099",
  "#000000"
 ]
},
{
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "layout": "vertical",
 "minHeight": 1,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": 15,
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 300,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 30,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "62.229%",
 "height": 90,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_30B3FD3A_0B43_2E33_419D_0F509A3703E6",
   "pitch": 4.11,
   "yaw": 62.77,
   "hfov": 11.1,
   "distance": 100
  }
 ],
 "id": "overlay_1354B999_0B41_76FE_4164_626CC32A5ACA",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": 4.11,
   "hfov": 11.1
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_07ACCD69_0852_DCDD_411B_C11967E73C18, this.camera_4DA3AA05_0D41_75D6_4194_E304CA376DA3); this.mainPlayList.set('selectedIndex', 4)",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2051A8EE_0BC1_5652_41A2_8C909D2ED6E6",
   "pitch": -16.91,
   "yaw": -129.82,
   "hfov": 17.63,
   "distance": 50
  }
 ],
 "id": "overlay_1C48CAE9_0B41_6A5E_41A1_115531508960",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -16.91,
   "hfov": 17.63
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB, this.camera_4DB87A37_0D41_6A32_41A5_12C0FD3D3060); this.mainPlayList.set('selectedIndex', 12)",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C61BC98_0B41_EEFE_4179_2A8521EFA304",
   "pitch": -2.88,
   "yaw": -75.79,
   "hfov": 4.62,
   "distance": 50
  }
 ],
 "id": "overlay_24099A62_0BC1_2A52_4191_40B2A726D92C",
 "data": {
  "label": "Arrow 05b Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_6_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -2.88,
   "hfov": 4.62
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "SUN GYM"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_7_0.png",
      "width": 1095,
      "height": 291
     }
    ]
   },
   "pitch": -5.24,
   "yaw": -139.44,
   "hfov": 23.97,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3A128D03_0BC1_2FD2_419D_E3B9DD232FB0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_7_0_map.gif",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -5.24,
   "hfov": 23.97
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958, this.camera_4E554A62_0D41_6A52_41A8_3F1B3A64D60B); this.mainPlayList.set('selectedIndex', 13)",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C616C98_0B41_EEFE_4183_0CD206F08866",
   "pitch": 0.02,
   "yaw": -57.44,
   "hfov": 3.38,
   "distance": 50
  }
 ],
 "id": "overlay_3BD1CFE3_0BC2_EA51_419D_0932412FA320",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_8_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": 0.02,
   "hfov": 3.38
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Game  Room"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_9_0.png",
      "width": 634,
      "height": 149
     }
    ]
   },
   "pitch": 9.85,
   "yaw": -83.06,
   "hfov": 13.73,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_397221B6_0BC3_D633_419A_C44BFAF8572A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_9_0_map.gif",
      "width": 68,
      "height": 16
     }
    ]
   },
   "pitch": 9.85,
   "hfov": 13.73
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Cafeteria"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_10_0.png",
      "width": 375,
      "height": 138
     }
    ]
   },
   "pitch": 3.55,
   "yaw": -60.85,
   "hfov": 8.24,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_395BBA04_0B41_75D6_4187_1ADF9E760AD2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_10_0_map.gif",
      "width": 43,
      "height": 16
     }
    ]
   },
   "pitch": 3.55,
   "hfov": 8.24
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_13D3E51E_085F_6C77_4198_F27D798FE107, this.camera_32AECC85_0D41_6ED6_4194_89A5963091B9); this.mainPlayList.set('selectedIndex', 14)",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2057E8F6_0BC1_5632_4198_D440E55A77E4",
   "pitch": -8.51,
   "yaw": -59.06,
   "hfov": 20.36,
   "distance": 100
  }
 ],
 "id": "overlay_291C5ADF_0B47_6A72_4191_A2331FF32E11",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -8.51,
   "hfov": 20.36
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C, this.camera_323FDBC7_0D41_6A52_4180_852B5897C551); this.mainPlayList.set('selectedIndex', 18)",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C6BDC9D_0B41_EEF6_418B_A5D02B9876C1",
   "pitch": -3.3,
   "yaw": 67.06,
   "hfov": 16.11,
   "distance": 100
  }
 ],
 "id": "overlay_3F30A934_0B47_5636_41A3_EDCD86BC02BB",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -3.3,
   "hfov": 16.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08, this.camera_32328BB3_0D41_6A32_41A1_1B13254758C8); this.mainPlayList.set('selectedIndex', 21)",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C6B5C9D_0B41_EEF6_4191_6D3883988207",
   "pitch": -48.33,
   "yaw": -123.22,
   "hfov": 30.11,
   "distance": 100
  }
 ],
 "id": "overlay_3DD2977B_0B41_5A32_419B_6B4CA8AA9108",
 "data": {
  "label": "Circle Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0_HS_3_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -48.33,
   "hfov": 30.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A, this.camera_4D8A89DD_0D41_7676_417C_EA71B1438E14); this.mainPlayList.set('selectedIndex', 15)",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205768EE_0BC1_5652_41A2_8D9155902F68",
   "pitch": -19.08,
   "yaw": -8.17,
   "hfov": 21.23,
   "distance": 50
  }
 ],
 "id": "overlay_2F854631_0B43_DA31_4191_9270A0983A4B",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -19.08,
   "hfov": 21.23
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C667C9C_0B41_EEF6_4199_292D653B04B9",
   "pitch": 3.91,
   "yaw": -144.84,
   "hfov": 23.69,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3ED4401D_0B41_35F6_4196_EAFB0527E22D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.91,
   "hfov": 23.69
  }
 ]
},
{
 "yaw": 55.56,
 "bleaching": 0.7,
 "pitch": 9.44,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_1EA029C3_08FF_67CD_4197_071ADC40E3B2",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C, this.camera_4D3B0929_0D41_77DE_41A5_384140485BC4); this.mainPlayList.set('selectedIndex', 11)",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205488EE_0BC1_5652_4192_64A19D66D253",
   "pitch": -16.65,
   "yaw": -21.59,
   "hfov": 23.67,
   "distance": 100
  }
 ],
 "id": "overlay_14626736_0B41_5A33_41A5_FF2D62BB2BEE",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -16.65,
   "hfov": 23.67
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9, this.camera_4DCFD953_0D41_7671_416C_E5499D3EFD60); this.mainPlayList.set('selectedIndex', 8)",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205738EE_0BC1_5652_41A6_C72709BF3BFE",
   "pitch": -32.64,
   "yaw": 111.09,
   "hfov": 26.01,
   "distance": 50
  }
 ],
 "id": "overlay_2A488ACD_0B47_2A56_418E_BC2BF644C904",
 "data": {
  "label": "Arrow 05b Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0_HS_2_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -32.64,
   "hfov": 26.01
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_150379A3_0873_A44D_419E_D803E74DA4B6, this.camera_33008CD9_0D41_6E71_4190_C4221EE55962); this.mainPlayList.set('selectedIndex', 16)",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205978F6_0BC1_5632_419F_52ACF5E433FD",
   "pitch": -28.18,
   "yaw": -141.44,
   "hfov": 24.72,
   "distance": 50
  }
 ],
 "id": "overlay_2F19CA8F_0BC1_2AD2_41A4_5A76C123EB37",
 "data": {
  "label": "Circle Arrow 01a Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -28.18,
   "hfov": 24.72
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4, this.camera_321EEB86_0D41_6AD2_41A8_32787BBB4E89); this.mainPlayList.set('selectedIndex', 10)",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2057D8EE_0BC1_5652_4170_0F68146F7874",
   "pitch": -24.3,
   "yaw": 95.62,
   "hfov": 21.59,
   "distance": 100
  }
 ],
 "id": "overlay_2AA33329_0B43_5BDE_41A0_346182F3F02D",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.3,
   "hfov": 21.59
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834, this.camera_4E111AC0_0D41_6A4F_41A2_3DABF6CCE3DD); this.mainPlayList.set('selectedIndex', 9)",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C675C9B_0B41_EEF1_4184_39682A865729",
   "pitch": -20.34,
   "yaw": -151.72,
   "hfov": 23.17,
   "distance": 100
  }
 ],
 "id": "overlay_399A29C5_0B43_5651_418C_75D1F1F36931",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -20.34,
   "hfov": 23.17
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_0BA43769_078B_B5C0_4179_F3F3509C7744, this.camera_33562CB2_0D41_6E32_41A5_57085C008C6D); this.mainPlayList.set('selectedIndex', 1)",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0_HS_0_0.png",
      "width": 184,
      "height": 41
     }
    ]
   },
   "pitch": 4.33,
   "yaw": -57.04,
   "hfov": 21.78,
   "distance": 50
  }
 ],
 "id": "overlay_0A6E32A8_078E_6F4F_4183_13D0B215453C",
 "data": {
  "label": "Parking Space"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0_HS_0_0_map.gif",
      "width": 71,
      "height": 16
     }
    ]
   },
   "pitch": 4.33,
   "hfov": 21.78
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Main Gate"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0_HS_2_0.png",
      "width": 92,
      "height": 34
     }
    ]
   },
   "pitch": 5.58,
   "yaw": -23.86,
   "hfov": 10.93,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_06AD39C5_0835_67D5_4182_A93CD8BEE34B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_0_HS_2_0_map.gif",
      "width": 43,
      "height": 16
     }
    ]
   },
   "pitch": 5.58,
   "hfov": 10.93
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_05E2F829_088A_7B40_419E_58E242452596, this.camera_33429C9A_0D41_6EF2_4181_4E5269C9FCD4); this.mainPlayList.set('selectedIndex', 3)",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_202EB8E6_0BC1_5652_4199_9D7D25D09C92",
   "pitch": -3.11,
   "yaw": -27.28,
   "hfov": 12.25,
   "distance": 100
  }
 ],
 "id": "overlay_1F0E0DE4_0B43_6E56_418B_4EC3B172D030",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -3.11,
   "hfov": 12.25
  }
 ]
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0_HS_1_0.png",
      "width": 905,
      "height": 235
     }
    ]
   },
   "pitch": 5.55,
   "yaw": -60.73,
   "hfov": 19.81,
   "distance": 48.46
  }
 ],
 "id": "overlay_1F4586F2_08EF_6DCF_4174_FC06E2C8318C",
 "data": {
  "label": "Reception"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0_HS_1_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": 5.55,
   "hfov": 19.81
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2053F8EE_0BC1_5652_4181_11A17E9A50B5",
   "pitch": -5.47,
   "yaw": -45.25,
   "hfov": 19.85,
   "distance": 50
  }
 ],
 "id": "overlay_174E4791_0B4F_5ACE_414D_596EC827F6F7",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -5.47,
   "hfov": 19.85
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205398EE_0BC1_5652_41A1_A0F4B4B9091C",
   "pitch": -10.83,
   "yaw": 156.52,
   "hfov": 26,
   "distance": 50
  }
 ],
 "id": "overlay_10E4552A_0B43_3FD3_41A0_0E66C308C4D5",
 "data": {
  "label": "Arrow 05a Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_1_HS_3_0_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -10.83,
   "hfov": 26
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_30B79D3D_0B43_2E31_416A_84631E0CAD7A",
   "pitch": -5.57,
   "yaw": -131.19,
   "hfov": 6.86,
   "distance": 100
  }
 ],
 "id": "overlay_33DEDFB4_0B47_2A36_41A6_8927D3AE2344",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -5.57,
   "hfov": 6.86
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4, this.camera_33D49D2F_0D41_6FD2_4132_F8B53A2A1AA2); this.mainPlayList.set('selectedIndex', 20)",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C6DAC9E_0B41_EEF2_419F_465685C21785",
   "pitch": -0.23,
   "yaw": -119.65,
   "hfov": 31.93,
   "distance": 100
  }
 ],
 "id": "overlay_2D043A11_0BC1_D5CE_4182_515AFDCF19F0",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.23,
   "hfov": 31.93
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9, this.camera_333ECD1B_0D41_6FF2_41A4_375FA5693672); this.mainPlayList.set('selectedIndex', 19)",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C6D2C9E_0B41_EEF2_4193_9AA791382104",
   "pitch": -6.46,
   "yaw": -84.67,
   "hfov": 26.31,
   "distance": 50
  }
 ],
 "id": "overlay_3CB6CA60_0B5F_2A4E_419A_CCFED6705D39",
 "data": {
  "label": "Arrow 05a Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0_HS_2_0_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -6.46,
   "hfov": 26.31
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Payment Counter"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_1_HS_0_0.png",
      "width": 787,
      "height": 136
     }
    ]
   },
   "pitch": 22.97,
   "yaw": -9.18,
   "hfov": 20.22,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_167E8D10_0837_5C4B_4187_32A244531FC6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_1_HS_0_0_map.gif",
      "width": 92,
      "height": 16
     }
    ]
   },
   "pitch": 22.97,
   "hfov": 20.22
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "HR Department "
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_1_HS_1_0.png",
      "width": 953,
      "height": 183
     }
    ]
   },
   "pitch": 41.03,
   "yaw": 54.94,
   "hfov": 20.05,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2B70A886_0835_6457_41A0_29E6C44989F3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_1_HS_1_0_map.gif",
      "width": 83,
      "height": 16
     }
    ]
   },
   "pitch": 41.03,
   "hfov": 20.05
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_140C2508_082D_EC5B_4140_2CCA1747CE08, this.camera_3228DB9F_0D41_6AF2_4158_4C3761913274); this.mainPlayList.set('selectedIndex', 21)",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205898F6_0BC1_5632_4194_BC30806FA704",
   "pitch": -42.37,
   "yaw": 130.63,
   "hfov": 22.71,
   "distance": 50
  }
 ],
 "id": "overlay_2E691DA0_0BC1_EECE_41A4_C0CEE0E47F86",
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -42.37,
   "hfov": 22.71
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1, this.camera_329DAC6A_0D41_6E52_41A6_2997511BFC74); this.mainPlayList.set('selectedIndex', 0)",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205148EE_0BC1_5652_41A5_8A73757F576F",
   "pitch": -16.95,
   "yaw": -23.41,
   "hfov": 34.92,
   "distance": 50
  }
 ],
 "id": "overlay_1E48AFB9_0B47_2A3E_4185_486F49DF0922",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_1_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -16.95,
   "hfov": 34.92
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A, this.camera_328FCC5A_0D41_6E72_419A_BAEF2A47295C); this.mainPlayList.set('selectedIndex', 2)",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C66AC9B_0B41_EEF1_4156_3C719E4C32A3",
   "pitch": -27.11,
   "yaw": 148.02,
   "hfov": 21.14,
   "distance": 50
  }
 ],
 "id": "overlay_3E8F6080_0B42_F6CE_4171_B826C389C950",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -27.11,
   "hfov": 21.14
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1077EB07_08DD_E455_4174_84BF7F7F842C, this.camera_4E725A96_0D41_6AF2_4180_0B701E533599); this.mainPlayList.set('selectedIndex', 11)",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -95.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0_HS_1_0.png",
      "width": 597,
      "height": 597
     }
    ]
   },
   "pitch": -34.77
  }
 ],
 "id": "overlay_38F67D07_0B47_6FD1_4181_8405FC94B553",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1E3D7B74_08D3_64CB_41A1_29F7CC2720D4_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -34.77,
   "hfov": 10.8
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 21)",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205798F6_0BC1_5632_4192_C43792DFFEE0",
   "pitch": -27.66,
   "yaw": -125.59,
   "hfov": 18.56,
   "distance": 50
  }
 ],
 "id": "overlay_2913B37A_0B41_5A32_41A1_FC7622ABE069",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -27.66,
   "hfov": 18.56
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_12C2A492_0873_6C4F_4181_7D941D340839, this.camera_33E80D4D_0D41_6E56_41A5_4C68B3C0A19B); this.mainPlayList.set('selectedIndex', 17)",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2056C8F6_0BC1_5632_4165_95885BCAB7B0",
   "pitch": -17.37,
   "yaw": -24.13,
   "hfov": 23.58,
   "distance": 100
  }
 ],
 "id": "overlay_2F216F93_0B43_2AF1_4193_FAD77068CA73",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.37,
   "hfov": 23.58
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD, this.camera_32CB8BE0_0D41_6A4E_4187_42B9E67C92CE); this.mainPlayList.set('selectedIndex', 6)",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_0_0.png",
      "width": 1162,
      "height": 284
     }
    ]
   },
   "pitch": -0.75,
   "yaw": -39.61,
   "hfov": 25.55,
   "distance": 50
  }
 ],
 "id": "overlay_11915485_08D2_AC55_417F_1F70FAD002D2",
 "data": {
  "label": "Masjid Area"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -0.75,
   "hfov": 25.55
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD, this.camera_32D7ABFB_0D41_6A31_41A7_5A1AB2A7876B); this.mainPlayList.set('selectedIndex', 6)",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205568EE_0BC1_5652_4170_3BA66C9D1C7C",
   "pitch": -23.08,
   "yaw": -42.09,
   "hfov": 20.03,
   "distance": 100
  }
 ],
 "id": "overlay_166E815F_0B43_F672_4177_F2D1A175A94A",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.08,
   "hfov": 20.03
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9, this.camera_32E5EC0E_0D41_6DD3_41A0_4D7BAEE3FFDC); this.mainPlayList.set('selectedIndex', 8)",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205538EE_0BC1_5652_418A_18B78A443CFC",
   "pitch": -7.22,
   "yaw": 134.41,
   "hfov": 25.6,
   "distance": 50
  }
 ],
 "id": "overlay_15BF3CE1_0B41_EE4E_41A2_0607F6241235",
 "data": {
  "label": "Arrow 05b Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_2_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 25.6
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9, this.camera_4DF479B0_0D41_76CE_419B_4F145E7EA600); this.mainPlayList.set('selectedIndex', 19)",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2059E8F6_0BC1_5632_4193_EE6E4124A126",
   "pitch": -17.4,
   "yaw": -12.9,
   "hfov": 22.08,
   "distance": 100
  }
 ],
 "id": "overlay_2F10D246_0BC1_DA52_4183_F9936ED9E997",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.4,
   "hfov": 22.08
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_30B1ED3C_0B43_2E37_4174_9EE31BE0E470",
   "pitch": 3.66,
   "yaw": -101.41,
   "hfov": 24.66,
   "distance": 100
  }
 ],
 "id": "overlay_33354FC4_0B41_2A56_4199_4D483D0A3C2E",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": 3.66,
   "hfov": 24.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_30B62D3C_0B43_2E37_4195_9E6AED68EF18",
   "pitch": 3.54,
   "yaw": -37.44,
   "hfov": 12.68,
   "distance": 100
  }
 ],
 "id": "overlay_32C38FA9_0B4F_6ADE_418E_FB6C81D63F5D",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 3.54,
   "hfov": 12.68
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1, this.camera_4DE0C97E_0D41_7632_41A4_2C227CE16C83); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4AD319EB_0CC1_7652_4189_A4DF6256A349",
   "pitch": -15.01,
   "yaw": -156.53,
   "hfov": 29.83,
   "distance": 50
  }
 ],
 "id": "overlay_37183666_0B42_DA52_419F_880910E66C53",
 "data": {
  "label": "Arrow 05b Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_4_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -15.01,
   "hfov": 29.83
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
   "click": "this.startPanoramaWithCamera(this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A, this.camera_336DACC1_0D41_6E4E_4162_CF8EB4101FF8); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2050A8EE_0BC1_5652_4158_E425AC69F06D",
   "pitch": -15.69,
   "yaw": 51.89,
   "hfov": 16.99,
   "distance": 100
  }
 ],
 "id": "overlay_12CB9DFB_0B41_6E32_418C_1342A44A6914",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.69,
   "hfov": 16.99
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D, this.camera_332B9D09_0D41_6FDE_416B_A6CC1BA04D5B); this.mainPlayList.set('selectedIndex', 7)",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205228EE_0BC1_5652_417D_DF8B03FB9ADE",
   "pitch": -16.27,
   "yaw": -103.26,
   "hfov": 21.08,
   "distance": 50
  }
 ],
 "id": "overlay_175D77D1_0B46_DA4E_41A3_B1328875C879",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -16.27,
   "hfov": 21.08
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Female Mosque"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0_HS_1_0.png",
      "width": 628,
      "height": 176
     }
    ]
   },
   "pitch": 12.01,
   "yaw": 89.83,
   "hfov": 13.51,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3E54133D_0B41_5A31_41A4_D42D8BDD73D2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0_HS_1_0_map.gif",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": 12.01,
   "hfov": 13.51
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_1F4831B5_08F6_E7B5_4187_8A5980623834, this.camera_32F3EC2B_0D41_6DD2_4183_8F0B07A085DF); this.mainPlayList.set('selectedIndex', 9)",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2055B8EE_0BC1_5652_4181_6CB6B1BCC968",
   "pitch": -7.29,
   "yaw": 6.83,
   "hfov": 20.42,
   "distance": 50
  }
 ],
 "id": "overlay_159F8670_0B41_3A4E_4197_AAED070C6674",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -7.29,
   "hfov": 20.42
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D, this.camera_3281FC44_0D41_6E56_41A1_A1016079FDA4); this.mainPlayList.set('selectedIndex', 7)",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_205458EE_0BC1_5652_41A0_EAEA137C53D8",
   "pitch": -12.85,
   "yaw": -160.28,
   "hfov": 32.25,
   "distance": 50
  }
 ],
 "id": "overlay_16940C29_0B43_2DD1_418C_BD82FC9597BD",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -12.85,
   "hfov": 32.25
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "this.startPanoramaWithCamera(this.panorama_0699CC7E_088A_5BC3_4192_3387B11A477A, this.camera_33140CF3_0D41_6E32_4151_700C76635A7A); this.mainPlayList.set('selectedIndex', 2)",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C661C9B_0B41_EEF1_41A3_2F7FB477215B",
   "pitch": -18.25,
   "yaw": -21.59,
   "hfov": 25.81,
   "distance": 100
  }
 ],
 "id": "overlay_385D1FD0_0B41_6A4F_4190_1F94F300DAF8",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -18.25,
   "hfov": 25.81
  }
 ]
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "SUN"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "minHeight": 1,
 "width": 450,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "SUN Tour App",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Label",
 "fontSize": 31,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 40,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "4.222%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 30,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "paddingRight": 15,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_3_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_30B3FD3A_0B43_2E33_419D_0F509A3703E6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_4_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2051A8EE_0BC1_5652_41A2_8C909D2ED6E6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_6_0.png",
   "width": 720,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C61BC98_0B41_EEFE_4179_2A8521EFA304",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0699CC7E_088A_5BC3_4192_3387B11A477A_0_HS_8_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C616C98_0B41_EEFE_4183_0CD206F08866",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_13CD327E_085E_A4B7_419D_6C65C0C75F5A_0_HS_1_0.png",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2057E8F6_0BC1_5632_4198_D440E55A77E4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C6BDC9D_0B41_EEF6_418B_A5D02B9876C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_125D563F_0857_ECB5_41A0_0300B4F2D1A9_0_HS_3_0.png",
   "width": 1220,
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C6B5C9D_0B41_EEF6_4191_6D3883988207",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205768EE_0BC1_5652_41A2_8D9155902F68",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_13D3E51E_085F_6C77_4198_F27D798FE107_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C667C9C_0B41_EEF6_4199_292D653B04B9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205488EE_0BC1_5652_4192_64A19D66D253",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F4831B5_08F6_E7B5_4187_8A5980623834_0_HS_2_0.png",
   "width": 720,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205738EE_0BC1_5652_41A6_C72709BF3BFE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_12C2A492_0873_6C4F_4181_7D941D340839_0_HS_0_0.png",
   "width": 1220,
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205978F6_0BC1_5632_419F_52ACF5E433FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2057D8EE_0BC1_5652_4170_0F68146F7874",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1077EB07_08DD_E455_4174_84BF7F7F842C_0_HS_3_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C675C9B_0B41_EEF1_4184_39682A865729",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_098F6B3E_078B_FD43_4181_FDC2322BFAA1_1_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_202EB8E6_0BC1_5652_4199_9D7D25D09C92",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_1_HS_2_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2053F8EE_0BC1_5652_4181_11A17E9A50B5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_1_HS_3_0.png",
   "width": 720,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205398EE_0BC1_5652_41A1_A0F4B4B9091C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1AE72C3C_0875_5CBB_418D_31736A4BD24A_0_HS_4_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_30B79D3D_0B43_2E31_416A_84631E0CAD7A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C6DAC9E_0B41_EEF2_419F_465685C21785",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_140C2508_082D_EC5B_4140_2CCA1747CE08_0_HS_2_0.png",
   "width": 720,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C6D2C9E_0B41_EEF2_4193_9AA791382104",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1412A2F2_082D_A5CF_4195_96421FE4A2C4_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205898F6_0BC1_5632_4194_BC30806FA704",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0BA43769_078B_B5C0_4179_F3F3509C7744_1_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205148EE_0BC1_5652_41A5_8A73757F576F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_10DF022D_0837_A455_419B_4B5B7F9D40AB_0_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C66AC9B_0B41_EEF1_4156_3C719E4C32A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205798F6_0BC1_5632_4192_C43792DFFEE0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_150379A3_0873_A44D_419E_D803E74DA4B6_0_HS_2_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2056C8F6_0BC1_5632_4165_95885BCAB7B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205568EE_0BC1_5652_4170_3BA66C9D1C7C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_19B05A45_086D_E4D5_418A_F7E4EF52099D_0_HS_2_0.png",
   "width": 720,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205538EE_0BC1_5652_418A_18B78A443CFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_14B2AB7B_0857_64BD_414B_9FBA584E3B6C_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2059E8F6_0BC1_5632_4193_EE6E4124A126",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_2_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_30B1ED3C_0B43_2E37_4174_9EE31BE0E470",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_30B62D3C_0B43_2E37_4195_9E6AED68EF18",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_05E2F829_088A_7B40_419E_58E242452596_0_HS_4_0.png",
   "width": 720,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4AD319EB_0CC1_7652_4189_A4DF6256A349",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_07ACCD69_0852_DCDD_411B_C11967E73C18_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2050A8EE_0BC1_5652_4158_E425AC69F06D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1AE83E6F_086D_DCD5_4197_3FD911E949CD_0_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205228EE_0BC1_5652_417D_DF8B03FB9ADE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0_HS_1_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2055B8EE_0BC1_5652_4181_6CB6B1BCC968",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1E29029A_08D3_647F_4193_F4201DC4CEE9_0_HS_2_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_205458EE_0BC1_5652_41A0_EAEA137C53D8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_13E89B72_0832_E4CF_417A_2EE9DBAE4958_0_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C661C9B_0B41_EEF1_41A3_2F7FB477215B",
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 116,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "COMPOUND",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 96,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "paddingRight": 15,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "GOUND FLOOR",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "FIRST FLOOR",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 152,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "SILENT ZONE",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 136,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "CAFTERIA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "layout": "horizontal",
 "minHeight": 1,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "85%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "width": "50%",
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "minHeight": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "verticalAlign": "middle",
 "width": "100%",
 "selectedItemLabelFontColor": "#F7931E",
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "scrollBarColor": "#F7931E",
 "itemMode": "normal",
 "itemOpacity": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "ThumbnailGrid",
 "itemLabelFontStyle": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "itemLabelFontFamily": "Montserrat",
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailWidth": 220,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0,
 "height": "92%",
 "itemPaddingTop": 3,
 "minWidth": 1,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "bottom": -0.2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingLeft": 70,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 13,
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8203619720275!2d8.5334505754925!3d11.98692873565538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81aa24828cd7%3A0x56cae8248d5f27f7!2sSkyline%20University%20Nigeria!5e0!3m2!1sen!2sin!4v1718157436512!5m2!1sen!2sin",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "55%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "width": "45%",
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_to_height"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "right": 10,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "76.245%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.62vh;font-family:'Montserrat';\"><B>SKYLINE UNIVERSITY</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.75vh;font-family:'Oswald';\"><B>AHMAD IDRIS</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.75vh;font-family:'Oswald';\"><B>BSc. Software Engineering</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.75vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.75vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Segoe UI Semibold';\"><B>This is a final year project developed in partial fullfilment of the award of Bachelor of Science in Software Engineering by the Department of Software Engineering, Skyline Univerity of Nigeria, Kano.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Segoe UI Semibold';\"><B>The project is build with virtual reality tour, aim to assist new and prospective students of the university to access some of the school's facilities with ease.</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:6.95vh;font-family:'Bebas Neue Bold';\">SKYLINE UNIVERSITY, KANO</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "91.118%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.46vh;font-family:'Montserrat';\"><B>AHMAD IDRIS</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Montserrat';\">BSc. Software Engineering</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">This is a final year project developed in partial fullfilment of the award of Bachelor of Science in Software Engineering by the Department of Software Engineering, Skyline Univerity of Nigeria, Kano.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">The project is build with virtual reality tour, aim to assist new and prospective students of the university to access some of the school's facilities with ease.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
