import React, { useState, useEffect } from 'react';
import './Comments.css';

// THIS DATE CALCULATOR IS FOR THE DATE OF THE COMMENTS

export const dateCalculator = (created) => {
  const currentDate = Date.now();
  const postDate = new Date(created * 1000);
  const dateDifferenceInTime = currentDate - postDate;

  const dateDifferenceInMonths = dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
  const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
  const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
  const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);

  const timeUnits = [
    { condition: dateDifferenceInMonths > 12, text: "more than a year ago" },
    { condition: dateDifferenceInMonths >= 1, text: Math.round(dateDifferenceInMonths) + " months ago" },
    { condition: dateDifferenceInDays >= 1, text: Math.round(dateDifferenceInDays) + " days ago" },
    { condition: dateDifferenceInHours >= 1, text: Math.round(dateDifferenceInHours) + " hours ago" },
    { condition: dateDifferenceInMinutes >= 1, text: Math.round(dateDifferenceInMinutes) + " minutes ago" },
    { condition: true, text: "less than a minute ago" },
  ];

  const { text } = timeUnits.find((unit) => unit.condition);
  return text;
};

