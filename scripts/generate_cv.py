from __future__ import annotations

from io import BytesIO
from pathlib import Path

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
DOCUMENT_DIR = ROOT / "assets" / "documents"
PORTRAIT_PATH = ROOT / "assets" / "bernardo-cv-portrait-natural.png"
UNITY_PATH = ROOT / "assets" / "brand-icons" / "unity-cube.png"

PAGE_W, PAGE_H = A4
BG = colors.HexColor("#edf2f3")
INK = colors.HexColor("#090909")
ACCENT = colors.HexColor("#ff4a1c")
MUTED = colors.HexColor("#667176")
LINE = colors.HexColor("#cad3d5")
PEACH = colors.HexColor("#f4caba")


COPY = {
    "es": {
        "title": "Bernardo Franco - CV",
        "subject": "Productor escénico y visual",
        "role": "PRODUCTOR ESCÉNICO Y VISUAL",
        "tagline": "Producción escénica y visual que convierte ideas en experiencias claras, técnicas y memorables.",
        "capabilities": "CAPACIDADES",
        "skills": [
            ("Producción técnica", "Planeación, equipos y ejecución en set."),
            ("Iluminación", "Diagramas, montaje y creación de atmósferas."),
            ("Dirección visual", "Concepto, composición y coherencia estética."),
            ("Postproducción", "Edición, color y acabado visual."),
        ],
        "profile": "PERFIL",
        "profile_body": (
            "Productor escénico y visual enfocado en convertir conceptos en experiencias claras, viables y memorables. "
            "Integra planeación, operación técnica, iluminación y dirección visual para coordinar equipos, recursos y "
            "decisiones estéticas desde la preproducción hasta la entrega final."
        ),
        "contact": "CONTACTO",
        "education": "FORMACIÓN",
        "degree": "Productor escénico y visual",
        "school": "LCI University",
        "focus": "ENFOQUE",
        "focus_body": "Producción técnica y visual / Contenido digital / Iluminación de atmósferas / Música, moda y cultura",
        "languages": "IDIOMAS",
        "spanish": "ESPAÑOL",
        "native": "Nativo",
        "english": "INGLÉS",
        "advanced": "Avanzado",
        "projects": "PROYECTOS SELECCIONADOS",
        "project_items": [
            ("Ceniza", "Cofundador. Coordina producción técnica, iluminación y ejecución audiovisual desde la planeación hasta la entrega."),
            ("Super Rayo", "Jefe de cabina y productor técnico para música en vivo, operación de equipos y montaje de escena."),
            ("Agendavaciaalmallena", "Producción y edición de contenido digital para una comunidad centrada en nuevos proyectos, bienestar y propósito."),
            ("Podcast Introcrea", "Producción técnica, iluminación y montaje para un formato de conversación con identidad visual y sonora propia."),
            ("Todas las culebras son serpientes", "Asistencia de producción y arte en construcción espacial, ambientación, montaje e interpretación visual."),
        ],
        "tools": "HERRAMIENTAS",
        "tools_subtitle": "Flujo técnico y creativo",
        "footer": "PREPRODUCCIÓN / SET / POST",
    },
    "en": {
        "title": "Bernardo Franco - Resume",
        "subject": "Stage and visual producer",
        "role": "STAGE AND VISUAL PRODUCER",
        "tagline": "Stage and visual production that turns ideas into clear, technical and memorable experiences.",
        "capabilities": "CAPABILITIES",
        "skills": [
            ("Technical production", "Planning, equipment and on-set execution."),
            ("Lighting", "Lighting plots, setup and atmosphere creation."),
            ("Visual direction", "Concept, composition and visual consistency."),
            ("Post-production", "Editing, color and visual finishing."),
        ],
        "profile": "PROFILE",
        "profile_body": (
            "Stage and visual producer focused on turning concepts into clear, feasible and memorable experiences. "
            "Combines planning, technical operation, lighting and visual direction to coordinate teams, resources and "
            "aesthetic decisions from pre-production through final delivery."
        ),
        "contact": "CONTACT",
        "education": "EDUCATION",
        "degree": "Stage and visual producer",
        "school": "LCI University",
        "focus": "FOCUS",
        "focus_body": "Technical and visual production / Digital content / Atmospheric lighting / Music, fashion and culture",
        "languages": "LANGUAGES",
        "spanish": "SPANISH",
        "native": "Native",
        "english": "ENGLISH",
        "advanced": "Advanced",
        "projects": "SELECTED PROJECTS",
        "project_items": [
            ("Ceniza", "Co-founder. Coordinates technical production, lighting and audiovisual execution from planning through delivery."),
            ("Super Rayo", "Control booth lead and technical producer for live music, equipment operation and stage setup."),
            ("Agendavaciaalmallena", "Production and editing of digital content for a community focused on new projects, well-being and purpose."),
            ("Podcast Introcrea", "Technical production, lighting and setup for a conversation format with its own visual and sound identity."),
            ("Todas las culebras son serpientes", "Production and art assistance for spatial construction, atmosphere, setup and visual interpretation."),
        ],
        "tools": "TOOLS",
        "tools_subtitle": "Technical and creative workflow",
        "footer": "PRE-PRODUCTION / SET / POST",
    },
}


