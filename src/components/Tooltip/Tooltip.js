import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

const TOOLTIP_OPEN = 'tooltip:open';

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);
  const bodyRef = useRef(null);
  const idRef = useRef(Math.random().toString(36).slice(2));

  // Close when another tooltip opens
  useEffect(() => {
    function onOtherOpen(e) {
      if (e.detail !== idRef.current) setVisible(false);
    }
    window.addEventListener(TOOLTIP_OPEN, onOtherOpen);
    return () => window.removeEventListener(TOOLTIP_OPEN, onOtherOpen);
  }, []);

  // Close on scroll (mobile)
  useEffect(() => {
    if (!visible) return;
    function onScroll() { setVisible(false); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  // Close on outside tap (mobile)
  useEffect(() => {
    if (!visible) return;
    function onOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('touchstart', onOutside, { passive: true });
    return () => document.removeEventListener('touchstart', onOutside);
  }, [visible]);

  // Position fixed tooltip relative to trigger
  useEffect(() => {
    if (!visible || !bodyRef.current || !wrapperRef.current) return;
    requestAnimationFrame(() => {
      if (!bodyRef.current || !wrapperRef.current) return;
      const body = bodyRef.current;
      const triggerRect = wrapperRef.current.getBoundingClientRect();
      const bodyWidth = body.offsetWidth;
      const bodyHeight = body.offsetHeight;
      const MARGIN = 8;
      const GAP = 8;

      let left = triggerRect.left + triggerRect.width / 2 - bodyWidth / 2;
      let top = triggerRect.top - bodyHeight - GAP;

      if (left < MARGIN) left = MARGIN;
      if (left + bodyWidth > window.innerWidth - MARGIN) {
        left = window.innerWidth - MARGIN - bodyWidth;
      }
      if (top < MARGIN) {
        top = triggerRect.bottom + GAP;
      }

      body.style.left = `${left}px`;
      body.style.top = `${top}px`;
    });
  }, [visible]);

  function open() {
    setVisible(true);
    window.dispatchEvent(new CustomEvent(TOOLTIP_OPEN, { detail: idRef.current }));
  }

  const isHoverable = window.matchMedia('(hover: hover)').matches;

  function handleMouseEnter() {
    if (isHoverable) open();
  }

  function handleMouseLeave() {
    if (isHoverable) setVisible(false);
  }

  function handleClick(e) {
    e.stopPropagation();
    if (!isHoverable) {
      if (visible) setVisible(false); else open();
    }
  }

  return (
    <span
      className="tooltip"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="tooltip__trigger">
        {children}
      </span>
      {visible && (
        <span className="tooltip__body" ref={bodyRef}>
          {text}
        </span>
      )}
    </span>
  );
}

export default Tooltip;
