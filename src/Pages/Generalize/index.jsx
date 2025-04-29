// GeneralizedTable.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Generalized Table (Fixed Columns)
const GeneralizedTable = ({ columns, data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  generalized-dynamic-table


main
  return (
    <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold', fontSize: isMobile ? '12px' : '16px' }}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex} sx={{ fontSize: isMobile ? '12px' : '16px' }}>
                  {row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GeneralizedTable;
