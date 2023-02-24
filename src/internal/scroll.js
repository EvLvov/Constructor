const locks = new Set();

export function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);

  document.body.classList.add("q-scroll-lock");
}

export function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);

  if (locks.size === 0) {
    document.body.classList.remove("q-scroll-lock");
  }
}
