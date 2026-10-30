# 변호진 기술 포트폴리오

GitHub Pages에서 제공할 수 있는 정적 웹사이트입니다. 별도 빌드나 Node.js 의존성이 없습니다.

## 페이지

- `index.html`: 소개와 프로젝트 목록
- `daepa.html`: 대파 AWS 아키텍처, 담당 범위와 설계 선택, 배포 흐름
- `cost.html`: 회사 전체 AWS 비용 최적화 사례
- `tools.html`: 사내 운영 도구 개발 경험
- `assets/`: 스타일, 스크립트, AWS 공식 아이콘을 적용한 아키텍처 이미지

## GitHub Pages 배포

1. `hoby65535.github.io` 이름의 저장소를 만듭니다. GitHub Free 계정에서는 공개 저장소가 필요합니다.
2. ZIP의 **내용물**을 저장소 최상위에 올립니다. `index.html`, `assets/`와 `.github/workflows/pages.yml`이 최상위 기준 경로에 있어야 합니다. `.github` 폴더도 포함해야 합니다.
3. 기본 브랜치가 `main`인지 확인합니다. 다른 이름이면 `pages.yml`의 `branches`를 실제 이름으로 바꿉니다.
4. 저장소 Settings → Pages → Build and deployment → Source를 `GitHub Actions`로 선택합니다.
5. Actions에서 `Deploy portfolio to GitHub Pages` → Run workflow를 실행합니다. 이후 `main`에 push하면 자동 배포합니다.
6. Actions 배포 작업이 성공하면 작업에 표시되는 사이트 URL로 접속합니다.

사용자 사이트 저장소가 아니라 일반 프로젝트 저장소에도 배포할 수 있습니다. HTML과 자산 경로는 상대 경로를 사용합니다.

## 로컬 실행

Python이 설치된 환경에서 다음을 실행한 뒤 출력되는 주소를 엽니다.

```sh
python3 -m http.server 8000
```

## 내용 업데이트

내용은 각 HTML에서, 디자인은 `assets/style.css`에서 수정합니다. 아키텍처 이미지는 `assets/daepa-architecture.png`를 교체합니다.

구축·배포·운영 경험과 비용 수치는 본인이 제공한 내용을 바탕으로 작성했습니다. 비교 기간, 개별 조치별 절감액, 장애 사례 및 정량 측정값을 임의로 추가하지 않았습니다. 추가로 확인한 장애 사례가 있다면 증상 → 원인 확인 → 조치 → 결과 순서로 상세 페이지에 추가할 수 있습니다.

## 아키텍처 출처와 확인 범위

- 아이콘: [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/), AWS 공식 2026년 7월 패키지
- 구성도는 회고 기반 논리 구성도입니다. MQ 작업 전달 점선은 당시 자료로 추가 확인이 필요합니다.
- MQ·Redis 노드의 AZ별 배치와 OpenSearch의 네트워크 모드는 미확정입니다.
- S3 Endpoint 유형 및 캐시·Lambda@Edge 이벤트 세부 설정은 확정하지 않았습니다.

## 배포 전 검토

프로젝트명, 아키텍처와 비용 정보를 공개할 수 있는지 확인한 뒤 배포합니다. 계정 ID, 내부 도메인, IP, 자격증명, 고객 데이터와 개인 이메일은 포함하지 않았습니다.

GitHub Actions workflow는 [GitHub 공식 static Pages 템플릿](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)을 바탕으로 구성했습니다.
