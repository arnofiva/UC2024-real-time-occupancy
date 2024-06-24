import Graphic from "@arcgis/core/Graphic";
import { SpatialReference } from "@arcgis/core/geometry";
import CSVLayer from "@arcgis/core/layers/CSVLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";

export const csvPoints = new CSVLayer({
  spatialReference: SpatialReference.WebMercator,
  url: "./Zurich_ETH_Lee_EM_active_pts_WM.csv",
  longitudeField: "POINT_X",
  latitudeField: "POINT_Y",

  // POINT_X,POINT_Y,POINT_Z
});

export const streamLayer = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ETH_Lee_EM_activefeed_WM/StreamServer",
});

export async function queryFeatures(
  layer: FeatureLayer | CSVLayer,
  orderByFields = [] as string[],
) {
  const query = layer.createQuery();
  query.returnGeometry = true;
  query.orderByFields = orderByFields;
  query.returnZ = true;
  const { features } = await layer.queryFeatures(query);
  return features;
}

export function createClientSideStreamLayer(layer: FeatureLayer) {
  const geometryType = layer.geometryType;
  if (geometryType === "mesh" || geometryType === "multipatch") {
    throw new Error("Mesh and multipatch not supported");
  }

  return new StreamLayer({
    objectIdField: layer.objectIdField,
    fields: [
      {
        name: "TRACKID",
        alias: "TrackId",
        type: "long",
      },
      ...layer.fields,
    ],
    timeInfo: {
      trackIdField: "TRACKID", // required
    },
    geometryType,
    updateInterval: 100,
    renderer: layer.renderer,
  });
}

export function createClientSideFeatureLayer(
  layer: FeatureLayer,
  features: Graphic[],
) {
  const geometryType = layer.geometryType;
  if (geometryType === "mesh" || geometryType === "multipatch") {
    throw new Error("Mesh and multipatch not supported");
  }

  return new FeatureLayer({
    title: `${layer.title} (client-side)`,
    fields: layer.fields,
    objectIdField: layer.objectIdField,
    elevationInfo: layer.elevationInfo,
    hasZ: layer.hasZ,
    spatialReference: layer.spatialReference,
    geometryType,
    popupTemplate: layer.popupTemplate,
    source: features,
    renderer: layer.renderer,
    definitionExpression: "0 < people",
    // opacity: layer.opacity
  });
}
