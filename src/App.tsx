import { useState } from "react";
import "./App.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTranslateTextMutation } from "./api";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

function App() {
  const [translateText] = useTranslateTextMutation();

  const handleTranslate = async () => {
    try {
      await translateText({
        text: "Как дела?",
        direction: "rus-dar",
      });
    } catch (err) {
      console.error("Ошибка при переводе:", err);
    }
  };

  return (
    <Stack>
      <Typography
        variant="h3"
        component="h1"
        sx={{ width: "100%", textAlign: "center", my: 4, color: "grey.600" }}
      >
        Переводчик Русско-Даргинский
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="outlined-textarea-1"
          label="Русский"
          placeholder="Русский"
          multiline
          rows={10}
          variant="outlined"
          sx={{
            width: "100%",
            margin: 2,
          }}
        />
        <Box display="flex" flexDirection="column">
          <Button
            onClick={() => {
              console.log("Иконка с двумя стрелками была нажата.");
            }}
            variant="outlined"
            sx={{
              margin: 2,
            }}
          >
            <CompareArrowsIcon />
          </Button>
          <Button
            onClick={handleTranslate}
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
            }}
          >
            Перевести
          </Button>
        </Box>
        <TextField
          id="outlined-textarea-2"
          label="Даргинский"
          placeholder="Даргинский"
          multiline
          rows={10}
          variant="outlined"
          sx={{
            width: "100%",
            margin: 2,
          }}
        />
      </Box>
    </Stack>
  );
}

export default App;
