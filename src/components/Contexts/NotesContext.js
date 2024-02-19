import { create } from "@mui/material/styles/createTransitions";
import {createContext} from "react";
import React from 'react';

const NotesContext = React.createContext({
  addNote: () => {}, // default empty function
});

export default NotesContext;