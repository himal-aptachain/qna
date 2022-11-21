import logo from "./logo.svg";
// import './App.css';
import React, { useState, useRef, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  let [qno, setQno] = useState(1);
  const [count, setCount] = useState(0);
  const [tTime, setTTime] = useState(0);
  const [firstClick, setFirstClick] = useState(true);
  const [ans, setAns] = useState("");
  const [skip, setSkip] = useState(false);
  const [rows, setRows] = useState([]);
  const [ambiguity, setAmbiguity] = useState(-1);
  useEffect(() => {
      for (let i = 1; i <= 120; i++) {
        console.log(i);
        rows.concat({
          qno: i,
          fTime: count,
          tTime: tTime,
          firstClick: firstClick,
          ans: ans,
          skip: skip,
          ambiguity: ambiguity,
        });
      } 
  },[])

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  function onSubmit() {
    let temp = rows;
    temp[qno] = createData(qno, tTime, count, ans, skip, ambiguity);
    setRows(temp);
    resetValues();
  }

  function resetValues() {
    setQno((oldQno) => oldQno + 1);
    setTTime(0);
    setCount(0);
    setFirstClick(true);
    setAmbiguity(-1);
    setSkip(false);
    setAns("");
  }

  function onSkip() {
    setSkip(true);
    setRows(rows.concat(createData(qno, tTime, count, ans, skip, ambiguity)));
    resetValues();
  }

  function createData(qno, tTime, fTime, ans, skip, ambiguity) {
    return { qno, tTime, fTime, ans, skip, ambiguity };
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{count}</h2>
        <h3>Question number {qno}</h3>
        <p>This is a mock Question?</p>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={ans}
            name="radio-buttons-group"
            onChange={(event) => {
              if (firstClick) {
                setTTime(count + 1);
                setFirstClick(false);
              }
              setAmbiguity(ambiguity + 1);
              setAns(event.target.value);
            }}
          >
            <FormControlLabel
              value="Option1"
              control={<Radio />}
              label="Option1"
              checked={ans === "Option1"}
            />
            <FormControlLabel
              value="Option2"
              control={<Radio />}
              label="Option2"
              checked={ans === "Option2"}
            />
            <FormControlLabel
              value="Option3"
              control={<Radio />}
              label="Option3"
              checked={ans === "Option3"}
            />
            <FormControlLabel
              value="Option4"
              control={<Radio />}
              label="Option4"
              checked={ans === "Option4"}
            />
          </RadioGroup>
        </FormControl>
        <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
          <Button variant="outlined" onClick={onSkip}>
            Skip
          </Button>
          <Button variant="outlined" onClick={onSubmit}>
            Submit
          </Button>
        </Stack>
      </header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Qno</TableCell>
              <TableCell align="right">tTime</TableCell>
              <TableCell align="right">fTime</TableCell>
              <TableCell align="right">ans</TableCell>
              <TableCell align="right">skip</TableCell>
              <TableCell align="right">ambiguity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.qno}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.qno}
                </TableCell>
                <TableCell align="right">{row.tTime}</TableCell>
                <TableCell align="right">{row.fTime}</TableCell>
                <TableCell align="right">{row.ans}</TableCell>
                <TableCell align="right">{String(row.skip)}</TableCell>
                <TableCell align="right">{String(row.ambiguity)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      {/* <Card sx={{ minWidth: 275 }}> */}
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={question.no}></ImageListItem>
        ))}
      </ImageList> */}
      {/* </Card> */}
    </div>
  );
}

function Main() {
  return <div>App</div>;
}
