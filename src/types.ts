export interface BookData {
  /**
   * 아이디
   */
  id: number;
  /**
   * 제목
   */
  title: string;
  /**
   * 서브 타이틀
   */
  subTitle: string;
  /**
   * 저자
   */
  author: string;
  /**
   * 출판사
   */
  publisher: string;
  /**
   * 설명
   */
  description: string;
  /**
   * 이미지
   */
  coverImgUrl: string;
}

export interface BookReview {
  /**
   * 아이디
   */
  id: number;
  /**
   * 콘텐츠
   */
  content: string;
  /**
   * 작성자
   */
  author: string;
  /**
   * 만든 날짜
   */
  createdAt: string;
  /**
   * 책 아이디
   */
  bookId: string;
}