def paragraph_style(
    name: str,
    *,
    font: str = "Helvetica",
    size: float = 8,
    leading: float | None = None,
    color=INK,
    alignment=TA_LEFT,
) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.25,
        textColor=color,
        alignment=alignment,
        spaceAfter=0,
        spaceBefore=0,
        allowWidows=0,
        allowOrphans=0,
    )


def draw_paragraph(c, text: str, x: float, top: float, width: float, style: ParagraphStyle) -> float:
    paragraph = Paragraph(text, style)
    _, height = paragraph.wrap(width, PAGE_H)
    paragraph.drawOn(c, x, top - height)
    return height


def draw_label(c, text: str, x: float, y: float, *, color=ACCENT, size=6.2) -> None:
    c.setFillColor(color)
    c.setFont("Courier", size)
    c.drawString(x, y, text)


def portrait_reader() -> ImageReader:
    image = Image.open(PORTRAIT_PATH).convert("RGBA")
    alpha = image.getchannel("A")
    bbox = alpha.getbbox()
    if not bbox:
        raise ValueError("Portrait image has no visible pixels")
    left, top, right, bottom = bbox
    padding_x = 45
    crop = image.crop((max(0, left - padding_x), max(0, top - 10), min(image.width, right + padding_x), bottom))
    stream = BytesIO()
    crop.save(stream, format="PNG", optimize=True)
    stream.seek(0)
    return ImageReader(stream)


def draw_portrait(c) -> None:
    x, y, width, height = 27, 583, 178, 224
    radius = 22
    c.saveState()
    path = c.beginPath()
    path.roundRect(x, y, width, height, radius)
    c.clipPath(path, stroke=0, fill=0)
    c.setFillColor(PEACH)
    c.rect(x, y, width, height, stroke=0, fill=1)

    reader = portrait_reader()
    iw, ih = reader.getSize()
    scale = height / ih
    rendered_width = iw * scale
    c.drawImage(
        reader,
        x + (width - rendered_width) / 2,
        y,
        width=rendered_width,
        height=height,
        mask="auto",
    )
    c.restoreState()


