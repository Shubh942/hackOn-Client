import { Accordion, Card } from "react-bootstrap/";
import ContextAwareToggle from "./ContextAwareToggle";
import faqData from "../../json/faqs.json";
import "./faqAccordion.scss";

const FaqAccordion = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {faqData.map((data) => (
          <Card key={data.id}>
            <Card.Header className="d-flex p-0">
              <ContextAwareToggle eventKey={data.id}>
                {data.header}
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={data.id}>
              <Card.Body>{data.body}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
};

export default FaqAccordion;
