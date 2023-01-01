import React, { useState, useEffect } from "react";
import axios from "axios";
import cors from 'cors';

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export default api;