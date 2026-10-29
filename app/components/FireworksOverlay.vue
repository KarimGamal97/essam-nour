<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 w-full h-full pointer-events-none z-20"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null
let nextRocketTime = 0

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  color: string
  size: number
  decay: number
}

interface Rocket {
  x: number
  y: number
  targetY: number
  vy: number
  color: string
}

const particles: Particle[] = []
const rockets: Rocket[] = []

// Golden festive wedding palette
const goldColors = [
  '#F6E097', // soft gold
  '#E8CA68', // champagne gold
  '#D4AF37', // metallic gold
  '#FFF7DC', // ivory sparkle
  '#FADB14', // warm amber
  '#FFFFFF'  // pure star sparkle
]

const spawnRocket = (w: number, h: number) => {
  const x = Math.random() * (w * 0.88) + w * 0.06
  const targetY = Math.random() * (h * 0.6) + h * 0.12
  rockets.push({
    x,
    y: h,
    targetY,
    vy: -(Math.random() * 3.5 + 5.5),
    color: goldColors[Math.floor(Math.random() * goldColors.length)]
  })
}

const explodeRocket = (x: number, y: number, color: string) => {
  const count = Math.floor(Math.random() * 14) + 24
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
    const speed = Math.random() * 2.5 + 0.8
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 0.95,
      color,
      size: Math.random() * 1.8 + 1.0,
      decay: Math.random() * 0.012 + 0.008
    })
  }
}

const startFireworks = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const loop = (timestamp: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Frequent launches (every ~400ms - 750ms)
    if (timestamp > nextRocketTime) {
      spawnRocket(canvas.width, canvas.height)
      if (Math.random() > 0.45) {
        spawnRocket(canvas.width, canvas.height)
      }
      nextRocketTime = timestamp + Math.random() * 350 + 400
    }

    // Update and draw rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i]
      r.y += r.vy

      // Rocket flame trail
      ctx.beginPath()
      ctx.arc(r.x, r.y, 1.8, 0, Math.PI * 2)
      ctx.fillStyle = r.color
      ctx.globalAlpha = 0.65
      ctx.fill()

      if (r.y <= r.targetY) {
        explodeRocket(r.x, r.y, r.color)
        rockets.splice(i, 1)
      }
    }

    // Update and draw sparkles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.03 // soft gravity
      p.alpha -= p.decay

      if (p.alpha <= 0) {
        particles.splice(i, 1)
        continue
      }

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = Math.max(0, p.alpha * 0.85)
      ctx.fill()
    }

    ctx.globalAlpha = 1
    animId = requestAnimationFrame(loop)
  }

  animId = requestAnimationFrame(loop)
}

onMounted(() => {
  startFireworks()
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
})
</script>
