import path from "node:path";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import { Coordinates, GeoData } from "@/types/map.type";

export async function GET() {
  const geoData: Coordinates[] = [];

  for (let i = 11; i < 15; i++) {
    const fileName = `P05-22_${i}.geojson`;
    const jsonPath = path.join(process.cwd(), fileName);

    try {
      const jsonData = await fsPromises.readFile(jsonPath, "utf8");
      const parsedData = JSON.parse(jsonData).features;
      parsedData.map((data: GeoData) => {
        geoData.push({
          lat: data.geometry.coordinates[1],
          lng: data.geometry.coordinates[0],
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  return NextResponse.json(geoData);
}
