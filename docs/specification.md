# Specification for the 2026 IÖCS Training Web App

## Overview
This web application is a bilingual platform designed to engage potential participants, provide information about the training, and facilitate applications. The site emphasizes modern design, usability, and responsiveness.

---

## Pages and Content

### 1. Landing Page
- **Countdown Timer**: Displays a live countdown to the first meeting on *February 25*.
- **Call-to-Action Button**: Prominently redirects users to the application form.
- **Background Promo Video**: Engages visitors with a video showcasing the essence of the training.

**Info Section**:
- **Six informational cards** with icons covering key training details.

**Promo Video Section**:
- **Embedded video** highlighting the significance of participation.

**Details Section**:
- **Two informational cards** providing overview of what to expect and training structure.

**Application Section**:
- **Title and application link** directing users to the application form.

**Introduction Section**:
- **Carousel** displaying images of the training groups (autoplay enabled).

**Contact Section**:
- **Contact information** and cards for key organizers and representatives.

**Gallery Section**:
- **Carousel** featuring pictures from previous years (autoplay enabled).

### 2. Rules Page
- Overview of the rules and guidelines of the training.

### 3. Contact Page
- **Email**: Official contact email: *kepzes@iocs.hu*.
- **Contact Cards**: Information and pictures of key contacts, including:
  - Organizers
  - President of the IÖCS
  - President of the Supervisory Board

### 4. Application Page
- **Form**: Application form for participants.

---

## Features

### 1. Multi-language Support
- Website available in **Hungarian** and **English**, with easy toggling between languages.

### 2. Privacy Policy
- Comprehensive and accessible privacy policy page.

### 3. Responsive Design
- Fully optimized for desktop, tablet, and mobile devices.
- Performance benchmarks:
  - Desktop: Load time < 2 seconds.
  - Mobile: Load time < 5 seconds.

### 4. Email Notifications
- **Automatic confirmation emails** sent via Resend API upon successful application submission.
- **Bilingual welcome emails** (Hungarian/English) with training details and important information.
- **React Email components** for professional HTML email templates.

### 5. PostgreSQL Database
- **Application data storage** using Prisma ORM and PostgreSQL.
- Stores complete application information including personal details, education, preferences, and international training data.
- Supports relational data with international training and language certificate relationships.

### 6. Google Sheets Integration
- **Automatic synchronization** of submitted applications to a Google Sheet.
- **Real-time updates** when applications are submitted.

---

## Style Guide

### Colors

Main colors:
- **Primary**: `#702878` - Purple/magenta accent color
- **Secondary**: `#0B437D` - Blue accent color
- **Background**: `#080A19` - Very dark blue/black background
- **Foreground**: `#FAFAFA` - Almost white text color
- **Destructive**: `#991C1C` - Red for error states

The color system supports both dark and light themes through CSS variables.

### Fonts
- **Primary Font**: Geist Sans (via `next/font/google`)
- **Monospace Font**: Geist Mono (via `next/font/google`)

---

## Additional Elements

### Branding
- **IÖCS Logo**: Incorporated throughout the site.
- **Social Media Links**: Icons and links to official IÖCS profiles.

### Visual Enhancements
- Decorative section dividers enhance the flow.
- Smooth transitions and animations for carousel sections and video content.
- Accessibility features (e.g., alt text for images, ARIA labels).
