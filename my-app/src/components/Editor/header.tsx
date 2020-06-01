import React from "react";
import Container from "@material-ui/core/Container";
import { EditorHeader } from "./editorHeader";
import { Paper } from "@material-ui/core";

function EditorSelector() {
  return (
    <Container>
      <Paper>
        <EditorHeader />
      </Paper>
    </Container>
  );
}

export default EditorSelector;
