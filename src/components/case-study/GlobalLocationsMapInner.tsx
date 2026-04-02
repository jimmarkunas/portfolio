"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import type { Map as LeafletMap } from "leaflet"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

export type GlobalLocation = {
  city: string
  country: string
  coordinates: [number, number] // [longitude, latitude]
}

type Props = {
  title: string
  locations: GlobalLocation[]
  clusterMarkers?: boolean
}

const INIT_CENTER: [number, number] = [20, 15]
const INIT_ZOOM = 2.75
const MarkerClusterGroup = dynamic(() => import("react-leaflet-cluster"), { ssr: false })

function makeDotIcon(delay: string) {
  return L.divIcon({
    className: "",
    html: `<span class="map-dot" style="--d:${delay}s"></span>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
    popupAnchor: [0, -10],
  })
}

function makeClusterIcon(cluster: any) {
  const n = cluster.getChildCount()
  return L.divIcon({
    className: "",
    html: `<div class="map-cluster-badge">${n}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  })
}

function MapRef({ mapRef }: { mapRef: React.MutableRefObject<LeafletMap | null> }) {
  const map = useMap()
  mapRef.current = map
  return null
}

function ZoomTracker({ onChange }: { onChange: (z: number) => void }) {
  const map = useMap()
  useEffect(() => {
    const handler = () => onChange(map.getZoom())
    map.on("zoomend", handler)
    return () => {
      map.off("zoomend", handler)
    }
  }, [map, onChange])
  return null
}

export function GlobalLocationsMapInner({ title, locations, clusterMarkers = true }: Props) {
  const mapRef = useRef<LeafletMap | null>(null)
  const [currentZoom, setCurrentZoom] = useState(INIT_ZOOM)
  const isDrilledIn = currentZoom > INIT_ZOOM + 0.5

  const handleZoomChange = useCallback((z: number) => setCurrentZoom(z), [])
  function handleZoomIn() {
    mapRef.current?.zoomIn()
  }
  function handleZoomOut() {
    mapRef.current?.zoomOut()
  }
  function handleReset() {
    mapRef.current?.setView(INIT_CENTER, INIT_ZOOM, { animate: true })
  }

  return (
    <div className="global-locations-map relative overflow-hidden h-[300px] md:h-[420px] lg:h-[500px]">
      <div className="absolute left-4 bottom-4 z-[1000] rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[13px] font-medium text-white/80 tracking-wide">{title}</span>
      </div>

      <div
        className={`absolute right-4 top-4 z-[1000] transition-all duration-300 ${isDrilledIn ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
        style={{ top: "calc(1rem + 3 * 2rem + 2 * 6px + 8px)" }}
      >
        <button
          onClick={handleReset}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-black/60 px-3 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white whitespace-nowrap"
        >
          <span>←</span> Overview
        </button>
      </div>

      <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-1.5">
        {(
          [
            { label: "+", fn: handleZoomIn, title: "Zoom in" },
            { label: "−", fn: handleZoomOut, title: "Zoom out" },
            { label: "↺", fn: handleReset, title: "Reset view" },
          ] as const
        ).map(({ label, fn, title: t }) => (
          <button
            key={label}
            onClick={fn}
            title={t}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-black/50 text-[15px] text-white/60 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white/90"
          >
            {label}
          </button>
        ))}
      </div>

      <MapContainer
        center={INIT_CENTER}
        zoom={INIT_ZOOM}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        zoomSnap={0.25}
        minZoom={2.75}
        maxBounds={[[-85, -180], [85, 180]] as [[number, number], [number, number]]}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%", background: "#fefefe" }}
      >
        <MapRef mapRef={mapRef} />
        <ZoomTracker onChange={handleZoomChange} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
          noWrap={true}
        />

        {clusterMarkers ? (
          <MarkerClusterGroup
            iconCreateFunction={makeClusterIcon}
            showCoverageOnHover={false}
            spiderfyOnMaxZoom={true}
            chunkedLoading={true}
            disableClusteringAtZoom={7}
          >
            {locations.map(({ city, country, coordinates: [lng, lat] }) => {
              const delay = ((Math.abs(lng) + Math.abs(lat)) % 2).toFixed(2)
              return (
                <Marker
                  key={`${city}-${country}`}
                  position={[lat, lng]}
                  icon={makeDotIcon(delay)}
                  eventHandlers={{
                    click: (e) => {
                      document.querySelectorAll(".map-dot").forEach((el) => el.classList.remove("selected"))
                      e.target.getElement()?.querySelector(".map-dot")?.classList.add("selected")
                    },
                    popupclose: (e) => {
                      e.target.getElement()?.querySelector(".map-dot")?.classList.remove("selected")
                    },
                  }}
                >
                  <Popup className="map-location-popup" offset={[0, -6]}>
                    <div className="map-popup-inner">
                      <div className="map-popup-eyebrow">{country}</div>
                      <div className="map-popup-name">{city}</div>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MarkerClusterGroup>
        ) : (
          <>
            {locations.map(({ city, country, coordinates: [lng, lat] }) => {
              const delay = ((Math.abs(lng) + Math.abs(lat)) % 2).toFixed(2)
              return (
                <Marker
                  key={`${city}-${country}`}
                  position={[lat, lng]}
                  icon={makeDotIcon(delay)}
                  eventHandlers={{
                    click: (e) => {
                      document.querySelectorAll(".map-dot").forEach((el) => el.classList.remove("selected"))
                      e.target.getElement()?.querySelector(".map-dot")?.classList.add("selected")
                    },
                    popupclose: (e) => {
                      e.target.getElement()?.querySelector(".map-dot")?.classList.remove("selected")
                    },
                  }}
                >
                  <Popup className="map-location-popup" offset={[0, -6]}>
                    <div className="map-popup-inner">
                      <div className="map-popup-eyebrow">{country}</div>
                      <div className="map-popup-name">{city}</div>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </>
        )}
      </MapContainer>
    </div>
  )
}
