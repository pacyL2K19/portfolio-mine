import React from "react";
import { theme } from "../../core/theme";
import { Col, Row } from "react-bootstrap";

interface Props {
    SkillsItems: string[]
}
const Skills: React.FC<Props> = (props: Props) => {
    return (
        <Row style={{ display: "flex", flexDirection: "row"}}>
            {
                props.SkillsItems.map(skill => (
                    <Col
                        sm={"3"}
                        xs={"3"}
                        md={"3"}
                        lg={"3"}
                        key={skill}
                        style={{
                            padding: 5,
                            border: "1px solid #ff7b00",
                            margin: 10,
                            color: theme.colors?.main,
                        }}
                    >
                        {skill}
                    </Col>
                ))
            }
        </Row>
    );
};

export default Skills;