// 자동 생성(v5): 연도 탭 + 31개교 + 지정 정렬
const DATA = [
 {
  "id": "yonsei",
  "name": "연세대",
  "years": "2026학년도",
  "source": "[연세대] 2026학년도 수시모집 선발결과.pdf",
  "origin": "연세대학교 입학처 선발결과 (대형 판형, 한 페이지에 여러 전형)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "추천형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과[추천형] · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/yonsei/c-chucheon.webp",
        "label": "선발결과",
        "pg": "원본 1쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "활동우수형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합[활동우수형] · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/yonsei/c-hwaldong.webp",
        "label": "선발결과",
        "pg": "원본 1쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "국제형(국내고)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합[국제형] · 해당 구획만 발췌(같은 표에 해외고/검정고시 행 포함)",
      "pages": [
       {
        "src": "img/yonsei/c-gukje-b.webp",
        "label": "선발결과",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "국제인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 특기자[국제인재] · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/yonsei/c-gukjein-c.webp",
        "label": "선발결과",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "reason": "이 자료에 논술 결과가 없습니다. 원본에 \"수시 기타전형 및 정시 선발결과는 추후 입학처 홈페이지와 대학어디가를 통해 공개\"라고 안내되어 있습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "korea",
  "name": "고려대(서울)",
  "years": "2025~2026학년도",
  "source": "[고려대] 입학처 영상 편집.pdf 외",
  "origin": "고려대학교 입학처 발표 영상 캡처 자료 · 2026 파일은 2027 대비 발표(결과 수치는 2026학년도), 2025 파일은 2025학년도 결과입니다",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학교추천전형(결과표)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-chu-14.webp",
        "label": "전형 결과 총괄",
        "pg": "원본 14쪽"
       },
       {
        "src": "img/korea/y26-chu-21.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "원본 21쪽",
        "note": "자연 상세표는 원본 영상 캡처에 없습니다."
       }
      ],
      "doc": "원본 표기: 학교추천전형(학생부교과)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-chu-05.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/korea/y25-chu-06.webp",
        "label": "교과 상위 70%·충원율(자연)",
        "pg": "원본 6쪽"
       }
      ],
      "doc": "원본 표기: 학교추천전형(학생부교과)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "학교추천전형(분포도)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-chu-15.webp",
        "label": "수능최저충족률(인문)",
        "pg": "원본 15쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-16.webp",
        "label": "수능최저충족률(자연)",
        "pg": "원본 16쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-17.webp",
        "label": "충원율(인문)",
        "pg": "원본 17쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-18.webp",
        "label": "3개년 비교(2024~2026)",
        "pg": "원본 18쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-19.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 19쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-20.webp",
        "label": "교과등급 상자그림(자연)",
        "pg": "원본 20쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-chu-22.webp",
        "label": "고교유형별 지원·합격",
        "pg": "원본 22쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 학교추천전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-chu-02.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 2쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-chu-04.webp",
        "label": "교과등급 상자그림(자연)",
        "pg": "원본 4쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-chu-07.webp",
        "label": "고교유형별 지원·합격",
        "pg": "원본 7쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 학교추천전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학업우수전형(결과표)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-up-33.webp",
        "label": "전형 결과 총괄",
        "pg": "원본 33쪽"
       },
       {
        "src": "img/korea/up-png1.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "제공 PNG"
       },
       {
        "src": "img/korea/up-png2.webp",
        "label": "교과 상위 70%·충원율(자연)",
        "pg": "제공 PNG"
       }
      ],
      "doc": "원본 표기: 학업우수전형(학생부종합) · 상세표 2장은 사용자 제공 PNG",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-up-21.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "원본 21쪽"
       },
       {
        "src": "img/korea/y25-up-22.webp",
        "label": "교과 상위 70%·충원율(자연)",
        "pg": "원본 22쪽"
       }
      ],
      "doc": "원본 표기: 학업우수전형(학생부종합)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학업우수전형(분포도)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-up-34.webp",
        "label": "수능최저충족률(자연)",
        "pg": "원본 34쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-up-35.webp",
        "label": "3개년 비교(2024~2026)",
        "pg": "원본 35쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-up-36.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 36쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-up-37.webp",
        "label": "교과등급 상자그림(자연)",
        "pg": "원본 37쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-up-38.webp",
        "label": "고교유형별 지원·합격",
        "pg": "원본 38쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-up-39.webp",
        "label": "졸업연도별 지원·합격",
        "pg": "원본 39쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 학업우수전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-up-10.webp",
        "label": "수능최저충족률(인문)",
        "pg": "원본 10쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-12.webp",
        "label": "수능최저충족률(자연)",
        "pg": "원본 12쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-14.webp",
        "label": "충원율(인문)",
        "pg": "원본 14쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-16.webp",
        "label": "충원율(자연)",
        "pg": "원본 16쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-18.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 18쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-20.webp",
        "label": "교과등급 상자그림(자연)",
        "pg": "원본 20쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-23.webp",
        "label": "고교유형별 지원·합격",
        "pg": "원본 23쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-up-24.webp",
        "label": "졸업연도별 지원·합격",
        "pg": "원본 24쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 학업우수전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "계열적합전형(결과표)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-gy-42.webp",
        "label": "전형 결과 총괄",
        "pg": "원본 42쪽"
       },
       {
        "src": "img/korea/y26-gy-47.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "원본 47쪽"
       },
       {
        "src": "img/korea/y26-gy-49.webp",
        "label": "교과 상위 70%·충원율(자연)",
        "pg": "원본 49쪽"
       }
      ],
      "doc": "원본 표기: 계열적합전형(학생부종합)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-gy-30.webp",
        "label": "교과 상위 70%·충원율(인문)",
        "pg": "원본 30쪽"
       },
       {
        "src": "img/korea/y25-gy-34.webp",
        "label": "교과 상위 70%·충원율(자연)",
        "pg": "원본 34쪽"
       }
      ],
      "doc": "원본 표기: 계열적합전형(학생부종합)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "계열적합전형(분포도)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-gy-43.webp",
        "label": "충원율(인문)",
        "pg": "원본 43쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-gy-44.webp",
        "label": "충원율(자연)",
        "pg": "원본 44쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-gy-45.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 45쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-gy-46.webp",
        "label": "고교유형별(인문)",
        "pg": "원본 46쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-gy-48.webp",
        "label": "고교유형별(자연)",
        "pg": "원본 48쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-gy-50.webp",
        "label": "졸업연도별",
        "pg": "원본 50쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 계열적합전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-gy-26.webp",
        "label": "충원율(자연)",
        "pg": "원본 26쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-gy-28.webp",
        "label": "교과등급 상자그림(인문)",
        "pg": "원본 28쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-gy-29.webp",
        "label": "고교유형별(인문)",
        "pg": "원본 29쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-gy-32.webp",
        "label": "교과등급 상자그림(자연)",
        "pg": "원본 32쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-gy-33.webp",
        "label": "고교유형별(자연)",
        "pg": "원본 33쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-gy-35.webp",
        "label": "졸업연도별",
        "pg": "원본 35쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 계열적합전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(결과표)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-non-58.webp",
        "label": "전형 결과 총괄",
        "pg": "원본 58쪽"
       }
      ],
      "doc": "원본 표기: 논술전형(논술위주)",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발표 캡처에는 논술 결과표가 없고 그래프만 있습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(분포도)",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/korea/y26-non-59.webp",
        "label": "충원율(인문)",
        "pg": "원본 59쪽",
        "dist": true
       },
       {
        "src": "img/korea/y26-non-60.webp",
        "label": "2개년 비교(2025~2026)",
        "pg": "원본 60쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 논술전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/korea/y25-non-36.webp",
        "label": "논술 응시율",
        "pg": "원본 36쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-non-37.webp",
        "label": "충원율(인문)",
        "pg": "원본 37쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-non-38.webp",
        "label": "충원율(자연)",
        "pg": "원본 38쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-non-39.webp",
        "label": "고교유형별(인문)",
        "pg": "원본 39쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-non-40.webp",
        "label": "고교유형별(자연)",
        "pg": "원본 40쪽",
        "dist": true
       },
       {
        "src": "img/korea/y25-non-41.webp",
        "label": "졸업연도별",
        "pg": "원본 41쪽",
        "dist": true
       }
      ],
      "doc": "원본 표기: 논술전형 · 그래프 자료",
      "note": "영상 발표자료 캡처라서 화면 화질의 한계가 있습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "skku",
  "name": "성균관대",
  "years": "2025~2026학년도",
  "source": "[성균관대] 2026학년도 대입전형 결과.pdf",
  "origin": "성균관대학교 입학처 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부교과(추천인재)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학교장추천(학생부교과) · 2026학년도 명칭 · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-chucheon-1b.webp",
        "label": "결과표 1/2 (교과성적 50%·70% cut)",
        "pg": "원본 6쪽 발췌"
       },
       {
        "src": "img/skku/c-chucheon-2b.webp",
        "label": "결과표 2/2",
        "pg": "원본 7쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학교장추천(학생부교과) · 2025",
      "pages": [
       {
        "src": "img/skku/y25-chu6.webp",
        "label": "결과표(교과 50%·70% cut)",
        "pg": "원본 6쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(융합인재)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(융합형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-yunghap.webp",
        "label": "결과표",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합(융합형)",
      "pages": [
       {
        "src": "img/skku/y25-yung.webp",
        "label": "결과표(경쟁률·충원율)",
        "pg": "원본 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(탐구인재)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(탐구형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-tamgu.webp",
        "label": "결과표",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합(탐구형)",
      "pages": [
       {
        "src": "img/skku/y25-tam1.webp",
        "label": "결과표 1/2",
        "pg": "원본 2쪽 발췌"
       },
       {
        "src": "img/skku/y25-tam2.webp",
        "label": "결과표 2/2",
        "pg": "원본 3쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(성균인재)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(성균인재) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-skinjae.webp",
        "label": "결과표",
        "pg": "원본 3쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(과학인재)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(과학인재) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-gwahak.webp",
        "label": "결과표",
        "pg": "원본 3쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/skku/y25-gwa.webp",
        "label": "결과표(경쟁률·충원율)",
        "pg": "원본 3쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술위주(논술우수)수리형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술위주(수리형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-suri-1.webp",
        "label": "결과표 1/2",
        "pg": "원본 5쪽 발췌"
       },
       {
        "src": "img/skku/c-suri-2b.webp",
        "label": "결과표 2/2",
        "pg": "원본 6쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/skku/y25-non5.webp",
        "label": "결과표(경쟁률·충원율)",
        "pg": "원본 5쪽",
        "note": "2025학년도는 언어형·수리형 구분이 없는 단일 논술우수 전형이었습니다."
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술위주(논술우수)언어형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술위주(언어형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/skku/c-eoneo-b.webp",
        "label": "결과표",
        "pg": "원본 5쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/skku/y25-non5.webp",
        "label": "결과표(경쟁률·충원율)",
        "pg": "원본 5쪽",
        "note": "2025학년도는 언어형·수리형 구분이 없는 단일 논술우수 전형이었습니다."
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "hanyang",
  "name": "한양대(서울)",
  "years": "2024~2026학년도",
  "source": "[한양대] 2024~2026학년도 주요 전형 입시결과 _ 최종.pdf",
  "origin": "한양대학교 입시통계 가이드북 · 책 두 면이 한 페이지에 있는 스프레드 구성",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부교과(추천형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(추천형) · 2024학년도 데이터는 학생부교과(지역균형발전) 기준",
      "pages": [
       {
        "src": "img/hanyang/p-04.webp",
        "label": "경쟁률·추가합격(3개년)",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/hanyang/p-05.webp",
        "label": "내신등급·수능최저충족률",
        "pg": "원본 5쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(추천형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(추천형) · 2025학년도 신설",
      "pages": [
       {
        "src": "img/hanyang/c-chu.webp",
        "label": "결과표",
        "pg": "원본 6쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(서류형)",
      "pages": [
       {
        "src": "img/hanyang/c-seo-1.webp",
        "label": "결과표 1/2",
        "pg": "원본 6쪽 발췌"
       },
       {
        "src": "img/hanyang/c-seo-2.webp",
        "label": "결과표 2/2",
        "pg": "원본 7쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(면접형) · 2025학년도 신설",
      "pages": [
       {
        "src": "img/hanyang/c-myeon.webp",
        "label": "결과표",
        "pg": "원본 7쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술 전형 (논술 평균점수·수능최저충족률 포함)",
      "pages": [
       {
        "src": "img/hanyang/p-08.webp",
        "label": "결과표(3개년)",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "ewha",
  "name": "이화여대",
  "years": "2024~2026학년도",
  "source": "[이화여대] 2024-2026학년도_전형결과_입학콘서트_배부자료.pdf",
  "origin": "이화여자대학교 입학콘서트 배부자료(3개년 입결)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(고교추천전형)",
      "pages": [
       {
        "src": "img/ewha/p-03.webp",
        "label": "결과표 1/2",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/ewha/p-04.webp",
        "label": "결과표 2/2",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다. (당해 분포도도 없습니다.)"
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "미래인재전형-서류형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(미래인재전형-서류형)",
      "pages": [
       {
        "src": "img/ewha/p-05.webp",
        "label": "결과표 1/3",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/ewha/p-06.webp",
        "label": "결과표 2/3",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/ewha/p-07.webp",
        "label": "결과표 3/3",
        "pg": "원본 7쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다. (당해 분포도도 없습니다.)"
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "미래인재전형-면접형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(미래인재전형-면접형)",
      "pages": [
       {
        "src": "img/ewha/p-08.webp",
        "label": "결과표",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다. (당해 분포도도 없습니다.)"
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "reason": "이 자료에 논술 결과가 없습니다(자료 목차가 교과·종합·수능으로만 구성).",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다. (당해 분포도도 없습니다.)"
     }
    ]
   }
  ]
 },
 {
  "id": "cau",
  "name": "중앙대",
  "years": "2025~2026학년도",
  "source": "[중앙대] 교사 대상 결과 공유 세미나.pdf",
  "origin": "중앙대학교 교사 대상 결과 공유 세미나 자료 · 서울/다빈치 캠퍼스가 표 안에서 행으로 구분됩니다",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부교과(지역균형)(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형",
      "pages": [
       {
        "src": "img/cau/p-12.webp",
        "label": "경쟁률·충원율·교과등급",
        "pg": "원본 12쪽"
       },
       {
        "src": "img/cau/p-13.webp",
        "label": "수능최저 충족률",
        "pg": "원본 13쪽"
       },
       {
        "src": "img/cau/p-14.webp",
        "label": "교차지원 현황",
        "pg": "원본 14쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/cau/y25-news2.webp",
        "label": "2025 수시 입시결과 총괄표",
        "pg": "뉴스 2쪽 발췌",
        "note": "지역균형·CAU융합형인재·CAU탐구형인재·논술이 한 표에 열 그룹으로 실린 비카우스 뉴스(2025년 발행) 자료입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "학생부교과(지역균형)(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형",
      "pages": [
       {
        "src": "img/cau/p-11.webp",
        "label": "Summary(교과등급 변화 그래프 포함)",
        "pg": "원본 11쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(융합형인재)(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: CAU융합형인재 · 자료 p49에 2027학년도 명칭 개편(CAU융합형인재→융합형인재) 명시",
      "pages": [
       {
        "src": "img/cau/c-yung-sum.webp",
        "label": "전형 Review(요약표)",
        "pg": "원본 16쪽 발췌"
       },
       {
        "src": "img/cau/p-17.webp",
        "label": "인문계열 현황",
        "pg": "원본 17쪽"
       },
       {
        "src": "img/cau/p-19.webp",
        "label": "자연계열 현황",
        "pg": "원본 19쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/cau/y25-news2.webp",
        "label": "2025 수시 입시결과 총괄표",
        "pg": "뉴스 2쪽 발췌",
        "note": "지역균형·CAU융합형인재·CAU탐구형인재·논술이 한 표에 열 그룹으로 실린 비카우스 뉴스(2025년 발행) 자료입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(융합형인재)(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: CAU융합형인재 · 자료 p49에 2027학년도 명칭 개편(CAU융합형인재→융합형인재) 명시",
      "pages": [
       {
        "src": "img/cau/p-18.webp",
        "label": "인문계열 고교유형·등급 분포",
        "pg": "원본 18쪽",
        "dist": true
       },
       {
        "src": "img/cau/p-20.webp",
        "label": "자연계열 고교유형·등급 분포",
        "pg": "원본 20쪽",
        "dist": true
       },
       {
        "src": "img/cau/p-21.webp",
        "label": "예체능계열 현황·분포",
        "pg": "원본 21쪽",
        "dist": true
       },
       {
        "src": "img/cau/c-gyeyeol.webp",
        "label": "계열별 지원현황 추이 그래프",
        "pg": "원본 16쪽 발췌",
        "dist": true,
        "note": "융합형·탐구형 통합 그래프입니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(탐구형인재)(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: CAU탐구형인재 · 자료 p49에 2027학년도 명칭 개편 명시",
      "pages": [
       {
        "src": "img/cau/c-tam-sum.webp",
        "label": "전형 Review(요약표)",
        "pg": "원본 16쪽 발췌"
       },
       {
        "src": "img/cau/p-22.webp",
        "label": "인문계열 현황",
        "pg": "원본 22쪽"
       },
       {
        "src": "img/cau/p-24.webp",
        "label": "자연계열 현황",
        "pg": "원본 24쪽"
       },
       {
        "src": "img/cau/p-26.webp",
        "label": "면접 응시율",
        "pg": "원본 26쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/cau/y25-news2.webp",
        "label": "2025 수시 입시결과 총괄표",
        "pg": "뉴스 2쪽 발췌",
        "note": "지역균형·CAU융합형인재·CAU탐구형인재·논술이 한 표에 열 그룹으로 실린 비카우스 뉴스(2025년 발행) 자료입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(탐구형인재)(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: CAU탐구형인재 · 자료 p49에 2027학년도 명칭 개편 명시",
      "pages": [
       {
        "src": "img/cau/p-23.webp",
        "label": "인문계열 고교유형·등급 분포",
        "pg": "원본 23쪽",
        "dist": true
       },
       {
        "src": "img/cau/p-25.webp",
        "label": "자연계열 고교유형·등급 분포",
        "pg": "원본 25쪽",
        "dist": true
       },
       {
        "src": "img/cau/c-gyeyeol.webp",
        "label": "계열별 지원현황 추이 그래프",
        "pg": "원본 16쪽 발췌",
        "dist": true,
        "note": "융합형·탐구형 통합 그래프입니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(성장형인재)",
    "years": [
     {
      "y": "2026",
      "reason": "2027학년도 신설 전형이라 과거 결과가 없습니다(자료 p49에 신설로 명시).",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "해당 학년도 자료가 없습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술(일반형)(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술 · 2026학년도는 일반형·창의형 구분이 없는 단일 논술이었습니다",
      "pages": [
       {
        "src": "img/cau/p-29.webp",
        "label": "인문계열 현황",
        "pg": "원본 29쪽"
       },
       {
        "src": "img/cau/p-30.webp",
        "label": "자연계열 현황",
        "pg": "원본 30쪽"
       },
       {
        "src": "img/cau/p-31.webp",
        "label": "논술고사 성적",
        "pg": "원본 31쪽"
       },
       {
        "src": "img/cau/p-32.webp",
        "label": "교차지원 현황",
        "pg": "원본 32쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/cau/y25-news2.webp",
        "label": "2025 수시 입시결과 총괄표",
        "pg": "뉴스 2쪽 발췌",
        "note": "지역균형·CAU융합형인재·CAU탐구형인재·논술이 한 표에 열 그룹으로 실린 비카우스 뉴스(2025년 발행) 자료입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술(일반형)(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술 · 2026학년도는 일반형·창의형 구분이 없는 단일 논술이었습니다",
      "pages": [
       {
        "src": "img/cau/p-28.webp",
        "label": "Summary(수능최저 충족률 그래프)",
        "pg": "원본 28쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술(창의형)",
    "years": [
     {
      "y": "2026",
      "reason": "2027학년도 신설 전형이라 과거 결과가 없습니다(자료 p49에 신설로 명시).",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "해당 학년도 자료가 없습니다."
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "수시 전체 전형 총괄과 결과 요약",
      "pages": [
       {
        "src": "img/cau/p-06.webp",
        "label": "전형별 지원인원·경쟁률",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/cau/p-07.webp",
        "label": "경쟁률·충원율 변화",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/cau/p-08.webp",
        "label": "재학생·졸업생 비율 변화",
        "pg": "원본 8쪽"
       },
       {
        "src": "img/cau/n-01.webp",
        "label": "비카우스 뉴스 1/2(2026 수시 결과 요약)",
        "pg": "뉴스 1쪽"
       },
       {
        "src": "img/cau/n-02.webp",
        "label": "비카우스 뉴스 2/2(2026 수시 결과 요약)",
        "pg": "뉴스 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "khu",
  "name": "경희대",
  "years": "2025~2026학년도",
  "source": "[경희대]_2026 입시결과.pdf 외",
  "origin": "경희대학교 입학전형 통계자료(연도별 발행)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/khu/y26-jg-4.webp",
        "label": "결과표 1/3",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/khu/y26-jg-5.webp",
        "label": "결과표 2/3",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/khu/y26-jg-6.webp",
        "label": "결과표 3/3",
        "pg": "원본 6쪽"
       }
      ],
      "doc": "원본 표기: 학생부교과[지역균형전형]"
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/khu/y25-jg-4.webp",
        "label": "결과표 1/3",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/khu/y25-jg-5.webp",
        "label": "결과표 2/3",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/khu/y25-jg-6.webp",
        "label": "결과표 3/3",
        "pg": "원본 6쪽"
       }
      ],
      "doc": "원본 표기: 학생부교과[지역균형전형]"
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "네오르네상스전형",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/khu/y26-neo-8.webp",
        "label": "결과표 1/3",
        "pg": "원본 8쪽"
       },
       {
        "src": "img/khu/y26-neo-9.webp",
        "label": "결과표 2/3",
        "pg": "원본 9쪽"
       },
       {
        "src": "img/khu/y26-neo-10.webp",
        "label": "결과표 3/3",
        "pg": "원본 10쪽"
       }
      ],
      "doc": "원본 표기: 학생부종합[네오르네상스전형]"
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/khu/y25-neo-8.webp",
        "label": "결과표 1/3",
        "pg": "원본 8쪽"
       },
       {
        "src": "img/khu/y25-neo-9.webp",
        "label": "결과표 2/3",
        "pg": "원본 9쪽"
       },
       {
        "src": "img/khu/y25-neo-10.webp",
        "label": "결과표 3/3",
        "pg": "원본 10쪽"
       }
      ],
      "doc": "원본 표기: 학생부종합[네오르네상스전형]"
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "pages": [
       {
        "src": "img/khu/y26-non-20.webp",
        "label": "결과표 1/2",
        "pg": "원본 20쪽"
       },
       {
        "src": "img/khu/y26-non-21.webp",
        "label": "결과표 2/2",
        "pg": "원본 21쪽"
       }
      ],
      "doc": "원본 표기: 논술[논술우수자전형]"
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/khu/y25-non-20.webp",
        "label": "결과표 1/2",
        "pg": "원본 20쪽"
       },
       {
        "src": "img/khu/y25-non-21.webp",
        "label": "결과표 2/2",
        "pg": "원본 21쪽"
       }
      ],
      "doc": "원본 표기: 논술[논술우수자전형]"
     }
    ]
   }
  ]
 },
 {
  "id": "hufs",
  "name": "한국외대",
  "years": "2025~2026학년도",
  "source": "[한국외대] 학생부종합 가이드북 (입결 포함).pdf",
  "origin": "한국외국어대학교 2027 학생부전형 가이드북 중 전형 결과 섹션 · 서울캠퍼스와 글로벌캠퍼스가 페이지로 구분됩니다",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학교장추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(학교장추천전형)",
      "pages": [
       {
        "src": "img/hufs/p-30.webp",
        "label": "최근 2개년 현황(서울캠퍼스)",
        "pg": "원본 30쪽"
       },
       {
        "src": "img/hufs/p-31.webp",
        "label": "최근 2개년 현황(글로벌캠퍼스)",
        "pg": "원본 31쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합전형(면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형(면접형)",
      "pages": [
       {
        "src": "img/hufs/p-32.webp",
        "label": "최근 2개년 현황(서울캠퍼스)",
        "pg": "원본 32쪽"
       },
       {
        "src": "img/hufs/p-33.webp",
        "label": "최근 2개년 현황(글로벌캠퍼스)",
        "pg": "원본 33쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "2025학년도 등급분포(결과표 수치는 2026년 자료와 중복되어 제외)",
      "pages": [
       {
        "src": "img/hufs/y25-mj15.webp",
        "label": "지원자·합격자 등급분포(서울)",
        "pg": "원본 15쪽",
        "dist": true
       },
       {
        "src": "img/hufs/y25-mj16.webp",
        "label": "지원자·합격자 등급분포(글로벌)",
        "pg": "원본 16쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합전형(서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형(서류형)",
      "pages": [
       {
        "src": "img/hufs/p-34.webp",
        "label": "최근 2개년 현황(서울캠퍼스)",
        "pg": "원본 34쪽"
       },
       {
        "src": "img/hufs/p-35.webp",
        "label": "최근 2개년 현황(글로벌캠퍼스)",
        "pg": "원본 35쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "2025학년도 등급분포(결과표 수치는 2026년 자료와 중복되어 제외)",
      "pages": [
       {
        "src": "img/hufs/y25-sr17.webp",
        "label": "지원자·합격자 등급분포(서울)",
        "pg": "원본 17쪽",
        "dist": true
       },
       {
        "src": "img/hufs/y25-sr18.webp",
        "label": "지원자·합격자 등급분포(글로벌 · SW인재 포함)",
        "pg": "원본 18쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합전형(SW인재)",
    "years": [
     {
      "y": "2026",
      "reason": "가이드북에 SW인재전형의 결과표가 없습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/hufs/y25-sr18.webp",
        "label": "지원자·합격자 등급분포(글로벌 · 서류형과 통합)",
        "pg": "원본 18쪽",
        "dist": true
       },
       {
        "src": "img/hufs/y25-sw10.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 10쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "reason": "학생부전형 가이드북이라 논술 결과가 수록되어 있지 않습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/hufs/y25-no22.webp",
        "label": "결과표(서울, 2024~2025)",
        "pg": "원본 22쪽"
       },
       {
        "src": "img/hufs/y25-no23.webp",
        "label": "결과표(글로벌, 2024~2025)",
        "pg": "원본 23쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "최근 3개년 개요",
      "pages": [
       {
        "src": "img/hufs/p-29.webp",
        "label": "최근 3개년 현황 개요",
        "pg": "원본 29쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "uos",
  "name": "서울시립대",
  "years": "2025~2026학년도",
  "source": "[서울시립대] 붙임2~4 및 2025 성적 현황 PDF",
  "origin": "서울시립대학교 최종등록자 성적 현황 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형선발전형 · 2026학년도 명칭 (엑셀 2027 명칭은 고교추천)",
      "pages": [
       {
        "src": "img/uos/y26-b2c-R.webp",
        "label": "최종등록자 성적(발췌)",
        "pg": "붙임2 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 지역균형선발전형",
      "pages": [
       {
        "src": "img/uos/y25-b2c-R.webp",
        "label": "최종등록자 성적(발췌)",
        "pg": "2025 파일 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합전형Ⅰ(면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형Ⅰ",
      "note": "단일 표 안에서 전형이 열 그룹으로 구분된 자료입니다.",
      "pages": [
       {
        "src": "img/uos/y26-b3.webp",
        "label": "최종등록자 성적(종합Ⅰ·Ⅱ·기회균형 통합표)",
        "pg": "붙임3"
       },
       {
        "src": "img/uos/y26-b4.webp",
        "label": "고교유형별 성적(통합표)",
        "pg": "붙임4"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합전형Ⅰ",
      "note": "단일 표 안에서 전형이 열 그룹으로 구분된 자료입니다.",
      "pages": [
       {
        "src": "img/uos/y25-b4.webp",
        "label": "고교유형별 성적(통합표)",
        "pg": "2025 파일"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합전형Ⅱ(서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형Ⅱ",
      "note": "단일 표 안에서 전형이 열 그룹으로 구분된 자료입니다. 2026학년도 종합Ⅱ는 경영학부만 수치가 있습니다.",
      "pages": [
       {
        "src": "img/uos/y26-b3.webp",
        "label": "최종등록자 성적(통합표)",
        "pg": "붙임3"
       },
       {
        "src": "img/uos/y26-b4.webp",
        "label": "고교유형별 성적(통합표)",
        "pg": "붙임4"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합전형Ⅱ",
      "note": "단일 표 안에서 전형이 열 그룹으로 구분된 자료입니다.",
      "pages": [
       {
        "src": "img/uos/y25-b4.webp",
        "label": "고교유형별 성적(통합표)",
        "pg": "2025 파일"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/uos/y26-b2c-L.webp",
        "label": "최종등록자 성적(발췌)",
        "pg": "붙임2 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/uos/y25-b2c-L.webp",
        "label": "최종등록자 성적(발췌)",
        "pg": "2025 파일 발췌"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "konkuk",
  "name": "건국대",
  "years": "2025~2026학년도",
  "source": "[건국대] 2026학년도 입시결과_통합(게시용).pdf",
  "origin": "건국대학교 입학처 게시 자료 (최종등록자 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "KU지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(KU지역균형)",
      "pages": [
       {
        "src": "img/konkuk/p-01.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/konkuk/p-02.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부교과(KU지역균형)",
      "pages": [
       {
        "src": "img/konkuk/y25-jg1.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/konkuk/y25-jg2.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "KU자기추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(KU자기추천)",
      "pages": [
       {
        "src": "img/konkuk/p-03.webp",
        "label": "결과표 1/2",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/konkuk/p-04.webp",
        "label": "결과표 2/2",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합(KU자기추천)",
      "pages": [
       {
        "src": "img/konkuk/y25-jc3.webp",
        "label": "결과표 1/2",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/konkuk/y25-jc4.webp",
        "label": "결과표 2/2",
        "pg": "원본 4쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "KU논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(KU논술우수자)",
      "pages": [
       {
        "src": "img/konkuk/p-08.webp",
        "label": "결과표",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술(KU논술우수자)",
      "pages": [
       {
        "src": "img/konkuk/y25-non6.webp",
        "label": "결과표",
        "pg": "원본 6쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "dongguk",
  "name": "동국대(서울)",
  "years": "2025~2026학년도",
  "source": "[동국대(서울)]_2026 입시결과.pdf",
  "origin": "동국대학교 입학처 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학교장추천인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: [학생부교과] 학교장추천인재",
      "pages": [
       {
        "src": "img/dongguk/p-08.webp",
        "label": "결과표",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongguk/y25-p6.webp",
        "label": "주요 전형별 학생부 교과성적(2025)",
        "pg": "원본 6쪽",
        "note": "주요 전형(Do Dream·불교추천·학교장추천)의 교과성적이 한 표에 있습니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "Do Dream전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: [학생부종합] Do Dream",
      "pages": [
       {
        "src": "img/dongguk/p-07.webp",
        "label": "결과표",
        "pg": "원본 7쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongguk/y25-p6.webp",
        "label": "주요 전형별 학생부 교과성적(2025)",
        "pg": "원본 6쪽",
        "note": "주요 전형(Do Dream·불교추천·학교장추천)의 교과성적이 한 표에 있습니다."
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/dongguk/p-12.webp",
        "label": "결과표",
        "pg": "원본 12쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/dongguk/p-13.webp",
        "label": "수능 과목별 등급 분포",
        "pg": "원본 13쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongguk/y25-p13.webp",
        "label": "최종등록자 수능 과목별 등급 분포(2025)",
        "pg": "원본 13쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "수시 전체 전형 총괄 통계",
      "pages": [
       {
        "src": "img/dongguk/p-04.webp",
        "label": "수시 전형별 경쟁률(3개년)",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/dongguk/p-06.webp",
        "label": "주요 전형별 학생부 교과성적",
        "pg": "원본 6쪽",
        "note": "학교장추천인재·Do Dream 등 주요 전형의 등급이 한 표에 있습니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "sookmyung",
  "name": "숙명여대",
  "years": "2025~2026학년도",
  "source": "[숙명여대] 전형 결과 PDF 2건",
  "origin": "숙명여자대학교 입학처 공개 자료 (전체합격자 평균 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형선발전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: [학생부교과] 지역균형선발전형",
      "pages": [
       {
        "src": "img/sookmyung/f1-02.webp",
        "label": "결과표",
        "pg": "파일1 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sookmyung/y25-jg.webp",
        "label": "결과표",
        "pg": "파일 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "숙명인재(면접형)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: [학생부종합] 숙명인재(면접형)전형 · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/sookmyung/c-myeon.webp",
        "label": "결과표",
        "pg": "파일2 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sookmyung/y25-mj.webp",
        "label": "결과표",
        "pg": "파일 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "소프트웨어인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: [학생부종합] 소프트웨어인재전형 · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/sookmyung/c-sw.webp",
        "label": "결과표",
        "pg": "파일2 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sookmyung/y25-sw.webp",
        "label": "결과표",
        "pg": "파일 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "reason": "입학처 공개 자료에 이 전형의 결과가 없습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "해당 학년도 자료가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "kookmin",
  "name": "국민대",
  "years": "2026학년도",
  "source": "[국민대] 26학년도 입시결과(입학처 페이지 추출).xlsx",
  "origin": "국민대학교 입학처 페이지 추출 자료 · 원본 엑셀을 서식 그대로 PDF로 변환해 수록",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "교과우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 교과성적우수자 (2026학년도 명칭)",
      "pages": [
       {
        "src": "img/kookmin/ky-01.webp",
        "label": "결과표 1/2",
        "pg": "변환 1쪽"
       },
       {
        "src": "img/kookmin/ky-02.webp",
        "label": "결과표 2/2",
        "pg": "변환 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "국민프런티어전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 국민프런티어",
      "pages": [
       {
        "src": "img/kookmin/fr-01.webp",
        "label": "결과표 1/2",
        "pg": "변환 1쪽"
       },
       {
        "src": "img/kookmin/fr-02.webp",
        "label": "결과표 2/2",
        "pg": "변환 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "국제인재전형",
    "years": [
     {
      "y": "2026",
      "reason": "입학처 공개 자료에 이 전형의 결과가 없습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "알고리즘우수자전형",
    "years": [
     {
      "y": "2026",
      "reason": "입학처 공개 자료에 이 전형의 결과가 없습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "reason": "입학처 공개 자료에 이 전형의 결과가 없습니다.",
      "pages": []
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025학년도 발표 자료가 아직 제공되지 않았습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "soongsil",
  "name": "숭실대",
  "years": "2025~2026학년도",
  "source": "[숭실대] 2027학년도 숭실대학교 입학전형 통계(양면).pdf",
  "origin": "숭실대학교 2027 입학전형 통계집(2026학년도 결과) · 책 두 면이 한 페이지에 있는 스프레드 구성",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "교과우수자(학교장추천)전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 교과우수자전형(구 학생부우수자전형)",
      "pages": [
       {
        "src": "img/soongsil/c-gyo-6L.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 6쪽 왼면"
       },
       {
        "src": "img/soongsil/c-gyo-7L.webp",
        "label": "결과표(자연·자유전공)",
        "pg": "원본 7쪽 왼면"
       },
       {
        "src": "img/soongsil/c-gyo-8L.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 8쪽 왼면"
       },
       {
        "src": "img/soongsil/c-gyo-8R.webp",
        "label": "3개년 추이",
        "pg": "원본 8쪽 오른면"
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도 명칭은 학생부우수자전형입니다(2027학년도에 교과우수자로 변경).",
      "pages": [
       {
        "src": "img/soongsil/y25-gy28.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 28쪽"
       },
       {
        "src": "img/soongsil/y25-gy30.webp",
        "label": "결과표(자연·자유전공)",
        "pg": "원본 30쪽"
       },
       {
        "src": "img/soongsil/y25-gy32.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 32쪽"
       },
       {
        "src": "img/soongsil/y25-gy33.webp",
        "label": "3개년 추이(2023~2025)",
        "pg": "원본 33쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "교과우수자(학교장추천)전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 교과우수자전형 · 주요교과 평균 등급 분포",
      "pages": [
       {
        "src": "img/soongsil/c-gyo-6R.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 6쪽 오른면",
        "dist": true
       },
       {
        "src": "img/soongsil/c-gyo-7R.webp",
        "label": "등급 분포(자연·자유전공)",
        "pg": "원본 7쪽 오른면",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도 명칭은 학생부우수자전형입니다(2027학년도에 교과우수자로 변경).",
      "pages": [
       {
        "src": "img/soongsil/y25-gy29.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 29쪽",
        "dist": true
       },
       {
        "src": "img/soongsil/y25-gy31.webp",
        "label": "등급 분포(자연·자유전공)",
        "pg": "원본 31쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SSU미래인재(면접형)전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SSU미래인재전형",
      "note": "2026학년도까지는 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다(2027학년도 이원화). 아래는 단일형 기준 결과입니다.",
      "pages": [
       {
        "src": "img/soongsil/c-mi-3L.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 3쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-4L.webp",
        "label": "결과표(자연)",
        "pg": "원본 4쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-5L.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 5쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-5R.webp",
        "label": "3개년 추이",
        "pg": "원본 5쪽 오른면"
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도에도 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다.",
      "pages": [
       {
        "src": "img/soongsil/y25-mi22.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 22쪽"
       },
       {
        "src": "img/soongsil/y25-mi24.webp",
        "label": "결과표(자연)",
        "pg": "원본 24쪽"
       },
       {
        "src": "img/soongsil/y25-mi26.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 26쪽"
       },
       {
        "src": "img/soongsil/y25-mi27.webp",
        "label": "3개년 추이(2023~2025)",
        "pg": "원본 27쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SSU미래인재(면접형)전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SSU미래인재전형 · 주요교과 평균 등급 분포",
      "note": "2026학년도까지는 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다(2027학년도 이원화). 아래는 단일형 기준 결과입니다.",
      "pages": [
       {
        "src": "img/soongsil/c-mi-3R.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 3쪽 오른면",
        "dist": true
       },
       {
        "src": "img/soongsil/c-mi-4R.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 4쪽 오른면",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도에도 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다.",
      "pages": [
       {
        "src": "img/soongsil/y25-mi23.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 23쪽",
        "dist": true
       },
       {
        "src": "img/soongsil/y25-mi25.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 25쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SSU미래인재(서류형)전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SSU미래인재전형",
      "note": "서류형은 2027학년도 신설 전형입니다. 2026학년도까지는 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다(2027학년도 이원화). 아래는 단일형 기준 결과입니다.",
      "pages": [
       {
        "src": "img/soongsil/c-mi-3L.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 3쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-4L.webp",
        "label": "결과표(자연)",
        "pg": "원본 4쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-5L.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 5쪽 왼면"
       },
       {
        "src": "img/soongsil/c-mi-5R.webp",
        "label": "3개년 추이",
        "pg": "원본 5쪽 오른면"
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도에도 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다.",
      "pages": [
       {
        "src": "img/soongsil/y25-mi22.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 22쪽"
       },
       {
        "src": "img/soongsil/y25-mi24.webp",
        "label": "결과표(자연)",
        "pg": "원본 24쪽"
       },
       {
        "src": "img/soongsil/y25-mi26.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 26쪽"
       },
       {
        "src": "img/soongsil/y25-mi27.webp",
        "label": "3개년 추이(2023~2025)",
        "pg": "원본 27쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SSU미래인재(서류형)전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SSU미래인재전형 · 주요교과 평균 등급 분포",
      "note": "서류형은 2027학년도 신설 전형입니다. 2026학년도까지는 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다(2027학년도 이원화). 아래는 단일형 기준 결과입니다.",
      "pages": [
       {
        "src": "img/soongsil/c-mi-3R.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 3쪽 오른면",
        "dist": true
       },
       {
        "src": "img/soongsil/c-mi-4R.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 4쪽 오른면",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "note": "2025학년도에도 면접·서류 구분이 없는 단일 SSU미래인재전형이었습니다.",
      "pages": [
       {
        "src": "img/soongsil/y25-mi23.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 23쪽",
        "dist": true
       },
       {
        "src": "img/soongsil/y25-mi25.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 25쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SW우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SW우수자전형",
      "pages": [
       {
        "src": "img/soongsil/c-sw-13L.webp",
        "label": "결과표·고교유형·3개년 추이",
        "pg": "원본 13쪽 왼면"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/soongsil/y25-sw42.webp",
        "label": "결과표·고교유형·3개년 추이",
        "pg": "원본 42쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술우수자전형",
      "pages": [
       {
        "src": "img/soongsil/c-non-9L.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 9쪽 왼면"
       },
       {
        "src": "img/soongsil/c-non-10L.webp",
        "label": "결과표(자연)",
        "pg": "원본 10쪽 왼면"
       },
       {
        "src": "img/soongsil/c-non-11L.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 11쪽 왼면"
       },
       {
        "src": "img/soongsil/c-non-11R.webp",
        "label": "3개년 추이",
        "pg": "원본 11쪽 오른면"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/soongsil/y25-no34.webp",
        "label": "결과표(인문·경상)",
        "pg": "원본 34쪽"
       },
       {
        "src": "img/soongsil/y25-no36.webp",
        "label": "결과표(자연)",
        "pg": "원본 36쪽"
       },
       {
        "src": "img/soongsil/y25-no38.webp",
        "label": "한눈에 보는 통계",
        "pg": "원본 38쪽"
       },
       {
        "src": "img/soongsil/y25-no39.webp",
        "label": "3개년 추이(2023~2025)",
        "pg": "원본 39쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술우수자전형 · 주요교과 평균 등급 분포",
      "pages": [
       {
        "src": "img/soongsil/c-non-9R.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 9쪽 오른면",
        "dist": true
       },
       {
        "src": "img/soongsil/c-non-10R.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 10쪽 오른면",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/soongsil/y25-no35.webp",
        "label": "등급 분포(인문·경상)",
        "pg": "원본 35쪽",
        "dist": true
       },
       {
        "src": "img/soongsil/y25-no37.webp",
        "label": "등급 분포(자연)",
        "pg": "원본 37쪽",
        "dist": true
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "sejong",
  "name": "세종대",
  "years": "2025~2026학년도",
  "source": "[세종대] 공지용_2027학년도수시모집입시상담자료.pdf",
  "origin": "세종대학교 2027 수시 입시상담 자료(2026학년도 입시결과)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형",
      "pages": [
       {
        "src": "img/sejong/p-02.webp",
        "label": "결과표",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sejong/y25-p2.webp",
        "label": "결과표",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "세종인재전형(면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 세종창의인재(면접형) · 2027학년도에 세종인재로 명칭 변경",
      "pages": [
       {
        "src": "img/sejong/p-04.webp",
        "label": "결과표",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 세종창의인재(면접형) · 2025",
      "pages": [
       {
        "src": "img/sejong/y25-p3.webp",
        "label": "결과표",
        "pg": "원본 3쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "세종인재전형(서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 세종창의인재(서류형) · 2027학년도에 세종인재로 명칭 변경",
      "pages": [
       {
        "src": "img/sejong/p-05.webp",
        "label": "결과표",
        "pg": "원본 5쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 세종창의인재(서류형) · 2025",
      "pages": [
       {
        "src": "img/sejong/y25-p4.webp",
        "label": "결과표",
        "pg": "원본 4쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술우수자",
      "pages": [
       {
        "src": "img/sejong/p-09.webp",
        "label": "결과표",
        "pg": "원본 9쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sejong/y25-p7.webp",
        "label": "결과표(논술고사 성적 포함)",
        "pg": "원본 7쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "dankook",
  "name": "단국대(죽전)",
  "years": "2025~2026학년도",
  "source": "[단국대(죽전)]_2026학년도 단국대학교 수시모집 입시결과(죽전캠퍼스).pdf",
  "origin": "단국대학교 입학처 공개 자료 · 전 전형이 하나의 연속 표로 구성되어 페이지에 여러 전형이 섞여 있습니다",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형선발전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형선발 (정원내) · 연속 표에서 이 전형의 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/c-jiyun-12.webp",
        "label": "결과표 1/2",
        "pg": "원본 5쪽 발췌"
       },
       {
        "src": "img/dankook/c-jiyun-22.webp",
        "label": "결과표 2/2",
        "pg": "원본 6쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 지역균형선발 · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-jg6.webp",
        "label": "결과표 1/1",
        "pg": "원본 6쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "DKU인재(면접형)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: DKU인재(면접형) · 연속 표에서 이 전형의 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/c-myeon-12.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽 발췌"
       },
       {
        "src": "img/dankook/c-myeon-22.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: DKU인재(면접형) · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-mj1.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽 발췌"
       },
       {
        "src": "img/dankook/y25-mj2.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "DKU인재(서류형)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: DKU인재(서류형) · 연속 표에서 이 전형의 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/c-seoryu2.webp",
        "label": "결과표",
        "pg": "원본 1쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: DKU인재(서류형) · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-sr1.webp",
        "label": "결과표 1/1",
        "pg": "원본 1쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SW인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: SW인재 · 연속 표에서 이 전형의 행만 발췌(모집단위 1개)",
      "pages": [
       {
        "src": "img/dankook/c-sw2.webp",
        "label": "결과표",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: SW인재 · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-sw2.webp",
        "label": "결과표 1/1",
        "pg": "원본 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "창업인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 창업인재 · 연속 표에서 이 전형의 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/c-changup2.webp",
        "label": "결과표",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 창업인재 · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-ch2.webp",
        "label": "결과표 1/1",
        "pg": "원본 2쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술우수자 · 연속 표에서 이 전형의 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/c-nonsul2.webp",
        "label": "결과표",
        "pg": "원본 6쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술우수자 · 연속 표에서 해당 행만 발췌",
      "pages": [
       {
        "src": "img/dankook/y25-non6.webp",
        "label": "결과표 1/2",
        "pg": "원본 6쪽 발췌"
       },
       {
        "src": "img/dankook/y25-non7.webp",
        "label": "결과표 2/2",
        "pg": "원본 7쪽 발췌"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "sungshin",
  "name": "성신여대",
  "years": "2025~2026학년도",
  "source": "[성신여대] 2026학년도 신입학 전형통계.pdf",
  "origin": "성신여자대학교 입학처 전형통계",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(지역균형전형)",
      "pages": [
       {
        "src": "img/sungshin/p-04.webp",
        "label": "최종 결과표",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sungshin/y25-p7.webp",
        "label": "최종 결과표",
        "pg": "원본 7쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "자기주도인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(자기주도인재전형) · 해당 행만 발췌",
      "pages": [
       {
        "src": "img/sungshin/c-jagi1b.webp",
        "label": "1단계 결과표",
        "pg": "원본 1쪽 발췌"
       },
       {
        "src": "img/sungshin/c-jagi2b.webp",
        "label": "최종 결과표",
        "pg": "원본 2쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sungshin/y25-p3.webp",
        "label": "1단계 결과표",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/sungshin/y25-p4.webp",
        "label": "최종 결과표",
        "pg": "원본 4쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자전형)",
      "pages": [
       {
        "src": "img/sungshin/p-06.webp",
        "label": "최종 결과표",
        "pg": "원본 6쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sungshin/y25-p9.webp",
        "label": "최종 결과표",
        "pg": "원본 9쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "inha",
  "name": "인하대",
  "years": "2025~2026학년도",
  "source": "[인하대] 2027학년도 대학입학전형 및 2026학년도 입시결과 안내(공개용).pdf",
  "origin": "인하대학교 입학처 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(지역균형)전형",
      "pages": [
       {
        "src": "img/inha/p-11.webp",
        "label": "결과 기준 안내·결과표",
        "pg": "원본 11쪽"
       },
       {
        "src": "img/inha/p-12.webp",
        "label": "결과표(계속)",
        "pg": "원본 12쪽"
       }
      ]
     },
     {
      "y": "2025",
      "note": "대입정보포털 어디가 화면을 인쇄한 자료입니다.",
      "pages": [
       {
        "src": "img/inha/y25-p4.webp",
        "label": "결과표 1/2",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/inha/y25-p5.webp",
        "label": "결과표 2/2",
        "pg": "원본 5쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "인하미래인재(면접형)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(인하미래인재(면접형))",
      "pages": [
       {
        "src": "img/inha/p-07.webp",
        "label": "결과 기준 안내·결과표",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/inha/p-08.webp",
        "label": "결과표(계속)",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "note": "대입정보포털 어디가(adiga.kr) 화면을 인쇄한 자료이며, 면접형·서류형 구분 없는 통합 인하미래인재 결과입니다.",
      "pages": [
       {
        "src": "img/inha/y25-p1.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/inha/y25-p2.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "인하미래인재(서류형)전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(인하미래인재(서류형))",
      "pages": [
       {
        "src": "img/inha/p-09.webp",
        "label": "결과표",
        "pg": "원본 9쪽"
       }
      ]
     },
     {
      "y": "2025",
      "note": "대입정보포털 어디가(adiga.kr) 화면을 인쇄한 자료이며, 면접형·서류형 구분 없는 통합 인하미래인재 결과입니다.",
      "pages": [
       {
        "src": "img/inha/y25-p1.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/inha/y25-p2.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자)전형",
      "pages": [
       {
        "src": "img/inha/p-14.webp",
        "label": "결과 기준 안내·결과표",
        "pg": "원본 14쪽"
       },
       {
        "src": "img/inha/p-15.webp",
        "label": "결과표(계속)",
        "pg": "원본 15쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "ajou",
  "name": "아주대",
  "years": "2024~2026학년도",
  "source": "[아주대] 2024-2026 입시결과_홈페이지 공지용.pdf",
  "origin": "아주대학교 입학처 홈페이지 공지 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과전형 입시결과｜고교추천전형",
      "pages": [
       {
        "src": "img/ajou/p-06.webp",
        "label": "전형 결과표(2024~2026)",
        "pg": "원본 6쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "ACE전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형 입시결과｜ACE전형",
      "pages": [
       {
        "src": "img/ajou/p-07.webp",
        "label": "전형 결과표(2024~2026)",
        "pg": "원본 7쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "ACE전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형 입시결과｜ACE전형",
      "pages": [
       {
        "src": "img/ajou/p-08.webp",
        "label": "1단계 합격자 내신 분포(2026)",
        "pg": "원본 8쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "첨단융합인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합전형 입시결과｜첨단융합인재전형",
      "pages": [
       {
        "src": "img/ajou/p-09.webp",
        "label": "전형 결과표(2024~2026)",
        "pg": "원본 9쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "논술 점수·등급 열이 포함된 결과표 · 원본 페이지에 전형명 표기가 없어 열 구성을 근거로 분류했습니다",
      "pages": [
       {
        "src": "img/ajou/p-10.webp",
        "label": "전형 결과표(2024~2026)",
        "pg": "원본 10쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료의 결과 수치가 2026년 자료(다개년 수록)와 중복되어, 확정된 원칙에 따라 제외했습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "seoultech",
  "name": "서울과기대",
  "years": "2025~2026학년도",
  "source": "[서울과기대] 2026학년도 입시결과.pdf",
  "origin": "서울과학기술대학교 입학처 공개 자료 (최종등록 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(고교추천전형)",
      "pages": [
       {
        "src": "img/seoultech/p-04.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/seoultech/p-11.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 11쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/seoultech/y25-p4.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/seoultech/y25-p11.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 11쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학교생활우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(학교생활우수자전형)",
      "pages": [
       {
        "src": "img/seoultech/p-05.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/seoultech/p-12.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 12쪽",
        "note": "창의융합인재전형과 통합된 표입니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/seoultech/y25-p5.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/seoultech/y25-p12.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 12쪽",
        "note": "창의융합인재전형과 통합된 표입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "창의융합인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(창의융합인재전형)",
      "pages": [
       {
        "src": "img/seoultech/p-06.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/seoultech/p-12.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 12쪽",
        "note": "학교생활우수자전형과 통합된 표입니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/seoultech/y25-p6c.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 6쪽 발췌"
       },
       {
        "src": "img/seoultech/y25-p12.webp",
        "label": "입시 결과(등급)",
        "pg": "원본 12쪽",
        "note": "학교생활우수자전형과 통합된 표입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술위주(논술전형)",
      "pages": [
       {
        "src": "img/seoultech/p-10.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 10쪽",
        "note": "이 자료에는 논술 전형의 등급표가 없습니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/seoultech/y25-p10.webp",
        "label": "경쟁률·추합률·등록률",
        "pg": "원본 10쪽"
       },
       {
        "src": "img/seoultech/y25-p14c.webp",
        "label": "입시 결과(등급·논술점수)",
        "pg": "원본 14쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "고교 유형별 입학생 현황",
      "pages": [
       {
        "src": "img/seoultech/p-02.webp",
        "label": "고교 유형별 입학생 현황(전체·전형별)",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/seoultech/y25-p2.webp",
        "label": "고교 유형별 입학생 현황",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "erica",
  "name": "한양대 ERICA",
  "years": "2024~2026학년도",
  "source": "[한양대 에리카] 2024-2026학년도입시결과및선발현황(최종).pdf",
  "origin": "한양대학교 ERICA 입학처 공개 자료 · 책 두 면이 한 페이지에 있는 스프레드 구성",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부교과(지역균형선발)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(지역균형선발)전형",
      "pages": [
       {
        "src": "img/erica/p-03.webp",
        "label": "결과표(3개년)",
        "pg": "원본 3쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(서류형, 면접형) 통합 결과표",
      "pages": [
       {
        "src": "img/erica/p-05.webp",
        "label": "결과표(3개년)",
        "pg": "원본 5쪽",
        "note": "서류형과 면접형이 하나의 표에 통합 수록되어 있습니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/erica/y25-dist.webp",
        "label": "학생부종합전형 등급분포도(2025)",
        "pg": "원본 27쪽(스프레드)",
        "dist": true,
        "note": "서류형·면접형 구분 없는 통합 분포도입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학생부종합(면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(서류형, 면접형) 통합 결과표",
      "pages": [
       {
        "src": "img/erica/p-05.webp",
        "label": "결과표(3개년)",
        "pg": "원본 5쪽",
        "note": "서류형과 면접형이 하나의 표에 통합 수록되어 있습니다."
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/erica/y25-dist.webp",
        "label": "학생부종합전형 등급분포도(2025)",
        "pg": "원본 27쪽(스프레드)",
        "dist": true,
        "note": "서류형·면접형 구분 없는 통합 분포도입니다."
       }
      ]
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "경쟁률·충원율·등록률 선발 현황",
      "pages": [
       {
        "src": "img/erica/p-13.webp",
        "label": "선발 현황(경쟁률·충원율·등록률)",
        "pg": "원본 13쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에 이 전형의 결과가 없습니다."
     }
    ]
   }
  ]
 },
 {
  "id": "kwangwoon",
  "name": "광운대",
  "years": "2025~2026학년도",
  "source": "[광운대] 2026 신입학-수시-입시결과-70컷.pdf",
  "origin": "광운대학교 입학처 공개 자료 (70% cut 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(지역균형전형)",
      "pages": [
       {
        "src": "img/kwangwoon/p-05.webp",
        "label": "결과표",
        "pg": "원본 5쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kwangwoon/y25-p5.webp",
        "label": "결과표(최종등록자 70% cut)",
        "pg": "원본 5쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "광운참빛인재전형 I (면접형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(광운참빛인재전형-면접형)",
      "pages": [
       {
        "src": "img/kwangwoon/p-01.webp",
        "label": "결과표",
        "pg": "원본 1쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kwangwoon/y25-p1.webp",
        "label": "결과표(최종등록자 70% cut)",
        "pg": "원본 1쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "광운참빛인재전형 II (서류형)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(광운참빛인재전형-서류형)",
      "pages": [
       {
        "src": "img/kwangwoon/p-02.webp",
        "label": "결과표",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kwangwoon/y25-p2.webp",
        "label": "결과표(최종등록자 70% cut)",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "소프트웨어우수인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(소프트웨어우수인재전형)",
      "pages": [
       {
        "src": "img/kwangwoon/p-03.webp",
        "label": "결과표",
        "pg": "원본 3쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kwangwoon/y25-p3.webp",
        "label": "결과표(최종등록자 70% cut)",
        "pg": "원본 3쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자전형)",
      "pages": [
       {
        "src": "img/kwangwoon/p-06.webp",
        "label": "결과표",
        "pg": "원본 6쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kwangwoon/y25-p6.webp",
        "label": "결과표(최종등록자 70% cut)",
        "pg": "원본 6쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "myongji",
  "name": "명지대",
  "years": "2025~2026학년도",
  "source": "[명지대] 2026학년도 수시모집 입시결과_공지용.pdf",
  "origin": "명지대학교 입학처 공지 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학교장추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학교장추천",
      "pages": [
       {
        "src": "img/myongji/p-01.webp",
        "label": "결과표(인문)",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/myongji/p-02.webp",
        "label": "결과표(자연)",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/myongji/y25-p1.webp",
        "label": "결과표",
        "pg": "원본 1쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "교과면접전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 교과면접",
      "pages": [
       {
        "src": "img/myongji/p-03.webp",
        "label": "결과표(인문)",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/myongji/p-04.webp",
        "label": "결과표(자연)",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/myongji/y25-p2.webp",
        "label": "결과표",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "명지인재면접전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 명지인재면접",
      "pages": [
       {
        "src": "img/myongji/p-10.webp",
        "label": "결과표",
        "pg": "원본 10쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/myongji/y25-p8.webp",
        "label": "결과표",
        "pg": "원본 8쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "명지인재서류전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 명지인재서류",
      "pages": [
       {
        "src": "img/myongji/p-11.webp",
        "label": "결과표",
        "pg": "원본 11쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/myongji/y25-p9.webp",
        "label": "결과표",
        "pg": "원본 9쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "sangmyung",
  "name": "상명대(서울)",
  "years": "2025~2026학년도",
  "source": "[상명대] 2026학년도 입결.pdf",
  "origin": "상명대학교 입학처 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(고교추천전형)",
      "pages": [
       {
        "src": "img/sangmyung/p-01.webp",
        "label": "성적 결과표",
        "pg": "원본 1쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sangmyung/y25-p1.webp",
        "label": "성적 결과표",
        "pg": "원본 1쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "상명인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(상명인재전형)",
      "pages": [
       {
        "src": "img/sangmyung/p-02.webp",
        "label": "성적 결과표",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sangmyung/y25-p2.webp",
        "label": "성적 결과표",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술전형)",
      "pages": [
       {
        "src": "img/sangmyung/p-04.webp",
        "label": "성적 결과표",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/sangmyung/y25-p4.webp",
        "label": "성적 결과표",
        "pg": "원본 4쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "catholic",
  "name": "가톨릭대",
  "years": "2024~2026학년도",
  "source": "[가톨릭대] 유튜브 라이브 캡처.pdf",
  "origin": "가톨릭대학교 입학처 유튜브 라이브 발표자료 캡처",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "지역균형전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과 지역균형전형",
      "pages": [
       {
        "src": "img/catholic/p-14.webp",
        "label": "경쟁률·수능충족률(인문사회)",
        "pg": "원본 14쪽"
       },
       {
        "src": "img/catholic/p-15.webp",
        "label": "경쟁률·수능충족률(자연공학)",
        "pg": "원본 15쪽"
       },
       {
        "src": "img/catholic/p-20.webp",
        "label": "교과등급 결과(인문사회)",
        "pg": "원본 20쪽"
       },
       {
        "src": "img/catholic/p-21.webp",
        "label": "교과등급 결과(자연공학)",
        "pg": "원본 21쪽"
       },
       {
        "src": "img/catholic/p-23.webp",
        "label": "연도별 최고·평균·최저(인문사회)",
        "pg": "원본 23쪽"
       },
       {
        "src": "img/catholic/p-24.webp",
        "label": "연도별 최고·평균·최저(자연공학)",
        "pg": "원본 24쪽"
       },
       {
        "src": "img/catholic/p-25.webp",
        "label": "자유전공·광역 등록자 성적",
        "pg": "원본 25쪽"
       },
       {
        "src": "img/catholic/p-26.webp",
        "label": "자유전공·광역 지원 현황",
        "pg": "원본 26쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부교과(지역균형전형) · 2025 결과자료집",
      "pages": [
       {
        "src": "img/catholic/y25-jg5.webp",
        "label": "경쟁률·충족·충원",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/catholic/y25-jg6.webp",
        "label": "교과성적 통계",
        "pg": "원본 6쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "지역균형전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과 지역균형전형",
      "pages": [
       {
        "src": "img/catholic/p-16.webp",
        "label": "수능충족률 그래프(인문사회)",
        "pg": "원본 16쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-17.webp",
        "label": "수능충족률 그래프(자연공학)",
        "pg": "원본 17쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-18.webp",
        "label": "실질경쟁률 그래프(인문사회)",
        "pg": "원본 18쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-19.webp",
        "label": "실질경쟁률 그래프(자연공학)",
        "pg": "원본 19쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-22.webp",
        "label": "성적분포 산점도",
        "pg": "원본 22쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부교과(지역균형전형) · 2025 결과자료집",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "잠재능력우수자서류전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 잠재능력우수자서류전형",
      "pages": [
       {
        "src": "img/catholic/p-32.webp",
        "label": "경쟁률·충원율(인문사회)",
        "pg": "원본 32쪽"
       },
       {
        "src": "img/catholic/p-33.webp",
        "label": "경쟁률·충원율(자연공학)",
        "pg": "원본 33쪽"
       },
       {
        "src": "img/catholic/p-34.webp",
        "label": "광역 지원 현황(2025 면접형과 비교)",
        "pg": "원본 34쪽"
       },
       {
        "src": "img/catholic/p-35.webp",
        "label": "교과등급(인문사회)",
        "pg": "원본 35쪽"
       },
       {
        "src": "img/catholic/p-36.webp",
        "label": "교과등급(자연공학)",
        "pg": "원본 36쪽"
       },
       {
        "src": "img/catholic/p-45.webp",
        "label": "잠재서류 vs 잠재면접 성적분포 비교(인문사회)",
        "pg": "원본 45쪽"
       },
       {
        "src": "img/catholic/p-46.webp",
        "label": "잠재서류 vs 잠재면접 성적분포 비교(자연공학)",
        "pg": "원본 46쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 잠재능력우수자전형(서류형)",
      "pages": [
       {
        "src": "img/catholic/y25-js7.webp",
        "label": "경쟁률·충원율",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/catholic/y25-js8.webp",
        "label": "교과성적 통계",
        "pg": "원본 8쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "잠재능력우수자서류전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 잠재능력우수자서류전형",
      "pages": [
       {
        "src": "img/catholic/p-37.webp",
        "label": "성적분포 산점도",
        "pg": "원본 37쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-38.webp",
        "label": "실질경쟁률 그래프(인문사회)",
        "pg": "원본 38쪽",
        "dist": true
       },
       {
        "src": "img/catholic/p-39.webp",
        "label": "실질경쟁률 그래프(자연공학)",
        "pg": "원본 39쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 잠재능력우수자전형(서류형)",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "잠재능력우수자면접전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 잠재능력우수자면접전형",
      "pages": [
       {
        "src": "img/catholic/p-40.webp",
        "label": "경쟁률·면접결시율·충원율(인문사회)",
        "pg": "원본 40쪽"
       },
       {
        "src": "img/catholic/p-41.webp",
        "label": "경쟁률·면접결시율·충원율(자연공학)",
        "pg": "원본 41쪽"
       },
       {
        "src": "img/catholic/p-42.webp",
        "label": "교과등급(인문사회)",
        "pg": "원본 42쪽"
       },
       {
        "src": "img/catholic/p-43.webp",
        "label": "교과등급(자연공학)",
        "pg": "원본 43쪽"
       },
       {
        "src": "img/catholic/p-45.webp",
        "label": "잠재서류 vs 잠재면접 성적분포 비교(인문사회)",
        "pg": "원본 45쪽"
       },
       {
        "src": "img/catholic/p-46.webp",
        "label": "잠재서류 vs 잠재면접 성적분포 비교(자연공학)",
        "pg": "원본 46쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 잠재능력우수자면접전형",
      "pages": [
       {
        "src": "img/catholic/y25-jm9.webp",
        "label": "경쟁률",
        "pg": "원본 9쪽"
       },
       {
        "src": "img/catholic/y25-jm10.webp",
        "label": "교과성적 통계",
        "pg": "원본 10쪽"
       },
       {
        "src": "img/catholic/y25-jm11.webp",
        "label": "면접응시자 합격률",
        "pg": "원본 11쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "잠재능력우수자면접전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 잠재능력우수자면접전형",
      "pages": [
       {
        "src": "img/catholic/p-44.webp",
        "label": "성적분포 산점도",
        "pg": "원본 44쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 잠재능력우수자면접전형",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학교장추천전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합 학교장추천전형 · 약학과·의예과·간호학과만 수록된 자료입니다",
      "pages": [
       {
        "src": "img/catholic/p-51.webp",
        "label": "경쟁률·충족률·교과등급",
        "pg": "원본 51쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합(학교장추천전형)",
      "pages": [
       {
        "src": "img/catholic/y25-hc13.webp",
        "label": "경쟁률·교과성적(특수교육·약학·의예·간호)",
        "pg": "원본 13쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "학교장추천전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합 학교장추천전형 · 약학과·의예과·간호학과만 수록된 자료입니다",
      "pages": [
       {
        "src": "img/catholic/p-52.webp",
        "label": "성적분포 산점도",
        "pg": "원본 52쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부종합(학교장추천전형)",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/catholic/p-59.webp",
        "label": "경쟁률(2023~2026)",
        "pg": "원본 59쪽"
       },
       {
        "src": "img/catholic/p-60.webp",
        "label": "언어·수리논술 경쟁률",
        "pg": "원본 60쪽"
       },
       {
        "src": "img/catholic/p-61.webp",
        "label": "충원율·실질경쟁률",
        "pg": "원본 61쪽"
       },
       {
        "src": "img/catholic/p-62.webp",
        "label": "교과등급(언어논술)",
        "pg": "원본 62쪽"
       },
       {
        "src": "img/catholic/p-63.webp",
        "label": "교과등급(수리논술)",
        "pg": "원본 63쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/catholic/y25-non21.webp",
        "label": "경쟁률·충족·충원",
        "pg": "원본 21쪽"
       },
       {
        "src": "img/catholic/y25-non22.webp",
        "label": "교과성적 통계",
        "pg": "원본 22쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형",
      "pages": [
       {
        "src": "img/catholic/p-64.webp",
        "label": "성적분포 산점도",
        "pg": "원본 64쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술전형",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "수시 전체 전형에 대한 지원·등록 통계",
      "pages": [
       {
        "src": "img/catholic/p-04.webp",
        "label": "전형별 지원현황(3개년)",
        "pg": "원본 4쪽"
       },
       {
        "src": "img/catholic/p-05.webp",
        "label": "지원 고교 현황(6개년)",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/catholic/p-06.webp",
        "label": "지원자 남녀 비율",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/catholic/p-07.webp",
        "label": "고교유형별 비율",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/catholic/p-08.webp",
        "label": "지역별 지원·등록 현황",
        "pg": "원본 8쪽"
       },
       {
        "src": "img/catholic/p-09.webp",
        "label": "지역별 등록 비율",
        "pg": "원본 9쪽"
       },
       {
        "src": "img/catholic/p-10.webp",
        "label": "전형별 지역 점유율",
        "pg": "원본 10쪽"
       },
       {
        "src": "img/catholic/p-11.webp",
        "label": "졸업유형별 현황",
        "pg": "원본 11쪽"
       },
       {
        "src": "img/catholic/p-12.webp",
        "label": "충원·이월 현황",
        "pg": "원본 12쪽"
       },
       {
        "src": "img/catholic/p-31.webp",
        "label": "학생부종합 고교유형별 비율",
        "pg": "원본 31쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "2025 결과자료집 요약",
      "pages": [
       {
        "src": "img/catholic/y25-com4.webp",
        "label": "수시 입시결과 요약(3년 경쟁률·지원 통계)",
        "pg": "원본 4쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "gachon",
  "name": "가천대",
  "years": "2025~2026학년도",
  "source": "[가천대] 2026학년도수시입시결과.xlsx",
  "origin": "가천대학교 입학처 공개 자료 · 원본 엑셀을 서식 그대로 PDF로 변환해 수록 (최종등록자 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부우수자 · 원본 엑셀에서 이 전형의 행만 추려 서식 그대로 변환(논술점수 열 제외)",
      "pages": [
       {
        "src": "img/gachon/f-hakwoo-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/f-hakwoo-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 학생부우수자 · 2025년 엑셀에서 이 전형의 행만 추려 변환",
      "pages": [
       {
        "src": "img/gachon/g25hak-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/g25hak-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 지역균형 · 원본 엑셀에서 이 전형의 행만 추려 서식 그대로 변환(논술점수 열 제외)",
      "pages": [
       {
        "src": "img/gachon/f-jiyun-1.webp",
        "label": "결과표",
        "pg": "필터 변환 1쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 지역균형 · 2025년 엑셀에서 이 전형의 행만 추려 변환",
      "pages": [
       {
        "src": "img/gachon/g25ji-1.webp",
        "label": "결과표 1/1",
        "pg": "필터 변환 1쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "가천바람개비전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 가천바람개비 · 원본 엑셀에서 이 전형의 행만 추려 서식 그대로 변환(논술점수 열 제외)",
      "pages": [
       {
        "src": "img/gachon/f-barame-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/f-barame-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 가천바람개비 · 2025년 엑셀에서 이 전형의 행만 추려 변환",
      "pages": [
       {
        "src": "img/gachon/g25ba-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/g25ba-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술 · 원본 엑셀에서 이 전형의 행만 추려 서식 그대로 변환(논술점수 70%·90% 열 포함)",
      "pages": [
       {
        "src": "img/gachon/f-nonsul-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/f-nonsul-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "doc": "원본 표기: 논술 · 2025년 엑셀에서 이 전형의 행만 추려 변환",
      "pages": [
       {
        "src": "img/gachon/g25non-1.webp",
        "label": "결과표 1/2",
        "pg": "필터 변환 1쪽"
       },
       {
        "src": "img/gachon/g25non-2.webp",
        "label": "결과표 2/2",
        "pg": "필터 변환 2쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "kyonggi",
  "name": "경기대",
  "years": "2025~2026학년도",
  "source": "[경기대] 2026 전형결과 자료(수시,정시).pdf",
  "origin": "경기대학교 입학처 전형결과 안내 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "교과성적우수자전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(교과성적우수자전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-06.webp",
        "label": "결과표",
        "pg": "원본 6쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-gyo6.webp",
        "label": "3개년 지원결과",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/kyonggi/y25-gyo7.webp",
        "label": "3개년 전형결과 CUT",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/kyonggi/y25-gyo8.webp",
        "label": "2025 상세",
        "pg": "원본 8쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "교과성적우수자전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(교과성적우수자전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-07.webp",
        "label": "지원자·합격자 성적 분포도",
        "pg": "원본 7쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-gyo9.webp",
        "label": "지원자·합격자 분포도",
        "pg": "원본 9쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "학교장추천전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(학교장추천전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-08.webp",
        "label": "결과표",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-chu10.webp",
        "label": "3개년 지원결과",
        "pg": "원본 10쪽"
       },
       {
        "src": "img/kyonggi/y25-chu11.webp",
        "label": "3개년 전형결과 CUT",
        "pg": "원본 11쪽"
       },
       {
        "src": "img/kyonggi/y25-chu12.webp",
        "label": "2025 상세",
        "pg": "원본 12쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "학교장추천전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(학교장추천전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-09.webp",
        "label": "지원자·합격자 성적 분포도",
        "pg": "원본 9쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-chu13.webp",
        "label": "지원자·합격자 분포도",
        "pg": "원본 13쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "KGU학생부종합전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(KGU학생부종합전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-14.webp",
        "label": "결과표",
        "pg": "원본 14쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-kgu22.webp",
        "label": "3개년 지원결과",
        "pg": "원본 22쪽"
       },
       {
        "src": "img/kyonggi/y25-kgu23.webp",
        "label": "3개년 전형결과 CUT",
        "pg": "원본 23쪽"
       },
       {
        "src": "img/kyonggi/y25-kgu24.webp",
        "label": "2025 상세",
        "pg": "원본 24쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "KGU학생부종합전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(KGU학생부종합전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-15.webp",
        "label": "지원자·1단계합격자 분포도",
        "pg": "원본 15쪽",
        "dist": true
       },
       {
        "src": "img/kyonggi/p-16.webp",
        "label": "지원자·최종합격자 분포도",
        "pg": "원본 16쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-kgu25.webp",
        "label": "지원자·1단계합격자 분포도",
        "pg": "원본 25쪽",
        "dist": true
       },
       {
        "src": "img/kyonggi/y25-kgu26.webp",
        "label": "지원자·최종합격자 분포도",
        "pg": "원본 26쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SW우수자전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(SW우수자전형) · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/kyonggi/c-sw.webp",
        "label": "결과표",
        "pg": "원본 17쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-sw27.webp",
        "label": "3개년 지원·전형결과·2025 상세",
        "pg": "원본 27쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SW우수자전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(SW우수자전형) · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/kyonggi/c-swdist-b.webp",
        "label": "성적 분포도(1단계·최종)",
        "pg": "원본 18쪽 발췌",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-sw28.webp",
        "label": "분포도(1단계·최종)",
        "pg": "원본 28쪽",
        "dist": true
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-21.webp",
        "label": "결과표",
        "pg": "원본 21쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-non38.webp",
        "label": "2025 경쟁률·상세",
        "pg": "원본 38쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자전형)",
      "pages": [
       {
        "src": "img/kyonggi/p-22.webp",
        "label": "지원자·합격자 성적 분포도",
        "pg": "원본 22쪽",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/kyonggi/y25-non39.webp",
        "label": "지원자·합격자 분포도",
        "pg": "원본 39쪽",
        "dist": true
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "incheon",
  "name": "인천대",
  "years": "2025~2026학년도",
  "source": "[인천대] 2026학년도 수시모집 입학전형 결과.pdf",
  "origin": "인천대학교 입학처 공개 자료 (최종등록자 기준)",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "교과성적우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(교과성적우수자전형)",
      "pages": [
       {
        "src": "img/incheon/p-01.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/incheon/p-02.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/incheon/y25-p1.webp",
        "label": "결과표 1/2",
        "pg": "원본 1쪽"
       },
       {
        "src": "img/incheon/y25-p2.webp",
        "label": "결과표 2/2",
        "pg": "원본 2쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "지역균형전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(지역균형전형)",
      "pages": [
       {
        "src": "img/incheon/p-03.webp",
        "label": "결과표 1/2",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/incheon/p-04.webp",
        "label": "결과표 2/2",
        "pg": "원본 4쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/incheon/y25-p3.webp",
        "label": "결과표 1/2",
        "pg": "원본 3쪽"
       },
       {
        "src": "img/incheon/y25-p4.webp",
        "label": "결과표 2/2",
        "pg": "원본 4쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "자기추천전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(자기추천전형)",
      "pages": [
       {
        "src": "img/incheon/p-07.webp",
        "label": "결과표 1/2",
        "pg": "원본 7쪽"
       },
       {
        "src": "img/incheon/p-08.webp",
        "label": "결과표 2/2",
        "pg": "원본 8쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/incheon/y25-p5.webp",
        "label": "결과표 1/2",
        "pg": "원본 5쪽"
       },
       {
        "src": "img/incheon/y25-p6.webp",
        "label": "결과표 2/2",
        "pg": "원본 6쪽"
       },
       {
        "src": "img/incheon/y25-dist.webp",
        "label": "자기추천전형 분포도",
        "pg": "제공 PNG",
        "dist": true
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "swu",
  "name": "서울여대",
  "years": "2025~2026학년도",
  "source": "[서울여대] 2027학년도 대입틈새전략(입결포함).pdf",
  "origin": "서울여자대학교 2027 대입틈새전략(교사용) 중 전형결과 섹션",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "교과우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과(교과우수자전형/교과우수자전형_체육) · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/swu/c-gyogwa.webp",
        "label": "결과표",
        "pg": "원본 25쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-gyo.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 21쪽"
       },
       {
        "src": "img/swu/y25-gyoc.webp",
        "label": "결과표(체육, 2024~2025)",
        "pg": "원본 22쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "바롬인재서류전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(바롬인재서류전형)",
      "pages": [
       {
        "src": "img/swu/p-21.webp",
        "label": "결과표",
        "pg": "원본 21쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-brs-d.webp",
        "label": "학생부 등급 분포(최종합격자)",
        "pg": "원본 10쪽 발췌",
        "dist": true
       },
       {
        "src": "img/swu/y25-brs-t.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 11쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "바롬인재면접전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(바롬인재면접전형)",
      "pages": [
       {
        "src": "img/swu/p-22.webp",
        "label": "결과표",
        "pg": "원본 22쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-brm-d.webp",
        "label": "학생부 등급 분포(최종합격자)",
        "pg": "원본 12쪽 발췌",
        "dist": true
       },
       {
        "src": "img/swu/y25-brm-t.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 13쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "SW융합인재전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부종합(SW융합인재전형) · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/swu/c-swyung.webp",
        "label": "결과표(합격자 분포 포함)",
        "pg": "원본 23쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-sw-d.webp",
        "label": "학생부 등급 분포(최종합격자)",
        "pg": "원본 15쪽 발췌",
        "dist": true
       },
       {
        "src": "img/swu/y25-sw-t.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 15쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술(논술우수자전형) · 해당 구획만 발췌",
      "pages": [
       {
        "src": "img/swu/c-nonsul.webp",
        "label": "결과표",
        "pg": "원본 25쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-non.webp",
        "label": "결과표(2024~2025)",
        "pg": "원본 24쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "공통",
    "name": "전형 공통 통계",
    "years": [
     {
      "y": "2026",
      "doc": "전형결과 섹션의 총괄 통계",
      "pages": [
       {
        "src": "img/swu/p-19.webp",
        "label": "주요 전형 고교유형별 지원 현황",
        "pg": "원본 19쪽"
       },
       {
        "src": "img/swu/p-20.webp",
        "label": "주요 학생부종합전형 비교",
        "pg": "원본 20쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/swu/y25-com7.webp",
        "label": "전형별 경쟁률 총괄(2024~2025)",
        "pg": "원본 7쪽"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "duksung",
  "name": "덕성여대",
  "years": "2024~2026학년도",
  "source": "[덕성여대] 최근 3개년 입시결과(2024_2026학년도).pdf",
  "origin": "덕성여자대학교 입학처 3개년 입시결과 자료집",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "고교추천전형(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 고교추천전형 · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-go-8.webp",
        "label": "지원 인원·경쟁률(3개년)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/duksung/c-go-12.webp",
        "label": "교과성적·충원율(3개년)",
        "pg": "원본 12쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/duksung/y25-go9.webp",
        "label": "경쟁률·성적(2025 상세)",
        "pg": "원본 9쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부교과",
    "name": "고교추천전형(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 고교추천전형 · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-go-16b.webp",
        "label": "산포도(2026)",
        "pg": "원본 16쪽 발췌",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "덕성인재전형Ⅰ(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 덕성인재전형Ⅰ(서류형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-d1-9.webp",
        "label": "지원 인원·경쟁률(3개년)",
        "pg": "원본 9쪽 발췌"
       },
       {
        "src": "img/duksung/c-d1-13.webp",
        "label": "교과성적·충원율(3개년)",
        "pg": "원본 13쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/duksung/y25-d1.webp",
        "label": "경쟁률·성적(2025 상세)",
        "pg": "원본 10쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "덕성인재전형Ⅰ(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 덕성인재전형Ⅰ(서류형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-d1-16b.webp",
        "label": "산포도(2026)",
        "pg": "원본 16쪽 발췌",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "덕성인재전형Ⅱ(결과표)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 덕성인재전형Ⅱ(서류 및 면접형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-d2-9.webp",
        "label": "지원 인원·경쟁률(3개년)",
        "pg": "원본 9쪽 발췌"
       },
       {
        "src": "img/duksung/c-d2-13.webp",
        "label": "교과성적·충원율(3개년)",
        "pg": "원본 13쪽 발췌"
       },
       {
        "src": "img/duksung/c-d2-14.webp",
        "label": "서류·면접평가 상세(전형명 미표기, 문맥상 추정)",
        "pg": "원본 14쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/duksung/y25-d2a.webp",
        "label": "경쟁률(2025 상세)",
        "pg": "원본 10쪽 발췌"
       },
       {
        "src": "img/duksung/y25-d2b.webp",
        "label": "성적(2025 상세)",
        "pg": "원본 11쪽 발췌"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "덕성인재전형Ⅱ(분포도)",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 덕성인재전형Ⅱ(서류 및 면접형) · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-d2-16b.webp",
        "label": "산포도(2026)",
        "pg": "원본 16쪽 발췌",
        "dist": true
       }
      ]
     },
     {
      "y": "2025",
      "pages": [],
      "reason": "2025년 발행 자료에는 이 유형의 자료가 없습니다."
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술전형 · 해당 표만 발췌",
      "pages": [
       {
        "src": "img/duksung/c-non-11.webp",
        "label": "지원 인원·경쟁률(3개년)",
        "pg": "원본 11쪽 발췌"
       },
       {
        "src": "img/duksung/c-non-17.webp",
        "label": "성적·충원율(3개년)",
        "pg": "원본 17쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/duksung/y25-non.webp",
        "label": "경쟁률·성적(2025 상세)",
        "pg": "원본 14쪽 발췌"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "dongduk",
  "name": "동덕여대",
  "years": "2025~2026학년도",
  "source": "[동덕여대] 2026학년도_동덕여자대학교_입학전형결과_수시모집(260526).pdf",
  "origin": "동덕여자대학교 입학처 공개 자료",
  "tracks": [
   {
    "type": "학생부교과",
    "name": "학생부교과우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 학생부교과우수자 · 통합표에서 해당 전형 열만 발췌",
      "pages": [
       {
        "src": "img/dongduk/c-gyo-8c.webp",
        "label": "모집인원·경쟁률(2026)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/c-gyo-10c.webp",
        "label": "충원합격 순위(2026)",
        "pg": "원본 10쪽 발췌"
       },
       {
        "src": "img/dongduk/p-12.webp",
        "label": "반영교과·최저기준(2027 변경)",
        "pg": "원본 12쪽"
       },
       {
        "src": "img/dongduk/p-13.webp",
        "label": "경쟁률·합격자 평균성적·충원",
        "pg": "원본 13쪽"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongduk/y25b-gyo.webp",
        "label": "모집인원·경쟁률(2025)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/y25b-w10.webp",
        "label": "충원합격 순위(2025)",
        "pg": "원본 10쪽",
        "note": "충원 표는 여러 전형이 한 표에 있습니다."
       },
       {
        "src": "img/dongduk/y25b-gyo11.webp",
        "label": "합격자 교과성적(2025)",
        "pg": "원본 11쪽"
       }
      ]
     }
    ]
   },
   {
    "type": "학생부종합",
    "name": "동덕창의리더전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 동덕창의리더 · 통합표에서 해당 전형 열만 발췌",
      "pages": [
       {
        "src": "img/dongduk/c-chang-8c.webp",
        "label": "모집인원·경쟁률(2026)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/c-chang-10c.webp",
        "label": "충원합격 순위(2026)",
        "pg": "원본 10쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongduk/y25b-chang.webp",
        "label": "모집인원·경쟁률(2025)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/y25b-w10.webp",
        "label": "충원합격 순위(2025)",
        "pg": "원본 10쪽",
        "note": "충원 표는 여러 전형이 한 표에 있습니다."
       }
      ]
     }
    ]
   },
   {
    "type": "논술",
    "name": "논술우수자전형",
    "years": [
     {
      "y": "2026",
      "doc": "원본 표기: 논술우수자 · 통합표에서 해당 전형 열만 발췌",
      "pages": [
       {
        "src": "img/dongduk/c-non-8c.webp",
        "label": "모집인원·경쟁률(2026)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/c-non-10c.webp",
        "label": "충원합격 순위(2026)",
        "pg": "원본 10쪽 발췌"
       }
      ]
     },
     {
      "y": "2025",
      "pages": [
       {
        "src": "img/dongduk/y25b-non.webp",
        "label": "모집인원·경쟁률(2025)",
        "pg": "원본 8쪽 발췌"
       },
       {
        "src": "img/dongduk/y25b-w10.webp",
        "label": "충원합격 순위(2025)",
        "pg": "원본 10쪽",
        "note": "충원 표는 여러 전형이 한 표에 있습니다."
       }
      ]
     }
    ]
   }
  ]
 }
];