def draw_capabilities(c, copy) -> None:
    x, y, width, height = 225, 557, 344, 102
    c.setFillColor(INK)
    c.roundRect(x, y, width, height, 18, stroke=0, fill=1)
    draw_label(c, copy["capabilities"], x + 16, y + height - 21)

    title_style = paragraph_style("skill-title", font="Helvetica-Bold", size=8.2, leading=9.5, color=colors.white)
    body_style = paragraph_style("skill-body", size=6.35, leading=7.7, color=colors.HexColor("#cbd0d1"))
    columns = [x + 28, x + 192]
    rows = [y + 68, y + 32]

    for index, (title, body) in enumerate(copy["skills"]):
        column = columns[index % 2]
        row = rows[index // 2]
        c.setFillColor(ACCENT)
        c.circle(column - 9, row - 2, 2.7, stroke=0, fill=1)
        draw_paragraph(c, title, column, row + 4, 138, title_style)
        draw_paragraph(c, body, column, row - 10, 138, body_style)


def draw_profile(c, copy) -> None:
    x, y, width, height = 27, 414, 178, 143
    c.setFillColor(INK)
    c.roundRect(x, y, width, height, 18, stroke=0, fill=1)
    draw_label(c, copy["profile"], x + 15, y + height - 22)
    style = paragraph_style("profile-body", size=7.35, leading=9.6, color=colors.white)
    draw_paragraph(c, copy["profile_body"], x + 15, y + height - 42, width - 30, style)


def draw_contact(c, copy) -> None:
    x = 27
    draw_label(c, copy["contact"], x, 389)
    rows = [
        ("EMAIL", "berfranco.92@gmail.com", 366, "mailto:berfranco.92@gmail.com"),
        ("WHATSAPP", "+57 310 563 2567", 328, "https://wa.me/573105632567"),
        ("LINKEDIN", "bernardo-franco", 290, "https://www.linkedin.com/in/bernardo-franco-echeverri-78511a352/"),
        ("WEB", "www.bernardofrancoe.com", 252, "https://www.bernardofrancoe.com"),
    ]
    for label, value, y, url in rows:
        draw_label(c, label, x + 15, y, size=5.4)
        c.setFillColor(INK)
        c.setFont("Helvetica", 6.9)
        c.drawString(x + 15, y - 12, value)
        c.linkURL(url, (x + 13, y - 15, x + 155, y + 5), relative=0)


def draw_education(c, copy) -> None:
    x, y, width, height = 27, 47, 178, 156
    c.setFillColor(colors.white)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.roundRect(x, y, width, height, 18, stroke=1, fill=1)

    draw_label(c, copy["education"], x + 15, y + height - 21)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8.2)
    c.drawString(x + 15, y + height - 39, copy["degree"])
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.1)
    c.drawString(x + 15, y + height - 51, copy["school"])

    c.setStrokeColor(LINE)
    c.line(x + 15, y + 96, x + width - 15, y + 96)
    draw_label(c, copy["focus"], x + 15, y + 82, color=MUTED, size=5.6)
    focus_style = paragraph_style("focus", size=6.25, leading=7.4, color=INK)
    draw_paragraph(c, copy["focus_body"], x + 15, y + 70, width - 30, focus_style)

    c.setStrokeColor(LINE)
    c.line(x + 15, y + 51, x + width - 15, y + 51)
    draw_label(c, copy["languages"], x + 15, y + 38)
    c.setFillColor(MUTED)
    c.setFont("Courier", 5.2)
    c.drawString(x + 15, y + 23, copy["spanish"])
    c.drawString(x + 91, y + 23, copy["english"])
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(x + 15, y + 11, copy["native"])
    c.drawString(x + 91, y + 11, copy["advanced"])


def draw_projects(c, copy) -> None:
    x, width = 225, 344
    draw_label(c, copy["projects"], x, 539)
    top = 524
    item_height = 58
    title_style = paragraph_style("project-title", font="Helvetica-Bold", size=11.2, leading=12.2, color=INK)
    body_style = paragraph_style("project-body", size=6.25, leading=7.5, color=MUTED)

    for index, (title, body) in enumerate(copy["project_items"], start=1):
        item_top = top - (index - 1) * item_height
        c.setStrokeColor(LINE)
        c.setLineWidth(0.65)
        c.line(x, item_top, x + width, item_top)
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 9.2)
        c.drawString(x, item_top - 17, str(index))
        draw_paragraph(c, title, x + 29, item_top - 3, width - 34, title_style)
        draw_paragraph(c, body, x + 29, item_top - 24, width - 34, body_style)


