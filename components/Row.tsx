import styled, { system } from "@xstyled/emotion";

const StyledRow = styled.divBox`
    ${system.apply({
        row: true,
    })}

    ${(props) => `
                  > div {
                      padding: ${props.m.toString().replace("-", "")};
                  }
              `}
`;

function Row(props) {
    return <StyledRow m="-4" {...props} />;
}

export default Row;
