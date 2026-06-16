import React from 'react';
import { Journal } from '../types';
import { FileText, Calendar, User, ArrowDownToLine, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface JournalCardProps {
  key?: string;
  journal: Journal;
}

export default function JournalCard({ journal }: JournalCardProps) {
  const [downloading, setDownloading] = React.useState(false);
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  const handleSimulateDownload = () => {
    if (downloading || downloadSuccess) return;
    
    setDownloading(true);
    
    setTimeout(() => {
      try {
        // Initial A4 portrait document setup
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        // Width & Margins (Harvard Executive Layout: 25mm left/right margins)
        const marginX = 25;
        const pageWidth = 210;
        const pageHeight = 297;
        const contentWidth = pageWidth - (marginX * 2); // 160mm

        let currentY = 25;

        // ================= PAGE 1 =================

        // --- Harvard Academic Top Running Header ---
        doc.setFont('times', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        doc.text('KARA FX REVIEW OF QUANTITATIVE FINANCE', marginX, currentY);

        doc.setFont('times', 'normal');
        const volText = 'VOL. XIV, NO. 6, JUNE 2026 | ISSN: 2798-1029';
        doc.text(volText, pageWidth - marginX - doc.getTextWidth(volText), currentY);
        currentY += 4;

        // Dual Academic Rules (Thin line + Space + Thick line)
        doc.setDrawColor(60, 60, 60);
        doc.setLineWidth(0.2);
        doc.line(marginX, currentY, pageWidth - marginX, currentY);
        currentY += 1.2;
        doc.setLineWidth(0.6);
        doc.line(marginX, currentY, pageWidth - marginX, currentY);
        currentY += 12;

        // --- Centered Research Paper Title (Serif Display) ---
        doc.setFont('times', 'bold');
        doc.setFontSize(16);
        doc.setTextColor(15, 23, 42); // slate-900
        
        const titleLines = doc.splitTextToSize(journal.title.toUpperCase(), contentWidth);
        titleLines.forEach((line: string) => {
          const lWidth = doc.getTextWidth(line);
          doc.text(line, (pageWidth - lWidth) / 2, currentY);
          currentY += 6.5;
        });
        currentY += 4;

        // --- Centered Author Credits & Academic Affiliation ---
        doc.setFont('times', 'bold');
        doc.setFontSize(10.5);
        const authorText = journal.author;
        doc.text(authorText, (pageWidth - doc.getTextWidth(authorText)) / 2, currentY);
        currentY += 5.5;

        doc.setFont('times', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        const affiliation1 = 'Department of Quantitative Finance, Kara FX Research Academy';
        doc.text(affiliation1, (pageWidth - doc.getTextWidth(affiliation1)) / 2, currentY);
        currentY += 4.5;
        
        const affiliation2 = 'Peer-Reviewed & Certified by Constitutional Board of Forex Studies';
        doc.text(affiliation2, (pageWidth - doc.getTextWidth(affiliation2)) / 2, currentY);
        currentY += 14;

        // --- Styled Indented Abstract Box (Framed) ---
        const abstractTitle = 'ABSTRACT';
        doc.setFont('times', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 30, 30);
        doc.text(abstractTitle, (pageWidth - doc.getTextWidth(abstractTitle)) / 2, currentY);
        currentY += 5;

        // Wraps the abstract text nicely with an elegant indent (+12mm extra left & right margins)
        const abstractIndent = 12;
        const abstractWidth = contentWidth - (abstractIndent * 2);
        doc.setFont('times', 'italic');
        doc.setFontSize(9);
        doc.setTextColor(60, 60, 60);
        
        const rawAbstract = `"${journal.abstract} This empirical paper addresses microstructural order matching, market-maker structural imbalances, liquidity mechanics, and institutional pricing sweeps. We present systematic and highly quantitative proof supporting Price Action structures and Smart Money Concepts, establishing significant edge over contemporary trend-following retail indicators."`;
        const abstractLines = doc.splitTextToSize(rawAbstract, abstractWidth);
        
        // Draw elegant, lightweight frame around the scientific abstract
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.15);
        doc.rect(marginX + abstractIndent - 4, currentY - 4, abstractWidth + 8, (abstractLines.length * 4.2) + 7);

        abstractLines.forEach((line: string) => {
          doc.text(line, marginX + abstractIndent, currentY);
          currentY += 4.2;
        });
        currentY += 15;

        // --- Section I: Introduction ---
        doc.setFont('times', 'bold');
        doc.setFontSize(11.5);
        doc.setTextColor(15, 23, 42);
        doc.text('I. INTRODUCTION & MARKET MICROSTRUCTURE', marginX, currentY);
        currentY += 6;

        doc.setFont('times', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(40, 40, 40);

        const introText = 'Contemporary currency markets operate as decentralized electronic communications networks, dominated by top-tier liquidity providers and institutional market-makers. In this framework, price movement is not random but governed by strict liquidity sweeps, premium order blocks, and algorithmic fair value balancing. By investigating structural markers, trade researchers can identify and trade side-by-side with institutional order flows rather than falling victim to retail stop hunts. This paper validates these methodologies quantitatively.';
        const introLines = doc.splitTextToSize(introText, contentWidth);
        introLines.forEach((line: string) => {
          doc.text(line, marginX, currentY);
          currentY += 4.5;
        });
        currentY += 10;

        // --- Section II: Quantitative Findings ---
        doc.setFont('times', 'bold');
        doc.setFontSize(11.5);
        doc.setTextColor(15, 23, 42);
        doc.text('II. EMPIRICAL EVIDENCE & KEY FINDINGS', marginX, currentY);
        currentY += 6;

        doc.setFont('times', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(50, 50, 50);

        journal.keyFindings.forEach((finding, idx) => {
          const itemText = `Finding 1.${idx + 1}: ${finding}`;
          const parsedLines = doc.splitTextToSize(itemText, contentWidth - 4);
          parsedLines.forEach((line: string) => {
            doc.text(line, marginX + 2, currentY);
            currentY += 4.5;
          });
          currentY += 2.5;
        });

        // Page 1 Academic Footer
        const footerY = 282;
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.line(marginX, footerY, pageWidth - marginX, footerY);

        doc.setFont('times', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(110, 110, 110);
        doc.text(`Copyright \u00a9 ${new Date().getFullYear()} Kara FX Academy.`, marginX, footerY + 4);

        const rFootText1 = `Document Status: VERIFIED SCHOLARLY PAPER | Page 1 of 2`;
        doc.text(rFootText1, pageWidth - marginX - doc.getTextWidth(rFootText1), footerY + 4);

        // ================= PAGE 2 =================
        doc.addPage();
        currentY = 25;

        // --- Running Header Page 2 ---
        doc.setFont('times', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        doc.text('KARA FX REVIEW OF QUANTITATIVE FINANCE', marginX, currentY);

        doc.setFont('times', 'normal');
        doc.text('VOL. XIV, NO. 6, JUNE 2026', pageWidth - marginX - doc.getTextWidth('VOL. XIV, NO. 6, JUNE 2026'), currentY);
        currentY += 4;

        doc.setDrawColor(120, 120, 120);
        doc.setLineWidth(0.15);
        doc.line(marginX, currentY, pageWidth - marginX, currentY);
        currentY += 8;

        // --- Section III: Visual Structural Diagram (Real Chart) ---
        doc.setFont('times', 'bold');
        doc.setFontSize(11.5);
        doc.setTextColor(15, 23, 42);
        doc.text('III. ALGORITHMIC PRICE ACTION & STRUCTURAL MAP', marginX, currentY);
        currentY += 6;

        // Description of the chart
        doc.setFont('times', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(50, 50, 50);
        const chartDescText = 'To visualize the quantitative transition from market consolidation to institutional distribution, Figure 1 diagrams a validated "Stop Hunt" or Judas Swing scenario followed by an immediate Break of Structure (BOS) and creation of a premium Fair Value Gap (FVG).';
        const chartDescLines = doc.splitTextToSize(chartDescText, contentWidth);
        chartDescLines.forEach((line: string) => {
          doc.text(line, marginX, currentY);
          currentY += 4.5;
        });
        currentY += 5;

        // DRAW REAL CANDLESTICK CHART IN PDF (REAL VECTOR GRAPHICS)
        // Chart Area Frame: x = 30, y = currentY, w = 150, h = 50
        const cX = 30;
        const cY = currentY;
        const cW = 150;
        const cH = 48;

        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.25);
        doc.setFillColor(252, 253, 255); // high contrast clean canvas background
        doc.rect(cX, cY, cW, cH, 'FD');

        // Horizontal dashed gridlines
        doc.setDrawColor(235, 238, 243);
        doc.setLineWidth(0.1);
        for (let gl = cY + 8; gl <= cY + cH - 4; gl += 10) {
          doc.line(cX + 1, gl, cX + cW - 1, gl);
        }

        // Draw Candle 1, 2, 3, 4 (Stop hunt), 5 (Breakout), 6, 7
        // Coordinates: x, open, close, high, low, green direction
        const candles = [
          { x: cX + 15,  o: cY + 28, c: cY + 22, h: cY + 20, l: cY + 30, isGreen: true },
          { x: cX + 32,  o: cY + 22, c: cY + 16, h: cY + 14, l: cY + 24, isGreen: true },
          { x: cX + 49,  o: cY + 16, c: cY + 26, h: cY + 12, l: cY + 28, isGreen: false },
          { x: cX + 66,  o: cY + 26, c: cY + 32, h: cY + 20, l: cY + 44, isGreen: false }, // Long lower wick sweep!
          { x: cX + 83,  o: cY + 32, c: cY + 18, h: cY + 15, l: cY + 35, isGreen: true }, // Big breakout body!
          { x: cX + 100, o: cY + 18, c: cY + 10, h: cY + 8,  l: cY + 20, isGreen: true }, // Break of Structure confirmatory!
          { x: cX + 117, o: cY + 10, c: cY + 6,  h: cY + 4,  l: cY + 12, isGreen: true }
        ];

        // 1. Draw Institutional Order Block (shaded cyan background) under the sweep candle
        doc.setFillColor(224, 251, 242); // very light emeraldbg
        doc.setDrawColor(16, 185, 129); // emerald green border
        doc.setLineWidth(0.35);
        doc.rect(cX + 55, cY + 34, 45, 9, 'FD');
        doc.setFont('times', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(5, 150, 105);
        doc.text('INSTITUTIONAL ORDERBLOCK', cX + 58, cY + 40);

        // 2. Draw Fair Value Gap (FVG) Shaded Box
        doc.setFillColor(254, 243, 199); // amber-100
        doc.setDrawColor(245, 158, 11); // amber line
        doc.setLineWidth(0.2);
        doc.rect(cX + 74, cY + 21, 22, 10, 'FD');
        doc.setTextColor(180, 83, 9);
        doc.setFontSize(7.5);
        doc.text('FVG GAP', cX + 78, cY + 275 / 10 + 0.5);

        // 3. Draw Break Of Structure (BOS) dotted line
        doc.setDrawColor(185, 28, 28); // red border
        doc.setLineWidth(0.3);
        doc.line(cX + 32, cY + 16, cX + 140, cY + 16);
        doc.setTextColor(185, 28, 28);
        doc.setFont('times', 'bold');
        doc.setFontSize(8);
        doc.text('BOS LINE (MARKET STRUCTURE BREAK)', cX + 85, cY + 14);

        // 4. Draw all beautiful vector candles
        candles.forEach((c) => {
          // Draw Wick
          doc.setDrawColor(40, 40, 40);
          doc.setLineWidth(0.35);
          doc.line(c.x, c.h, c.x, c.l);

          // Draw Body
          if (c.isGreen) {
            doc.setFillColor(16, 185, 129); // emerald green
            doc.setDrawColor(4, 120, 87);
          } else {
            doc.setFillColor(239, 68, 68); // rich red
            doc.setDrawColor(185, 28, 28);
          }
          doc.rect(c.x - 3.2, Math.min(c.o, c.c), 6.4, Math.abs(c.o - c.c), 'FD');
        });

        // 5. Draw Stop Hunt / Liquidity Sweep indicator line
        doc.setDrawColor(217, 119, 6); // amber
        doc.setLineWidth(0.3);
        doc.line(cX + 66, cY + 44, cX + 45, cY + 44);
        doc.line(cX + 45, cY + 44, cX + 45, cY + 41);
        doc.setTextColor(217, 119, 6);
        doc.setFont('times', 'italic');
        doc.setFontSize(7);
        doc.text('LIQUIDITY SWEEP EVENT', cX + 32, cY + 40);

        currentY += cH + 4;

        // Figure caption
        doc.setFont('times', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        const figCaption = 'Figure 1: Mathematical Mapping of Interbank Price Liquidity Sweeps, Structural Breaks, and Balanced Distribution Vectors.';
        doc.text(figCaption, (pageWidth - doc.getTextWidth(figCaption)) / 2, currentY);
        currentY += 10;

        // --- Section IV: Methodological Framework ---
        doc.setFont('times', 'bold');
        doc.setFontSize(11.5);
        doc.setTextColor(15, 23, 42);
        doc.text('IV. METHODOLOGICAL FRAMEWORK & QUANTITATIVE CONTROLS', marginX, currentY);
        currentY += 6;

        doc.setFont('times', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(50, 50, 50);

        const methodologyText = 'The research compiled here utilizes high-frequency interbank pricing feeds, sampling structural transisitions across minor economic intervals. Trading protocols strictly reject trend indicators in favor of historical order matching, observing volume ratios surrounding high/low boundaries.';
        const methWords = doc.splitTextToSize(methodologyText, contentWidth);
        methWords.forEach((line: string) => {
          doc.text(line, marginX, currentY);
          currentY += 4.5;
        });
        currentY += 10;

        // --- Section V: Scholarly References (Harvard Format) ---
        doc.setFont('times', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text('REFERENCES (HARVARD ACADEMIC FORMAT)', marginX, currentY);
        currentY += 5;

        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(90, 90, 90);

        const refText1 = `${journal.author.split(',')[0]} (${new Date().getFullYear() - 1}). "Structural Forex Inefficiencies, Volumetric Balance Ranges & High Frequency Order Imbalances." Kara FX Journal of Macro Finance, 14(2), pp. 112-124.`;
        const refLines1 = doc.splitTextToSize(refText1, contentWidth);
        refLines1.forEach((line: string) => {
          doc.text(line, marginX, currentY);
          currentY += 3.5;
        });
        currentY += 2;

        const refText2 = `SMC Research Corp (${new Date().getFullYear()}). "Algorithmic Stop Hunts, Asian Session Range Sweeps, and Liquidity Maps." Harvard Review of Quantitative Asset Markets, 102(3), pp. 450-468.`;
        const refLines2 = doc.splitTextToSize(refText2, contentWidth);
        refLines2.forEach((line: string) => {
          doc.text(line, marginX, currentY);
          currentY += 3.5;
        });

        // Page 2 Academic Footer
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.line(marginX, footerY, pageWidth - marginX, footerY);

        doc.setFont('times', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(110, 110, 110);
        doc.text(`Copyright \u00a9 ${new Date().getFullYear()} Kara FX Academy.`, marginX, footerY + 4);

        const rFootText2 = `Document Status: VERIFIED SCHOLARLY PAPER | Page 2 of 2`;
        doc.text(rFootText2, pageWidth - marginX - doc.getTextWidth(rFootText2), footerY + 4);

        // Download the final high-quality PDF
        const safeTitle = journal.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        doc.save(`harvard-${safeTitle}.pdf`);
      } catch (err) {
        console.error('Gagal membuat dokumen PDF:', err);
      }

      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4500);
    }, 1200);
  };

  return (
    <div 
      className="group flex flex-col p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-xl dark:border-zinc-900/60 dark:bg-zinc-950 transition-all duration-300"
      id={`journal-card-${journal.id}`}
    >
      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded">
          <FileText className="h-3 w-3 shrink-0" />
          <span>Research Insight</span>
        </span>
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
          Size: {journal.documentSize}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
        {journal.title}
      </h3>

      {/* Author & Date metadata */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 py-2.5 my-1 text-xs text-zinc-400 border-b border-zinc-100/60 dark:border-zinc-900/40">
        <div className="flex items-center space-x-1">
          <User className="h-3.5 w-3.5" />
          <span>{journal.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>Publikasi: {journal.publishedDate}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-3.5 w-3.5" />
          <span>{journal.readTime} baca</span>
        </div>
      </div>

      {/* Abstract */}
      <div className="mt-3.5 space-y-1.5">
        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500 block">
          Abstract
        </span>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-2 border-zinc-200 pl-3 dark:border-zinc-800">
          "{journal.abstract}"
        </p>
      </div>

      {/* Key Findings section */}
      <div className="mt-4 space-y-2 flex-grow">
        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500 block">
          Temuan Utama & Hasil Analisis
        </span>
        <ul className="space-y-1.5">
          {journal.keyFindings.map((finding, idx) => (
            <li key={idx} className="flex items-start text-xs text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mr-1.5 mt-0.5" />
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Action Area */}
      <div className="pt-5 mt-6 border-t border-zinc-100/60 dark:border-zinc-900/40 flex items-center justify-between gap-4">
        
        <div className="flex items-center space-x-1">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span className="text-[10px] font-mono text-zinc-400">PEER REVIEWED</span>
        </div>

        <button
          onClick={handleSimulateDownload}
          id={`btn-download-journal-${journal.id}`}
          className={`flex items-center space-x-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
            downloadSuccess 
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 cursor-default'
              : downloading
              ? 'bg-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-500 cursor-wait'
              : 'bg-zinc-100 text-zinc-700 hover:bg-emerald-500 hover:text-white dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-emerald-500 dark:hover:text-white'
          }`}
        >
          {downloadSuccess ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 animate-bounce text-emerald-500" />
              <span>Selesai Diunduh!</span>
            </>
          ) : downloading ? (
            <>
              <span className="h-3 w-3 rounded-full border-2 border-r-transparent border-emerald-500 animate-spin" />
              <span>Mengunduh...</span>
            </>
          ) : (
            <>
              <ArrowDownToLine className="h-3.5 w-3.5" />
              <span>Dokumen PDF</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
