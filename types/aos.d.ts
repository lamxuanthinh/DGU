declare module "aos" {
  interface AosOptions {
    // Khai báo các thuộc tính tùy chỉnh của AOS tại đây (nếu có)
    // Ví dụ:
    duration?: number;
    easing?: string;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
  export function reset(): void;
  export function reveal(
    target: string | HTMLElement,
    options?: AosOptions
  ): void;
  // Thêm các hàm và thuộc tính khác của AOS nếu cần thiết
}
