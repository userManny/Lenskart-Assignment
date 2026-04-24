# Lenskart Clone (Frontend Assignment)

This project is a frontend implementation of a Lenskart-inspired webpage built using HTML, CSS, and JavaScript.  
It focuses on clean UI structure, modular styling, and dynamic rendering using JavaScript.

---

## Features

- Responsive layout using HTML and CSS
- Modular CSS (class-based styling only)
- Dynamic carousel (slider) using JavaScript
- Data-driven UI (no hardcoded HTML for cards/slider)
- Interactive navigation:
  - Next / Previous buttons
  - Dot indicators for slider
- Structured UI sections:
  - Hero Section
  - Vision Section
  - Focus (Carousel)
  - Cards Section (For Everyone)
  - Purpose Section (Grid Layout)
  - Footer

---

## Project Structure
project/
│
├── index.html # Main HTML structure
├── style.css # Styling for all sections
├── script.js # Dynamic rendering & carousel logic
└── images/ # Image assets (img1 → img10)


---

## Sections Overview

### 1. Hero Section
- Displays "Our Purpose"
- Contains heading, description, and image
- Built using Flexbox

### 2. Vision Section
- Center-aligned content
- Styled with background color

### 3. Focus Section (Carousel)
- Dynamic slider built using JavaScript
- Displays multiple cards at once
- Controlled using:
  - Next / Previous buttons
  - Dot navigation

### 4. Cards Section (For Everyone)
- Rendered dynamically using JavaScript
- Based on array data

### 5. Purpose Section (Grid Layout)
- Implemented using CSS Grid (2x2 layout)
- Alternating text and image blocks
- Center-aligned design

### 6. Footer
- Background image section

---

## JavaScript Functionality

### Carousel (crawsel function)

- Controls visible slides using `currentIndex`
- Supports circular navigation using modulo operator

```js
currentIndex = (currentIndex + 1) % carouselData.length;

### Dot Navigation
Dots are created dynamically
Clicking a dot moves to that slide

### Card Rendering
Cards are generated dynamically using array data
Improves scalability and maintainability

Learning Outcomes
Building structured UI layouts
Writing clean and maintainable CSS
Creating reusable JavaScript functions
Implementing a carousel from scratch
Working with dynamic DOM rendering