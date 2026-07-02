import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const stamps = Array.from({ length: 10 }, (_, i) => i < 6)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0F1E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#00C16A",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 34, fontWeight: 800, color: "#F5F5F0" }}>habbitu</span>
        </div>

        <div style={{ display: "flex", fontSize: 58, fontWeight: 800, color: "#F5F5F0", marginTop: 48, maxWidth: 820, lineHeight: 1.15 }}>
          O cartãozinho de papel se perde. O Habbitu não.
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6B7280", marginTop: 24, maxWidth: 700 }}>
          Cartão fidelidade digital pra negócio físico. Cliente escaneia, junta selo, ganha prêmio.
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 56 }}>
          {stamps.map((filled, i) => (
            <div
              key={i}
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                background: filled ? "#00C16A" : "#1F2937",
                border: filled ? "none" : "1.5px solid #374151",
                display: "flex",
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