def draw_resolve_icon(c, cx: float, cy: float, scale: float = 1.0) -> None:
    c.saveState()
    c.setStrokeColor(INK)
    c.setFillColor(INK)
    c.setLineWidth(1.15)
    radius = 6.4 * scale
    c.circle(cx, cy + 7.5 * scale, radius, stroke=1, fill=0)
    c.circle(cx - 6.5 * scale, cy - 3.8 * scale, radius, stroke=1, fill=0)
    c.circle(cx + 6.5 * scale, cy - 3.8 * scale, radius, stroke=1, fill=0)
    c.circle(cx, cy, 3.7 * scale, stroke=0, fill=1)
    c.restoreState()


def draw_adobe_icon(c, cx: float, cy: float, letters: str) -> None:
    size = 26
    c.setFillColor(colors.white)
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.roundRect(cx - size / 2, cy - size / 2, size, size, 3, stroke=1, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawCentredString(cx, cy - 3.6, letters)


def draw_tools(c, copy) -> None:
    draw_label(c, copy["tools"], 225, 173)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.1)
    c.drawString(322, 172, copy["tools_subtitle"])

    centers = [267, 353, 440, 527]
    icon_y = 126
    unity = ImageReader(str(UNITY_PATH))
    c.drawImage(unity, centers[0] - 13, icon_y - 14, width=26, height=29, mask="auto", preserveAspectRatio=True)
    draw_resolve_icon(c, centers[1], icon_y, 1.0)
    draw_adobe_icon(c, centers[2], icon_y, "Ae")
    draw_adobe_icon(c, centers[3], icon_y, "Ps")

    labels = ["UNITY", "DAVINCI", "AFTER EFFECTS", "PHOTOSHOP"]
    c.setFillColor(INK)
    c.setFont("Courier", 5.4)
    for cx, label in zip(centers, labels):
        c.drawCentredString(cx, 94, label)


def draw_page(path: Path, language: str) -> None:
    copy = COPY[language]
    c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle(copy["title"])
    c.setSubject(copy["subject"])
    c.setAuthor("Bernardo Franco")

    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.55)
    c.rect(24, 24, PAGE_W - 48, PAGE_H - 48, stroke=1, fill=0)
    c.line(208, 24, 208, PAGE_H - 24)
    c.line(224, 24, 224, PAGE_H - 24)
    c.line(24, 569, 208, 569)
    c.line(24, 395, 208, 395)
    c.line(24, 222, 208, 222)

    draw_label(c, "CV / 2026", 27, 820, size=6.2)
    c.setFillColor(MUTED)
    c.setFont("Courier", 5.8)
    c.drawRightString(526, 820, "BOGOTÁ / COLOMBIA")

    draw_portrait(c)

    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 38)
    c.drawString(227, 770, "BERNARDO")
    c.drawString(227, 728, "FRANCO")
    draw_label(c, copy["role"], 228, 704, size=6.25)
    tagline_style = paragraph_style("tagline", size=8.7, leading=10.7, color=MUTED)
    draw_paragraph(c, copy["tagline"], 228, 690, 327, tagline_style)

    draw_capabilities(c, copy)
    draw_profile(c, copy)
    draw_contact(c, copy)
    draw_education(c, copy)
    draw_projects(c, copy)
    draw_tools(c, copy)

    c.setFillColor(MUTED)
    c.setFont("Courier", 5.8)
    c.drawString(27, 30, copy["footer"])
    c.drawRightString(496, 30, "WWW.BERNARDOFRANCOE.COM")
    c.linkURL("https://www.bernardofrancoe.com", (405, 24, 526, 39), relative=0)

    c.showPage()
    c.save()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    DOCUMENT_DIR.mkdir(parents=True, exist_ok=True)

    spanish_output = OUTPUT_DIR / "Bernardo_Franco_CV_ES.pdf"
    english_output = OUTPUT_DIR / "Bernardo_Franco_CV_EN.pdf"
    draw_page(spanish_output, "es")
    draw_page(english_output, "en")

    (DOCUMENT_DIR / "bernardo-franco-cv.pdf").write_bytes(spanish_output.read_bytes())
    (DOCUMENT_DIR / "bernardo-franco-cv-en.pdf").write_bytes(english_output.read_bytes())


if __name__ == "__main__":
    main()
