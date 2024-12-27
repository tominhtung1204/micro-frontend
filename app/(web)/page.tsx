import ActionBox from "./components/action-box";
import ArticleBlog from "./components/article-blog";
import HomeBanner from "./components/banner";
import CaseStudy from "./components/case-study";
import Clients from "./components/clients";
import CompanyCategory from "./components/company-category";
import CompanyHistory from "./components/company-history";
import ElementCounter from "./components/element-counter";
import CompanyService from "./components/services";
import Testimonial from "./components/testimonial";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Clients />
      <CompanyCategory />
      <CaseStudy />
      <CompanyHistory />
      <CompanyService />
      <Testimonial />
      <ElementCounter />
      <ArticleBlog />
      <ActionBox />
    </>
  );
}
